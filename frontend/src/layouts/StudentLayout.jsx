import { Outlet } from 'react-router-dom';

const StudentLayout = () => {
    return (
        <div className="student-layout">
            <Outlet />
        </div>
    );
};

export default StudentLayout;
