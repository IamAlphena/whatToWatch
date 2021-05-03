import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import SearchPage from './pages/searchpage';

function App() {
  return (
    <Router>
      <div>
      <Header />
      {/* Nav here */}
        <Switch>
          <Route exact path='/' component={SearchPage} />
        </Switch>
      <Footer />
      </div>
    </Router>

  );
}

export default App;
