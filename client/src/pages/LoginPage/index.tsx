import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { LoginForm } from "./loginForm";

import { RootStore } from "../../utils/TypeScript";

export default function LoginPage() {
  const history = useHistory();

  const { auth } = useSelector((state: RootStore) => state);

  useEffect(() => {
    if (auth.access_token) history.push("/operations");
  }, [auth.access_token, history]);

  return (
    <div>
        <LoginForm />
    </div>
  );
}
