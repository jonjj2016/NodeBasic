const express = require('express');
const Joi = require('@hapi/joi');
const app = express();
app.use(express.json());
const data = [
  {
    name: 'Course 1',
    id: 1,
    content: 'Full Stack Developer Bootcamp'
  },
  {
    name: 'Course 2',
    id: 2,
    content: 'Advanced JavaScript'
  },
  {
    name: 'Course 3',
    id: 3,
    content: 'React Developer Bootcamp'
  },
  {
    name: 'Course 4',
    id: 4,
    content: 'Node Js'
  }
];
const validateCourse = course => {
  const schema = Joi.object({
    name: Joi.string()
      .min(3)
      .max(45)
      // .label('Should be at least 3 characters and at most 15')
      .required(),
    content: Joi.string()
      .min(5)
      .max(100)
      .required()
    // .label('Should be at least 5 characters and at most 100')
  });

  const result = schema.validate({
    name: course.name,
    content: course.content
  });
  return result;
};
app.get('/', (req, res) => {
  res.send(' < h1 > Hello World < /h1>');
});
app.get('/api/courses', (req, res) => {
  res.send(JSON.stringify(data));
});
//Handling Post method
app.post('/api/courses', (req, res) => {
  //validatind request body

  const { error } = validateCourse(req.body);
  if (!error) {
    const course = {
      name: req.body.name,
      id: data.length + 1,
      content: req.body.content
    };
    data.push(course);
    res.send(course);
  } else {
    res.status(400).send(error.details[0].message);
  }
});
app.put('/api/courses/:id', (req, res) => {
  // Look p the course

  const course = getCourse(req.params.id);

  //if not axist return 404
  if (!course) return res.status(404).send('there is no such a course here');

  const { error } = validateCourse(req.body);

  //validate
  // if invalid return 400
  if (error) return res.status(400).send(error.details[0].message);

  //update the course
  course.name = req.body.name;
  course.content = req.body.content;
  res.send(course);
  // return updated course
});
app.get('/api/courses/:id', (req, res) => {
  const course = getCourse(req.params.id);

  if (!course) {
    res.status(404).send("The course with the given id doesn't exist");
  } else {
    res.send(course);
  }
});
app.delete('/api/courses/:id', (req, res) => {
  const course = getCourse(req.params.id);
  if (!course) return res.status(400).send('Bad request');

  let index = data.indexOf(course);
  data.splice(index, 1);
  res.send(course);
});
function getCourse(paramsId) {
  const id = parseInt(paramsId);
  const course = data.find(c => c.id === id);
  return course;
}
// app.get('/api/courses/:id', (req, res) => {
//   res.send(`The params id is: ${req.params.id}`);
// });
// app.get('/api/:year/:month', (req, res) => {
//   //   res.send(
//   //     JSON.stringify({
//   //       year: req.params.year,
//   //       month: req.params.month
//   //     })
//   //   );
//   res.send(req.query);
// });
//PORTS
const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`server is running on the port ${port} ...`)
);
