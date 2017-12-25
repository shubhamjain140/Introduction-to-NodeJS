module.exports = {
    getPosts(request, response) {
        response.status(200).send(request.store.posts)
    },
    addPost(request, response)  {
        let postId = request.store.posts.length
        request.store.posts.push(request.body)
        response.status(201).send({"post added with postId":postId})
    },
    updatePost(request, response) {
        request.store.posts[request.params.postId] = Object.assign(request.store.posts[request.params.postId], request.body)
        response.status(200).send({"post updated":request.store.posts[request.params.postId]})
    },
    removePost(request, response) {
        request.store.posts.splice(request.params.postId, 1)
        response.status(204).send("post deleted")
    }
  }