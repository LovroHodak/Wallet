import React from "react";

export default function Hrana(props) {
  const addHrana = (e) => {
    e.preventDefault();
    let input = Number(e.target.adding.value);
    props.setMyMoney(props.myMoney - input);
    props.setMyHrana(props.myHrana + input);
    props.history.push("/");
  };

  return (
    <div>
      <form onSubmit={addHrana}>
        <input name="adding" type="text" placeholder="add hrana money amount" />
        <button type="submit">enter</button>
      </form>
      <div>
        <h2>My food so far: {props.myHrana}</h2>
      </div>
    </div>
  );
}
