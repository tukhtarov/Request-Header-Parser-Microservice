const express = require('express');
const app = express();

app.get('/api/whoami', (req, res) => {
    console.log(req.ip);
    console.log(req.get('Accept-Language'));
    res.status(200);
    res.json({
        "ipaddress": req.ip,
        "language": req.get('Accept-Language'),
        "software": req.get('User-Agent'),
    });
});

app.listen(3000);