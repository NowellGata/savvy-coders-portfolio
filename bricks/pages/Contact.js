export default function(state){
    return `
<h1>${state.title}</h1>

<h3>Email: nowell.gata@gmail.com</h3>
<h3>Phone: (314) 449-0082</h3>
<form action="https://formspree.io/nowell.gata@gmail.com" method="POST">
<div class="flex-container">

  <label for="fname" name="name">First Name</label>
  <input type="text" id="fname" name="firstname" placeholder="Your first name.">

  <label for="lname" name="name">Last Name</label>
  <input type="text" id="lname" name="lastname" placeholder="Your last name.">

  <label for="phone" name="name">Phone Number</label>
  <input id="phone" name="phone" placeholder="Phone Number"></input>

  <label for="message" name="name"></label>
  <textarea id="message" name="message" placeholder="Send me your feedback" style="height:200px"></textarea>
  <hr></hr>

  <input type="submit" value="Submit email to: nowell.gata@gmail.com" class="btn btn-light" name="name">
  </div>

  </form>

<hr></hr>
`;
}
