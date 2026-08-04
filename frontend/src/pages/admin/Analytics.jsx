import { useState } from 'react';
import './Admin.css';

const MOCK_ANALYTICS = {
    kpis: [
        { label: 'Total Revenue', value: '₹14.8L', change: '+21%', icon: '💰', color: '#10b981' },
        { label: 'Total Sessions', value: '1,284', change: '+15%', icon: '🎯', color: '#6366f1' },
        { label: 'Avg. Session Rating', value: '4.7', change: '+0.2', icon: '⭐', color: '#f59e0b' },
        { label: 'New Signups (Mo.)', value: '934', change: '+34%', icon: '🚀', color: '#06b6d4' },
    ],
    monthlyRevenue: [38, 55, 42, 61, 78, 56, 90, 104, 88, 120, 98, 115],
    monthlyLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    topCourses: [
        { name: 'React Advanced Hooks', students: 142, revenue: '₹2.1L' },
        { name: 'Python Data Science', students: 211, revenue: '₹3.4L' },
        { name: 'UI/UX Fundamentals', students: 89, revenue: '₹1.2L' },
        { name: 'MERN Stack Deep Dive', students: 168, revenue: '₹2.6L' },
    ],
};

const AdminAnalytics = () => {
    const max = Math.max(...MOCK_ANALYTICS.monthlyRevenue);

    return (
        <div className="admin-page">
            <div className="admin-page__header">
                <div>
                    <h2 className="admin-page__title">Analytics</h2>
                    <p className="admin-page__subtitle">Platform performance & growth overview</p>
                </div>
                <div className="admin-header-actions">
                    <select className="admin-form-select" style={{ width: 'auto', padding: '8px 14px' }}>
                        <option>Last 30 days</option>
                        <option>Last 3 months</option>
                        <option>Last 6 months</option>
                        <option>This year</option>
                    </select>
                </div>
            </div>

            {/* KPI cards */}
            <div className="admin-stats-grid">
                {MOCK_ANALYTICS.kpis.map(k => (
                    <div className="stat-card" key={k.label} style={{ '--accent': k.color }}>
                        <div className="stat-card__icon">{k.icon}</div>
                        <div className="stat-card__body">
                            <span className="stat-card__label">{k.label}</span>
                            <span className="stat-card__value">{k.value}</span>
                            <span className="stat-card__change stat-card__change--up">↑ {k.change} vs last period</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="admin-two-col">
                {/* Revenue chart */}
                <div className="admin-card">
                    <div className="admin-card__head">
                        <h3 className="admin-card__title">Monthly Revenue</h3>
                        <span style={{ fontSize: 12, color: '#64748b' }}>2026</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                        <div className="analytics-chart-bars" style={{ height: 150, padding: '0 4px' }}>
                            {MOCK_ANALYTICS.monthlyRevenue.map((v, i) => (
                                <div
                                    key={i}
                                    className="analytics-bar"
                                    style={{ height: `${(v / max) * 100}%` }}
                                    title={`${MOCK_ANALYTICS.monthlyLabels[i]}: ₹${v}k`}
                                />
                            ))}
                        </div>
                        <div style={{ display: 'flex', gap: 6, padding: '0 4px' }}>
                            {MOCK_ANALYTICS.monthlyLabels.map((l, i) => (
                                <div key={i} style={{ flex: 1, textAlign: 'center', fontSize: 9, color: '#475569' }}>{l}</div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Top Courses */}
                <div className="admin-card">
                    <div className="admin-card__head">
                        <h3 className="admin-card__title">Top Courses</h3>
                    </div>
                    <table className="admin-table">
                        <thead><tr>
                            <th>Course</th>
                            <th>Students</th>
                            <th>Revenue</th>
                        </tr></thead>
                        <tbody>
                            {MOCK_ANALYTICS.topCourses.map((c, i) => (
                                <tr key={i}>
                                    <td className="admin-table__uname">{c.name}</td>
                                    <td style={{ color: '#c7d2fe', fontWeight: 600 }}>{c.students}</td>
                                    <td style={{ color: '#34d399', fontWeight: 600 }}>{c.revenue}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminAnalytics;
