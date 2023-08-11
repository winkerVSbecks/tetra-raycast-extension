import { Action, ActionPanel, Grid } from "@raycast/api";
import { color } from "@chromaui/tetra";

const oldColors = {
  "background.app": "#F6F9FC",
  "background.appInverse": "#7A8997",
  "background.positive": "#E1FFD4",
  "background.negative": "#FEDED2",
  "background.warning": "#FFF5CF",
  "background.calmBlue": "#E3F3FF",
  primary: "#FF4785",
  secondary: "#029CFD",
  tertiary: "#E3E6E8",
  orange: "#FC521F",
  gold: "#FFAE00",
  green: "#66BF3C",
  seafoam: "#37D5D3",
  purple: "#6F2CAC",
  ultraviolet: "#2A0481",
  red: "#ff4400",
  bluelight: "#E3F3FF",
  bluelighter: "#F5FBFF",
  lightest: "#FFFFFF",
  lighter: "#F7FAFC",
  light: "#EEF3F6",
  mediumlight: "#ECF4F9",
  medium: "#D9E8F2",
  mediumdark: "#73828C",
  dark: "#5C6870",
  darker: "#454E54",
  darkest: "#2E3438",
  tr10: "rgba(0, 0, 0, 0.1)",
  tr5: "rgba(0, 0, 0, 0.05)",
  border: "hsla(203, 50%, 30%, 0.15)",
  positive: "#448028",
  negative: "#D43900",
  warning: "#A15C20",
  selected: "#0271B6",
};

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
