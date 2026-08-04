import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import './index.css';

const App = () => {
    // TODO: Replace with real auth state from AuthContext
    // For dev: set isAuthenticated=true, userRole='admin' to preview Admin panel
    //         set userRole='classroom-preview' then visit /classroom/1 directly
    const isAuthenticated = true;
    const userRole = 'admin';

    return (
        <BrowserRouter>
            <AppRoutes isAuthenticated={isAuthenticated} userRole={userRole} />
        </BrowserRouter>
    );
};

export default App;
