/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map(employee =>{
        if(employee.profession === "developer")
        {
            console.log(employee);
        }
    });
}
PrintDeveloperbyMap();
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(employee =>{
        if(employee.profession === "developer")
        {
            console.log(employee);
        }
    });
  }
//   PrintDeveloperbyForEach();

  
  function addData() {
    //Write your code here, just console.log
    let newEmployee ={id: 4, name: "susan", age: "20", profession: "intern"};
    arr.push(newEmployee);
    console.log(arr);
  }
//   addData();
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr.filter(employee =>{
        if(employee.profession === "admin")
        {
            console.log(employee);
        }
    });
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newArray= 
        [
            { id: 4, name: "susan", age: "22", profession: "designer" },
            { id: 5, name: "emma", age: "24", profession: "manager" },
            { id: 6, name: "mike", age: "21", profession: "engineer" }
        ];

    let combinedArray = arr.concat(newArray);
    console.log(combinedArray);
    
  }