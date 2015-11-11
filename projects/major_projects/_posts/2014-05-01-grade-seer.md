---
layout: project-post
title: GradeSeer
date: 2014-05-01 02:26:22.000000000 -07:00
tags: [open-source,teaching,java,open-source]
status: publish
type: post
published: true
comments: true
author: andrey_kurenkov
projcategory: major_projects
projname: gradeseer
excerpt: Open sourced autograding, plagiarism detection, and GUI-grading tools
image:
  feature: seer3.png
  teaser: logo.png
what: Open sourced autograding, plagiarism detection, and structured GUI-grading tools
why: This was all stuff I developed for myself/others while TAing, and gradually made nicer
where: Georgia Tech 
when: August 2013-April 2015
who: Me
links:
  - name: GitHub Repo
    url: https://github.com/andreykurenkov/Grade-Seer
images:
  loop: true
  basename: seer
  ext: png
  num: 3
---
Ah Grade Seer, my grand open source grading package no one cares about. This includes all the software I have written over my 7 semester of TAing (3 for Intro to OOP, 4 for Intro to AI) to help me grade assignments, and seeing no such similar packages I thought perhaps it would be useful. It really came about through a lot of iteration on code I used when grading, so I still feel good about having managed to write quite nice frameworks and large apps over the course of several years. But, oh yes, what is it really? I'll let the GitHub description explain the rest:

"A simple Java open source grading framework with a command line or GUI interface that assists with batch autograding, manual grading, or plagiarism detection. Comes with as an Eclipse project you can directly import - no simple executable at present.

The batch autograding and plagiarism detection is the latest development, and is a pretty simple but useful way to launch a grading program to iterate over student directories and grade submissions or check them for plagiarism. The example package should make it clear how the code can be used - due to using Interfaces and Abstract classes, it is quite flexible.

The GUI was written prior to the batch autograding and plagiarism detection functionality. It is rather large - it can parse specific local directory structure to create a visual list of students, from there a student can be selected and the files of their submission viewed in a separate list, and once a file is chosen it can be read and also ran (currently, this only works with Java programs). The GUI also uses the list of students to have a GUI with fields for grades and comments for each one, which can all be saved and loaded locally. I used it extensively while grading over developing scrips or using cd, but it may take some work to understand and adapt to a different system."
