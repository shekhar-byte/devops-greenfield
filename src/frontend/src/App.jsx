import { useState, useEffect } from 'react';
import { userService } from './services/api';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

function App() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editingUser, setEditingUser] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const data = await userService.getAll();
            setUsers(data);
            setError(null);
        } catch (err) {
            setError('Failed to fetch users');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const showSuccess = (message) => {
        setSuccessMessage(message);
        setTimeout(() => setSuccessMessage(null), 3000);
    };

    const handleSubmit = async (userData) => {
        try {
            if (editingUser) {
                await userService.update(editingUser._id, userData);
                setEditingUser(null);
                showSuccess('User updated successfully!');
            } else {
                await userService.create(userData);
                showSuccess('User created successfully!');
            }
            fetchUsers();
            setError(null);
        } catch (err) {
            setError(err.response?.data?.error || 'Failed to save user');
            console.error(err);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this user?')) {
            return;
        }
        try {
            await userService.delete(id);
            fetchUsers();
            showSuccess('User deleted successfully!');
            setError(null);
        } catch (err) {
            setError('Failed to delete user');
            console.error(err);
        }
    };

    const handleEdit = (user) => {
        setEditingUser(user);
    };

    const handleCancel = () => {
        setEditingUser(null);
    };

    return (
        <div className="min-h-screen">
            {/* Animated Background */}
            <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
                {/* Header */}
                <header className="border-b border-white/10 backdrop-blur-xl bg-white/5">
                    <div className="max-w-7xl mx-auto px-6 py-5">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/25">
                                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold text-white">User Management</h1>
                                    <p className="text-purple-300 text-sm">Manage your team members</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold text-sm shadow-lg shadow-emerald-500/25">
                                    {users.length} {users.length === 1 ? 'User' : 'Users'}
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="max-w-7xl mx-auto px-6 py-8">
                    {/* Notifications */}
                    {error && (
                        <div className="mb-6 p-4 rounded-xl bg-red-500/20 border border-red-500/30 backdrop-blur-sm">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                                <p className="text-red-200 font-medium">{error}</p>
                            </div>
                        </div>
                    )}

                    {successMessage && (
                        <div className="mb-6 p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/30 backdrop-blur-sm">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-emerald-200 font-medium">{successMessage}</p>
                            </div>
                        </div>
                    )}

                    {/* Main Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-4">
                            <UserForm
                                onSubmit={handleSubmit}
                                editingUser={editingUser}
                                onCancel={handleCancel}
                            />
                        </div>
                        <div className="lg:col-span-8">
                            <UserList
                                users={users}
                                onEdit={handleEdit}
                                onDelete={handleDelete}
                                loading={loading}
                            />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;
