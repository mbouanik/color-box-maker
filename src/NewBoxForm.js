import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = {
    width: "",
    height: "",
    bgc: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleChange = (evt) => {
    setFormData((formData) => ({
      ...formData,
      [evt.target.name]: evt.target.value,
    }));
  };
  const handSubmit = (evt) => {
    evt.preventDefault();
    addBox({
      height: parseInt(formData.height),
      width: parseInt(formData.width),
      bgc: formData.bgc,
    });

    setFormData(INITIAL_STATE);
  };
  return (
    <form onSubmit={handSubmit}>
      <label htmlFor="width">Width</label>
      <input
        type="text"
        name="width"
        placeholder="Width"
        value={formData.width}
        onChange={handleChange}
        data-testid="width"
      />
      <label htmlFor="height">Height</label>
      <input
        type="text"
        name="height"
        placeholder="Height"
        value={formData.height}
        onChange={handleChange}
        data-testid="height"
      />
      <label htmlFor="bgc"> Background Color </label>
      <input
        type="text"
        name="bgc"
        placeholder="Background color"
        value={formData.bgc}
        onChange={handleChange}
        data-testid="bgc"
      />
      <button> Submit </button>
    </form>
  );
};
export default NewBoxForm;
