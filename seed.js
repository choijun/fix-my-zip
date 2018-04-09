const db = require('./server/db');
const User = require('./server/db/models/users');
const Issue = require('./server/db/models/issues');
const faker = require('faker');
const issues = ['traffic-light', 'streetlight', 'pothole']
const fixed = [true, false, false, false]

const generateIssue = () => {
  let imageid = Math.random() * 400 + '.jpeg';
  let email = faker.internet.email();
  let issue = issues[Math.floor(Math.random() * issues.length)];
  let latitude = 41.8 + Math.random() / 100;
  let longitude = -87.64 + Math.random() / 100;
  let fixed = fixed[math.floor(Math.random() * fixed.length)];
  return ({
    imageid: imageid,
    email: email,
    issue: issue,
    latitude: latitude,
    longitude: longitude,
    fixed: fixed
  })
}

User.hasMany(Issue);
Issue.belongsTo(User);

let createThirty = () => {
  let studentArr = [];
  for (var i = 0; i < 20; i++) {
    studentArr.push(generateIssue())
  }
  return studentArr;
}
let studentList = createTwenty();

const campusList = [
  {name: 'Mars Campus',
  imageUrl: 'https://mars.nasa.gov/system/resources/detail_files/6453_mars-globe-valles-marineris-enhanced-full2.jpg',
  description: faker.lorem.paragraph()},
  {name: 'Moon Campus',
  imageUrl: 'https://mars.nasa.gov/system/resources/detail_files/6453_mars-globe-valles-marineris-enhanced-full2.jpg',
  description: faker.lorem.paragraph()},
  {name: 'Pluto Campus',
  imageUrl: 'https://mars.nasa.gov/system/resources/detail_files/6453_mars-globe-valles-marineris-enhanced-full2.jpg',
  description: faker.lorem.paragraph()}
]

async function seed(){
  try {
    console.log('syncing db....')
    await db.sync({force: true})

    //CAMPUSES
    const campusPromises = campusList.map(campus => Campus.create(campus))
    const [mars, moon, pluto] = await Promise.all(campusPromises);
    //STUDENTS

    const studentPromises = studentList.map(student => Student.create(student))
    const studentArray = await Promise.all(studentPromises);
    await studentArray.slice(0, 10).map(student => student.setCampus(mars))
    await studentArray.slice(10, 14).map(student => student.setCampus(moon))
    studentArray.slice(14).map(student => student.setCampus(pluto))
    console.log('all done');
  }
  catch (err) {
    console.error(err)
    db.close()
  }
}

seed();
