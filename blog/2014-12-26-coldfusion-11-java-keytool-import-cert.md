---
title: Coldfusion 11 Java Keytool Import Cert Command
date: 2014-12-26
published: true
tags: ['Java','ColdFusion']
modified_time: '2015-03-16T07:41:54.475-07:00'
blogger_id: tag:blogger.com,1999:blog-19111454.post-2596766634893753783
blogger_orig_url: http://www.bryansgeekspeak.com/2014/12/coldfusion-11-java-keytool-import-cert.html
---

Doing an upgrade of coldfusion from CFMX 6.1 to CF11 on windows and completely forgot how to import/trust external SSL certs (for consuming web services).


1. hit the web service WSDL url, confirm it works over HTTPS, and download the base64 version of the cert from your browser
1. copy the cert to the coldfusion server (the default path for java cacert keyfile is here: C:\ColdFusion11\jre\lib\security)
1. open a command prompt (run as administrator) and execute the command  
```
cd C:\ColdFusion11\jre\lib\security
..\..\bin\keytool -import -keystore cacerts -alias <cert_alias> -file <cert_filename>
```

1. Restart coldfusion

Note that when you try to add an HTTPS web service with an untrusted SSL cert from the CF Admin you get a generic "Cant read WSDL" error. Not super helpful, but every time I get that message it ends up being either this SSL cert trust issue or that my web service requires windows authentication (CF 11 does not support kerberos or windows auth for consuming web services).</p>
