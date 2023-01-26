const fs = require('fs')

let data = [];

const readFile = async () => {
    const json  = await fs.promises.readFile('data.json');
    data = await JSON.parse(json);
}

const main = async () => {
    await readFile();
    const categories = {};
    const tags = {}
    for (let video of data) {
        for (let category of video.categories) {
            categories[category] = (categories[category] || 0) + 1;
        }
        for (let tag of video.tags) {
            tags[tag] = (tags[tag] || 0) + 1;
        }
    }
    console.log('categories', categories);
    console.log(Object.keys(tags).length)
    // console.log('tags', tags)
}

main();