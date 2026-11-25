// LJ Peinture & Décoration : menu mobile, en-tête, galerie. Aucun service externe.
(function () {
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('menu');

  function closeMenu() {
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Ouvrir le menu');
  }
  toggle.addEventListener('click', function () {
    var open = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });

  function onScroll() { header.classList.toggle('is-scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.requestAnimationFrame(onScroll);

  // Galerie : masque les cadres « à venir » dès qu'une photo existe (navigateurs sans :has())
  var gallery = document.querySelector('.gallery');
  if (gallery && gallery.querySelector('.photo')) gallery.classList.add('has-photos');

  // Lien de menu actif selon la section visible
  var links = menu.querySelectorAll('a[href^="#"]');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) {
          if (a.getAttribute('href') === '#' + en.target.id) a.setAttribute('aria-current', 'true');
          else a.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    links.forEach(function (a) {
      var sec = document.querySelector(a.getAttribute('href'));
      if (sec) io.observe(sec);
    });
  }

  // Agrandissement des photos de chantier
  var box = document.querySelector('.lightbox');
  if (box && typeof box.showModal === 'function') {
    var boxImg = box.querySelector('img');
    var boxTxt = box.querySelector('p');
    document.querySelectorAll('.gallery .photo button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var img = btn.querySelector('img');
        var cap = btn.parentNode.querySelector('figcaption');
        boxImg.src = img.currentSrc || img.src;
        boxImg.alt = img.alt;
        boxTxt.textContent = cap ? cap.textContent : '';
        box.showModal();
      });
    });
    box.querySelector('.lightbox-close').addEventListener('click', function () { box.close(); });
    box.addEventListener('click', function (e) { if (e.target === box) box.close(); });
  }

  document.getElementById('annee').textContent = new Date().getFullYear();
})();
