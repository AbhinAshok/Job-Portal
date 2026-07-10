import { Chip } from "@mui/material";

const colorMap = {
  applied: "primary",
  reviewing: "info",
  shortlisted: "success",
  interview: "warning",
  offer: "secondary",
  hired: "success",
  rejected: "error",
};

const StatusChip = ({
  status,
}) => {
  return (
    <Chip
      label={status}
      color={
        colorMap[status] ||
        "default"
      }
    />
  );
};

export default StatusChip;