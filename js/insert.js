
function is_for_fieldset () {
  // проверка на существование хотя бы одного .for-fieldset и .for-legend
  if ( (document.querySelector(".for-fieldset") != null) &&
       (document.querySelector(".for-legend") != null)  ) {

    var parent_array = document.querySelectorAll(".for-fieldset");
    var for_legend_array = document.querySelectorAll(".for-legend");

    if ( (parent_array.length == for_legend_array.length) &&
         (parent_array.length > 0)   ) {
      return true;
    }
  }
}

function is_fieldset () {
  // проверка на существование хотя бы одного fieldset и legend
  if ( (document.querySelector(".no-mobile-fieldset") != null) &&
       (document.querySelector(".no-mobile-legend") != null)  ) {

    var fieldset_array = document.querySelectorAll(".no-mobile-fieldset");
    var legend_array = document.querySelectorAll(".no-mobile-legend");
    // alert(fieldset_array.length, legend_array.length);
    if ((fieldset_array.length == legend_array.length) &&
         (fieldset_array.length > 0)   ) {
      return true;
    }
  }
}

// расстановка тегов в "немобильной" версии
var no_mobile_tags = function (temporary_parent, temporary_for_legend, temporary_fieldset, temporary_legend) {
  // alert('не мобильная версия');

  // собираем переменные (родитель, заголовок)
  parent = temporary_parent;
  org_tagline = temporary_for_legend;
  // забираем содержимое заголовка
  org_tagline_inner = org_tagline.innerHTML;
  // модифицируем содержимое, добавляя legend
  new_tagline = '<legend class="no-mobile-legend">' + org_tagline_inner + '</legend>';
  // удаляем заголовок
  parent.removeChild(org_tagline);
  // читаем обновленное содержимое родителя
  parent_inner = parent.innerHTML;
  // модифициррум содержимое, добавляем legend и fieldset
  new_parent_inner = '<fieldset class="no-mobile-fieldset">' + new_tagline + parent_inner + '</fieldset>';
  // вставляем содержимое в родителя
  parent.innerHTML = new_parent_inner;
}


// расстановка тегов в мобильной версии
var for_mobile_tags = function (temporary_parent, temporary_for_legend, temporary_fieldset, temporary_legend) {
  // alert('мобильная версия');

  parent = temporary_parent;
  fieldset = temporary_fieldset; // тут проблема
  legend = temporary_legend;


  // сохраняем содержимое legend
  legend_inner = legend.innerHTML;
  // удаляем legend (тут родитель fieldset)
  fieldset.removeChild(legend);
  // сохраняем содержимое fiedset
  fieldset_inner = fieldset.innerHTML;
  // удаляем fiedset
  parent.removeChild(fieldset);
  // добавляем заголовок к содержимому
  parent_inner_new = '<h2 class="form__part-title for-legend">' + legend_inner + '</h2>' + fieldset_inner;
  // вставляем содержимое в родителя
  parent.innerHTML = parent_inner_new;
}

// перебор
var get_array_mobile_tag = function (temporary_tags) {
  var parent_array = document.querySelectorAll(".for-fieldset");
  var for_legend_array = document.querySelectorAll(".for-legend");
  var fieldset_array = document.querySelectorAll(".no-mobile-fieldset");
  var legend_array = document.querySelectorAll(".no-mobile-legend");

  // перебор
  var i;
  for (i = 0; i < parent_array.length; i++) {
    var temporary_parent = parent_array[i];
    var temporary_for_legend = for_legend_array[i];
    var temporary_fieldset = fieldset_array[i];
    var temporary_legend = legend_array[i];

    temporary_tags (temporary_parent, temporary_for_legend, temporary_fieldset, temporary_legend);
  }
}

// при изменении размеров окна
function resize() {
  // window_width
  var window_width = window.innerWidth;

  if (window_width < 700) {

    // alert('мобильная версия');
    if (is_fieldset()) {
      get_array_mobile_tag (for_mobile_tags);
      }

  } else {

    // alert('не мобильная версия');
    if (is_for_fieldset ()) {
      get_array_mobile_tag (no_mobile_tags);
    }

  }
}

document.addEventListener("DOMContentLoaded", resize);

window.onresize = function () {
  resize();
}
