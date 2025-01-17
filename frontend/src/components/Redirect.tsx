import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Redirect() {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/auth/signin");
        }, 2000);
    }, [navigate]);

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-16 h-16 border-4 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"></div>
        </div>
    )
}
