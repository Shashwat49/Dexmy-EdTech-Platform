import { useState } from 'react';
import './Admin.css';

const MOCK_USERS = [
    { id: 1, name: 'Priya Sharma', email: 'priya@email.com', role: 'student', status: 'active', joined: 'Aug 1, 2026' },
    { id: 2, name: 'Rahul Verma', email: 'rahul@email.com', role: 'teacher', status: 'active', joined: 'Jul 30, 2026' },
    { id: 3, name: 'Anita Joshi', email: 'anita@email.com', role: 'student', status: 'inactive', joined: 'Jul 28, 2026' },
    { id: 4, name: 'Suresh Patel', email: 'suresh@email.com', role: 'teacher', status: 'active', joined: 'Jul 25, 2026' },
    { id: 5, name: 'Meera Nair', email: 'meera@email.com', role: 'student', status: 'active', joined: 'Jul 22, 2026' },
    { id: 6, name: 'Arjun Kapoor', email: 'arjun@email.com', role: 'admin', status: 'active', joined: 'Jul 15, 2026' },
    { id: 7, name: 'Sneha Menon', email: 'sneha@email.com', role: 'student', status: 'active', joined: 'Jul 10, 2026' },
    { id: 8, name: 'Vikram Singh', email: 'vikram@email.com', role: 'teacher', status: 'inactive', joined: 'Jul 5, 2026' },
];

const ROLES = ['all', 'student', 'teacher', 'admin'];

function avatarColor(name) {
    const c = ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444', '#ec4899'];
    let h = 0;
    for (let i = 0; i < name.length; i++) h = name.charCodeAt(i) + ((h << 5) - h);
    return c[Math.abs(h) % c.length];
}

const AdminUsers = () => {
    const [search, setSearch] = useState('');
    const [roleFilter, setRole] = useState('all');
    const [showModal, setModal] = useState(false);
    const [users, setUsers] = useState(MOCK_USERS);
    const [form, setForm] = useState({ name: '', email: '', role: 'student', status: 'active' });

    const filtered = users.filter(u => {
        const matchRole = roleFilter === 'all' || u.role === roleFilter;
        const matchSearch = u.name.toLowerCase().includes(search.toLowerCase()) ||
            u.email.toLowerCase().includes(search.toLowerCase());
        return matchRole && matchSearch;
    });

    const handleDelete = (id) => setUsers(us => us.filter(u => u.id !== id));
    const handleAdd = () => {
        if (!form.name || !form.email) return;
        setUsers(us => [...us, { ...form, id: Date.now(), joined: 'Aug 4, 2026' }]);
        setModal(false);
        setForm({ name: '', email: '', role: 'student', status: 'active' });
    };

    return (
        <div className="admin-page">
            <div className="admin-page__header">
                <div>
                    <h2 className="admin-page__title">Users</h2>
                    <p className="admin-page__subtitle">{users.length} total users on the platform</p>
                </div>
                <button className="admin-btn admin-btn--primary" onClick={() => setModal(true)}>+ Add User</button>
            </div>

            <div className="admin-card">
                <div className="admin-table-toolbar">
                    <div className="admin-search-box">
                        <span className="admin-search-icon">🔍</span>
                        <input
                            placeholder="Search users..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                    </div>
                    <div className="admin-filter-tabs">
                        {ROLES.map(r => (
                            <button
                                key={r}
                                className={`admin-filter-tab${roleFilter === r ? ' admin-filter-tab--active' : ''}`}
                                onClick={() => setRole(r)}
                            >{r.charAt(0).toUpperCase() + r.slice(1)}</button>
                        ))}
                    </div>
                </div>

                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Joined</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map(u => (
                            <tr key={u.id}>
                                <td>
                                    <div className="admin-table__user">
                                        <div className="admin-table__avatar" style={{ background: avatarColor(u.name) }}>{u.name[0]}</div>
                                        <div>
                                            <div className="admin-table__uname">{u.name}</div>
                                            <div className="admin-table__uemail">{u.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td><span className={`role-badge role-badge--${u.role}`}>{u.role}</span></td>
                                <td><span className={`status-dot status-dot--${u.status}`}>{u.status}</span></td>
                                <td className="admin-table__muted">{u.joined}</td>
                                <td>
                                    <div className="admin-table__actions">
                                        <button className="admin-btn admin-btn--outline admin-btn--sm">Edit</button>
                                        <button className="admin-btn admin-btn--danger admin-btn--sm" onClick={() => handleDelete(u.id)}>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="admin-pagination">
                    <span className="admin-pagination__info">Showing {filtered.length} of {users.length}</span>
                    <button className="admin-pagination__btn admin-pagination__btn--active">1</button>
                    <button className="admin-pagination__btn">2</button>
                </div>
            </div>

            {showModal && (
                <div className="admin-modal-overlay" onClick={e => e.target === e.currentTarget && setModal(false)}>
                    <div className="admin-modal">
                        <h3 className="admin-modal__title">Add New User</h3>
                        <div className="admin-form-group">
                            <label>Full Name</label>
                            <input className="admin-form-input" placeholder="Enter full name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                        </div>
                        <div className="admin-form-group">
                            <label>Email</label>
                            <input className="admin-form-input" type="email" placeholder="Enter email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                        </div>
                        <div className="admin-form-group">
                            <label>Role</label>
                            <select className="admin-form-select" value={form.role} onChange={e => setForm(f => ({ ...f, role: e.target.value }))}>
                                <option value="student">Student</option>
                                <option value="teacher">Teacher</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                        <div className="admin-modal__footer">
                            <button className="admin-btn admin-btn--outline" onClick={() => setModal(false)}>Cancel</button>
                            <button className="admin-btn admin-btn--primary" onClick={handleAdd}>Add User</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminUsers;
