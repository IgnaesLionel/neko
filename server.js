const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const fs = require('fs');
const fileUpload = require('express-fileupload');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// GET JSON FILE
let myData = []
let funcTwo = () => {
  return new Promise((resolve, reject) => {
      setTimeout(()=> {
          resolve()
          reject(new Error('Error'))
      },3000)
  })
}

const readFile = async () => {
  try {
    const data = await fs.promises.readFile('./client/src/data/dataCats.json', 'utf8')
    let dataJson = JSON.parse(data);

    return dataJson
  }
  catch(err) {
    console.log(err)
  }
}

readFile().then(dataJson=> myData.push(dataJson))
.then(funcTwo())



// API calls
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
/*   console.log(req)
  console.log(req.body); */
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );


  myData[0].push({
  'name':req.body.name,'age':req.body.age,'gender':req.body.gender,okWithDogs:req.body.okWithDogs,okWithCats:req.body.okWithCats,okWithChild:req.body.okWithChild,url:`/uploads/${req.body.url}`
})

  let donnees2 = JSON.stringify(myData[0])
  
  fs.writeFileSync("./client/src/data/dataCats.json", donnees2)
});

app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});


if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
    
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));

