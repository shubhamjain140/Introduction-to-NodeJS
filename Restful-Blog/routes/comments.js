module.exports = {
    getComments(request, response) {
        response.status(200).send(request.store.posts[request.params.postId].comments)
    }, 
    addComment(request, response) {
        let commentId = request.store.posts[request.params.postId].comments.length
        request.store.posts[request.params.postId].comments.push(request.body)
        response.status(201).send({'comment added with id':commentId})
    },
    updateComment(request, response) {
        request.store.posts[request.params.postId].comments[request.params.commentId] = Object.assign(request.store.posts[request.params.postId].comments[request.params.commentId],request.body)
        response.status(200).send({'comment updated':request.store.posts[request.params.postId].comments[request.params.commentId]})
    },
    removeComment(request, response) {
        request.store.posts[request.params.postId].comments.splice(request.params.commentId,1)
        response.status(204).send('comment deleted')
    }  
  }