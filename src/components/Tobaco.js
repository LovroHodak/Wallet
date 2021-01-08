import React from "react";
import "./Tobaco.css";

export default function Tobaco(props) {
  const addTobaco = (e) => {
    e.preventDefault();
    let amount = Number(e.target.amount.value);
    let propstobacoFlow = props.tobacoFlow;
    props.setMyMoney(props.myMoney - amount);
    props.setMyTobaco(props.myTobaco + amount);

    let date = new Date();
    let dd = String(date.getDate()).padStart(2, "0");
    let mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = date.getFullYear();
    date = dd + "/" + mm + "/" + yyyy;

    let id = propstobacoFlow.length;
    props.setTobacoFlow([{ amount, date, id }, ...propstobacoFlow]);

    props.history.push("/");
  };

  const deleteTobaco = (tobacoId) => {
    let filteredTobacos = props.tobacoFlow.filter((oth) => {
      return oth.id !== tobacoId;
    });
    props.setTobacoFlow(filteredTobacos);
    let tobacosAmount = filteredTobacos.reduce(function (
      accumulator,
      currentValue
    ) {
      return accumulator + currentValue.amount;
    },
    0);
    let propstobacoFlow = props.tobacoFlow;
    let allTobacos = propstobacoFlow.reduce(function (
      accumulator,
      currentValue
    ) {
      return accumulator + currentValue.amount;
    },
    0);
    props.setMyTobaco(tobacosAmount);
    props.setMyMoney(props.myMoney + allTobacos - tobacosAmount);
  };

  return (
    <div className="tobacoDiv">
      <form onSubmit={addTobaco} className="formTobaco">
        <input
          name="amount"
          type="text"
          placeholder="add tobaco amount €"
          className="inputTobaco"
        />
        <button type="submit" className="buttonTobaco">
          enter
        </button>
      </form>
      <div>
        <h2>Last added: </h2>
        {props.tobacoFlow.map((transfer) => {
          return (
            <div key={transfer.id} className="mapedSpecTobaco">
              <p>
                Amount: <b>{transfer.amount}</b> €
              </p>
              <p>
                Date: <b>{transfer.date}</b>
              </p>
              <button
                onClick={() => deleteTobaco(transfer.id)}
                className="deleteButtonTobaco"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <h2>My tobaco so far: {props.myTobaco}€</h2>
      </div>
    </div>
  );
}
