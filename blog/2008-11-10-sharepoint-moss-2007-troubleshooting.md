---
title: SharePoint MOSS 2007 - Troubleshooting Restoring a Central Administration Backup
date: '2008-11-10T11:16:00.000-08:00'
tags:
- MOSS
- SharePoint
modified_time: '2008-11-10T11:29:54.948-08:00'
blogger_id: tag:blogger.com,1999:blog-19111454.post-5315499026005072183
blogger_orig_url: http://www.bryansgeekspeak.com/2008/11/sharepoint-moss-2007-troubleshooting.html
---

I was running through the process of moving my MOSS farm databases, managed to get the farm running and now have access to the Central Administrator again, yay!. I moved on to the process of trying to restore my SSP's as outlined in the MS tech article <a href="http://technet.microsoft.com/en-us/library/cc512725.aspx">http://technet.microsoft.com/en-us/library/cc512725.aspx</a>, and thats where I rand into problems.  I kept hitting an error like this when the restore tried to run:<br /><div class="code"><br />SqlException: Cannot open backup device '\\server\backup\spbr0001\00000016.bak'. Operating system error 5(Access is denied.).<br /></div><br />I have Sharepoint installed as a farm, not as a standalone install.  I've also setup custom user accounts for all the sharepoint services, and I made sure that my "MOSS setup user" account and the "MOSS sql server access" account I had setup on my farm both have full permission to the central admin backup directory.  Then after a bit of google searching I found a post saying that the SQL server service account (the one on your SQL server, running as the SQL server service) needs to have access to that directory as well.  Apparently, the restore command tells SQL server to kick off its own restore command and points SQL server to that backup file share...crazy, you'd think they'd mention that somewhere.  Anyway, I double-checked and sure enough my SQL server service account did not have access to the Central Administrator backup file share.  Once I fixed those permissions and deleted the failed backup job, the SSP restore ran smoothly.