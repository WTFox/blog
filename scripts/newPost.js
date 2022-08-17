const fs = require('fs');
const slugify = require('slug');
const dateFns = require('date-fns');

const title = process.argv[2];
if (!title) {
    throw Error('a title is required!')
}

const slug = slugify(title.toLowerCase());
const date = dateFns.format(new Date(), 'yyyy-MM-dd');
const dir = `./content/${slug}`;

if (fs.existsSync(dir)) {
    throw Error('That post already exists!')
}
fs.mkdirSync(dir);

fs.writeFileSync(
    `${dir}/${slug}.mdx`,
    `---
date: "${date}"
title: "${title}"
draft: true
summary: "Something about ${title}"
readTimeInMinutes: 5
---

Something about ${title}
`,
    function (err) {
        if (err) {
            return console.log(err)
        }
        console.log(`${title} was created!`)
    },
);

console.log('To open the folder,\n')
console.log(`open ${dir}`)
console.log(`explorer.exe ${dir}`)
