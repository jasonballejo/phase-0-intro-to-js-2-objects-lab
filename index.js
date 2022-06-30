// Write your solution in this file!
const employee = {employee};
const streetAddress = {
    key1: value1,
    key2: value2,
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj };
    newObj [key] = value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj [key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key, value) {
    const newObj = { ...obj };
    newObj[key] = value;
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
    obj [key] = value;
    return obj = obj;
}