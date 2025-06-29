document.addEventListener("DOMContentLoaded", main);
//  call back function
function main() {
  displayPosts();
  addNewPostListener();
}
//  method
function displayPosts() {
  fetch("http://localhost:3000/posts")
    .then(res => res.json())
    .then(posts => {
      const postList = document.getElementById("posts-list");
        // clear list first before new entry
        posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.textContent = post.title;
        postElement.addEventListener("click", () => handlePostClick(post.id));    // hoisting of function
        postList.appendChild(postElement);
      });
    });

}
   