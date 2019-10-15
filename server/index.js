const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:admin@localhost:5432/dojo');
process.env.SECRET_KEY = 'secret'
app.use(bodyParser.json());
app.use(cors());

sequelize
.authenticate()
.then(() => {
  console.log('connectd to PostgreSQL');
})
.catch(err => {
  console.error('error connection PostgreSQL:', err);
});

const NinjaTable = sequelize.define('userAccount', {
    name: {type: Sequelize.STRING},
    email: {type: Sequelize.STRING},
    password: {type: Sequelize.STRING}
  });

// NinjaTable.sync({force: false}).then(() => {
//     console.log('Table created!')
//   });

// app.get('/data', function(req,res){
//   NinjaTable.findAll().then(data => {
//     console.log(data);
//     res.send(data);
//   })
// })

app.post('/data', function(req,res){
NinjaTable.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
})
NinjaTable.findOne({
  where: {
    email:req.body.email
  }
}).then(Data => {
  if(!Data){
    bcrypt.hashSync(req.body.password, 10, (err, hash) =>{
      req.body.password= hash
      NinjaTable.query({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }) .then(Data => {
      res.json({ status: Data.email + 'registered'})
    })
    .catch(err => {
      res.send('error: ' + err)
    })
    })
  } else {
    res.json({ error: 'user already exists'})
  }
})
.then(data => {
  console.log('Data success!');
  
});
})

app.get('/data', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  NinjaTable.findOne({
    where: {
      id: decoded.id
    }
  })
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

app.listen(3210, ()=>{
  console.log('Server @port 3210 running!')
})