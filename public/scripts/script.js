const res = require("express/lib/response");

document.addEventListener("DOMContentLoaded",updatePosts())

function updatePosts(){
    fetch("http://localhost:1000/api/all").then((res)=>{
        
     return res.json()
  }).then((lista)=>{
     
     let postElements = "";
     let posts = JSON.parse(lista);
     posts.forEach((post)=>{
          let postElement = `<div id=${post.id} class="card">
          <header>
              <h3>${post.title}:</h3>
          </header>
          <div>
              <div>${post.description}</div>
          </div>
     </div>`
     postElements += postElement;
     })
      document.getElementById("posts").innerHTML = postElements;
     
    })}
    



  function newPost(){
  let title = document.getElementById("title").value;
  let description =document.getElementById("desc").value;
  let post= {title,description};
  const options = {method:"POST",
                   headers: new Headers({'content-type':'application/json'}),
                   body: JSON.stringify(post)
}
console.log(post)
  fetch("http://localhost:1000/api/new",options).then((res)=>{
  
  updatePosts();
  document.getElementById("title").value = "";
  document.getElementById("desc").value = "";

  })
}

function postDelete(){
  fetch("http://localhost:1000/api/del",{method:"DELETE"}).then(()=>{
    
    document.getElementById("title").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("posts").innerHTML = ""
    updatePosts();
    
  })
}