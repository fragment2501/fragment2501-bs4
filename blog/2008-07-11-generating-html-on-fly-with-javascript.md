---
title: Generating HTML on-the-fly with JavaScript
date: '2008-07-11T15:51:00.000-07:00'
tags:
- JavaScript
- HTML
modified_time: '2008-07-11T16:08:51.831-07:00'
blogger_id: tag:blogger.com,1999:blog-19111454.post-998228080838953205
blogger_orig_url: http://www.bryansgeekspeak.com/2008/07/generating-html-on-fly-with-javascript.html
---

Example code to generate HTML dynamically using JS.  Here we select the HTML element by ID and append our content to its existing content.<br /><br /><div class="code"><br />&lt;html&gt;<br /> &lt;head&gt;<br />  &lt;title&gt;Append HTML to the div block using JavaScript&lt;/title&gt;<br /> &lt;/head&gt;<br /><br /> &lt;script&gt;<br />  function appendContent(){<br />   var c1 = document.getElementById('container1'); // get the container element<br />   var p1 = document.createElement("p"); // create a new p tag element<br />   var t1 = document.createTextNode('some generated text!'); // some text to display<br />   p1.appendChild(t1); // put our text into the p tag<br />   c1.appendChild(p1); // append the p tag and its content to the div labeled "container1"<br />  }<br /> &lt;/script&gt;<br /><br /> &lt;body&gt;<br />  &lt;div id="container1" style="border: 1px solid blue"&gt;<br />   &lt;p&gt;append stuff here!&lt;/p&gt;<br />  &lt;/div&gt;<br />  &lt;form&gt;<br />   &lt;input type="button" onClick="appendContent();" value="Append to the div block" /&gt;<br />  &lt;/form&gt;<br /> &lt;/body&gt;<br />&lt;/html&gt;<br /></div>