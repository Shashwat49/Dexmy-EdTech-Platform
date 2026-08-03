import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import './index.css';

const App = () => {
    // TODO: Replace with real auth state from context
    const isAuthenticated = false;
    const userRole = null;

    return (
        <BrowserRouter>
            <AppRoutes isAuthenticated={isAuthenticated} userRole={userRole} />
        </BrowserRouter>
    );
};

export default App;
