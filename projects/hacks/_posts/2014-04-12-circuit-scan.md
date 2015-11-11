---
layout: project-post
title: CircuitScan
date: 2014-04-12 
tags: [cv,ml,competition,team]
status: publish
type: post
published: true
comments: true
author: andrey_kurenkov
projcategory: hacks
projname: circuitscan
excerpt: A project to extract digital circuit schematics from circuits
image:
  feature: circuitscan1.jpg
  teaser: logo.jpg
what: A project to extract digital circuit schematics from circuits
who: Me, Aashish Patel, and anothe guy
why: I sketched circuits for homework every week and had to manually convert them to netlists, which got me thinking this would be fun to try
where: Emory Hackathon
when: April 12, 2014 
links:
  - name: GitHub Repo
    url: https://github.com/andreykurenkov/sketchit3d
  - name: GitHub Repo
    url: http://devpost.com/software/sketch3d
images:
  loop: true
  basename: circuitscan
  ext: jpg
  num: 2
---
"Another Hackathon, another overly ambitious idea involving OpenCV (and OCR this time!) that is only finished in the sense that it is not finished but it has been shown that the idea is possible via a halfway working prototype of the idea. Extracting electronic circuit netlists/schematic from photos of paper sketches, how can that not be simple? Seriously, this is the third time I did this in a row. On the bright side, I probably could have finished this one had I the will/stupidity to keep working at Emory until the deadline tomorrow. Lessons of the day:
-Haar cascade classifiers take a LONG time to train, so do not plan on just training one up on the spot.
-Implementing a filter for photos of handwritten notes on paper, to blacken the handwriting and erase everything else, takes a surprising amount of time. Tuning never goes away.
-OCR still sucks too hard to handle the sort of unstructured writing found in handwritten circuits.schematics.
-SURF features are not sophisticated enough to work on directly detecting simple shapes such as a resistor - to much noise from simple lines. However, it can be used as a sort of one-step particle filter (sampling keypoints proportionally to how closely they match the feature to estimate most likely positions). There are many more annoying details than a Haar classifier.
-I can probably actually finish this one! Seems fun."
