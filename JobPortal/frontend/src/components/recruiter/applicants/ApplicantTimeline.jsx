import {
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const ApplicantTimeline = ({
  history,
}) => {

  return (
    <List>

      {history?.map(
        (item) => (

          <ListItem
            key={item.id}
          >

            <ListItemText
              primary={`${item.previous_status} → ${item.new_status}`}
              secondary={
                item.created_at
              }
            />

          </ListItem>

        )
      )}

    </List>
  );
};

export default ApplicantTimeline;