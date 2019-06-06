export default (state) => `
<h1>${state.title}</h1>

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
</div>
`;


// <form action="https://formspree.io/nowell.gata@gmail.com" method="POST">
//  <span>
//     <label for="name">Your Name:</label>
//     <input type="text" id="name" name="userName" />
//  </span>

//   <span>
//     <label for="user-email">Your Email:</label>
//     <input
//       type="email"
//       name="userEmail"
//       id="user-email"
//       placeholder="user@example.com"/>
//     </span>

//  <span>
//     <label for="phone">Your phone number:</label>
//     <input type="tel" name="userPhone" id="phone" />
//  </span>

//  <div class="flex flex--column">
//     <textarea name="message" id="message" cols="30" rows="10"></textarea>
//  </div>
//   </span>

//   <div>
//       <label>What's this message about?</label>
//       <input type="radio" name="subject" value="professional" checked />I'd
//       like to hire you!
//     </div>

//     <div>
//       <input type="radio" name="subject" value="professional" checked />Personal Message
//     </div>
//     <div>
//       <input type="radio" name="subject" value="professional" checked />I'd
//       like to keep you hanging!
//     </div>

//     <div class="dropdown">
//         <button class="dropbtn">Choose Your Villian</button>
//         <div class="dropdown-content">
//           <a href="#">Skeletor</a>
//           <a href="#">Stormshadow</a>
//           <a href="#">Megatron</a>
//         </div>
//       </div>

//     <div>
//     <input type="submit" value="Send Message" />
//     <input type="reset" value="Clear Form" />
//     </div>
//   </form>`;
