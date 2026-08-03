import { Outlet } from 'react-router-dom';

const ClassroomLayout = () => {
    return (
        <div className="classroom-layout">
            <Outlet />
        </div>
    );
};

export default ClassroomLayout;
