---
layout: project-post
title: Mechanical Search
date: 2018-09-15
tags: [ml,ai,robotics]
status: publish
type: post
published: true
comments: true
author: andrey_kurenkov
projcategory: research
projname: mechsearch
excerpt: Finding objects via interactive physical search
image:
  teaser: splash.png
  feature: algorithm_flow_chart.png
when: May 2018 - February 2019
what: When operating in unstructured environments such as warehouses, homes, and retail centers, robots are frequently required to interactively search for and retrieve specific objects from cluttered bins, shelves, or tables. Mechanical Search describes the class of tasks where the goal is to locate and extract a known target object. 
who: Michael Danielczuk, Andrey Kurenkov, Ashwin Balakrishna, Matthew Matl, David Wang, Roberto Martin-Martin, Animesh Garg, Silvio Savarese, Ken Goldberg
why: It's a useful class of problem to tackle
where: Stanford Vision Lab
links:
  - name: Project Site
    url: https://ai.stanford.edu/mech-search/
  - name: Arxiv
    url: https://arxiv.org/abs/1903.01588
---
In this paper, we formalize Mechanical Search and study a version where distractor objects are heaped over the target object in a bin. The robot uses an RGBD perception system and control policies to iteratively select, parameterize, and perform one of 3 actions -- push, suction, grasp -- until the target object is extracted, or either a time limit is exceeded, or no high confidence push or grasp is available. We present a study of 5 algorithmic policies for mechanical search, with 15,000 simulated trials and 300 physical trials for heaps ranging from 10 to 20 objects. Results suggest that success can be achieved in this long-horizon task with algorithmic policies in over 95% of instances and that the number of actions required scales approximately linearly with the size of the heap.
