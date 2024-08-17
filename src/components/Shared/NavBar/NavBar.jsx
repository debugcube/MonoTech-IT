import Branding from '../../../assets/Branding/MonoTech-Pvt-Ltd.png'
import Profile_Pic from '../../../assets/profiles/Profile_Pic.png'

const NavBar = () => {
  return (
    <>
        <div>
            {/* Logo Area  */}
            <img className="h-24 mx-auto my-4" src={Branding} alt="Email Marketing Portal" />
        
            {/* Navbar  */}
            <div className="navbar bg-blue-500 text-white my-8" >
                <div className="flex-1">
                    <a href="/Profile" className="btn btn-ghost text-xl ">Email Marketing Platform</a>
                </div>
                <div className="flex-none ">
                    <div className="dropdown dropdown-end ">
                    </div>
                    <div className="dropdown dropdown-end z-[100]">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                            <img className="w-96" alt="Tailwind CSS Navbar component" src={Profile_Pic} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu bg-white menu-sm dropdown-content mt-3 z-[100] p-2 shadow rounded-box w-52 text-black">
                            <li>
                            <a href="/Dashboard" className="justify-between">
                                Dashboard
                            </a>
                            </li>
                            <li>
                            <a href="/Profile" className="justify-between">
                                Profile
                            </a>
                            </li>
                            <li>
                            <a href="/Withdrawals" className="justify-between">
                                Withdrawals
                            </a>
                            </li>
                            <li>
                            <a href="/Setting" className="justify-between">
                                Settings
                            </a>
                            </li>
                            <li>
                            <a href="/Signout" className="justify-between">
                                Signout
                            </a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default NavBar
