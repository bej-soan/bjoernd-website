// 1. Moderne ESM-Importe statt 'require'
import eleventySass from "@11tyrocks/eleventy-plugin-sass-lightningcss";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

// 2. 'export default' statt 'module.exports'
export default function (eleventyConfig) {
  // Plugins aktivieren
  
  eleventyConfig.addPlugin(eleventySass, {
    // Hier fügen wir die geforderten Compile-Optionen für SCSS hinzu
    compileOptions: {
      permalink: "raw"
    }
  });
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Passthrough Copies (unverändert)
  eleventyConfig.addPassthroughCopy("./src/images/");
  eleventyConfig.addPassthroughCopy("./src/assets/");
  eleventyConfig.addPassthroughCopy("./src/.htaccess");
  eleventyConfig.addPassthroughCopy("./src/google1e6b9b49852585a8.html");

  // Watch Targets
  eleventyConfig.addWatchTarget("./src/sass/");

  // BrowserSync Konfiguration
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