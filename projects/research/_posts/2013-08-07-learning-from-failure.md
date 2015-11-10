---
layout: project-post
title: Learning from Failure
date: 2013-08-07
tags: [robotics,learning]
status: publish
type: post
published: true
comments: true
author: andrey_kurenkov
projcategory: research
projname: prl
excerpt: Improved robot planning by learning from prior mistakes
image:
  feature: poster.png
  teaser: herb.jpg
links:
  - name: Presentation
    isfile: true
    file: talk.pdf
what: Improved robot planning by learning from prior mistakes
who: Me, worked with direction from Pras Velagapudi and Sidd Srinivasa
why: Roboticists spend a lot of time tweaking things after robots mess up, and the idea was to try and find a way to automate that with learning
where: CMU, at the Personal Robotics Lab
when: June-August 2013
images:
  loop: true
  basename: prl
  ext: png
  num: 5
videos:
  - name: Plan Execution
    src: https://www.youtube.com/watch?v=iq4DzPFGHpM
    caption: My project was to make the robot better at this
    alt: an alt
---
What a fantastic internship. I spent the first half getting set up and essentially making symbolic planning and plan execution work on the robot. But the second half 
is when it got serious - having gotten things to run, the question of how to make the robot learn from experience was asked. And that was it, really - the proposed approach,
data to record, experiments to run, all of that was largely left to me to figure out. 

And figure it out I did. The idea was not complex:
1. Have the robot execute tasks defined as goals ('get me the book'), using symbolic planning (PDDL) to find the sequence of actions to achieve the goal
2. Decompose each symbolic action into each movement ('subaction') the robot executes to finish it, and record the positions of objects at the start and end of each subaction
3. As the robot does actions, record the results of each symbolic action as either succesful or failed
4. Use the stored object locations and failure/success label to train a decision tree to find which positional aspects lead to actions failing
5. Incorporate the results of the decision tree back into the motion planning done to execute the subactions in the form of constraints.
A simple solution, for sure, but one that on paper seemed to be a viable approach to try (have a look at the poster and talk if you somehow want more detail on this). And, no one had really done any work on learning to modify the *geometric* rather than symbolic planning based on action success, so it was intriguing. With such a fun idea in mind, what was not there took only about a month to implement and get to the point of testing using the Orange python package and the lab's existing infrastructure.

But, sadly, as with most projects the end was not ideal. I finished with insufficient time to run enough experiments to finish my very-much-in-progress draft for a paper, and
the questionable applicability of the approach combined with my not being there led to the project to be forgotten soon enough. Still, I hold up this internship as an ideal model
of how to mix supervision with independence and challenge, and am still fairly proud of what I managed to get done while there.
