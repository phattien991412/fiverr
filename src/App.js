import React, { useEffect } from "react";
import Home from "./View/Home";
// import Detail from "./views/Detail";
import HomeTemplate from "./templates/HomeTemplate";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuthRoute, PrivateRoute } from "./HOCs/Routes";
// import { fetchMe } from "./store/action/signIn";
import Signup from "./View/Signup";
import Signin from "./View/Signin";
import { useDispatch } from "react-redux";
function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const token = localStorage.getItem("t");
  //   if (token) {
  //     dispatch(fetchMe);
  //   }
  // }, []);
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/detail/:id" component={Detail} /> */}
        <AuthRoute path="/signin" Component={Signin} redirectPath="/" />
        <AuthRoute path="/signup" Component={Signup} redirectPath="/" />
        <HomeTemplate path="/" exact Component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
