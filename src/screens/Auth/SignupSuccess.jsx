import Branding from "../../assets/Branding/MonoTech-Pvt-Ltd.png"
import GreenTick from "../Auth/../../assets/green-tick.png"

const SignupSuccess = () => {
  return (
    <>
        <div className="p-12">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
                className="mx-auto h-24 w-auto"
                src={Branding}
                alt="MonoTech Email Marketing Portal"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                <p className="text-blue-500">Email Marketing Portal</p>
               <div className="my-4">
               <p className="">Congrats Ashique!</p>
                <p className="">Signup Successfull!</p>
               </div>
                <img className="my-4 w-24 mx-auto" src={GreenTick} alt="Successful" />
                <p className="text-sm">Check your Email inbox to get Client_ID & Password</p>
                <p className="text-sm  ">If any issue <span className="text-red-500 cursor-pointer hover:underline"><a href="/SignupSuccess">Click here!</a></span></p>
                <button className="btn btn-primary my-12">
                  <a href="/">Go to Signin Page</a>
                </button>
            </h2>
            </div>
        </div>
    </>
  )
}

export default SignupSuccess
