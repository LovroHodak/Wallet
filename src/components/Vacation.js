import React from 'react'
import './Vacation.css'

export default function Vacation(props) {
    const addVacation = (e) => {
        e.preventDefault();
        let amount = Number(e.target.amount.value);
        props.setVacation(props.vacation + amount);
        props.setMyMoney(props.myMoney - amount);
        let date = String(e.target.date.value);
        let name = String(e.target.name.value);
        props.setVacationFlow([{ amount, date, name }, ...props.vacationFlow]);
        props.history.push("/");
      };
    
      return (
        <div>
          <form onSubmit={addVacation} className="formVacation">
            <input
              name="amount"
              type="text"
              placeholder="type Vacation €"
              className="inputVacation"
            />
            <input
              name="name"
              type="text"
              placeholder="type name"
              className="inputVacation"
            />
            <input
              name="date"
              type="text"
              placeholder="type date"
              className="inputVacation"
            />
            <button type="submit" className="buttonVacation">
              Save
            </button>
          </form>
          <div>
            <h2>Last added: </h2>
            {props.vacationFlow.map((transfer, i) => {
              return (
                <div key={i} className="mapedSpecVacation">
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
            <h2>All Vacation so far: {props.vacation}€</h2>
          </div>
        </div>
      );
}
