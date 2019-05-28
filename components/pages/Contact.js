export default (state) => `
<h1>${state}</h1>
<form action="https://formspree.io/nowell.gata@gmail.com" method="POST">
 <span>
    <label for="name">Your Name:</label>
    <input type="text" id="name" name="userName" />
 </span>

  <span>
    <label for="user-email">Your Email:</label>
    <input
      type="email"
      name="userEmail"
      id="user-email"
      placeholder="user@example.com"/>
    </span>

 <span>
    <label for="phone">Your phone number:</label>
    <input type="tel" name="userPhone" id="phone" />
 </span>

 <div class="flex flex--column">
    <textarea name="message" id="message" cols="30" rows="10"></textarea>
 </div>
  </span>

  <div>
      <label>What's this message about?</label>
      <input type="radio" name="subject" value="professional" checked />I'd
      like to hire you!
    </div>

    <div>
      <input type="radio" name="subject" value="professional" checked />Personal Message
    </div>
    <div>
      <input type="radio" name="subject" value="professional" checked />I'd
      like to keep you hanging!
    </div>

    <div class="dropdown">
        <button class="dropbtn">Choose Your Villian</button>
        <div class="dropdown-content">
          <a href="#">Skeletor</a>
          <a href="#">Stormshadow</a>
          <a href="#">Megatron</a>
        </div>
      </div>

    <div>
    <input type="submit" value="Send Message" />
    <input type="reset" value="Clear Form" />
    </div>
  </form>`;
