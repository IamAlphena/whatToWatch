import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import Search from './pages/searchpage';

function App() {
  return (
    <Router>
      <div>
      <Header />
      {/* Nav here */}
        <Switch>
          <Route exact path='/' component={Search} />
        </Switch>
      <Footer />
      </div>
    </Router>

  );
}

export default App;
