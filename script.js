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
        id: 260101,
        name: "G Manasa ",
        courseName: "AWS (IAM , EC2 , S3 , Cloud watch )",
        courseStatus: "Completed",
        verified: true,
      },{
        id: 260106,
        name: "SINGAPATI YASWANTH SAI",
        courseName: "PYTHON FULLSTACK",
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
  
