---
title: 'SharePoint MOSS 2007: CAML Madness!'
date: 2008-06-19
published: true
tags: ['CAML', 'MOSS', 'SharePoint']
modified_time: '2008-09-03T11:33:02.334-07:00'
blogger_id: tag:blogger.com,1999:blog-19111454.post-8647542463778684368
blogger_orig_url: http://www.bryansgeekspeak.com/2008/06/sharepoint-moss-2007-caml-madness.html
---

Now that I'm deep into modifying the CQWP, I'm starting to use some custom CAML in the CQWP QueryOverride section...and finding all sorts of strange quirks.  Here's what I've found so far...

**CAML `<And>` and `<Or>` statements only work on 2 elements at a time**

They say in the [CAML Query Documentation](//msdn.microsoft.com/en-us/library/ms467521.aspx) tha *"This element can be nested inside other Or and And elements. The server supports unlimited complicated queries."* which sounds great. What they fail to mention is that you can only nest pairs of values in an Or or And statement.  For example, the following will not work:


```xml
<Or>
  <Eq>
    <FieldRef Name="Status" Nullable="True" Type="Text"/>
    <Value Type="Text">Status 1</Value>
  </Eq>
  <Eq>
    <FieldRef Name="Status" Nullable="True" Type="Text"/>
    <Value Type="Text">Status 2</Value>
  </Eq>
  <Eq>
    <FieldRef Name="Status" Nullable="True" Type="Text"/>
    <Value Type="Text">Status 3</Value>
  </Eq>
</Or>
```

but this next set of code will work just fine

```xml
<Or>
  <Or>
    <Eq>
      <FieldRef Name="Status" Nullable="True" Type="Text"/>
      <Value Type="Text">Status 1</Value>
    </Eq>
    <Eq>
      <FieldRef Name="Status" Nullable="True" Type="Text"/>
      <Value Type="Text">Status 2</Value>
    </Eq>
  </Or>
  <Eq>
    <FieldRef Name="Status" Nullable="True" Type="Text"/>
    <Value Type="Text">Status 3</Value>
  </Eq>
</Or>
```

now, imagine trying to debug that for the first time using nothing but SharePoint and a .webpart file! All you get back from SharePoint is the message "There is an error in yoru query...." what a pain! :(

**QueryOverride property value must not have any unnecessary white space between tags.**

Unfortunately, the .webpart config file starts to look like a horrible mess with large QueryOverride values.  Adding extra white space between CAML tags in the QueryOverride value throws an error in SharePoint, so you'll need to put your entire CAML statement on one line.  Using the Or CAML query above, your QueryOverride property should look like this in your .webpart file:

```xml
<property name="QueryOverride" type="string"><![CDATA[<Where><Or><Or><Eq><FieldRef Name="Status" Nullable="True" Type="Text"/><Value Type="Text">Status 1</Value></Eq><Eq><FieldRef Name="Status" Nullable="True" Type="Text"/><Value Type="Text">Status 2</Value></Eq></Or><Eq><FieldRef Name="Status" Nullable="True" Type="Text"/><Value Type="Text">Status 3</Value></Eq></Or></Where>]]></property>
```

So when I need to edit a CAML query, I always copy it out to a new file and format it into something readable first (in VS just create a new XML file and paste, VS does the rest).  Once I'm done editing the file, I format it again to fit all on all one line, no spaces between tags (I use [Vim](//www.vim.org) regex for that) and paste that into the .webpart file.  What a pain!
