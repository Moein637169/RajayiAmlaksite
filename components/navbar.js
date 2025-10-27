class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: rgba(17, 24, 39, 0.95);
          backdrop-filter: blur(10px);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .logo {
          color: white;
          font-weight: bold;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
        }
        .logo i {
          margin-left: 0.5rem;
          color: #f59e0b;
        }
        ul {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
          align-items: center;
        }
        a {
          color: white;
          text-decoration: none;
          transition: color 0.3s;
          font-weight: 500;
          position: relative;
        }
        a:hover {
          color: #f59e0b;
        }
        a.active {
          color: #f59e0b;
        }
        a.active:after {
          content: '';
          position: absolute;
          bottom: -5px;
          right: 0;
          width: 100%;
          height: 2px;
          background: #f59e0b;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
        .mobile-menu {
          display: none;
          position: fixed;
          top: 70px;
          right: 0;
          width: 100%;
          background: rgba(17, 24, 39, 0.98);
          padding: 1rem;
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        }
        .mobile-menu a {
          display: block;
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .contact-btn {
          background: #f59e0b;
          color: #111827;
          padding: 0.5rem 1.25rem;
          border-radius: 9999px;
          font-weight: 600;
          transition: all 0.3s;
        }
        .contact-btn:hover {
          background: #d97706;
          color: white;
        }
        @media (max-width: 768px) {
          ul.nav-links {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
          .mobile-menu.active {
            display: block;
          }
        }
      </style>
      <nav>
        <a href="./" class="logo">
          مشاور املاک رجایی
          <i data-feather="home"></i>
        </a>
        
        <ul class="nav-links">
          <li><a href="./" class="active">خانه</a></li>
          <li><a href="./properties.html">املاک</a></li>
          <li><a href="./about.html">درباره ما</a></li>
          <li><a href="./blog.html">وبلاگ</a></li>
          <li><a href="./contact.html">تماس</a></li>
          <li><a href="./admin-login.html" class="contact-btn">ورود ادمین</a></li>
        </ul>
        
        <button class="mobile-menu-btn" onclick="toggleMobileMenu()">
          <i data-feather="menu"></i>
        </button>
      </nav>
      
      <div id="mobile-menu" class="mobile-menu hidden">
        <a href="./">خانه</a>
        <a href="./properties.html">املاک</a>
        <a href="./about.html">درباره ما</a>
        <a href="./blog.html">وبلاگ</a>
        <a href="./contact.html">تماس</a>
        <a href="./admin-login.html" class="block mt-4 text-amber-400">ورود ادمین</a>
      </div>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);

// تابع منوی موبایل (بیرون از کلاس)
function toggleMobileMenu() {
  const menu = document.querySelector('custom-navbar').shadowRoot.getElementById('mobile-menu');
  menu.classList.toggle('active');
}
