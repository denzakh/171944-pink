
// расстановка тегов в "немобильной" версии
function no_mobile_tags () {
  // alert('не мобильная версия');
  if (document.querySelector(".no-mobile-fieldset") == null) {
    if (document.querySelector(".no-mobile-legend") == null) {
      // собираем переменные (родитель, зпголовок)
      parent = document.querySelector(".for-fieldset");
      org_tagline = document.querySelector(".for-legend");
      // забираем содержимое заголовка
      org_tagline_inner = document.querySelector(".for-legend").innerHTML;
      // модифицируем содержимое, добавляя legend
      new_tagline = '<legend class="no-mobile-legend">' + org_tagline_inner + '</legend>';
      // удаляем заголовок
      parent.removeChild(org_tagline);
      // читаем обновленное содержимое родителя
      parent_inner = document.querySelector(".for-fieldset").innerHTML;
      // модифициррум содержимое, добавляем legend и fieldset
      new_parent_inner = '<fieldset class="no-mobile-fieldset">' + new_tagline + parent_inner + '</fieldset>';
      // вставляем содержимое в родителя
      parent.innerHTML = new_parent_inner;
    }
  }
}

// расстановка тегов в мобильной версии
function mobile_tags () {
  // alert('мобильная версия');
  if (document.querySelector(".no-mobile-fieldset") != null) {
    if (document.querySelector(".no-mobile-legend") != null) {

        parent = document.querySelector(".for-fieldset");
        fieldset = document.querySelector(".no-mobile-fieldset");
        legend = document.querySelector(".no-mobile-legend");
        // сохраняем содержимое legend
        legend_inner = document.querySelector(".no-mobile-legend").innerHTML;
        // удаляем legend (тут родитель fieldset)
        fieldset.removeChild(legend);
        // сохраняем содержимое fiedset
        fieldset_inner = document.querySelector(".no-mobile-fieldset").innerHTML;
        // удаляем fiedset
        parent.removeChild(fieldset);
        // добавляем заголовок к содержимому
        parent_inner_new = '<h2 class="form__part-title for-legend">' + legend_inner + '</h2>' + fieldset_inner;
        // вставляем содержимое в родителя
        parent.innerHTML = parent_inner_new;
    }
  }
}

// при изменении размеров окна
function resize() {
  // window_width
  var window_width = window.innerWidth;

  if (window_width < 700) {
    // alert('мобильная версия');
    mobile_tags ();
  } else {
    no_mobile_tags ();
  }
}


window.onresize = function () {
  resize();
}
