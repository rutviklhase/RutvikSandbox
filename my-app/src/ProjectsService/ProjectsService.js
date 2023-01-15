import ('node-fetch')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors');
const express = require('express');
const { default: axios } = require('axios');
const app = express()
app.use(cors());
const port = 3001

function getProjectList(){

    axios.get('https://gh-pinned-repos.egoist.dev/?username=rutviklhase')
    .then(function (response) {
        // console.log(response);
        data = response.data;
        return data;
      });
    
}




app.get('/projects', async (req, res) => {
    var ProjectList = await getProjectList();
    for(var i in ProjectList )
    {
        console.log("sanity check");
    }
    // console.log("sanity check");
    console.log(ProjectList)
  res.send(ProjectList);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})