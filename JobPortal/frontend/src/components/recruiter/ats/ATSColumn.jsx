import {
  Paper,
  Typography,
  Box,
} from "@mui/material";

import {
  Droppable,
  Draggable,
} from "@hello-pangea/dnd";

import ATSCard from "./ATSCard";

const ATSColumn = ({
  title,
  applications,
}) => {
  return (
    <Paper
      sx={{
        p: 2,
        minHeight: 600,
        width: 320,
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
      >
        {title}
        ({applications.length})
      </Typography>

      <Droppable
        droppableId={title}
      >
        {(provided) => (
          <Box
            ref={
              provided.innerRef
            }
            {...provided.droppableProps}
          >
            {applications.map(
              (
                applicant,
                index
              ) => (
                <Draggable
                  key={
                    applicant.id
                  }
                  draggableId={String(
                    applicant.id
                  )}
                  index={index}
                >
                  {(
                    provided
                  ) => (
                    <div
                      ref={
                        provided.innerRef
                      }
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <ATSCard
                        applicant={
                          applicant
                        }
                      />
                    </div>
                  )}
                </Draggable>
              )
            )}

            {
              provided.placeholder
            }
          </Box>
        )}
      </Droppable>
    </Paper>
  );
};

export default ATSColumn;