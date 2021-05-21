import "./App.css";
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from './components/Footer';
import SearchPage from "./pages/searchpage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MovieDetails from "./pages/detailpage";
import MyList from "./pages/listpage";
import Navbar from "./components/Navbar";
import { StoreProvider } from "./utils/GlobalState";
import useToken from './utils/useToken';


function App() {
  const {token, setToken} = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <Router>
      <StoreProvider>
        <div>
          <Header />
          <Navbar />
          <Switch>
            <Route exact path="/" component={SearchPage} />
            <Route exact path="/search" component={SearchPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={SignUp} />
            <Route path="/details/:id" component={MovieDetails} />
            <Route path="/mylist" component={MyList} />
          </Switch>
          <Footer />
        </div>
      </StoreProvider>
    </Router>
  );
}

export default App;
