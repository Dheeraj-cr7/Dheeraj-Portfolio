import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './componens/Home.jsx'
import About from './componens/About.jsx'
import Contact from './componens/Contact.jsx'
import Project from './componens/Project.jsx'
import FarmAppDetails from './componens/farmAppDetails.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />}>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='projects' element={<Project />} />
        <Route path='contact' element={<Contact />} />
      </Route>
      <Route path='/projects/farm-app-details' element = {<FarmAppDetails />} />
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
