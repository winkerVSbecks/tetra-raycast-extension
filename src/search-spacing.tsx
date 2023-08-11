import { Action, ActionPanel, List } from "@raycast/api";
import { spacing } from "@chromaui/tetra";

const spacingTokens = Object.entries(spacing)
  .map(([name, value]) => ({ name, level: parseFloat(name), value }))
  .sort((a, b) => a.level - b.level);

export default function SearchSpacing() {
  return (
    <List>
      <List.Section title="The spacing scale is based on 4px. Values are calculated as tokenName multiplied by 4.">
        {spacingTokens.map(({ name, level, value }) => {
          return (
            <List.Item
              key={name}
              title={name}
              subtitle={level < 0.5 ? value : `${level * 4}px`}
              accessories={[{ text: value.toString() }]}
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
