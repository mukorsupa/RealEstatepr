import { useState } from "react";
import * as React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";


const Login = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword]  = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        
        try{
            const response = await axios.post('/api/login',{email, password});
            // const response = await fetch('/api/login');

    
            if (response.status === 200) {
                const { user_id } = response.data; 
                router.push(`/dashboard/${user_id}`);
              }


    
    
        }
        
        catch(error: any){
            console.error(error);
    
        }
    };
        return(
            <div>
                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    <div className="mb-4">
                        <h2 className="text-lg">Email</h2>
                        <input 
                        placeholder="Email"
                        className="border border-gray-400  px-4 py-2 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4 ">
                        <h2 className="text-lg">Password</h2>
                        <input 
                        type="password"
                        placeholder="Password"
                        className="border border-gray-400 px-4 py-2 rounded-md"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Login
                    </button>
                </form>

                {error && <p>{error}</p>}
            </div>
        );
        
};

export default Login;





