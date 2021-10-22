import React, { useState } from "react";
import Auth from "../utils/auth";

import { ADD_USER } from "../utils/mutations";
import { useMutation } from "@apollo/react-hooks";

export default function SignUp() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addUser({
        variables: {
          ...formState,
        },
      });
      console.log("===========");
      console.log(data);

      if (error) {
        throw new Error("something went wrong!");
      }

      //   const { token, user } = await response.json();
      //   console.log(user);
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
      //   setShowAlert(true);
    }

    setFormState({
      username: "",
      email: "",
      password: "",
    });
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
          <img className="oak-img" src="/images/oak.png" />
        </div>

        <div className="column">

            <fieldset className="login-signup-form">
            <legend className="form-title ml-6">Sign Up</legend>

              <form className="m-6">
                <div class="field mt-3">
                  <label class="label">First, what is your username?</label>

                  <input
                    className="input"
                    name="username"
                    value={formState.username}
                    type="text"
                    placeholder="Username"
                    onChange={handleFormChange}
                  />
                </div>

                <div class="field mt-3">
                  <label class="label">Great! What is your email?</label>

                  <input
                    className="input"
                    name="email"
                    value={formState.email}
                    type="email"
                    placeholder="Email"
                    onChange={handleFormChange}
                  />
                </div>

                <div class="field mt-3">
                  <label class="label">
                    What do you want your password to be?{" "}
                  </label>

                  <input
                    className="input"
                    name="password"
                    value={formState.password}
                    type="password"
                    placeholder="Password"
                    onChange={handleFormChange}
                  />
                </div>
              </form>

              <button
                className="button poke-button is-fullwidth mb-3"
                type="submit"
                onClick={handleFormSubmit}
              >
                ▶ Create New Account
              </button>
            </fieldset>
        </div>
      </div>
    </div>
  );
}
