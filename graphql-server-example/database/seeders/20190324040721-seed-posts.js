'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [
      {
        authorId: 1,
        title: 'Why My New Blog Isn’t on Medium',
        content: 'I’ve started a new coding blog in December: Overreacted.'
      },
      {
        authorId: 1,
        title: 'Making Sense of React Hooks',
        content: 'This article is also available on the DEV community without the paywall'
      },
      {
        authorId: 1,
        title: 'You Might Not Need Redux',
        content: 'This article is also available on the DEV community without the paywall'
      },
      {
        authorId: 2,
        title: 'Software Roles and Titles',
        content: 'Before I dig into this too much, I’d like to emphasize that every team is unique, and responsibilities tend to float or be shared between different members of the team.'
      },
      {
        authorId: 3,
        title: 'Reflections on my first 1,000 hours learning to code',
        content: 'Fast forward to the present and I’m fortunate enough to be considering various job offers, whilst curiously anticipating the start of my next journey.'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
