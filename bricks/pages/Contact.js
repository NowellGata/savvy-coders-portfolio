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

// export default function(){
//     return `
//   <h1>Contact Me</h1>
//   <form
//     action="https://formspree.io/manavm@visionwebsoft.com"
//     class="container"
//     method="POST"
//   >
//     <div>
//       <span>
//         <label for="name">Your Name</label>
//         <input type="text" id="name" name="userName" />
//       </span>

//       <span>
//         <label for="user-email">Your Email</label>
//         <input
//           type="email"
//           name="userEmail"
//           id="user-email"
//           placeholder="user@example.com"
//         />
//       </span>

//       <span>
//         <label for="fone">Your Phone</label>
//         <input type="tel" name="userFone" id="fone" />
//       </span>
//     </div>

//     <div class="flex flex-column">
//       <label for="msg">Your Message</label>
//       <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
//     </div>

//     <div>
//       <p>What's this message about?</p>

//       <span>
//         <input
//           type="radio"
//           name="subject"
//           value="professional"
//           id="pro"
//           checked
//         />
//         <label for="pro">I'd like to hire you!</label>
//       </span>

//       <span>
//         <input type="radio" name="subject" value="personal" id="personal" />
//         <label for="personal">Personal message</label>
//       </span>
//       <span>
//         <input type="radio" name="subject" value="other" />
//         <label>Don't know/something else</label>
//       </span>
//     </div>
//     <div>
//       <input type="checkbox" name="optin" value="trusting" checked />Subscribe
//       me to your newsletter!
//       <input type="checkbox" name="optout" value="skeptical" disabled />Cheeky
//       checkbox...
//     </div>
//     <div>
//       <label for="marketing">How did you hear about me?</label>
//       <select name="marketing" id="marketing">
//         <optgroup label="Online">
//           <option value="social">Social Media (FB, Twitter, LinkedIn)</option>
//           <option value="github">Online Portfolio (GitHub)</option>
//           <option value="search">Search Engine</option>
//           <option value="email">Email</option>
//         </optgroup>
//         <optgroup label="In-Person">
//           <option value="networking">We met at a networking event</option>
//           <option value="referral">Personal referral</option>
//           <option value="random">We met somewhere else</option>
//         </optgroup>
//         <option value="other">Other</option>
//       </select>
//     </div>

//     <div>
//       <input type="submit" value="Send Message" />
//       <input type="reset" value="Clear Form" />
//     </div>
//   </form>`;
// }