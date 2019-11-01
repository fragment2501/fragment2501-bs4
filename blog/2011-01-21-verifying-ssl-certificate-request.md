---
title: Verifying SSL Certificate Request Details
date: '2011-01-21T09:52:00.000-08:00'
tags:
- SSL
modified_time: '2011-07-26T13:34:32.248-07:00'
blogger_id: tag:blogger.com,1999:blog-19111454.post-8770493890739323384
blogger_orig_url: http://www.bryansgeekspeak.com/2011/01/verifying-ssl-certificate-request.html
---

<b>Certificate Details</b><br /><br />Now that I manage a lot of SSL certificates and generate requests/renewals, I've gotten used to using <a href="http://www.openssl.org/">OpenSSL</a> for double checking all my cert request info.  Right now, I use <a href="http://www.cygwin.com/">Cygwin</a> (a linux emulator for windows) to run OpenSSL on my windows box. From there I can open a Cygwin prompt and run OpenSSL commands directly on a cert request<br /><br /><div class="code">$openssl req -in mycertrequest.txt -noout -text<br /></div><br /><b>SSL-TLS Testing</b><br /><a href="https://www.owasp.org/index.php/Testing_for_SSL-TLS_%28OWASP-CM-001%29">OWASP Testing Guide - "Testing for SSL-TLS"</a>