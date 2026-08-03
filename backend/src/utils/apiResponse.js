class ApiResponse {
  constructor(success, data, error) {
    this.success = success;
    this.data = data || null;
    this.error = error || null;
  }

  static ok(data) { return new ApiResponse(true, data); }
  static fail(err) { return new ApiResponse(false, null, err); }
}

module.exports = ApiResponse;
