const authQueries = {
  createUsersTable: `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE,
      password_hash VARCHAR(255) NOT NULL,
      role VARCHAR(20) NOT NULL CHECK (role IN ('teacher', 'student', 'parent')),
      phone VARCHAR(20) UNIQUE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      CHECK (email IS NOT NULL OR phone IS NOT NULL)
    );
  `,

  createTeacherProfilesTable: `
    CREATE TABLE IF NOT EXISTS teacher_profiles (
      id SERIAL PRIMARY KEY,
      user_id INTEGER UNIQUE REFERENCES users(id) ON DELETE CASCADE,
      subject VARCHAR(255),
      qualification TEXT,
      experience_years INTEGER DEFAULT 0
    );
  `,

  createStudentProfilesTable: `
    CREATE TABLE IF NOT EXISTS student_profiles (
      id SERIAL PRIMARY KEY,
      user_id INTEGER UNIQUE REFERENCES users(id) ON DELETE CASCADE,
      grade VARCHAR(50),
      date_of_birth DATE,
      school VARCHAR(255),
      address TEXT
    );
  `,

  createParentStudentLinksTable: `
    CREATE TABLE IF NOT EXISTS parent_student_links (
      id SERIAL PRIMARY KEY,
      parent_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
      student_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
      relationship VARCHAR(50) DEFAULT 'parent',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(parent_id, student_id)
    );
  `,

  findByEmail: 'SELECT * FROM users WHERE email = $1;',
  findByPhone: 'SELECT * FROM users WHERE phone = $1;',
  findByEmailAndRole: 'SELECT * FROM users WHERE email = $1 AND role = $2;',
  findByPhoneAndRole: 'SELECT * FROM users WHERE phone = $1 AND role = $2;',
  findById: 'SELECT id, name, email, role, phone, created_at FROM users WHERE id = $1;',

  createUser: `
    INSERT INTO users (name, email, password_hash, role, phone)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING id, name, email, role, phone, created_at;
  `,

  createTeacherProfile: `
    INSERT INTO teacher_profiles (user_id, subject, qualification, experience_years)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `,

  createStudentProfile: `
    INSERT INTO student_profiles (user_id, grade, date_of_birth, school, address)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `,

  createParentStudentLink: `
    INSERT INTO parent_student_links (parent_id, student_id, relationship)
    VALUES ($1, $2, $3)
    RETURNING *;
  `,

  getTeacherProfile: `
    SELECT u.id, u.name, u.email, u.phone, u.role, u.created_at,
           tp.subject, tp.qualification, tp.experience_years
    FROM users u
    LEFT JOIN teacher_profiles tp ON u.id = tp.user_id
    WHERE u.id = $1 AND u.role = 'teacher';
  `,

  getStudentProfile: `
    SELECT u.id, u.name, u.email, u.phone, u.role, u.created_at,
           sp.grade, sp.date_of_birth, sp.school, sp.address
    FROM users u
    LEFT JOIN student_profiles sp ON u.id = sp.user_id
    WHERE u.id = $1 AND u.role = 'student';
  `,

  getParentWithStudents: `
    SELECT u.id, u.name, u.email, u.phone, u.role, u.created_at,
           json_agg(
             json_build_object(
               'id', s.id,
               'name', s.name,
               'email', s.email,
               'grade', sp.grade,
               'school', sp.school,
               'relationship', psl.relationship
             )
           ) FILTER (WHERE s.id IS NOT NULL) AS students
    FROM users u
    LEFT JOIN parent_student_links psl ON u.id = psl.parent_id
    LEFT JOIN users s ON psl.student_id = s.id
    LEFT JOIN student_profiles sp ON s.id = sp.user_id
    WHERE u.id = $1 AND u.role = 'parent'
    GROUP BY u.id;
  `
};

module.exports = authQueries;
