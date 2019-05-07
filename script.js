
<script type="text/javascript" src="index.js">

let name = prompt('What is your name?');

let checkName = function(){
    if(name === ''){
        name = prompt('What is your name, for real this time?');

        checkName(); // repeats until a name exists
    }
};

checkName(); // kicks off the name-checking the first time

alert('Hello ' + name);

</script>
