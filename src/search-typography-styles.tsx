import { Action, ActionPanel, List } from "@raycast/api";
import { typography } from "@chromaui/tetra";

const oldTokens = {
  heading56: "marketing.hero1",
  heading40: "marketing.hero2",
  heading30: "marketing.heading",
  heading24: "marketing.subheading",
  body16: "marketing.textLarge",
  heading16: "marketing.textLargeBold",
  body14: "marketing.textSmall",
};

interface TypographyStyle {
  name: string;
  value: string;
  styles: string[][];
  oldToken?: string;
}

const typographyStyles: TypographyStyle[] = Object.entries(typography).map(([name, value]) => ({
  name,
  value,
  styles: value.styles
    .trim()
    .split(/\r?\n|\r|\n/g)
    .map((style: string) =>
      style
        .trim()
        .split(":")
        .map((s: string) => s.replace(";", ""))
    ),
  oldToken: oldTokens[name as keyof typeof oldTokens],
}));

export default function SearchTypographyStyles() {
  return (
    <List isShowingDetail>
      {typographyStyles.map(({ name, styles, oldToken }) => {
        return (
          <List.Item
            key={name}
            title={name}
            detail={
              <List.Item.Detail
                metadata={
                  <List.Item.Detail.Metadata>
                    {styles.map(([key, value]) => (
                      <List.Item.Detail.Metadata.Label key={key} title={key} text={value} />
                    ))}
                    {oldToken && (
                      <>
                        <List.Item.Detail.Metadata.Separator />
                        <List.Item.Detail.Metadata.Label title="Old Token" text={oldToken} />
                      </>
                    )}
                  </List.Item.Detail.Metadata>
                }
              />
            }
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
