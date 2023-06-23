'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Company',[{
      company_id:1,
      name:'PiratEstate',
      address:'St Patrick AV 45',
      city:'LosAngeles',
      phone_number:'012345678',
      email:'pir@gmail.com',
      website:'httppirEst.org',
      logo:'imgsourcepath',
      
    }], {});

    await queryInterface.bulkInsert('User',[{
      user_id:1,
      first_name:'Russel',
      last_name:'Crowe',
      email:'CroweRussl@',
      password:'989767545323',
      phone_number:'987632111',
      registration_date:'1999-01-01',
      role:'agent',
      city:'Kiyv',
      company_id:1,
      
    }], {});


    await queryInterface.bulkInsert('RealEstate',[{
      property_id:1,
      user_id:1,
      property_type:'Townhouse',
      address:'624 N Rexford Dr',
      price:21000000,
      city:'LosAngeles',
      description:'This week we are in Beverly Hills, California touring the most expensive and exquisite home in the history of San Fernando Valley! ',
    }], {});

    await queryInterface.bulkInsert('Favourite',[{
      favourite_id:1,
      property_id:1,
      user_id:1,
      notes:'Ocean view + pool, big dining room ',
    }], {});

    await queryInterface.bulkInsert('Comments',[{
      comment_id:1,
      company_id:1,
      user_id:1,
      review:'PiratEstate is one of the most coolest companies i had ever worked with',
    }], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Company', null, {});
    await queryInterface.bulkDelete('User', null, {});
    await queryInterface.bulkDelete('RealEstate', null, {});
    await queryInterface.bulkDelete('Favourite', null, {});
    await queryInterface.bulkDelete('Comments', null, {});

  }
};
