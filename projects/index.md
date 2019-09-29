---
layout: base
title: Projects
permalink: "/projects/"
tag: all
excerpt: "Projects by Andrey Kurenkov - AI, ML, robotics, embedded, apps, etc.!"
---
{% assign sorted_tags = site.data.project_tags | sort %}
<div id="main" role="main">
  <div class="article-author-side">
    {% include _author-bio.html %}
    <h2>Tags</h2>
    <ul id="taglist">
      {% for tag_name in sorted_tags %}
          {% assign data_tag = site.data.tags[tag_name] %}
          {% if data_tag %} 
              <li><a href="{{ site.url }}/projects/tag/{{ tag_name }}/">{{ data_tag.name }} ({{site.tags[tag_name] | size}})</a></li>
          {% endif %}
      {% endfor %}
    </ul>
  </div>
  <div id="index">

    {% if page.tag == "all" %}

    <h1 style="display: block;">Research</h1>
    <h3 style="padding-top: .5em"> All publications listed <a href="/publications">here.</a></h3>
    <div class="tiles">
      {% for post in site.categories.research %}
        {% include _project-grid.html %}
      {% endfor %}
    </div><!-- /.tiles -->

    <h1 style="display: block;">Big Team Projects</h1>

    <div class="tiles">
      {% for post in site.categories.team_projects %}
        {% include _project-grid.html %}
      {% endfor %}
    </div><!-- /.tiles -->

    <h1 style="display: block;">Major Side Projects</h1>

    <div class="tiles">
      {% for post in site.categories.major_projects %}
        {% include _project-grid.html %}
      {% endfor %}
    </div><!-- /.tiles -->

    <h1 style="display: block;">Hacks and small projects</h1>

    <div class="tiles">
      {% for post in site.categories.hacks %}
        {% include _project-grid.html %}
      {% endfor %}
    </div><!-- /.tiles -->

    {% else %}

    <h1 style="display: block;">{{ site.data.tags[page.tag].name }} Projects</h1>

    <div class="tiles">
      {% for post in site.categories.projects %}
         {% if post.tags contains page.tag %}
            {% include _project-grid.html %}
         {% endif %}
      {% endfor %}
    </div><!-- /.tiles -->

    {% endif %}
  </div><!-- /#index -->
</div><!-- /#main -->

