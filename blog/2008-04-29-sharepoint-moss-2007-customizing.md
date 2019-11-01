---
title: SharePoint MOSS 2007 - Customizing The Content Query Web Part (CQWP)
date: 2008-04-29
published: true
tags: ['MOSS']
modified_time: '2008-09-18T13:47:14.094-07:00'
blogger_id: tag:blogger.com,1999:blog-19111454.post-6749763511904792184
blogger_orig_url: http://www.bryansgeekspeak.com/2008/04/sharepoint-moss-2007-customizing.html
---

If you've used MOSS 2007 to build a basic site or two, you've probably started adding custom columns and content types to document libraries within your site.  Using the Content Query Web Part, you can fetch lists of results across your site filtering by your custom content types and custom columns.  But then, the displayed results are limited to the presentation styles that come with the CQWP out of the box, which do not include custom columns in the display.

MOSS does support customizations to the CQWP though XML and XSL markup. I used the following steps to successfully modify the CQWP and even added it as an option in the Web Part Gallery without the need to do any compiling or modification to the 12 hive directory.

1. Add the CQWP to a page and export the CQWP as a .webpart xml file
1. Modify the exported .webpart configuration to enable support for your custom columns
1. Import customized .webpart file to create a new CQWP instance on a page
1. Add custom style to /Style Library/XSL Style Sheets/ItemStyles.xsl in SharePoint Designer to render the custom columns
1. Test and repeat as needed to get the output you need

**References**

[How to: Customize the Content Query Web Part by using Custom Properties](http://msdn2.microsoft.com/en-us/library/aa981241.aspx)

[Customizing the Content Query Web Part XSL](http://www.microsoft.com/belux/msdn/nl/community/columns/stevenvandecraen/contentquerywebpart.mspx) - Examples of XSL date format functions here

[SharePoint Data View Web Part Extension Functions in the ddwrt Namespace](http://msdn2.microsoft.com/en-us/library/aa505323.aspx)

[CAML Madness!](2008-06-19-sharepoint-moss-2007-caml-madness.md) - my list of CAML quirk
