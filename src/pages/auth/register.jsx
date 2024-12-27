import CommonForm from "@/components/common/form";
import { registerFormControls } from "@/config";
import { useToast } from "@/hooks/use-toast";
import { registerUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
const initialState = {
  userName: "",
  email: "",
  password: "",
};
function AuthRegister() {
  // eslint-disable-next-line no-unused-vars, no-undef
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(registerUser(formData)).then((data) => {
      console.log(data?.payload?.success, data, "data?.payload?.success");
      if (data?.payload?.success) 
        {toast({
          title: "Registration sucessfull"
        })
        navigate("/auth/login");
      }
      console.log(data);
    });
  };

  console.log(formData);
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
