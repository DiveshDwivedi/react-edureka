const promises = function (url) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('uploading picture using api', url);
            url ? res(url) : rej(url);
        }, 2000);
    })
}


function process(picture) {
    console.log(`processing the picture ${picture}`);
}

const url = "https://www.javascripttutorial.net/pic.jpg";


promises(url)
.then(process,() => {
    // process(url)
    console.log('uploaded url', url);
})
.catch(() => {
    console.log('fali to uppload');
})