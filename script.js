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
  ];
  
  
  // Get HTML elements
  const inputNumber = document.getElementById('inputNumber');
  const nameField = document.getElementById('name');
  const courseNameField = document.getElementById('courseName');
  const courseStatusField = document.getElementById('courseStatus');
  const verifiedField = document.getElementById('verified');
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
      verifiedField.textContent = user.verified ? "✅ BY IKC Team " : "❌";
      resultContainer.style.display = "block";
      errorMessage.textContent = "";
    } else {
      errorMessage.textContent = "No user found with this ID.";
      resultContainer.style.display = "none";
    }
  });
  