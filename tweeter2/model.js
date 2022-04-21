const Tweeter = function () {
  let postIdCounter = 2;
  let commentIdCounter = 6;
  let postIdCounterPlus = postIdCounter + 1;
  const _posts = [
    {
      text: "First post!",
      id: "p1",
      comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
        { id: "c3", text: "Third comment on first post!!!" },
      ],
    },
    {
      text: "Aw man, I wanted to be first",
      id: "p2",
      comments: [
        {
          id: "c4",
          text: "Don't wory second poster, you'll be first one day.",
        },
        { id: "c5", text: "Yeah, believe in yourself!" },
        { id: "c6", text: "Haha second place what a joke." },
      ],
    },
  ];

  const getPosts = function () {
    //console.log(
    return _posts;
  };

  const addPost = function (texts) {
    postIdCounter = postIdCounter + 1;
    //console.log(
    _posts.push({ text: texts, id: "p" + postIdCounterPlus, comments: [] });
  };

  const removePost = function (postId) {
    let index = 0;
    for (let post of _posts) {
      if (post.id === postId) {
        _posts.splice(index, 1);
        //   postIdCounter = postIdCounter - 1
        console.log(postIdCounter);
      }
      index++;
    }
  };

  const addComment = function (texts, postID) {
    commentIdCounter++;
    for (let post of _posts) {
      if (post.id === postID) {
        post.comments.push({ id: "c" + commentIdCounter, text: texts });
      }
    }
  };

  const removeComment = function (postID, commentID) {
   
    for (let post of _posts) {
      if (post.id === postID) {
        for (let i = 0; i < post.comments.length; i++) {
          if (post.comments[i].id === commentID) {
            post.comments.splice(i, 1);
          }
        }
      }
      
    }
  };

  return {
    getPosts: getPosts,
    addPost: addPost,
    removePost: removePost,
    addComment: addComment,
    removeComment: removeComment,
  };
};

const tweeter = Tweeter();
tweeter.addPost("This is my own post!");
console.log(tweeter.getPosts());

tweeter.removePost("p1");
console.log(tweeter.getPosts());

tweeter.addComment("example", "p3");
tweeter.addComment("another example", "p2");
console.log(tweeter.getPosts());

tweeter.removeComment("p2", "c6");
console.log(tweeter.getPosts());
