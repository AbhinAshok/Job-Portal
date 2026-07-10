import {
  TextField,
  Button,
  Stack,
} from "@mui/material";

import {
  useState,
} from "react";

const CompanyForm = ({
  onSubmit,
  initialData = {},
}) => {

  const [formData,
    setFormData] =
    useState({
      name:
        initialData.name || "",
      website:
        initialData.website ||
        "",
      description:
        initialData.description ||
        "",
      location:
        initialData.location ||
        "",
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
        label="Company Name"
        name="name"
        value={formData.name}
        onChange={
          handleChange
        }
      />

      <TextField
        label="Website"
        name="website"
        value={
          formData.website
        }
        onChange={
          handleChange
        }
      />

      <TextField
        label="Location"
        name="location"
        value={
          formData.location
        }
        onChange={
          handleChange
        }
      />

      <TextField
        multiline
        rows={4}
        label="Description"
        name="description"
        value={
          formData.description
        }
        onChange={
          handleChange
        }
      />

      <Button
        variant="contained"
        onClick={() =>
          onSubmit(
            formData
          )
        }
      >
        Save Company
      </Button>

    </Stack>
  );
};

export default CompanyForm;