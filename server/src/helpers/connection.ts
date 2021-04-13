import mongoose from 'mongoose'

export default mongoose.connect("mongodb://root:password@localhost:27017", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "tscrud",
});


