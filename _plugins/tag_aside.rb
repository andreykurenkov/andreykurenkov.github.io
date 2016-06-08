require 'json'
require 'jekyll'

module Jekyll
  class AsideTag < Liquid::Block 

    def initialize(tag_name, markup, tokens)
      super
      @attributes = {}
      # Parse parameters
      markup.scan(Liquid::TagAttributes) do |key, value|
        @attributes[key] = value.gsub(/^'|"/, '').gsub(/'|"$/, '')
      end
    end

    def render(context)
      site = context.registers[:site]
      converter = site.getConverterImpl(::Jekyll::Converters::Markdown)

      name = @attributes['name'].to_s
      title = @attributes['title'].to_s
      content = super(context)
      "<div><button class=\"btn\" data-toggle=\"collapse\" data-target=\"##{name}\">
           #{title}
       </button></div>"+"<blockquote class=\"aside\">
	       <p id=\"#{name}\" class=\"collapse\" style=\"height: 0px;\">
	           #{content}
	       </p>
       </blockquote>"
    end
  end
end

Liquid::Template.register_tag('aside', Jekyll::AsideTag)
