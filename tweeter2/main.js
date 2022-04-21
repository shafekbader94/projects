const tweeter = Tweeter();
const renderer = Renderer();

renderer.renderPosts(tweeter.getPosts());

const post = function () {
  let inputValue = document.getElementById("input").value;
  tweeter.addPost(inputValue);
  renderer.renderPosts(tweeter.getPosts());
  document.getElementById("input").value = "";
};

$("#posts").on("click", ".delete", function () {
  const removingPost = $(this).closest(".post").attr("id");
  tweeter.removePost(removingPost);
  renderer.renderPosts(tweeter.getPosts());
});

$("#posts").on("click", ".comments", function () {
  const addingComment = $(this).closest(".post").find("#input").val();
  const pstID = $(this).closest(".post").attr("id");

  tweeter.addComment(addingComment, pstID);
  renderer.renderPosts(tweeter.getPosts());
});

$("#posts").on("click", ".delete-comment", function () {
  const postID = $(this).closest(".post").attr("id");

  const commentID = $(this).closest("div").find("span").attr("id");

  tweeter.removeComment(postID, commentID);
  renderer.renderPosts(tweeter.getPosts());
});
