import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddCourse from './pages/AddCourse'
import Cart from './pages/Cart'
import CourseList from './pages/CourseList'
import EditCourse from './pages/EditCourse'
import Layout from './pages/Layout'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import './App.css'
import Protected from './routes/Protected'

const App = () => {
  let myRouter = createBrowserRouter([
    {
      path: '/',
      element : <Layout/>,
      children:[
        {
          path: "/",
          element: <Protected><CourseList/></Protected>
        },
        {
          path: "/editcourse/:id",
          element: <EditCourse/>
        },
        {
          path: "/addcourse",
          element: <AddCourse/>
        },
        {
          path: "/cart",
          element: <Cart/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/signup",
          element: <SignUp/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={myRouter}/>
  )
}

export default App