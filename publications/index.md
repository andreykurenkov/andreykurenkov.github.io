---
layout: base
title: Publications
permalink: "/publications/"
about: "Publications"
share: false
---
<div id="main" role="main">
  <div class="article-author-side">
    {% include _author-bio.html %}

  </div>
  <div id="index">
    <h1>{{ page.title }}</h1>

  {% capture written_year %}'None'{% endcapture %}

  {% for publication in site.categories.publications %}  
    {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
    {% if year != written_year %}
      <h3>{{ year }}</h3>
    {% endif %}
    {% capture written_year %}{{ year }}{% endcapture %}
    {% include _publication_list_entry.html %}
    {% endfor %}
  <hr>
  </div>
</div>



