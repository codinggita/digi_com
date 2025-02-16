
import { useState } from "react";
import CommonForm from "@/components/common/form";
import { Link, useNavigate } from "react-router-dom";
import { loginFormControls } from "@/config";


const initialState = {
    email: "",
    password: "",
  };

function AuthLogin() {
    const [formData, setFormData] = useState(initialState)

    return(
        <div className="mx-auto w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Create new account
          </h1>
          <p className="mt-2">
            Already have an account
            <Link
              className="font-medium ml-2 text-primary hover:underline"
              to="/auth/login"
            >
              Login
            </Link>
          </p>
        </div>
        <CommonForm
          formControls={registerFormControls}
          buttonText={"Sign Up"}
          formData={formData}
          setFormData={setFormData}
          onSubmit={onSubmit}
        />
      </div>
    );
}

export default AuthLogin;