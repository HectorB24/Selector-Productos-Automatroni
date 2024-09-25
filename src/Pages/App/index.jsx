import { useRoutes, BrowserRouter } from 'react-router-dom';
import { Measures } from '../Measures';
import { Draw } from '../Draw';
import { List } from '../List';
import { Eyelashes } from '../Components/Eyelashes';

import './App.css'

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/measures', element: <Measures />},
    { path: '/draw', element: <Draw />},
    { path: '/list', element: <List />},
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
