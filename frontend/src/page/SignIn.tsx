import { MouseEvent, useState } from "react"


export default function SignIn() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(formData.email == '' && formData.password == '') setErrorMessage('Email and password is required');
    else if(formData.email == '') setErrorMessage('Email is required');
    else if(formData.password == '') setErrorMessage('Password is required');
    console.log(formData)
  }


  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-gray-700 via-gray-900 to-[#303030]">
      <div className="w-96 p-4 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center">Sign In</h1>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <input onChange={(e)=> setFormData({...formData,email:e.target.value})} type="email" id="email" className="w-full p-2 border border-gray-300 rounded-lg" />
        </div>
        <div className="space-y-2 mb-4">
          <label htmlFor="password" className="text-sm font-medium">Password</label>
          <input onChange={(e)=> setFormData({...formData,password:e.target.value})} type="password" id="password" className="w-full p-2 border border-gray-300 rounded-lg" />
        </div>
        <span className="text-red-600">{errorMessage? errorMessage:''}</span>
        <button onClick={(e)=>handleChange(e)} type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg mt-2">Sign In</button>
      </div>
    </div>
  )
}
