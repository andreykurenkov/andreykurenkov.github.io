---
layout: project-post
title: SpreadSheet-OCR
date: 2014-04-26 
tags: [visualization,cv,ml,team]
status: publish
type: post
published: true
comments: true
author: andrey_kurenkov
projcategory: hacks
projname: spreadsheet-ocr
excerpt: Entirely custom implementation of OCR to extract spreadsheets
image:
  feature: diagram.png
  teaser: logo.png
what: Entirely custom implementation of OCR to extract spreadsheets
who: Me, Pavel Komarov, Ricky Liou, Hank McCord, Miguel Serrano
why: I had to write many tables in lab and manually transfer those to my computer, which struck me as silly
where: Georgia Tech, ECE 4580
when: March-April 2014 
links:
  - name: SVN Repo
    url: https://code.google.com/p/spreadsheet-ocr/
  - name: Final Report
    isfile: true
    file: FinalReport.pdf
images:
  loop: true
  basename: ocr
  ext: png
  num: 4
videos:
  - name: Presentation
    src: https://www.youtube.com/embed/riO3BkyJWVA
    caption: Our class presentation
    alt: Presentation
---
Liking that diagram? Yes, we implemented all of that, even the custom OCR - that used Extreme Neural Nets that took much too long to debug. In the end, we did get a whole working pipeline (as yuo can see in the images below), and so I was fairly happy with the results. Now, just need to reimplement all of it in Java and port it to Android...
