---
title: SQL Server 2008 - Dumping VARBINARY data to a file
date: '2011-12-01T15:11:00.001-08:00'
tags:
- SQL Server
modified_time: '2011-12-01T15:18:53.010-08:00'
blogger_id: tag:blogger.com,1999:blog-19111454.post-5334780434847236105
blogger_orig_url: http://www.bryansgeekspeak.com/2011/12/sql-server-2008-dumping-varbinary-data.html
---

<p>I couldn't find a way to convert varbinary column data to a file using SQL Server 2008 Management Studio, so I did some googling and found info on using the bcp.exe command to do it (I believe this comes with the Management Studio install). In my case, I was extracting a PDF file stored as varbinary:</p> <div class="code">c:\temp>bcp "select MYVARBINARYCOL from MYTABLE where id = 1234" queryout "c:\filename.pdf" -S MYSQLSERVER\MYINSTANCE -T<br/><br/>Enter the file storage type of field filedata [varbinary(max)]:<br/>Enter prefix-length of field filedata [8]: 0<br/>Enter length of field filedata [0]:<br/>Enter field terminator [none]:<br/><br/>Do you want to save this format information in a file? [Y/n] n<br/><br/>Starting copy...<br/><br/>1 rows copied.<br/>Network packet size (bytes): 4096<br/>Clock Time (ms.) Total     : 15     Average : (66.67 rows per sec.)<br/></div> <p>I used the -T option to use windows authentication to connect to the DB. If you use password auth, you'll need to use the -U and -P switches to specify a username and password.</p>