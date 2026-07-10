import {
  Box,
  Toolbar,
} from "@mui/material";

import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";

import { Outlet } from "react-router-dom";

const CandidateLayout = () => {
  return (
    <>
      <Navbar />

      <Box
        sx={{
          display: "flex",
        }}
      >
        <Sidebar />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
          }}
        >
          <Toolbar />

          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default CandidateLayout;