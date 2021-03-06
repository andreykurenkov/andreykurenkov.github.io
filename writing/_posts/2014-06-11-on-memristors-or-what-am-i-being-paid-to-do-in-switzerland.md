---
layout: post
title: On Memristors, Or, What Am I Being Paid To Do In Switzerland?
date: 2014-06-11 17:11:43.000000000 -07:00
tags: [work,research]
category: life
status: publish
type: post
published: true
meta:
  _edit_last: '44769023'
  geo_public: '0'
  switch_like_status: '1'
  _publicize_pending: '1'
comments: true
author: andrey_kurenkov
excerpt: TLDR new fancy technology that may or may not revolutinize computing
---
What I am being paid to do in Switzerland is work as a summer research in the <a title="LSM" href="http://lsm.epfl.ch/" target="_blank">Microelectronic Systems Lab</a>. It's a huge lab with many areas of research, which can be summarized as relating to <a href="http://en.wikipedia.org/wiki/Integrated_circuit">integrated chip</a> design as well as lower level (less abstraction, more physics) material research and higher level (more abstraction, less physics) circuit research. On the higher end of that scale is the lab's work relating to neuromorphic (biologically inspired) circuits, and in particular artificial neural nets (ANN) implemented in hardware - the topic that piqued my interest. Perhaps, though really probably , I think we should bother because our brains are computers, albeit of a completely different biological architecture from the computer you are using to read these words right now, and so I can't help but wonder if we can't emulate this computer in hardware rather than software. As it is, we are essentially performing drastically inefficient simulations of one computer on another entirely different computer. No wonder neural nets take forever to run. This, as well as the less lofty idea that it would be really cool to have a robot with an embedded ANN chip (a brain on a chip in a robot!), made me apply to the internship and for some reason I got hired.

Before my first day at work, I was vaguely told it'd involve simulating neural nets in C or C++. Then I got to work, and found about the only specific decision made about my summer project is that it will involve simulating  are pretty neat. You know those fundamental electrical components, the good old resistor, conductor, and inductor? The resistor relates voltage to current, the inductor relates flux to current, and the conductor relates voltage to charge. Well, a while back Leon Chua published a seminal paper cutely titled "<a href="http://www.cpmt.org/scv/meetings/chua.pdf">Memristor - The Missing Circuit Element</a>." This paper postulated that there should be some a fourth basic type of component that relates charge to flux (you don't want to relate charge to current or voltage to flux, since those are already related by a derivative), because nature should be all nice and symmetric. A couple of decades later, in 2008, some researchers from HP published a paper even more cutely titled "<a href="http://www.ece.ucsb.edu/~strukov/papers/2008/Nature2008.pdf">The Missing Memristor Found</a>," detailing how a range of nano devices exhibit characteristics that appear to match the theoretical components that Chua postulated should exist. According to Google Scholar, the paper has been cited 2210 time since then. Two thousand two hundred and ten citations. In six years.

Why? Well, although we don't actually know how they work physically and have a host of mathematical models that seem to fit, the big deal is that they have a variable resistance. When current flows through a  became a Big Deal. "<a href="http://spectrum.ieee.org/semiconductors/processors/how-we-found-the-missing-memristor">How We Found The Missing Memristor</a> " is an accessible and interesting retrospective on how HP got there.

So, what are those 2210 papers actually about? The short version is that I can;t fit 100 papers in this blog post, how about I let you take all that in via the [most digestible of formats](https://docs.google.com/presentation/d/13h7D-QlO4JsES-BUgHgdNC53DL3Fgi2nqcAE70qbPJQ/edit?usp=sharing). Among the most exciting, and sensationalist,  specifically.

So, what am I being paid to do in Switzerland? Let's review: on my first day, I learned about  hardware that could solve the Hard subset sum problem fast.

Except, that is no longer what I am being to do in Switzerland. The next week I read all existing papers about implementing computation with  Ventra, after several conversations with my supervisor, just as I was almost done writing an email what I had done and about how I was not sure how to proceed, my professor emailed me saying he thought my work could be focused on neural nets.

And the sad part is, just as I walked back home that day and was struck with an idea for a possible approach to designing the architecture for  as synapses in ANNs.

So, I am being paid to work on simulating  circuits, with an as of yet undetermined novel end goal. In Switzerland.
