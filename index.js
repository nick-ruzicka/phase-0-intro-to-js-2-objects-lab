// Write your solution in this file!

const employee = {
  name: "Nick",
  streetAddress: "1st and 14th",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newObj = { ...employee };

  newObj[key] = "11 Broadway";
  return newObj;
}

//destructivelyUpdateEmployeeWithKeyAndValue(): this function should work the same as updateEmployeeWithKeyAndValue() but it should mutate the employee Object passed in.

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

//deleteFromEmployeeByKey(): this function should take in a employee Object and a key. It should delete the property with that key from the employee Object. This should not mutate the original employee Object; it should return a new Object that doesn't include the identified key-value pair.

function deleteFromEmployeeByKey(employee, key) {
  const newObj1 = Object.assign({}, employee);
  delete newObj1[key];
  return newObj1;
}

//destructivelyDeleteFromEmployeeByKey(): this function should work the same as deleteFromEmployeeByKey() but it should mutate the employee Object.

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
