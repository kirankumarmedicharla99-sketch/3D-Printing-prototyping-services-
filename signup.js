
document.addEventListener('DOMContentLoaded', () => {

  const htmlEl = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const rtlToggle = document.getElementById('rtlToggle');

  const signupForm = document.getElementById('signupForm');
  const signupName = document.getElementById('signupName');
  const signupEmail = document.getElementById('signupEmail');
  const signupPassword = document.getElementById('signupPassword');
  const signupConfirmPassword = document.getElementById('signupConfirmPassword');
  const toggleSignupPasswordBtn = document.getElementById('toggleSignupPasswordBtn');
  const toggleSignupPasswordIcon = document.getElementById('toggleSignupPasswordIcon');
  const toggleConfirmPasswordBtn = document.getElementById('toggleConfirmPasswordBtn');
  const toggleConfirmPasswordIcon = document.getElementById('toggleConfirmPasswordIcon');
  const passwordMatchHint = document.getElementById('passwordMatchHint');
  const termsAgreement = document.getElementById('termsAgreement');
  const submitSignupBtn = document.getElementById('submitSignupBtn');

  const googleSignupBtn = document.getElementById('googleSignupBtn');
  const appleSignupBtn = document.getElementById('appleSignupBtn');

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

  if (toggleSignupPasswordBtn && signupPassword && toggleSignupPasswordIcon) {
    toggleSignupPasswordBtn.addEventListener('click', () => {
      const isPassword = signupPassword.getAttribute('type') === 'password';
      signupPassword.setAttribute('type', isPassword ? 'text' : 'password');
      toggleSignupPasswordIcon.classList.toggle('fa-eye', !isPassword);
      toggleSignupPasswordIcon.classList.toggle('fa-eye-slash', isPassword);
    });
  }

  if (toggleConfirmPasswordBtn && signupConfirmPassword && toggleConfirmPasswordIcon) {
    toggleConfirmPasswordBtn.addEventListener('click', () => {
      const isPassword = signupConfirmPassword.getAttribute('type') === 'password';
      signupConfirmPassword.setAttribute('type', isPassword ? 'text' : 'password');
      toggleConfirmPasswordIcon.classList.toggle('fa-eye', !isPassword);
      toggleConfirmPasswordIcon.classList.toggle('fa-eye-slash', isPassword);
    });
  }

  function checkPasswordMatch() {
    if (!passwordMatchHint) return;
    const p1 = signupPassword?.value || '';
    const p2 = signupConfirmPassword?.value || '';

    if (!p2) {
      passwordMatchHint.innerHTML = '';
      passwordMatchHint.className = 'password-hint';
      return;
    }

    if (p1 === p2) {
      passwordMatchHint.innerHTML = '<i class="fa-solid fa-circle-check"></i> Passwords match perfectly.';
      passwordMatchHint.className = 'password-hint valid';
    } else {
      passwordMatchHint.innerHTML = '<i class="fa-solid fa-circle-xmark"></i> Passwords do not match.';
      passwordMatchHint.className = 'password-hint invalid';
    }
  }

  if (signupConfirmPassword) {
    signupConfirmPassword.addEventListener('input', checkPasswordMatch);
  }
  if (signupPassword) {
    signupPassword.addEventListener('input', () => {
      if (signupConfirmPassword?.value) checkPasswordMatch();
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

  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameVal = signupName ? signupName.value.trim() : '';
      const emailVal = signupEmail ? signupEmail.value.trim() : '';
      const passVal = signupPassword ? signupPassword.value : '';
      const confirmVal = signupConfirmPassword ? signupConfirmPassword.value : '';
      const agreed = termsAgreement ? termsAgreement.checked : false;

      if (!nameVal || nameVal.length < 2) {
        showToast('Full Name Required', 'Please provide your full legal name or organization contact.', 'error');
        signupName?.focus();
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailVal || !emailPattern.test(emailVal)) {
        showToast('Valid Email Required', 'Please enter a valid enterprise email address.', 'error');
        signupEmail?.focus();
        return;
      }

      if (!passVal || passVal.length < 8) {
        showToast('Password Strength', 'Password must be at least 8 characters long.', 'error');
        signupPassword?.focus();
        return;
      }

      if (passVal !== confirmVal) {
        showToast('Password Mismatch', 'The passwords entered do not match. Please verify.', 'error');
        signupConfirmPassword?.focus();
        return;
      }

      if (!agreed) {
        showToast('Terms Agreement', 'Please agree to PrintNexa Terms and NDA protection standards to proceed.', 'error');
        termsAgreement?.focus();
        return;
      }

      if (submitSignupBtn) {
        submitSignupBtn.disabled = true;
        submitSignupBtn.innerHTML = `
          <i class="fa-solid fa-circle-notch fa-spin" aria-hidden="true"></i>
          <span>Creating Workspace...</span>
        `;
      }

      setTimeout(() => {

        const newUser = {
          name: nameVal,
          email: emailVal,
          role: 'Additive Engineering Lead',
          joinedDate: new Date().toISOString()
        };
        localStorage.setItem('printnexa_session', JSON.stringify(newUser));
        localStorage.setItem('printnexa_saved_email', emailVal);

        showToast(
          'Account Created!', 
          `Welcome to PrintNexa, ${nameVal}! Your 3D additive workspace is ready.`, 
          'success', 
          2500
        );

        setTimeout(() => {
          window.location.href = 'dashboard.html';
        }, 1300);
      }, 1200);
    });
  }

  if (googleSignupBtn) {
    googleSignupBtn.addEventListener('click', () => {
      googleSignupBtn.disabled = true;
      googleSignupBtn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> <span>Initializing Google...</span>`;

      showToast('Google Onboarding', 'Importing Google Workspace profile...', 'info', 2000);

      setTimeout(() => {
        const newUser = {
          name: 'Google Engineer',
          email: 'user.verified@printnexa.corp',
          role: 'Verified Partner',
          joinedDate: new Date().toISOString()
        };
        localStorage.setItem('printnexa_session', JSON.stringify(newUser));
        showToast('Welcome!', 'Google Workspace account verified. Launching console...', 'success', 1500);

        setTimeout(() => {
          window.location.href = 'dashboard.html';
        }, 1000);
      }, 1200);
    });
  }

  if (appleSignupBtn) {
    appleSignupBtn.addEventListener('click', () => {
      appleSignupBtn.disabled = true;
      appleSignupBtn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> <span>Initializing Apple...</span>`;

      showToast('Apple ID Onboarding', 'Connecting Apple ID profile...', 'info', 2000);

      setTimeout(() => {
        const newUser = {
          name: 'Apple ID Partner',
          email: 'partner@appleid.com',
          role: 'Verified Partner',
          joinedDate: new Date().toISOString()
        };
        localStorage.setItem('printnexa_session', JSON.stringify(newUser));
        showToast('Welcome!', 'Apple account registered successfully. Launching console...', 'success', 1500);

        setTimeout(() => {
          window.location.href = 'dashboard.html';
        }, 1000);
      }, 1200);
    });
  }
});
