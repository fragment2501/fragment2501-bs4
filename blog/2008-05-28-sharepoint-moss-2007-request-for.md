---
title: SharePoint MOSS 2007 - Request for the permission of type 'System.Data.SqlClient.SqlClientPermission,
  System.Data...' failed
date: '2008-05-28T11:39:00.000-07:00'
tags:
- MOSS
- SharePoint
modified_time: '2008-09-03T11:35:33.083-07:00'
blogger_id: tag:blogger.com,1999:blog-19111454.post-7013448927461390591
blogger_orig_url: http://www.bryansgeekspeak.com/2008/05/sharepoint-moss-2007-request-for.html
---

Working on my first webpart using code from one of our ASP.NET monkeys, I ran into this error when I tried to do a simple query:<br /><br /><div class="code"><br />Request for the permission of type 'System.Data.SqlClient.SqlClientPermission, System.Data, Version=2.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089' failed<br /></div><br /><br />I found my answer in a form post which I'll reprint here (http://www.eggheadcafe.com/software/aspnet/30460745/request-for-the-permissio.aspx)<br /><br />---<br /><br />Anything that access database from SharePoint requires at least the WSS_Medium security policy in the web.config file. <br /><br />Fix:<br />Open wss_mediumtrust.config & wss_minimaltrust.config usually (C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\12\config\) look in your web.config file for the exact path.<br /><br />Copy from mediumtrust.config: <br /><div class="code"><br />&lt;SecurityClass Name="SqlClientPermission" Description="System.Data.SqlClient.SqlClientPermission, System.Data, Version=2.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089"/&gt;<br /></div><br />to the &lt;SecurityClasses&gt; node of wss_minimaltrust.config.<br /><br />In the PermissionSet section of the wss_mediumtrust.config file, copy the following:<br /><div class="code"><br />&lt;IPermission class="SqlClientPermission" version="1" Unrestricted="true"/&gt;<br /></div><br />into the a &lt;lPermissionSet&gt; node of wss_minimaltrust.config.<br /><br />restart iis.