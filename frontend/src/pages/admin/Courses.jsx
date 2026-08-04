import { useState } from 'react';
import './Admin.css';

const MOCK_COURSES = [
    { id: 1, title: 'React Advanced Hooks', teacher: 'Rahul Verma', students: 142, sessions: 38, price: '₹4,999', status: 'published' },
    { id: 2, title: 'Python Data Science', teacher: 'Suresh Patel', students: 211, sessions: 57, price: '₹6,499', status: 'published' },
    { id: 3, title: 'UI/UX Fundamentals', teacher: 'Anita Joshi', students: 89, sessions: 24, price: '₹3,499', status: 'published' },
    { id: 4, title: 'MERN Stack Deep Dive', teacher: 'Rahul Verma', students: 168, sessions: 45, price: '₹5,999', status: 'draft' },
    { id: 5, title: 'Docker & Kubernetes', teacher: 'Vikram Singh', students: 67, sessions: 19, price: '₹7,999', status: 'published' },
];

const AdminCourses = () => {
    const [search, setSearch] = useState('');
    const courses = MOCK_COURSES.filter(c =>
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.teacher.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="admin-page">
            <div className="admin-page__header">
                <div>
                    <h2 className="admin-page__title">Courses</h2>
                    <p className="admin-page__subtitle">{MOCK_COURSES.length} courses on the platform</p>
                </div>
                <button className="admin-btn admin-btn--primary">+ Add Course</button>
            </div>

            <div className="admin-card">
                <div className="admin-table-toolbar">
                    <div className="admin-search-box">
                        <span className="admin-search-icon">🔍</span>
                        <input placeholder="Search courses..." value={search} onChange={e => setSearch(e.target.value)} />
                    </div>
                </div>
                <table className="admin-table">
                    <thead><tr>
                        <th>Course</th>
                        <th>Teacher</th>
                        <th>Students</th>
                        <th>Sessions</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr></thead>
                    <tbody>
                        {courses.map(c => (
                            <tr key={c.id}>
                                <td className="admin-table__uname">{c.title}</td>
                                <td style={{ color: '#94a3b8' }}>{c.teacher}</td>
                                <td style={{ color: '#c7d2fe', fontWeight: 600 }}>{c.students}</td>
                                <td style={{ color: '#94a3b8' }}>{c.sessions}</td>
                                <td style={{ color: '#34d399', fontWeight: 700 }}>{c.price}</td>
                                <td>
                                    <span className={`role-badge ${c.status === 'published' ? 'role-badge--student' : 'role-badge--admin'}`}>
                                        {c.status}
                                    </span>
                                </td>
                                <td>
                                    <div className="admin-table__actions">
                                        <button className="admin-btn admin-btn--outline admin-btn--sm">Edit</button>
                                        <button className="admin-btn admin-btn--danger admin-btn--sm">Remove</button>
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

export default AdminCourses;
