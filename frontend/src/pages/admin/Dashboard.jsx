import { useState } from 'react';
import './Admin.css';

const STATS = [
    { label: 'Total Students', value: '12,480', change: '+8.2%', up: true, icon: '📚', color: '#6366f1' },
    { label: 'Total Teachers', value: '384', change: '+3.1%', up: true, icon: '🎓', color: '#8b5cf6' },
    { label: 'Active Sessions', value: '47', change: '+12%', up: true, icon: '🎯', color: '#06b6d4' },
    { label: 'Revenue (Mo.)', value: '₹2.4L', change: '+18.5%', up: true, icon: '💰', color: '#10b981' },
];

const RECENT_USERS = [
    { id: 1, name: 'Priya Sharma', email: 'priya@email.com', role: 'student', status: 'active', joined: 'Aug 1, 2026' },
    { id: 2, name: 'Rahul Verma', email: 'rahul@email.com', role: 'teacher', status: 'active', joined: 'Jul 30, 2026' },
    { id: 3, name: 'Anita Joshi', email: 'anita@email.com', role: 'student', status: 'inactive', joined: 'Jul 28, 2026' },
    { id: 4, name: 'Suresh Patel', email: 'suresh@email.com', role: 'teacher', status: 'active', joined: 'Jul 25, 2026' },
    { id: 5, name: 'Meera Nair', email: 'meera@email.com', role: 'student', status: 'active', joined: 'Jul 22, 2026' },
];

const RECENT_SESSIONS = [
    { id: 1, title: 'React Advanced Hooks', teacher: 'Rahul Verma', students: 18, status: 'live', time: 'Now' },
    { id: 2, title: 'Python Data Science', teacher: 'Suresh Patel', students: 24, status: 'live', time: 'Now' },
    { id: 3, title: 'UI/UX Fundamentals', teacher: 'Anita Joshi', students: 12, status: 'upcoming', time: '4:30 PM' },
    { id: 4, title: 'MERN Stack Deep Dive', teacher: 'Rahul Verma', students: 31, status: 'completed', time: '2:00 PM' },
];

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <div className="admin-page">
            <div className="admin-page__header">
                <div>
                    <h2 className="admin-page__title">Dashboard</h2>
                    <p className="admin-page__subtitle">Welcome back, Ayush — here's what's happening today.</p>
                </div>
                <div className="admin-header-actions">
                    <span className="admin-date-badge">📅 Aug 4, 2026</span>
                </div>
            </div>

            {/* Stats */}
            <div className="admin-stats-grid">
                {STATS.map((s) => (
                    <div className="stat-card" key={s.label} style={{ '--accent': s.color }}>
                        <div className="stat-card__icon">{s.icon}</div>
                        <div className="stat-card__body">
                            <span className="stat-card__label">{s.label}</span>
                            <span className="stat-card__value">{s.value}</span>
                            <span className={`stat-card__change${s.up ? ' stat-card__change--up' : ' stat-card__change--down'}`}>
                                {s.up ? '↑' : '↓'} {s.change} this month
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Two-col grid */}
            <div className="admin-two-col">
                {/* Recent Users */}
                <div className="admin-card">
                    <div className="admin-card__head">
                        <h3 className="admin-card__title">Recent Users</h3>
                        <a href="/admin/users" className="admin-card__link">View all →</a>
                    </div>
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Joined</th>
                            </tr>
                        </thead>
                        <tbody>
                            {RECENT_USERS.map((u) => (
                                <tr key={u.id}>
                                    <td>
                                        <div className="admin-table__user">
                                            <div className="admin-table__avatar" style={{ background: stringToColor(u.name) }}>
                                                {u.name[0]}
                                            </div>
                                            <div>
                                                <div className="admin-table__uname">{u.name}</div>
                                                <div className="admin-table__uemail">{u.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span className={`role-badge role-badge--${u.role}`}>{u.role}</span></td>
                                    <td><span className={`status-dot status-dot--${u.status}`}>{u.status}</span></td>
                                    <td className="admin-table__muted">{u.joined}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Active Sessions */}
                <div className="admin-card">
                    <div className="admin-card__head">
                        <h3 className="admin-card__title">Live & Upcoming Sessions</h3>
                        <a href="/admin/sessions" className="admin-card__link">View all →</a>
                    </div>
                    <div className="session-list">
                        {RECENT_SESSIONS.map((s) => (
                            <div className="session-item" key={s.id}>
                                <div className="session-item__left">
                                    <div className={`session-item__indicator session-item__indicator--${s.status}`}></div>
                                    <div>
                                        <div className="session-item__title">{s.title}</div>
                                        <div className="session-item__meta">by {s.teacher} · {s.students} students</div>
                                    </div>
                                </div>
                                <div className="session-item__right">
                                    <span className={`session-badge session-badge--${s.status}`}>{s.status}</span>
                                    <span className="session-item__time">{s.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

function stringToColor(str) {
    const colors = ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444', '#ec4899'];
    let hash = 0;
    for (let i = 0; i < str.length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash);
    return colors[Math.abs(hash) % colors.length];
}

export default AdminDashboard;
