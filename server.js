const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const fs = require('fs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

  fs.readFile('./client/src/data/dataCats.json', (err, data) => {
    if (err) throw err;
    let dataCats = JSON.parse(data);
    console.log(dataCats); 
  });
  
  console.log("données -> "+donnees)

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

/* Read first*/



/* let student = { 
  name: 'Mike',
  age: 23, 
  gender: 'Male',
  department: 'English',
  car: 'Honda' 
};

let data59 = JSON.stringify(student, null, 2);

fs.writeFile('student-3.json', data59, (err) => {
  if (err) throw err;
  console.log('Data written to file');
});

console.log('This is after the write call'); */