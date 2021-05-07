import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
// import Footer from './components/Footer';
import SearchPage from "./pages/searchpage";
import LogIn from "./pages/Login";
import SignUp from "./pages/SignUp";
import MovieDetails from "./pages/detailpage";
import MyList from "./pages/listpage"
import Navbar from "./components/Navbar";
import { StoreProvider } from "./utils/GlobalState";
import { Hero } from "react-bulma-components";

function App() {
  return (
    <Router>
      <StoreProvider>
        <div>
          <Switch>
          <Hero.Body>
            <Route exact path="/" component={LogIn} />
            </Hero.Body>
            <Header />
            <Navbar />
            <Route exact path="/search" component={SearchPage} />
            <Route path="/details/:id" component={MovieDetails} />
            <Route path="/mylist" component={MyList}/>
          </Switch>
          {/* <Footer /> */}
        </div>
      </StoreProvider>
    </Router>
  );
}

export default App;
