const mongoose = require('mongoose');
const Owner = require('./owner'); 
require("dotenv").config();
const URL=process.env.MONGO_URI;
console.log(URL)
mongoose.connect("mongodb+srv://devbishallatest:qwerty123@cluster0.ectawpl.mongodb.net/smart_education_final");
async function createOwner() {
  const existingOwner = await Owner.findOne({ singleton: 'ONLY_ONE_OWNER' });

  if (existingOwner) {
    console.log('Owner already exists');
    process.exit(0);
  }

  const owner = new Owner({
    ownername: 'Manish Kumar',
    email: 'manish@gmail.com',
    password: '$2b$10$X8m5XcijmZ28RASuwrXIAu91fzsHOvsi70azYWKVFCry99MysrOf6', 
    role: 'owner',
    singleton: 'ONLY_ONE_OWNER'
  });

  await owner.save();
  console.log('Owner created successfully');
  process.exit(0);
}

createOwner().catch((err) => {
  console.error('Error creating owner:', err);
  process.exit(1);
});
