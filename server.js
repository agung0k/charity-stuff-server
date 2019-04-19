var express = require('express'), app = express(), port = process.env.port || 3000;
app.listen(port);
console.log(`server started on port ${port}`);