import { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import './AdminLayout.css';

const NAV_ITEMS = [
    { to: '/admin', label: 'Dashboard', icon: '⚡', end: true },
    { to: '/admin/users', label: 'Users', icon: '👥' },
    { to: '/admin/teachers', label: 'Teachers', icon: '🎓' },
    { to: '/admin/students', label: 'Students', icon: '📚' },
    { to: '/admin/courses', label: 'Courses', icon: '🗂️' },
    { to: '/admin/sessions', label: 'Sessions', icon: '🎯' },
    { to: '/admin/bookings', label: 'Bookings', icon: '📅' },
    { to: '/admin/payments', label: 'Payments', icon: '💳' },
    { to: '/admin/analytics', label: 'Analytics', icon: '📊' },
    { to: '/admin/settings', label: 'Settings', icon: '⚙️' },
];

const AdminLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();

    return (
        <div className={`admin-shell${collapsed ? ' admin-shell--collapsed' : ''}`}>
            {/* Sidebar */}
            <aside className="admin-sidebar">
                <div className="admin-sidebar__brand">
                    <span className="admin-sidebar__logo">D</span>
                    {!collapsed && <span className="admin-sidebar__name">Dexmy <em>Admin</em></span>}
                </div>

                <nav className="admin-sidebar__nav">
                    {NAV_ITEMS.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            end={item.end}
                            className={({ isActive }) =>
                                `admin-nav-item${isActive ? ' admin-nav-item--active' : ''}`
                            }
                        >
                            <span className="admin-nav-item__icon">{item.icon}</span>
                            {!collapsed && <span className="admin-nav-item__label">{item.label}</span>}
                        </NavLink>
                    ))}
                </nav>

                <div className="admin-sidebar__footer">
                    <button className="admin-sidebar__collapse-btn" onClick={() => setCollapsed(!collapsed)}>
                        {collapsed ? '→' : '←'}
                    </button>
                </div>
            </aside>

            {/* Main */}
            <div className="admin-main">
                <header className="admin-topbar">
                    <div className="admin-topbar__left">
                        <h1 className="admin-topbar__title">Admin Panel</h1>
                    </div>
                    <div className="admin-topbar__right">
                        <div className="admin-topbar__badge">
                            <span className="admin-topbar__badge-dot"></span>
                            Live
                        </div>
                        <div className="admin-topbar__avatar" onClick={() => navigate('/admin/settings')}>A</div>
                    </div>
                </header>
                <main className="admin-content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
