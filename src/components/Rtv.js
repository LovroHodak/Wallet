import React from "react";
import "./Rtv.css";

export default function Rtv(props) {
  const addRtv = (e) => {
    e.preventDefault();
    console.log(props);
    console.log(e.target.amount.value);
    let amount = Number(e.target.amount.value);
    props.setRtv(props.rtv + amount);
    props.setMyMoney(props.myMoney - amount);
    props.setMyExpenses(props.myExpenses + amount);
    let date = String(e.target.date.value);
    props.setRtvFlow([{ amount, date }, ...props.rtvFlow]);
    props.history.push("/expenses");
  };

  return (
    <div>
      <form onSubmit={addRtv} className="formRtv">
        <input
          name="amount"
          type="text"
          placeholder="type Rtv €"
          className="inputRtv"
        />
        <input
          name="date"
          type="text"
          placeholder="type date"
          className="inputRtv"
        />
        <button type="submit" className="buttonRtv">
          Save
        </button>
      </form>
      <div>
        <h2>Last added: </h2>
        {props.rtvFlow.map((transfer, i) => {
          return (
            <div key={i} className="mapedSpecRtv">
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
        <h2>All Rtv so far: {props.rtv}€</h2>
      </div>
    </div>
  );
}
