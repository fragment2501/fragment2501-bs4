---
title: SharePoint custom C# code - impersonate the app pool account
date: 2016-08-19
published: true
tags: 
modified_time: '2016-08-19T08:33:06.590-07:00'
blogger_id: tag:blogger.com,1999:blog-19111454.post-8298266831860428796
blogger_orig_url: http://www.bryansgeekspeak.com/2016/08/sharepoint-custom-c-code-impersonate.html
---

note to self - in SharePoint when you need to impersonate the application pool account, you can use `WindowsIdentity.Impersonate(IntPtr.Zero)`
