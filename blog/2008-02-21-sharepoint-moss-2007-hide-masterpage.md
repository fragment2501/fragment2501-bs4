---
title: 'SharePoint MOSS 2007: Hide MasterPage content based on SharePoint Security'
date: '2008-02-21T10:58:00.000-08:00'
tags:
- MOSS
- SharePoint
modified_time: '2008-09-18T14:08:01.563-07:00'
blogger_id: tag:blogger.com,1999:blog-19111454.post-9182425521224431035
blogger_orig_url: http://www.bryansgeekspeak.com/2008/02/sharepoint-moss-2007-hide-masterpage.html
---

<p>I found a nice blog post about hiding the top publishing toolbar from anonymous users: </p><br /><p><a href="http://www.sharepointplatform.com/teamblog/Lists/Posts/Post.aspx?ID=31">http://www.sharepointplatform.com/teamblog/Lists/Posts/Post.aspx?ID=31</a> </p><br /><p>The code is simple, wrap all your .NET and HTML in the following tag, to hide it from everything but the </p><br /><div class="code"><br /><p><span style=";font-family:Lucida Sans Typewriter;font-size:9;"  >&lt;Sharepoint:SPSecurityTrimmedControl runat="server" PermissionsString="BrowseDirectories"&gt; </span></p><br /><p><span style=";font-family:Lucida Sans Typewriter;font-size:9;"  >    &lt;!-- HTML/.Net tags here to hide if not logged in --&gt; </span></p><br /><p><span style=";font-family:Lucida Sans Typewriter;font-size:9;"  >&lt;/Sharepoint:SPSecurityTrimmedControl&gt; </span></p><br /></div><br /><p>With that, I was able to hide the entire top "control" bar, including the login link. Users who need to authenticate will need another link somewhere on the site, or they will need to bookmark a url like this: </p><br /><p><span style=";font-family:Lucida Sans Typewriter;font-size:9;"  >http://&lt;mystie&gt;:&lt;myport&gt;/_layouts/AccessDenied.aspx?loginasanotheruser=true</span></p>