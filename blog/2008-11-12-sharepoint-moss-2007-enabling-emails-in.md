---
title: SharePoint MOSS 2007 - Enabling Emails in an Approval Workflow
date: '2008-11-12T16:26:00.000-08:00'
tags:
- MOSS
modified_time: '2008-11-12T16:43:09.750-08:00'
blogger_id: tag:blogger.com,1999:blog-19111454.post-7454736297052972627
blogger_orig_url: http://www.bryansgeekspeak.com/2008/11/sharepoint-moss-2007-enabling-emails-in.html
---

We were troubleshooting some issues with MOSS workflows today and found that email notifications were not being sent when an approval workflow was started for an item in the pages library. We checked to confirm the workflow assigned to the pages library was set to send email notificaitions (Workflow Tasks List Properties -> Advanced Settings -> Send e-mail when ownership is assigned?) and we tested the individual email accounts to confirm they work. We could even get sharepoint to email those accounts by adding the user to a new sharepoint group and having sharepoint fire off the welcome email message. <br /><br />It turns out that sharepoint requires User Profiles for all your users in order for them to receive email notifications from a workflow. I didn't even need to do an import from AD, I added one test user with a valid email address and then next time I ran a page through my approval workflow, emails showed up in the correct mailbox. You can manage User Profiles in the SSP for your web application (Central Administrator -> Shared Services Administration -> [your ssp] -> User Profiles and Properties). Why is this required? I can only guess ... I imagine it is because of the disconnect between sharepoint and the .NET Workflow Foundation *shrugs*