---
title: Automated Browser Testing using Selenium
date: 2014-03-13
published: true
tags: 
modified_time: '2014-04-08T09:42:28.756-07:00'
blogger_id: tag:blogger.com,1999:blog-19111454.post-7354625739642673889
blogger_orig_url: http://www.bryansgeekspeak.com/2014/03/automated-browser-testing-using-selenium.html
---

I just started using <a href="http://docs.seleniumhq.org/">Selenium</a> for automated browser testing. It's turning out to be really nice as a kind of SharePoint site warm up script too.  This is what I've got running on my box right now for automated tests on a schedule:

##Setting up a Selenium test script to run on a schedule on Windows 7

1. Create a directory on your local system c:\selenium
1. Install the seleniumn IDE FireFox plugin for recording/saving tests.
1. Record a browser test with a starting point of https://www.google.com.
1. save the test as c:\selenium\MyGoogleTest.html.
1. Save the test suite as c:\selenium\MyGoogleTestSuite.html.
1. Download selenium-server-standalone-2.40.0.jar so you can run test scripts from the command line
1. copy the selenium-server-standalone-2.40.0.jar to c:\selenium\selenium-server-standalone-2.40.0.jar
1. create a bat file to run your test script command c:\selenium\RunMyGoogleTest.bat
1. Edit the bat file and paste in this command: 
```
java -jar selenium-server-standalone-2.40.0.jar -htmlSuite "*firefox" "https://www.google.com/" "c:\selenium\MyGoogleTestSuite.html" "c:\Selenium\results.html" 
```
1. Open a command prompt, change the current directory to c:\selenium and run RunMyGoogleTest.bat. Firefox should launch and show your tests being performed. 
1. Create a new windows scheduled task. In the action tab, add a new action. 
    1. Action: Start a program
    1. Program/Script: C:\Selenium\RunMyGoogleTest.bat
    1. Start in (optional): c:\Selenium
    1. You can setup the task to run as any user that's ever logged onto your computer. So if you dont want to see windows opening every time the task runs, change the user the task runs as something other than your user account.
1. Run the scheduled task by hand to confirm it works.  Again, it should launch firefox and run your tests.

## Tests fail because they run too fast. How do I force a slow test run?
You can force selenium to run the test slower by hacking up the test suite html. After the open command you can add setSpeed command that will force every clickAndWait method to pause before running the next command, giving the browser time to load page content. For more info - http://www.jnhasty.com/2013/02/15/using-the-setspeed-setting-in-selenium-standalone-htmlsuite-mode/
