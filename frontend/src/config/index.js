const config = {
    apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
    socketUrl: import.meta.env.VITE_SOCKET_URL || 'http://localhost:3000',
    appName: import.meta.env.VITE_APP_NAME || 'Dexmy EdTech',
    env: import.meta.env.MODE || 'development',
    isProd: import.meta.env.PROD || false,
};

export default config;
