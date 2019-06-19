export default function(){
    return `
<h1>${state.title}</h1>
<form action="mailto:nowell.gata@gmail.com">
<div class="contact">
  <label for="fname">First Name</label>
  <input type="text" id="fname" name="firstname" placeholder="Your name.">

  <label for="lname">Last Name</label>
  <input type="text" id="lname" name="lastname" placeholder="Your last name.">

  <label for="phone">Phone Number</label>
  <input id="phone" name="phone" placeholder="###-###-####"></input>

  <label for="message"></label>
  <textarea id="message" name="message" placeholder="Send me your thoughts..." style="height:200px"></textarea>

  <input type="submit" value="Submit">
  </div>
</form>
`;
}