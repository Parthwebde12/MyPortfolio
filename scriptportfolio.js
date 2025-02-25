
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
      } else {
        backToTopButton.style.display = 'none';
      }
    });

    backToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.5 });

    sections.forEach(section => {
      observer.observe(section);
    });

    const themeToggleButton = document.getElementById('theme-toggle');
    const rootElement = document.documentElement;

    themeToggleButton.addEventListener('click', () => {
      if (rootElement.hasAttribute('data-theme')) {
        rootElement.removeAttribute('data-theme');
      } else {
        rootElement.setAttribute('data-theme', 'dark');
      }
    });
  