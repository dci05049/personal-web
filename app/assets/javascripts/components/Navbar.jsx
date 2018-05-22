class Navbar extends React.Component {


  onClickHome() {
    window.open("/", "_self");
  }

  onClickSourceCode() {
    window.open("https://github.com/dci05049", "_blank");
  }

  onHoverButton(elem) {
    var classes = document.getElementsByClassName('nav-active-sword');
    var id = elem.target.id;
    if (id == "home-nav" && classes.length > 0) {
      classes[0].style.opacity = 1;
      console.log(id);
    } else if (id == "post-nav") {
      classes[1].style.opacity = 1;
    } else if (id == "source-nav") {
      classes[2].style.opacity = 1;
    } else if (id == "project-nav") {
      classes[3].style.opacity = 1;
    } else if (id == "contact-nav") {
      classes[4].style.opacity = 1;
    }
  }

  onMouseOut(elem) {
    var classes = document.getElementsByClassName('nav-active-sword');
    var id = elem.target.id
    if (id == "home-nav" && classes.length > 0) {
      classes[0].style.opacity=0;
    } else if (id == "post-nav") {
      classes[1].style.opacity=0;
    } else if (id == "source-nav") {
      classes[2].style.opacity=0;
    } else if (id == "project-nav") {
      classes[3].style.opacity=0;
    } else if (id == "contact-nav") {
      classes[4].style.opacity=0;
    }
  }

  render() {
    return (
      <div>
        <nav class="navbar navbar-default">
          <ul class="navbar-nav">
            <li class = "nav-item">
              <div class ="nav-active-sword">
              <img src="/img/active-button.png" width="40" height="60"></img>
              </div>
               <button id="home-nav" onMouseOut={this.onMouseOut} onMouseOver={this.onHoverButton} onClick={this.onClickHome} type="button" class="navbar-link btn navbar-button">
               Home</button>
            </li>
            <li class = "nav-item">
              <div width="40" height="60"></div>
              <div class ="nav-active-sword">
              <img src="/img/active-button.png" width="40" height="60"></img>
              </div>
               <button id="post-nav" onMouseOut={this.onMouseOut} onMouseOver={this.onHoverButton} a href="#" type="button" class="navbar-link btn navbar-button-second">Blog Posts</button>
            </li>
            <li class = "nav-item">
              <div class ="nav-active-sword">
              <img src="/img/active-button.png" width="40" height="60"></img>
              </div>
               <button id="source-nav" onMouseOut={this.onMouseOut} onMouseOver={this.onHoverButton} onClick={this.onClickSourceCode} type="button" class="navbar-link btn navbar-button-third">Source Code</button>
            </li>
            <li class = "nav-item">
              <div class ="nav-active-sword">
              <img src="/img/active-button.png" width="40" height="60"></img>
              </div>
               <button id="project-nav" onMouseOut={this.onMouseOut} onMouseOver={this.onHoverButton} a href="#" type="button" class="navbar-link btn navbar-button">
             Projects</button>
            </li>
            <li class = "nav-item">
              <div class ="nav-active-sword">
              <img src="/img/active-button.png" width="40" height="60"></img>
              </div>
               <button id="contact-nav" onMouseOut={this.onMouseOut} onMouseOver={this.onHoverButton} a href="#" type="button" class="navbar-link btn navbar-button-second">Contact</button>
            </li>
          </ul>
        </nav>
      </div>
      )
  }
}