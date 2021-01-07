import React from "react";
import "./Other.css";

export default function Other(props) {
  const addOther = (e) => {
    e.preventDefault();
    let amount = Number(e.target.amount.value);
    props.setOther(props.other + amount);
    props.setMyMoney(props.myMoney - amount);
    let date = String(e.target.date.value);
    let name = String(e.target.name.value);
    props.setOtherFlow([{ amount, date, name }, ...props.otherFlow]);
    props.history.push("/");
  };

  return (
    <div>
      <form onSubmit={addOther} className="formOther">
        <input
          name="amount"
          type="text"
          placeholder="type Other €"
          className="inputOther"
        />
        <input
          name="name"
          type="text"
          placeholder="type name"
          className="inputOther"
        />
        <input
          name="date"
          type="text"
          placeholder="type date"
          className="inputOther"
        />
        <button type="submit" className="buttonOther">
          Save
        </button>
      </form>
      <div>
        <h2>Last added: </h2>
        {props.otherFlow.map((transfer, i) => {
          return (
            <div key={i} className="mapedSpecOther">
              <p>
                Amount: <b>{transfer.amount}</b> €
              </p>
              <p>
                Name: <b>{transfer.name}</b>
              </p>
              <p>
                Date: <b>{transfer.date}</b>
              </p>
            </div>
          );
        })}
      </div>
      <div>
        <h2>All Other so far: {props.other}€</h2>
      </div>
    </div>
  );
}
