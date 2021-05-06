import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
// import Footer from './components/Footer';
import SearchPage from "./pages/searchpage";
import MovieDetails from "./pages/detailpage";
import Navbar from "./components/Navbar";
import { StoreProvider } from "./utils/GlobalState";

function App() {
  return (
    <Router>
      <StoreProvider>
        <div>
          <Header />
          <Navbar />
          <Switch>
            <Route exact path="/" component={SearchPage} />
            <Route path="/details/:id" component={MovieDetails} />
          </Switch>
          {/* <Footer /> */}
        </div>
      </StoreProvider>
    </Router>
  );
}

export default App;
