document.addEventListener("DOMContentLoaded", () => {
  const langSwitcher = document.getElementById("languageSwitcher");
  const siteTitle = document.getElementById("siteTitle");
  const bookNowBtn = document.getElementById("bookNowBtn");
  const heroTitle = document.getElementById("heroTitle");
  const heroSubtitle = document.getElementById("heroSubtitle");

  const ratingValue = document.getElementById("ratingValue");
  const ratingCount = document.getElementById("ratingCount");
  const openUntil = document.getElementById("openUntil");
  const locationText = document.getElementById("locationText");
  const directionsLink = document.getElementById("directionsLink");

  const servicesTitle = document.getElementById("servicesTitle");
  const allBookBtns = document.querySelectorAll(".btn-pink");

  const teamTitle = document.getElementById("teamTitle");
  const seeAllTeam = document.getElementById("seeAllTeam");

  const galleryTitle = document.getElementById("galleryTitle");
  const galleryItems = document.querySelectorAll(".gallery-title");
  const galleryDescs = document.querySelectorAll(".gallery-desc");
  const viewAllGallery = document.getElementById("viewAllGallery");

  const dayNames = document.querySelectorAll(".day-name");
  const dayHours = document.querySelectorAll(".day-time");


  const contactTitle = document.getElementById("contactTitle");

  const translations = {
    en: {
      title: "Nai Beauty Boutique",
      bookNow: "Book Now",
      links: ["Services", "Our Team", "Gallery", "About Us"],

      openingTitle: "🕒 Opening Times",
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      hours: [
        "9:00 AM",
        "10:00 AM",
        "11:00 AM",
        "12:00 PM",
        "1:00 PM",
        "2:00 PM",
        "3:00 PM",
      ],
      contact: {
        title: "📞 Contact Us",
         instantConfirm: "Instant Confirmation",
      payByApp: "Pay by App",
      phoneNumber: "582792728",
      emailAddress: "info.naibeautyboutique@gmail.com"
      },
      findus: "📍 Find Us",
      


    },
    ar: {
      title: "ناي بيوتي بوتيك",
      bookNow: "احجز الآن",
      links: ["معلومات عنا", "خدماتنا", "فريقنا", "معرض الأعمال"],
      links: ["خدماتنا", "فريقنا", "معرض الأعمال", "معلومات عنا"],
      openingTitle: "🕒 مواعيد العمل",
      days: [
        "الإثنين",
        "الثلاثاء",
        "الأربعاء",
        "الخميس",
        "الجمعة",
        "السبت",
        "الأحد",
      ],
      hours: [
        "٩:٠٠ ص",
        "١٠:٠٠ ص",
        "١١:٠٠ ص",
        "١٢:٠٠ م",
        "١:٠٠ م",
        "٢:٠٠ م",
        "٣:٠٠ م",
      ],
      contact: {
        title: "📞 اتصل بنا",
         instantConfirm: "تأكيد فوري",
      payByApp: "الدفع عبر التطبيق",
      phoneNumber: "٥٨٢٧٩٢٧٢٨",
      emailAddress: "info.naibeautyboutique@gmail.com"
      },
        findus: "📍 موقعنا",
    },
  };

  translations.en.hero = {
    title: "Nai Beauty Boutique",
    subtitle: "Premium Beauty Services",
  };
  translations.ar.hero = {
    title: "ناي بيوتي بوتيك",
    subtitle: "خدمات تجميل متميزة",
  };
  translations.en.info = {
    rating: "4.8",
    reviews: "(299)",
    openUntil: "Open until 10:00PM",
    location: "King Salman Neighborhood, Riyadh",
    getDirections: "Get directions",
  };

  translations.ar.info = {
    rating: "4.8",
    reviews: "(٢٩٩)",
    openUntil: "مفتوح حتى 10:00 مساءً",
    location: "حي الملك سلمان، الرياض",
    getDirections: "الحصول على الاتجاهات",
  };
  translations.en.services = {
    title: "Our Services",
    bookNow: "Book Now",
  };

  translations.ar.services = {
    title: "خدماتنا",
    bookNow: "احجز الآن",
  };
  translations.en.team = {
    title: "Our Team",
    seeAll: "See all",
  };

  translations.ar.team = {
    title: "الفريق",
    seeAll: "عرض الكل",
  };

  translations.en.gallery = {
    title: "Our Gallery",
    images: [
      { title: "Gallery Image 1", desc: "Description of the image." },
      { title: "Gallery Image 2", desc: "Description of the image." },
      { title: "Gallery Image 3", desc: "Description of the image." },
      { title: "Gallery Image 4", desc: "Description of the image." },
      { title: "Gallery Image 5", desc: "Description of the image." },
      { title: "Gallery Image 6", desc: "Description of the image." },
    ],
    viewAll: "View All Gallery",
  };

  translations.ar.gallery = {
    title: "معرض الصور",
    images: [
      { title: "الصورة ١", desc: "وصف للصورة." },
      { title: "الصورة ٢", desc: "وصف للصورة." },
      { title: "الصورة ٣", desc: "وصف للصورة." },
      { title: "الصورة ٤", desc: "وصف للصورة." },
      { title: "الصورة ٥", desc: "وصف للصورة." },
      { title: "الصورة ٦", desc: "وصف للصورة." },
    ],
    viewAll: "عرض جميع الصور",
  };

  const heroSection = document.getElementById("heroSection");
  if (heroSection) {
    heroSection.style.backgroundImage = "url('../Images/hero-bg.jpg')";
  }
  const heroImage = document.getElementById("heroImage");
  if (heroImage) {
    heroImage.src = "../Images/hero-img.jpg";
  }
  const heroImageAlt = document.getElementById("heroImageAlt");
  if (heroImageAlt) {
    heroImageAlt.alt = "Nai Beauty Boutique";
  }

  const navLinks = document.querySelectorAll("nav a");


function updateContactSection(lang) {
  const t = translations[lang].contact;

  const contactTitle = document.getElementById("contactTitle");
  if (contactTitle) contactTitle.innerText = t.title;

  const instantConfirm = document.getElementById("instantConfirm");
  if (instantConfirm) instantConfirm.innerText = t.instantConfirm;

  const payByApp = document.getElementById("payByApp");
  if (payByApp) payByApp.innerText = t.payByApp;

  const phoneNumber = document.getElementById("phoneNumber");
  if (phoneNumber) phoneNumber.innerText = t.phoneNumber;

  const emailAddress = document.getElementById("emailAddress");
  if (emailAddress) emailAddress.innerText = t.emailAddress;
}





  langSwitcher.addEventListener("change", (e) => {
    const lang = e.target.value;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.classList.toggle("font-arabic", lang === "ar");

    const t = translations[lang];
    updateContactSection(lang);

    siteTitle.textContent = t.title;
    bookNowBtn.textContent = t.bookNow;
    navLinks.forEach((link, i) => (link.textContent = t.links[i]));
    heroTitle.textContent = t.hero.title;
    heroSubtitle.textContent = t.hero.subtitle;

    ratingValue.textContent = t.info.rating;
    ratingCount.textContent = t.info.reviews;
    openUntil.textContent = t.info.openUntil;
    locationText.textContent = t.info.location;
    directionsLink.textContent = t.info.getDirections;

    servicesTitle.textContent = t.services.title;
    allBookBtns.forEach((btn) => (btn.textContent = t.services.bookNow));

    teamTitle.textContent = t.team.title;
    seeAllTeam.textContent = t.team.seeAll;
    if (seeAllTeam) seeAllTeam.textContent = t.team.seeAll;

    galleryTitle.textContent = t.gallery.title;

    galleryItems.forEach((el, i) => {
      el.textContent = t.gallery.images[i]?.title || "";
    });
    galleryDescs.forEach((el, i) => {
      el.textContent = t.gallery.images[i]?.desc || "";
    });

    viewAllGallery.textContent = t.gallery.viewAll;

    document.querySelector("#openingTitle").innerText = t.openingTitle;

    const contactTitle = document.getElementById("contactTitle");
    if (contactTitle) {
      contactTitle.innerText = t.contact.title;
    }

    dayNames.forEach((el, idx) => {
      if (t.days[idx]) {
        el.innerText = t.days[idx];
      }
    });
    dayHours.forEach((el, idx) => {
      const start = t.hours[idx];
      const end = t.hours[idx + 1] || t.hours[idx];
      if (start && end) {
        el.innerText = `${start} - ${end}`;
      }
    });

    const findusTitle = document.querySelector(".find-us-title");
    if (findusTitle) {
      findusTitle.innerText = t.findus;
    }


  });







  document.querySelectorAll("[data-tab]").forEach((btn) => {
    btn.addEventListener("click", () => {
      // إزالة التفعيل من كل الأزرار
      document
        .querySelectorAll("[data-tab]")
        .forEach((b) => b.classList.remove("active"));

      // إخفاء كل التبويبات
      document
        .querySelectorAll(".tab-pane")
        .forEach((tab) => tab.classList.remove("show", "active"));

      // تفعيل الزر الحالي
      btn.classList.add("active");

      // إظهار التبويب المرتبط بالزر
      const tabId = btn.getAttribute("data-tab");
      const activeTab = document.querySelector(
        `.tab-pane[data-tab="${tabId}"]`
      );
      if (activeTab) {
        activeTab.classList.add("show", "active");
      }
    });
  });
});
