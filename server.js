const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// GET JSON FILE
let myData = []
let funcTwo = () => {
  return new Promise((resolve, reject) => {
      setTimeout(()=> {
          resolve(console.log(myData))
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
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );

  let donnees = JSON.stringify(req.body.post)

  myData[0].push({  "name": donnees,
age:'2ans', gender : "Mâle", okWithDogs: true, okWithCats: false, okWithChild: true, url: "https://scontent.fcdg3-1.fna.fbcdn.net/v/t1.0-9/151137177_10221074833918573_8564418526752973489_n.jpg?_nc_cat=103&ccb=3&_nc_sid=730e14&_nc_ohc=Zysijt02bucAX-fUDZm&_nc_ht=scontent.fcdg3-1.fna&oh=d41d08eed71522e951ec1c84a0d0f505&oe=60587388"
})

  console.log(myData)
  let donnees2 = JSON.stringify(myData)
  fs.writeFileSync("test.json", donnees2)
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

