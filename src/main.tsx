import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import{
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import AD1 from './assets/components/Admin/AD1.tsx'
import AD3 from './assets/components/Admin/AD3.tsx'
import AD2 from './assets/components/Admin/AD2.tsx'

const router = createBrowserRouter([
  {
    path: "/Home",
    element: <App />,
  },
  {
    path: "/AD1",
    element: <AD1 />,
  },
  {
    path: "/AD2",
    element: <AD2 />,
  },
  {
    path: "/AD3",
    element: <AD3 />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <App />
  
  </StrictMode>,
)
