import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

export default function Login() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [loginUser, { error }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
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
      const { data } = await loginUser({
        variables: {
          ...formState,
        },
      });

      if (error) {
        throw new Error("something went wrong!");
      }

      //   const { token, user } = await response.json();
      //   console.log(user);
      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
      //   setShowAlert(true);
    }

    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div className="container mt-6">
      <div className="has-text-centered">
        <h1 className="form-header">Welcome back!</h1>
        <p className="form-header">Sign in to start trading! </p>
      </div>

      <div className="columns form-container m-6">
        <div className="column image-space">
          <img className="oak-img" src="/images/oak.png" />
        </div>

        <div className="column">
          <fieldset className="login-signup-form">
            <legend className="form-title ml-6">Log In</legend>

            <form className="m-6">
              <div class="field mt-3">
                <label class="label">What is your email?</label>

                <input
                  className="input"
                  name="email"
                  value={formState.email}
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                />
              </div>

              <div class="field mt-3">
                <label class="label">
                  What is your password?
                </label>

                <input
                  className="input"
                  name="password"
                  value={formState.password}
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>
            </form>
            <button
              className="button poke-button is-fullwidth mb-3"
              type="submit"
              onClick={handleFormSubmit}
            >
              ▶ Log In
            </button>

            <Link to="/signup">
              <a className="content link-on-white">
                <p className="is-underlined">Don't have an account? Make one now!</p>
              </a>
            </Link>
          </fieldset>
        </div>
      </div>
    </div>
  );
}
