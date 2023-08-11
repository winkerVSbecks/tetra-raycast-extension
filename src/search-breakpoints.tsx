import { Action, ActionPanel, List } from "@raycast/api";
import { breakpoint } from "@chromaui/tetra";

export const oldBreakpoints = [440, 600, 900, 1200];

const findOldBreakpoint = (value: number) => {
  const index = oldBreakpoints.findIndex((breakpoint) => breakpoint === value);
  return index === -1 ? undefined : index;
};

interface BreakPoint {
  name: string;
  value: number;
  oldName?: number;
}

const breakpoints: BreakPoint[] = Object.entries(breakpoint).map(([name, value]) => {
  return {
    name,
    value,
    oldName: findOldBreakpoint(value),
  };
});

export default function SearchBreakpoints() {
  return (
    <List>
      {breakpoints.map(({ name, value, oldName }) => {
        return (
          <List.Item
            key={name}
            title={name}
            subtitle={value.toString()}
            accessories={oldName ? [{ text: `old token: breakpoints[${oldName}]` }] : null}
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
    </List>
  );
}
