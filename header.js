const headerHTML = `<section class="top_txt">
      <div class="head container">
        <div class="head_txt">
          <p>Free Shipping, 30 days returns and replacement</p>
        </div>
        <div class="sign_in_up">
          <a href="#">SIGN IN</a>
          <a href="#">SIGN UP</a>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="nav-brand">

        <img src="./images/log1.png" alt="logo" class="logo" width="40%" height="auto" />

      </div>

      <nav class="navbar">
        <ul>
          <li class="nav-item">
            <a href="/" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a href="about.html" class="nav-link">About</a>
          </li>
          <li class="nav-item">
            <a href="products.html" class="nav-link">Products</a>
          </li>
          <li class="nav-item">
            <a href="https://www.linkedin.com/in/gaurav-raj-a3aa4a252/" class="nav-link">Contact</a>
          </li>
          <li class="nav-item">
            <a href="addToCart.html" class="nav-link add-to-cart-button" id="cartValue">
              <i class="fa-solid fa-cart-shopping">0</i>
            </a>
          </li>
        </ul>
      </nav>
    </div>`;

const headerElem = document.querySelector(".section-navbar");
headerElem.insertAdjacentHTML("afterbegin", headerHTML);
