function changeLanguage(langKey) {
  //localStorage.getItem("language") == null ? setLanguage(langKey) : false;
  setLanguage(langKey);
  language = localStorage.getItem("language");
  var basePathName = window.location.pathname + "language/";

  $.ajax({
    url: basePathName + localStorage.getItem("language") + ".json",
    dataType: "json",
    async: false,
    dataType: "json",
    success: function (lang) {
      language = lang;
    },
  });

  updateTranslations();

  $(".site-language img").css("opacity", "0.5");
  $(`.icon-${langKey} img`).css("opacity", "1");
}

function setLanguage(lang) {
  localStorage.setItem("language", lang);
}

function updateTranslations() {
  //language = localStorage.getItem("language");
  var newVal = language.date;
  $("[data-lang=data1]").text(language.data1);
  $("[data-lang=data2]").text(language.data2);
  $("[data-lang=data3]").text(language.data3);
  $("[data-lang=data4]").text(language.data4);
  $("[data-lang=data5]").text(language.data5);
  $("[data-lang=data6]").text(language.data6);
  $("[data-lang=data7]").text(language.data7);
}
