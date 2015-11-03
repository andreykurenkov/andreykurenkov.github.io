module Jekyll
  class TagIndex < Page
    def initialize(site, base, dir, tag)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'
      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'writing-page.html')
      self.data['tag'] = tag
      self.data['title'] = "Posts For Tag #{tag}"
    end
  end
  class TagGenerator < Generator
    safe true
    def generate(site)
      if site.layouts.key? 'writing-page'
        site.tags.keys.each do |tag|
          write_tag_index(site, File.join("/writing/tag/", tag), tag)
        end
      end
    end
    def write_tag_index(site, dir, tag)
      index = TagIndex.new(site, site.source, dir, tag)
      index.render(site.layouts, site.site_payload)
      index.write(site.dest)
      site.pages << index
    end
  end
end
