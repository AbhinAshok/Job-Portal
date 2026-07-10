import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import StatusChip from "./StatusChip";

const ApplicationCard = ({
  application,
}) => {
  return (
    <Card sx={{ mb: 2 }}>

      <CardContent>

        <Typography
          variant="h6"
        >
          {
            application.job_title
          }
        </Typography>

        <Typography>
          Match Score:
          {
            application.match_score
          }
          %
        </Typography>

        <StatusChip
          status={
            application.status
          }
        />

      </CardContent>

    </Card>
  );
};

export default ApplicationCard;