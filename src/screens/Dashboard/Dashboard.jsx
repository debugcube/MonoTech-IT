import DashboardNavBar from "../../components/DashboardNavbar/DashboardNavBar";

import { Navigate } from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

// react icons 
import { MdVerifiedUser } from "react-icons/md";


const Dashboard = () => {
  return (
    <>
        {/* Upper Notice  */}
        <div className='p-2 bg-blue-500 text-white'>
            <p className='text-center '>Hi, <span className="font-extrabold underline">Ashique!</span> Now time to Work..</p>
        </div>
      
        {/* Logo & Navbar  */}
        <DashboardNavBar />

        <div className="join join-vertical w-full">
            {/* Client Information   */}
            <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" defaultChecked /> 
                <div className="collapse-title text-2xl font-medium text-blue-500">
                Client Information
            </div>
            <div className="collapse-content "> 
                <div className="overflow-x-auto">
                <table className="table w-full">
                    <tbody>
                            {/* row 1 */}
                            <tr className="border border-1px-black">
                                <td className="text-left underline text-gray-600">Client_ID:</td>
                                <td className="text-right font-bold text-black">ASQ-NUBT-92</td>
                            </tr>
                            {/* row 2 */}
                            <tr className="border border-1px-black">
                                <td className="text-left underline text-gray-600">Account No:</td>
                                <td className="text-right font-bold text-black">1000108017 (Personal)</td>
                            </tr>
                            {/* row 3 */}
                            <tr className="border border-1px-black">
                                <td className="text-left underline text-gray-600">Client_Name: </td>
                                <td className="text-right font-bold text-black">Ashique-Ur-Rahman</td>
                            </tr>
                            {/* row 4 */}
                            <tr className="border border-1px-black">
                                <td className="text-left underline text-gray-600">Phone:</td>
                                <td className="text-right font-bold text-black">+880 1751-958392</td>
                            </tr>
                            {/* row 5 */}
                            <tr className="border border-1px-black">
                                <td className="text-left underline text-gray-600">Email:</td>
                                <td className="text-right font-bold text-black">ashik.rahman713@gmail.com</td>
                            </tr>
                            {/* row 6 */}
                            <tr className="border border-1px-black">
                                <td className="text-left underline text-gray-600">Bank A/C:</td>
                                <td className="text-right font-bold text-black">DBBL | ***4854</td>
                            </tr>
                            
                            
                    </tbody>
                </table>  
                </div>
            </div>
            </div>
            {/* Membership Package  */}
            <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" defaultChecked /> 
                <div className="collapse-title text-2xl font-medium text-blue-500">
                MemberShip Informations
            </div>
            <div className="collapse-content "> 
                <div className="overflow-x-auto">
                <table className="table w-full">
                    <tbody>
                            {/* row 1 */}
                            <tr className="border border-1px-black">
                                <td className="text-left underline text-gray-600">Account Status:</td>
                                <td className="text-right font-bold text-green-500 flex items-center gap-2 justify-end">
                                <span>Activated</span> <MdVerifiedUser />
                                </td>
                            </tr>
                            {/* row 2 */}
                            <tr className="border border-1px-black">
                                <td className="text-left underline text-gray-600">MemberShip Package:</td>
                                <td className="text-right font-bold text-green-500">Premium Plan <br /> (Professional) - 20,000 BDT/Session)</td>
                            </tr>
                            {/* row 3 */}
                            <tr className="border border-1px-black">
                                <td className="text-left underline text-gray-600">Bank Status:</td>
                                <td className="text-right font-bold text-green-500">1002.83 BDT (DBBL A/C)</td>
                            </tr>
                            
                    </tbody>
                </table>  
                </div>
            </div>
            </div>
            {/* Pricing and Buying  */}
            <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" defaultChecked /> 
                <div className="collapse-title text-2xl font-medium text-blue-500">
                Pricing and Buying
            </div>
            <div className="collapse-content "> 
                <div className="overflow-x-auto">
                <table className="table w-full">
                    <tbody>
                            {/* row 3 */}
                            <tr className="border border-1px-black">
                                <td className="text-left underline">Buy Limit:</td>
                                <td className="text-right font-bold text-green-500">#Unlimited</td>
                            </tr>
                            {/* row 1 */}
                            <tr className="border border-1px-black">
                                <td className="text-left underline">Cost per Email (USA): </td>
                                <td className="text-right font-bold text-black">210 BDT <br /> (Min. - 50 | Max - Unlimited)</td>
                            </tr>
                            {/* row 2 */}
                            <tr className="border border-1px-black">
                                <td className="text-left underline">Cost per Email (Vietnum): </td>
                                <td className="text-right font-bold text-black">200 BDT <br /> (Min. - 50 | Max - Unlimited)</td>
                            </tr>
                            {/* row 3 */}
                            <tr className="border border-1px-black">
                                <td className="text-left underline">Cost per Email (Singapore): </td>
                                <td className="text-right font-bold text-black">140 BDT <br /> (Min. - 50 | Max - Unlimited)</td>
                            </tr>
                            {/* row 2 */}
                            <tr className="border border-1px-black">
                                <td className="text-left underline">
                                    <select className="select select-info w-full max-w-xs bg-white">
                                        <option className="font-bold text-gray-400" disabled selected>Select Your's Variation</option>
                                        <option className="font-bold">Buy - USA - 210 BDT | Sell - USA - 280 BDT</option>
                                        <option className="font-bold">Buy - Vietnum - 200 BDT | Sell - Vietnum - 270 BDT</option>
                                        <option className="font-bold">Buy - Singapore - 140 BDT | Sell - Singapore - 250 BDT</option>
                                    </select>
                                </td>
                                <td className="text-right font-bold text-gray-400">
                                    <select className="select select-info w-full max-w-xs bg-white">
                                        <option className="font-bold text-gray-400" disabled selected>Select Quantity</option>
                                        <option className="font-bold text-black">2</option>
                                        <option className="font-bold text-black">4</option>
                                        <option className="font-bold text-black">5</option>
                                        <option className="font-bold text-black">10</option>
                                        <option className="font-bold text-black">20</option>
                                        <option className="font-bold text-black">30</option>
                                        <option className="font-bold text-black">40</option>
                                        <option className="font-bold text-black">50</option>
                                        <option className="font-bold text-black">100</option>
                                        <option className="font-bold text-black">200</option>
                                        <option className="font-bold text-black">300</option>
                                        <option className="font-bold text-black">400</option>
                                        <option className="font-bold text-black">500</option>
                                    </select>
                                </td>
                            </tr>
                            
                            
                    </tbody>
                    
                </table>  
                    
                </div>

                <button className="btn btn-wide w-full bg-white">Buy Now!</button>
                <button className="btn btn-wide w-full bg-white">Sell Now!</button>

            </div>
            </div>
            {/* Stocks & Sales  */}
            <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" defaultChecked /> 
                <div className="collapse-title text-2xl font-medium">
                <span className="text-blue-500">Stocks & Sales <span className="text-sm text-green-500">(Active One)</span></span>
            </div>
            <div className="collapse-content "> 
                <div className="overflow-x-auto">
                <table className="table w-full">
                    <tbody>
                            {/* row 1 */}
                            <tr className="border border-1px-black">
                                <td className="text-left underline text-gray-600">Txn_ID: </td>
                                <td className="text-right font-bold text-black"> 10009072450</td>
                            </tr>
                            {/* row 1 */}
                            <tr className="border border-1px-black">
                                <td className="text-left underline text-gray-600">Total_Cost</td>
                                <td className="text-right font-bold text-black"> 20,000 BDT</td>
                            </tr>
                            {/* row 3 */}
                            <tr className="border border-1px-black">
                                <td className="text-left underline text-gray-600">Email(s) Sold:</td>
                                <td className="text-right font-bold text-black">2</td>
                            </tr>
                            {/* row 2 */}
                            <tr className="border border-1px-black">
                                <td className="text-left underline text-gray-600">Available Email(s):</td>
                                <td className="text-right font-bold text-black">90</td>
                            </tr>
                            
                            {/* row 4 */}
                            <tr className="border border-1px-black">
                                <td className="text-left underline text-gray-600">Disabled:</td>
                                <td className="text-right font-bold text-black">Calculating...</td>
                            </tr>
                            {/* row 5 */}
                            <tr className="border border-1px-black">
                                <td className="text-left underline text-gray-600">Current Selling Rate: </td>
                                <td className="text-right font-bold text-black">250 BDT - 300 BDT</td>
                            </tr>
                            {/* row 6 */}
                            <tr className="border border-1px-black">
                                <td className="text-left underline text-gray-600">Est. Net Worth:</td>
                                <td className="text-right font-bold text-black">28,000 BDT</td>
                            </tr>
                            {/* row 7 */}
                            <tr className="border border-1px-black">
                                <td className="text-left underline text-gray-600">Total Sale:</td>
                                <td className="text-right font-bold text-black ">500 BDT</td>
                            </tr>
                            {/* row 8 */}
                            <tr className="border border-1px-black">
                                <td className="text-left underline text-gray-600">Total Profit:</td>
                                <td className="text-right font-bold text-black">Calculating...</td>
                            </tr>
                            
                            {/* row 9 */}
                            <tr className="border border-1px-black">
                                <td className="text-left underline text-gray-600">Status:</td>
                                <td className="text-right font-bold text-green-500">#Processing...</td>
                            </tr>
                            
                            
                    </tbody>
                </table>  
                </div>
            </div>
            </div>
            {/* Transactions Pending  */}
            <div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" defaultChecked /> 
                    <div className="collapse-title text-2xl font-medium text-blue-500">
                    Transaction(s) Pending
                </div>
                <div className="collapse-content "> 
                    <div className="overflow-x-auto">
                    <table className="table w-full">
                        <tbody>
                                {/* row 1 */}
                                <tr className="border border-1px-black">
                                    <td className="text-left font-bold">JYN-AVR-239</td>
                                    <td className="text-right font-bold text-red-500">1,800 BDT</td>
                                </tr>
                                {/* row 2 */}
                                <tr className="border border-1px-black">
                                    <td className="text-left font-bold">APB-NUBT-42</td>
                                    <td className="text-right font-bold text-red-500">900 BDT</td>
                                </tr>
                                {/* row 3 */}
                                <tr className="border border-1px-black">
                                    <td className="text-left font-bold">AVR-NUBT-23</td>
                                    <td className="text-right font-bold text-red-500">700 BDT</td>
                                </tr>
                                
                                <tr>
                                    <td>
                                    <button className="btn w-full bg-white">
                                        Total Pending(s) - 
                                    </button>
                                    </td>
                                    <td>
                                    <button className="btn w-full text-red-500 bg-white">
                                    3,400 BDT
                                    </button>
                                    </td>
                                </tr>
                        </tbody>

                    </table>  
                    </div>
                </div>
                </div>  
            </div>
            {/* OverView  */}
            <div>
            <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" defaultChecked /> 
                <div className="collapse-title text-2xl font-medium text-blue-500">
                OverView
            </div>
                <div className="collapse-content "> 
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <tbody>
                                    {/* row 1 */}
                                    <tr className="border border-1px-black">
                                        <td className="text-left font-normal text-gray-600 underline">Est. Balance:</td>
                                        <td className="text-right font-bold text-black">25,000 - 27,000 BDT</td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr className="border border-1px-black">
                                        <td className="text-left text-gray-600 font-normal underline">Available Balance:</td>
                                        <td className="text-right font-bold text-black">1002.83 BDT (DBBL A/C)</td>
                                    </tr>
                                    {/* row 3 */}
                                    <tr className="border border-1px-black">
                                        <td className="text-left text-gray-600 font-normal underline">Debt.</td>
                                        <td className="text-right font-bold text-red-600">300 BDT - FSK-KMC-58</td> 
                                    </tr>
                                    {/* row 4 */}
                                    <tr className="border border-1px-black">
                                        <td className="text-left text-gray-600 font-normal underline">WithDrawable Balance:</td>
                                        <td className="text-right font-bold text-black">Null</td>
                                    </tr>
                                    
                            </tbody>

                        </table>  
                    </div>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard