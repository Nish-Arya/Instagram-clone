'use strict';

function r(o) {
  o.userId = 1;
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [
      r({ imageUrl: '/images/tucker-1.png', caption: 'I\'m thinking I might need a treat' }),
      r({ imageUrl: '/images/little-cat.png', caption: 'Spell CUTE below!' }),
      r({ imageUrl: '/images/shyla-1.png', caption: 'Hi there...' }),
      r({ imageUrl: '/images/self-care.png', caption: 'Time for some self-pampering' }),
      r({ imageUrl: '/images/tree-cat.png', caption: 'Meow!' }),
      r({ imageUrl: '/images/nap-dog.png', caption: 'Quarantine got me napping like...' }),
      r({ imageUrl: '/images/tucker-2.png', caption: 'This is my passport shot.' }),
      r({ imageUrl: '/images/tucker/1.png', caption: 'Good morning hoomans!' }),
      r({ imageUrl: '/images/hello-shiba.png', caption: 'I woke up like this!!!' }),
      r({ imageUrl: '/images/bengal-simba.png', caption: 'You heard me...' }),
      r({ imageUrl: '/images/jake-1.png', caption: 'Jakeyyy' }),
      r({ imageUrl: '/images/attitude-dog.png', caption: 'My attitude...!' }),
      r({ imageUrl: '/images/baby-leon.png', caption: 'Baby Leon.' }),
      r({ imageUrl: '/images/feeling-blue.png', caption: 'Feeling the monday blues...' }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts');
  }
};
