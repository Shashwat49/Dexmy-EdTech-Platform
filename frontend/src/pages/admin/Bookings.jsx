import { useState } from 'react';
import './Admin.css';

const MOCK_BOOKINGS = [
    { id: 1, student: 'Priya Sharma', teacher: 'Rahul Verma', course: 'React Advanced Hooks', date: 'Aug 5, 2026', time: '4:00 PM', status: 'confirmed', amount: '₹4,999' },
    { id: 2, student: 'Meera Nair', teacher: 'Suresh Patel', course: 'Python Data Science', date: 'Aug 5, 2026', time: '5:30 PM', status: 'confirmed', amount: '₹6,499' },
    { id: 3, student: 'Ravi Kumar', teacher: 'Anita Joshi', course: 'UI/UX Fundamentals', date: 'Aug 6, 2026', time: '10:00 AM', status: 'pending', amount: '₹3,499' },
    { id: 4, student: 'Sneha Menon', teacher: 'Vikram Singh', course: 'Docker & Kubernetes', date: 'Aug 6, 2026', time: '2:00 PM', status: 'cancelled', amount: '₹7,999' },
    { id: 5, student: 'Kavita Singh', teacher: 'Rahul Verma', course: 'MERN Stack Deep Dive', date: 'Aug 7, 2026', time: '11:00 AM', status: 'confirmed', amount: '₹5,999' },
];

const AdminBookings = () => {
    const [search, setSearch] = useState('');
    const bookings = MOCK_BOOKINGS.filter(b =>
        b.student.toLowerCase().includes(search.toLowerCase()) ||
        b.course.toLowerCase().includes(search.toLowerCase())
    );

    const statusColor = { confirmed: '#34d399', pending: '#f59e0b', cancelled: '#f87171' };

    return (
        <div className="admin-page">
            <div className="admin-page__header">
                <div>
                    <h2 className="admin-page__title">Bookings</h2>
                    <p className="admin-page__subtitle">{MOCK_BOOKINGS.length} total bookings</p>
                </div>
                <button className="admin-btn admin-btn--outline">Export</button>
            </div>

            <div className="admin-card">
                <div className="admin-table-toolbar">
                    <div className="admin-search-box">
                        <span className="admin-search-icon">🔍</span>
                        <input placeholder="Search bookings..." value={search} onChange={e => setSearch(e.target.value)} />
                    </div>
                </div>
                <table className="admin-table">
                    <thead><tr>
                        <th>Student</th>
                        <th>Teacher</th>
                        <th>Course</th>
                        <th>Date & Time</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr></thead>
                    <tbody>
                        {bookings.map(b => (
                            <tr key={b.id}>
                                <td className="admin-table__uname">{b.student}</td>
                                <td style={{ color: '#94a3b8' }}>{b.teacher}</td>
                                <td style={{ color: '#c7d2fe' }}>{b.course}</td>
                                <td className="admin-table__muted">{b.date} · {b.time}</td>
                                <td style={{ color: '#34d399', fontWeight: 700 }}>{b.amount}</td>
                                <td>
                                    <span style={{
                                        fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 100,
                                        background: `${statusColor[b.status]}22`, color: statusColor[b.status]
                                    }}>{b.status}</span>
                                </td>
                                <td>
                                    <button className="admin-btn admin-btn--outline admin-btn--sm">View</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminBookings;
