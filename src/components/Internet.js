import React from "react";
import "./Internet.css";

export default function Internet(props) {
  const addInternet = (e) => {
    e.preventDefault();
    console.log(props);
    console.log(e.target.amount.value);
    let amount = Number(e.target.amount.value);
    props.setInternet(props.internet + amount);
    props.setMyMoney(props.myMoney - amount);
    props.setMyExpenses(props.myExpenses + amount);
    let date = String(e.target.date.value);
    props.setInternetFlow([{ amount, date }, ...props.internetFlow]);
    props.history.push("/expenses");
  };

  return (
    <div>
      <form onSubmit={addInternet} className="formInternet">
        <input
          name="amount"
          type="text"
          placeholder="type Internet €"
          className="inputInternet"
        />
        <input
          name="date"
          type="text"
          placeholder="type date"
          className="inputInternet"
        />
        <button type="submit" className="buttonInternet">
          Save
        </button>
      </form>
      <div>
        <h2>Last added: </h2>
        {props.internetFlow.map((transfer, i) => {
          return (
            <div key={i} className="mapedSpecInternet">
              <p>
                Amount: <b>{transfer.amount}</b> €
              </p>
              <p>
                Date: <b>{transfer.date}</b>
              </p>
            </div>
          );
        })}
      </div>
      <div>
        <h2>All Internet so far: {props.internet}€</h2>
      </div>
    </div>
  );
}
