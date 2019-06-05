export default (state) =>
    `<header>
<h1> ${state.title}</h1>
<h2>aspiring developer + chef + talent acquisition</h2></header>
<h3>
  “You're always you, and that don't change, and you're always changing,
  and there's nothing you can do about it.” ―<span>Neil Gaiman, The Graveyard
  Book</span>
</h3>
<div class= "nole">
<img  src="https://i.imgur.com/sHc0ckn.png" alt="Avatar"/>

</div>
<div class= "container">
  <div><img src="https://i.imgur.com/LyrfoIo.jpg" alt="Restaurant/Menu Development" height="200" width="200"></div>
  <div>Restaurant Consultation</div>
  <div><img src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/903/s300/savvy-coders-logo.png" alt="SavvyCoders" height="200" width="200"></div>
  <div>Savvy Coders Project</div>
  <div><img src="https://i.imgur.com/yMTD54G.jpg" alt="Savvy Coders Hackathon" height="200" width="200">
  <div>Creative Work</div>
</div>

<div class="contact">
  <form action="mailto:nowell.gata@gmail.com">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.">

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.">

    <label for="phone">Phone Number</label>
    <input id="phone" name="phone" placeholder="###-###-####"></input>

    <label for="message"></label>
    <textarea id="message" name="message" placeholder="Send me your thoughts..." style="height:200px"></textarea>

    <input type="submit" value="Submit">
  </form>
</div>`;
