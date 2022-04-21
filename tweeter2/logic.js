const Tweeter = function () {
  let postIdCounter = 2;
  let commentIdCounter = 6;

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

  const getPosts = () => _posts;

  const addPost = function (texts) {
    postIdCounter = postIdCounter + 1;
    console.log(postIdCounter);
    _posts.push({ text: texts, id: "p" + postIdCounter, comments: [] });
  };

  const removePost = function (postId) {
    for (let i = 0; i < _posts.length; i++) {
      if (_posts[i].id === postId) {
        _posts.splice(i, 1);
      }
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
    getPosts,
    addPost,
    removePost,
    addComment,
    removeComment,
  };
};
