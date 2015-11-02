tags = ['art','criticism','quasi-essay','thoughts','philosophy','food','videogames','film','culture','meta','life','work']
text = {'quasi-essay':'Quasi Essay'}
with open('../_data/tags.yml','w') as tag_data:
    for tag in tags:
        tag_name = text[tag] if tag in text else tag.title()
        
        tag_data.write('%s:\n'%tag)
        tag_data.write('  name: %s\n'%tag_name)
        tag_data.write('  slug: %s\n'%tag)
        tag_data.write('\n')
        
        with open('../writing/tag/%s.md'%tag,'w') as tag_page:
            tag_page.write('---\n')
            tag_page.write('layout: writing-page\n')
            tag_page.write('title: Posts For Tag \'%s\'\n'%tag_name)
            tag_page.write('tag: %s\n'%tag)
            tag_page.write('permalink: /writing/tag/%s/\n'%tag)
            tag_page.write('---\n')

