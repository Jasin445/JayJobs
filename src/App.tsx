import { createBrowserRouter, RouterProvider } from "react-router-dom"
import PageContent from "./Component/PageContent"
import Layout from "./Component/Layout"
import LandingPage from "./LandingPage"
import Authentication from "./Pages/Authentication"
import { action as signupAction, actionOTP } from "./Component/ActionsAndLoaders"
import { action as passwordReset1 } from "./Component/ActionsAndLoaders"
import { loader } from "./Component/utils"
import EmailVerification from "./Pages/EmailVerification"
import PasswordReset from "./Pages/PasswordReset"
import RequestEmail from "./Pages/RequestEmail"
import EmailSuccess, { PasswordResetSuccess } from "./Pages/EmailSuccess"
import ErrorComponent from "./Component/ErrorComponent"
import PasswordFailure from "./Pages/passwordError"
import Dashboard from "./Pages/Dashboard"
import Profile from "./Pages/Profile"
import Job from "./Pages/Job"
import Application from "./Pages/Applications"
import Settings from "./Pages/Settings"
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <p>An Error Occurred</p>,
    children: [
      {
        index: true,
        element: <LandingPage />
      },
  ]
  },
  {
    path: '/jayjobs',
    element: <PageContent />,
    loader: loader,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: 'myprofile',
        element: <Profile />
      },
      {
        path: 'myjobs',
        element: <Job />
      },
      {
        path: 'myapplications',
        element: <Application />
      },
      {
        path: 'settings',
        element: <Settings />
      },
    ]
  },
  {
    path: '/authentication',
    element: <Authentication />,
    action: signupAction,
    errorElement: <ErrorComponent />  },
  {
    path:'/authentication/emailverify',
    element: <EmailVerification />,
    action: actionOTP,
    errorElement: <ErrorComponent />
  },
  {
    path:'/auth/passwordReset',
    element: <PasswordReset />,
    action: actionOTP,
    errorElement: <ErrorComponent />
  },
  {
    path:'/auth/passwordAuth',
    element: <RequestEmail />,
    action: passwordReset1,
    errorElement: <ErrorComponent />
  },
  {
    path:'/auth/emailSuccess',
    element: <EmailSuccess />,
  },
  {
    path:'/auth/passwordResetSuccess',
    element: <PasswordResetSuccess />,
  },
  {
    path: '/auth/passwordResetFailed',
    element: <PasswordFailure />
  }
 
])

function App() {
  
  return <RouterProvider router={router}/>
   
  
}

export default App
