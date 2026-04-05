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
    name: String,
    number: String,
  });

const Person = mongoose.model("Person", personSchema);

const run = async () => {
 try
    {
    await mongoose.connect(DB, { family: 4 })
    if (process.argv.length === 3) {
        const persons = await Person.find({})
        persons.forEach((p) => {
            console.log(`${p.name} ${p.number}`)
        })
        await mongoose.connection.close()
        return

    }
    if (process.argv.length === 5) {
        const name = process.argv[3];
        const number = process.argv[4];
        const person = new Person({ name, number });
        await person.save();
        console.log(`added ${name} number ${number} to phonebook`);
        await mongoose.connection.close();
        return;
    }
    console.log(
      'Usage:n  node mongo.js <password>n  node mongo.js <password> "<name>" <number>',
    );

    await mongoose.connection.close();

        
    }
   catch (err) {
    console.log("Error:", err.message);
    process.exit(1);
  }
}

run()
export default Person;
