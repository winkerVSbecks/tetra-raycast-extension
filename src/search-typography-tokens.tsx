import { Action, ActionPanel, List } from "@raycast/api";
import { fontFamily, fontSize, fontWeight, lineHeight } from "@chromaui/tetra";

export default function SearchTypographyTokens() {
  return (
    <List>
      <List.Section title="Font Family">
        {Object.entries(fontFamily).map(([name, value]) => {
          return (
            <List.Item
              key={name}
              title={name}
              subtitle={value}
              keywords={[name, value, "family"]}
              actions={
                <ActionPanel>
                  <Action.CopyToClipboard
                    title="Copy Token Name"
                    content={name}
                    shortcut={{ modifiers: ["cmd"], key: "t" }}
                  />
                </ActionPanel>
              }
            />
          );
        })}
      </List.Section>
      <List.Section title="Font Size">
        {Object.entries(fontSize).map(([name, value]) => {
          return (
            <List.Item
              key={name}
              title={name}
              subtitle={value}
              keywords={[name, value, "size"]}
              actions={
                <ActionPanel>
                  <Action.CopyToClipboard
                    title="Copy Token Name"
                    content={name}
                    shortcut={{ modifiers: ["cmd"], key: "t" }}
                  />
                </ActionPanel>
              }
            />
          );
        })}
      </List.Section>
      <List.Section title="Font Weight">
        {Object.entries(fontWeight).map(([name, value]) => {
          return (
            <List.Item
              key={name}
              title={name}
              subtitle={value.toString()}
              keywords={[name, value.toString(), "weight"]}
              actions={
                <ActionPanel>
                  <Action.CopyToClipboard
                    title="Copy Token Name"
                    content={name}
                    shortcut={{ modifiers: ["cmd"], key: "t" }}
                  />
                </ActionPanel>
              }
            />
          );
        })}
      </List.Section>
      <List.Section title="Line Height">
        {Object.entries(lineHeight).map(([name, value]) => {
          return (
            <List.Item
              key={name}
              title={name}
              subtitle={value}
              keywords={[name, value, "line", "height"]}
              actions={
                <ActionPanel>
                  <Action.CopyToClipboard
                    title="Copy Token Name"
                    content={name}
                    shortcut={{ modifiers: ["cmd"], key: "t" }}
                  />
                </ActionPanel>
              }
            />
          );
        })}
      </List.Section>
    </List>
  );
}
