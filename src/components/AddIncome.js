import React from "react";
import "./AddIncome.css";

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
      <form onSubmit={addMoney} className='input-forms'>
        <input name="amount" type="text" placeholder="type amount €" className='inputs' />
        <input name="name" type="text" placeholder="type name" className='inputs'/>
        <input name="date" type="text" placeholder="type date" className='inputs'/>
        <button  type='submit' className='inputs'>Add Money</button>
      </form>

      <div>
        <h2>Last added money: </h2>{props.moneyFlow.map((transfer, i) => {
          return (
            <div key={i} className='mapedSpec' >
              <p>Amount: <b>{transfer.amount}</b> €</p>
              <p>Name: <b>{transfer.name}</b></p>
              <p>Date: <b>{transfer.date}</b></p>
            </div>
            )
        })}
      </div>
      <div>
        <h2>All money added so far: {props.addedMoney}</h2>
      </div>
    </div>
  );
}
