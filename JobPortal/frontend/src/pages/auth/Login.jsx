import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";

import api from "../../api/axios";
import { loginSuccess } from "../../app/slices/authSlice";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await api.post("accounts/login/", data);

      dispatch(loginSuccess(res.data));

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={8}
          sx={{
            width: "100%",
            p: 5,
            borderRadius: 3,
          }}
        >
          <Typography
            variant="h4"
            align="center"
            mb={4}
            fontWeight="bold"
          >
            Job Portal Login
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              {...register("email")}
            />

            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              {...register("password")}
            />

            <Button
              variant="contained"
              size="large"
              fullWidth
              sx={{ mt: 3 }}
              type="submit"
            >
              Login
            </Button>
          </form>

          <Typography
            align="center"
            mt={3}
          >
            Don't have an account?{" "}
            <Link to="/register">
              Register
            </Link>
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login;