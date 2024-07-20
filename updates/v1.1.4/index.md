---
slug: v1.1.4
title: v1.1.4
date: June 21, 2024
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
0909fd6: refactor/feat: dlc_veh_lsfd/dlc_veh_lssd mpl vehs
7f64fce: feat: dlc_weapons carbinerifle
dd2b095: refactor: holsters (TOS)
539aa09: refactor: server config file/listing
957536e: feat: remove X vehicles
912e2d3: refactor: loadingscreen/new theme
ec93432: fix: del unused git source file
d33a0b4: feat: revive anim
e7c566f: fix: anim/notfi removal
6a60f99: fix: unknown?
e7645ea: pre-commit/save: ambulance UI edits // unfinished
fa2ff7d: refactor: death screens/blur/fullscreen/etc
91d4366: feat: dlc_pillbox
6917fdf: refactor: ambulance death stuff/still bugged
09a5e8f: refactor: lang/fixes some issues ~ unfinished
bd142ea: fix(core): message UI ~ length or {value}
d0b52eb: format: ambulancejob
0aea7e1: fix: double revive animation on last stand
a16a2dd: fix: removed debug prints
9b0325a: fix: remove hover user select from inventory/fo...
547c456: feat(dlc_peds): new clothing attire/jacket/beards
1da2840: refactor: VOIP disable on death/timer 180s
160f70b: fix: lang, anim play and formatting for inventory
adc5f58: fix: mechanic repair time/lang
04fb985: fix: tire repair time
66dd179: refactor: shop formatting/hardware slots
2096d59: refactor: ignorejson/shop formatting
c69bedf: random format
18c7394: del: hotwire/must use lockpick
08a0fdd: feat: dlc_bestbuds
dcfbb50: feat: unfinished added drugs back/weed effect
6a78a4c: del: radioscanner
a0dfe1d: bump: internally moved loadingscreen
0bbbbfa: bump: internally fixing some shit/cleanup
18b8c8c: bump: formatting @ vehiclekeys
483199b: bump: LICENSE
b79698b: docs: README update
b371150: bump: remove locale finish
f63215c: bump: cleanup server.cfg
18bc7ae: bump: listing/cfg
bb2a7d3: cleanup replexx history dupe
66745db: bump: type gametype
2206c18: feat: dlc_weedlocations
20cf07f: bump: increased MP0_STAMINA
8743075: bum: core events formatting/remove pvp cmd
5cde59d: fix: remove 'g' keybind for engine
5ed8a0b: bump target resource to priority queue
030fc01: del: gitignore file
37bae3f: refactor: internal admin command cleanup
7d6c837: refactor: file formatting previous commit
2bfc68e: fix: remove update handler print ox
512a353: fix: text server sided DB connection
23c741f: refactor: loading screen music
417e3a2: bump: loadingscreen match
0422747: bump: char button style
b30d4e9: fix: padding issue
553441b: blips @ shops
ec12b5e: rebase: basic drug functionality/format
c45aed9: format core config
33ef0a6: format Discord status
d9ed4aa: fix: client console outputting native error
62adfc3: fix: spelling error
```

### backlotgames.com - Website
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
9605a4b: feat(docs): Get Started & Troubleshooting | Bas...
36b99b7: refactor: staff page // still not reactive
0fef421: del: readme redirects
d3cd840: Rework Homepage
04a1729: Rework CSS
0273239: del: t.html/unused logos
145bbc1: refactor: homepage image layout
e4f6e3f: feat: homepage images // optimized @ local
2011f15: fix: green blurp when slow loading homepage img
8535793: fix: serve spike locally
78e91a6: fix: reactive homepage img element - icon
cb60c51: feat: new contributor
0b6054f: Update staff.md
a8bef74: Merge pull request #6 from RossMdevs/patch-1
4adf139: Glass - CSS
430f568: Glass - JS
f7ced61: Sneaky lil' me update :p
9e70c6a: dump: glass/resize padding
62b99cb: refactor: staff page
c22f324: feat: fxserver-banner (serving locally vs forums)
0566dcd: Merge branch 'prod' of https://github.com/kchan...
85eb6fd: feat: legalnotice.pdf
8c1cba0: feat/unfinished: trying new navbar stuff/needs ...
41eec2c: feat: internal forum backup/footer merge
ac4c1d9: refactor: navbar/color changes for forum match
85eb6fd: feat: legalnotice.pdf
8c1cba0: feat/unfinished: trying new navbar stuff/needs ...
ac4c1d9: refactor: navbar/color changes for forum match
6bc7edd: Merge pull request #9 from kchaney1508/pr-8
b6f3d1a: refactor/feat: merge forum changes for backup
1f13baf: Merge branch 'prod' of https://github.com/kchan...
e749611: bump: docusaurus v3.4.0
61def4c: refactor: stash unused pages/delete CSS
a441daa: refactor: homepage img remove/new pattern
55dd9c1: refactor: added updates back to navbar
890d691: refactor: changes homebutton to something cooler
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
ffe57ae: feat: slashcommand base
615eaaf: * Ver to internal ver sys; BUMP v1.1.4
1242d46: feat: welcome msg (developer only)
```

Other Changes:
- New repo: `niko`, `backlotgames.com`.
- Repository bumped from `backlot` to `FXBacklot` (*Source code for Backlot City's FXServer*), which will hopefully give a better indication to commits.
- Internal txAdmin panel removed from firewall allowlist and moved to Cloudflare's Tunnel system for security. This will prevent attacks such as data breaches, DDoS and much more. Accessible at an internal link which is not shared with non-moderators.

<!--truncate-->

### Issues? 
Report any game bugs or problems on our [Discord Server](https://backlotgames.com/discord).