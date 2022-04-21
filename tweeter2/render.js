const Renderer = function () {
  const renderPosts = function (posts) {
    $("#posts").empty();
    for (let post of posts) {
      let adding = `<div  class="post post-text" id=${post.id} > <h2 > ${post.text} </h2>
      <span>
      <input type="text" placeholder="Any comments..?" id="input">
       <button class="comments ">Comment</button> 
       <span class="delete">Delete Post</span>
       </span>
       </div>`;
      $("#posts").append(adding);

      for (let i = 0; i < post.comments.length; i++) {
        let comments = post.comments[i].text;
        let addingComment =`<div>  <span  id=${post.comments[i].id}>   ${comments} </span> <span class="delete-comment">X</span>  </div>`; 
        $(`#${post.id}`).append(addingComment);
      }
    }
  };
  return {
    renderPosts
 
  };
};
