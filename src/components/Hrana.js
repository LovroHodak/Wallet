import React from "react";
import "./Hrana.css";

export default function Hrana(props) {
  const addHrana = (e) => {
    e.preventDefault();
    let input = Number(e.target.adding.value);
    props.setMyMoney(props.myMoney - input);
    props.setMyHrana(props.myHrana + input);

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();
    today = dd + "/" + mm + "/" + yyyy;
    console.log(today);

    props.history.push("/");
  };

  return (
    <div className="hranaDiv">
      <form onSubmit={addHrana} className="formFood">
        <input
          name="adding"
          type="text"
          placeholder="add food amount €"
          className="inputFood"
        />
        <button type="submit" className="buttonFood">
          enter
        </button>
      </form>
      <div>
        <h2>My food so far: {props.myHrana}€</h2>
      </div>
    </div>
  );
}
