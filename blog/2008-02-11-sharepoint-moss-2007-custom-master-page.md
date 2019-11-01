---
title: SharePoint MOSS 2007 - Custom Master Page causes 401 UNAUTHORIZED for anonymous
  users
date: '2008-02-11T16:59:00.000-08:00'
tags:
- MOSS
- SharePoint
modified_time: '2008-02-13T13:40:47.201-08:00'
blogger_id: tag:blogger.com,1999:blog-19111454.post-7125608275023542889
blogger_orig_url: http://www.bryansgeekspeak.com/2008/02/sharepoint-moss-2007-custom-master-page.html
---

If you customize the Master Page in MOSS 2007, you'll run into a problem where anonymous users will see the error 401 UNAUTHORIZED in their browsers when they try to hit the site.  To fix this in MOSS, you need to use the Site Collection Administrator to check in and approve changes made to the Custom Master Page.<br /><br />To do that, go to the root of your site and login as your site collection administrator.  From the Site Admin menu, select "Site Content and Structure".  Browse to the Master Page Gallery, Select the Master Page you were working on and select "Approve". Go though the approval steps, then try hitting the site again as an anonymous user.  That should fix the problem.<br /><br />I hear that this work around isnt available for the base Sharepoint 3.0 Server product (without the MOSS component), so you'll have to do more searching on google for another work around there >_>