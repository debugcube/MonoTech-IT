
import { BrowserRouter, Routes, Route } from "react-router-dom"

// importing pages 
import Signin from "./screens/Auth/Signin"
import Signup from "./screens/Auth/Signup"
import SignupSuccess from "./screens/Auth/SignupSuccess"
import Dashboard from "./screens/Dashboard/Dashboard.jsx"
import Profile from "./screens/Profile/Profile.jsx"
import Setting from "./screens/Setting/Setting.jsx"
import Signout from "./screens/Signout/Signout.jsx"
import Withdrawals from "./screens/Withdrawals/Withdrawals.jsx"
import MakeWithdraw from "./screens/Withdrawals/MakeWithdraw.jsx"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* HomePage  */}
          <Route 
            path="/"
            element={
              <Signin />
            }
          />

          {/* Signup */}
          <Route 
            path="/signup"
            element={
              <Signup />
            }
          />

          {/* SignupSuccess */}
          <Route 
            path="/SignupSuccess"
            element={
              <>
                <SignupSuccess />
              </>
            }
          />

            {/* Dashboard  */}
            <Route 
              path="/Dashboard"
              element={
                <>
                  
                    <Dashboard />
                  
                </>
              }
            />

            {/* Profile page  */}
            <Route 
              path="/Profile"
              element={
                <>
                  <Profile />
                </>
              }
            />

            {/* Setting page  */}
            <Route 
              path="/Setting"
              element={
                <>
                  <Setting />
                </>
              }
            />

              {/* Signout  */}
            <Route 
              path="/Signout"
              element={
                <>
                  <Signout />
                </>
              }
            />

            {/* Withdrawals  */}
            <Route 
              path="/Withdrawals"
              element={
                <>
                  <Withdrawals />
                </>
              }
            />

            <Route 
              path="/MakeWithdraw"
              element={
                <>
                  <MakeWithdraw />
                </>
              }
            />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
