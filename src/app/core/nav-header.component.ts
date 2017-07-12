import { Component } from '@angular/core';

@Component({
  selector: 'core-nav-header',
  template:`
  <nav class="navbar">
    <div class="container">
      <div class="row">
        <div class="navbar-header col-md-offset-5 col-md-6" id="branding">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <p class="navbar-text">Thomas N Rizzo III</p>
          <p id="subhead">Full Stack Developer</p>
        </div>
      </div>
    </div>
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active menu-item"><a href="#">Home <span class="sr-only">(current)</span></a></li>
        <li class="menu-item"><a href="#">About</a></li>
        <li class="menu-item"><a href="#">Portfolio</a></li>
        <li class="menu-item"><a href="#">Contact</a></li>
      </ul>
    </div>
  </nav>
  <hr>
  `,
  styles: [`
    .menu-item {
      text-transform: Uppercase;
      font-weight: 600;
      font-size: 1.50em;
      font-family: Roboto;
      padding: 5px%;
      margin: 5px;
    }
    .active {
      background-color: #ececec;
    }
    .icon-bar {
      background-color: black;
    }
    a {
      color:black;
    }
    button {
      background-color: #ececec;
      border: 1px solid #999999;
    }

    #branding {
      font-family: Rock Salt;
      font-size: 2em;
      font-weight: 800;
    }
    #subhead {
      font-weight: 700;
      font-size: 0.75em;
      color: #999999;
    }
    `],
})

export class NavHeaderComponent {}
