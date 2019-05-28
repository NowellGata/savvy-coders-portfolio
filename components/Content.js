export default function Content(state){
    return `


<main>
<body>
<h1>${state.title}</h1>
        <h2>aspiring developer + chef + talent acquisition</h2>
        <h3>
          “You're always you, and that don't change, and you're always changing,
          and there's nothing you can do about it.” ― Neil Gaiman, The Graveyard
          Book
        </h3>

        <img class="nole" src="https://i.imgur.com/sHc0ckn.png" alt="Avatar"/>

          <div>
            <p>A little about me: I'm a St. Louis-based Chef, aspiring web developer, photographer,all-round good guy. In my spare time, I enjoy playing Legos with my son and traveling the world with my wife. Coding has always been an interest of mine. Until recently, I've been in incredibly busy kitchens with no time to investigate this medium. I'm excited to see where this can take me!
            </p>
          </div>

      <div class="line"></div>

      <div class="flex-container">
          <div>
            <img class="guerrilla" src="https://media2.fdncms.com/riverfronttimes/imager/u/blog/14603702/nowell_gata_photo.jpg?cb=1519051114" alt="guerrilla"/><span class="consult">Check out my restaurant consultation blog</span>

            </div>
              <div>

              <img class="savvy" src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/903/s300/savvy-coders-logo.png"alt="savvy"/><span class="savvycoders">Check out my project for SavvyCoders!</span>
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOm7Hl3gXM87PJ29Oe2eHKfJsUlkb0_uH5lYSQoQVUeT18--S7yw" alt="Class Hackathon"/><span class="classroom">What we are doing together in class!</span>
          </div>
        </div>

      <div class="line"></div>

  <div class="inputbox">
        <form action="https://formspree.io/nowell.gata@gmail.com" method="POST">
          <span>
            label for="name">Your Name:</label>
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
          <div>
            <textarea name="message" id="message" cols="40" rows="20"></textarea>
          </div>
                </span>
          <label>
            <div>What's this message about?
          </div>
          <div>
              <input type="radio" name="subject" value="professional" checked />I'd
              like to hire you!
            </div>
        </div>
            <div>
              <input type="radio" name="subject" value="professional" checked />Personal Message
            </div>
            <div>
              <input type="radio" name="subject" value="professional" checked />I'd
              like to keep you hanging!
              <input type="submit" value="Send Message" />
            <input type="reset" value="Clear Form" />
            </div>
          </label>
        </form>
</body>


</main>`;
}
