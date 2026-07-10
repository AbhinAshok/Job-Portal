import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";

import { useState } from "react";

const JobFilters = ({
  onApplyFilters,
}) => {
  const [filters, setFilters] =
    useState({
      job_type: "",
      experience_level: "",
      location: "",
    });

  const handleChange = (
    e
  ) => {
    setFilters({
      ...filters,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleApply = () => {
    onApplyFilters(filters);
  };

  const handleReset = () => {
    const resetFilters = {
      job_type: "",
      experience_level: "",
      location: "",
    };

    setFilters(
      resetFilters
    );

    onApplyFilters(
      resetFilters
    );
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{ mb: 3 }}
    >
      <Grid
        item
        xs={12}
        md={3}
      >
        <FormControl fullWidth>
          <InputLabel>
            Job Type
          </InputLabel>

          <Select
            name="job_type"
            value={
              filters.job_type
            }
            label="Job Type"
            onChange={
              handleChange
            }
          >
            <MenuItem value="">
              All
            </MenuItem>

            <MenuItem value="full_time">
              Full Time
            </MenuItem>

            <MenuItem value="part_time">
              Part Time
            </MenuItem>

            <MenuItem value="contract">
              Contract
            </MenuItem>

            <MenuItem value="internship">
              Internship
            </MenuItem>

            <MenuItem value="remote">
              Remote
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid
        item
        xs={12}
        md={3}
      >
        <FormControl fullWidth>
          <InputLabel>
            Experience
          </InputLabel>

          <Select
            name="experience_level"
            value={
              filters.experience_level
            }
            label="Experience"
            onChange={
              handleChange
            }
          >
            <MenuItem value="">
              All
            </MenuItem>

            <MenuItem value="fresher">
              Fresher
            </MenuItem>

            <MenuItem value="junior">
              Junior
            </MenuItem>

            <MenuItem value="mid">
              Mid Level
            </MenuItem>

            <MenuItem value="senior">
              Senior
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid
        item
        xs={12}
        md={3}
      >
        <TextField
          fullWidth
          name="location"
          label="Location"
          value={
            filters.location
          }
          onChange={
            handleChange
          }
        />
      </Grid>

      <Grid
        item
        xs={12}
        md={3}
        sx={{
          display: "flex",
          gap: 1,
        }}
      >
        <Button
          variant="contained"
          fullWidth
          onClick={
            handleApply
          }
        >
          Apply
        </Button>

        <Button
          variant="outlined"
          fullWidth
          onClick={
            handleReset
          }
        >
          Reset
        </Button>
      </Grid>
    </Grid>
  );
};

export default JobFilters;