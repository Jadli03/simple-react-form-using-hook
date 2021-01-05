import React, { useState } from "react";

const App = () => {
  const [udata, setm] = useState({
    fname: "",
    lname: "",
    email: "",
  });

  const { fname, lname, email } = udata;

  const inn = (event) => {
    
    const value = event.target.value;
    const name = event.target.name;

    setm((pv) => {
      return { ...pv, [name]: value };
    });
  };

  const showName = (e) => {
    e.preventDefault();
    alert("form submitted");
  };

  return (
    <>
      <form onSubmit={showName}>
        <div className="main">
          <h1> Hello,
          <br /> 
            {fname} {lname} <br />
            {email} <br />
          </h1>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="fname"
            onChange={inn}
            value={fname}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Your last name"
            name="lname"
            onChange={inn}
            value={lname}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Your email"
            name="email"
            onChange={inn}
            value={email}
          />
          <button type="submit">submit</button>
        </div>
      </form>
    </>
  );
};

export default App;
