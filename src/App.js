import NavBar from "./Components/NavBar"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from "./Pages/HomePage"
import AdminPage from "./Pages/AdminPage"
import Login from "./Pages/Login"
import Profile from "./Pages/Profile"
import "./main.css"
import { myContext } from "./Pages/Context"
import Register from "./Pages/Register"
import { useContext } from "react"


function App() {
  const ctx = useContext(myContext)
  return (
    <BrowserRouter>
        <NavBar />
        <Switch>
        <Route path='/' exact component={HomePage}></Route>
          {ctx ? (
            <Switch>
              {ctx.isAdmin ? (<Route path='/admin' exact component={AdminPage}></Route>) : null}
              <Route path='/profile' exact component={Profile}></Route>
            </Switch>
          ) : (
            <Switch>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/register' exact component={Register}></Route>
            </Switch>
          )}
        </Switch>
    </BrowserRouter>
  );
}

export default App;
