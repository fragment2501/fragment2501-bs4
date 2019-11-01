---
title: MOSS  Publishing Site - Contributors Get "Access Denied" When Creating A New
  Page
date: '2008-11-14T15:30:00.000-08:00'
tags:
- MOSS
modified_time: '2008-11-14T15:42:58.192-08:00'
blogger_id: tag:blogger.com,1999:blog-19111454.post-5263281851560572838
blogger_orig_url: http://www.bryansgeekspeak.com/2008/11/moss-publishing-site-contributors-get.html
---

In one of our MOSS sites using a customized Publishing Site template, we ran into a problem where users with contributor rights couldnt create a new page in the pages library.  Then we tried granting the same user "full control" rights specifically to that site and still they could not create a page.  <br /><br />After a bit of searching on google, I found a solution at <a href="http://metahat.blogspot.com/2007/09/access-denied-while-create-page-action.html">http://metahat.blogspot.com/2007/09/access-denied-while-create-page-action.html</a> where Raghu described running into the same issue. It turns out that in order to create a page in the pages library, that user must have read rights to the Master Page Library for the collection.  To grant that, your admin needs to hit: <span style="font-style:italic;">Site Actions --> Manage Content and Structure --> Master Page Gallery --> Edit Properties --> Permissions for this document library</span>  ...Then just add read permissions as needed.  <br /><br />We wanted all the contributors in the collection to be able to create a page, so we granted the out of the box Members group read access.