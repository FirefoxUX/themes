# Themes
Generate a JSON file ready for the [create-theme-script](https://github.com/FirefoxUX/create-theme-script) using [design-tokens](https://github.com/lukasoppermann/design-tokens) to export color tokens out of Figma.

## How to use

1. To generate export from Figma, run [design-tokens](https://github.com/lukasoppermann/design-tokens) in the Figma file prepared for theming (UX is in charge of setting up the theme file correctly)
2. Name your export 'base.json' and add it inside 'tokens/color'
3. Run the clean-json.js script to dump a new formatted JSON file ready for the [create-theme-script](https://github.com/FirefoxUX/create-theme-script)
