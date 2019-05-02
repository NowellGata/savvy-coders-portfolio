// established an empty array in the Global Scope
let nameArr = [];

let nameArr[0] = prompt('What is your FIRST name?');
let nameArr[1] = prompt('what is your LAST name??');
// adds elements to the end of an array

// nameArr.push(fname);
// nameArr.push(lname);
// name is an Array of fname and lname

function checkName(name){
    // if name is falsey
    // developer's note: we are requiring both pieces of information even if only 1 is blank

  if(!name[0] || !name[1]){

        name[0] = prompt('Really, what is your FIRST name?');
        name[1] = prompt('Really, what is your LAST name??');

        name = checkName(name);
    }

    return name;
}


nameArr = checkName(nameArr);

alert(`Hello ${name}! What is for dinner??`);

document.querySelector('#greeting').innerHTML = `<p>${nameArr[0]} ${nameArr[1]}`;


