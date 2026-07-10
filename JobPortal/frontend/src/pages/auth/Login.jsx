import { useForm } from "react-hook-form";
import api from "../../api/axios";

import { useDispatch } from "react-redux";
import { loginSuccess } from "../../app/slices/authSlice";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } =
    useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await api.post(
        "accounts/login/",
        data
      );

      dispatch(
        loginSuccess(res.data)
      );

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2>Login</h2>

      <input
        placeholder="Email"
        {...register("email")}
      />

      <input
        type="password"
        placeholder="Password"
        {...register("password")}
      />

      <button type="submit">
        Login
      </button>
    </form>
  );
};

export default Login;