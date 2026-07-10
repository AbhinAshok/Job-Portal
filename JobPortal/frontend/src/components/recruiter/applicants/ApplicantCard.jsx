import {
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
} from "@mui/material";

const ApplicantCard = ({
  applicant,
  onView,
}) => {

  return (
    <Card sx={{ mb: 2 }}>

      <CardContent>

        <Typography
          variant="h6"
        >
          {
            applicant
              .candidate_name
          }
        </Typography>

        <Typography>
          {
            applicant.job_title
          }
        </Typography>

        <Typography>
          Match Score:
          {
            applicant.match_score
          }
          %
        </Typography>

        <Chip
          label={
            applicant.status
          }
        />

        <br />
        <br />

        <Button
          variant="contained"
          onClick={() =>
            onView(
              applicant
            )
          }
        >
          View Details
        </Button>

      </CardContent>

    </Card>
  );
};

export default ApplicantCard;