import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { TOKEN } from "./util/config";
import { fetchMe } from "./store/action/auth";
import { AuthRoute, PrivateRoute } from "./HOCs/Routes";

import Home from "./View/Home";
import Signup from "./View/Signup";
import Signin from "./View/Signin";
import Category from "./View/Category";
import Jobs from "./View/Jobs";
import Detail from "./View/Detail";
import UserInfo from "./View/UserInfo";
import Loading from "./Components/LoadingScreen";

export const history = createBrowserHistory("./HOCs/Routes");

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem(TOKEN);
    if (token)
      dispatch(
        fetchMe(() => {
          window.location.reload();
        })
      );
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        <AuthRoute path="/signin" component={Signin} redirectPath="/" />
        <AuthRoute path="/signup" component={Signup} redirectPath="/" />
        <AuthRoute path="/category" component={Category} redirectPath="/" />
        <AuthRoute path="/categories/jobs" component={Jobs} redirectPath="/" />
        <AuthRoute path="/detail/:id" component={Detail} redirectPath="/" />
        <PrivateRoute path="/me" component={UserInfo} redirectPath="/" />

        <AuthRoute path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
