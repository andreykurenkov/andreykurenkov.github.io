---
layout: base
title: Writing
permalink: "/writing/"
extra_css: ["/writing/files/toggle.css"]
extra_js: ["/writing/files/toggle.js"]
tag: all
excerpt: "Quasi-essays on an assortment of topics"
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
        <form class="form" id="writingToggleForm">
          <div class="switch-field">
            <!--   <div class="switch-title">Display Type</div> -->
            <input type="radio" id="switch_left" name="switch" value="yes" checked/>
            <label for="switch_left">Categorical</label>
            <input type="radio" id="switch_right" name="switch" value="no" />
            <label for="switch_right">Chronological</label>
          </div>
        </form>
        <div id='categorical'>
           <h3>Highlights</h3>
            {% for post in site.categories.writing %}  
              {% if post.tags contains 'highlights' %}
                {% include _post_title.html %}
              {% endif %}
            {% endfor %}
            <h3>AI</h3>
            {% for post in site.categories.ai %}  
                {% include _post_title.html %}
            {% endfor %}
            <h3>Projects</h3>
            {% for post in site.categories.project %}  
                {% include _post_title.html %}
            {% endfor %}
            <h3>Art</h3>
            {% for post in site.categories.art %}  
                {% include _post_title.html %}
            {% endfor %}
            <h3>Life</h3>
            {% for post in site.categories.life %}  
                {% include _post_title.html %}
            {% endfor %}
        </div>
        <div id='chronological'>
            {% for post in site.categories.writing %}  
                {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
                {% if year != written_year %}
                    <h3>{{ year }}</h3>
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
