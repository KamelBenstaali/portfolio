import os
import glob
import re

files = sorted(glob.glob('../Mes_projets/*_description.md'))
projects_js = []
projects_js.append('import p2 from "./assets/img/p2.png";')
projects_js.append('import p3 from "./assets/img/p3.png";')
projects_js.append('import p4 from "./assets/img/p4.png";')
projects_js.append('import p5 from "./assets/img/p5.png";')
projects_js.append('import p6 from "./assets/img/p6.png";')
projects_js.append('import p7 from "./assets/img/p7.png";')
projects_js.append('import p8 from "./assets/img/p8.png";')
projects_js.append('import p9 from "./assets/img/p9.png";')
projects_js.append('')
projects_js.append('export const projectsData = [')

with open('../Mes_projets/Liste_des_projets.md', 'r') as f_list:
    list_content = f_list.read().split('\n')

github_urls = []
for line in list_content:
    if line.startswith('http'):
        github_urls.append(line.strip())

for i, f in enumerate(files):
    with open(f, 'r') as file:
        content = file.read()
    
    title = 'Projet'
    lines = content.split('\n')
    for line in lines:
        if line.startswith('# '):
            title = line[2:].strip().replace('"', '\\"')
            break
            
    short_desc = 'Description'
    for j, line in enumerate(lines):
        if line.startswith('## 📝 Résumé court'):
            if j+1 < len(lines):
                short_desc = lines[j+1].strip().replace('"', '\\"')
            break
            
    github_url = github_urls[i] if i < len(github_urls) else ''
            
    content_clean = re.sub(r'.*\*\*Lien\(s\)\s*:\*\*.*(\n|$)', '', content)
    content_esc = content_clean.replace('`', '\\`').replace('$', '\\$')
    img_var = f'p{i+2}'
    
    project_obj = f"""  {{
    title: "{title}",
    description: "{short_desc}",
    githubUrl: "{github_url}",
    imgUrl: {img_var},
    markdownContent: `{content_esc}`
  }},"""
    projects_js.append(project_obj)

projects_js.append('];')

with open('src/projectsData.js', 'w') as out:
    out.write('\n'.join(projects_js))