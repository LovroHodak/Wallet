import React from "react";

export default function AddIncome(props) {
  

  const addMoneyz = (e) => {
    e.preventDefault();
    let amount = Number(e.target.adding.value);
    let myMoneyNumber = Number(props.myMoney);
    let allAddedMoney = Number(props.addedMoney)
    props.setMyMoney(myMoneyNumber + amount);
    props.setAddedMoney(allAddedMoney + amount)
    props.history.push("/");
  };

  return (
    <div>
      <form onSubmit={addMoneyz}>
        <input name="adding" type="text" placeholder="add money amount" />
        <button type="submit">enter</button>
      </form>
      <div>
        <h2>All added money so far: {props.addedMoney}</h2>
      </div>
    </div>
  );
}
