import {
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

const StatusSelector = ({
  value,
  onChange,
}) => {

  return (
    <FormControl fullWidth>

      <Select
        value={value}
        onChange={(e) =>
          onChange(
            e.target.value
          )
        }
      >
        <MenuItem value="applied">
          Applied
        </MenuItem>

        <MenuItem value="reviewing">
          Reviewing
        </MenuItem>

        <MenuItem value="shortlisted">
          Shortlisted
        </MenuItem>

        <MenuItem value="interview">
          Interview
        </MenuItem>

        <MenuItem value="offer">
          Offer
        </MenuItem>

        <MenuItem value="hired">
          Hired
        </MenuItem>

        <MenuItem value="rejected">
          Rejected
        </MenuItem>

      </Select>

    </FormControl>
  );
};

export default StatusSelector;