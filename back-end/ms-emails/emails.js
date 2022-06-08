const express = require("express")
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');
const cote = require('cote')
//Init App
const app = express()
const PORT = 3000
const Sib = require('sib-api-v3-sdk')
app.use(cors({origin: "*"}));
require('dotenv').config()
// send in blue configuration
const client = Sib.ApiClient.instance
const apiKey = client.authentications['api-key']
apiKey.apiKey = process.env.API_KEY
const pug = require('pug');
// Mongoose connection
const mongoose = require('mongoose');
mongoose.connect('');
const db = mongoose.connection;
app.use(bodyParser.json());


app.listen(PORT, () => {
  console.log("The server started on port 3000 yaay");
});

//-------------------------------------Routes---------------------------------------
//Home Route Get route to test if it works
app.get("/", (req, res) => {
  console.log('it works');
});
//Post Route to send emails by send in blue
app.post("/email", (req, res) => {
  let cpt = 1;
  cpt = cpt + 1;
  console.log("request came");
  let email = req.body;
  sendMail(email, info => {
    console.log(`The mail has beed sent `);
    res.send(info);
  });

  var url = "";

  MongoClient.connect(url, cpt, function (err, db) {
    const emailsdata = {
      compteur: cpt,
      day: new Date(),
    };
    if (err) throw err;
    var dbo = db.db("emailsApp");

    dbo.collection("emails").insertOne(emailsdata, function (err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });


});

//the function that will use send in blue @param email response from email post route
async function sendMail(email, callback, content) {
  // create reusable transporter 
  //CREATE TRANSACTIONAL API INSTANCE
  const transactionalEmailApi = new Sib.TransactionalEmailsApi()
  const sender = {
    email: 'kaoutherassess@outlook.com',
  }
  let recivers = [{
    email: email.email,
  }, ]

  type = email.content
  const template1 = pug.render('p Hello \n this is template1');
  const template2 = pug.render('p Hello \n this is template2');
  if (type === 'Template1') {
    let content = template1
  } else {
    content = template2
  }
  transactionalEmailApi.sendTransacEmail({

      subject: email.subject,
      sender,
      to: recivers,
      textContent: content,

    })
    .then(console.log)
    .catch(console.log)

}