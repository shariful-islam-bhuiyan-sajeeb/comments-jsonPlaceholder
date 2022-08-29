const loadComments = () =>{
    const url = `https://jsonplaceholder.typicode.com/comments`
    fetch (url)
    .then(res => res.json())
        .then(data => displayComment(data))
}

const displayComment=(comments) =>{
    const commentContainer = document.getElementById('comment-container')
    comments.forEach(comment =>{
    const commentDiv =document.createElement('div');
     commentDiv.classList.add('comment');
     commentDiv.innerHTML = `
           <h2>Name:${comment.name} </h2>
           <h2>Email: ${comment.email} </h2>
           <h2>Id: ${comment.id}</h2>
           <p> body:${comment.body} </p>

     `; 
     commentContainer.appendChild(commentDiv);
    })
}
    

loadComments();