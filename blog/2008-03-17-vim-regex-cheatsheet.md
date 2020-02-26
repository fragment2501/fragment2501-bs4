---
title: VIM Regex Cheatsheet
published: true
date: 2008-03-17
tags:
- Regex
- VIM
modified_time: '2011-10-26T16:22:52.563-07:00'
blogger_id: tag:blogger.com,1999:blog-19111454.post-747393060460138525
blogger_orig_url: http://www.bryansgeekspeak.com/2008/03/vim-regex-cheatsheet.html
---

A quick and dirty vim cheatsheet for common regex stuff

# VIM GLOBAL REPLACEMENT

Delete all lines that do not start with "www" (:v is a negative match):
```vim
:v/^www/d
```

Delete all blank lines, including lines with only whitespace (:g is a positive match):
```vim
:g/^\s*$/d
```

Remove the string " - 300k - Cached" from google search results, and matches any size in k:
```vim
:g/ - \d+k - Cached//g
```

Replace string "XXX" on every line with the current line number:
```vim
:%s/XXX/\=line(".")
```

For CSV file with 2 values separated by a comma per line.  Swap the values on each line.
```vim
%s/\([^,]\+,\)\(.\+\)/\2,\1/<br />%s/,$//
```

# VIM SORTING

Sort all lines alphabetically, line by line:
```vim
:sort
```

Sort all lines numerically, line by line:
```vim
:sort n
```

Sort lines 1,2 and 3 numerically, leaving the rest alone:
```vim
:1,3sort n
```

Sort all lines, remove duplicates:
```vim
:sort u
```

Sort all lines reverse numerically:
```vim
:sort! n
```

# REGEX VALIDATION

Validate string is an email address - This expects that there is only one email in the string, with no leading/trailing whitespace.  For more details on email regex, take a look at <a href="http://www.regular-expressions.info/email.html">http://www.regular-expressions.info/email.html</a>
```vim
/^[\w._%+-]+@[\w.-]+\.[\w]{2,4}$/
```
