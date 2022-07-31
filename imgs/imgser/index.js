const express = require('express');
const download = require('image-downloader');
const cors = require('cors');
const axios = require('axios');
const app = express();
app.use(cors());
app.get('/genimg/:a',(req,res)=>{
    let b=req.params.a;
    b=b.replace(/\s/g, '\n');
    axios
    .get('https://api.imgbun.com/png?key=e2868326b70d85c8cf57b1c3e0617b1f&text='+b+'&color=000000&size=40&background=FFFFFF')
    .then(res => {
      console.log(`statusCode: ${res.status}`);
    //   console.log(res.data.direct_link);
    const options = {
        url: res.data.direct_link,
        dest: '/mnt/r/flipkart/product_management/imgs/imgser/abcd.png',               // will be saved to /path/to/dest/image.jpg
      };
      download.image(options)
  .then(({ filename }) => {
    console.log('Saved to', filename); // saved to /path/to/dest/image.jpg
  })
  .catch((err) => console.error(err));
    })
    .catch(error => {
      console.error(error);
    });
    res.json({a:'abcd'});

});


app.listen(3939, () => {
    console.log('Listening on http://localhost:3939/');
  });
  