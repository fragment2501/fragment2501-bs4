---
title: Exporting Data from SQL Server Managment Studio as INSERT statements
date: 2014-05-23
published: true
tags: ['SQL Server']
modified_time: '2014-05-23T15:07:58.555-07:00'
thumbnail: http://3.bp.blogspot.com/-CY5hRlOyjz0/U3_GFdZwskI/AAAAAAAAAI0/xTkdj6i4BH0/s72-c/ExportDataAsSQLInsertStatements.PNG
blogger_id: tag:blogger.com,1999:blog-19111454.post-9016577442720218605
blogger_orig_url: http://www.bryansgeekspeak.com/2014/05/exporting-data-from-sql-server.html
---

Another quirk of Microsoft SQL Server Management Studio 2008 - they made the option to export table data as SQL insert statements almost impossible to find.  Here's how you do it:  

![Export As Inserts!](./images/ExportDataAsSQLInsertStatements.png)

1. Right click on the database and go to Tasks -> Generate Scripts
1. Select the tables that you want to generate the script for
1. Go to Set scripting options and click the Advanced button
1. In the General category, go to type of data to script
1. There are 3 options: Schema Only, Data Only, and Schema and Data. Select the appropriate option and click on OK

Found that gem <a href="http://stackoverflow.com/questions/982568/what-is-the-best-way-to-auto-generate-insert-statements-for-a-sql-server-table">here</a>.
