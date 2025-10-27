document.addEventListener("DOMContentLoaded", () => {
    const elementsToAnimate = document.querySelectorAll('.parent');
  
    // 2. Siapin si 'mata-mata' (Observer)
    const observer = new IntersectionObserver((entries) => {
      // 'entries' itu daftar elemen yg lagi diamatin
      entries.forEach(entry => {
        
        // 3. KALO elemennya kelihatan di layar...
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Tambahin class .visible
          observer.unobserve(entry.target); // Berhenti ngamatin (biar hemat)
        }
      });
    }, {
      threshold: 0.1 // Animasi jalan pas 10% elemennya kelihatan
    });
  
    // 4. Suruh si 'mata-mata' buat ngamatin semua elemen kita
    elementsToAnimate.forEach(el => {
      observer.observe(el);
    });
  });