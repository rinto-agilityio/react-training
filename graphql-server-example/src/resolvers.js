const resolvers = {
  Query: {
    async allAuthors (root, args, { models }) {
      return models.Author.findAll()
    },

    async author (root, { id }, { models }) {
      return models.Author.findByPk(id)
    },

    async allPosts (root, args, { models }) {
      return models.Post.findAll()
    },

    async post (root, { id }, { models }) {
      return models.Post.findByPk(id)
    }
  },

  Mutation: {
    async createAuthor (root, { name, avatar, description }, { models }) {
      return models.Author.create({
        name,
        avatar,
        description,
      })
    },

    async deleteAuthor (root, { id }, { models }) {
      return models.Author.destroy({
        where: { id }
      })
      .then(() => ({ id }))
      .catch(err => console.log(err))
    },

    async createPost (root, { authorId, title, content }, { models }) {
      return models.Post.create({ authorId, title, content })
    },

    async deletePost (root, { id }, { models }) {
      return models.Post.destroy({
        where: { id }
      })
      .then(() => ({ id }))
      .catch(err => console.log(err))
    },
  },

  Author: {
    async posts(author) {
      return author.getPosts()
    }
  },

  Post: {
    async author(post) {
      return post.getAuthor()
    }
  }
}

module.exports = resolvers