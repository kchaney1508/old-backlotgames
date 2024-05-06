---
slug: v1.1.4
title: v1.1.4
date: May 10, 2024
authors:
  name: KC1508
  title: (kchaney1508)
  image_url: https://avatars.githubusercontent.com/u/107610683
---

<head>
  <title>Backlot - v1.1.4</title>
</head>


This is a **major** update focused on Discord content moderation and our new website.

### FXBacklot - FiveM Server
```
c868597: Do Something / UI change
4bb8e85: README.md
fea0f69: dlc_vehicles -> dlc_veh_lssd
d92ce94: posted on hold +dlc_veh_civ
18c5583: added dlc_veh_ems
e54655b: dlc_veh_lssd revoke <rewards>
972f90e: bump dlc fxmanifest
d52be35: hotfix: "/" error
70c11df: dlc_peds: + detective holsters
946fd25: dlc_peds: + jeans
2c17b0f: fix: surgeon location & blip
ef012a4: added scoreboard w/ count: sheriff/ems/all
06c6a15: ignore internal test server
c08e71d: dlc_pmap edits // pause menu game version && ID
8572d63: added admin sided cuff/uncuff command
48f094a: bump SB Discord link
21ae38b: (got lost in the sauce) bump Discord for FW embed
53660f1: remove local dev bat
d7f6d01: banished .bat files (gitignore)
cac181c: bump loading screen to new font/theme
49f8573: feat: social activitypubFeed
```

### Backlot.City - Website
```
466197f: Create CNAME
02754cf: feat: codebase
b3849d3: Merge branch 'prod'
f6aa9fe: fix: 'main' -> 'prod'
02a603a: fix: edit url link
983915c: fix(2); post url
b62ec32: fix(3): try again
e4d0457: add: Discord & Cfx links
b038abe: feat: /discord redirect
70375f1: docs: README 
9df1fdd: feat: Web loading effect
255fbbb: refactor: footer design && .ico
988fd19: fix: remove sidebar collapse & post cat example
ceb9955: fix: html white blurp removal
f00c98a: fix: footer resize issue
da2ab6a: feat: logo
f8ebf13: feat: basic search func.
2806b35: refactor: navbar logo/title/search func.
e6e06a8: bump: README
a3dfcac: fix: navbar theme
1e0a2bf: fix: meta/social card
cc5a924: hotfix: desc @ index
286131d: fix: /docs/ addon
4b22e27: bump: README/docs
eda9db1: feat: updates section
926b101: fix: time
df3ea5d: fix: footer font import (was locally installed)
6c7fd00: fix: font weight @ 'copyright'
4365faf: feat: navbar Ko-Fi heart button
0b09337: feat: redirect link /donate & /support
63e2d0d: bump: README/support/donate
65e05f0: fix: page title @ updates
32b0a99: feat: rules
152a3df: feat(base): FAQ // unfinished
c6a9cc3: bump: new-window cursor for external nav links
1744d4e: bump(rules): markdown {#} ident for URL
06c2270: feat: redir -> /hampter
5303905: Revert "feat: redir -> /hampter"
7e69105: fix: too dark colors -> new
1802fd6: internal formatter*
76b7de7: hotfix: /terms 
bc91d88: feat: lssd (base, unfinished) 
86a2afa: feat: /niko redir
d854945: fix: blog error
2c6e65b: refactor: logo/homepage pre-design
398adaa: refactor(bump): favicon
87cbb0d: bump: 'title'
a5ab948: feat: team page
12de287: bump: README
e317164: bump: niko redir
76e4b29: refactor: homepage / among other things
bdc92e8: bump(core): 3.3.1->3.3.2
530f039: refactor(base): remove/template docs
5ea05ac: fix: /intro - /portal
```

### Niko - Discord Bot
```
8ddeea4: bump: LICENSE @ README.md
9c12f3e: feat: codebase 
aeb4d17: bump(package): moment & scripts.nodemon
76e1d8f: refactor: life check 
4480eb3: fix: useless bot log
15f37a6: bum: banner asset
31506cd: feat: activity status
b862abb: feat: more basic commands
c8c7bb2: feat: PROD/DEV check
98c8bb2: bump: README
669c0c0: fix: README dev order
8e85475: bump: add ver
b85faeb: feat: more admin commands/remove useless check
938ee59: bump version v1.0.1 
8d8a01c: feat: modrole/!role command
f8eceb5: bump: admin -> admin OR mod 
98fcce4: bump: admin -> developer // staff
837e273: feat: !nikostop command
be9e7fd: refactor: staff check bypass cooldown
a0078ab: bump: 'moderators' & 1.0.2 
7c80fd6: feat: !nikocommands command 
d47dee5: refactor(nikostop): prod check / bump 1.0.3
36f2694: refactor: anti-bot console log print
e83cd12: feat(logger): message sent 
dd4ba28: bump: SEP @ messageCreate
c6b1f14: feat(logger): messageDelete/messageUpdate
c12502d: feat(logger): memberGuild add/Remove 
321b376: bump: ver 1.0.5
```

Other Changes:
- New repo: `niko`, `backlot.city`.
- Repository bumped from `backlot` to `FXBacklot` (*Source code for Backlot City's FXServer*), which will hopefully give a better indication to commits.
- Internal txAdmin panel removed from firewall allowlist and moved to Cloudflare's Tunnel system for security. This will prevent attacks such as data breaches, DDoS and much more. Accessible at an internal link which is not shared with non-moderators.

<!--truncate-->

### Issues? 
Report any game bugs or problems on our [Discord Server](https://backlot.city/discord).