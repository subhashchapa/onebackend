const express = require('express')   //same as "import express from "express" "
require('dotenv').config() 
const app = express()   // we are storing in express variable
const port = 4000       //virtual port free

const gitdata={
  "login": "subhashchapa",
  "id": 90249856,
  "node_id": "MDQ6VXNlcjkwMjQ5ODU2",
  "avatar_url": "https://avatars.githubusercontent.com/u/90249856?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/subhashchapa",
  "html_url": "https://github.com/subhashchapa",
  "followers_url": "https://api.github.com/users/subhashchapa/followers",
  "following_url": "https://api.github.com/users/subhashchapa/following{/other_user}",
  "gists_url": "https://api.github.com/users/subhashchapa/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/subhashchapa/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/subhashchapa/subscriptions",
  "organizations_url": "https://api.github.com/users/subhashchapa/orgs",
  "repos_url": "https://api.github.com/users/subhashchapa/repos",
  "events_url": "https://api.github.com/users/subhashchapa/events{/privacy}",
  "received_events_url": "https://api.github.com/users/subhashchapa/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 6,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2021-09-07T09:30:55Z",
  "updated_at": "2023-02-01T19:13:26Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/subhash', (req, res) => {
  res.send('nenu subhash ni em kavalo cheppu')
})
app.get('/iitg', (req, res) => {
  res.send('<h1> nuvvu IITG lo vunnavu </h1>')
})
app.get('/google', (req, res) => {
  res.send('<p><i>nuvvu google lo vunnavu!</i></p>')
})
app.get('/gitdata', (req,res)=>{
    res.json(gitdata)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
