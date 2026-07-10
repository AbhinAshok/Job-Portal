import { useEffect, useState } from "react";

import {
  TextField,
  InputAdornment,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

const JobSearch = ({
  onSearch,
}) => {
  const [value, setValue] =
    useState("");

  useEffect(() => {
    const timer =
      setTimeout(() => {
        onSearch(value);
      }, 500);

    return () =>
      clearTimeout(timer);
  }, [value, onSearch]);

  return (
    <TextField
      fullWidth
      placeholder="Search jobs..."
      value={value}
      onChange={(e) =>
        setValue(e.target.value)
      }
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default JobSearch;