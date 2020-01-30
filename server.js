//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use((req, res, next) => {
  if (req.header('x-forwarded-proto') !== 'https') {
    res.redirect(`https://${req.header('host')}${req.url}`)
  } else {
    next();
  }
});
app.use(express.static('./dist/to-the-top-ng'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname,'/dist/to-the-top-ng/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);