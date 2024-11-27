import { useState } from "react";

const SimpleInterest = () => {
  const [values, setValues] = useState({
    principal: "",
    rate: "",
    time: "",
  });

  const { principal, rate, time } = values;

  const handleInputChange = (e) => {
    setValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="simple-interest-wrapper">
      <h1 className="heading">Simple Interest Calculator</h1>
      <div className="container">
        <div>
          <input
            type="number"
            value={principal}
            onChange={handleInputChange}
            name="principal"
            placeholder="Enter principal"
          />
        </div>
        <div>
          <input
            type="number"
            value={rate}
            onChange={handleInputChange}
            name="rate"
            placeholder="Enter rate"
          />
        </div>
        <div>
          <input
            type="number"
            value={time}
            onChange={handleInputChange}
            name="time"
            placeholder="Enter time"
          />
        </div>
      </div>
      <button className="calculate-btn">Calculate</button>
    </div>
  );
};

export default SimpleInterest;
