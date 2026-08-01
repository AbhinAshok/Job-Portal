import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  MenuItem,
  Alert,
} from "@mui/material";

import { useState } from "react";
import api from "../../api/axios";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const onSubmit = async (data) => {
    setError("");
    setSuccess("");

    try {
      await api.post("accounts/register/", data);

      setSuccess("Registration successful.");

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      console.error(err);

      setError(
        err.response?.data?.detail ||
          "Registration failed."
      );
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
            fontWeight="bold"
            mb={4}
          >
            Create Account
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          {success && (
            <Alert severity="success" sx={{ mb: 2 }}>
              {success}
            </Alert>
          )}

          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Full Name"
              fullWidth
              margin="normal"
              {...register("full_name")}
            />

            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              {...register("email")}
            />

            <TextField
              select
              label="Role"
              fullWidth
              margin="normal"
              defaultValue="candidate"
              {...register("role")}
            >
              <MenuItem value="candidate">
                Candidate
              </MenuItem>

              <MenuItem value="recruiter">
                Recruiter
              </MenuItem>
            </TextField>

            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              {...register("password")}
            />

            <Button
              variant="contained"
              fullWidth
              size="large"
              sx={{ mt: 3 }}
              type="submit"
            >
              Register
            </Button>
          </form>

          <Typography align="center" mt={3}>
            Already have an account?{" "}
            <Link to="/login">
              Login
            </Link>
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default Register;