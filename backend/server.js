import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send('server is ready');
});
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id:1,
            title:'jokes',
            content:'this is first joke'
        },
        {
            id:2,
            title:'jokes',
            content:'this is second joke'
        },
        {
            id:3,
            title:'jokes',
            content:"this is third joke"
        },
        {
            id:4,
            title:'jokes',
            content:'this is fourth joke'
        },
    ];
    res.send(jokes);
});



const port = process.env.PORT || 3000;

app.listen(port,() =>{
    console.log(`server at http://localhost:${port}`);
} 
);