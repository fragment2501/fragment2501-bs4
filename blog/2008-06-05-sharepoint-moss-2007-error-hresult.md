---
title: 'SharePoint MOSS 2007 - Error: HRESULT: 0x80040E14'
date: '2008-06-05T09:29:00.000-07:00'
tags:
- MOSS
- SharePoint
modified_time: '2008-06-11T16:54:04.729-07:00'
blogger_id: tag:blogger.com,1999:blog-19111454.post-7062662466435125194
blogger_orig_url: http://www.bryansgeekspeak.com/2008/06/sharepoint-moss-2007-error-hresult.html
---

If you happen to run into the "HRESULT: 0x80040E14" error message in sharepoint, be sure to check your SQL server disk space and log file size.  Sharepoint complains with this error when SQL server is out of disk space for whatever reason, but it also throws the same error if youre having problems with the way you applied sharepoint SP 1 (http://support.microsoft.com/kb/841216).<br /><br />Check the SQL server disk space first, thats the easier solution.  If that doesnt do it for you, try the KB article.