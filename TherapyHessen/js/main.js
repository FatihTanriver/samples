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
  $("[data-lang=dataMainNav1]").text(language.dataMainNav1);
  $("[data-lang=dataMainNav2]").text(language.dataMainNav2);
  $("[data-lang=dataMainNav3]").text(language.dataMainNav3);
  $("[data-lang=dataMainNav4]").text(language.dataMainNav4);
  $("[data-lang=dataMainNav5]").text(language.dataMainNav5);
  $("[data-lang=dataMainNav6]").text(language.dataMainNav6);

  $("[data-lang=data6]").text(language.data6);
  $("[data-lang=data7]").text(language.data7);
  $("[data-lang=data8]").text(language.data8);
  $("[data-lang=dataContactTitle]").text(language.dataContactTitle);
}
