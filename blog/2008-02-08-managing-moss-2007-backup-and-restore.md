---
title: Managing MOSS 2007 - Backup and Restore
date: 2008-02-08
published: true
tags: ['SharePoint']
modified_time: '2008-06-09T17:12:25.788-07:00'
blogger_id: tag:blogger.com,1999:blog-19111454.post-5345901615363745180
blogger_orig_url: http://www.bryansgeekspeak.com/2008/02/managing-moss-2007-backup-and-restore.html
---

If youre just getting your feet wet with managing MOSS 2007, you'll find a lot of confusing information about the tools and features that ship with MOSS.  Doing a backup and restore seems as though it should be a simple matter of breaking out the SharePoint Designer 2007 tool and doing a site backup and restore from there. Wrong.  It turns out that SharePoint Designer 2007 is just a renamed and updated version of the Front Page product.  Much of the features for managing websites in Front Page work exactly the same in SharePoint Designer.  A website "backup" simply copies files, not the MOSS database content, web parts and other features you need to actually restore a SharePoint site.  To do a proper Site or Site Collection Backup/Restore, you need to use the command line tool that ships with MOSS 2007 on the server where MOSS is installed.  Perform these actions as the Administrative account on the box.


To do a site backup, run the following command from a dos prompt on the server:

```batch
c:>"%COMMONPROGRAMFILES%\microsoft shared\web server extensions\12\bin\stsadm" -o backup -url http://mysite.com:1234 -filename mysite.com.backup
```

to do a site restore from that backup:

```batch
c:>"%COMMONPROGRAMFILES%\microsoft shared\web server extensions\12\bin\stsadm" -o restore -url http://mynewsite.com:1234 -filename mysite.com.backup
```

where `mynewsite.com:1234` is an existing MOSS site you've crated in the central admin.  You will most likely need to add the switch `-overwrite` to the restore command, unless the new site is completely empty of content.

**UPDATE**

I took a sharepoint designer class last week and learned about a few more deployment options.  Designer does have a few backup and restore tools for WSS/MOSS data: You can create a .fwp Personal Web Package for publishing a small collection of files (File->Export->Personal web package) or do a site backup (Site->Administration->Backup Website) which creates a Content Migration Package with a .cmp extension.

The .cmp is a bit tricky, because it will only restore into the same site tree you backed it up from.  Meaning if you wanted to backup the site `mybackupsite` from the path `/myroot/mysite/mybackupsite` you wont be able to restore that site to the path `/myroot/someoneelsessite/mybackupsite`.  The restore utility starts the restore, drops a bunch of files, then errors out with some generic error -.-

**YET ANOTHER UPDATE**

I was trying to use backup/restore to copy a site out from a staging farm to a production farm.  I've had limited success with that.  Sometimes it works without issue.  Sometimes the new site created from the backup generates a sharepoint error on any public page you try to hit. When I run into that error, I dont seem to be able to fix the problem, even when I delete and re-create the web application completely.  I'm now looking into using stsadm -o export to deploy files, I'll create a new post for those results and link to that from here when I'm finished.
