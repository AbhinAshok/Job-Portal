import {
  Button,
} from "@mui/material";

import {
  useState,
} from "react";

import api from "../../api/axios";

const ResumeUpload = () => {

  const [file,
    setFile] =
    useState(null);

  const uploadResume =
    async () => {

      const formData =
        new FormData();

      formData.append(
        "resume",
        file
      );

      await api.post(
        "resume/upload/",
        formData
      );

      alert(
        "Resume uploaded"
      );
    };

  return (
    <>

      <input
        type="file"
        onChange={(e) =>
          setFile(
            e.target.files[0]
          )
        }
      />

      <Button
        onClick={
          uploadResume
        }
      >
        Upload Resume
      </Button>

    </>
  );
};

export default ResumeUpload;