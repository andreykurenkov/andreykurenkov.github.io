---
layout: project-post
title: Review Reviewer
date: 2014-04-12 
tags: [ml,nlp,team]
status: publish
type: post
published: true
comments: true
author: andrey_kurenkov
projcategory: hacks
projname: revieweval
excerpt: Machine-learned prediction of review helpfulness score
image:
  feature: lengthgraph.png
  teaser: graph.png
what: Machine-learned prediction of review helpfulness score
who: Me, Stefano Fenu, Charles Wang
why: We were told to do an NLP-based project, and predicting review helpfulness with a massive dataset was an awesome idea for that
where: Georgia Tech - done for CS 4650 class project
when: April 2014
links:
  - name: Project Report
    file: report.pdf
    isfile: true 
  - name: GitHub Repo
    url: https://github.com/andreykurenkov/nlp-review-helpfulness
images:
  - name: Graph
    file: graph.png
    caption: Online classifier training proved very effective
    alt: Graph
  - name: Table
    file: table.png
    caption: We had fancy semantic features, but could not run it on enough data to get good results
    alt: Table
---
The report covers the gruesome details, but really nothing too fancy - an online PassiveAggressive classifier that used word counts as features and got trained on massive amounts of data using online batch training. I was very impressed that simply feeding in more data led it to gradually get to 90% accuracy, but dissapointed no other features seemed to help. This project also reinforced for me how awesome Python's SciPy is - truly a great package.
