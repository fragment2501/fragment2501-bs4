---
title: SharePoint MOSS 2007 - No built in Flash WebPart :(
date: '2008-02-13T09:43:00.000-08:00'
tags:
- MOSS
- SharePoint
modified_time: '2008-02-13T13:40:11.298-08:00'
blogger_id: tag:blogger.com,1999:blog-19111454.post-1399655074204402325
blogger_orig_url: http://www.bryansgeekspeak.com/2008/02/sharepoint-moss-2007-no-built-in-flash.html
---

Yep, moss has no native way of managing and displaying flash content out of the box.  I guess they expect you to treat it like an image resource and render it with your own html?  A flash web part would be nice...something like this <a href="http://www.codeplex.com/SPWCMFieldControls">SharePoint 2007 WCM Field Control</a> out of the box would be nice >_><br /><br />*some time later, after trying to add an object tag directly to some Web Editor content...*<br /><br />well, add the HTML didnt work either.  It seems the MOSS Web Editor removes any code it considers to be invalid, including the object tag I'm trying to use to embed flash in a page.  I'll post again when I find a solution.