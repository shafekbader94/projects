const Renderer = function () {
  const renderPosts = function (posts) {
    $("#posts").empty();
    for (let post of posts) {
      let adding = `<div  class="post post-text" id=${post.id} > <h2 > ${post.text} </h2> </div>`;
      $("#posts").append(adding);

      for (let i = 0; i < post.comments.length; i++) {
        let comments = post.comments[i].text;
        let addingComment =`<div> <span class="delete-comment">X</span> <spanclass="comments" id=${post.comments[i].id}>   ${comments} </span> </div>`; //`<h4 class="comments" id=${post.comments[i].id}> <span class="delete-comment">X</span> ${comments} </h4> `;
        $(`#${post.id}`).append(addingComment);
      }
    }
  };

  return {
    renderPosts,
  };
};
