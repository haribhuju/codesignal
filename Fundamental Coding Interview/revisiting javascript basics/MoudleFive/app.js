// recreate join() and split()

// join() => takes an array and returns a string
// split() => takes a string and returns an array

// print the string in a tab format

// readable solution
const employeeData = "Alice,Developer,30|Bob,Manager,45|Charlie,Designer,25";
const employeeList = employeeData.split("|");

employeeList.forEach((employee) => {
  // TODO: Tokenize the employee data and determine eligibility for a junior position
  let result = "";
  let eachEmployee = employee.split(",");
  let ageOfEachEmployee = eachEmployee[eachEmployee.length - 1];
  if (ageOfEachEmployee < 40) {
    result += `Name: ${eachEmployee[0]} - Role: ${eachEmployee[1]} - Age: ${eachEmployee[2]} - Eligible`;
  } else {
    result += `Name: ${eachEmployee[0]} - Role: ${eachEmployee[1]} - Age: ${eachEmployee[2]} - Not Eligible`;
  }
  // TODO: Display the result in format `Name: <name> - Role: <role> - Age: <age> - <Eligible/Not Eligible>`
  console.log(result);
});

// optimized solution

employeeList.forEach((employee) => {
  // TODO: Tokenize the employee data and determine eligibility for a junior position
  const [name, role, age] = employee.split(",");

  const eligibility = parseInt(age) < 40 ? "Eligible" : "Not Eligible";

  result += `Name: ${name} - Role: ${role} - Age: ${age} - ${eligibility} \n`;

  // TODO: Display the result in format `Name: <name> - Role: <role> - Age: <age> - <Eligible/Not Eligible>`
});

console.log(result);

//another practice solution - destructuring is imp

function processAstronautData(data) {
  let details = data.split(";");

  details.forEach((detail) => {
    // TODO: Split the detail into astronaut name and planet,
    //       and strip away the whitespace.
    const [name, planet] = detail.split("-");
    const trimmedName = name.trim();
    const trimmedPlanet = planet.trim();

    // TODO: Print the statement in the format "Astronaut [name] is exploring [planet]."
    console.log(`Astronaut ${trimmedName} exploring ${trimmedPlanet}`);
  });
}

let astronautData = "    Neil-Mars; Buzz-Jupiter; Sally-Venus    ";
processAstronautData(astronautData);

//another practice solution
// Space exploration crew members' data, containing their names, missions, and roles
let crewData =
  "Neil,Armstrong,Apollo 11,C;Buzz,Aldrin,Apollo 11,P;Michael,Collins,Apollo 11,CM";

// TODO: Split the crewData string into a list of individual crew member information using the appropriate delimiter
const crewList = crewData.split(";");

// TODO: Iterate over the list of crew member data
crewList.forEach((crew) => {
  // TODO: For each member, split their data string using commas as delimiters
  const [firstName, lastName, mission, role] = crew.split(",");

  // TODO: Print the crew member's details in a formatted string
  console.log(`${firstName} ${lastName} ${mission} ${role}`);
});
// Expected output:
// Neil Armstrong Apollo 11 C
// Buzz Aldrin Apollo 11 P
// Michael Collins Apollo 11 CM
