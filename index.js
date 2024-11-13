require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const data = {
    "login": "mekeshavchaudhary",
    "id": 89526270,
    "node_id": "MDQ6VXNlcjg5NTI2Mjcw",
    "avatar_url": "https://avatars.githubusercontent.com/u/89526270?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/mekeshavchaudhary",
    "html_url": "https://github.com/mekeshavchaudhary",
    "followers_url": "https://api.github.com/users/mekeshavchaudhary/followers",
    "following_url": "https://api.github.com/users/mekeshavchaudhary/following{/other_user}",
    "gists_url": "https://api.github.com/users/mekeshavchaudhary/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/mekeshavchaudhary/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/mekeshavchaudhary/subscriptions",
    "organizations_url": "https://api.github.com/users/mekeshavchaudhary/orgs",
    "repos_url": "https://api.github.com/users/mekeshavchaudhary/repos",
    "events_url": "https://api.github.com/users/mekeshavchaudhary/events{/privacy}",
    "received_events_url": "https://api.github.com/users/mekeshavchaudhary/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Keshav Chaudhary",
    "company": "Vennverse",
    "blog": "www.linkedin.com/in/mekeshavchaudhary/",
    "location": "New Delhi",
    "email": null,
    "hireable": null,
    "bio": "Aspiring CCVT Engineer | Seeking Entry-level Programming | Online Drawing(3D & 2D) | Python(Basic Level) | Java",
    "twitter_username": null,
    "public_repos": 15,
    "public_gists": 0,
    "followers": 7,
    "following": 3,
    "created_at": "2021-08-25T12:52:21Z",
    "updated_at": "2024-11-10T17:53:50Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram', (req, res) => {
    res.send('keshavischaudhary')
  })

  app.get("/login", (req, res) =>{
    res.send("<h1>Login Here</h1>")

})

app.get("/data", (req, res) =>{
    res.json(data);

})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})