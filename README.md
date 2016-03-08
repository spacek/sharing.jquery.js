sharing.jquery.js
=================

Simple jQuery based sharing library. Currently supported social networks: Facebook, Twitter, Pinterest, Google+, Linkedin

Usage example:

HTML
```html
<a href="http://www.mywebsite.com" class="tw-share">Share on Twitter</a>
<a href="http://www.mywebsite.com" class="fb-share">Share on Facebook</a>
<a href="http://www.mywebsite.com" class="pt-share">Share on Pinterest</a>
<a href="http://www.mywebsite.com" class="ln-share">Share on LinkedIn</a>
<a href="http://www.mywebsite.com" class="gp-share">Share on Google+</a>
```

Javascript:
```javascript
$(".tw-share").sharing("twitter");
$(".fb-share").sharing("facebook");
$(".pt-share").sharing("pinterest");
$(".ln-share").sharing("linkedin");
$(".gp-share").sharing("googleplus");
```

Author: Jiri Spacek, 2016