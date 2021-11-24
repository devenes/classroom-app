import React from "react";

//const User = (props) === const User = ({name,state...})
//Komponentler arası iletişim Props'lar ile sağlanır.

const User = ({ user, delMethod, stateChange }) => {
  const changeHandler = (e) => {
    stateChange({ state: e.target.value, id: user.id });
  };
  return (
    <div className="card bg-light mb-3">
      <div className="card-body">
        <button
          onClick={delMethod}
          className="btn btn-sm btn-outline-danger"
          style={{ position: "absolute", right: "20px" }}
        >
          Sil
        </button>
        <h1 className="card-title mb-1">it's {user.name}</h1>
        <h3 className="card-subtitle">
          durum: <span className={user.state}> {user.state} </span>
        </h3>
        <select
          className="form-control"
          name="state"
          id="state"
          onChange={changeHandler}
          value={user.state}
        >
          <option value="online">online</option>
          <option value="offline">offline</option>
          <option value="busy">busy</option>
        </select>
      </div>
    </div>
  );
};

export default User;
