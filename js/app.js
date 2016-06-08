// окно обратного ответа
if ( (document.querySelector(".page-header") != null) &&
     (document.querySelector(".page-header__toggle") != null) ) {


    // переменные
    var page_header = document.querySelector(".page-header");
    var toogle = document.querySelector(".page-header__toggle");
    // меняем
    toogle.addEventListener("click", function(event) {
      // меняем класс
      page_header.classList.toggle("page-header--closed");
        });

}
