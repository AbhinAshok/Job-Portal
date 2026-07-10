import {
  Button,
  Stack,
} from "@mui/material";

import {
  exportToExcel,
} from "../../../utils/exportExcel";

import {
  exportToPdf,
} from "../../../utils/exportPdf";

const ExportButtons = ({
  data,
}) => {

  return (
    <Stack
      direction="row"
      spacing={2}
      mb={3}
    >

      <Button
        variant="contained"
        onClick={() =>
          exportToExcel(
            data,
            "job_report"
          )
        }
      >
        Export Excel
      </Button>

      <Button
        variant="outlined"
        onClick={() =>
          exportToPdf(
            data,
            "job_report"
          )
        }
      >
        Export PDF
      </Button>

    </Stack>
  );
};

export default ExportButtons;