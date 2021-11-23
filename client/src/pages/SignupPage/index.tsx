import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import  SignupForm  from "./signupForm";

import { RootStore } from "../../utils/TypeScript";

export default function SignupPage() {

  const history = useHistory();

  const { auth } = useSelector((state: RootStore) => state);

  useEffect(() => {
    if (auth.access_token) history.push("/operations");
  }, [auth.access_token, history]);

  return (
    <div>
        <SignupForm />
    </div>
  );
}
