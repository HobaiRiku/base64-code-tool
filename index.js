const app = require('express')();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

const port = process.argv[2] ? process.argv[2] : 2002

app.get('*', (req, res, next) => {
    res.sendFile(`${__dirname}/index.html`)
})

app.post('/convert', (req, res, next) => {
    let data = req.body.data;
    const to = req.query.to;
    const from = req.query.from;
    const fromOption = ['base64', 'hex'].includes(from) ? from : undefined
    if (fromOption === 'hex') {
        data = data.replace(/\s+/g, '').toLocaleLowerCase();
        data = data.replace(/[\r\n]/g, '');
        if (!/^[0-9a-f]*$/.test(data)) {
            res.status(401)
            return res.json({message: 'Wrong format data from hex!'})

        }
    }
    const toOption = ['base64', 'hex'].includes(to) ? to : undefined
    res.send(JSON.stringify({result: Buffer.from(data, fromOption).toString(toOption)}))
})

app.listen(port, () => {
    console.log(new Date() + `app is listen at http://localhost:${port}`)
})