

let name = prompt('What is your name?');

function checkName(name){
    // if name is falsey
    if(!name){
        name = prompt('Really, what is your name?');
        name = checkName(name);
    }

    return name;
}
name = checkName(name);
alert(`Hello ${name}! What is for dinner??`);

document.querySelector('h1').textContent = 'Hello ' + name;

