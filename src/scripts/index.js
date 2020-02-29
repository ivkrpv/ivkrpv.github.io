function selectMenuItem(path) {
  var purePath = path.replace(/[\/]/g, '');

  return window.location.pathname.split('/').indexOf(purePath) != -1;
}

var config = {
  menu: [
    // {
    //   path: '/iphone-11pro/',
    //   title: '<i class="fa fa-mobile"></i>&nbsp;&nbsp;iPhone 11 Pro',
    // },
    {
      title: '<i class="fa fa-mosque"></i>&nbsp;&nbsp;<span class="l-istanbul"></span>',
      items: [
        {
          path: '/istanbul-1/',
          title: '<span class="l-ist-p1-desc"></span>',
        }, {
          path: '/istanbul-2/',
          title: '<span class="l-ist-p2-desc"></span>',
        },
      ],
    }, {
      title: '<i class="fa fa-mountain"></i>&nbsp;&nbsp;<span class="l-south"></span>',
      items: [
        {
          path: '/south-mountains/',
          title: '<span class="l-south-mountains"></span>',
        }, {
          path: '/south-404/',
          title: '<span class="l-south-404"></span>',
        }, {
          path: '/south-coast/',
          title: '<span class="l-south-coast"></span>',
        },
      ],
    }, {
      title: '<i class="fa fa-city"></i>&nbsp;&nbsp;NYC',
      items: [
        {
          path: '/nyc-part1/',
          title: '<span class="l-part"></span> 1',
        }, {
          path: '/nyc-part2/',
          title: '<span class="l-part"></span> 2',
        }, {
          path: '/nyc-part3/',
          title: '<span class="l-part"></span> 3',
        }, {
          path: '/nyc-part4/',
          title: '<span class="l-part"></span> 4',
        }, {
          path: '/nyc-part5/',
          title: '<span class="l-part"></span> 5',
        }, {
          path: '/nyc-part6/',
          title: '<span class="l-part"></span> 6',
        }, {
          path: '/nyc-part7/',
          title: '<span class="l-part"></span> 7',
        }, {
          path: '/nyc-part8/',
          title: '<span class="l-part"></span> 8',
        }, {
          path: '/nyc-part9/',
          title: '<span class="l-part"></span> 9',
        }, {
          path: '/nyc-part10/',
          title: '<span class="l-part"></span> 10',
        }, {
          path: '/nyc-part11/',
          title: '<span class="l-part"></span> 11',
        }, {
          path: '/nyc-part12/',
          title: '<span class="l-part"></span> 12',
        }, {
          path: '/nyc-part13/',
          title: '<span class="l-part"></span> 13',
        }, {
          path: '/nyc-part14/',
          title: '<span class="l-part"></span> 14',
        }, {
          path: '/nyc-part15/',
          title: '<span class="l-part"></span> 15',
        }, {
          path: '/nyc-part16/',
          title: '<span class="l-part"></span> 16',
        }, {
          path: '/nyc-part17/',
          title: '<span class="l-part"></span> 17',
        }, {
          path: '/nyc-part18/',
          title: '<span class="l-part"></span> 18',
        }, {
          path: '/nyc-part19/',
          title: '<span class="l-part"></span> 19',
        }, {
          path: '/nyc-part20/',
          title: '<span class="l-part"></span> 20',
        }, {
          path: '/nyc-map/',
          title: '<span class="l-map"></span>',
        },
      ],
    }, {
      title: '<i class="fa fa-archive">',
      items: [
        {
          path: '/street/',
          title: '<span class="l-street"></span>',
        }, {
          path: '/travel/',
          title: '<span class="l-travel"></span>',
        }, {
          path: '/people/',
          title: '<span class="l-people"></span>',
        },
      ],
    }, {
      path: '/contact/',
      title: '<span class="l-contact"></span>',
    }, {
      path: '/prints/',
      title: '<span class="l-prints"></span>',
    }, {
      path: 'https://instagram.com/ivkrpv/',
      title: '<span title="Instagram" data-toggle="tooltip" data-placement="left"><i class="fab fa-instagram fa-lg"></i></span>',
      className: 'ml-lg-2',
      newTab: true,
    }, {
      path: 'https://medium.com/@ivkrpv',
      title: '<span title="Medium" data-toggle="tooltip" data-placement="left"><i class="fab fa-medium fa-lg"></i></span>',
      newTab: true,
    }
  ],

  lang: {
    global: false,
    resources: {
      toggle: {
        ru: 'ENG',
        en: 'РУС',
      },
      part: {
        ru: 'ЧАСТЬ',
        en: 'PART',
      },
      map: {
        ru: 'КАРТА',
        en: 'MAP',
      },
      'istanbul': {
        ru: 'СТАМБУЛ',
        en: 'ISTANBUL',
      },
      'ist-p1-desc': {
        ru: 'МАРТ 2015',
        en: 'MARCH 2015',
      },
      'ist-p2-desc': {
        ru: 'ОКТЯБРЬ 2018',
        en: 'OCTOBER 2018',
      },
      'south': {
        ru: 'ЮГ',
        en: 'SOUTH',
      },
      'south-mountains': {
        ru: 'ГОРЫ',
        en: 'MOUNTAINS',
      },
      'south-mountains-desc': {
        ru: '🏔️ Горы Красной Поляны и Сочи',
        en: '🏔️ Mountains of Krasnaya Polyana and Sochi',
      },
      'south-404': {
        ru: '404',
        en: '404',
      },
      'south-404-desc': {
        ru: '👻 Дикая природа и заброшенные города Абхазии',
        en: '👻 Wild nature and abandoned towns of Abkhazia',
      },
      'south-coast': {
        ru: 'ПОБЕРЕЖЬЕ',
        en: 'COAST',
      },
      'south-coast-desc': {
        ru: '🌴 Улицы Адлера и Сочи',
        en: '🌴 Streets of Adler & Sochi',
      },
      'nyc-part1-desc': {
        ru: '<i class="fa fa-plane"></i> Гренландия, Бушвик, Уильямсберг, Ист-Ривер, Чайна-таун',
        en: '<i class="fa fa-plane"></i> Greenland, Bushwick, Williamsburg, East River, Chinatown',
      },
      'nyc-part2-desc': {
        ru: 'Манхэттенский мост, виды из Дамбо и Бруклин-Хайтс, ВТЦ, станция 9 Стрит, остров Рузвельт, Мидтаун',
        en: 'Manhattan Bridge, views from Dumbo & Brooklyn Heights, WTC, 9th Street station, Roosevelt Island, Midtown',
      },
      'nyc-part3-desc': {
        ru: 'Утюг, Тюдор-Сити, Гранд Централ, Гамильтон-Хайтс, виды из Лонг-Айленд-Сити',
        en: 'Flatiron, Tudor City, Grand Central, Hamilton Heights, views from Long Island City',
      },
      'nyc-part4-desc': {
        ru: 'Саннисайд, Кладбище Голгофа, Астория, остров Рузвельт',
        en: 'Sunnyside, Calvary Cemetery, Astoria, Roosevelt Island',
      },
      'nyc-part5-desc': {
        ru: 'Нижний Ист-Сайд, Ту-Бриджес, Трайбека, Мидтаун, виды из Уильямсберга',
        en: 'Lower East Side, Two Bridges, Tribeca, Midtown, views from Williamsburg',
      },
      'nyc-part6-desc': {
        ru: 'Челси, Финансовый квартал, Утюг, Чайна-таун, виды с Манхэттенского моста',
        en: 'Chelsea, Financial District, Flatiron, Chinatown, views from Manhattan Bridge',
      },
      'nyc-part7-desc': {
        ru: 'Ночной Чайна-таун, Си-Рок, Марбл-Хилл, Вашингтон-Хайтс, Мост Джорджа Вашингтона',
        en: 'Night Chinatown, C-Rock, Marble Hill, Washington Heights, George Washington Bridge',
      },
      'nyc-part8-desc': {
        ru: 'Дамбо, виды из Бруклин-Хайтс, с моста Куинсборо, заброшенный тоннель в Бруклине, ЛП: NYC эпизоды',
        en: 'Dumbo, views from Brooklyn Heights, from Queensboro Bridge, abandoned tunnel in Brooklyn, LP: NYC episodes',
      },
      'nyc-part9-desc': {
        ru: 'Бушвик, Чайна-таун, Финансовый квартал',
        en: 'Bushwick, Chinatown, Financial District',
      },
      'nyc-part10-desc': {
        ru: 'Рокфеллеровский центр, Таймс-сквер, Адская кухня, Центральный парк, Челси',
        en: 'Rockefeller Center, Times Square, Hell\'s Kitchen, Central Park, Chelsea',
      },
      'nyc-part11-desc': {
        ru: 'Брайтон-Бич, Кони-Айленд',
        en: 'Brighton Beach, Coney Island',
      },
      'nyc-part12-desc': {
        ru: 'Мидтаун',
        en: 'Midtown',
      },
      'nyc-part13-desc': {
        ru: 'Мост Джорджа Вашингтона, Гамильтон-Хайтс, Вильямсбургский мост, Финансовый квартал',
        en: 'George Washington Bridge, Hamilton Heights, Williamsburg Bridge, Financial District',
      },
      'nyc-part14-desc': {
        ru: 'Хантерс-Поинт, Статен-Айленд Ферри, Финансовый квартал, Бушвик, 34-я улица, Колумбус-Серкл, Нижний Манхэттен',
        en: 'Hunters Point, Staten Island Ferry, Financial District, Bushwick, 34th St, Columbus Circle, Lower Manhattan',
      },
      'nyc-part15-desc': {
        ru: 'Флашинг-Медоус — Корона-парк, Рокавей, НД Вихокен, Рандалс, c моста Пуласки, Финансовый квартал, Гованус',
        en: 'Flushing Meadows Corona Park, Rockaway, NJ Weehawken, Randalls Island, from Pulaski Bridge, Financial District, Gowanus',
      },
      'nyc-part16-desc': {
        ru: 'Статен-Айленд Ферри, Финансовый квартал',
        en: 'Staten Island Ferry, Financial District',
      },
      'nyc-part17-desc': {
        ru: 'Кони-Айленд, Бруклинский мост, Мидтаун, Чайна-таун, виды из Бруклин-Хайтс',
        en: 'Coney Island, Brooklyn Bridge, Midtown, Chinatown, views from Brooklyn Heights',
      },
      'nyc-part18-desc': {
        ru: 'Финансовый квартал, Ту-Бриджес',
        en: 'Financial District, Two Bridges',
      },
      'nyc-part19-desc': {
        ru: 'Улицы от Гарлема до Мидтауна, виды из Лонг-Айленд-Сити, Метро G',
        en: 'Streets from Harlem to Midtown, views from Long Island City, Subway G',
      },
      'nyc-part20-desc': {
        ru: 'Гарлем, Рокавей, Паром, Аэропорт, <i class="fa fa-plane"></i> Исландия',
        en: 'Harlem, Rockaway, NYC Ferry, JFK, <i class="fa fa-plane"></i> Iceland',
      },
      people: {
        ru: 'ЛЮДИ',
        en: 'people',
      },
      travel: {
        ru: 'ПУТЕШЕСТВИЯ',
        en: 'TRAVEL',
      },
      street: {
        ru: 'ГОРОДА',
        en: 'street',
      },
      contact: {
        ru: 'КОНТАКТЫ',
        en: 'CONTACT',
      },
      'contact-desc': {
        ru: 'По всем вопросам',
        en: 'Any questions',
      },
      prints: {
        ru: 'ПРИНТЫ',
        en: 'PRINTS',
      },
      back: {
        ru: 'Назад',
        en: 'Back',
      },
      next: {
        ru: 'Далее',
        en: 'Next',
      },
      background: {
        ru: 'Фон',
        en: 'Background',
      },
      frame: {
        ru: 'Рамка',
        en: 'Frame',
      },
      size: {
        ru: 'Размер',
        en: 'Size',
      },
      size50x70: {
        ru: 'Размер рамы — 50x70 см, размер фотографии в паспарту — 40x50 см.',
        en: 'Frame size — 50x70 cm, picture with mat size — 40x50 cm.',
      },
      size61x91: {
        ru: 'Размер рамы — 61x91 см, размер фотографии в паспарту — 50x70 см.',
        en: 'Frame size — 61x91 cm, picture with mat size — 50x70 cm.',
      },
      price50x70: {
        ru: '3000₽',
        en: '$50',
      },
      price61x91: {
        ru: '5000₽',
        en: '$80',
      },
      vk: {
        ru: 'ВКонтакте',
        en: 'VK',
      },
      share: {
        ru: 'Поделиться',
        en: 'Share',
      },
    },
  },

  slideshow: 11,

  gallery: {
    'ist-part1': 46,
    'ist-part2': 75,
    'south-mountains': 257,
    'south-404': 70,
    'south-coast': 58,
    'nyc-part1': 25,
    'nyc-part2': 30,
    'nyc-part3': 28,
    'nyc-part4': 25,
    'nyc-part5': 32,
    'nyc-part6': 26,
    'nyc-part7': 28,
    'nyc-part8': 15,
    'nyc-part9': 31,
    'nyc-part10': 20,
    'nyc-part11': 29,
    'nyc-part12': 27,
    'nyc-part13': 31,
    'nyc-part14': 27,
    'nyc-part15': 22,
    'nyc-part16': 23,
    'nyc-part17': 25,
    'nyc-part18': 23,
    'nyc-part19': 24,
    'nyc-part20': 30,
    people: 88,
    travel: 80,
    street: 77,
  },

  prints: {
    moscow: [
      '/street/45.jpg',
      '/street/47.jpg',
      '/street/14.jpg',
      '/prints/6.jpg',
      '/prints/7.jpg',
      '/prints/8.jpg',
      '/prints/9.jpg',
      '/prints/10.jpg',
      '/prints/11.jpg',
      '/prints/12.jpg',
      '/prints/13.jpg',
      '/prints/14.jpg',
      '/prints/15.jpg',
      '/prints/16.jpg',
      '/prints/17.jpg',
      '/prints/18.jpg',
      '/prints/19.jpg',
    ],
    nyc: [
      '/nyc-part1/19.jpg',
      '/nyc-part1/6.jpg',
      '/nyc-part1/3.jpg',
      '/nyc-part2/30.jpg',
      '/nyc-part2/10.jpg',
      '/nyc-part3/19.jpg',
      '/nyc-part3/16.jpg',
      '/nyc-part3/15.jpg',
      '/nyc-part4/15.jpg',
      '/nyc-part5/27.jpg',
      '/nyc-part5/23.jpg',
      '/nyc-part5/11.jpg',
      '/nyc-part5/4.jpg',
      '/nyc-part6/11.jpg',
      '/nyc-part7/28.jpg',
      '/nyc-part7/24.jpg',
      '/nyc-part7/16.jpg',
      '/nyc-part7/14.jpg',
      '/nyc-part7/13.jpg',
      '/nyc-part7/6.jpg',
      '/nyc-part8/9.jpg',
      '/nyc-part9/17.jpg',
      '/nyc-part9/14.jpg',
      '/nyc-part9/12.jpg',
      '/nyc-part9/8.jpg',
      '/nyc-part9/5.jpg',
      '/nyc-part10/17.jpg',
      '/nyc-part10/4.jpg',
      '/nyc-part11/23.jpg',
      '/nyc-part11/3.jpg',
      '/nyc-part11/2.jpg',
      '/nyc-part12/23.jpg',
      '/nyc-part12/18.jpg',
      '/nyc-part12/16.jpg',
      '/nyc-part13/18.jpg',
      '/nyc-part13/5.jpg',
      '/nyc-part14/15.jpg',
      '/nyc-part14/12.jpg',
      '/nyc-part14/10.jpg',
      '/nyc-part14/4.jpg',
      '/nyc-part15/19.jpg',
      '/nyc-part15/9.jpg',
      '/nyc-part16/14.jpg',
      '/nyc-part16/13.jpg',
      '/nyc-part17/23.jpg',
      '/nyc-part17/9.jpg',
      '/nyc-part17/11.jpg',
      '/nyc-part18/16.jpg',
      '/nyc-part19/12.jpg',
      '/nyc-part19/23.jpg',
      '/nyc-part19/10.jpg',
      '/nyc-part20/9.jpg',
      '/nyc-part20/5.jpg',
    ],
    istanbul: [
      '/ist-part2/68.jpg',
      '/ist-part2/67.jpg',
      '/ist-part2/66.jpg',
      '/ist-part2/46.jpg',
      '/ist-part2/37.jpg',
      '/ist-part2/24.jpg',
      '/ist-part2/23.jpg',
      '/ist-part2/20.jpg',
      '/ist-part2/15.jpg',
      '/ist-part2/12.jpg',
      '/ist-part2/13.jpg',
      '/ist-part2/14.jpg',
      '/ist-part2/11.jpg',
      '/ist-part2/9.jpg',
      '/ist-part2/8.jpg',
      '/ist-part2/7.jpg',
      '/ist-part2/3.jpg',
    ],
    sochi: [
      '/travel/70.jpg',
      '/travel/53.jpg',
      '/south-mountains/242.jpg',
      '/south-mountains/231.jpg',
      '/south-mountains/256.jpg',
      '/south-mountains/169.jpg',
      '/south-mountains/150.jpg',
      '/south-mountains/144.jpg',
      '/south-mountains/122.jpg',
      '/south-mountains/126.jpg',
      '/south-mountains/120.jpg',
      '/south-mountains/114.jpg',
      '/south-mountains/111.jpg',
      '/south-mountains/110.jpg',
      '/south-mountains/96.jpg',
      '/south-mountains/74.jpg',
      '/south-mountains/47.jpg',
      '/south-mountains/40.jpg',
      '/south-mountains/38.jpg',
      '/south-mountains/27.jpg',
      '/south-mountains/12.jpg',
      '/south-mountains/11.jpg',
      '/south-mountains/6.jpg',
    ],
    berlin: [
      '/street/34.jpg',
      '/street/33.jpg',
      '/street/32.jpg',
      '/street/30.jpg',
      '/street/38.jpg',
      '/prints/3.jpg',
      '/prints/4.jpg',
      '/prints/5.jpg',
    ],
    prague: [
      '/prints/1.jpg',
      '/street/23.jpg',
      '/street/22.jpg',
      '/prints/2.jpg',
    ],
  },
};

