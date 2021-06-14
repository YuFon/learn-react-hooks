import React, { Suspense } from "react";
import { Router, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

const UseState = React.lazy(() => import("./views/UseState"));
const UseEffect = React.lazy(() => import("./views/UseEffect"));
const UseRef = React.lazy(() => import("./views/UseRef"));

function App() {
  return (
    <Router history={createBrowserHistory()}>
      <div style={{ display: "flex" }}>
        <ul
          style={{
            width: "120px",
            height: "100vh",
            marginRight: "20px",
            borderRight: "1px solid #aaa",
          }}
        >
          <li>
            <Link to="./useState">useState</Link>
          </li>
          <li>
            <Link to="./useEffect">useEffect</Link>
          </li>
          <li>
            <Link to="./useRef">useRef</Link>
          </li>
        </ul>
        <div>
          <Switch>
            <Suspense fallback="404">
              <Route path="/useState" component={UseState} />
              <Route path="/useEffect" component={UseEffect} />
              <Route path="/useRef" component={UseRef} />
            </Suspense>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;