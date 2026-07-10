import {
  Card,
  CardContent,
  Typography,
  Link,
} from "@mui/material";

const InterviewCard = ({
  interview,
}) => {

  return (
    <Card sx={{ mb: 2 }}>

      <CardContent>

        <Typography
          variant="h6"
        >
          {
            interview.application
          }
        </Typography>

        <Typography>
          {
            interview.scheduled_at
          }
        </Typography>

        {interview.meeting_link && (
          <Link
            href={
              interview.meeting_link
            }
            target="_blank"
          >
            Join Meeting
          </Link>
        )}

      </CardContent>

    </Card>
  );
};

export default InterviewCard;