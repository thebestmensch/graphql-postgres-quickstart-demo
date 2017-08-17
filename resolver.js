const psql = require('./psqlAdapter').psql; // our adapter from psqlAdapter.js

// should match type Query in schema.js
// one function per endpoint
exports.resolver = {
  Query: {
    users(_, args, ctx) {
      const usersQuery = 'select id, name, email from users';
      return psql.manyOrNone(usersQuery);
    }
  }
};