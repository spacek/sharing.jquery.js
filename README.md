sharing.jquery.js
=================

Simple jQuery based sharing library. Currently supported social networks: Facebook, Twitter, Pinterest

Usage example:

HTML
```html
<a href="http://www.mywebsite.com" class="tw-share">Share on Twitter</a>
<a href="http://www.mywebsite.com" class="fb-share">Share on Facebook</a>
<a href="http://www.mywebsite.com" class="pt-share">Share on Pinterest</a>

Javascript:
```javascript
$(".tw-share").sharing("twitter");
$(".fb-share").sharing("facebook");
$(".pt-share").sharing("pinterest");

Author: Jiri Spacek, 2014