/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `search-colors` command */
  export type SearchColors = ExtensionPreferences & {}
  /** Preferences accessible in the `search-breakpoints` command */
  export type SearchBreakpoints = ExtensionPreferences & {}
  /** Preferences accessible in the `search-typography-tokens` command */
  export type SearchTypographyTokens = ExtensionPreferences & {}
  /** Preferences accessible in the `search-typography-styles` command */
  export type SearchTypographyStyles = ExtensionPreferences & {}
  /** Preferences accessible in the `search-spacing` command */
  export type SearchSpacing = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `search-colors` command */
  export type SearchColors = {}
  /** Arguments passed to the `search-breakpoints` command */
  export type SearchBreakpoints = {}
  /** Arguments passed to the `search-typography-tokens` command */
  export type SearchTypographyTokens = {}
  /** Arguments passed to the `search-typography-styles` command */
  export type SearchTypographyStyles = {}
  /** Arguments passed to the `search-spacing` command */
  export type SearchSpacing = {}
}


declare module "swift:*" {
  function run<T = unknown, U = any>(command: string, input?: U): Promise<T>;
  export default run;
	export class SwiftError extends Error {
    stderr: string;
    stdout: string;
  }
}
