
  function showCustomAlert() {
    const alertBox = document.getElementById("customAlert");
    alertBox.style.display = "block";

    setTimeout(() => {
      alertBox.style.display = "none";
    }, 8000); // auto-hide after 8 seconds
  }

  function closeAlert() {
    document.getElementById("customAlert").style.display = "none";
  }

  document.querySelectorAll("input").forEach(input => {
    input.addEventListener("click", showCustomAlert);
    input.addEventListener("mouseover", () => {
      input.title = "Feature not ready yet — use phone for inquiries.";
    });
  });



    function complete(type) {
        const html = document.querySelector(".tocompletejs-div");
     
        // Resetare stări active
        document.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"));
        document.getElementById(type + "Btn").classList.add("active");
     
        if (type === "mission") {
          html.innerHTML = `
    <div class="tabs-div">
            <h1>Our Mission</h1>
            <p>Founded in 2024, VISION INVESTMENT PARTNERS has established itself as a leading investment firm focused on delivering sustainable returns through strategic investments in emerging markets and innovative technologies.</p>
    <div>
          <p><span>&#10003;</span> Research-driven investment strategies</p>
          <p><span>&#10003;</span> Commitment to ethical investment practices</p>
          <p><span>&#10003;</span> Long-term partnerships with stakeholders</p>
          <p><span>&#10003;</span> Continuous innovation in financial solutions</p>
    </div>
    </div>`;
        } else if (type === "vision") {
          html.innerHTML = `
    <div class="tabs-div">
            <h1>Our Vision</h1>
            <p>We aspire to be the global leader in strategic investment management, recognized for our innovative approach, exceptional client service, and consistent delivery of superior returns while maintaining the highest ethical standards.</p>
    <div class="vision-item">
          <div>
          <svg width="24" height="24" fill="none" stroke="#0D6EFD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
          </svg>
          </div>
          <h2>Future-Focused</h2>
          <p>Anticipating market trends and emerging opportunities</p>
    </div>
    <div class="vision-item">
          <div>
              <svg width="24" height="24" fill="none" stroke="#0D6EFD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2l8 4v6c0 5-3.5 9.74-8 11-4.5-1.26-8-6-8-11V6l8-4z"></path>
                </svg>
          </div>
          <h2>Integrity</h2>
          <p>Unwavering commitment to ethical practices.</p>
    </div>
    </div>`;
        } else if (type === "values") {
          html.innerHTML = `
    <div class="tabs-div">
          <h1>Our values</h1>
          <p>Our core values guide every decision we make and every relationship we build, ensuring consistent excellence in all our endeavors.</p>
    <div>
    <div class="values-item">
        <div>
            <svg width="24" height="24" fill="none" stroke="#1976d2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2a7 7 0 0 0-3 13v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a7 7 0 0 0-3-13z"/>
              <line x1="9" y1="22" x2="15" y2="22"/>
            </svg>
        </div>
          <div>
                <h2>Innovation</h2>
                <p>Constantly seeking creative solution</p>
          </div>
    </div>
    <div class="values-item">
       <div>
              <svg width="24" height="24" fill="none" stroke="#1976d2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="7" cy="8" r="4"/>
                <circle cx="17" cy="8" r="4"/>
                <path d="M2 20v-2a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v2"/>
                <path d="M14 20v-2a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v2"/>
              </svg>
      </div>
      <div>
            <h2>Collaboration</h2>
            <p>Building strong partnerships</p>
      </div>
    </div>
    <div class="values-item">
        <div>
                 <svg width="24" height="24" fill="none" stroke="#1976d2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="12" width="4" height="8"/>
                    <rect x="10" y="8" width="4" height="12"/>
                    <rect x="17" y="4" width="4" height="16"/>
                  </svg>
        </div>
          <div>
                <h2>Excellence</h2>
                <p>Striving for outstanding results</p>
          </div>
    </div>
    <div class="values-item">
      <div>
            <svg width="24" height="24" fill="none" stroke="#388e3c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="8" r="6"/>
              <path d="M8 16l4 4 4-4"/>
            </svg>
       </div>
        <div>
              <h2>Responsibility</h2>
              <p>Taking ownership of our actions</p>
        </div>
    </div>
    </div>
    </div>`;
        }
      }
      window.onload = () => complete('mission');
        






      const apiKey = "40322e6920cc4ba19e910f3fcfcd4276"; // Replace with your real NewsAPI key
      const url = `https://newsapi.org/v2/everything?sources=bloomberg&sortBy=publishedAt&pageSize=3&apiKey=${apiKey}`;

    async function fetchNews() {
      const res = await fetch(url);
      const data = await res.json();
      const container = document.getElementById('newsGrid');
      container.innerHTML = '';

      data.articles.forEach(article => {
        const card = document.createElement('div');
        card.className = 'news-card';

        card.innerHTML = `
          <img src="${article.urlToImage || 'https://via.placeholder.com/400x200'}" class="news-image">
          <div class="news-content">
            <div class="news-tag">Bloomberg</div>
            <div class="news-title">${article.title}</div>
            <div class="news-date">${new Date(article.publishedAt).toDateString()}</div>
            <p>${article.description?.slice(0, 100) || ''}...</p>
            <a href="${article.url}" class="read-more" target="_blank">Read More →</a>
          </div>
        `;
        container.appendChild(card);
      });
    }

    fetchNews();



    
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

        hamburger.addEventListener('click', () => {
          mobileMenu.classList.toggle('show');
  });



  document.addEventListener("DOMContentLoaded", function () {
    const barSegments = document.querySelectorAll(".bar div");

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // Optional: remove if repeatable animation is needed
        }
      });
    }, {
      threshold: 0.5
    });

    barSegments.forEach(segment => {
      observer.observe(segment);
    });
  });

  
  const scrollElements = document.querySelectorAll('.scroll-reveal');

  const elementInView = (el, offset = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= window.innerHeight - offset;
  };

  const displayScrollElement = (el) => {
    el.classList.add('active');
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 100)) {
        displayScrollElement(el);
      }
    });
  };

  window.addEventListener('scroll', () => {
    handleScrollAnimation();
  });

  // Initial trigger
  handleScrollAnimation();

