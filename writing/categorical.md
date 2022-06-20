---
layout: base
title: Writings
permalink: "/writing-categorical/"
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
        <p class="big-text">
        <br>
        I started blogging in 2014, and have tried to continue writing consistently ever since. Below you'll find essays,
        educational articles, and even a few poems. Enjoy!<br>
        PS, feel free to check out these posts <a href="/writing"><u>in chronological form</u></a>.
        </p>
        
        <div id='categorical'>
           <h3 class="writing_subsection">Highlights</h3>
            {% for post in site.categories.writing %}  
              {% if post.tags contains 'highlights' %}
                {% include _post_title.html %}
              {% endif %}
            {% endfor %}
            <h3 class="writing_subsection">AI</h3>
            {% for post in site.categories.ai %}  
                {% include _post_title.html %}
            {% endfor %}
            <h3 class="writing_subsection">Projects</h3>
            {% for post in site.categories.project %}  
                {% include _post_title.html %}
            {% endfor %}
            <h3 class="writing_subsection">Art</h3>
            {% for post in site.categories.art %}  
                {% include _post_title.html %}
            {% endfor %}
            <h3 class="writing_subsection">Life</h3>
            {% for post in site.categories.life %}  
                {% include _post_title.html %}
            {% endfor %}
        </div>
  </div><!-- /#index -->
</div><!-- /#main -->
