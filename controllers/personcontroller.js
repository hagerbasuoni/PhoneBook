import Person from "./mongo.js";

 const getAllPersons = async (req, res) => {
  try {
    const persons = await Person.find();
    res.status(200).json({
      status: "success",
      result: persons.length,
      data: { persons },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
const info = async (req, res) => {
    const persons = await Person.find();
    const count = persons.length;
    const date = new Date();
    const content = `
    <p>Phonebook has info for ${count} people</p>
    <p>${date}</p>
  `;
    res.send(content);
    
}
const getPersonById = async (req, res) => {
  try {
    //   const tour = await Tour.find(filter(t => {
    //     req.param.id ===t.id
    //   }));
    const person = await Person.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: { person },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "Person not found",
    });
  }
};
const createPerson = async (req, res) => {
  try {
    // const newTour = new Tour({});
    // newTour.save();
    const newPerson = await Person.create(req.body);
    res.status(201).json({
      status: "success",
      data: { newPerson },
    });
  } catch {
    res.status(400).json({
      status: "fail",
      message: "invalid data input",
    });
  }
};
const deletePerson = async (req, res) => {
  try {
    
    await Person.findByIdAndDelete(req.params.id);

    res.status(201).json({
      status: "success",
      message: "Person deleted Successfuly",
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "Person not found",
    });
  }
};
export { getAllPersons, info, deletePerson, createPerson, getPersonById };
