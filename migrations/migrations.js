//import { Sequelize, DataTypes } from 'sequelize';
'use strict';
/** @type {import('sequelize-cli').Migration} */


module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `CREATE TABLE IF NOT EXISTS Company (
        company_id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NULL,
        address VARCHAR(255) NULL,
        city VARCHAR(255) NULL,
        phone_number VARCHAR(45) NULL,
        email VARCHAR(255) NULL,
        website VARCHAR(255) NULL,
        logo VARCHAR(255) NULL,
        PRIMARY KEY (company_id))`
    )

    await queryInterface.sequelize.query(
      `
      CREATE TABLE IF NOT EXISTS User (
        \`user_id\` INT NOT NULL AUTO_INCREMENT,
        \`first_name\` VARCHAR(255) NULL,
        \`last_name\` VARCHAR(255) NULL,
        \`email\` VARCHAR(255) NULL,
        \`password\` VARCHAR(255) NULL,
        \`phone_number\` VARCHAR(45) NULL,
        \`registration_date\` DATE NULL,
        \`role\` VARCHAR(45) NULL,
        \`city\` VARCHAR(255) NULL,
        \`company_id\` INT NULL,
        PRIMARY KEY (\`user_id\`),
        INDEX \`fk_company_id_idx\` (\`company_id\` ASC) VISIBLE,
          FOREIGN KEY (\`company_id\`)
          REFERENCES \`Company\` (\`company_id\`)
          ON DELETE NO ACTION
          ON UPDATE CASCADE)
      ENGINE = InnoDB`
    )



    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS \`database_development\`.\`RealEstate\` (
        \`property_id\` INT NOT NULL AUTO_INCREMENT,
        \`user_id\` INT NOT NULL ,
        \`property_type\` VARCHAR(45) NULL,
        \`address\` VARCHAR(255) NULL,
        \`price\` INT NULL,
        \`description\` TEXT NULL,
        \`city\` VARCHAR(255) NULL,
        PRIMARY KEY (\`property_id\`),
        INDEX \`fk_user_id_idx\` (\`user_id\` ASC) VISIBLE,
        CONSTRAINT \`fk_user_id\`
          FOREIGN KEY (\`user_id\`)
          REFERENCES \`database_development\`.\`User\` (\`user_id\`)
          ON DELETE NO ACTION
          ON UPDATE CASCADE)
      ENGINE = InnoDB`
    )

    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS \`database_development\`.\`Favourite\` (
        \`favourite_id\` INT NOT NULL AUTO_INCREMENT,
        \`property_id\` INT NOT NULL,
        \`user_id\` INT NOT NULL,
        \`notes\` TEXT NULL,
        PRIMARY KEY (\`favourite_id\`),
        INDEX \`fk_user1_id_idx\` (\`user_id\` ASC) VISIBLE,
        INDEX \`fk_property_id_idx\` (\`property_id\` ASC) VISIBLE,
        CONSTRAINT \`fk_user1_id\`
          FOREIGN KEY (\`user_id\`)
          REFERENCES \`database_development\`.\`User\` (\`user_id\`)
          ON DELETE NO ACTION
          ON UPDATE CASCADE,
        CONSTRAINT \`fk_property_id\`
          FOREIGN KEY (\`property_id\`)
          REFERENCES \`database_development\`.\`RealEstate\` (\`property_id\`)
          ON DELETE NO ACTION
          ON UPDATE NO ACTION)
      ENGINE = InnoDB`
    )

    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS \`database_development\`.\`Comments\` (
        \`comment_id\` INT NOT NULL AUTO_INCREMENT,
        \`company_id\` INT NOT NULL,
        \`user_id\` INT NOT NULL,
        \`review\` TEXT NULL,
        PRIMARY KEY (\`comment_id\`),
        INDEX \`fk_company1_id_idx\` (\`company_id\` ASC) VISIBLE,
        INDEX \`fk_user2_id_idx\` (\`user_id\` ASC) VISIBLE,
        CONSTRAINT \`fk_company1_id\`
          FOREIGN KEY (\`company_id\`)
          REFERENCES \`database_development\`.\`Company\` (\`company_id\`)
          ON DELETE NO ACTION
          ON UPDATE CASCADE,
        CONSTRAINT \`fk_user2_id\`
          FOREIGN KEY (\`user_id\`)
          REFERENCES \`database_development\`.\`User\` (\`user_id\`)
          ON DELETE NO ACTION
          ON UPDATE CASCADE)
      ENGINE = InnoDB`
    )
    


  }
}
