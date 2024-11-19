import CommonForm from "@/components/common/form";
import { registerFormControls } from "@/config";
import { useState } from "react";
import { Link } from "react-router-dom";
const initialState = {
  userName: "",
  email: "",
  password: "",
};
function AuthRegister() {
  // eslint-disable-next-line no-unused-vars, no-undef
  const [formData, setFormData] = useState(initialState);
  const onSubmit = () => {};
  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground tracking-tight">
          Create new Account
        </h1>
        <p className="mt-2">Already Have An Account</p>
        <Link
          to="/auth/login"
          className="font-medium ml-2 text-primary hover:underline"
        >
          Login
        </Link>
      </div>
      <CommonForm
        formControls={registerFormControls}
        buttonText={"SignUp"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}
export default AuthRegister;
