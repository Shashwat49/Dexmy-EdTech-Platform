import { useState } from 'react';
import './Admin.css';

const MOCK_PAYMENTS = [
    { id: 'TXN001', student: 'Priya Sharma', course: 'React Advanced Hooks', amount: '₹4,999', method: 'Razorpay', date: 'Aug 1, 2026', status: 'success' },
    { id: 'TXN002', student: 'Meera Nair', course: 'Python Data Science', amount: '₹6,499', method: 'UPI', date: 'Jul 30, 2026', status: 'success' },
    { id: 'TXN003', student: 'Ravi Kumar', course: 'UI/UX Fundamentals', amount: '₹3,499', method: 'Card', date: 'Jul 28, 2026', status: 'failed' },
    { id: 'TXN004', student: 'Sneha Menon', course: 'Docker & Kubernetes', amount: '₹7,999', method: 'UPI', date: 'Jul 25, 2026', status: 'refunded' },
    { id: 'TXN005', student: 'Kavita Singh', course: 'MERN Stack Deep Dive', amount: '₹5,999', method: 'Razorpay', date: 'Jul 22, 2026', status: 'success' },
    { id: 'TXN006', student: 'Arjun Kapoor', course: 'React Advanced Hooks', amount: '₹4,999', method: 'Card', date: 'Jul 18, 2026', status: 'success' },
];

const AdminPayments = () => {
    const [search, setSearch] = useState('');
    const payments = MOCK_PAYMENTS.filter(p =>
        p.student.toLowerCase().includes(search.toLowerCase()) ||
        p.id.toLowerCase().includes(search.toLowerCase())
    );
    const total = MOCK_PAYMENTS.filter(p => p.status === 'success').reduce((s, p) => s + parseInt(p.amount.replace(/[₹,]/g, '')), 0);
    const statusColor = { success: '#34d399', failed: '#f87171', refunded: '#f59e0b' };

    return (
        <div className="admin-page">
            <div className="admin-page__header">
                <div>
                    <h2 className="admin-page__title">Payments</h2>
                    <p className="admin-page__subtitle">Total collected: <span style={{ color: '#34d399', fontWeight: 700 }}>₹{total.toLocaleString('en-IN')}</span></p>
                </div>
                <button className="admin-btn admin-btn--outline">Export Report</button>
            </div>

            <div className="admin-stats-grid" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
                {[
                    { label: 'Successful', value: MOCK_PAYMENTS.filter(p => p.status === 'success').length, color: '#34d399' },
                    { label: 'Failed', value: MOCK_PAYMENTS.filter(p => p.status === 'failed').length, color: '#f87171' },
                    { label: 'Refunded', value: MOCK_PAYMENTS.filter(p => p.status === 'refunded').length, color: '#f59e0b' },
                ].map(s => (
                    <div className="stat-card" key={s.label} style={{ '--accent': s.color }}>
                        <div className="stat-card__body" style={{ gap: 4 }}>
                            <span className="stat-card__label">{s.label} Transactions</span>
                            <span className="stat-card__value" style={{ color: s.color, fontSize: 32 }}>{s.value}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="admin-card">
                <div className="admin-table-toolbar">
                    <div className="admin-search-box">
                        <span className="admin-search-icon">🔍</span>
                        <input placeholder="Search by student or transaction ID..." value={search} onChange={e => setSearch(e.target.value)} />
                    </div>
                </div>
                <table className="admin-table">
                    <thead><tr>
                        <th>Transaction ID</th>
                        <th>Student</th>
                        <th>Course</th>
                        <th>Amount</th>
                        <th>Method</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr></thead>
                    <tbody>
                        {payments.map(p => (
                            <tr key={p.id}>
                                <td style={{ fontFamily: 'monospace', color: '#818cf8', fontSize: 12 }}>{p.id}</td>
                                <td className="admin-table__uname">{p.student}</td>
                                <td style={{ color: '#94a3b8', fontSize: 12 }}>{p.course}</td>
                                <td style={{ color: '#34d399', fontWeight: 700 }}>{p.amount}</td>
                                <td style={{ color: '#94a3b8' }}>{p.method}</td>
                                <td className="admin-table__muted">{p.date}</td>
                                <td>
                                    <span style={{
                                        fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 100,
                                        background: `${statusColor[p.status]}22`, color: statusColor[p.status]
                                    }}>{p.status}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminPayments;
