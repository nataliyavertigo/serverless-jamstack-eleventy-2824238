module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('./_site');

  return {
    markdownTemplateEngine: 'njk',
    dir: {
      input: '_site',
      output: 'dist'
    }
  }
}