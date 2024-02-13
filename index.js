const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const bodyEl = document.getElementById("main-body")

for(let i=0; i< posts.length; i++)
    renderPost(posts[i], i);




function renderPost(postObject, index){
    const post = document.createElement("section");

    post.innerHTML = `
    <div class="post-header container">
        <img class="avatar" src="${postObject.avatar}" alt="poster's avatar">
        <div>
            <p class="user-name">${postObject.name}</p>
            <p class="location">${postObject.location}</p>
        </div>
    </div>
    <div class="post container">
        <img src="${postObject.post}" ondblclick="renderLike(${index}, true)" class="no-select">
    </div>
    <div class="post-footer container">
        <div class="no-select">
            <img class="icons" src="images/like_default.svg" id="like-icon-${index}" onclick="renderLike(${index}, false)">
            <img class="icons" src="images/icon-comment.png">
            <img class="icons" src="images/icon-dm.png">
        </div>
        <p><span class="bold"><span id="like-${index}">${postObject.likes}</span> likes</span></p>
        <p><span class="bold">${postObject.username} </span>${postObject.comment}</p>
    </div>
    <div class="section-end-spacing">
    </div>
    `

    bodyEl.append(post)
}

function renderLike(index, hasClickedImg){
    const likecount = document.getElementById(`like-${index}`);
    const heart = document.getElementById(`like-icon-${index}`);


        if(heart.src.includes("images/like_default.svg")){
            heart.src = "images/like_active.svg";
            posts[index].likes++;
        }else if(!hasClickedImg){

            heart.src = "images/like_default.svg";
            posts[index].likes--;
        }

    likecount.textContent = posts[index].likes;
}









// <section>
//                 <div class="post-header container">
//                     <img class="avatar" src="images/avatar-vangogh.jpg" alt="poster's avatar">
//                     <div>
//                         <p class="user-name">Vincent van Gogh</p>
//                         <p class="location">Zudert, Netherlands</p>
//                     </div>
//                 </div>
//                 <div class="post container">
//                     <img src="images/post-vangogh.jpg">
//                 </div>
//                 <div class="post-footer container">
//                     <div class="no-select">
//                         <img class="icons" src="images/icon-heart.png">
//                         <img class="icons" src="images/icon-comment.png">
//                         <img class="icons" src="images/icon-dm.png">
//                     </div>
//                         <p><span class="bold">21,492 likes</span></p>
//                         <p><span class="bold">vincey1853 </span>just took a few mushrooms lol</p>
//                 </div>
//             </section>