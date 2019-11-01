---
title: SharePoint MOSS 2007 - Enabling both HTTP and HTTPS for your sharepoint site
date: '2008-04-11T12:46:00.001-07:00'
tags: 
modified_time: '2008-04-11T12:53:06.174-07:00'
blogger_id: tag:blogger.com,1999:blog-19111454.post-1151350822915308263
blogger_orig_url: http://www.bryansgeekspeak.com/2008/04/sharepoint-moss-2007-enabling-both-http.html
---

Just a quick note that if you create a new web application in sharepoint using the default non-ssl security, you can still enable SSL and also continue to use the old unsecured site as well.<br /><br />The problem you run into is when you try to create a page or a site.  I was getting sharepoint generic errors doing doing it over HTTPS but not via HTTP.  I ended up adding an Alternate Access Mapping for the HTTPS  url, which instantly fixed the problem. <br /><br />Alternate Access Mappings are in the Central Administrator under Operations->Global Configuration->Alternate Access Mappings. Add a new Internal URL, select your web application from the dropdown at the top of the form and specify the HTTPS url of your site in the alternate url box.  Click save and test out your site.