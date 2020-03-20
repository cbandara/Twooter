const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise; // So we don't have to use a callback
mongoose.connect("mongodb://localhost/twooter", {
  keepAlive: true,
  useMongoClient: true
});

