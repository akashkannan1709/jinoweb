

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const FormField = ({ label, name, type, register, error, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <div className="relative">
        <input
          type={inputType}
          placeholder={placeholder || name}
          className="input input-bordered w-full pr-10"
          {...register(name)}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5 text-gray-500" />
            ) : (
              <Eye className="h-5 w-5 text-gray-500" />
            )}
          </button>
        )}
      </div>
      {error && <span className="text-error text-xs">{error.message}</span>}
    </div>
  );
};

//  const Form = ({ children }) => {
//   return <div className="form-control">{children}</div>;
// };
 
// export { FormField, Form };

export default FormField;
