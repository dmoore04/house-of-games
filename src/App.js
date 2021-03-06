import "./App.css"
import Header from "./components/Header"
import Nav from "./components/Nav"
import Reviews from "./components/Reviews"
import Review from "./components/Review"
import Page404 from "./components/Page404"
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
        <Route exact path="/categories/:category_slug">
          <Reviews />
        </Route>
        <Route exact path="/reviews/:review_id">
          <Review />
        </Route>
        <Route path="/">
          <Page404 />
        </Route>
      </Switch>
    </div>
  )
}

export default App
