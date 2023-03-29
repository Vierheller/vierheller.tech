const eleventySass = require("eleventy-sass");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(eleventySass);
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // Passthroughs  
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy({ "node_modules/@fortawesome/fontawesome-free/webfonts": "webfonts" });

  return { dir: { input: "src", output: "dist" } };
};