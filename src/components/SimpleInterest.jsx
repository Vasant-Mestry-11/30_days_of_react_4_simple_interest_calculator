import { useState } from "react";

const SimpleInterest = () => {
  const [values, setValues] = useState({
    principal: "",
    rate: "",
    time: "",
  });

  const [interest, setInterest] = useState(0);

  const { principal, rate, time } = values;

  const handleInputChange = (e) => {
    setValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const calculateInterest = () => {
    const result = (principal * rate * time) / 100;
    setInterest(result);
  };

  const isButtonDisable = !principal || !rate || !time;
  return (
    <div className="simple-interest-wrapper">
      <h1 className="heading">Simple Interest Calculator</h1>
      <h2 className="result">Your Interest is {interest}</h2>
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
      <button
        className="calculate-btn"
        onClick={calculateInterest}
        disabled={isButtonDisable}
      >
        Calculate
      </button>
    </div>
  );
};

export default SimpleInterest;
