# Chalk Theme

![Chalk](screenshot.jpg)

This is Jekyll's **Chalk** theme, rebuilt for [Grav CMS](https://getgrav.org/). You can find the original by Nielsen Ramon [here](http://jekyllthemes.org/themes/chalk/).

## Features

Available in a light mode and a dark mode. You can switch between the two designs via the Theme settings.

The theme requires several plugins:

- [readingtime](https://github.com/getgrav/grav-plugin-readingtime)
- [highlight](https://github.com/getgrav/grav-plugin-highlight)
- [taxonomylist](https://github.com/getgrav/grav-plugin-taxonomylist)
- [jscomments](https://github.com/sommerregen/grav-plugin-jscomments) (optional)

Templates available:

- Default template: `default.html.twig`, for basic pages.
- Blog Listing template: `blog_listing.html.twig`, used to display articles as set in the page collection.
- Post template: `post.html.twig`, the individual blog posts.
- Tags template: `tags.html.twig`, to display a list of tags gathered across the posts.

Every page added will be added to the navigation, but keep in mind that the theme is designed for websites with only a few pages (eg: Blog, About, Tags).
