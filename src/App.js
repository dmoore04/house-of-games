import "./App.css"
import Header from "./components/Header"
import Nav from "./components/Nav"
import Reviews from "./components/Reviews"
import { Switch, Route } from "react-router"

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Switch>
        <Route exact path="/">
          <Reviews />
        </Route>
      </Switch>
    </div>
  )
}

export default App
