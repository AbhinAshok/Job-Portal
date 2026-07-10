import {
  useEffect,
  useState,
} from "react";

import {
  DragDropContext,
} from "@hello-pangea/dnd";

import {
  Box,
  Typography,
} from "@mui/material";

import ATSColumn from "../../components/recruiter/ats/ATSColumn";
import ATSStats from "../../components/recruiter/ats/ATSStats";

import {
  getATSPipeline,
  updateStatus,
} from "../../api/atsApi";

const ATSBoard = () => {

  const [pipeline,
    setPipeline] =
    useState({});

  const loadPipeline =
    async () => {

      const data =
        await getATSPipeline();

      setPipeline(data);
    };

  useEffect(() => {
    loadPipeline();
  }, []);

  const onDragEnd =
    async (result) => {

      if (
        !result.destination
      )
        return;

      const applicantId =
        result.draggableId;

      const newStatus =
        result.destination
          .droppableId;

      await updateStatus(
        applicantId,
        newStatus
      );

      loadPipeline();
    };

  return (
    <>

      <Typography
        variant="h4"
        gutterBottom
      >
        ATS Pipeline
      </Typography>

      <ATSStats
        pipeline={pipeline}
      />

      <DragDropContext
        onDragEnd={
          onDragEnd
        }
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
            overflowX:
              "auto",
            pb: 2,
          }}
        >

          <ATSColumn
            title="applied"
            applications={
              pipeline
                .applied ||
              []
            }
          />

          <ATSColumn
            title="reviewing"
            applications={
              pipeline
                .reviewing ||
              []
            }
          />

          <ATSColumn
            title="shortlisted"
            applications={
              pipeline
                .shortlisted ||
              []
            }
          />

          <ATSColumn
            title="interview"
            applications={
              pipeline
                .interview ||
              []
            }
          />

          <ATSColumn
            title="offer"
            applications={
              pipeline
                .offer ||
              []
            }
          />

          <ATSColumn
            title="hired"
            applications={
              pipeline
                .hired ||
              []
            }
          />

          <ATSColumn
            title="rejected"
            applications={
              pipeline
                .rejected ||
              []
            }
          />

        </Box>
      </DragDropContext>

    </>
  );
};

export default ATSBoard;