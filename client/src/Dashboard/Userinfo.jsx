import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const UserInfo = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('/alluser');
                setUsers(response.data.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUsers();
    }, []);

    const handleDelete = async (userId) => {
        try {
            await axios.delete(`/deleteuser/${userId}`);
            window.location.reload()
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <>
            <h1 className="text-3xl font-bold text-center mt-5 mb-10">User Details</h1>
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border">Sl No</th>
                        <th className="py-2 px-4 border">Name</th>
                        <th className="py-2 px-4 border">Email</th>
                        <th className="py-2 px-4 border">Phone Number</th>
                        <th className="py-2 px-4 border">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user._id}>
                            <td className="py-2 px-4 border">{index + 1}</td>
                            <td className="py-2 px-4 border">{user.username}</td>
                            <td className="py-2 px-4 border">{user.email}</td>
                            <td className="py-2 px-4 border">{user.phone}</td>
                            <td className="py-2 px-4 border">
                                <Link
                                    to={`/edituser/${user._id}`}
                                    className="bg-blue-500 text-white py-1 px-2 rounded mr-2"
                                >
                                    Edit
                                </Link>
                                <button
                                    className="bg-red-500 text-white py-1 px-2 rounded"
                                    onClick={() => handleDelete(user._id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default UserInfo;
