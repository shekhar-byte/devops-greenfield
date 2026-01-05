import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || '/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const userService = {
    // Get all users
    getAll: async () => {
        const response = await api.get('/users');
        return response.data;
    },

    // Create new user
    create: async (userData) => {
        const response = await api.post('/users', userData);
        return response.data;
    },

    // Update user
    update: async (id, userData) => {
        const response = await api.put(`/users/${id}`, userData);
        return response.data;
    },

    // Delete user
    delete: async (id) => {
        const response = await api.delete(`/users/${id}`);
        return response.data;
    },
};

export default api;
