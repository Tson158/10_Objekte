
/***** Erinnerung: Arrays *******/
// let arr;
// arr = ["Ich","bin","Thomas"];
// output(arr);
// output(arr[2]);

// arr = [["Ich","bin","Max"],["Ich","bin","Moritz"]];
// output(arr[0][2]);
// output(arr[1][2]);


/***** Objekte 1 Daten/Funktionen *******/

const person = {
        firstName: "Thomas",
        familyName: "Sonntag",
        salary: [120000,160000],
        permission: true,
        sayHello:
                function(){
                        return "hey, ich bin " + this.firstName;
                }
}

output(person);
output(person.firstName);
output(person.familyName);
output(person.salary[1]);
output(person.permission);
output(person.sayHello())


const txt       = "Ich bin " + person.firstName + " " +
                person.familyName + " und verdiene " +
                person.salary[1] + " p.a."

output(txt);








/** Ausgabe */
function output(outputData) {
        console.log(outputData);
}