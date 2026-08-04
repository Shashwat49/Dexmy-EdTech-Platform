import { useState } from 'react';
import './Admin.css';

const MOCK_TEACHERS = [
    { id: 1, name: 'Rahul Verma', email: 'rahul@email.com', subject: 'Web Development', students: 142, rating: 4.9, sessions: 38, status: 'active', joined: 'Mar 10, 2026' },
    { id: 2, name: 'Suresh Patel', email: 'suresh@email.com', subject: 'Data Science', students: 211, rating: 4.8, sessions: 57, status: 'active', joined: 'Feb 5, 2026' },
    { id: 3, name: 'Anita Joshi', email: 'anita@email.com', subject: 'UI/UX Design', students: 89, rating: 4.7, sessions: 24, status: 'inactive', joined: 'Apr 18, 2026' },
    { id: 4, name: 'Vikram Singh', email: 'vikram@email.com', subject: 'DevOps', students: 67, rating: 4.6, sessions: 19, status: 'active', joined: 'May 2, 2026' },
    { id: 5, name: 'Pooja Reddy', email: 'pooja@email.com', subject: 'Mobile Dev', students: 124, rating: 4.5, sessions: 33, status: 'active', joined: 'Jun 1, 2026' },
];

function ac(n) {
    const c = ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'];
    let h = 0; for (let i = 0; i < n.length; i++) h = n.charCodeAt(i) + ((h << 5) - h);
    return c[Math.abs(h) % c.length];
}

const AdminTeachers = () => {
    const [search, setSearch] = useState('');
    const teachers = MOCK_TEACHERS.filter(t =>
        t.name.toLowerCase().includes(search.toLowerCase()) ||
        t.subject.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="admin-page">
            <div className="admin-page__header">
                <div>
                    <h2 className="admin-page__title">Teachers</h2>
                    <p className="admin-page__subtitle">{MOCK_TEACHERS.length} instructors on the platform</p>
                </div>
                <button className="admin-btn admin-btn--primary">+ Invite Teacher</button>
            </div>

            <div className="admin-card">
                <div className="admin-table-toolbar">
                    <div className="admin-search-box">
                        <span className="admin-search-icon">🔍</span>
                        <input placeholder="Search teachers or subjects..." value={search} onChange={e => setSearch(e.target.value)} />
                    </div>
                </div>

                <table className="admin-table">
                    <thead><tr>
                        <th>Teacher</th>
                        <th>Subject</th>
                        <th>Students</th>
                        <th>Rating</th>
                        <th>Sessions</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr></thead>
                    <tbody>
                        {teachers.map(t => (
                            <tr key={t.id}>
                                <td>
                                    <div className="admin-table__user">
                                        <div className="admin-table__avatar" style={{ background: ac(t.name) }}>{t.name[0]}</div>
                                        <div>
                                            <div className="admin-table__uname">{t.name}</div>
                                            <div className="admin-table__uemail">{t.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td style={{ color: '#94a3b8' }}>{t.subject}</td>
                                <td style={{ color: '#c7d2fe', fontWeight: 600 }}>{t.students}</td>
                                <td>
                                    <span style={{ color: '#fbbf24', fontWeight: 700 }}>★ {t.rating}</span>
                                </td>
                                <td style={{ color: '#94a3b8' }}>{t.sessions}</td>
                                <td><span className={`status-dot status-dot--${t.status}`}>{t.status}</span></td>
                                <td>
                                    <div className="admin-table__actions">
                                        <button className="admin-btn admin-btn--outline admin-btn--sm">View</button>
                                        <button className="admin-btn admin-btn--danger admin-btn--sm">Suspend</button>
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

export default AdminTeachers;