$(function () {
  // Menu
  var $menu = $('<ul class="navbar-nav ml-auto"></ul>');

  $.each(config.menu, function (idx, item) {
    var $li = $('<li class="nav-item"></li>');

    if (item.items) {
      $li.addClass('dropdown');

      var $a = $('<a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown"></a>')
        .html(item.title);
      var $submenu = $('<div class="dropdown-menu">');

      $.each(item.items, function (idx, subItem) {
        var $suba = $('<a class="dropdown-item"></a>').attr('href', subItem.path).html(subItem.title);

        if (selectMenuItem(subItem.path)) {
          $li.addClass('active');
          $suba.addClass('active');
        }

        if (subItem.disabled) {
          $suba.addClass('disabled').attr('href', '');
        }

        $submenu.append($suba);
      });

      $li.append($a);
      $li.append($submenu);
    } else {
      var $a = $('<a class="nav-link"></a>').attr('href', item.path).html(item.title);

      if (item.className) {
        $li.addClass(item.className);
      }

      if (item.newTab) {
        $a.attr('target', '_blank');
      } else if (selectMenuItem(item.path)) {
        $li.addClass('active');
      }

      $li.append($a);
    }

    $menu.append($li);
  });

  $('#main-navbar').append($menu);

  // Langauge
  var savedGlobal = loadGlobalSetting();
  config.lang.global = savedGlobal !== undefined ? savedGlobal : config.lang.global;

  changeLanguage();

  $('.blackout').fadeOut(400, function () {
    $(this).remove();
  });

  $('body').on('click', '.js-lang', function () {
    config.lang.global = !config.lang.global;

    saveGlobalSetting(config.lang.global);
    changeLanguage();
  });

  function changeLanguage() {
    var lang = config.lang.global ? 'en' : 'ru';

    $('.l-lang').text(config.lang.resources.toggle[lang]);

    $('.l-istanbul').html(config.lang.resources['istanbul'][lang]);
    $('.l-ist-p1-desc').html(config.lang.resources['ist-p1-desc'][lang]);
    $('.l-ist-p2-desc').html(config.lang.resources['ist-p2-desc'][lang]);

    $('.l-south').html(config.lang.resources['south'][lang]);
    $('.l-south-mountains').html(config.lang.resources['south-mountains'][lang]);
    $('.l-south-mountains-desc').html(config.lang.resources['south-mountains-desc'][lang]);
    $('.l-south-404').html(config.lang.resources['south-404'][lang]);
    $('.l-south-404-desc').html(config.lang.resources['south-404-desc'][lang]);
    $('.l-south-coast').html(config.lang.resources['south-coast'][lang]);
    $('.l-south-coast-desc').html(config.lang.resources['south-coast-desc'][lang]);

    $('.l-part').text(config.lang.resources.part[lang]);
    $('.l-map').text(config.lang.resources.map[lang]);
    $('.l-nyc-p1-desc').html(config.lang.resources['nyc-part1-desc'][lang]);
    $('.l-nyc-p2-desc').html(config.lang.resources['nyc-part2-desc'][lang]);
    $('.l-nyc-p3-desc').html(config.lang.resources['nyc-part3-desc'][lang]);
    $('.l-nyc-p4-desc').html(config.lang.resources['nyc-part4-desc'][lang]);
    $('.l-nyc-p5-desc').html(config.lang.resources['nyc-part5-desc'][lang]);
    $('.l-nyc-p6-desc').html(config.lang.resources['nyc-part6-desc'][lang]);
    $('.l-nyc-p7-desc').html(config.lang.resources['nyc-part7-desc'][lang]);
    $('.l-nyc-p8-desc').html(config.lang.resources['nyc-part8-desc'][lang]);
    $('.l-nyc-p9-desc').html(config.lang.resources['nyc-part9-desc'][lang]);
    $('.l-nyc-p10-desc').html(config.lang.resources['nyc-part10-desc'][lang]);
    $('.l-nyc-p11-desc').html(config.lang.resources['nyc-part11-desc'][lang]);
    $('.l-nyc-p12-desc').html(config.lang.resources['nyc-part12-desc'][lang]);
    $('.l-nyc-p13-desc').html(config.lang.resources['nyc-part13-desc'][lang]);
    $('.l-nyc-p14-desc').html(config.lang.resources['nyc-part14-desc'][lang]);
    $('.l-nyc-p15-desc').html(config.lang.resources['nyc-part15-desc'][lang]);
    $('.l-nyc-p16-desc').html(config.lang.resources['nyc-part16-desc'][lang]);
    $('.l-nyc-p17-desc').html(config.lang.resources['nyc-part17-desc'][lang]);
    $('.l-nyc-p18-desc').html(config.lang.resources['nyc-part18-desc'][lang]);
    $('.l-nyc-p19-desc').html(config.lang.resources['nyc-part19-desc'][lang]);
    $('.l-nyc-p20-desc').html(config.lang.resources['nyc-part20-desc'][lang]);

    $('.l-people').text(config.lang.resources.people[lang]);
    $('.l-travel').text(config.lang.resources.travel[lang]);
    $('.l-street').text(config.lang.resources.street[lang]);
    $('.l-contact').text(config.lang.resources.contact[lang]);
    $('.l-contact-desc').text(config.lang.resources['contact-desc'][lang]);
    $('.l-prints').text(config.lang.resources.prints[lang]);

    $('.l-back').text(config.lang.resources.back[lang]);
    $('.l-next').text(config.lang.resources.next[lang]);
    $('.l-background').text(config.lang.resources.background[lang]);
    $('.l-frame').text(config.lang.resources.frame[lang]);
    $('.l-size').text(config.lang.resources.size[lang]);

    $('.l-size50x70').attr('data-original-title', config.lang.resources.size50x70[lang]);
    $('.l-size61x91').attr('data-original-title', config.lang.resources.size61x91[lang]);
    $('.l-price50x70').text(config.lang.resources.price50x70[lang]);
    $('.l-price61x91').text(config.lang.resources.price61x91[lang]);
    $('.l-vk').attr('title', config.lang.resources.vk[lang]);
    $('.l-share').attr('title', config.lang.resources.share[lang]);
  }

  // Tooltips

  $('[data-toggle="tooltip"]').tooltip();

  // Slideshow
  if (!getUrlParameter('save')) {
    $('body').on('contextmenu', 'img, .ug-thumb-overlay', function () {
      return false;
    });
  }

  const slideshow = $('.slideshow');

  if (slideshow.length) {
    const count = shuffle(Array.from(Array(config.slideshow).keys()).map(n => ++n));

    if (count && count.length) {
      count.forEach(n => {
        slideshow.append('<img src="/images/photography/slideshow/' + n + '.jpeg" alt="">');
      })

      slideshow.children().last().show();

      setInterval(function () {
        slideshow.children().last().prev().show();

        slideshow.children().last().fadeOut(2000, function () {
          $(this).prependTo(slideshow);
        });
      }, 5000);
    }
  }

  // Gallery
  var gallery = $('#gallery');

  if (gallery.length) {
    var category = gallery.data('category');
    var useThumbnails = gallery.data('thumbnails');
    var count = config.gallery[category];

    if (count && count > 0) {
      for (var n = count; n > 0; n--) {
        gallery.append('<img src="/images/photography/' + category + '/' + (useThumbnails ? 'thumbnails/' : '') + n
          + (useThumbnails ? '_tn' : '') + '.jpg" data-image="/images/photography/' + category + '/' + n + '.jpg" alt="">');
      }

      gallery.unitegallery({
        tiles_justified_row_height: 250,
        tile_enable_icons: false,
        tiles_type: 'justified',
      });
    }
  }

  // Prints
  var prints$ = $('#prints');
  var printsTags$ = $('#printsTags');
  var printOrder = {
    url: null,
    frame: 'dark',
    size: '61x91',
    email: null,
    contact: null,
  };

  if (prints$.length && printsTags$.length && config.prints) {
    for (var category in config.prints) {
      var tag = '#' + category;
      var tagLink$ = $('<a class="mr-2"></a>').attr('href', tag).text(tag.toUpperCase());
      var tagAnchor$ = $('<a class="print-tag m-4 lead font-italic font-weight-bold text-uppercase"><div class="h-100 d-flex justify-content-center align-items-center"><span></span></div></a>')
      .attr('name', category);

      tagAnchor$.find('span').text(tag.toUpperCase());

      printsTags$.append(tagLink$);
      prints$.append(tagAnchor$);

      config.prints[category].forEach(p => {
        var $frame = $('<div class="print-frame print-frame-thumb print-frame-dark m-4"><div class="print-mat"><div class="print-image"><img><div class="print-image-shadow"></div></div></div></div>');

        $frame.find('img').attr('src', '/images/photography' + p).one('load', function () {
          var $img = $(this);

          $img.parent().addClass('print-image-' + ($img.width() > $img.height() ? 'h' : 'v'));
        });

        prints$.append($frame);
      });
    }
  }

  $('body').on('click', '.print-frame-thumb', function () {
    printsTags$.hide();
    $(this).removeClass('print-frame-thumb').siblings().hide();
    $('.js-print-dashboard').toggleClass('d-none d-flex');

    printOrder.url = $(this).find('img').prop('src');
  });

  $('body').on('click', '.js-print-cancel', function () {
    printsTags$.show();
    $('.print-frame').addClass('print-frame-thumb');
    prints$.children().show();
    $('.js-print-dashboard').toggleClass('d-none d-flex');

    // clear print order url
    printOrder.url = null;

    // clear invalid order form fields
    $('.js-print-order-form .form-control:invalid').val('');
    $('.js-print-order-form').removeClass('was-validated');
  });

  $('body').on('click', '.js-print-frame', function (e) {
    const $btn = $(e.currentTarget);
    const color = $btn.data('color'); // light or dark
    const lightFrame = color === 'light';
    const bodyTextColor = lightFrame ? 'white' : 'dark';
    const navbarBg = lightFrame ? 'dark' : 'light';

    $('body').removeClass('text-white text-dark').addClass('text-' + bodyTextColor);
    $('.navbar').removeClass('navbar-light navbar-dark').addClass('navbar-' + navbarBg);
    $('.print-frame').removeClass('print-frame-light print-frame-dark').addClass('print-frame-' + color);
    $('.likely').removeClass('likely-light likely-dark').addClass('likely-' + color);

    printOrder.frame = color;
  });

  $('body').on('click', '.js-print-bg', function (e) {
    const $btn = $(e.currentTarget);
    const color = $btn.data('color'); // any bootstrap color

    $('body')
      .removeClass(function (index, className) {
        return (className.match(/(^|\s)bg-\S+/g) || []).join(' ');
      })
      .addClass('bg-' + color);
  });

  $('body').on('change', '.js-print-size input[type=radio][name=size]', function () {
    printOrder.size = $(this).val();

    $('.js-print-price').children().addClass('d-none');
    $('.js-print-price .l-price' + printOrder.size).removeClass('d-none');
  });

  $('body').on('click', '.js-print-order', function () {
    $('.js-print-order-form').submit();
  });

  $('body').on('submit', '.js-print-order-form', function (e) {
    e.preventDefault();
    e.stopPropagation();

    var $form = $(this);

    $form.addClass('was-validated');

    if (this.checkValidity() !== false) {
      $form.serializeArray().forEach(f => {
        printOrder[f.name] = f.value;
      });

      toggleModalLoading(true);

      $.ajax({
        url: 'https://script.google.com/macros/s/AKfycbxC1Z2rtuymmvZt0J6si52IqNe_qlduBbplSxxXcDtnQvLrAW0/exec',
        method: "GET",
        dataType: "json",
        data: printOrder,
        success: function () {
          toggleModalLoading(false);

          $('#newOrderSuccess').removeClass('d-none').toast({
            delay: 3000,
          }).toast('show');
        },
        error: function () {
          toggleModalLoading(false);

          $('#newOrderError').removeClass('d-none').toast({
            delay: 3000,
          }).toast('show');
        },
      })
    }
  });

  function toggleModalLoading(loading) {
    if (loading) {
      $('.js-print-order').prop('disabled', true).children('.spinner-border').removeClass('d-none');
    } else {
      $('.js-print-order').prop('disabled', false).children('.spinner-border').addClass('d-none');
      $('#newOrderModal').modal('hide');
    }
  }
});

function loadGlobalSetting() {
  if (supportsLocalStorage()) {
    return window.localStorage.getItem('ui_lang_global') == 'true';
  }

  return undefined;
};

function saveGlobalSetting(global) {
  if (supportsLocalStorage()) {
    window.localStorage.setItem('ui_lang_global', global);
  }
};

function supportsLocalStorage() {
  try {
    return 'localStorage' in window && window.localStorage !== null;
  } catch (e) {
    return false;
  }
};

function getUrlParameter(param) {
  var pageURL = decodeURIComponent(window.location.search.substring(1)),
      urlVariables = pageURL.split('&'),
      parameterName,
      i;

  for (i = 0; i < urlVariables.length; i++) {
      parameterName = urlVariables[i].split('=');

      if (parameterName[0] === param) {
          return parameterName[1] === undefined ? true : parameterName[1];
      }
  }
};

function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
