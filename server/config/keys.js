module.exports = {
  JWT_SECRET: 'dev#secret' /*process.env.JWT_SECRET*/,
  JWT_EXP: '2m' /*process.env.JWT_EXP*/,
  MongoURL: process.env.MONGO_URI
};
