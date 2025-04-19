class LoginPopup {
    constructor() {
      this.body = document.getElementById('body')
      this.loginPopup = document.querySelector('main.login');
      this.loginForm = document.querySelector('.signin-container');
      this.loginButtons = document.querySelectorAll('.auth-buttons a:first-child');
      
      if (this.loginPopup) {
        this.init();
      }
    }
  
    init() {
      this.loginPopup.style.display = 'none';
      this.loginButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          this.openPopup();
        });
      });
  
      // Close when clicking outside
      this.loginPopup.addEventListener('click', (e) => {
        if (!this.loginForm.contains(e.target)) {
          this.closePopup();
        }
      });
  
      // Close with Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.closePopup();
        }
      });
    }
  
    openPopup() {
      this.loginPopup.style.display = 'flex';
      document.body.classList.add('login-active');
      this.body.style.overflow = 'hidden';
    }
  
    closePopup() {
      this.loginPopup.style.display = 'none';
      this.body.style.overflow = 'auto';
      document.body.classList.remove('login-active');
    }
  }


  window.addEventListener('load', () => new LoginPopup());
  // TEST

// Show/hide other language field
document.getElementById('native-language').addEventListener('change', function() {
    const otherContainer = document.getElementById('other-language-container');
    otherContainer.style.display = this.value === 'other' ? 'block' : 'none';
});

// Roadmap link animation
document.querySelector('.roadmap-link').addEventListener('mouseover', function() {
    this.style.transform = 'translateX(5px)';
});
document.querySelector('.roadmap-link').addEventListener('mouseout', function() {
    this.style.transform = 'translateX(0)';
});

  // END TEST
  
  // Initialize when window loads