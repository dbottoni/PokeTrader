import React, { useState } from "react";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
import { useMutation } from '@apollo/client';


export default function SignUp() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [validated] = useState(false);
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
  
  const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    try {
      const { data } = await addUser({
        variables: { ...formState }
      });

      if (error) {
        console.log(error);
        throw new Error("something went wrong!");
      }

      Auth.login(data.addUser.token);
      console.log(data)
    } catch (e) {
      console.error(e);
    }
    };

  return (
    <div className="container mt-6">
      <div className="has-text-centered">
        <h1 className="form-header">Welcome to the world of Pokemon!</h1>
        <p className="form-header">I have a few questions before your trading can begin.</p>
        <p className="form-header">Let’s get started!</p>
      </div>

      <div className="columns form-container m-6">
        <div className="column image-space">
          <img className="oak-img" src="/images/oak.png" alt="pokemon"/>
        </div>

        <div className="column">

            <fieldset className="login-signup-form">
            <legend className="form-title ml-6">Sign Up</legend>

              <form className="m-6" noValidate validated={validated} onSubmit={handleFormSubmit}>
                <div className="field mt-3">
                  <label className="label">First, what is your username?</label>

                  <input
                    className="input"
                    name="username"
                    value={formState.username}
                    type="username"
                    id="username"
                    placeholder="Username"
                    onChange={handleFormChange}
                  />
                </div>

                <div className="field mt-3">
                  <label className="label">Great! What is your email?</label>

                  <input
                    className="input"
                    name="email"
                    value={formState.email}
                    type="email"
                    id="email"
                    placeholder="Email"
                    onChange={handleFormChange}
                  />
                </div>

                <div className="field mt-3">
                  <label className="label">
                    What do you want your password to be?{" "}
                  </label>

                  <input
                    className="input"
                    name="password"
                    value={formState.password}
                    type="password"
                    id="password"
                    placeholder="Password"
                    onChange={handleFormChange}
                  />
                </div>
              <button
                className="button poke-button is-fullwidth mb-3"
                type="submit"
              >
                ▶ Create New Account
              </button>
              </form>
            </fieldset>
        </div>
      </div>
    </div>
  );
};
