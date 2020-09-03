const serializer = (user, done) => {
  done(null, JSON.stringify(user));
};

const deserializer = (userInfo, done) => {
  done(null, JSON.parse(userInfo));
};

module.exports = {
  serializer,
  deserializer,
};
