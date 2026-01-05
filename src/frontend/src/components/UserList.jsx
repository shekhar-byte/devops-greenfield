function UserList({ users, onEdit, onDelete, loading }) {
    if (loading) {
        return (
            <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-12 text-center">
                <div className="relative mx-auto w-16 h-16 mb-6">
                    <div className="absolute inset-0 rounded-full border-4 border-purple-500/30"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 animate-spin"></div>
                </div>
                <p className="text-purple-200 font-medium">Loading users...</p>
            </div>
        );
    }

    if (users.length === 0) {
        return (
            <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-12 text-center">
                <div className="w-20 h-20 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">No Users Yet</h3>
                <p className="text-purple-300">Get started by adding your first user</p>
            </div>
        );
    }

    return (
        <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="px-6 py-5 border-b border-white/10 bg-white/5">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                            <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h2 className="text-lg font-bold text-white">Team Members</h2>
                    </div>
                    <span className="text-sm text-purple-300">{users.length} total</span>
                </div>
            </div>

            {/* User Cards */}
            <div className="divide-y divide-white/10">
                {users.map((user) => (
                    <div key={user._id} className="p-5 hover:bg-white/5 transition-all duration-200 group">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                {/* Avatar */}
                                <div className="relative">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white text-lg font-bold shadow-lg">
                                        {user.name.charAt(0).toUpperCase()}
                                    </div>
                                    <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-emerald-400 border-2 border-slate-900 rounded-full"></div>
                                </div>

                                {/* Info */}
                                <div>
                                    <h3 className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                                        {user.name}
                                    </h3>
                                    <p className="text-purple-300 text-sm">{user.email}</p>
                                    <p className="text-purple-400/60 text-xs mt-0.5">
                                        Joined {new Date(user.createdAt).toLocaleDateString('en-US', {
                                            month: 'short',
                                            day: 'numeric',
                                            year: 'numeric'
                                        })}
                                    </p>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => onEdit(user)}
                                    className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 transition-all hover:scale-105"
                                    title="Edit"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => onDelete(user._id)}
                                    className="p-2.5 rounded-xl bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all hover:scale-105"
                                    title="Delete"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserList;
