import {
  Card,
  CardContent,
  Typography,
  Chip,
} from "@mui/material";

const ATSCard = ({
  applicant,
}) => {
  return (
    <Card
      sx={{
        mb: 2,
        cursor: "grab",
      }}
    >
      <CardContent>

        <Typography
          variant="subtitle1"
        >
          {applicant.candidate_name}
        </Typography>

        <Typography
          variant="body2"
        >
          {applicant.job_title}
        </Typography>

        <Typography
          variant="body2"
        >
          Match Score:
          {applicant.match_score}%
        </Typography>

        <Chip
          size="small"
          label={applicant.status}
          sx={{ mt: 1 }}
        />

      </CardContent>
    </Card>
  );
};

export default ATSCard;