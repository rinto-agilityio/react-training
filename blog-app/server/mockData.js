module.exports = {
  authors: [
    {
      "id": 1,
      "name": "Account1",
      "email": "rin.to@gmail.com",
      "posts": []
    },
    {
      "id": 2,
      "name": "Account2",
      "email": "huy.nguyenvan@gmail.com",
      "posts": []
    }
  ],
  posts: [
    {
      "id": "1",
      "title": "Hello world",
      "content": "this is post 1",
      "author": {
        "id": 1,
        "name": "Account1",
        "email": "rin.to@gmail.com"
      }
    },
    {
      "id": "2",
      "title": "Hello world 2",
      "content": "this is post 2",
      "author": {
        "id": 2,
        "name": "Account2",
        "email": "huy.nguyenvan@gmail.com"
      }
    }
  ]
};
