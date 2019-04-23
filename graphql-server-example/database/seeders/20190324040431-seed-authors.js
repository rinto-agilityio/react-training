'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Authors', [
      {
        name: 'Dan Abramov',
        description: 'Working on @reactjs. Co-author of Redux and Create React App. Building tools for humans.',
        avatar: 'https://miro.medium.com/fit/c/240/240/1*xxVEfOOAmIKHWOUloRKLhw.jpeg'
      },
      {
        name: 'Eric Elliott',
        description: 'Make some magic. #JavaScript',
        avatar: 'https://miro.medium.com/fit/c/240/240/0*WgY9B-Lm4DnCEHlO.jpeg'
      },
      {
        name: 'Brandon Morelli',
        description: 'Creator of @codeburstio — Frequently posting web development tutorials & articles.',
        avatar: 'https://cdn-images-1.medium.com/fit/c/200/200/0*qH2Wle1736qoCJj3.'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Authors', null, {});
  }
};
