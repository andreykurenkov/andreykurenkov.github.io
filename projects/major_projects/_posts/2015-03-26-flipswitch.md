---
layout: project-post
title: FlipSwitch
date: 2015-03-26 
tags: [ee,embedded,iot,competition,team]
status: publish
type: post
published: true
comments: true
author: andrey_kurenkov
projcategory: major_projects
projname: flipswitch
excerpt: Low investment flexible home automation
image:
  feature: poster.png
  teaser: logo.png
what: Low investment home automation with small BLE modules that have actuators and can physically control light switches and various other home electronics.
why: I got the idea from wanting to switch my lights from my desk, since I switched between lamps and 
where: Georgia Tech - GTHacks initially, followed by a revised approach for GT Inventure Prize
when: Fall 2015
who: Me, Alex Bettadapur, Aashish Patel, Hayden Mah
links:
  - name: GitHub Repo
    url: https://github.com/abettadapur/homeauto
images:
  loop: true
  basename: fs
  ext: jpg
  num: 3
---
Oh IOT, will you ever be useful. Being a hackathon fan, I wanted to be part of the GT Inventure prize for years, and finally assembled a team for it my senior year. The idea - to make 'dumb' lightswitches smart with a little stick-on lever you could control from your phone - was just silly/awesome enough to perhaps work. We first tried it at the GTHacks hackathon. It was mostly a bust, largely due to the awfulness of the then new Intel Edison, but we pressed on and got 200$ in school funding for parts for the Inventure prize.

The plan was ambitious - to design custom small-scale PCBs that would have the TI CC2451 chips, which could be housed in an efficiently sized light-swtiching mechanism and pair with an Android app for control. As happens so often, it was too ambitious - we only managed to get a dev kit to control a servo via a simple BLE message, and even that did not work perfectly. Still, we made it to the second round ofthe competition before being knocked out due to a poor presentation and lack of a solid prototype. 

We did not succeed, but the fact our idea later emerged in [multiple](http://myswitchmate.com/) [different](http://www.engadget.com/2015/11/04/robotic-iot-fingers-make-your-dumb-appliances-smarter/) products does suggest we were right to try it. The truth is, we were all busy and only put in 10% of what we could have had we really dedicated to the competition, and with that in mind we really did quite that.
