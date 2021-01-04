// secrets.js
const secrets = {
  dbUri:
    "mongodb://billy:<password>@databasecluster.sl3ly.mongodb.net/<dbname>?retryWrites=true&w=majority",
};

export const getSecret = (key) => secrets[key];
