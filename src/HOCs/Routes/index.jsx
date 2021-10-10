import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
//HOC function component
const createRoute = (condition) => {
  return class extends Component {
    render() {
      const { path, Component: RouteComponent, redirectPath } = this.props;
      return (
        <Route
          path={path}
          render={(routeProps) => {
            if (condition()) {
              return (
                <RouteComponent
                
                {...routeProps}
                />
              );
            }
            return <Redirect to={redirectPath} />;
          }}
        />
      );
    }
  };
};
export const AuthRoute = createRoute(() => !localStorage.getItem("t"));