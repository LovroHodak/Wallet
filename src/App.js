import React, { useState, useEffect } from "react";
import "./App.css";
import AddIncome from "./components/AddIncome";
import Home from "./components/Home";
import Hrana from "./components/Hrana";
import Zajeb from "./components/Zajeb";
import Tobaco from "./components/Tobaco";
import Expenses from "./components/Expenses";
import ExLora1 from "./components/ExLora1";
import ExLora2 from "./components/ExLora2";
import Energetika1 from "./components/Energetika1";
import Energetika2 from "./components/Energetika2";
import Elektro from "./components/Elektro";
import Rtv from "./components/Rtv";
import Internet from "./components/Internet";
import Mobitel from "./components/Mobitel";
import Netflix from "./components/Netflix";
import Other from "./components/Other";
import Vacation from "./components/Vacation";
import { Switch, Route, withRouter, Link } from "react-router-dom";

function App() {
  // STATES
  // App
  const [showAlert, setShowAlert] = useState(false);
  const [myMoney, setMyMoney] = useState(0);
  // AddMoney
  const [addedMoney, setAddedMoney] = useState(0);
  const [moneyFlow, setMoneyFlow] = useState([]);
  // Hrana
  const [myHrana, setMyHrana] = useState(0);
  const [hranaFlow, setHranaFlow] = useState([]);
  // Zajeb
  const [myZajeb, setMyZajeb] = useState(0);
  const [zajebFlow, setZajebFlow] = useState([]);
  // Tobaco
  const [myTobaco, setMyTobaco] = useState(0);
  const [tobacoFlow, setTobacoFlow] = useState([]);
  // Expenses
  const [myExpenses, setMyExpenses] = useState(0);
  // ExLora1
  const [exLora1, setExLora1] = useState(0);
  const [exLora1Flow, setExLora1Flow] = useState([]);
  // ExLora2
  const [exLora2, setExLora2] = useState(0);
  const [exLora2Flow, setExLora2Flow] = useState([]);
  // Energetika1
  const [energetika1, setEnergetika1] = useState(0);
  const [energetika1Flow, setEnergetika1Flow] = useState([]);
  // Energetika2
  const [energetika2, setEnergetika2] = useState(0);
  const [energetika2Flow, setEnergetika2Flow] = useState([]);
  // Elektro
  const [elektro, setElektro] = useState(0);
  const [elektroFlow, setElektroFlow] = useState([]);
  // Rtv
  const [rtv, setRtv] = useState(0);
  const [rtvFlow, setRtvFlow] = useState([]);
  // Internet
  const [internet, setInternet] = useState(0);
  const [internetFlow, setInternetFlow] = useState([]);
  // Mobitel
  const [mobitel, setMobitel] = useState(0);
  const [mobitelFlow, setMobitelFlow] = useState([]);
  // Netflix
  const [netflix, setNetflix] = useState(0);
  const [netflixFlow, setNetflixFlow] = useState([]);
  // Other
  const [other, setOther] = useState(0);
  const [otherFlow, setOtherFlow] = useState([]);
  // Vacation
  const [vacation, setVacation] = useState(0);
  const [vacationFlow, setVacationFlow] = useState([]);

  const showNoMoney = () => {
    if (myMoney <= 0) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  };


  useEffect(() => {
    showNoMoney();
  });

  return (
    <div className="App">
      {showAlert ? (
        <div className="noMoney">
          <h1>You have no money!</h1>
        </div>
      ) : null}
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
                myMoney={myMoney}
                setMyMoney={setMyMoney}
                {...routeProps}
                moneyFlow={moneyFlow}
                setMoneyFlow={setMoneyFlow}
                addedMoney={addedMoney}
                setAddedMoney={setAddedMoney}
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
                hranaFlow={hranaFlow}
                setHranaFlow={setHranaFlow}
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
                zajebFlow={zajebFlow}
                setZajebFlow={setZajebFlow}
                {...routeProps}
              />
            );
          }}
        />
        <Route
          path="/tobaco"
          render={(routeProps) => {
            return (
              <Tobaco
                myMoney={myMoney}
                setMyMoney={setMyMoney}
                myTobaco={myTobaco}
                setMyTobaco={setMyTobaco}
                tobacoFlow={tobacoFlow}
                setTobacoFlow={setTobacoFlow}
                {...routeProps}
              />
            );
          }}
        />
        <Route
          exact
          path="/expenses"
          render={() => {
            return (
              <Expenses myExpenses={myExpenses} setMyExpenses={setMyExpenses} />
            );
          }}
        />
        <Route
          exact
          path="/expenses/lora1"
          render={(routeProps) => {
            return (
              <ExLora1
                exLora1={exLora1}
                setExLora1={setExLora1}
                exLora1Flow={exLora1Flow}
                setExLora1Flow={setExLora1Flow}
                myMoney={myMoney}
                setMyMoney={setMyMoney}
                myExpenses={myExpenses}
                setMyExpenses={setMyExpenses}
                {...routeProps}
              />
            );
          }}
        />
        <Route
          exact
          path="/expenses/lora2"
          render={(routeProps) => {
            return (
              <ExLora2
                exLora2={exLora2}
                setExLora2={setExLora2}
                exLora2Flow={exLora2Flow}
                setExLora2Flow={setExLora2Flow}
                myMoney={myMoney}
                setMyMoney={setMyMoney}
                myExpenses={myExpenses}
                setMyExpenses={setMyExpenses}
                {...routeProps}
              />
            );
          }}
        />
        <Route
          exact
          path="/expenses/energetika1"
          render={(routeProps) => {
            return (
              <Energetika1
                energetika1={energetika1}
                setEnergetika1={setEnergetika1}
                energetika1Flow={energetika1Flow}
                setEnergetika1Flow={setEnergetika1Flow}
                myMoney={myMoney}
                setMyMoney={setMyMoney}
                myExpenses={myExpenses}
                setMyExpenses={setMyExpenses}
                {...routeProps}
              />
            );
          }}
        />
        <Route
          exact
          path="/expenses/energetika2"
          render={(routeProps) => {
            return (
              <Energetika2
                energetika2={energetika2}
                setEnergetika2={setEnergetika2}
                energetika2Flow={energetika2Flow}
                setEnergetika2Flow={setEnergetika2Flow}
                myMoney={myMoney}
                setMyMoney={setMyMoney}
                myExpenses={myExpenses}
                setMyExpenses={setMyExpenses}
                {...routeProps}
              />
            );
          }}
        />
        <Route
          exact
          path="/expenses/elektro"
          render={(routeProps) => {
            return (
              <Elektro
                elektro={elektro}
                setElektro={setElektro}
                elektroFlow={elektroFlow}
                setElektroFlow={setElektroFlow}
                myMoney={myMoney}
                setMyMoney={setMyMoney}
                myExpenses={myExpenses}
                setMyExpenses={setMyExpenses}
                {...routeProps}
              />
            );
          }}
        />
        <Route
          exact
          path="/expenses/rtv"
          render={(routeProps) => {
            return (
              <Rtv
                rtv={rtv}
                setRtv={setRtv}
                rtvFlow={rtvFlow}
                setRtvFlow={setRtvFlow}
                myMoney={myMoney}
                setMyMoney={setMyMoney}
                myExpenses={myExpenses}
                setMyExpenses={setMyExpenses}
                {...routeProps}
              />
            );
          }}
        />
        <Route
          exact
          path="/expenses/internet"
          render={(routeProps) => {
            return (
              <Internet
                internet={internet}
                setInternet={setInternet}
                internetFlow={internetFlow}
                setInternetFlow={setInternetFlow}
                myMoney={myMoney}
                setMyMoney={setMyMoney}
                myExpenses={myExpenses}
                setMyExpenses={setMyExpenses}
                {...routeProps}
              />
            );
          }}
        />
        <Route
          exact
          path="/expenses/mobitel"
          render={(routeProps) => {
            return (
              <Mobitel
                mobitel={mobitel}
                setMobitel={setMobitel}
                mobitelFlow={mobitelFlow}
                setMobitelFlow={setMobitelFlow}
                myMoney={myMoney}
                setMyMoney={setMyMoney}
                myExpenses={myExpenses}
                setMyExpenses={setMyExpenses}
                {...routeProps}
              />
            );
          }}
        />
        <Route
          exact
          path="/expenses/Netflix"
          render={(routeProps) => {
            return (
              <Netflix
                netflix={netflix}
                setNetflix={setNetflix}
                netflixFlow={netflixFlow}
                setNetflixFlow={setNetflixFlow}
                myMoney={myMoney}
                setMyMoney={setMyMoney}
                myExpenses={myExpenses}
                setMyExpenses={setMyExpenses}
                {...routeProps}
              />
            );
          }}
        />
        <Route
          path="/other"
          render={(routeProps) => {
            return (
              <Other
                myMoney={myMoney}
                setMyMoney={setMyMoney}
                other={other}
                setOther={setOther}
                otherFlow={otherFlow}
                setOtherFlow={setOtherFlow}
                {...routeProps}
              />
            );
          }}
        />
        <Route
          path="/vacation"
          render={(routeProps) => {
            return (
              <Vacation
                myMoney={myMoney}
                setMyMoney={setMyMoney}
                vacation={vacation}
                setVacation={setVacation}
                vacationFlow={vacationFlow}
                setVacationFlow={setVacationFlow}
                {...routeProps}
              />
            );
          }}
        />
      </Switch>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div>
          <h1 className="allMoney">Money in Wallet: {myMoney}€</h1>
        </div>
      </Link>
    </div>
  );
}

export default withRouter(App);
