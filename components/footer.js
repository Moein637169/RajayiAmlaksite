class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #111827;
          color: white;
          padding: 4rem 2rem 2rem;
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        .footer-logo {
          font-size: 1.5rem;
          font-weight: bold;
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }
        .footer-logo i {
          margin-left: 0.5rem;
          color: #f59e0b;
        }
        .footer-about {
          margin-bottom: 1.5rem;
          line-height: 1.6;
          color: #9ca3af;
        }
        .footer-heading {
          font-size: 1.25rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          position: relative;
          padding-bottom: 0.5rem;
        }
        .footer-heading:after {
          content: '';
          position: absolute;
          bottom: 0;
          right: 0;
          width: 50px;
          height: 2px;
          background: #f59e0b;
        }
        .footer-links {
          list-style: none;
          padding: 0;
        }
        .footer-links li {
          margin-bottom: 0.75rem;
        }
        .footer-links a {
          color: #9ca3af;
          text-decoration: none;
          transition: color 0.3s;
        }
        .footer-links a:hover {
          color: #f59e0b;
        }
        .contact-info {
          margin-bottom: 1.5rem;
        }
        .contact-item {
          display: flex;
          align-items: center;
          margin-bottom: 0.75rem;
          color: #9ca3af;
        }
        .contact-item i {
          margin-left: 0.5rem;
          color: #f59e0b;
        }
        .social-links {
          display: flex;
          gap: 1rem;
        }
        .social-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          transition: all 0.3s;
        }
        .social-links a:hover {
          background: #f59e0b;
          transform: translateY(-3px);
        }
        .copyright {
          text-align: center;
          padding-top: 2rem;
          margin-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: #9ca3af;
        }
        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
          }
        }
      </style>
      <footer>
        <div class="footer-container">
          <div class="footer-col">
            <div class="footer-logo">
              مشاور املاک رجایی
              <i data-feather="home"></i>
            </div>
            <p class="footer-about">
              ارائه دهنده تخصصی ترین خدمات خرید و فروش ملک در اردبیل و شهرک کوثر با سال‌ها تجربه و صدها مشتری راضی.
            </p>
            <div class="social-links">
              <a href="#"><i data-feather="instagram"></i></a>
              <a href="#"><i data-feather="twitter"></i></a>
              <a href="#"><i data-feather="facebook"></i></a>
              <a href="#"><i data-feather="linkedin"></i></a>
            </div>
          </div>
          
          <div class="footer-col">
            <h3 class="footer-heading">لینک‌های سریع</h3>
            <ul class="footer-links">
              <li><a href="/">خانه</a></li>
              <li><a href="/properties.html">لیست املاک</a></li>
              <li><a href="/about.html">درباره ما</a></li>
              <li><a href="/blog.html">وبلاگ</a></li>
              <li><a href="/contact.html">تماس با ما</a></li>
              <li><a href="/admin-login.html">ورود ادمین</a></li>
            </ul>
          </div>
          
          <div class="footer-col">
            <h3 class="footer-heading">خدمات ما</h3>
            <ul class="footer-links">
              <li><a href="#">خرید آپارتمان</a></li>
              <li><a href="#">فروش آپارتمان</a></li>
              <li><a href="#">اجاره ملک</a></li>
              <li><a href="#">مشاوره سرمایه گذاری</a></li>
              <li><a href="#">برآورد قیمت ملک</a></li>
            </ul>
          </div>
          
          <div class="footer-col">
            <h3 class="footer-heading">تماس با ما</h3>
            <div class="contact-info">
              <div class="contact-item">
                <i data-feather="map-pin"></i>
                اردبیل، شهرک کوثر، بلوک ۷، قطعه ۱۲۷
              </div>
              <div class="contact-item">
                <i data-feather="mail"></i>
                Amlakerajaei127@gmail.com
              </div>
              <div class="contact-item">
                <i data-feather="clock"></i>
                همه روزه از ۸ صبح تا ۸ شب
              </div>
            </div>
            <div class="contact-item">
              <i data-feather="phone"></i>
              09145375158 — حسام رجایی
            </div>
            <div class="contact-item">
              <i data-feather="phone"></i>
              09143515158 — عباس رجایی
            </div>
            <div class="contact-item">
              <i data-feather="phone"></i>
              09144567044 — حمید رجایی
            </div>
          </div>
        </div>
        
        <div class="copyright">
          <p>© ۱۴۰۳ کلیه حقوق برای مشاور املاک رجایی محفوظ است.</p>
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);