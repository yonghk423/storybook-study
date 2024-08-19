import type { Preview } from "@storybook/react";
import { withThemeByClassName } from '@storybook/addon-themes';
import { themes } from '@storybook/theming';
import { darkUIStorybook, lightUIStorybook, commonTheme } from "./themes-Storybook-UI"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // darkMode: {
    //   classTarget: 'html',
    //   stylePreview: true,
    //   darkClass: 'dark',
    //   lightClass: 'light',
    //   // Override the default dark theme
    //   dark: { ...themes.dark, ...darkUIStorybook, ...commonTheme },
    //   // Override the default light theme
    //   light: { ...themes.normal, ...lightUIStorybook, ...commonTheme },
    //   // Set the initial theme
    //   current: 'dark'
    // },
  },
};

export default preview;
