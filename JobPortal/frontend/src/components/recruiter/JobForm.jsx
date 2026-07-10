import {
  TextField,
  Button,
  Stack,
  MenuItem,
} from "@mui/material";

import {
  useState,
} from "react";

const JobForm = ({
  onSubmit,
}) => {

  const [formData,
    setFormData] =
    useState({
      title: "",
      description: "",
      requirements: "",
      location: "",
      salary_min: "",
      salary_max: "",
      job_type:
        "full_time",
      experience_level:
        "junior",
      vacancies: 1,
      company: "",
    });

  const handleChange = (
    e
  ) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  return (
    <Stack spacing={2}>

      <TextField
        name="title"
        label="Title"
        onChange={
          handleChange
        }
      />

      <TextField
        multiline
        rows={4}
        name="description"
        label="Description"
        onChange={
          handleChange
        }
      />

      <TextField
        multiline
        rows={4}
        name="requirements"
        label="Requirements"
        onChange={
          handleChange
        }
      />

      <TextField
        name="location"
        label="Location"
        onChange={
          handleChange
        }
      />

      <TextField
        name="salary_min"
        label="Min Salary"
        onChange={
          handleChange
        }
      />

      <TextField
        name="salary_max"
        label="Max Salary"
        onChange={
          handleChange
        }
      />

      <TextField
        select
        name="job_type"
        value={
          formData.job_type
        }
        onChange={
          handleChange
        }
      >
        <MenuItem value="full_time">
          Full Time
        </MenuItem>

        <MenuItem value="remote">
          Remote
        </MenuItem>

        <MenuItem value="internship">
          Internship
        </MenuItem>
      </TextField>

      <Button
        variant="contained"
        onClick={() =>
          onSubmit(
            formData
          )
        }
      >
        Create Job
      </Button>

    </Stack>
  );
};

export default JobForm;