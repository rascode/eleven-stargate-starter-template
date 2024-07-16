
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import pluginRss from "@11ty/eleventy-plugin-rss";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";


export default function (eleventyConfig) {

    // passthroughs
    eleventyConfig.addPassthroughCopy("robots.txt");
    eleventyConfig.addPassthroughCopy("manifest.json");
    eleventyConfig.addPassthroughCopy("src/assets/");
    eleventyConfig.addPassthroughCopy("src/styles/");

    // plugins
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
        extensions: "html", 		// which file extensions to process

        // Add any other Image utility options here:
        // optional, output image formats
        formats: ["webp", "jpeg"],
        // formats: ["auto"],

        // optional, output image widths
        // widths: ["auto"],

        // optional, attributes assigned on <img> override these values.
        defaultAttributes: {
            loading: "lazy",
            decoding: "async",
        },
    });

    // return Object :
    return {
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        templateFormats: ["html", "liquid", "njk", "11ty.js"],
        dir: {
            input: "src",
            includes: "templates/includes", // This value is relative to your input directory.
            layouts: "templates/layouts",  //  This value is relative to your input directory.
            data: "data", // This value is relative to your input directory.
            output: "build"
        }
    }
}