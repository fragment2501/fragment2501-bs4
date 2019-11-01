---
title: TFS 2010 - Undo Someone Else's Checkout
date: '2012-08-02T10:24:00.000-07:00'
tags:
- TFS 2010
modified_time: '2016-06-23T08:02:07.382-07:00'
blogger_id: tag:blogger.com,1999:blog-19111454.post-5243004641819691099
blogger_orig_url: http://www.bryansgeekspeak.com/2012/08/tfs-2010-undo-someone-elses-checkout.html
---

<p><b>UPDATE 6/23/2016</b> - even better, if a user has left the company and has a bunch of stuff checked out, you can delete their whole TFS workspace! :-O</p><div class="code">tf workspace /delete /workspace:BRYANPC;bryanusername /collection:BRYANSTFSSERVER\BryansCollection </div> <p>I always forget the syntax for undoing someone else's checkout, so here's my big fat reminder:</p> <div class="code">tf undo "$/TheSandbox/WebServiceDiceRoller/WebServiceDiceRoller.csproj" /workspace:BRYANPC;bryanusername /collection:BRYANSTFSSERVER\BryansCollection </div><p>To find the workspace, use the SourceControlExplorer to find the checked out file, right click and view properties. The "status" tab shows the workspace that the file is checked out to.</p> <p>To get the collection info, open the VS2010 project with the file you want to fix. Go to the "Team Explorer" pane and it should show the collection name at the top of the TFS project tree in the format &lt;TFSServer&gt;\&lt;TFSProjectCollection&gt;</p>