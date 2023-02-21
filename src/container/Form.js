import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function Form(props) {
  const {
    handleSubmit,
    handleInputChange,
    handleChaeckboxChange,
    formData,
    error,
    buttonDisabledMi,
  } = props;
  return (
    <form onSubmit={handleSubmit} className="cervece">
      <h2>Build Your Own Pizza</h2>
      <img className="form-img" src="Pizza.jpg" alt="Pizza resim!" />
      <div className="h3">
        <h3>Build Your Own Pizza</h3>
      </div>
      <div className="text1">
        <p className="medium">Choise of Size</p>
        <br />
        <p className="small">*Required</p>
      </div>
      <div className="select">
        <select
          name="boyut"
          value={formData.boyut}
          id="boyut"
          onChange={handleInputChange}
        >
          <option value="">Pleace select!</option>
          <option value="large">Large</option>
          <option value="medium">Medium</option>
          <option value="small">Small</option>
        </select>
      </div>
      {error.boyut && <span className="error">{error.boyut}</span>}

      <div className="text2">
        <p className="medium">Choise of Sauce</p>
        <br />
        <p className="small">*Required </p>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            onChange={handleInputChange}
            id="Original Red"
            value="Original Red"
            checked={formData.rad === "Original Red"}
            name="rad"
          />
          Original Red <br />{" "}
        </label>
        <label>
          <input
            type="radio"
            onChange={handleInputChange}
            id="Garlic Ranch"
            value="Garlic Ranch"
            checked={formData.rad === "Garlic Ranch"}
            name="rad"
          />
          Garlic Ranch
          <br />
        </label>
        <label>
          <input
            type="radio"
            onChange={handleInputChange}
            id="BBQ Sauce"
            value="BBQ Sauce"
            checked={formData.rad === "BBQ Sauce"}
            name="rad"
          />
          BBQ Sauce
          <br />
        </label>
        <label>
          <input
            type="radio"
            onChange={handleInputChange}
            id="Spinach Alfredo"
            value="Spinach Alfredo"
            checked={formData.rad === "Spinach Alfredo"}
            name="rad"
          />
          Spinach Alfredo
        </label>
      </div>
      {error.rad !== "" && <span className="error">{error.rad}</span>}
      <div className="text3">
        <p className="medium">Add Toppings</p>
        <br />
        <p className="small">Choose up to 10.</p>
      </div>
      <div className="checkbox">
        <div className="checkbox1">
          <label>
            <input
              type="checkbox"
              onChange={handleChaeckboxChange}
              name="secim"
              value="Pepperoni"
              checked={formData.secim.includes("Pepperoni")}
            />
            Pepperoni <br />
          </label>
          <label>
            <input
              type="checkbox"
              onChange={handleChaeckboxChange}
              name="secim"
              value="Sausage"
              checked={formData.secim.includes("Sausage")}
            />
            Sausage
            <br />
          </label>
          <label>
            <input
              type="checkbox"
              onChange={handleChaeckboxChange}
              name="secim"
              value="Canadion Bacon"
              checked={formData.secim.includes("Canadion Bacon")}
            />
            canadion Bacon
            <br />
          </label>
          <label>
            <input
              type="checkbox"
              onChange={handleChaeckboxChange}
              name="secim"
              value="Spicy Halion Sausage"
              checked={formData.secim.includes("Spicy Halion Sausage")}
            />
            Spicy Halion Sausage
            <br />
          </label>
          <label>
            <input
              type="checkbox"
              onChange={handleChaeckboxChange}
              name="secim"
              value="Grilled Chicker"
              checked={formData.secim.includes("Grilled Chicker")}
            />
            Grilled Chicker
            <br />
          </label>
          <label>
            <input
              type="checkbox"
              onChange={handleChaeckboxChange}
              name="secim"
              value="Onions"
              checked={formData.secim.includes("Onions")}
            />
            Onions
            <br />
          </label>
          <label>
            <input
              type="checkbox"
              onChange={handleChaeckboxChange}
              name="secim"
              value="Green Pepper"
              checked={formData.secim.includes("Green Pepper")}
            />
            Green Pepper
          </label>
        </div>
        <div className="checkbox2">
          <label>
            <input
              type="checkbox"
              onChange={handleChaeckboxChange}
              name="secim"
              value="Diced Tomatos"
              checked={formData.secim.includes("Diced Tomatos")}
            />
            Diced Tomatos
            <br />
          </label>
          <label>
            <input
              type="checkbox"
              onChange={handleChaeckboxChange}
              name="secim"
              value="Black Olives"
              checked={formData.secim.includes("Black Olives")}
            />
            Black Olives
            <br />
          </label>
          <label>
            <input
              type="checkbox"
              onChange={handleChaeckboxChange}
              name="secim"
              value="Roasted Garlic"
              checked={formData.secim.includes("Roasted Garlic")}
            />
            Roasted Garlic
            <br />
          </label>
          <label>
            <input
              type="checkbox"
              onChange={handleChaeckboxChange}
              name="secim"
              value="Artichoke Hearts"
              checked={formData.secim.includes("Artichoke Hearts")}
            />
            Artichoke Hearts
            <br />
          </label>
          <label>
            <input
              type="checkbox"
              onChange={handleChaeckboxChange}
              name="secim"
              value="Theree Cheese"
              checked={formData.secim.includes("Theree Cheese")}
            />
            Theree Cheese
            <br />
          </label>
          <label>
            <input
              type="checkbox"
              onChange={handleChaeckboxChange}
              name="secim"
              value="Pineapple"
              checked={formData.secim.includes("Pineapple")}
            />
            Pineapple
            <br />
          </label>
          <label>
            <input
              type="checkbox"
              onChange={handleChaeckboxChange}
              name="secim"
              value="Extra Cheese"
              checked={formData.secim.includes("Extra Cheese")}
            />
            Extra Cheese
            <br />
          </label>
          {error.secim && (
            <span className="error" style={{ color: "red", fontSize: 12 }}>
              {error.secim}
            </span>
          )}
        </div>
      </div>
      <div className="text4">
        <p className="medium">Choice of Substitute</p>
        <br />
        <p className="small">Choose up to 1.</p>
      </div>
      <div className="sec">
        <label>
          <input
            type="checkbox"
            onChange={handleInputChange}
            name="sec"
            value="Gluten Free Crust(+ $100)"
            checked={formData.sec}
          />
          Gluten Free Crust(+ $100)
        </label>
        {error.sec !== "" && <span className="error">{error.sec}</span>}
      </div>
      <div className="text5">
        <p className="medium">Special Instructions</p>
      </div>
      <div className="istek">
        <label htmlFor="special-text">
          <input
            type="text"
            className="text-istek"
            onChange={handleInputChange}
            id="special-text"
            name="text"
            placeholder="Anyting else you'd like to add?"
            value={formData.text}
          />
        </label>
        <br />
        {error.text !== "" && <span className="error">{error.text}</span>}
      </div>
      <hr />
      <div className="ekle">
        <input type="number" onChange={handleInputChange} placeholder="0" />

        <button
          className="order-button"
          id="order-button"
          disabled={buttonDisabledMi}
        >
          Add to Order
        </button>
      </div>
      <div>
        <Link to="/form/:detay" className="form-teslim" id="teslim">
          Order!
        </Link>
      </div>
    </form>
  );
}
