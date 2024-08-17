import NavBar from "../../components/Shared/NavBar/NavBar"
import GreenTick from "../../assets/green-tick.png"


const Signout = () => {
  return (
    <>
        <div>

            {/* Logo & Navbar  */}
            <NavBar/>

            {/* Green Tick  */}
            <img className="w-24 mx-auto my-12" src={GreenTick} alt="GreenTick" />

            {/* Signout Message  */}
            <p className="text-center text-black text-xl font-bold">Signed Out Successfully. </p>

            {/* Goto to Signin Button  */}
            <div className="text-center">
              <p className="text-white text-center font-bold text-2xl my-16 bg-blue-500 inline-block p-4 rounded-xl hover:bg-blue-800 ">
                <a href="/">Goto Signin Page</a>
              </p>
            </div>

        </div>
    </>
  )
}

export default Signout
