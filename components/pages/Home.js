export default (state) =>
    `
    <navigation>
    <div class="navbar">
      <a href="#home">Home</a>
      <a href="#news">Photos</a>
      <div class="dropdown">
        <button class="dropbtn">Projects
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="#">Restaurant Consultation</a>
          <a href="#">Savvy Coders</a>
          <a href="#">My Portfolio</a>
        </div>
      </div>
    </div>
    </navigation>
          <li>
            Portfolio
            <ul id="dropdown">
              ${buildNavHTML(state.links.dropdown)}
            </ul>
          </li>
        </ul>
      </nav>;
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

`;
