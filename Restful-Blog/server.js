const express = require('express')
const logger = require('morgan')
const errHandler = require('errorHandler')
const bodyParser = require('body-parser')
const routes = require('./routes')
const app = express()
let store = {
    posts: [
      {name: 'Top 10 ES6 Features every MEAN Developer must know',
      url: 'https://webapplog.com/es6',
      text: 'This essay will give you a quick introduction to ES6. If you donâ€™t know what is ES6, itâ€™s a new JavaScript implementation.',
      comments: [
        {text: 'Cruelâ€¦..var { house, mouse} = No type optimization at all'},
        {text: 'I think youâ€™re undervaluing the benefit of â€˜letâ€™ and â€˜constâ€™.'},
        {text: '(p1,p2)=>{ â€¦ } ,i understand this ,thank you !'} 
      ]
    }
  ]
  }
app.use(logger('dev'))
app.use(errHandler())
app.use(bodyParser.json())
app.use((request,response,next)=>{
    request.store = store
    next()
})
app.get('/posts', routes.posts.getPosts)
app.post('/posts', routes.posts.addPost)
app.put('/posts/:postId', routes.posts.updatePost)
app.delete('/posts/:postId', routes.posts.removePost)
app.get('/posts/:postId/comments', routes.comments.getComments)
app.post('/posts/:postId/comments', routes.comments.addComment)
app.put('/posts/:postId/comments/:commentId', routes.comments.updateComment)
app.delete('/posts/:postId/comments/:commentId', routes.comments.removeComment)

app.listen(3000)