---
layout: base
comments: false
share: false
permalink: /photography/
---  
<div id="main" role="main">
  <div class="article-author-side">
    {% include _author-bio.html %}
  </div>
  <div id="index">
  <a href="https://www.flickr.com/photos/156910864@N06/"><h2 style="text-align:center; margin-top:0;">Flickr</h2></a>
	<div class="popup-gallery">
		{% flickr_photoset "All" %}
	</div>

    <a href="https://www.instagram.com/regalalgorithm/?hl=en"><h2 style="text-align:center;">instagram</h2></a>
	<!--<div class="popup-gallery" id="instagram_gallery">
		{% instagram accesstokenpath:files/photo_tokens/instatoken.txt %}
		<a href="{{ item.images.standard_resolution.url }}" title="{{ item.caption.text }}">
                    <img src="{{ item.images.thumbnail.url }}" width="24.5%">
                </a>
		{% endinstagram %}
	</div>-->
  </div><!-- /#index -->
</div><!-- /#main -->
