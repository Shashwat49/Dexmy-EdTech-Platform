import { useState } from 'react';
import './Admin.css';

const AdminSettings = () => {
    const [settings, setSettings] = useState({
        emailNotifications: true,
        sessionReminders: true,
        publicRegistration: true,
        maintenanceMode: false,
        twoFactor: false,
        autoApproveTeachers: false,
    });

    const toggle = key => setSettings(s => ({ ...s, [key]: !s[key] }));

    return (
        <div className="admin-page">
            <div className="admin-page__header">
                <div>
                    <h2 className="admin-page__title">Settings</h2>
                    <p className="admin-page__subtitle">Platform configuration and preferences</p>
                </div>
                <button className="admin-btn admin-btn--primary">Save Changes</button>
            </div>

            <div className="admin-two-col" style={{ gridTemplateColumns: '1fr 1fr' }}>
                {/* General */}
                <div className="settings-section">
                    <div>
                        <div className="settings-section__title">General</div>
                        <div className="settings-section__desc">Configure platform-wide settings</div>
                    </div>
                    <div className="admin-form-group">
                        <label>Platform Name</label>
                        <input className="admin-form-input" defaultValue="Dexmy EdTech" />
                    </div>
                    <div className="admin-form-group">
                        <label>Support Email</label>
                        <input className="admin-form-input" defaultValue="support@dexmy.in" />
                    </div>
                    <div className="admin-form-group">
                        <label>Default Currency</label>
                        <select className="admin-form-select">
                            <option>INR (₹)</option>
                            <option>USD ($)</option>
                            <option>EUR (€)</option>
                        </select>
                    </div>

                    {[
                        { key: 'publicRegistration', label: 'Public Registration', sub: 'Allow anyone to create an account' },
                        { key: 'autoApproveTeachers', label: 'Auto-Approve Teachers', sub: 'Skip manual review for new teachers' },
                        { key: 'maintenanceMode', label: 'Maintenance Mode', sub: 'Temporarily disable the platform for users' },
                    ].map(({ key, label, sub }) => (
                        <div className="settings-row" key={key}>
                            <div>
                                <div className="settings-row__label">{label}</div>
                                <div className="settings-row__sub">{sub}</div>
                            </div>
                            <label className="toggle">
                                <input type="checkbox" checked={settings[key]} onChange={() => toggle(key)} />
                                <span className="toggle-slider"></span>
                            </label>
                        </div>
                    ))}
                </div>

                {/* Notifications & Security */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                    <div className="settings-section">
                        <div>
                            <div className="settings-section__title">Notifications</div>
                            <div className="settings-section__desc">Control email and push alerts</div>
                        </div>
                        {[
                            { key: 'emailNotifications', label: 'Email Notifications', sub: 'Send system emails to users' },
                            { key: 'sessionReminders', label: 'Session Reminders', sub: 'Remind students 30 min before class' },
                        ].map(({ key, label, sub }) => (
                            <div className="settings-row" key={key}>
                                <div>
                                    <div className="settings-row__label">{label}</div>
                                    <div className="settings-row__sub">{sub}</div>
                                </div>
                                <label className="toggle">
                                    <input type="checkbox" checked={settings[key]} onChange={() => toggle(key)} />
                                    <span className="toggle-slider"></span>
                                </label>
                            </div>
                        ))}
                    </div>

                    <div className="settings-section">
                        <div>
                            <div className="settings-section__title">Security</div>
                            <div className="settings-section__desc">Authentication and access control</div>
                        </div>
                        {[
                            { key: 'twoFactor', label: 'Two-Factor Authentication', sub: 'Require 2FA for admin accounts' },
                        ].map(({ key, label, sub }) => (
                            <div className="settings-row" key={key}>
                                <div>
                                    <div className="settings-row__label">{label}</div>
                                    <div className="settings-row__sub">{sub}</div>
                                </div>
                                <label className="toggle">
                                    <input type="checkbox" checked={settings[key]} onChange={() => toggle(key)} />
                                    <span className="toggle-slider"></span>
                                </label>
                            </div>
                        ))}
                        <div className="admin-form-group" style={{ marginBottom: 0, marginTop: 4 }}>
                            <label>Session Timeout (minutes)</label>
                            <input className="admin-form-input" type="number" defaultValue="30" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminSettings;
