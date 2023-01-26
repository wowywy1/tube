const fs = require('fs')

let data = [];

const readFile = async () => {
    const json  = await fs.promises.readFile('data.json');
    data = await JSON.parse(json);
}

const writeFile = async () => {
    console.log('data', data)
    await fs.promises.writeFile('data_update.json', JSON.stringify(data, null, 2))
}

const getTagContent = (body, tag, closeTag) => {
    const contents = [];
    let index = 0;
    while (body.indexOf(tag, index) >= 0) {
        index = body.indexOf(tag, index) + tag.length;
        const nextIndex = body.indexOf(closeTag || "</div>", index);
        contents.push(body.substring(index, nextIndex).trim());
    }
    return contents;
}

const crawlVideo = async (url, duration, rating) => {
    try {
        const tmp = url.replace("https://85tube.com/videos/", "")
        const videoId = tmp.substring(0, tmp.indexOf('/'));
        const embedUrl = `https://85tube.com/embed/${videoId}`;

        if (data.some((video) => video.id == videoId)) {
            console.log("Video existed", videoId);
            return;
        }

        console.log('Fetching video...', embedUrl)
        const response = await fetch(embedUrl);
        const body = await response.text();

        const startIndex = body.indexOf("var flashvars = ") + "var flashvars = ".length;
        const jsonString = body.substring(
            startIndex,
            body.indexOf("};", startIndex) + 1);
        const pageData = eval('(' + jsonString + ')');

        const videoData = {
            title: getTagContent(body, "<title>", "</title>")[0],
            id: pageData.video_id,
            url,
            duration,
            rating,
            categories: pageData.video_categories.split(/\s*,\s*/g),
            tags: pageData.video_tags.split(/\s*,\s*/g),
            thumb: pageData.preview_url,

        }
        data.push(videoData);
        console.log("Fetch video successful!")
    } catch (error) {
        console.log('error', error)
    }
}

const crawl = async (from, to) => {
    for (let i = from; i <= to; i++) {
        const url = `https://85tube.com/top-rated/${i}/`;
        console.log("Fetching page...", url)
        const response = await fetch(url);
        const body = await response.text();
        const pageUrls = body.match(/(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/g);
        
        const videoUrls = pageUrls.filter((url) => url.startsWith("https://85tube.com/videos/"));
        const durations = getTagContent(body, `<div class="duration">`)
        const ratings = getTagContent(body, `<div class="rating positive">`)

        for (let i = 0; i < videoUrls.length; i++) {
            await crawlVideo(videoUrls[i], durations[i], ratings[i]);
        }

    }

}

const main = async () => {
    await readFile();
    await crawl(9, 16);
    await writeFile();
}

main();