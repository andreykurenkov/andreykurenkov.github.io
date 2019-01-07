---
layout: base
title: Videos
comments: false
share: false
permalink: /videos/
---  
<div id="main" role="main">
  <div class="article-author-side">
    {% include _author-bio.html %}

  </div>
  <div id="index">
    {% for video_kv in site.data.videos %}
        {% assign video_data = video_kv[1] %}
        {% include _ytvid.html %}
    {% endfor %}
  </div>
</div>
