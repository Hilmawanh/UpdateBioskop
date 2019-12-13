import React, { Component } from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { LoginSuccessAction } from "./redux/actions";
import Axios from "axios";
import { APIURL } from "./suport/apiUrl";

import SimpleSlider from "./components/carousel";
import Header from "./components/header";
import Footer from "../src/components/footer";
import Home from "./pages/home";
import ManageAdmin from "./pages/manageadmin";
import NowPlaying from "./pages/nowPlaying";
import Cart from "./pages/cart";
import ViewDetails from "./pages/viewDetails";
import Belitiket from "./pages/belitiket";
import Login from "./pages/login";
import Register from "./pages/register";
import Ganemu from './pages/ganemu'
import Logout from "./pages/logout";

class App extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    // console.log(this.props);
    var id = localStorage.getItem("hapis");
    // console.log(id);
    Axios.get(`${APIURL}users/${id}`)
      .then(res => {
        this.props.LoginSuccessAction(res.data);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading</div>;
    }
    return (
      <div>
        <Header />
        <Switch>
          {/* <SimpleSlider /> */}
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/manageadmin"} component={ManageAdmin} />
          <Route exact path={"/now-playing"} component={NowPlaying} />
          <Route exact path={"/cart"} component={Cart} />
          <Route exact path={"/view-details/:id"} component={ViewDetails} />
          <Route exact path={"/login"} component={Login} />
          <Route exact path={"/belitiket"} component={Belitiket} />
          <Route exact path={"/register"} component={Register} />
          <Route exact path={"/logout"} component={Logout} />
          <Route path='/*' component={Ganemu} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const MapStateToProps = state => {
  return {
    AuthLog: state.Auth.login
  };
};

export default connect(MapStateToProps, { LoginSuccessAction })(App);
