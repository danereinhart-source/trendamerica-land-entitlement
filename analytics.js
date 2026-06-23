// Google Analytics 4 (GA4) — TrendAmerica
// Measurement ID lives here only. To change it, edit the line below.
(function () {
  var GA_ID = "G-DS0HNSG6Y0";
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_ID);
})();
