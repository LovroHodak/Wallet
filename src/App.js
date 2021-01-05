import React, { useState, useEffect } from "react";
import "./App.css";
import AddIncome from "./components/AddIncome";
import Home from "./components/Home";
import Hrana from "./components/Hrana";
import Zajeb from "./components/Zajeb";
import { Switch, Route, withRouter, Link } from "react-router-dom";

function App() {
  const [showAlert, setShowAlert] = useState(false)
  const [myMoney, setMyMoney] = useState(0);
  const [addedMoney, setAddedMoney] = useState(0)
  const [myHrana, setMyHrana] = useState(0);
  const [myZajeb, setMyZajeb] = useState(0);


  const showNoMoney = () => {
    if (myMoney === 0){
      setShowAlert(true)
    } else {
      setShowAlert(false)
    }
    console.log(myMoney)
  }

  useEffect(() => {
    showNoMoney()
  })
  

  return (
    <div className="App">
      <Link to="/">
        <h1 className="allMoney">Money in Wallet: {myMoney}€</h1>
      </Link>
      {
        showAlert ? (<h1 className="noMoney">You have no money!</h1>) : null
      }
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Home />;
          }}
        />
        <Route
          path="/addIncome"
          render={(routeProps) => {
            return (
              <AddIncome
                addedMoney={addedMoney}
                setAddedMoney={setAddedMoney}
                myMoney={myMoney}
                setMyMoney={setMyMoney}
                {...routeProps}
              />
            );
          }}
        />
        <Route
          path="/hrana"
          render={(routeProps) => {
            return (
              <Hrana
                myMoney={myMoney}
                setMyMoney={setMyMoney}
                myHrana={myHrana}
                setMyHrana={setMyHrana}
                {...routeProps}
              />
            );
          }}
        />
        <Route
          path="/zajeb"
          render={(routeProps) => {
            return (
              <Zajeb
                myMoney={myMoney}
                setMyMoney={setMyMoney}
                myZajeb={myZajeb}
                setMyZajeb={setMyZajeb}
                {...routeProps}
              />
            );
          }}
        />
      </Switch>
    </div>
  );
}

export default withRouter(App);
