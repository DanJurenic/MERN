/* 
Given a table name string and an object whose key value pairs represent column names and values for the columns
return a SQL insert statement string
Tip: string interpolation (using back ticks, the key to the left of num 1 key) make it easy to add variables into a string or to add quotations without needing to escape them.
Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods
*/

const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe" };
const expected1 =
"INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

// Bonus:
const insertData2 = {
first_name: "John",
last_name: "Doe",
age: 30,
is_admin: false,
};
const expected2 =
"INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";
// Explanation: no quotes around the int or the bool, technically in SQL the bool would become a 0 or 1, but don't worry about that here.

/**
 * Generates a SQL insert statement from the inputs
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} tableName
 * @param {Object} columnValuePairs
 * @returns {string} A string formatted as a SQL insert statement where the
 *    columns and values are extracted from columnValuePairs.
 */
function insert(tableName, columnValuePairs) {
    const keysarray = []
    const valuearray = []
    for (keys in columnValuePairs) {
        keysarray.push(keys)
        if (typeof columnValuePairs[keys] === "string") {
            valuearray.push('"' + columnValuePairs[keys] + '"');
        }
        else {
            valuearray.push(columnValuePairs[keys]);
        }
    }
    return `"INSERT INTO ${tableName} (${keysarray}) VALUES (${valuearray});"`
}
console.log(insert(table, insertData1));
console.log(insert(table, insertData2));


/**
 * - Time: O(5n) -> O(n) linear,
 *    .keys .join .values .map .join = 5 non-nested loops
 * - Space: O(n) linear.
 */
function insertFunctional(tableName, columnValuePairs) {
    return `"INSERT INTO ${tableName} (` + Object.keys(columnValuePairs) + `) VALUES (` + Object.values(columnValuePairs).map((value,idx)=>{
        if (typeof value[idx] === "string") {
            return('"' + value + '"');
        }
        else {
            return(value);
        }
    }) + `);"`
}

console.log(insertFunctional(table, insertData1))
console.log(insertFunctional(table, insertData2))
/*****************************************************************************/