import mongoose from "mongoose";
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Person must have a name"],
    unique: [true, " name must have unique"],
  },
  number: {
    type: String,
    required: [true, "Person must have a number"],
  }
});
const Person = mongoose.model("Person", personSchema);
export default Person;
