---
title: SharePoint MOSS 2007 - Moving a content database
date: '2008-03-11T12:22:00.000-07:00'
tags:
- MOSS
- SharePoint
modified_time: '2008-03-26T11:36:43.427-07:00'
blogger_id: tag:blogger.com,1999:blog-19111454.post-249760992929871646
blogger_orig_url: http://www.bryansgeekspeak.com/2008/03/sharepoint-moss-2007-moving-content.html
---

I was struggling to move a content database from a default single server install to a SQL 2005 enterprise database server.  A quick backup and restore got the database physically moved, but adding the new content database settings in the Central Admin had me stumped.  Using the Central Administrator to create (though, its more a SQL server "Attach") the new content database with Windows Authentication caused an "Unknown error" in SharePoint.  A quick look at the event viewer showed that the central admin was trying to connect to the SQL server via some default windows account of "MYSERVER\Sqlserver", which isnt a valid account on my SQL Server.  Unfortunately I couldn't find a way to change the account being used by the central admin.<br /><br />To work around this, I logged into my SharePoint server console via RDP as the user account with SQL Server admin rights, then used Stsadm to create the content database.<br /><br />Instructions for moving the content database, using either the central admin or stsadm, can be found here: http://technet.microsoft.com/en-us/library/cc262018.aspx