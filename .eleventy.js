module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/webfonts');

  eleventyConfig.addPassthroughCopy('src/scripts/jquery-3.1.1.min.js');
  eleventyConfig.addPassthroughCopy('src/scripts/bootstrap.bundle.min.js');
  eleventyConfig.addPassthroughCopy('src/scripts/likely.js');
  eleventyConfig.addPassthroughCopy('src/scripts/unitegallery.min.js');
  eleventyConfig.addPassthroughCopy('src/scripts/ug-theme-tiles.js');

  return {
    dir: { input: 'src', output: 'docs', data: '_data' },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
    htmlTemplateEngine: 'njk'
  }
}
