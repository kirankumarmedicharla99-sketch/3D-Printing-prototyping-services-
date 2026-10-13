
document.addEventListener('DOMContentLoaded', () => {

  const htmlEl = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const rtlToggle = document.getElementById('rtlToggle');
  const loginForm = document.getElementById('loginForm');
  const loginEmail = document.getElementById('loginEmail');
  const loginPassword = document.getElementById('loginPassword');
  const togglePasswordBtn = document.getElementById('togglePasswordBtn');
  const togglePasswordIcon = document.getElementById('togglePasswordIcon');
  const rememberMe = document.getElementById('rememberMe');
  const submitLoginBtn = document.getElementById('submitLoginBtn');
  const forgotPasswordBtn = document.getElementById('forgotPasswordBtn');
  const googleLoginBtn = document.getElementById('googleLoginBtn');
  const appleLoginBtn = document.getElementById('appleLoginBtn');

  const savedTheme = localStorage.getItem('printnexa_theme') || 'light';
  htmlEl.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  const savedDir = localStorage.getItem('printnexa_dir') || 'ltr';
  htmlEl.setAttribute('dir', savedDir);

  function updateThemeIcon(theme) {
    if (!themeIcon) return;
    if (theme === 'dark') {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    } else {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = htmlEl.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      htmlEl.setAttribute('data-theme', next);
      localStorage.setItem('printnexa_theme', next);
      updateThemeIcon(next);
    });
  }

  if (rtlToggle) {
    rtlToggle.addEventListener('click', () => {
      const current = htmlEl.getAttribute('dir') || 'ltr';
      const next = current === 'rtl' ? 'ltr' : 'rtl';
      htmlEl.setAttribute('dir', next);
      localStorage.setItem('printnexa_dir', next);
    });
  }

  const savedUserEmail = localStorage.getItem('printnexa_saved_email');
  if (savedUserEmail && loginEmail) {
    loginEmail.value = savedUserEmail;
    if (rememberMe) rememberMe.checked = true;
  }

  if (togglePasswordBtn && loginPassword && togglePasswordIcon) {
    togglePasswordBtn.addEventListener('click', () => {
      const isPassword = loginPassword.getAttribute('type') === 'password';
      loginPassword.setAttribute('type', isPassword ? 'text' : 'password');
      togglePasswordIcon.classList.toggle('fa-eye', !isPassword);
      togglePasswordIcon.classList.toggle('fa-eye-slash', isPassword);
    });
  }

  let toastContainer = document.querySelector('.auth-toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'auth-toast-container';
    document.body.appendChild(toastContainer);
  }

  function showToast(title, message, type = 'info', duration = 3500) {
    const toast = document.createElement('div');
    toast.className = `auth-toast ${type}`;

    let iconClass = 'fa-circle-info';
    if (type === 'success') iconClass = 'fa-circle-check';
    if (type === 'error') iconClass = 'fa-triangle-exclamation';

    toast.innerHTML = `
      <i class="fa-solid ${iconClass}" aria-hidden="true"></i>
      <div class="auth-toast-text">
        <div class="auth-toast-title">${title}</div>
        <div class="auth-toast-msg">${message}</div>
      </div>
    `;

    toastContainer.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 400);
    }, duration);
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const emailVal = loginEmail ? loginEmail.value.trim() : '';
      const passwordVal = loginPassword ? loginPassword.value : '';

      if (!emailVal) {
        showToast('Required Field', 'Please enter your email or Client ID.', 'error');
        loginEmail?.focus();
        return;
      }

      if (!passwordVal) {
        showToast('Required Field', 'Please enter your account password.', 'error');
        loginPassword?.focus();
        return;
      }

      if (passwordVal.length < 6) {
        showToast('Invalid Password', 'Password must be at least 6 characters.', 'error');
        loginPassword?.focus();
        return;
      }

      if (rememberMe && rememberMe.checked) {
        localStorage.setItem('printnexa_saved_email', emailVal);
      } else {
        localStorage.removeItem('printnexa_saved_email');
      }

      if (submitLoginBtn) {
        submitLoginBtn.disabled = true;
        submitLoginBtn.innerHTML = `
          <i class="fa-solid fa-circle-notch fa-spin" aria-hidden="true"></i>
          <span>Authenticating...</span>
        `;
      }

      setTimeout(() => {

        const sessionUser = {
          email: emailVal,
          name: emailVal.split('@')[0] || 'Enterprise Client',
          role: 'Industrial Partner',
          loginTime: new Date().toISOString()
        };
        localStorage.setItem('printnexa_session', JSON.stringify(sessionUser));

        showToast('Access Granted', 'Welcome back! Redirecting to industrial console...', 'success', 2000);

        setTimeout(() => {
          window.location.href = 'dashboard.html';
        }, 1200);
      }, 1100);
    });
  }

  if (googleLoginBtn) {
    googleLoginBtn.addEventListener('click', () => {
      googleLoginBtn.disabled = true;
      googleLoginBtn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> <span>Connecting Google...</span>`;

      showToast('Google Workspace Auth', 'Verifying corporate Google credentials...', 'info', 2000);

      setTimeout(() => {
        const sessionUser = {
          email: 'google.client@printnexa.corp',
          name: 'Google Workspace User',
          role: 'Verified Engineer',
          loginTime: new Date().toISOString()
        };
        localStorage.setItem('printnexa_session', JSON.stringify(sessionUser));
        showToast('Google Verified', 'Authentication successful. Redirecting...', 'success', 1500);

        setTimeout(() => {
          window.location.href = 'dashboard.html';
        }, 1000);
      }, 1200);
    });
  }

  if (appleLoginBtn) {
    appleLoginBtn.addEventListener('click', () => {
      appleLoginBtn.disabled = true;
      appleLoginBtn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> <span>Connecting Apple...</span>`;

      showToast('Apple ID Auth', 'Authenticating with Apple ID...', 'info', 2000);

      setTimeout(() => {
        const sessionUser = {
          email: 'apple.id@icloud.com',
          name: 'Apple ID Partner',
          role: 'Verified Engineer',
          loginTime: new Date().toISOString()
        };
        localStorage.setItem('printnexa_session', JSON.stringify(sessionUser));
        showToast('Apple ID Verified', 'Authentication successful. Redirecting...', 'success', 1500);

        setTimeout(() => {
          window.location.href = 'dashboard.html';
        }, 1000);
      }, 1200);
    });
  }

  if (forgotPasswordBtn) {
    forgotPasswordBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const currentEmail = loginEmail ? loginEmail.value.trim() : '';

      if (currentEmail) {
        showToast(
          'Password Reset Sent', 
          `Instructions and recovery link sent to ${currentEmail}. Check your inbox.`, 
          'success', 
          4000
        );
      } else {
        const promptEmail = prompt('Please enter your account email to receive reset instructions:');
        if (promptEmail && promptEmail.trim()) {
          showToast(
            'Reset Instructions Dispatched', 
            `A secure reset link has been dispatched to ${promptEmail.trim()}.`, 
            'success', 
            4000
          );
        }
      }
    });
  }
});
