import React from 'react'
import './Vacation.css'

export default function Vacation(props) {
    const addVacation = (e) => {
        e.preventDefault();
        let amount = Number(e.target.amount.value);
        let propsvacationFlow = props.vacationFlow;
        props.setVacation(props.vacation + amount);
        props.setMyMoney(props.myMoney - amount);

        let date = new Date();
        let dd = String(date.getDate()).padStart(2, "0");
        let mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
        let yyyy = date.getFullYear();
        date = dd + "/" + mm + "/" + yyyy;

        let name = String(e.target.name.value);
        let id = propsvacationFlow.length;
        props.setVacationFlow([{ amount, date, name, id }, ...props.vacationFlow]);
        props.history.push("/");
      };

      const deleteVacation = (vacationId) => {
        let filteredVacations = props.vacationFlow.filter((vac) => {
          return vac.id !== vacationId;
        });
        props.setVacationFlow(filteredVacations);
        let vacationsAmount = filteredVacations.reduce(function (
          accumulator,
          currentValue
        ) {
          return accumulator + currentValue.amount;
        },
        0);
        let propsvacationFlow = props.vacationFlow;
        let allVacations = propsvacationFlow.reduce(function (accumulator, currentValue) {
          return accumulator + currentValue.amount;
        }, 0);
        props.setVacation(vacationsAmount);
        props.setMyMoney(props.myMoney + allVacations - vacationsAmount);
      }
    
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
            <button type="submit" className="buttonVacation">
              Save
            </button>
          </form>
          <div>
            <h2>Last added: </h2>
            {props.vacationFlow.map((transfer) => {
              return (
                <div key={transfer.id} className="mapedSpecVacation">
                  <p>
                    Amount: <b>{transfer.amount}</b> €
                  </p>
                  <p>
                    Name: <b>{transfer.name}</b>
                  </p>
                  <p>
                    Date: <b>{transfer.date}</b>
                  </p>
                  <button onClick={() => deleteVacation(transfer.id)} className='deleteButtonVacation' >Delete</button>
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
