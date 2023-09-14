# Streamline SVG to Vue Component

This script will read all the SVG files in the `svg` folder and convert them to Vue components in the `vue` folder.

The script was made to convert Streamlinehq SVG icons to Vue components.

The script will:

1. Read the SVG file
2. Wrap the SVG data in a `<template>` tag (required by Vue)
3. Convert the file name to PascalCase and append "Icon.vue"
4. Write the new Vue component

For example, the file `arrow-left.svg` will be converted to `ArrowLeftIcon.vue`

## Usage

Using the Streamline Desktop App you can grab multiple icons at once and drag them into the `svg` folder.
Then run `npm run convert` to convert the SVG files to Vue components.

## Notes

The script will not overwrite existing Vue components. If you want to overwrite existing components, delete them first.

## Credits

This script was created by [Henrik Oldenborg](https://github.com/oldenborg)

## License

ISC
