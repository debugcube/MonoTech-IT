// eslint-disable-next-line no-unused-vars
import React, {useState} from "react"
import Branding from "../../assets/Branding/MonoTech-Pvt-Ltd.png"


import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { auth } from "../../firebase"


const signin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignin = async(e) => {
    e.preventDefault();
    try{
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/Dashboard");
    }
    catch(err){
      setError("Failed to Signin, Please check your email & password");
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-24 w-auto"
            src={Branding}
            alt="DebugCube Email Marketing Portal"
          />

          <p className="text-blue-500 my-4 font-bold text-xl text-center">Welcome!</p> 

          <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
             
             <p className="text-blue-500 my-4">Email Marketing Portal</p> 
             <p className="border border-b-4 mx-auto border-t-0 border-l-0 border-r-0 border-blue-500 rounded w-fit">Signin</p>
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSignin}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Client_ID
              </label>
              <div className="mt-2 bg-gray">
                <input
                  id="clientID"
                  name="email"
                  type="email"
                  placeholder="ABC-DEF-123"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  // required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-100"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  // required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-100"
                />
              </div>
            </div>

            {
              error && <p style={{color:"red"}}>{error}</p>
            }

            <div>  
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Signin
                  </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="/signup" className="font-semibold leading-6 text-blue-500 hover:text-indigo-500">
              Be a Client?
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default signin
