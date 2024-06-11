// function upload(url) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
        
//             console.log(`Uploading the picture ${url} ...`);
//             !url ? rej(url) : res(url);
//           }, 1000);
//     }) 
//   }
  
  const upload = new Promise((res, rej) => {
            setTimeout(() => {
            
                console.log(`Uploading the picture ${url} ...`);
                !url ? rej(url) : res(url);
              }, 1000);
        });
  function process(picture) {
    console.log(`Processing the picture ${picture}`);
  }
  
  let url = "https://www.javascripttutorial.net/pic.jpg";
  
  upload
  .then(process)

  upload
  .then(process)
  .catch((url) => console.log("Not valid URL :", url));