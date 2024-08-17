import NavBar from '../../components/Shared/NavBar/NavBar'

// react icons 
import { MdVerifiedUser } from "react-icons/md";

const Profile = () => {
  return (
    <>
      <div>
        {/* Profile Page  */}
        
        {/* Nav & Menu Area  */}
        <NavBar />

        {/* Profile page body  */}
        <div className='p-12'>

          {/* Profile Information Title  */}
          <h2 className='text-black text-xl font-bold underline mx-4 mb-12 mt-0'>Profile Information</h2>
          
          {/* Profile Informations  */}
          <div>
            <div className='flex justify-between items-center'>
              <p className='mx-4 my-4 text-gray-600 underline'> 
                Client_ID:
              </p>
              <p className='text-black font-bold items-center '>
                ASQ-NUBT-92
              </p>
            </div>

            <div className='flex justify-between items-center'>
                <p className='mx-4 my-4 text-gray-600 underline'> 
                  Account No:
                </p>
                <p className='text-black font-bold items-center '>
                1000108017 (Personal)
                </p>
            </div>
          </div>

          {/* Client_ID & Account No Can't be Changed */}
          <div className='text-yellow-600 text-center mt-8'>
            <span className='font-bold'>Client_ID</span> & <span className='font-bold'>Account No</span> Can't be Changed, It's <span  className='underline font-bold'>Auto-Generated</span> by the Application.
          </div>
          
          {/* Personal Information  */}
          <div className='mt-16'>
            
            <div className='flex justify-between items-center'>
              <p className='mx-4 my-4 text-gray-600 underline'> 
                Client_Name:
              </p>
              <p className='text-black font-bold items-center '>
              Ashique-Ur-Rahman <span className='text-red-500 cursor-pointer hover:underline'>Edit</span>
              </p>
            </div>
            <div className='flex justify-between items-center'>
              <p className='mx-4 my-4 text-gray-600 underline'> 
                Phone:
              </p>
              <p className='text-black font-bold items-center '>
                +880 1751-958392 <span className='text-red-500 cursor-pointer hover:underline'>Edit</span>
              </p>
            </div>
            <div className='flex justify-between items-center'>
              <p className='mx-4 my-4 text-gray-600 underline'> 
                Email:
              </p>
              <p className='text-black font-bold items-center '>
                ashik.rahman713@gmail.com <span className='text-red-500 cursor-pointer hover:underline'>Edit</span>
              </p>
            </div>
            <div className='flex justify-between items-center'>
              <p className='mx-4 my-4 text-gray-600 underline'> 
                Bank A/C:
              </p>
              <p className='text-black font-bold items-center'>
                DBBL | ***4854 <span className='text-red-500 cursor-pointer hover:underline'>Edit</span>
              </p>
            </div>
          </div>

          {/* Information Upadting Button  */}
          <div className='m-4 text-black text-xl font-bold bg-green-400 text-center p-4 mb-16 rounded-lg hover:bg-gray-500 hover:text-white transition cursor-pointer'>
            <a href="/Profile">Update</a>
          </div>

          {/* Membership Information Title  */}
          <div>
            <h2 className='text-black text-xl font-bold underline mx-4 mb-12 mt-0 '>Membership Information(s)</h2>
            </div>
              {/* Membership Information Body  */}
              <div className='m-4'>
                <div className='flex justify-between items-center'>
                  <p className='text-gray-600 underline'>Account Status:</p>
                  <p className='flex items-center justify-between gap-1 text-green-500 font-bold'>Activated <span><MdVerifiedUser /></span> <span className='text-red-500 cursor-pointer hover:underline'>Change</span></p>
                </div>

                <div className='flex justify-between items-center '>
                  <p className='text-gray-600 underline my-4'>MemberShip_Package:</p>
                  <div className='justify-between'>
                  <p className=' text-green-500 font-bold my-4 text-right align-middle '>Premium Plan  <br /> <span>(Charlie - 10,000 BDT/Session)</span> <span className='text-red-500 cursor-pointer hover:underline'>Change</span></p>
                  </div>
                </div>

                <div className='flex justify-between items-center'>
                  <p className=' my-4 text-gray-600 underline'> 
                    Bank A/C:
                  </p>
                  <p className='text-black  font-bold items-center'>
                    DBBL | ***4854 <span className='text-red-500 cursor-pointer hover:underline'>Change</span>
                  </p>
                </div>

                <div className='flex justify-between items-center '>
                  <p className='text-gray-600 underline my-4'>Bank Status:</p>
                  <div className='justify-between'>
                  <p className=' text-green-500 font-bold my-4 text-right align-middle '>1,002.83 BDT | DBBL A/C.</p>
                  </div>
                </div>
              </div>

              {/* Information Upadting Button  */}
              <div className='m-4 text-black text-xl font-bold bg-green-400 text-center p-4 mb-16 rounded-lg hover:bg-gray-500 hover:text-white transition cursor-pointer'>
                <a href="/Profile">Update</a>
              </div>

              {/* Delete Account Button  */}
              <div className='m-4 text-white text-xl font-bold bg-red-500 text-center p-4 mb-16 rounded-lg hover:bg-red-900 hover:text-white transition cursor-pointer'>
                  <a href="/Profile">Delete Your Account</a>
              </div>
          </div>
        </div>
    </>
  )
}

export default Profile
