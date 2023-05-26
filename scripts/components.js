const nav_footer = () => {
    const nav = document.createElement("nav");
    nav.className = "navbar navbar-expand-lg navbar-dark bg-black shadow-sm fixed-top";
    nav.innerHTML = `
    <!-- Navbar Start -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-black shadow-sm fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="images/logo-2.svg" alt="Logo BALAP48" height="15">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Beranda</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="member">
                Member
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="kontak">
                Kontak
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Tentang">
                Tentang
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Navbar End -->
    `;
    
    const footer = document.createElement("footer");
    footer.className = "bg-black text-white pb-2 pt-4";
    footer.innerHTML = `
    <!-- Footer Start -->
      <div class="container text-center">
        <p class="my-0 pb-1">
          <a href="https://twitter.com/balap48_ofc" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-twitter fa-lg px-2 text-white"></i>
          </a>
          <a href="https://www.instagram.com/balap48_ofc" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-instagram fa-lg px-2 text-white"></i>
          </a>
          <a href="https://tiktok.com/@balap48_ofc" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-tiktok fa-lg px-2 text-white"></i>
          </a>
          <a href="https://www.youtube.com/@balap48_ofc" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-youtube fa-lg px-2 text-white"></i>
          </a>
        </p>
        <p>Copyright &copy; 2023
          BALAP48 All Rights Reserved</p>
      </div>
    <!-- Footer End -->
    `;
    
    const body = document.getElementsByTagName("body")[0];
    body.prepend(nav);
    body.append(footer);
}

export default nav_footer