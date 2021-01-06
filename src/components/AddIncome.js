import React from "react";

export default function AddIncome(props) {
  

  const addMoney = (e) => {
    e.preventDefault()
    let amount = Number(e.target.amount.value)
    let name = String(e.target.name.value)
    let date = String(e.target.date.value)
    props.setMoneyFlow([...props.moneyFlow, {amount, name, date}])
    let allAddedMoney = Number(props.addedMoney)
    props.setAddedMoney(allAddedMoney + amount)
    let myMoneyNumber = Number(props.myMoney);
    props.setMyMoney(myMoneyNumber + amount);
    props.history.push("/");
  }

  return (
    <div>
      <form onSubmit={addMoney} >
        <input name="amount" type="text" placeholder="type amount" />
        <input name="name" type="text" placeholder="type name" />
        <input name="date" type="text" placeholder="type date" />
        <button  type='submit'>Add Money</button>
      </form>
      <div>
        <h2>All added money so far: {props.addedMoney}</h2>
      </div>
      <div>
        <h2>Testing: {props.moneyFlow.map((transfer, i) => {
          return (
            <div key={i} >
              <p>{i + 1}) How much: {transfer.amount}. Why: {transfer.name}. Date: {transfer.date}</p>
            </div>
            )
        })}</h2>
      </div>
    </div>
  );
}
