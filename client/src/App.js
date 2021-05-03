import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import SearchPage from './pages/searchpage';
import MovieDetails from './pages/detailpage';
import Navbar from "./components/Navbar"

function App() {
  return (
    <Router>
      <div>
      <Header />
      <Navbar/>
        <Switch>
          <Route exact path='/' component={SearchPage} />
          <Route exact path='/details' component={MovieDetails} />
        </Switch>
      <Footer />
      </div>
    </Router>

  );
}

export default App;
