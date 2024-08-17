

const MakeWithdraw = () => {
  return (
    <>
        <div className="flex justify-center">
            
            {/* Title  */}
            <p className="text-blue-500 text-xl font-bold text-center my-12 border border-b-8 border-blue-500 inline-block border-t-0 border-r-0 border-l-0 rounded-lg">
                Make a Withdrawal
            </p>
        </div>

        {/* WithDrawal Form  */}
        <form className="text-center text-black flex flex-col">
            <label className="text-black font-bold">
                Select Payment Gateway
            <input
            className="bg-gray-200 py-2 w-96 mx-4 my-4 text-center cursor-not-allowed text-black" 
            type="text" 
            placeholder="DBBL | ***4854"
            disabled
            />
            </label>

            <label className="text-black font-bold">
                Enter Amount
            <input
            className="bg-gray-200 py-2 w-96 mx-4 my-4 text-center text-black" 
            type="text" 
            placeholder="Min. 500 BDT"
            />
            </label>
            
            <label className="text-black font-bold">
                Enter Password
            <input
            className="bg-gray-200 py-2 w-96 mx-4 my-4 text-center text-black" 
            type="text" 
            placeholder="Verify Account Password"
            />
            </label>
        </form>

        {/* Request withdraw button  */}
        <div className='m-4 text-white text-xl font-bold bg-blue-500 text-center p-4 mb-16 rounded-lg hover:bg-blue-900 hover:text-white transition cursor-pointer'>
                  <a href="/Withdrawals">Request a WithDraw</a>
              </div>

              <div className="text-center text-red-500">
                *It will take 5-10 minutes to confirm your withdrawal request, keep patience..
              </div>
              <div className="text-center text-red-500 my-4">
                <span  className="text-black">*Facing any problem...?</span>  
                
                <span>
                    <a className="hover:underline " href="#">Click Here!</a>
                </span>
              </div>

    </>
  )
}

export default MakeWithdraw
