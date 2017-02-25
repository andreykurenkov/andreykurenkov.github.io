---
layout: project-post
title: ObjectCropBot
date: 2017-02-18
tags: [hackathon,ml]
status: publish
type: post
published: true
comments: true
author: andrey_kurenkov
projcategory: hacks
projname: objectcropbot
excerpt: A site that segments out objects from photos with AI
image:
  feature: cropbot.png
  teaser: bot.jpg
what: A simple demo site that exposes a UI to play with DeepMask
who: Me 
why: I've been wanting to build a simple demo for AI-powered object cropping for a while, and finally got around to it at this hackathon
where: TreeHacks, Stanford
when: February 18 2017 
links:  
  - name: Demo!
    url: www.objectcropbot.com
  - name: DevPost
    url: https://devpost.com/software/cropbot-irag4y
  - name: repo
    url: https://github.com/andreykurenkov/deepmask
images:
  - name: demo
    file: cropbot2.png
    alt: demo
---
I had already had experience with DeepMask when starting on this, since my project for Stanford's AI class was to modify DeepMask to see if it could be used to crop objects with a single click. My conclusion from that was that I was still better off using Facebook's approach, but my experience with AWS for that project came in handy. Specifically, I reused my previous AWS DeepMask computing solution: paying for an AWS EC2 instance with a GPU, installing the relevant dependencies on it, and making it host a REST server. I had to modify the DeepMask code slightly, but for the most part I just set it up to run on the cloud and used Facebook's pretrained models.

The bulk of the remaining work was in implementing the http://objectcropbot.com/ web demo. I made this with basic HTML/CSS/JS parts, except for the excellent open source visual cropping library Cropper.js. After an all-nighter tweaking the demo to look and feel right, I set it up to be hosted on GitHub and arranged the domain to be what it is after buying it from NameCheap. 
