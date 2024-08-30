export default function now(params = null) {
  // 24 hours format   2024-8-29 17:0:45
  var now = new Date();
  if (params === null) {
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    let dateTime =
      year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
    return dateTime;
  } else if ((params.toUpperCase()) === 'ISO') {
        const now = new Date();
        return now.toISOString();
  }
}

