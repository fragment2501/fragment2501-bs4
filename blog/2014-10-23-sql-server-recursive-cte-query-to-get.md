---
title: SQL Server - Recursive CTE query to get manager hierarchy
date: 2014-10-23
published: true
tags: 
modified_time: '2014-10-23T16:10:25.812-07:00'
blogger_id: tag:blogger.com,1999:blog-19111454.post-7409735167052895997
blogger_orig_url: http://www.bryansgeekspeak.com/2014/10/sql-server-recursive-cte-query-to-get.html
---

I've used the CONNECT BY syntax to do hierarchy queries in oracle, but recursive queries seem to be the new standard (not so new I guess, but new for me!).  Now that I'm using SQL server it seems to be the only way to go.  So here's my reference for walking a single table parent/child hierarchy:  

```sql{codeTitle: "temp.sql"}
---------------
--- SQL Server 2008 or higher.
--- Testing CTE recursive queries to get at tree hierarchy data
---------------

---------------
--- Create table and insert default data
---------------
/*
CREATE TABLE [dbo].[Employee]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [ManagerID] INT NULL, 
    [Name] NVARCHAR(50) NULL
)
GO
INSERT INTO Employee (Id,ManagerID,Name)VALUES(1,null,'Ted the Owner');
INSERT INTO Employee (Id,ManagerID,Name)VALUES(2,1,'Kylee the IT Manager');
INSERT INTO Employee (Id,ManagerID,Name)VALUES(3,1,'Sam the HR Manager');
INSERT INTO Employee (Id,ManagerID,Name)VALUES(4,2,'Kevin Bacon the Programmer');
INSERT INTO Employee (Id,ManagerID,Name)VALUES(5,2,'Glen the Database Guy');
INSERT INTO Employee (Id,ManagerID,Name)VALUES(6,2,'Tod the Node.js guru');
INSERT INTO Employee (Id,ManagerID,Name)VALUES(7,6,'Jin the New Guy');
GO
*/

-------------------
--- SHOW ALL EMPLOYEES
-------------------
--- SELECT * FROM Employee;

-------------------
--- FIND KEVIN BACON'S IMMEDIATE MANAGERS
-------------------
---- SELECT * FROM Employee WHERE Id = (SELECT ManagerID FROM Employee WHERE ID = 4);

-------------------
--- FIND ALL KEVIN BACON'S MANAGERS
-------------------
WITH Managers
	AS (	SELECT *
			FROM Employee 
			WHERE Id = 4
			UNION ALL
			(	SELECT	e.*
				FROM Employee e
					INNER JOIN Managers m ON e.Id = m.ManagerID
			)
	)
SELECT *
FROM Managers 
;

-------------------
--- FIND ALL KYLEE'S SUBORDINATES
-------------------
WITH Subordinate
	AS (	SELECT *
			FROM Employee
			WHERE ManagerID = 2
			UNION ALL
			(	SELECT	e.*
				FROM Employee e
					INNER JOIN Subordinate s ON e.ManagerID = s.ID
			)
	)
SELECT *
FROM Subordinate 
;


```
