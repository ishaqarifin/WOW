// import {useContext, useEffect} from "react";
import {Switch, Route} from "react-router-dom"
// import { UserContext } from "./context/userContext";

import Landing from './pages/Landing';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Subscribe from './pages/Subscribe';
import ListData from './pages-admin/ListData';
import AddBook from "./pages-admin/AddBook";
import DetailBook from "./pages/DetailBook";
import ReadBook from "./pages/ReadBook";
import SignIn from "./component/modal/SignIn";


function App() {

  return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/profile" component={Profile} />
        <Route path="/subscribe" component={Subscribe} />
        <Route path="/listdata" component={ListData} />
        <Route path="/addbook" component={AddBook} />
        <Route path="/detailbook" component={DetailBook} />
        <Route path="/readbook" component={ReadBook} />
        <Route path="/sigin" component={SignIn} />
      </Switch>
  );
}

export default App;
