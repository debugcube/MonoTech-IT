import NavBar from "../../components/Shared/NavBar/NavBar"


const Withdrawals = () => {
  return (
    <>
        <div>
            
            {/* Logo & Navbar  */}
            <NavBar />


            


            {/* Withdrawals Title  */}
            <h2 className='text-black text-xl font-bold underline mx-8 my-2 '>Withdrawals Information</h2>

            {/* Make a withdraw button  */}
            <p className="bg-green-500 text-white inline-block p-4 rounded-lg m-8">
                <a href="/MakeWithdraw">
                Make a Withdrawal
                </a>
            </p>

            {/* Withdraw record table  */}
            <table className="w-full text-black border border-1 text-center">
                <thead className="border border-1 font-bold ">
                    <td>Txn_ID</td>
                    <td>Date</td>
                    <td>Amount</td>
                    <td>Platform</td>
                    <td>Status</td>
                </thead>
                <tr className="border border-1">
                    <td>SIBFYU4</td>
                    <td>10 June, 24</td>
                    <td>5,000 BDT</td>
                    <td>DBBL | ***4854</td>
                    <td>Succeed</td>
                </tr>
                <tr className="border border-1">
                    <td>SIBFYU4</td>
                    <td>5 June, 24</td>
                    <td>3,000 BDT</td>
                    <td>DBBL | ***4854</td>
                    <td>Succeed</td>
                </tr>
                <tr className="border border-1">
                    <td>SIBFYU4</td>
                    <td>29 May, 24</td>
                    <td>16,000 BDT</td>
                    <td>DBBL | ***4854</td>
                    <td>Succeed</td>
                </tr>
                <tr className="border border-1">
                    <td>SIBFYU4</td>
                    <td>22 May, 24</td>
                    <td>9,000 BDT</td>
                    <td>DBBL | ***4854</td>
                    <td>Succeed</td>
                </tr>
                <tr className="border border-1">
                    <td>SIBFYU4</td>
                    <td>17 May, 24</td>
                    <td>12,000 BDT</td>
                    <td>DBBL | ***4854</td>
                    <td>Succeed</td>
                </tr>
                <tr className="border border-1">
                    <td>SIBFYU4</td>
                    <td>8 May, 24</td>
                    <td>5,000 BDT</td>
                    <td>DBBL | ***4854</td>
                    <td>Succeed</td>
                </tr>
                <tr className="border border-1">
                    <td>SIBFYU4</td>
                    <td>2 May, 24</td>
                    <td>10,000 BDT</td>
                    <td>DBBL | ***4854</td>
                    <td>Succeed</td>
                </tr>
            </table>

        </div>
    </>
  )
}

export default Withdrawals
