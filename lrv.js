//Vars

let kg = 0;
let list = [];
let linksArr = [];
let currObj = {};

//Strings

const alertWrong = "Невірно заповнене поле ваги пацієнта";
const alertTab = "Використовуйте таблетовану форму";

const every6 = "кожні 6 годин";
const every8 = "кожні 8 годин";
const every12 = "кожні 12 годин";
const every24 = "кожні 24 години";

const infusion = "в/в інфузії";
const internally = "внутрішньо";
const intramuscularly = "внутрішньом'язово"

const anyAge = "для будь-якого віку";
const agePlus12 = "12 років та старші";
const ageInfant = "тільки для дітей";
const ageOneMonth = "для дітей від одного місяця";
const ageTwoMonth = "для дітей від двох місяців";
const ageThreeMonth = "для дітей від трьох місяців";
const ageTwoYears = "для дітей від двох років"

//Constructors

function Drug(index, name, title, form, dose, image, frequency, way, range) {
  this.index = index;
  this.name = name,
    this.title = title,
    this.form = form,
    this.dose = dose,
    this.image = image,
    this.frequency = frequency,
    this.way = way,
    this.range = range,
    this.link = linksArr[index];
}
//Methods

//Counting functions

function dcLoprax(kg) {
  let result = 0;
  if (kg < 50 && kg > 0) {
    result = kg / 5;
    return result + "мл";
  }
  else if (kg < 200 && kg > 0) {
    alert(alertTab);
  }
  else alert(alertWrong)
}

function dcMetrogil(kg) {
  if (kg < 67 && kg > 0) {
    return (kg * 3 / 2) + " мл";
  }
  else if (kg < 200 && kg > 0) {
    return 100 + " мл"
  }
  else (alert(alertWrong))
}

function dcAmoxyclav250(kg) {
  let result = 0;
  if (kg < 40 && kg > 0) {
    result = kg / 6;
    return result.toFixed(1) + " мл";
  }
  else if (kg < 200 && kg > 0) {
    alert(alertTab);
  }
  else alert(alertWrong)
}

function dcAmoxyclav125(kg) {
  let result = 0;
  if (kg < 30 && kg > 0) {
    result = kg / 3;
    return result.toFixed(1) + " мл";
  }
  else if (kg < 40 && kg > 0) {
    alert("Використовуйте іншу форму порошоку для оральної суспензії, 250мг/5мл")
  }
  else if (kg < 200 && kg > 0) {
    alert(alertTab);
  }
  else alert(alertWrong)
}

function dcCefodox50(kg) {
  let result = 0;
  if (kg < 21 && kg > 0) {
    result = kg / 2;
    return result + " мл";
  }
  else if (kg < 40 && kg > 0) {
    alert("Використовуйте іншу форму порошоку для оральної суспензії, 100мг/5мл")
  }
  else if (kg < 200 && kg > 0) {
    alert(alertTab);
  }
  else alert(alertWrong)
}

function dcCefodox100(kg) {
  let result = 0;
  if (kg < 41 && kg > 0) {
    result = kg / 4;
    return result.toFixed(1) + " мл";
  }
  else if (kg < 200 && kg > 0) {
    alert(alertTab);
  }
  else alert(alertWrong)
}

function dcLincomycin(kg) {
  let result = 0;
  if (kg < 40 && kg > 0) {
    currObj.frequency = every12;
    $("#li2").text(currObj.frequency);
    result = kg / 20;
    return result.toFixed(1) + " мл";
  }
  else if (kg < 200 && kg > 0) {
    currObj.frequency = every8;
    $("#li2").text(currObj.frequency);
    result = kg / 30;
    return result.toFixed(1) + " мл"
  }

  else (alert(alertWrong))
}

function dcPanadol(kg) {
  let result = 0;
  if (kg < 40 && kg > 0) {
    result = kg / 2;
    return result + "мл";
  }
  else if (kg < 200 && kg > 0) {
    alert(alertTab);
  }
  else alert(alertWrong)
}

function dcNurofenSyrup(kg) {
  let result = 0;
  if (kg < 40 && kg > 0) {
    result = kg / 10 * 4;
    return result.toFixed(1) + "мл";
  }
  else if (kg < 200 && kg > 0) {
    alert(alertTab);
  }
  else alert(alertWrong)
}

function dcAugmentin200(kg) {
  let result = 0;
  if (kg < 40 && kg > 0) {
    result = kg * 56 / 100;
    return result.toFixed(1) + " мл";
  }
  else if (kg < 200 && kg > 0) {
    alert(alertTab);
  }
  else alert(alertWrong)
}

function dcAugmentin400(kg) {
  let result = 0;
  if (kg < 40 && kg > 0) {
    result = kg * 28 / 100;
    return result.toFixed(1) + " мл";
  }
  else if (kg < 200 && kg > 0) {
    alert(alertTab);
  }
  else alert(alertWrong)
}

