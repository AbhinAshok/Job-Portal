import {
  TextField,
  Button,
} from "@mui/material";

import {
  useState,
} from "react";

const RecruiterNotes = ({
  applicationId,
}) => {

  const [note, setNote] =
    useState("");

  const handleSave =
    async () => {

      // API call

      setNote("");
    };

  return (
    <>

      <TextField
        fullWidth
        multiline
        rows={4}
        value={note}
        onChange={(e) =>
          setNote(
            e.target.value
          )
        }
      />

      <Button
        sx={{ mt: 2 }}
        variant="contained"
        onClick={handleSave}
      >
        Save Note
      </Button>

    </>
  );
};

export default RecruiterNotes;