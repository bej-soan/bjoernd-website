const eleventySass = require("@11tyrocks/eleventy-plugin-sass-lightningcss");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventySass);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy("./src/images/");
  eleventyConfig.addPassthroughCopy("./src/assets/");
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.setBrowserSyncConfig({
		files: './_public/css/**.css'
	});
  return {
    dir: {
      input: "src",
      output: "_public",
    },
  };
};
