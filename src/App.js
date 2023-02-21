import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
import * as yup from "yup";
import axios from "axios";
import Form from "./container/Form";
import Firmalar from "./container/Firmalar";
import Teslim from "./container/Teslim";
import "./App.css";
import "./container/anasayfa.css";
import "./container/firmalar.css";
import "./container/Form.css";
import "./container/Teslim.css";

const formSchema = yup.object().shape({
  boyut: yup.string().required("Seçim zorunludur."),
  rad: yup.string().required(""),
  sec: yup.string(),
  text: yup.string().required("Seçim zorunludur."),
});
const App = () => {
  const [formData, setFormData] = useState({
    boyut: "",
    rad: "",
    secim: ["Pepperoni"],
    sec: "",
    text: "",
  });
  const [error, setError] = useState({
    boyut: "",
    rad: "",
    secim: "",
    sec: "",
    text: "",
  });

  const [buttonDisabledMi, setButtonDisabledMi] = useState(true);

  const checkFormErrors = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => {
        setError({
          ...error,
          [name]: formSchema.name,
        });
      })
      .catch((err) => {
        setError({
          ...error,
          [name]: err.errors[0],
        });
      });
  };

  function handleInputChange(event) {
    const { value, name, checked, type } = event.target;
    const inputValueSelector = type === "checkbox" ? checked : value;
    checkFormErrors(name, inputValueSelector);
    const yeniState = {
      ...formData,
      [name]: inputValueSelector,
    };
    checkFormErrors(name, inputValueSelector);
    setFormData(yeniState);
  }

  function handleChaeckboxChange(event) {
    const { value } = event.target;
    let newsecim = null;
    if (formData.secim.includes(value)) {
      newsecim = formData.secim.filter((e) => e !== value);
    } else {
      newsecim = [...formData.secim, value];
    }

    if (newsecim.length > 10) {
      setError({
        ...error,
        secim: "En fazla 10 çeşit seçebilirsiniz",
      });
    } else {
      setError({
        ...error,
        secim: "",
      });
    }
    setFormData({
      ...formData,
      secim: newsecim,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    axios
      .post("https://reqres.in/api/orders", formData)
      .then((res) => {
        // setPost(res.data); // get just the form data from the REST api
        console.log("success", res);
      })
      .catch((err) => console.log(err.response));
  }
  useEffect(() => {
    formSchema.isValid(formData).then((valid) => setButtonDisabledMi(!valid));
  }, [formData]);
  useEffect(() => {
    setButtonDisabledMi(
      error.boyut !== "" || error.rad !== "" || error.text !== ""
    );
  }, [formData]);
  return (
    <BrowserRouter>
      <div>
        <header>
          <h1>Teknolojik Yemekler</h1>
        </header>
        <main>
          <p>LAMBDA EATS</p>
          <nav>
            <Link to="/" className="anasayfa" id="order-pizza">
              Anasayfa
            </Link>
            <Link to="/iletişim" className="iletişim">
              İletişim
            </Link>
          </nav>
        </main>
        <Switch>
          <Route exact path="/">
            <section>
              <div className="anaS">
                <img className="ana-pizza" src="Pizza.png" />
                <Link to="/form" className="form-yazı" id="pizza-form">
                  Pizzanı Kendin Seç!
                </Link>
              </div>
              <h3 className="ana-h3">Food Delivery in Gotham Ctiy</h3>
              <Firmalar />
            </section>
          </Route>
          <Route path="/iletişim">Ardığınıziçin thanks:D</Route>
          <Route exact path="/form">
            <section>
              <Form
                handleSubmit={handleSubmit}
                handleInputChange={handleInputChange}
                // handleClearForm={handleClearForm}
                formData={formData}
                error={error}
                buttonDisabledMi={buttonDisabledMi}
                handleChaeckboxChange={handleChaeckboxChange}
              />
              <div></div>
            </section>
          </Route>
          <Route path="/form/:detay">
            <Teslim />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
