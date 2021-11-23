import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { InputChange, FormSubmit } from "../../utils/TypeScript";
import { register } from "../../redux/actions/authAction";
import { Link } from "react-router-dom";
import  squidfield  from '../../assets/images/squidgame-field.svg'

export default function SignupForm() {
  const initialState = {
    name: "",
    account: "",
    password: "",
    cf_password: "",
  };
  const [userRegister, setUserRegister] = useState(initialState);
  const { name, account, password, cf_password } = userRegister;

  const [typePass, setTypePass] = useState(false);
  const [typeCfPass, setTypeCfPass] = useState(false);

  const dispatch = useDispatch();

  const handleChangeInput = (event: InputChange) => {
    const { value, name } = event.target;
    setUserRegister({ ...userRegister, [name]: value });
  };

  const handleSubmit = (event: FormSubmit) => {
    event.preventDefault();
    dispatch(register(userRegister));
  };

  return (
    <div>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-24 w-auto"
            src={squidfield}
            alt="squid"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign up
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or <Link to="/login">Login</Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="account"
                  className="form-label block text-sm font-medium text-gray-700"
                >
                  name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleChangeInput}
                  placeholder="Your name is up to 20 chars."
                  className=" form-control appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-squid-cyan focus:border-squid-cyan sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="account"
                  className="form-label block text-sm font-medium text-gray-700"
                >
                  Email
                </label>

                <input
                  type="text"
                  id="account"
                  name="account"
                  value={account}
                  onChange={handleChangeInput}
                  className=" form-control appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-squid-cyan focus:border-squid-cyan sm:text-sm"
                />
              </div>

              <label
                htmlFor="password"
                className="form-label block text-sm font-medium text-gray-700"
              >
                Password
              </label>

              <div className="pass mt-1">
                <input
                  type={typePass ? "text" : "password"}
                  id="password"
                  name="password"
                  value={password}
                  onChange={handleChangeInput}
                  className="form-control appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-squid-cyan focus:border-squid-cyan sm:text-sm"
                />

              </div>
              <div className="pass mt-1">
                <input
                  type={typeCfPass ? "text" : "password"}
                  id="cf_password"
                  name="cf_password"
                  value={cf_password}
                  onChange={handleChangeInput}
                  placeholder="Your confirm password."
                  className="form-control appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-squid-cyan focus:border-squid-cyan sm:text-sm"
                />

              </div>

              <div>
                <button
                  type="submit"
                  className="btn btn-dark w-100 mt-1 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-squid-cyan hover:bg-squid-cyan focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-squid-cyan"
                  disabled={account && password ? false : true}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}