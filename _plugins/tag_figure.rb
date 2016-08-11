module Jekyll
  class FigureTag < Liquid::Block
    def initialize(tag_name, markup, tokens)
      super
      @attributes = {}

      markup.scan(Liquid::TagAttributes) do |key, value|
        @attributes[key] = value.gsub(/^'|"/, '').gsub(/'|"$/, '')
      end
    end

    def render(context)
      site = context.registers[:site]
      converter = site.getConverterImpl(::Jekyll::Converters::Markdown)

      figure_classes = @attributes['class'].to_s
      figure_main = converter.convert(super(context))
      figure_caption = converter.convert(@attributes['caption'].to_s)

      # Render <figure>
      if @attributes['class']
        source = "<figure class=\"figure #{figure_classes}\">"
      else
        source = "<figure class=\"figure\">"
      end

      source += "<div class=\"figure__main\">#{figure_main}</div>"

      if @attributes['caption']
        source += "<figcaption class=\"figure__caption\">#{figure_caption}</figcaption>"
        source += "</figure>"
      else
        source += "</figure>"
      end
    end
  end
end

Liquid::Template.register_tag('figure', Jekyll::FigureTag)