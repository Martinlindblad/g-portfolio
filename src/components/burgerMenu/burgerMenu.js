import React from "react"

const BurgerMenu = () => (
  <div class="burger">
    <div class="hamburger">
      <div class="line4"></div>
      <div class="line3"></div>
      <div class="line2"></div>
      <div class="line1"></div>
    </div>
    <nav>
      <ul class="main">
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="index.html#me-pic">About</a>
        </li>

        <li>
          <a href="index.html#work">Works</a>
        </li>

        <li>
          <a href="index.html#contact-h2">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
)

export default BurgerMenu
