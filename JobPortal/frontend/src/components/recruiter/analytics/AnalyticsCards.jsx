import {
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

const AnalyticsCards = ({
  summary,
}) => {

  const cards = [
    {
      title: "Jobs",
      value: summary.jobs,
    },
    {
      title: "Applications",
      value:
        summary.applications,
    },
    {
      title: "Interviews",
      value:
        summary.interviews,
    },
    {
      title: "Offers",
      value:
        summary.offers,
    },
    {
      title: "Hired",
      value:
        summary.hired,
    },
  ];

  return (
    <Grid
      container
      spacing={3}
      mb={3}
    >
      {cards.map((card) => (
        <Grid
          item
          xs={12}
          md={2.4}
          key={card.title}
        >
          <Card>
            <CardContent>

              <Typography>
                {card.title}
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

export default AnalyticsCards;