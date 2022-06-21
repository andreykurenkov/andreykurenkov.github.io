---
layout: base
title: Writings
permalink: "/writing/"
tag: all
excerpt: "Writing on an assortment of topics"
---
{% assign sorted_tags = site.data.writing_tags | sort %}
<!-- life, art, projects, AI  -->
<div id="main" role="main">
  <div class="article-author-side">
    
    {% include _author-bio.html %}
    
    <h2>Tags</h2>
    <ul id="taglist">
      {% for tag_name in sorted_tags %}
          {% assign data_tag = site.data.tags[tag_name] %}
          {% if data_tag %} 
              <li><a href="{{ site.url }}/writing/tag/{{ tag_name }}/">{{ data_tag.name }} ({{site.tags[tag_name] | size}})</a></li>
          {% endif %}
      {% endfor %}
    </ul>
  </div>
  <div id="index">
    <h1>{{ page.title }}</h1>
    {% capture written_year %}'None'{% endcapture %}
    {% if page.tag == "all" %}
        <p class="big-text">
        <br>
        I started blogging in 2014, and have tried to continue writing consistently ever since. Below you'll find essays,
        educational articles, and even a few poems. Enjoy!<br>
        PS, feel free to check out these posts <a href="/writing-categorical"><u>in categorical form</u></a>.
        </p>
        
        <div id='chronological'>
            {% for post in site.categories.writing %}  
                {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
                {% if year != written_year %}
                    <h3 class="writing_subsection">{{ year }}</h3>
                {% endif %}
                {% capture written_year %}{{ year }}{% endcapture %}
                {% include _post_title.html %}
            {% endfor %}
        </div>
    {% else %}
        {% for post in site.categories.writing %}  
              {% if post.tags contains page.tag %}
                {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
                {% if year != written_year %}
                  <h3>{{ year }}</h3>
                {% endif %}
                {% capture written_year %}{{ year }}{% endcapture %}
                {% include _post_title.html %}
              {% endif %}
        {% endfor %}
    {% endif %}
  </div><!-- /#index -->
</div><!-- /#main -->
