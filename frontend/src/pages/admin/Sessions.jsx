import { useState } from 'react';
import './Admin.css';

const MOCK_SESSIONS = [
    { id: 1, title: 'React Advanced Hooks', teacher: 'Rahul Verma', subject: 'Web Dev', students: 18, status: 'live', date: 'Aug 4, 2026', time: '4:00 PM', duration: '60 min' },
    { id: 2, title: 'Python Data Science', teacher: 'Suresh Patel', subject: 'Data Science', students: 24, status: 'live', date: 'Aug 4, 2026', time: '3:30 PM', duration: '90 min' },
    { id: 3, title: 'UI/UX Fundamentals', teacher: 'Anita Joshi', subject: 'Design', students: 12, status: 'upcoming', date: 'Aug 4, 2026', time: '4:30 PM', duration: '60 min' },
    { id: 4, title: 'MERN Stack Deep Dive', teacher: 'Rahul Verma', subject: 'Web Dev', students: 31, status: 'completed', date: 'Aug 4, 2026', time: '2:00 PM', duration: '90 min' },
    { id: 5, title: 'Docker & Kubernetes', teacher: 'Vikram Singh', subject: 'DevOps', students: 22, status: 'upcoming', date: 'Aug 5, 2026', time: '10:00 AM', duration: '120 min' },
    { id: 6, title: 'Flutter Crash Course', teacher: 'Pooja Reddy', subject: 'Mobile', students: 15, status: 'completed', date: 'Aug 3, 2026', time: '11:00 AM', duration: '60 min' },
];

const STATUSES = ['all', 'live', 'upcoming', 'completed'];

const AdminSessions = () => {
    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState('');

    const sessions = MOCK_SESSIONS.filter(s => {
        const mf = filter === 'all' || s.status === filter;
        const ms = s.title.toLowerCase().includes(search.toLowerCase()) ||
            s.teacher.toLowerCase().includes(search.toLowerCase());
        return mf && ms;
    });

    return (
        <div className="admin-page">
            <div className="admin-page__header">
                <div>
                    <h2 className="admin-page__title">Sessions</h2>
                    <p className="admin-page__subtitle">
                        {MOCK_SESSIONS.filter(s => s.status === 'live').length} live · {MOCK_SESSIONS.filter(s => s.status === 'upcoming').length} upcoming
                    </p>
                </div>
                <button className="admin-btn admin-btn--primary">+ Schedule Session</button>
            </div>

            <div className="admin-card">
                <div className="admin-table-toolbar">
                    <div className="admin-search-box">
                        <span className="admin-search-icon">🔍</span>
                        <input placeholder="Search sessions or teachers..." value={search} onChange={e => setSearch(e.target.value)} />
                    </div>
                    <div className="admin-filter-tabs">
                        {STATUSES.map(s => (
                            <button key={s} className={`admin-filter-tab${filter === s ? ' admin-filter-tab--active' : ''}`} onClick={() => setFilter(s)}>
                                {s.charAt(0).toUpperCase() + s.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                <table className="admin-table">
                    <thead><tr>
                        <th>Session</th>
                        <th>Teacher</th>
                        <th>Students</th>
                        <th>Date & Time</th>
                        <th>Duration</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr></thead>
                    <tbody>
                        {sessions.map(s => (
                            <tr key={s.id}>
                                <td>
                                    <div>
                                        <div className="admin-table__uname">{s.title}</div>
                                        <div className="admin-table__uemail">{s.subject}</div>
                                    </div>
                                </td>
                                <td style={{ color: '#94a3b8' }}>{s.teacher}</td>
                                <td style={{ color: '#c7d2fe', fontWeight: 600 }}>{s.students} 👤</td>
                                <td className="admin-table__muted">{s.date} · {s.time}</td>
                                <td style={{ color: '#94a3b8' }}>{s.duration}</td>
                                <td><span className={`session-badge session-badge--${s.status}`}>{s.status}</span></td>
                                <td>
                                    <div className="admin-table__actions">
                                        {s.status === 'live' && (
                                            <button className="admin-btn admin-btn--primary admin-btn--sm">Join</button>
                                        )}
                                        <button className="admin-btn admin-btn--outline admin-btn--sm">Details</button>
                                        <button className="admin-btn admin-btn--danger admin-btn--sm">Cancel</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminSessions;
