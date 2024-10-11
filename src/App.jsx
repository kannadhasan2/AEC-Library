import {Route,Switch ,BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from "./components/Login"
import Register from './components/Register'

const App = () =>  (
      <>
      <BrowserRouter>
      <Switch>
      <Route exact  path="/login" component={Login}  />
      <Route exact path="/register" component={Register} />
      </Switch>
      </BrowserRouter>
      </>
    )
  

export default App