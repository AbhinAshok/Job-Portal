import {
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

const DashboardCards = ({
  stats,
}) => {

  const cards = [
    {
      label: "Jobs",
      value: stats.jobs,
    },
    {
      label: "Applications",
      value:
        stats.applications,
    },
    {
      label: "Hired",
      value: stats.hired,
    },
  ];

  return (
    <Grid container spacing={3}>
      {cards.map((card) => (
        <Grid
          item
          xs={12}
          md={4}
          key={card.label}
        >
          <Card>
            <CardContent>

              <Typography
                variant="h6"
              >
                {card.label}
              </Typography>

              <Typography
                variant="h4"
              >
                {card.value}
              </Typography>

            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DashboardCards;