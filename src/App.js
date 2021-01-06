import React, { useState, useEffect } from "react";
import "./App.css";
import AddIncome from "./components/AddIncome";
import Home from "./components/Home";
import Hrana from "./components/Hrana";
import Zajeb from "./components/Zajeb";
import { Switch, Route, withRouter, Link } from "react-router-dom";

function App() {
  // STATES
  // App
  const [showAlert, setShowAlert] = useState(false)
  const [myMoney, setMyMoney] = useState(0);
  // AddMoney
  const [addedMoney, setAddedMoney] = useState(0)
  const [moneyFlow, setMoneyFlow] = useState([])
  // Hrana
  const [myHrana, setMyHrana] = useState(0);
  // Zajeb
  const [myZajeb, setMyZajeb] = useState(0);
  


  const showNoMoney = () => {
    if (myMoney <= 0){
      setShowAlert(true)
    } else {
      setShowAlert(false)
    }
  }

  useEffect(() => {
    showNoMoney()
  })
  

  return (
    <div className="App">

      {
        showAlert ? (<div className="noMoney"><h1>You have no money!</h1></div>) : null
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
                moneyFlow={moneyFlow}
                setMoneyFlow={setMoneyFlow}
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
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div><h1 className="allMoney">Money in Wallet: {myMoney}€</h1></div>
      </Link>
    </div>
  );
}

export default withRouter(App);
