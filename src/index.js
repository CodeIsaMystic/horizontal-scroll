import React from "react";
import ReactDOM from "react-dom/client";
import Loadable from "react-loadable";

import "./styles/home.scss";
import "./styles/reset.scss";

const loader = () => <div>Loading.</div>;
//
const HomeLazy = Loadable({
  loader: () => import("./containers/GOD"),
  loading: loader,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <HomeLazy />
  </>
);
