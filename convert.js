/**
 * This script will read all the SVG files in the `svg` folder and convert them
 * to Vue components in the `vue` folder.
 *
 * The script was made to convert Streamlinehq SVG icons to Vue components.
 *
 * The script will:
 * 1. Read the SVG file
 * 2. Wrap the SVG data in a <template> tag (required by Vue)
 * 3. Convert the file name to PascalCase and append "Icon.vue"
 * 4. Write the new Vue component
 *
 * For example, the file `arrow-left.svg` will be converted to `ArrowLeftIcon.vue`
 */

const fs = require("fs");
const path = require("path");

const svgFolder = "./svg";
const vueFolder = "./vue";

fs.readdir(svgFolder, (err, files) => {
  if (err) {
    console.error("Could not read the directory:", err);
    return;
  }

  files.forEach((file) => {
    if (path.extname(file) === ".svg") {
      fs.readFile(`${svgFolder}/${file}`, "utf8", (err, data) => {
        if (err) {
          console.error("Could not read the SVG file:", err);
          return;
        }

        // Wrap the SVG data in a <template> tag
        const vueData = `<template>${data}</template>`;

        // Convert the file name to PascalCase and append "Icon.vue"
        const vueFileName = file
          .replace(/(-\d+)/g, (match) => match.replace("-", ""))
          .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
            index === 0 ? word.toLowerCase() : word.toUpperCase()
          )
          .replace(/\s+/g, "")
          .replace(/-/g, "")
          .replace(/\.svg$/i, "Icon.vue"); // Using a case-insensitive regex match for '.svg'

        // Special handling to ensure the first character is uppercase
        const finalVueFileName =
          vueFileName.charAt(0).toUpperCase() + vueFileName.slice(1);

        // Write the new Vue component
        fs.writeFile(
          `${vueFolder}/${finalVueFileName}`,
          vueData,
          "utf8",
          (err) => {
            if (err) {
              console.error("Could not write the Vue component:", err);
            }
          }
        );
      });
    }
  });
});
