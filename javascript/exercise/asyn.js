const promises = function (url) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('uploading picture using api', url);
            url ? res(url) : rej(url);
        }, 2000);
    })
}