import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from './components/Footer';
import SearchPage from "./pages/searchpage";
import LogIn from "./pages/Login";
import SignUp from "./pages/SignUp";
import MovieDetails from "./pages/detailpage";
import MyList from "./pages/listpage"
import Navbar from "./components/Navbar";
import { StoreProvider } from "./utils/GlobalState";

function App() {
  return (
    <Router>
      <StoreProvider>
        <div>
          <Switch>
            <Route exact path="/" component={LogIn} />
            <Route exact path="/register" component={SignUp} />
            <Header />
            <Navbar />
            <Route exact path="/search" component={SearchPage} />
            <Route path="/details/:id" component={MovieDetails} />
            <Route path="/mylist" component={MyList}/>
          </Switch>
          <Footer />
        </div>
      </StoreProvider>
    </Router>
  );
}

export default App;
