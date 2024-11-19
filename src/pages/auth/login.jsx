import CommonForm from "@/components/common/form";
import { loginFormControls, registerFormControls } from "@/config";
import { useState } from "react";
import { Link } from "react-router-dom";
const initialState = {
  email: "",
  password: "",
};
function AuthLogin() {
  // eslint-disable-next-line no-unused-vars, no-undef
  const [formData, setFormData] = useState(initialState);
  const onSubmit = () => {};
  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground tracking-tight">
          Signin to your Account
        </h1>
        <p className="mt-2">Dont have an Account</p>
        <Link
          to="/auth/register"
          className="font-medium ml-2 text-primary hover:underline"
        >
          Register
        </Link>
      </div>
      <CommonForm
        formControls={loginFormControls}
        buttonText={"LogIn"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}
export default AuthLogin;
