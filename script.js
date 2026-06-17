// Sample data (You can replace this with real data from a server or database)
const users = [
    {
      id: 82401,
      name: "Nalipi Hemalatha",
      courseName: "Frontend Web Development",
      courseStatus: "Completed",
      verified: true,
    },
    {
      id: 82402,
      name: "Bodireddy kethan kumar ",
      courseName: "Frontend Web Development",
      courseStatus: "Completed",
      verified: true,
    },
    {
      id: 82403,
      name: "Bhanuprakash.k",
      courseName: "Frontend Web Development",
      courseStatus: "Completed",
      verified: true,
    },
    {
        id: 82404,
        name: "T Ganesh Naidu ",
        courseName: "Frontend Web Development",
        courseStatus: "Completed",
        verified: true,
      },
      {
        id: 82405,
        name: "KATARIMUNISEKHAR",
        courseName: "Frontend Web Development",
        courseStatus: "Completed",
        verified: true,
      }, {
        id: 82406,
        name: "Veerapuram Dhanush ",
        courseName: "Frontend Web Development",
        courseStatus: "Completed",
        verified: true,
      },
     {
        id: 82407,
        name: "G Manasa",
        courseName: "Core Java , SQL",
        courseStatus: "Completed",
        verified: true,
      },
     {
        id: 82408,
        name: "G Manasa ",
        courseName: "Frontend Web Development",
        courseStatus: "Completed",
        verified: true,
      },
     {
        id: 260006,
        name: "G Manasa ",
        courseName: "Cloud Computing - AWS",
        courseStatus: "Completed",
        verified: true,
      },{
        id: 260106,
        name: "SINGAPATI YASWANTH SAI",
        courseName: "PYTHON FULLSTACK",
        courseStatus: "Completed",
        verified: true,
     },
    {
        id: 260231,
        name: "Lavaluri Jeevana Sruthi",
        courseName: "Cloud Computing - AWS",
        courseStatus: "Completed",
        verified: true,
     },{
        id: 261200,
        name: "D.Harsha vardhan",
        courseName: "Cloud Computing - AWS",
        courseStatus: "Completed",
        verified: true,
     },{
        id: 260118,
        name: "Pasupuleti Mounika",
        courseName: "Cloud Computing - AWS",
        courseStatus: "Completed",
        verified: true,
     },{
        id: 260712,
        name: "S Balaji",
        courseName: "Java Fullstack",
        courseStatus: "Completed",
        verified: true,
     },{
        id: 260619,
        name: "Timmapuram Harshitha",
        courseName: "Java Fullstack",
        courseStatus: "Completed",
        verified: true,
     },{
        id: 267160,
        name: "Timmapuram Harshitha",
        courseName: "Web development using ReactJS",
        courseStatus: "Completed",
        verified: true,
     },{
        id: 264539,
        name: "P U GOPIKA ",
        courseName: "Java Fullstack",
        courseStatus: "Completed",
        verified: true,
     },{
        id: 261200,
        name: "M K Monika",
        courseName: "Java Fullstack",
        courseStatus: "Completed",
        verified: true,
     },
    {
        id: 261960,
        name: "Yaswanth Muniswar Perugu",
        courseName: "Python Fullstack",
        courseStatus: "Completed",
        verified: true,
     }, {
        id: 263106,
        name: "THATIPATHRI THARUN",
        courseName: "Python Fullstack",
        courseStatus: "Completed",
        verified: true,
     },{
        id: 263117,
        name: "D.G. surya",
        courseName: "Python Fullstack",
        courseStatus: "Completed",
        verified: true,
     },
    {
        id: 263208,
        name: "K. Nithin ",
        courseName: "Python Fullstack",
        courseStatus: "Completed",
        verified: true,
     },
    {
        id: 263236,
        name: "Nithin Kuppam ",
        courseName: "Java Fullstack",
        courseStatus: "Completed",
        verified: true,
     },
    {
        id: 263479,
        name: "VALLIVEDU LAHARI",
        courseName: "Python Fullstack",
        courseStatus: "Completed",
        verified: true,
     },
    {
        id: 263512,
        name: "TALLA MUNIKEERTHI",
        courseName: "Python Fullstack",
        courseStatus: "Completed",
        verified: true,
     }, {
        id: 263844,
        name: "L Pavan Kalyan ",
        courseName: "Java Fullstack",
        courseStatus: "Completed",
        verified: true,
     },
     {
        id: 261601,
        name: "GINNI SHARMILA",
        courseName: "Python Core",
        courseStatus: "Completed",
        verified: true,
     },
     {
        id: 261602,
        name: "P.SIVA DURGA PRASAD",
        courseName: "Python Core",
        courseStatus: "Completed",
        verified: true,
     },
     {
        id: 261603,
        name: "Gulapalyam Eshwar Prasad",
        courseName: "Python Core",
        courseStatus: "Completed",
        verified: true,
     },
     {
        id: 261604,
        name: "GOBBURI VISHNU VAMSI",
        courseName: "Python Core",
        courseStatus: "Completed",
        verified: true,
     },
    {
        id: 261605,
        name: "Guntumadugu vijitha",
        courseName: "Python Core",
        courseStatus: "Completed",
        verified: true,
     },
    {
        id: 261606,
        name: "Vaddempudi Pravallika",
        courseName: "Python Core",
        courseStatus: "Completed",
        verified: true,
     },
     {
        id: 261607,
        name: "Buchupalli Prathyusha",
        courseName: "Python Core",
        courseStatus: "Completed",
        verified: true,
     },
            {
        id: 261608,
        name: "Deekshitha Gone",
        courseName: "Python Core",
        courseStatus: "Completed",
        verified: true,
     },
            {
        id: 261609,
        name: "Narapogu sneha",
        courseName: "Python Core",
        courseStatus: "Completed",
        verified: true,
     },    {
        id: 260617,
        name: "K HemanthReddy",
        courseName: "Core Java",
        courseStatus: "Completed",
        verified: true,
     },  {
        id: 260618,
        name: "P.Rachana Shree",
        courseName: "Core Java",
        courseStatus: "Completed",
        verified: true,
     }
            
  ];
  
  
  // Get HTML elements
  const inputNumber = document.getElementById('inputNumber');
  const nameField = document.getElementById('name');
  const courseNameField = document.getElementById('courseName');
  const courseStatusField = document.getElementById('courseStatus');
 // const verifiedField = document.getElementById('verified');
  const resultContainer = document.getElementById('resultContainer');
  const errorMessage = document.getElementById('errorMessage');
  
  // Event listener for input change
  inputNumber.addEventListener('input', () => {
    const inputValue = parseInt(inputNumber.value);
    
    if (isNaN(inputValue) || inputValue <= 0) {
      errorMessage.textContent = "Please enter a valid ID number.";
      resultContainer.style.display = "none";
      return;
    }
  
    const user = users.find(user => user.id === inputValue);
  
    if (user) {
      // Display user details
      nameField.textContent = user.name;
      courseNameField.textContent = user.courseName;
      courseStatusField.textContent = user.courseStatus;
     
      resultContainer.style.display = "block";
      errorMessage.textContent = "";
    } else {
      errorMessage.textContent = "No user found with this ID.";
      resultContainer.style.display = "none";
    }
  });
  
