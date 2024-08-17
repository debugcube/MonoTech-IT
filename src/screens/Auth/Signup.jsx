import Branding from "../../assets/Branding/MonoTech-Pvt-Ltd.png"

const Signup = () => {

 

  return (
    <div className="">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-24 w-auto"
            src={Branding}
            alt="DebugCube Email Marketing Portal"
          />
          <h2 className=" mt-10 text-center text-2xl font-bold  tracking-tight text-gray-900">
              <div className="flex flex-col ">
              <span className="text-blue-500">Email Marketing Portal</span>
              <br /> 
              <div>
                <span className="border border-b-4 border-t-0 border-l-0 border-r-0 border-blue-500 rounded">Signup</span> 
                <p className="text-sm font-normal my-4 text-blue-500 cursor-pointer">
                  Be Our Client Now!! <br />
                  Exiciting Offers waiting for you!!
                </p>
              </div>
              </div>
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" >
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Client_Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="number"
                  
                  autoComplete="text"
                  required
                  placeholder="John Clington"
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-100"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Phone
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="phone"
                  autoComplete="phone"
                  required
                  placeholder="+88 01***-******"
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-100"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                 
                  autoComplete="email"
                  required
                  placeholder="john@gmail.com"
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-100"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Bank A/C No. | bKash A/C No. | Nagad A/C No. | Binance Wallet Address | Coinbase Wallet Address
              </label>
              <div className="mt-2">
                <input
                  id="bank"
                  name="bank"
                  type="number"
               
                  autoComplete="bank"
                  required
                  placeholder="A/C No. | Wallet Address"
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-100"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an Account?{' '}
            <a href="/" className="font-semibold leading-6 text-blue-500 hover:text-indigo-500">
              Sign in?
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup
