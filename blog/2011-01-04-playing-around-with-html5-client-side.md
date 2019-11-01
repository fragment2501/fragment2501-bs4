---
title: Playing Around With HTML5 Client Side Forms Validation
date: '2011-01-04T09:06:00.000-08:00'
tags:
- HTML
modified_time: '2011-05-19T11:51:02.159-07:00'
blogger_id: tag:blogger.com,1999:blog-19111454.post-4836946596690997590
blogger_orig_url: http://www.bryansgeekspeak.com/2011/01/playing-around-with-html5-client-side.html
---

<div class="sidenote">Whoops! The link below is broken - I'm trimming down the number of domains I own and moopoint.com was one I let go. I'll bring the code up under the bryansgeekspeak.com domain at some point in the future!</div><br />So far, I love the <a href="http://www.mozilla.com/en-US/firefox/beta/">FireFox4 beta</a>.  I had completely switched to Chrome on my laptop at home (I have to use IE at work since its our client's standard browser -.-) but now I'm slowly switching back to FireFox - mostly for the neat HTML5 features they're implementing. <br /><br />One of the cool new things for web developers that they just added to the FireFox beta is built in Forms Validation. In your input tag markup, you can now add the attributes "required" and "pattern=''" and FireFox will now automagically require the field to be not empty and/or the value must pass the regex supplied in the pattern attribute of the input tag. Sweet! That means less custom javascript code in your web applications and cleaner HTML markup :-D<br /><br />I've put up a simple example of the validation in action here - <a href="http://www.moopoint.com/FormsValidation.html">http://www.moopoint.com/FormsValidation.html</a>.