import {
  Stack,
  TextField,
  Button,
} from "@mui/material";

import {
  useState,
} from "react";

const InterviewForm = ({
  onSubmit,
}) => {

  const [formData,
    setFormData] =
    useState({
      application: "",
      scheduled_at: "",
      meeting_link: "",
      notes: "",
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
        name="application"
        label="Application ID"
        onChange={
          handleChange
        }
      />

      <TextField
        name="scheduled_at"
        type="datetime-local"
        onChange={
          handleChange
        }
      />

      <TextField
        name="meeting_link"
        label="Meeting Link"
        onChange={
          handleChange
        }
      />

      <TextField
        multiline
        rows={3}
        name="notes"
        label="Notes"
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
        Schedule Interview
      </Button>

    </Stack>
  );
};

export default InterviewForm;