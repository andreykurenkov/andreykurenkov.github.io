module Jekyll
  class TagPage < Page
    def initialize(site, base, dir, tag, layout)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'
      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), layout)
      self.data['tag'] = tag
      self.data['title'] = "Posts For Tag #{tag}"
    end
  end
  class TagGenerator < Generator
    safe true
    def generate(site)
      writing_tags = []
      project_tags = []
      site.categories.each_pair do |category, posts|
        if category == 'writing'
           for post in posts 
               writing_tags+=post.tags
           end
           writing_tags = writing_tags.uniq
           site.data['writing_tags'] = writing_tags
        elsif category == 'projects'
           for post in posts 
               project_tags+=post.tags
           end
           project_tags = project_tags.uniq
           site.data['project_tags'] = project_tags
        end
      end

      for tag in writing_tags
        write_tag_page(site, File.join("/writing/tag/", tag), tag, 'writing-page.html')
      end

      for tag in project_tags
        write_tag_page(site, File.join("/projects/tag/", tag), tag, 'projects-page.html')
      end
    end
    def write_tag_page(site, dir, tag, layout)
      index = TagPage.new(site, site.source, dir, tag, layout)
      index.render(site.layouts, site.site_payload)
      index.write(site.dest)
      site.pages << index
    end
  end
end
