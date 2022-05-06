module.exports = {
    
    posts: [],
    gettAll(){
      return this.posts;
    },

    newPost(title,description){
     
        this.posts.push({id:generationId(),title,description})
    },

   deletePost(){
       return this.posts = [];
        
   }
}

function generationId(){
    return Math.random().toString(36).substring(2,9)
}