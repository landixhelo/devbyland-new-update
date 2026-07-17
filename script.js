(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && "IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  function countUp(id, target, duration) {
    const element = document.getElementById(id);
    if (!element) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      element.textContent = String(Math.floor(start));
    }, 16);
  }

  const cardInfos = document.querySelectorAll(".card-info");
  if (cardInfos.length && "IntersectionObserver" in window) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("show");
        const numberEl = entry.target.querySelector("b");
        if (!numberEl) return;
        if (numberEl.id === "projects-count") countUp("projects-count", 85, 1500);
        if (numberEl.id === "clients-count") countUp("clients-count", 65, 1500);
        if (numberEl.id === "coffee-count") countUp("coffee-count", 2, 2000);
        statsObserver.unobserve(entry.target);
      });
    });

    cardInfos.forEach((card) => statsObserver.observe(card));
  }

  if (typeof emailjs !== "undefined") {
    emailjs.init("kookDvy7kGgKMqao4");
  }

  const contactForm = document.getElementById("contactForm");
  if (!contactForm) return;

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (typeof emailjs === "undefined") {
      const errorAlert = document.getElementById("errorAlert");
      if (errorAlert) errorAlert.style.display = "block";
      return;
    }

    const submitBtn = document.getElementById("submitBtn");
    const btnText = document.getElementById("btnText");
    const spinner = document.getElementById("spinner");
    const successAlert = document.getElementById("successAlert");
    const errorAlert = document.getElementById("errorAlert");

    if (submitBtn) submitBtn.disabled = true;
    if (btnText) btnText.textContent = "Duke dërguar...";
    if (spinner) spinner.classList.remove("d-none");
    if (successAlert) successAlert.style.display = "none";
    if (errorAlert) errorAlert.style.display = "none";

    const templateParams = {
      name: document.getElementById("name")?.value || "",
      email: document.getElementById("email")?.value || "",
      subject: document.getElementById("subject")?.value || "",
      service: document.getElementById("service")?.value || "",
      message: document.getElementById("message")?.value || "",
    };

    emailjs
      .send("service_gx2u7rr", "template_wul0p0k", templateParams)
      .then(function () {
        if (successAlert) successAlert.style.display = "block";
        contactForm.reset();
        if (submitBtn) submitBtn.disabled = false;
        if (btnText) btnText.textContent = "Dërgo Mesazhin";
        if (spinner) spinner.classList.add("d-none");
      })
      .catch(function () {
        if (errorAlert) errorAlert.style.display = "block";
        if (submitBtn) submitBtn.disabled = false;
        if (btnText) btnText.textContent = "Dërgo Mesazhin";
        if (spinner) spinner.classList.add("d-none");
      });
  });
})();
