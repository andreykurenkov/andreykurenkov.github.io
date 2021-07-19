---
layout: page
title: Videos
comments: false
share: false
permalink: /videos/
---  
<br>
<p class="big-text">
Occasionally I like to make videos and <a href="https://www.youtube.com/channel/UCsxzwGbltGGsMIBJWA3pZFw">post them on YouTube</a>. 
These are the ones that are maybe worth watching.
</p>
<br>
{% for video_kv in site.data.videos %}
    {% assign video_data = video_kv[1] %}
    {% include _ytvid.html %}
{% endfor %}
