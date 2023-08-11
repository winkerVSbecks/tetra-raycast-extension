import { Action, ActionPanel, Grid } from "@raycast/api";
import { color } from "@chromaui/tetra";
import { styles } from "@storybook/design-system";

const oldColors = styles.color;

const blackOrWhiteRegex = new RegExp(/(white|black)/);

type ColorGroups = { [key: string]: { shade: string; value: string; oldName?: string }[] };

const findOldName = (value: string) => {
  const results = Object.entries(oldColors).find(([name, val]) => {
    if (val === value) {
      return name;
    }
  });

  return results ? results[0] : undefined;
};

const colorGroups: ColorGroups = Object.entries(color).reduce((acc: ColorGroups, [name, value]) => {
  const group = blackOrWhiteRegex.test(name) ? "black and white" : name.replace(/((Tr)?\d+)$/g, "");

  if (!acc[group]) {
    acc[group] = [];
  }
  const oldName = findOldName(value);

  acc[group].push({ shade: name, value, oldName: oldName });
  return acc;
}, {});

export default function SearchColors() {
  return (
    <Grid searchBarPlaceholder="Search colors by name and shade..." columns={4}>
      {Object.entries(colorGroups).map(([name, shades]) => (
        <Grid.Section key={name} title={name} fit={Grid.Fit.Fill}>
          {shades.map(({ shade, value, oldName }) => (
            <Grid.Item
              key={shade}
              title={`${shade}${oldName ? ` (${oldName})` : ""}`}
              subtitle={value}
              content={{
                color: {
                  light: value,
                  dark: value,
                  adjustContrast: false,
                },
              }}
              keywords={[name, name + shade, `${name} ${shade}`, `${name}-${shade}`, value, value.replace("#", "")]}
              actions={
                <ActionPanel>
                  <ActionPanel.Section>
                    <Action.CopyToClipboard
                      title="Copy Token Name"
                      content={shade}
                      shortcut={{ modifiers: ["cmd"], key: "t" }}
                    />
                    <Action.CopyToClipboard
                      title="Copy Value"
                      content={value}
                      shortcut={{ modifiers: ["cmd"], key: "h" }}
                    />
                  </ActionPanel.Section>
                </ActionPanel>
              }
            />
          ))}
        </Grid.Section>
      ))}
    </Grid>
  );
}
