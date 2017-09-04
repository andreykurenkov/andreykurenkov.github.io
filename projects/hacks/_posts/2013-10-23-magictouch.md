---
layout: project-post
title: MagicTouch
date: 2013-10-23 
tags: [cv,android,competition]
status: publish
type: post
published: true
comments: true
author: andrey_kurenkov
projcategory: hacks
projname: magictouch
excerpt: A library for hand tracking on Android
image:
  feature: track.jpg
  teaser: logo.jpg
what: A library for hand tracking on Android
who: Me and Stefano Fenu
why: Why sleep when one can try, and fail, to implement full hand tracking on Android to run on top of any app?
where: Georgia Tech, hackathon
when: Oct 23, 2013 
links:
  - name: GitHub Repo
    url: https://github.com/andreykurenkov/camera-touch-emulation
---
Another failed over-ambitious darling. Sketchit3D did not sufficiently humble me, and I got the idea of full on palm tracking instead of the quite lame alternative of colored blobs. And, you know what? We actually did get it to work. Not to work well, no, but we got Hough Cascade Classifiers to run in an Android app and detect whether my hand was closed or open. But, it did not work that well - we would need some nice initialization in a known location, regularization for lighting conditions, something like particle filters - much more than could be done in a night, in short. But, still, it ran.
