---
title: 'SharePoint MOSS 2007: More Content Deployment Quirks'
date: '2008-06-24T14:41:00.000-07:00'
tags:
- MOSS
modified_time: '2008-09-03T11:33:38.752-07:00'
blogger_id: tag:blogger.com,1999:blog-19111454.post-5869237732999559547
blogger_orig_url: http://www.bryansgeekspeak.com/2008/06/sharepoint-moss-2007-more-content.html
---

If you end up setting up specific non-domain admin accounts for your sharepoint install, things work great so long as you follow the basic account permission guidelines found in various writeups (I used the book Office Sharepoint Server 2007 Administrators companion from Microsoft Press, page 124 gives you the rundown of accounts and permissions).  Just keep in mind some quirks do crop up in a multiple account setup.  Here's the one that got me:<br /><br /><span style="font-weight:bold;">For content deployment job creation to work, the SharePoint Setup user must also be an administrator of the Site Collection being deployed</span><br /><br />If you set other accounts to be the site collection administrator accounts (Which makes perfect sense to do) you'll run into all kinds of strange errors when you create a new deployment job for the collection. you'll know you've hit this issue if you try to delete the job and get an "Access Denied" error. Just add your setup user to the collection administrators group and you'll be good to go, no iisreset necessary.