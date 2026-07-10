import {
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

const ATSStats = ({
  pipeline,
}) => {

  const total =
    Object.values(
      pipeline
    ).flat().length;

  return (
    <Grid
      container
      spacing={2}
      sx={{ mb: 3 }}
    >

      <Grid item xs={3}>
        <Card>

          <CardContent>

            <Typography>
              Total Applicants
            </Typography>

            <Typography
              variant="h4"
            >
              {total}
            </Typography>

          </CardContent>

        </Card>
      </Grid>

      <Grid item xs={3}>
        <Card>

          <CardContent>

            <Typography>
              Interviews
            </Typography>

            <Typography
              variant="h4"
            >
              {
                pipeline
                  .interview
                  ?.length || 0
              }
            </Typography>

          </CardContent>

        </Card>
      </Grid>

      <Grid item xs={3}>
        <Card>

          <CardContent>

            <Typography>
              Offers
            </Typography>

            <Typography
              variant="h4"
            >
              {
                pipeline
                  .offer
                  ?.length || 0
              }
            </Typography>

          </CardContent>

        </Card>
      </Grid>

      <Grid item xs={3}>
        <Card>

          <CardContent>

            <Typography>
              Hired
            </Typography>

            <Typography
              variant="h4"
            >
              {
                pipeline
                  .hired
                  ?.length || 0
              }
            </Typography>

          </CardContent>

        </Card>
      </Grid>

    </Grid>
  );
};

export default ATSStats;