function dcAugmentin600(kg) {
  let result = 0;
  if (kg < 40 && kg > 0) {
    result = kg * 38 / 100;
    return result.toFixed(1) + " мл";
  }
  else if (kg < 200 && kg > 0) {
    alert(alertTab);
  }
  else alert(alertWrong)
}

function dcSumamed100(kg) {
  let result = 0;
  if (kg < 16 && kg > 0) {
    result = kg / 2;
    return result.toFixed(1) + " мл";
  }
  else if (kg < 200 && kg > 0) {
    alert("Використовуйте форму Сумамед форте");
  }
  else alert(alertWrong)
}

function dcSumamed200(kg) {
  let result = 0;
  if (kg < 16 && kg > 0) {
    alert("Використовуйте форму Сумамед (100мг/5мл)");
  }
  else if (kg < 200 && kg > 0) {
    result = kg / 4;
    return result.toFixed(1) + " мл";

  }
  else alert(alertWrong)
}


function dcLoratadin(kg) {
  let result = 0;
  if (kg < 30 && kg > 0) {
    result = 5;
    return result.toFixed(1) + " мл";
  }
  else if (kg < 200 && kg > 0) {
    result = 10;
    return result.toFixed(1) + " мл";

  }
  else alert(alertWrong)
}

function dcFenistil(kg) {
  let result = 0;

  if (kg < 61 && kg > 0) {
    result = kg * 2 / 3;
    return result.toFixed(0) + " крап.";

  }
  else alert(alertWrong)
}

function dcEnterogermina(kg) {
  let result = "";

  if (kg < 200 && kg > 0) {
    result = "По 1 флакону (5мл)"
    return result
  }
  else alert(alertWrong)
}


function dcCefix(kg) {
  let result = 0;
  if (kg < 40 && kg > 0) {
    result = kg * 2 / 5;
    return result + "мл";
  }
  else if (kg < 200 && kg > 0) {
    alert(alertTab);
  }
  else alert(alertWrong)
}


// Create objects

function Pusher(index, name, title, form, dose, image, frequency, way, range) {
  $('select').append("<option value='" + index + "'>" + title + "</option>")
  return list.push(new Drug(index, name, title, form, dose, image, frequency, way, range))
}

// Push links

function linksPusher(link) {
  return linksArr.push(link);
}



