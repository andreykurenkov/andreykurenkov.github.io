---
layout: post
title: IMDB Data Visualizations with D3 + Dimple.js
date: 2016-08-10T16:19:34-07:00
tags: [technical,data-science,film]
category: project
status: post
type: post
published: true
comments: true
author: andrey_kurenkov
excerpt: "A look at how many movies of each genre get released, the IMDB rating distribution, and more!"
extra_css: ["/writing/files/2016-08-10-visualizing-imdb-data-with-d3/css/style.css"]
extra_js: ["/writing/files/2016-08-10-visualizing-imdb-data-with-d3/js/createChartFuncs.js","http://d3js.org/d3.v3.min.js","http://dimplejs.org/dist/dimple.v2.1.6.min.js"]
---
*Notes: not optimized for mobile (or much else). Full page version **[here](/writing/files/2016-08-10-visualizing-imdb-data-with-d3/standalone_page.html)**, visualization code **[here](https://github.com/andreykurenkov/imdb-data-viz)**. I don't get into the technical aspects here, but feel free to take a look.*

<div id="genreChartContainer" class="chartContainer">
  <script type="text/javascript">
    /*Start on 1915 because prior too few movies are listed to make them a fair
    comparison to modern times*/
    var start_year = 1915;
    /*End on 2013 due to a strange dive towards zero in 2014 and 2015 I cannot explain or
    guarantee is not due to flawed data. At first I included the dip but received feedback it
    is best to remove it to avoid confusion, and then removed it.*/
    var end_year = 2013;
    //Get from localhost, perhaps change to github later
    var data_source = "/writing/files/2016-08-10-visualizing-imdb-data-with-d3/data/yearly_data.tsv";
    var name = "IMDB Yearly Movie And Genre Counts (1915-2013)";
    createGenreChart("#genreChartContainer",
                    data_source,
                    name,
                    start_year,
                    end_year);
  </script>
</div>

<form class="form" id="genreToggleForm">
  <div class="switch-field">
    <!--   <div class="switch-title">Display Type</div> -->
    <input type="radio" id="switch_left" name="switch" value="yes" checked/>
    <label for="switch_left">Counts</label>
    <input type="radio" id="switch_right" name="switch" value="no" />
    <label for="switch_right">Percents</label>
  </div>
</form>

And there it is! IMDB data[^gotten_with] visualized with [D3](https://d3js.org/), or more precisely with the D3-powered [Dimple.js](http://dimplejs.org/). The data is minimally cleaned up by filtering for movies that have at least one vote and associated length information, and info on TV episodes or shows is also not included, but the data is otherwise directly (after parsing) from IMDB. The legend is interactive (try clicking the rectangles!).

As you can see this chart visualizes the number of genre movie releases between 1915 and 2013[^why_years], as well as the total number of movies in those years. 
A single movie may be associated with zero, one, or multiple genres and so the 'Total Movies' line corresponds to actual
movie counts and every colored-in area represents the number of movies tagged with that genre for that year. 
The clear conclusion is that there has been an explosion in film production from the 90s onward, for which I have some theories[^theories] but no definitive explanation. Beyond the big takeaway there are a multitude of possible smaller conclusions regarding the relative popularity of genres and movies overall, which was really my intent in making such an open-ended visualization.

There is a ton more that can be done with the data. The direction I decided to
go with it was to explore various aspects of more recent data rather than
more aspects related to change over time. I would love to eventually add controls to view any year range for all the following charts[^nontrivial], but they still reveal some interesting aspects about modern movie production and IMDB metrics. 

An obvious place to start is with looking at how rating data is distributed, and the answer is delightfully normal:

<div id="ratingChartContainer" class="chartContainer">
  <script type="text/javascript">
    createLineChart("#ratingChartContainer",
                    "/writing/files/2016-08-10-visualizing-imdb-data-with-d3/data/rating_data.tsv",
                    false,
                    "IMDB Average Movie Rating Distribution (2003-2013) ",
                    "rating",
                    false,
                    "Average IMDB User Rating");
  </script>
</div>

Yep, a bell curve-ish[^bell_curve] kinda shape! Not overly suprising to see that most movies are rated as mediocre/good and the frequency flattens out at either extreme. Next, a slightly more fun shape from the length distribution:

<div id="lengthChartContainer" class="chartContainer">
  <script type="text/javascript">
    createLineChart("#lengthChartContainer",
                    "/writing/files/2016-08-10-visualizing-imdb-data-with-d3/data/length_data.tsv",
                    true,
                    "IMDB Movie Length Distribution (2003-2013)",
                    "length",
                    false,
                    "Length (minutes)",
                    "max");
  </script>
</div>

Ah, what a nice regularly spiky shape[^fourier]. It's logical that most movies hit the 90-minute mark, though it seems likely
that simplified data entry also brings about the periodicity here. The chart is a bit of a mess as a line graph, so it makes sense
to clean it up by binning the data quite a bit more:

<div id="lengthBinChartContainer" class="chartContainer">
  <script type="text/javascript">
    createHistChart("#lengthBinChartContainer",
                    "/writing/files/2016-08-10-visualizing-imdb-data-with-d3/data/length_data_hist.tsv",
                    true,
                    "IMDB Movie Length Distribution (2003-2013) ",
                    "length",
                    false,
                    "Length (minutes)");
  </script>
</div>

And there it is, hiding in that data was another sort-of bell curve. Except of course for that first bar - IMDB apparently has a large amount of shorter 0-20 minute film entries as well. No doubt short films are part of this, though it's unclear why there are quite so many. As with many aspects of the data, it could be explored more deeply and filtered more thouroughly to focus on a specific subset of films. But, that's for another day. For now I continued my visualization quest by looking into the vote distribution:

<div id="votesChartContainer" class="chartContainer">
  <script type="text/javascript">
    createLineChart("#votesChartContainer",
                    "/writing/files/2016-08-10-visualizing-imdb-data-with-d3/data/votes_data.tsv",
                    true,
                    "IMDB Movie Vote Count Distribution (2003-2013) ",
                    "votes",
                    true,
                    "IMDB User Vote Count");
  </script>
</div>

Yes astute reader[^corny], that is indeed a log-scale on the x axis. Unsurprisingly, the number of votes for any given film declines exponentially - very few of those thousands of movies in the first graph are blockbusters[^again]. As with the histogram above the continuous data is in fact binned for counting, but in this case there are enough bins that it makes sense to smooth out into a line. Once again the data can also be shown via a histogram with fewer bins:

<div id="votesBinChartContainer" class="chartContainer">
  <script type="text/javascript">
  createHistChart("#votesBinChartContainer",
                  "/writing/files/2016-08-10-visualizing-imdb-data-with-d3/data/votes_data_hist.tsv",
                      true,
                      "IMDB Movie Vote # Distribution (2003-2013) ",
                      "votes",
                      true,
                      "IMDB User Vote Count");
  </script>
</div>

Lastly, I explored the distribution of budgets within the data [^budgets]. I was originally inspired to look into 
movie data based on [an article](http://flavorwire.com/492985/how-the-death-of-mid-budget-cinema-left-a-generation-of-iconic-filmmakers-mia) 
that discussed the death of mid-budget-cinema, and of course I wanted to look into the data and see the phenomenon myself. The result once again demands a log-scale and reveals a certain periodicity:

<div id="budgetChartContainer" class="chartContainer">
  <script type="text/javascript">
    createLineChart("#budgetChartContainer",
                    "/writing/files/2016-08-10-visualizing-imdb-data-with-d3/data/budget_data.tsv",
                    true,
                    "IMDB Movie Budget Distribution (2003-2013) ",
                    "budget",
                    true,
                    "Budget (USD)",
                    "average");
  </script>
</div>

The data does[^plural] not seem to back the notion of mid-budget movies dying, since one peak is at about 1m, but then again as said before the data is not particularly carefully filtered. There being a ton of less-than one million budget movies certainly explains how such an explosion in movie production might have been possible in the past twenty years. That guess shall hopefully be further explored in future posts, but for now I will finish with a final simplified histogram:

<div id="budgetBinChartContainer" class="chartContainer">
  <script type="text/javascript">
    createHistChart("#budgetBinChartContainer",
                    "/writing/files/2016-08-10-visualizing-imdb-data-with-d3/data/budget_data_hist.tsv",
                    true,
                    "IMDB Movie Budget Distribution (2003-2013) ",
                    "budget",
                    true,
                    "Budget (USD)");
  </script>
</div>

## What I Learned
And now time for everyone's favorite part of the book report. In truth I prepared the genre chart for Udacity's an online class, [Data Visualization with D3.JS](https://www.udacity.com/course/data-visualization-and-d3js--ud507). I completed the class as part of Udacity's Data Analyst Nanodegree, and as with my [previous](http://www.andreykurenkov.com/writing/fun-visualizations-of-stackoverflow/) [posts](http://www.andreykurenkov.com/writing/power-of-ipython-pandas-scikilearn/) based off projects for the nanodegree I felt that I learned[^learned] a useful technology and got the chance to complete a fun project with it worthy of cataloguing. I have a few key takeaways from having now completed the project:

* It's way easier to do data exploration and visualization via RStudio or IPython than D3. Perhaps this is not true for others, but I was surprised by how high level and unstreamlined D3 is for typical visualization tasks. Of course this is part of its power and the reason that higher-abstraction libraries like Dimple.js got built, but on balance I still felt that using JavaScript, HTML, and a browser was not nearly as elegant as RStudio. As someone only mildly experienced with web-dev, the prior classes on R and Pandas+IPython made me feel much more empowered to play with data easily. 
* D3 allows for interactivity, but interactvity is not always needed. This one is rather obvious but why not still spell it out. All but the genre chart here could have comfortably been PNGs files (as in my previous visualization posts), and not lost much. Still, allowing for interactivity does open up a considerable amount of possibilies and in particular is good for open ended data visualization without a single particularly concrete point.
* Aggregation over hundreds of thousands of data points in JS is probably a bad idea. The year-grouped data for the genre graph was originally completely computed in JS when I submitted my project to Udacity. This took painful seconds, which was not helped by my meek laptop. Again unsurprising, but I did feel a tinge of annoyance at realizing I would be best off writing a python script to pre-process my data into multiple CSV files ready for charting without much manipulation. 

## Bloopers
You did not ask for them, and I delivered. Here are a couple of silly moments during the creation of this[^high_five]. Hope you enjoyed!

{% figure caption:'Making small ordering mistakes unsurisingly had major glitchy implications...' %}
[<img class="postimageactual" src="/writing/images/2016-08-10-visualizing-imdb-data-with-d3/oops.png" alt="oops"/>](/writing/images/2016-08-10-visualizing-imdb-data-with-d3/oops.png)
{% endfigure %}

{% figure caption:'... which were worse in some cases than others.' %}
[<img class="postimageactual" src="/writing/images/2016-08-10-visualizing-imdb-data-with-d3/great.png" alt="great"/>](/writing/images/2016-08-10-visualizing-imdb-data-with-d3/great.png)
{% endfigure %}

{% figure caption:'For a while I thought to plot the binned data with tiny little cute bins via step interpolation...' %}
[<img class="postimageactual" src="/writing/images/2016-08-10-visualizing-imdb-data-with-d3/step1.png" alt="step1"/>](/writing/images/2016-08-10-visualizing-imdb-data-with-d3/step1.png)
{% endfigure %}

{% figure caption:'... but evidently changed my mind.' %}
[<img class="postimageactual" src="/writing/images/2016-08-10-visualizing-imdb-data-with-d3/step2.png" alt="step2"/>](/writing/images/2016-08-10-visualizing-imdb-data-with-d3/step2.png)
{% endfigure %}


## Notes
[^gotten_with]: (gotten with <a href="https://github.com/andreykurenkov/data-movies">this code</a>) 
[^why_years]: The cutoff years are chosen due to there being very few movies comparable to modern films prior to 1915, and the data possibly being incomplete post 2013
[^theories]: Primarily that films are cheaper to make due to digital technology and that IMDB tacks more modern movies better
[^nontrivial]: This is nontrivial for various boring reasons and I have too many side-projects as it is...
[^bell_curve]: Fine, a somewhat offset and wobbly bell curve, but still looks pretty good.
[^fourier]: Don't you just want to take the fourier transform of it? 
[^corny]: Too corny? I shan't apologize, this is my site!
[^again]: Again, something warranting a deeper dive someday.
[^budgets]: Many movies did not have associated budget data, but that still left thousands that did
[^plural]: I know, 'do' is grammatically correct here, but then natural speech is largely nonsensical so who cares
[^learned]: Well, learned a little...
[^high_five]: Wow, did you actually read all the text and are still reading it? High five.
