import { useForm } from "react-hook-form";
import api from "../../api/axios";

const Register = () => {
  const { register, handleSubmit } =
    useForm();

  const onSubmit = async (data) => {
    try {
      await api.post(
        "accounts/register/",
        data
      );

      alert("Registered Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2>Register</h2>

      <input
        placeholder="Full Name"
        {...register("full_name")}
      />

      <input
        placeholder="Email"
        {...register("email")}
      />

      <input
        placeholder="Role"
        {...register("role")}
      />

      <input
        type="password"
        placeholder="Password"
        {...register("password")}
      />

      <button type="submit">
        Register
      </button>
    </form>
  );
};

export default Register;