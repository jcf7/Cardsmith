// const path = require('path');
const express = require('express');
const app = express();
const mongoose = require("mongoose")
const CardModel = require("./models/Cards");

// const bodyParser = require('body-parser')

const cors = require('cors'); 
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://jcf7:solodolo@cluster0.jfeye.mongodb.net/merntutorial?retryWrites=true&w=majority"
);

// app.get('/', (req, res) => {
//  res.status(200).send('Hello World!');
// });


app.get("/getCards", (req, res) => {
  CardModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createCard", async (req, res) => {
  const card = req.body;
  const newCard = new CardModel(card);
  await newCard.save();

  res.json(card);
});







//handles parsing request body
// app.use(express.urlencoded({ extended: true }));

//handles request for static files
// app.use(express.static(path.resolve(__dirname, "../src")));

// const mockResponse = {
//   foo: 'bar',
//   bar: 'foo'
// };

// app.get('/api', (req, res) => {
//   res.send(mockResponse);
// });


// app.get('/', (req, res) => {
//  res.status(200).send('Hello World!');
// });


// app.get("/details", function (req, res) {
    
//   fcDetails.find((err, data) => {
//       if (err) {
//           res.status(501).send(err)
//       }
//       else {
//           res.status(200).send(data)
//       }
//   })

// })



//catches any unknown routes 
// app.use('*', (req, res) => res.status(404).send('This is not the page you\'re looking for...'));

// //error handler
// app.use((err, req, res, next) => {
//   const defaultErr = {
//     log: 'Express error handler caught unknown middleware error',
//     status: 500,
//     message: { err: 'An error occurred' },
//   };
//   const errorObj = Object.assign({}, defaultErr, err);
//   console.log(errorObj.log);
//   return res.status(errorObj.status).json(errorObj.message);
// });


//listening for port and starting server 
app.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}...`);
});

