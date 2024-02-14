const express = require('express');
const path = require('path');
const app = express();
const PORT = '2000';
const mysite = 'localhost';
const mongoose = require('mongoose');
const Contact = require('./schema/contact');
const { constants } = require('buffer');
const db = "mongodb+srv://sattarovelaman06:elaman0607@cluster.c1a7xdx.mongodb.net/?retryWrites=true&w=majority"
const CreatPath = (page) => path.resolve(__dirname,'server', `${page}.ejs`);

mongoose.connect(db).then(()=>{
    console.log('mangoga ulandi')
}).catch((err)=>{
    console.log(err);
});

app.use(express.static('style'));
app.use(express.static('img'));
app.use(express.urlencoded({ extended: true }));


app.listen(PORT,mysite,(error)=>{
    error ? console.log(error): console.log(`localhost:${PORT}`);
});

app.get('/',(req, res)=>{
    res.render(CreatPath('index'));
});

app.get('/home',(req, res)=>{
    res.render(CreatPath('home'));
});

app.get('/about',(req, res)=>{
    res.render(CreatPath('about'));
});
app.get('/contact',(req, res)=>{
    res.render(CreatPath('contact'));
});
app.post('/contact',(req, res)=>{
    const contact = new Contact({text:req.body.message, title:req.body.name, email:req.body.email});
    contact.save()
    .then((result)=>{
        console.log(result);
    })
    .catch((err)=>{
        console.error(err);
    });
    res.render(CreatPath('index'));
});
app.get('/login',(req, res)=>{
    res.render(CreatPath('Memberslogin'),{base});
});

app.use((req, res)=>{
    res.status(404).render(CreatPath('error'));
});

//     const server =  http.createServer((req,res)=>{
//     console.log('Server kirding ?');
//     res.setHeader('Content-Type', 'text/html');
//     let basePath = '';
//     switch(req.url){
//         case '/':
//             basePath = CreatPath('index');
//             break;
//         case '/contact':
//             basePath = CreatPath('contact');
//             break;
//         case '/about':
//             basePath = CreatPath('about');
//             break;
//         default:
//             basePath =  CreatPath('error');
//             res.statusCode = 404;
//     }
//     fs.readFile(basePath,(error,date)=>{
//         res.write(date);
//         res.end();
//     })
// });
// server.listen(1000, 'localhost',(error)=>{
//     error ? console.log(error): console.log('Localhost 3000');
// });
// ipconfig
