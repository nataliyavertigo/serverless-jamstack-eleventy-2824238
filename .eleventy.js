module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('./_site');

  return {
    markdownTemplateEngine: 'njk',
    dir: {
      input: '_site',
      includes: '_layouts',
      output: 'dist'
    }
  }
}