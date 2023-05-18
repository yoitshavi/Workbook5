// this is for the excersises that start on page 1-10 of workbook 5
const courses = [
  {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
  },
  {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
  },
  {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
  },
];

function findPROG200(course) {
  return course.CourseId === "PROG200";
}

const prog200 = courses.find(findPROG200);

console.log("Prog200 starts", prog200.StartDate);

function titlePROJ500(course) {
  return course.CourseId === "PROJ500";
}

const title = courses.find(titlePROJ500);

console.log("Proj500 title is", title.Title);
//----------
function isUnder50USD(course) {
  return +course.Fee <= 50;
}
const fees = courses.filter(isUnder50USD);
for (const course of fees) {
  console.log("titles that cost less than 50.00", course.Title, course.Fee);
}
//---------
function classroom1Courses(course) {
  return course.Location === "Classroom 1";
}

const classes = courses.filter(classroom1Courses);
for (const course of classes) {
  //you can use this instead of the course of courses ->(let i=0; i < classes.length; i++)
  // you would also use this if you do the other ^ const course =classes[i]
  console.log("courses in classroom 1 are", course.CourseId);
}
