import {
  Grid,
  TextField,
  MenuItem,
} from "@mui/material";

const ApplicantFilters = ({
  filters,
  setFilters,
}) => {

  return (
    <Grid
      container
      spacing={2}
      sx={{ mb: 3 }}
    >

      <Grid item xs={6}>
        <TextField
          fullWidth
          label="Search"
          value={
            filters.search
          }
          onChange={(e) =>
            setFilters({
              ...filters,
              search:
                e.target.value,
            })
          }
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          select
          fullWidth
          label="Status"
          value={
            filters.status
          }
          onChange={(e) =>
            setFilters({
              ...filters,
              status:
                e.target.value,
            })
          }
        >

          <MenuItem value="">
            All
          </MenuItem>

          <MenuItem value="applied">
            Applied
          </MenuItem>

          <MenuItem value="shortlisted">
            Shortlisted
          </MenuItem>

          <MenuItem value="interview">
            Interview
          </MenuItem>

          <MenuItem value="hired">
            Hired
          </MenuItem>

        </TextField>
      </Grid>

    </Grid>
  );
};

export default ApplicantFilters;