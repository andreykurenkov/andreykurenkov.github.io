tags = ['art','criticism','quasi-essay','thoughts','philosophy','food','videogames','film','culture','meta','life']
for tag in tags:
    with open('%s.md'%tag,'w') as tag_page:
        tag_page.write('---\n')
        tag_page.write('layout: page\n')
        tag_page.write('tag: %s\n'%tag)
        tag_page.write('permalink: /writing/tag/%s/\n'%tag)
        tag_page.write('---\n')
        tag_page.write('{% include _posts_by_tag.html %}')

