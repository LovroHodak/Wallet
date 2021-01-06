import React from "react";
import "./Netflix.css";

export default function Netflix(props) {
  const addNetflix = (e) => {
    e.preventDefault();
    console.log(props);
    console.log(e.target.amount.value);
    let amount = Number(e.target.amount.value);
    props.setNetflix(props.netflix + amount);
    props.setMyMoney(props.myMoney - amount);
    props.setMyExpenses(props.myExpenses + amount);
    let date = String(e.target.date.value);
    props.setNetflixFlow([{ amount, date }, ...props.netflixFlow]);
    props.history.push("/expenses");
  };

  return (
    <div>
      <form onSubmit={addNetflix} className="formNetflix">
        <input
          name="amount"
          type="text"
          placeholder="type Netflix €"
          className="inputNetflix"
        />
        <input
          name="date"
          type="text"
          placeholder="type date"
          className="inputNetflix"
        />
        <button type="submit" className="buttonNetflix">
          Save
        </button>
      </form>
      <div>
        <h2>Last added: </h2>
        {props.netflixFlow.map((transfer, i) => {
          return (
            <div key={i} className="mapedSpecNetflix">
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
        <h2>All Netflix so far: {props.netflix}€</h2>
      </div>
    </div>
  );
}
