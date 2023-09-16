const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" }
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    for(let i=0;i<data.length;i++){
      if(data[i].profession == "developer"){
        console.log(data[i]);
      }
    }
  }
  
  // 2. Add Data
  function addData() {
    let inputString = null;
    inputString = window.prompt("Please enter the data");
    var userData = inputString.split(',');
    let dName = userData[0];
    let dAge = parseInt(userData[1]);
    let dProfession = userData[2];
    let dData = {name: dName , age : dAge , profession : dProfession};
    data.push(dData);
    console.log(dData);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    const newData = data.filter((d)=>d.profession != "admin");
    console.log(newData);
  
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    let dummy = [
      { name: "jacob", age: 22, profession: "developer" },
      { name: "aman", age: 24, profession: "admin" }
    ];
  
    let newArray = data.concat(dummy);
    console.log(newArray);
  }
  
  // 5. Average Age
  function averageAge() {
    let len = data.length;
    let sum = data.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.age;
    }, 0);
    console.log(sum/len);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    const newData = data.filter((d)=>d.age > 25);
    console.log(newData);
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    let uniquePeople = data
    .map(d => d.profession)
    .filter((value, index, self) => self.indexOf(value) === index)
    console.log(uniquePeople);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a, b) => {
      return a.age - b.age;
    });
    console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    let newData = data ;
    newData.forEach(element => {
      if(element.name == "john"){
        element.profession = "manager";
      }
    });
  
    console.log(newData);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let dev = 0;
    let adm = 0;
    data.forEach(element => {
      element.profession === "developer" ? dev++ : adm++ ;  
    });
    let arr = [
      {"developer" : dev} ,
      {"admins" : adm}
    ];
    console.log(arr);
  }