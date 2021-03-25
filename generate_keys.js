const NodeRSA = require('node-rsa');
const fs = require('fs');

const key_gen = new NodeRSA({ b: 2048 });

const public = key_gen.exportKey('public');
const private = key_gen.exportKey('private');

fs.writeFile('./keys/public_key.txt', public, function (error) {

  if (error) {
    console.log("Error while saving archive!\n", error);
  }

  console.log("Archive successfully saved!");
});


fs.writeFile('./keys/private_key.txt', private, function (error) {

  if (error) {
    console.log("Error while saving archive!\n", error);
  }

  console.log("Archive successfully saved!");
});
