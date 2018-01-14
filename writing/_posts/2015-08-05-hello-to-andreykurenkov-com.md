---
layout: post
title: Hello to andreykurenkov.com!
date: 2015-08-07T18:39:03-07:00
tags: [philosophy,life,quasi-essay]
category: project
status: published
type: post
published: true
comments: true
author: andrey_kurenkov
excerpt: Why and how this website was created
---
> "I love writing. I get a kick out of sharing my thoughts with others. The act of transforming ideas into words is an amazingly efficient way to solidify and refine your thoughts about a given topic. " -Tom Preston (creator of Jekyll), [Blogging Like a Hacker](http://tom.preston-werner.com/2008/11/17/blogging-like-a-hacker.html)

##How This Place Came Into Existence

Hello there. Thanks for visiting my site. How do you like it? Fun fact: the publication date of this post is also the date that *andreykurenkov.com* went live on the wild lands of the internet. Fun fact \#2: it's been more than a year since I originally started working on developing such a site. Why do it? For one, because I had not done any web development before that and a lack of knowledge of how to do something clearly makes it all the more worthwhile to do.  And that aside it was already quite worthwhile, partially for the transparently prideful reason of wanting to document my miscellaneous projects in style, but most of all simply to build something that felt like my own space to express myself through (inspired significantly by the magnificent [Paul Graham](http://www.paulgraham.com/)). So then, why did it take a year to get finished? Well, like I said, I had not done **any** web development beforehand, yet had some grand ambitions for the site's design and reactive behavior. Following the Django tutorial was easy enough, but wrangling HTML and CSS to fullfil my lofty vision proved significantly harder, and having to figure out how to use jQuery was the cherry on top of the technological stack pie.

<figure>
    <a href="{{ site.url }}/writing/images/2015-08-05-hello-to-andreykurenkov-com/website.png"><img src="{{ site.url }}/writing/images/2015-08-05-hello-to-andreykurenkov-com/website.png" class="postimage"/></a>
    <figcaption>A prototype projects portfolio page. Entirely custom HTML and CSS - I was young, and inexperienced...</figcaption>
</figure>

And so I got far in that summer, learned the Django and prototyped a static portfolio page in HTML and CSS, but ultimately stopped at the 80% point and got distracted by other things. And then, as tends to happen, my overabundance of free time ran out as I went back to college and the project hibernated for a good long while. I did get back to it during the bliss of Winter Break, but (as tends to happen) I then only got it to the 95% point (the point at which all major problems are solved and interesting functionality implemented) but lacked the will to do the remaining 5% (the content entry and bothersome debugging part). Meanwhile, I had continued to update the significantly less ambitious [lifeofandrey.wordpress.com](http://www.lifeofandrey.wordpress.com), also begun the summer before on a whim but steadily maintained. And so although the Django site never made it to anything beyond being served by a debug server, the Wordpress blog steadily filled with content, and my fondness for producing this content likewise increased. Now, fast forward past my senior year of college and some months thereafter - I once again found myself with plenty of free time and a desire for a more personal web existence. All it took was a glance over one Facebook post that mentioned Jekyll, and my work on this site began anew. 

<figure>
    <a href="https://github.com/andreykurenkov/minimal-mistakes/commits/master"><img src="{{ site.url }}/writing/images/2015-08-05-hello-to-andreykurenkov-com/commits.png" class="postimage"/></a>
    <figcaption>Commits logs do not lie.</figcaption>
</figure>

##Why Jekyll

Jekyll is a tool for generating static websites (a bunch of HTML files and other files lacking code) from a bunch of templates and associated YAML files. Software engineers explaining why they ported their blog to it from a service such as Wordpress.com [is](http://ocramius.github.io/blog/moving-my-blog-to-jekyll/) [practically](http://hadihariri.com/2013/12/24/migrating-from-wordpress-to-jekyll/) [a](http://www.girliemac.com/blog/2013/12/27/wordpress-to-jekyll/) [genre](http://jbeckwith.com/2013/07/17/wordpress-to-jekyll/) [nowdays](http://damien.krotkine.com/2011/04/30/migrating-to-jekyll.html), so let me summarize: it's easy, it's fully yours to customize, static content means it's fast, and hosting could not be simpler thanks to [GitHub Pages support](http://jekyllrb.com/docs/github-pages/). One of the major hurdles I did not clear with my Django effort was figuring out how to actually put my website on the internet on my own custom domain, which I had [already done]({{site.url}}/old.html) on GitHub Pages and knew to be [super simple](http://davidensinger.com/2013/03/setting-the-dns-for-github-pages-on-namecheap/). The moment that cemented my confidence in using Jekyll was finding the [magnificent Minimal Mistakes theme](http://mmistakes.github.io/minimal-mistakes/theme-setup/). It was truly the best of both the wordpress and Django worlds: an off-the-shelf great looking theme that I could endlessly tinker with to my heart's content. And tinkering with it has proven to be nothing but fun, with most major lacking Wordpress features a [Google](http://www.minddust.com/post/tags-and-categories-on-github-pages/) [Search][http://realjenius.com/2012/11/03/jekyll-series-list/] away. That the simplicity of the tool requires ingenuity to implement some fancier ideas only makes it all the more fun.

##TODO
I know you must be very impressed by the mighty feat of this site's creation, but the truth is that I have taken the lazy road in posting this today - it's not even finished yet! Much more is to come 

-  Create projects category to replace work in nav bar and be distinct from writing  

   Basically, fulfill my original ambition with the Django site. The more involved layout with images
   will not be trivial, but should be entirely doable. 

-  Create custom Photography pages instead of linking to 500px

   Though 500px is a fine site I quite enjoy browsing, it's not fun to just link to it instead of 
   hosting the photographs myself. Luckily, a neat hidden little feature of Lightroom is static 
   html gallery generator 

-  Eventually transform the site into my own distinct theme.

   Because my efforts in life seems perpetually aimed at becoming my own ideal role model, I suppose.

##You Can Do It Too!

Yes! Even people with zero programming or wev dev experience can quite easily create their own www.myname.com site using Jekyll. The quite from [Minimal Mistakes](http://mmistakes.github.io/minimal-mistakes/theme-setup/) is excellent,  but [Jekyll Bootstrap makes it even easier](http://jekyllbootstrap.com/usage/jekyll-quick-start.html). It's really great fun, so if you actuall read all the above text and are now tempted to walk the same path - by all means, do!
