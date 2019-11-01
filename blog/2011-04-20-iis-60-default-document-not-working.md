---
title: IIS 6.0 Default Document Not Working After .NET Framework 4.0 Install/Update
date: '2011-04-20T10:51:00.000-07:00'
tags:
- ".NET"
modified_time: '2011-04-20T10:51:19.907-07:00'
blogger_id: tag:blogger.com,1999:blog-19111454.post-2593735672608698465
blogger_orig_url: http://www.bryansgeekspeak.com/2011/04/iis-60-default-document-not-working.html
---

We have seen this problem happen on a windows 2003R2 server running IIS 6.0 with SiteMinder enabled (an ISAPI filter on a web site). In our last round of server patching, after the server was rebooted, the default documents for all our sites no longer worked. All requests that would return the default document (http://mysite/test/) would instead return a 404 error.  In addition to the 404 we noticed the url showing in the location bar of the browser would contain "/eurl.axd/GUID" somewhere in the string.  We could still go directly to a page in the browser (http://mysite/test/default.aspx) and the page would load properly.<br /><br />Google found us an article that identifies the problem in detail and explains how to apply a fix for it:<br /><a href="http://blogs.msdn.com/b/tmarq/archive/2010/06/18/how-to-disable-the-asp-net-v4-0-extensionless-url-feature-on-iis-6-0.aspx">http://blogs.msdn.com/b/tmarq/archive/2010/06/18/how-to-disable-the-asp-net-v4-0-extensionless-url-feature-on-iis-6-0.aspx</a><br /><br />Just add a DWORD registry key "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\ASP.NET\4.0.30319.0\EnableExtensionlessUrls" with a value of "0" then restart IIS to fix the issue.