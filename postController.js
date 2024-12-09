// Exporting using the ES modules
const post = [
  { id: 1, title: "Post one" },
  { id: 2, title: "Post two" },
];

const getPosts = () => post;

export const getPostsLength = () => post.length;

export default getPosts;
