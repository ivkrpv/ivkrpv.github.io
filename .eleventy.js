module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/images')

  return {
    dir: { input: 'src', output: 'docs', data: '_data' },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
    htmlTemplateEngine: 'njk'
  }
}
