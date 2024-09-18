import { useRoutes, BrowserRouter } from 'react-router-dom';
import { Parameters } from '../Parammeters';
import { Ranges } from '../Ranges';
import { ListCharge } from '../ListCharge';
import { Eyelashes } from '../Components/Eyelashes';

import './App.css'

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/parameters', element: <Parameters />},
    { path: '/ranges', element: <Ranges />},
    { path: '/listcharge', element: <ListCharge />},
  ])

  return routes
}

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Eyelashes />
    </BrowserRouter>
  )
}

export {App}
