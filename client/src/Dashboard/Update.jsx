import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: '',
        email: '',
        phone: ''
    });

    const { username, email, phone } = user;

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('/alluser');
                const userData = response.data.data;
                console.log(userData);
                const currentUser = userData.find((u) => u._id === params.id);
                console.log(currentUser);
                console.log(params.id)
                if (currentUser) {
                    setUser(currentUser);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchUser();
    }, [params.id]);

    const readValue = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.patch(`/updateuser/${params.id}`, user);

            navigate('/userInfo');
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
            <h1 className="text-2xl font-bold mb-4">Edit User</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={readValue}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={readValue}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        Phone Number
                    </label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={readValue}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default Update;
