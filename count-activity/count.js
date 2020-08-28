const { countLikesAllPosts, countCommentsAllPosts, countRepostsAllPosts } = require('./countActivity');

async function countAll(postIds, token, groupId) {
  const likes = await countLikesAllPosts(postIds, token, groupId)
  const comments = await countCommentsAllPosts(postIds, token, groupId)
  const reposts = await countRepostsAllPosts(postIds, token, groupId)
  return { likes, comments, reposts };
}

module.exports = { countAll }