import React, { useState } from "react";
import { List } from "react-native-paper";

export const AccordionList = ({
  title = "",
  listName = "",
  icon = "",
  items = [],
}) => {
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => setExpanded(!expanded);
  return (
    <List.Section title={title}>
      <List.Accordion
        title={listName}
        left={(props) => <List.Icon {...props} icon={icon} />}
        expanded={expanded}
        onPress={handlePress}
      >
        {items.map((item, idx) => (
          <List.Item key={`${item}-${idx}`} title={item} />
        ))}
      </List.Accordion>
    </List.Section>
  );
};
