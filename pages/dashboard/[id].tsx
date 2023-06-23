import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css';





const Dashboard = () => {
  const [user, setUser] = useState('');
  const router = useRouter();
  const { id } = router.query;

  

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/api/user?id=${id}`);
        setUser(response.data.existingUser);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, [id]);

  const handleLogout = async () => {
    try {
      const response = await axios.post('/api/logout');
      setUser(response.data.user);
      router.push('/')
      
    } catch (error) {
      console.error(error);
    }
  };

  return(
      <div>
          <h1 className="text-3xl  font-bold mb-8">Dashboard</h1>
            {user ? (
              <div className="text-center">
                <p className="text-xl mb-4">Welcome, {user.first_name}!</p>
                <p className="text-lg mb-4">Email: {user.email}</p>
                <button
                  className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
        ) : (
          <p className="text-red-500 mt-4">Wrong user.</p>
        )}
      </div>
  );
};

export default Dashboard;