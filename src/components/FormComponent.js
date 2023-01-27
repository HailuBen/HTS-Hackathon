import React, { useState } from "react";
import axios from "axios";
import "./FormComponent.css";

const FormComponent = () => {
  const [textField1, setTextField1] = useState("");
  const [textField2, setTextField2] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [dropdown, setDropdown] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { textField1, textField2, checkbox, dropdown };
    axios
      .post("http://localhost:5000/data", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label className="label">
        Text Field 1:
        <input
          className="input"
          type="text"
          value={textField1}
          onChange={(e) => setTextField1(e.target.value)}
        />
      </label>
      <br />
      <label className="label">
        Text Field 2:
        <input
          className="input"
          type="text"
          value={textField2}
          onChange={(e) => setTextField2(e.target.value)}
        />
      </label>
      <br />
      <label className="label">
        Checkbox:
        <input
          className="checkbox"
          type="checkbox"
          checked={checkbox}
          onChange={(e) => setCheckbox(e.target.checked)}
        />
      </label>
      <br />
      <label className="label">
        Dropdown:
        <select
          className="select"
          value={dropdown}
          onChange={(e) => setDropdown(e.target.value)}
        >
          <option value="">Select an option</option>
          <option value="option1">Cough</option>
          <option value="option2">Diarrhea</option>
          <option value="option3">Difficulty swallowing</option>
          <option value="option4">Abdominal pain</option>
          <option value="option5">Chest pain</option>
          <option value="option6">Constipation</option>
          <option value="option7">Dizziness</option>
          <option value="option8">Headaches</option>
          <option value="option9">Shortness of breath</option>
          <option value="option10">Sore throat</option>
        </select>
      </label>
      <br />
      <button className="submit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
