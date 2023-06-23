import React, {useState} from "react";
import axios from "axios";
import { useRouter } from "next/navigation";


const RegisterPage = () => {
    const [first_name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit =async (e:any) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/register', {first_name, email, password});

            if (response.status === 201) {
                router.push('/dashboard');
            }
            
        } catch (error: any) {
            setError(error.response?.data?.message || 'failed to sign up');
        }
    };
    
    return(
    <div>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="mb-4">
                        <h2 className="text-lg">FirstName</h2>
                        <input 
                        placeholder="Name"
                        className="border border-gray-400  px-4 py-2 rounded-md"
                        value={email}
                        onChange={(e) => setPassword(e.target.value)}
                        />
            </div>
            <div className="mb-4">
                        <h2 className="text-lg">Email</h2>
                        <input 
                        placeholder="Email"
                        className="border border-gray-400  px-4 py-2 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
            </div>
            <div className="mb-4">
                        <h2 className="text-lg">Password</h2>
                        <input 
                        placeholder="Email"
                        className="border border-gray-400  px-4 py-2 rounded-md"
                        value={email}
                        onChange={(e) => setPassword(e.target.value)}
                        />
            </div>
            <button type="submit"  className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign Up</button>
        </form>
    </div>

    
    );
        
 
};

export default RegisterPage;