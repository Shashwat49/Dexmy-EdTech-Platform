import { useState } from 'react';
import './Admin.css';

const MOCK_STUDENTS = [
    { id: 1, name: 'Priya Sharma', email: 'priya@email.com', courses: 4, progress: 78, sessions: 12, status: 'active', joined: 'Aug 1, 2026' },
    { id: 2, name: 'Anita Joshi', email: 'anita@email.com', courses: 2, progress: 42, sessions: 5, status: 'inactive', joined: 'Jul 28, 2026' },
    { id: 3, name: 'Meera Nair', email: 'meera@email.com', courses: 6, progress: 91, sessions: 18, status: 'active', joined: 'Jul 22, 2026' },
    { id: 4, name: 'Sneha Menon', email: 'sneha@email.com', courses: 3, progress: 65, sessions: 9, status: 'active', joined: 'Jul 10, 2026' },
    { id: 5, name: 'Ravi Kumar', email: 'ravi@email.com', courses: 5, progress: 55, sessions: 11, status: 'active', joined: 'Jun 28, 2026' },
    { id: 6, name: 'Kavita Singh', email: 'kavita@email.com', courses: 1, progress: 20, sessions: 2, status: 'inactive', joined: 'Jun 10, 2026' },
];

function ac(n) {
    const c = ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'];
    let h = 0; for (let i = 0; i < n.length; i++) h = n.charCodeAt(i) + ((h << 5) - h);
    return c[Math.abs(h) % c.length];
}

const AdminStudents = () => {
    const [search, setSearch] = useState('');
    const students = MOCK_STUDENTS.filter(s =>
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.email.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="admin-page">
            <div className="admin-page__header">
                <div>
                    <h2 className="admin-page__title">Students</h2>
                    <p className="admin-page__subtitle">{MOCK_STUDENTS.length} enrolled learners</p>
                </div>
                <button className="admin-btn admin-btn--primary">Export CSV</button>
            </div>

            <div className="admin-card">
                <div className="admin-table-toolbar">
                    <div className="admin-search-box">
                        <span className="admin-search-icon">🔍</span>
                        <input placeholder="Search students..." value={search} onChange={e => setSearch(e.target.value)} />
                    </div>
                </div>

                <table className="admin-table">
                    <thead><tr>
                        <th>Student</th>
                        <th>Courses</th>
                        <th>Progress</th>
                        <th>Sessions</th>
                        <th>Status</th>
                        <th>Joined</th>
                        <th>Actions</th>
                    </tr></thead>
                    <tbody>
                        {students.map(s => (
                            <tr key={s.id}>
                                <td>
                                    <div className="admin-table__user">
                                        <div className="admin-table__avatar" style={{ background: ac(s.name) }}>{s.name[0]}</div>
                                        <div>
                                            <div className="admin-table__uname">{s.name}</div>
                                            <div className="admin-table__uemail">{s.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td style={{ color: '#94a3b8' }}>{s.courses} enrolled</td>
                                <td>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                        <div style={{ flex: 1, height: 5, background: 'rgba(255,255,255,0.08)', borderRadius: 99, overflow: 'hidden' }}>
                                            <div style={{ width: `${s.progress}%`, height: '100%', background: 'linear-gradient(90deg,#6366f1,#8b5cf6)', borderRadius: 99 }}></div>
                                        </div>
                                        <span style={{ fontSize: 12, color: '#94a3b8', minWidth: 28 }}>{s.progress}%</span>
                                    </div>
                                </td>
                                <td style={{ color: '#c7d2fe', fontWeight: 600 }}>{s.sessions}</td>
                                <td><span className={`status-dot status-dot--${s.status}`}>{s.status}</span></td>
                                <td className="admin-table__muted">{s.joined}</td>
                                <td>
                                    <button className="admin-btn admin-btn--outline admin-btn--sm">View Profile</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminStudents;
