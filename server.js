const app = require('./app');

const port = 8821;
const server = app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
  
  

