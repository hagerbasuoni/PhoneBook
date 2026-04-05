import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
if (process.argv.length < 3) {
  console.log("give password as an argument");
  process.exit(1);
}
const password = process.argv[2];
const DB = process.env.DATABASE.replace("<PASSWORD>", password);
mongoose
  .connect(DB, { family: 4 })
  .then((c) => {
    console.log("Connected");
  })
  .catch((e) => {
    console.log("Connected failed", e);
  });
const personSchema = new mongoose.Schema({
     name: {
        type: String,
        minLength: 3,
        required: [true, "Person must have a name"],
        unique: [true, " name must be unique"],
  },
    number: {
        type: String,
        minLength: 8,
        required: [true, "Person must have a number"],
        validate: {
            validator: function (v) {
                return /^\d{2,3}-\d+$/.test(v);
            },
        },
    }
 });
 personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});
const Person = mongoose.model("Person", personSchema);


export default Person;
