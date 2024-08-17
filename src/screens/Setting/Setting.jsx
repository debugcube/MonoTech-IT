import NavBar from '../../components/Shared/NavBar/NavBar'

const Setting = () => {
  return (
    <>
        <div>
            {/* Logo & Navbar */}
            <NavBar />

            {/* Setting Title  */}
            <h2 className='text-black text-xl font-bold m-8 underline'>Settings</h2>

            {/* Setting page body  */}
            <div className='flex justify-between mx-8 text-right '>
                <div>
                    <p className='text-gray-600 text-left underline'>Account No:</p>
                    <p className='text-gray-600 underline'>Account Category:</p>
                </div>
                <div>
                    <p className='text-black font-bold'>1000108017</p>
                    <p className='text-black font-bold'>
                        
                    <div className="flex-none ">
                    <div className="dropdown dropdown-end ">
                    </div>
                    <div className="dropdown dropdown-end z-10">
                        <div tabIndex={0} role="button" className="">
                            <div className="hover:bg-gray-500 text-white rounded-md p-2 bg-gray-400">
                                Personal
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu bg-white menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 text-gray-600">
                            <li>
                            <a href="#" className="justify-between">
                                Personal
                            </a>
                            </li>
                            <li>
                            <a href="#" className="justify-between">
                                Group
                            </a>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>

                        <span className='text-red-500 cursor-pointer hover:underline'>Change</span></p>
                </div>
            </div>

            {/* Save Button */}
             <div className='m-4 text-black text-xl font-bold bg-green-400 text-center p-4 mb-16 rounded-lg hover:bg-gray-500 hover:text-white transition cursor-pointer'>
                <a href="/Setting">Update</a>
              </div>

              {/* Change Password  */}

                <h2 className='text-black font-bold text-center my-4 text-xl'>Change Your Account Password</h2>

              <form className='text-center'>
                <label>
                    <input type="password"
                    name='password'
                    className='bg-gray-100 border my-2 border-2px-solid p-2 w-96 text-center'
                    placeholder='Enter old password'
                    />
                </label>
                <label>
                    <input type="password"
                    name='password'
                    className='bg-gray-100 border my-2 border-2px-solid p-2 w-96 text-center'
                    placeholder='Enter New password'
                    />
                </label>
                <label>
                    <input type="password"
                    name='password'
                    className='bg-gray-100 border my-2 border-2px-solid p-2 w-96 text-center'
                    placeholder='Verify New password'
                    />
                </label>
                <button className='bg-blue-500 text-white p-4 rounded-lg my-4'>Change Password</button>
              </form>

              <div className='text-white'>
                Nothing
              </div>

              {/* Delete Account Button  */}
              <div className='m-4 text-white text-xl font-bold bg-red-500 text-center p-4 mb-16 rounded-lg hover:bg-red-900 hover:text-white transition cursor-pointer'>
                  <a href="/Setting">Delete Your Account</a>
              </div>

              <div className='text-white'>
                Nothing
              </div>
        </div>
    </>
  )
}

export default Setting