//Action
linksPusher("https://tabletki.ua/%D0%9B%D0%BE%D0%BF%D1%80%D0%B0%D0%BA%D1%81/1670/");
Pusher(0, "loprax", "Лопракс", "Порошок для оральної суспензії, 100мг/5мл, по 50 мл у флаконі", dcLoprax, "images/0.jpg", every12, internally, ageInfant);
linksPusher("http://mozdocs.kiev.ua/likiview.php?id=6102");
Pusher(1, "metrogil", "Метрогіл", "Розчин для інфузій по 100 мл (5 мг/мл) у флаконах № 1", dcMetrogil, "images/1.jpg", every8, infusion, anyAge);
linksPusher("http://mozdocs.kiev.ua/likiview.php?id=30133");
Pusher(2, "amoxyclav250", "Амоксиклав(250/62.5мг)", "Порошок для оральної суспензії, 250мг/5мл", dcAmoxyclav250, "images/2.jpg", every8, internally, ageInfant);
linksPusher("http://mozdocs.kiev.ua/likiview.php?id=30133")
Pusher(3, "amoxyclav125", "Амоксиклав(125/31.25мг)", "Порошок для оральної суспензії, 125мг/5мл", dcAmoxyclav125, "images/3.jpg", every8, internally, ageInfant);
linksPusher("https://tabletki.ua/%D0%A6%D0%B5%D1%84%D0%BE%D0%B4%D0%BE%D0%BA%D1%81/")
Pusher(4, "cefodox50", "Цефодокс(50мг/5мл)", "Порошок для оральної суспензії, 50мг/5мл", dcCefodox50, "images/4.jpg", every12, internally, ageInfant);
linksPusher("https://tabletki.ua/%D0%A6%D0%B5%D1%84%D0%BE%D0%B4%D0%BE%D0%BA%D1%81/")
Pusher(5, "cefodox100", "Цефодокс(100мг/5мл)", "Порошок для оральної суспензії, 100мг/5мл", dcCefodox100, "images/5.jpg", every12, internally, ageInfant);
linksPusher("http://mozdocs.kiev.ua/likiview.php?id=22242");
Pusher(6, "lincomycin", "Лінкоміцин", "Розчин для ін'єкцій 30% по 1 мл або по 2 мл в ампулах", dcLincomycin, "images/6.jpg", every12, intramuscularly, "для дітейстарших одного місяця");
linksPusher("https://tabletki.ua/%D0%9F%D0%B0%D0%BD%D0%B0%D0%B4%D0%BE%D0%BB-%D0%B1%D0%B5%D0%B1%D0%B8/");
Pusher(7, "panadol", "Панадол бебі", "Суспензія оральна", dcPanadol, "images/7.jpg", every8, internally, ageTwoMonth);
linksPusher("http://mozdocs.kiev.ua/likiview.php?id=8343");
Pusher(8, "nurofen", "Нурофен", "Суспензія оральна", dcNurofenSyrup, "images/8.jpg", every8, internally, ageInfant);
linksPusher("https://tabletki.ua/%D0%90%D1%83%D0%B3%D0%BC%D0%B5%D0%BD%D1%82%D0%B8%D0%BD/");
Pusher(9, "augmentin200", "Аугментин (200/28.5мг)", "Порошок для оральної суспензії, 200мг/5мл", dcAugmentin200, "images/9.jpg", every12, internally, ageTwoMonth);
linksPusher("https://tabletki.ua/%D0%90%D1%83%D0%B3%D0%BC%D0%B5%D0%BD%D1%82%D0%B8%D0%BD/30461/");
Pusher(10, "augmentin400", "Аугментин (400/57мг)", "Порошок для оральної суспензії, 400мг/5мл", dcAugmentin200, "images/10.jpg", every12, internally, ageTwoMonth);
linksPusher("https://tabletki.ua/%D0%90%D1%83%D0%B3%D0%BC%D0%B5%D0%BD%D1%82%D0%B8%D0%BD-es/");
Pusher(11, "augmentin600", "Аугментин (600/42,9мг)", "Порошок для оральної суспензії, 600мг/5мл", dcAugmentin600, "images/11.jpg", every12, internally, ageThreeMonth);
linksPusher("https://tabletki.ua/%D0%A1%D1%83%D0%BC%D0%B0%D0%BC%D0%B5%D0%B4/13105/");
Pusher(12, "sumamed100", "Сумамед (100 мг/5 мл)", "Порошок для оральної суспензії, 100мг/5мл", dcSumamed100, "images/12.jpg", every24, internally, "для дітей масою до 16 кг");
linksPusher("https://tabletki.ua/%D0%A1%D1%83%D0%BC%D0%B0%D0%BC%D0%B5%D0%B4-%D1%84%D0%BE%D1%80%D1%82%D0%B5/");
Pusher(13, "sumamed200", "Сумамед форте(200 мг/5 мл)", "Порошок для оральної суспензії, 200мг/5мл", dcSumamed200, "images/13.jpg", every24, internally, anyAge);
linksPusher("https://tabletki.ua/%D0%9B%D0%BE%D1%80%D0%B0%D1%82%D0%B0%D0%B4%D0%B8%D0%BD/2075/");
Pusher(14, "loratadin", "Лоратадин", "Сироп, 1 мг/мл ", dcLoratadin, "images/14.jpg", every24, internally, ageTwoYears);
linksPusher("https://tabletki.ua/%D0%A4%D0%B5%D0%BD%D0%B8%D1%81%D1%82%D0%B8%D0%BB/");
Pusher(15, "fenistil", "Феністил", "Краплі оральні, 1 мг/мл ", dcFenistil, "images/15.jpg", every8, internally, ageOneMonth);
linksPusher("https://tabletki.ua/%D0%AD%D0%BD%D1%82%D0%B5%D1%80%D0%BE%D0%B6%D0%B5%D1%80%D0%BC%D0%B8%D0%BD%D0%B0-%D1%84%D0%BE%D1%80%D1%82%D0%B5/");
Pusher(16, "enterogermina", "Ентерожерміна форте", "Суспензія оральна", dcEnterogermina, "images/16.jpg", every24, internally, anyAge);

linksPusher("http://mozdocs.kiev.ua/likiview.php?id=4381");
Pusher(17, "cefix", "Цефікс, 100мг/5мл", "Порошок для оральної суспензії, 100 мг/5 мл", dcCefix, "images/17.jpg", every24, internally, ageInfant);




$('select').change(function () {
  if ($(this).val() < 1000) {
    $("#dose").text("");
    for (let i = 0; i < list.length; i++) {
      if (list[i].index == $(this).val()) {
        currObj = list[i];
      }
    }

    $("#li1").removeClass("bg-warning");
    $("#dose").text("Разова доза");

    $(".card-img-top").attr("src", currObj.image);
    $(".card-title").text(currObj.title);
    $("#form-title").text(currObj.form);
    $("#li2").text(currObj.frequency);
    $("#li3").text(currObj.way);

    $("#linkFull").attr("href", currObj.link);
    $("#li4").text(currObj.range);
  }
});

$("input[type='text']").on("keypress", function (event) {
  if (event.which === 13) {
    kg = $(this).val(); // var get a value of input
    $("#dose").text(currObj.dose(kg));
    $("#li1").addClass("bg-warning");
  }
});



