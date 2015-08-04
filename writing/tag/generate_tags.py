tags = ['art','criticism','quasi-essay','thoughts','philosophy','food','videogames','film','culture','meta','life']
text = {'quasi-essay':'Quasi Essay'}
for tag in tags:
    with open('%s.md'%tag,'w') as tag_page:
        tag_page.write('---\n')
        tag_page.write('layout: page\n')
        tag_page.write('tag: %s\n'%tag)
        tag_page.write('permalink: /writing/tag/%s/\n'%tag)
        tag_page.write('---\n')
        tag_page.write('{% include _posts_by_tag.html %}')


with open('../../_data/tags.yml','w') as tag_data:
  for tag in tags:
      tag_data.write('%s:\n'%tag)
      tag_data.write('  name: %s\n'%(text[tag] if tag in text else tag.title()))
      tag_data.write('\n')
