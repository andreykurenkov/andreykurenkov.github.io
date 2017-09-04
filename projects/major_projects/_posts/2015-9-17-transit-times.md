---
layout: project-post
title: TransitTimes
date: 2015-09-17 02:26:22.000000000 -07:00
tags: [open-source,ble,android,iot,competition,web,team]
status: publish
type: post
published: true
comments: true
author: andrey_kurenkov
projcategory: major_projects
projname: transittimes
excerpt: Beacon-based notifications about when the bus or train will get to your stop
image:
  feature: poster.png
  teaser: logo.png
what: Beacon-based instant info about when the bus or train will get to your stop via an app, smartwatch, or website
why: I ride the VTA, and this seemed like something that should exist - the competition gave us a good excuse to make it
where: Bay Area, hackmyride2 challenge
when: Fall 2015
who: Me and Alex Bettadapur
links:
  - name: GitHub Repo
    url: https://github.com/andreykurenkov/hack-my-ride
  - name: DevPost Submission
    url: http://devpost.com/software/transittimes-7bloyn
images:
  loop: true
  basename: tt
  ext: jpg
  num: 11
videos:
  - name: Presentation
    src: https://www.youtube.com/embed/zzAFS25KNq8
    caption: Presentation
    alt: Presentation
---
I started out the project thinking i'd do something much lower-level, but ended up working mostly on high-level frameworks with an existing beacon devkit. Thanks to (for once) things mostly working as we expected, we completed the vast majority of the project in about a month. Not bad, considering we made an Android app, a Django-based website (with significant frontends and backends), and a Pebble app. The data being in a standard GTFS format certainly helped, since we were bootstrapped by existing Django extensions for that. We did not get top three, but getting 1.5k for the best beacon award is not bad. 
