import React, { useEffect } from "react";
import {
  Form,
  useActionData,
  useNavigation,
  useRouteError,
} from "react-router-dom";

const Register = () => {
  const data = useActionData();
  const navigation = useNavigation();
  const error = useRouteError();

  useEffect(() => {
    if (data) {
      alert("Register Successfully ...");
    }
  }, [data]);

  useEffect(() => {
    if (error?.message) {
      alert("Register Failed Unfortuntely ...");
    }
  }, [error]);

  if (navigation.state !== "idle") return <p>Loading</p>;

  return (
    <div>
      <h1>Signup Page</h1>
      <Form method="post">
        <div>
          <label>Mobile</label>
          <br />
          <input name="mobile" />
        </div>
        <br />
        <div>
          <label>Password</label>
          <br />
          <input name="password" />
        </div>
        <br />
        <button>Register</button>
      </Form>
    </div>
  );
};

export default Register;
