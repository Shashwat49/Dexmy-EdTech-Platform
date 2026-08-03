import { Outlet } from 'react-router-dom';

const TeacherLayout = () => {
    return (
        <div className="teacher-layout">
            <Outlet />
        </div>
    );
};

export default TeacherLayout;
