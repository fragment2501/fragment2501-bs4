---
title: Node.js web app experiments
date: 2015-04-10
published: true
tags: ['NodeJS']
modified_time: '2015-04-10T18:52:47.644-07:00'
blogger_id: tag:blogger.com,1999:blog-19111454.post-1252571503374807015
blogger_orig_url: http://www.bryansgeekspeak.com/2015/04/needed-break-from-all.html
---

Needed a break from all the .NET and Coldfusion goo I've been dealing with at work. Started working on a mobile-first workout tracking app using only free tools/services. The app itself is turning out like this:  <ul><li><a href="https://www.angularjs.org/">AngularJS</a> for the client UI/UX. To be deployed to <a href="http://azure.microsoft.com/en-us/pricing/details/app-service/">Azure webapp hosting</a> or maybe at some point turned into a phone app using something like <a href="http://cordova.apache.org/">Cordova</a></li><li><a href="http://expressjs.com/">ExpressJS</a> for the Data Access Layer. The whole thing is just a collection of JSON web services so its super easy to consume from javascript. This just gets deployed to Azure as another stand alone website that the client app makes calls to.</li><li><a href="http://pouchdb.com/">PouchDB</a> for the backend database.  And also for the sweet client API which I'm using in the DAL project. Since PouchDB is 100% compatible with CouchDB I can just point the client to something like <a href="http://www.couchbase.com/">Couchbase</a> when I'm ready to go "live" and get free DB hosting</li></ul> So much great stuff in every layer, I love the whole AngularJS MVC framework for client apps. Loved learning how to use <a href="http://pouchdb.com/guides/async-code.html">Promises</a> with the PouchDB client, the tutorials on their site are fantastic.  Still getting used to CouchDB though, it needs a better query language...map/reduce is killing me xD
