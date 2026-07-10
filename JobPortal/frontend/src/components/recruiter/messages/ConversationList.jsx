import {
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const ConversationList = ({
  conversations,
  onSelect,
}) => {

  return (
    <List>

      {conversations.map(
        (conversation) => (

          <ListItemButton
            key={
              conversation.id
            }
            onClick={() =>
              onSelect(
                conversation
              )
            }
          >
            <ListItemText
              primary={
                conversation.name
              }
            />
          </ListItemButton>

        )
      )}

    </List>
  );
};

export default ConversationList;