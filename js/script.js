(function () {
  const defaultLanguage = localStorage.getItem('ratanakiriLanguage') || 'km';
  const pageTranslations = {
    km: {
      'footer.tagline': 'ស្វែងយល់ពីធម្មជាតិ វប្បធម៌ និងទីកន្លែងនានានៅខេត្តរតនគិរី។',
      'footer.explore': 'ស្វែងយល់',
      'footer.plan': 'រៀបចំដំណើរ',
      'footer.copy': '© ២០២៦ មគ្គុទ្ទេសក៍ទេសចរណ៍រតនគិរី',
      'places.title': 'ទីកន្លែងគួរទៅទស្សនា',
      'places.lede': 'ពីបឹងភ្នំភ្លើងរហូតដល់ឧទ្យានជាតិ សូមស្វែងរកទីកន្លែងសម្រាប់ដំណើរកម្សាន្តនៅរតនគិរី។',
      'places.searchPlaceholder': 'ស្វែងរកទឹកជ្រោះ បឹង ឬទីកន្លែង...',
      'places.all': 'ទាំងអស់',
      'places.nature': 'ធម្មជាតិ',
      'places.waterfalls': 'ទឹកជ្រោះ',
      'places.lakes': 'បឹង',
      'places.parks': 'ឧទ្យាន',
      'places.culture': 'វប្បធម៌',
      'places.notSure': 'មិនដឹងគួរចាប់ផ្ដើមពីណា?',
      'places.notSureText': 'អាចចាប់ផ្ដើមពីបឹងយក្សឡោម រួចបន្តទៅទឹកជ្រោះមួយកន្លែង។ សូមសួរអ្នកក្នុងតំបន់អំពីការចូលទស្សនាសហគមន៍។',
      seeMore: 'មគ្គុទ្ទេសក៍ទេសចរណ៍',
      'culture.title': 'វប្បធម៌ និងប្រពៃណី',
      'culture.lede': 'ស្វែងយល់ពីប្រពៃណី ជីវិតសហគមន៍ និងមរតកវប្បធម៌ដែលកំពុងរស់រវើកនៅរតនគិរី ដោយការគោរពចំពោះអ្នកថែរក្សាវប្បធម៌ទាំងនេះ។',
      'culture.communities': 'សហគមន៍',
      'culture.communitiesTitle': 'ប្រជាជនដែលរស់នៅទីនេះ',
      'culture.communitiesText': 'រតនគិរីជាទីលំនៅរបស់សហគមន៍ចម្រុះ រួមមាន គ្រឹង ទំពួន ចារ៉ាយ ប្រៅ និងកាវែត។ សហគមន៍នីមួយៗមានប្រវត្តិ និងអត្តសញ្ញាណផ្ទាល់ខ្លួន។ ប្រពៃណី និងជីវិតប្រចាំថ្ងៃខុសៗគ្នាតាមសហគមន៍ ភូមិ គ្រួសារ និងជំនាន់។',
      'culture.houses': 'ផ្ទះប្រពៃណី',
      'culture.housesTitle': 'ផ្ទះលើសសរ និងសាលាសហគមន៍',
      'culture.housesText': 'ទម្រង់ផ្ទះ និងសម្ភារៈសំណង់ខុសៗគ្នាតាមសហគមន៍ និងគ្រួសារ។ រូបថតនេះមិនត្រូវបានកំណត់ថាជារបស់សហគមន៍ជាក់លាក់ណាមួយទេ។',
      'culture.clothing': 'សម្លៀកបំពាក់ និងជីវិតប្រចាំថ្ងៃ',
      'culture.clothingTitle': 'ការស្លៀកពាក់ប្រចាំថ្ងៃ និងក្នុងពិធី',
      'culture.clothingText': 'សម្លៀកបំពាក់ និងគ្រឿងតុបតែងមានអត្ថន័យផ្ទាល់ខ្លួន និងវប្បធម៌។ រចនាបថ និងអត្ថន័យខុសៗគ្នា។ សូមសួរម្ចាស់រូបភាពអំពីការបង្ហាញរបស់ពួកគេ ជាជាងសន្និដ្ឋានតាមរូបរាង។',
      'culture.traditions': 'ប្រពៃណី',
      'culture.traditionsTitle': 'តន្ត្រី ពិធីបុណ្យ និងសិប្បកម្ម',
      'culture.music': 'តន្ត្រី',
      'culture.musicText': 'តន្ត្រីមាននៅក្នុងការជួបជុំ និងជីវិតសហគមន៍។ ឧបករណ៍ និងការអនុវត្តខុសៗគ្នា ហើយការជួបជុំមិនមែនសុទ្ធតែបើកចំហសម្រាប់អ្នកទស្សនាទេ។',
      'culture.festivals': 'ពិធីបុណ្យ',
      'culture.festivalsText': 'ពិធីបុណ្យ និងពិធីប្រពៃណីដឹកនាំដោយសហគមន៍ ហើយអាចជាពិធីឯកជន ឬមានការកំណត់។ សូមធ្វើតាមការណែនាំក្នុងតំបន់ និងកុំចាត់ទុកពិធីសក្ការៈជាការសម្ដែង។',
      'culture.crafts': 'សិប្បកម្ម',
      'culture.craftsText': 'សិប្បកម្មបង្ហាញពីជំនាញ និងជម្រើសរបស់អ្នកផលិត។ សូមសួរអំពីអត្ថន័យ និងទិញដោយផ្ទាល់ពីអ្នកផលិត ឬគម្រោងសហគមន៍ នៅពេលមានការអញ្ជើញ។',
      'culture.craftFocus': 'សិប្បកម្មក្នុងជីវិតប្រចាំថ្ងៃ',
      'culture.craftFocusTitle': 'បង្កើតសម្រាប់ប្រើប្រាស់ មិនមែនសម្រាប់តាំងបង្ហាញ',
      'culture.visiting': 'ទស្សនាដោយការគោរព',
      'culture.visitingTitle': 'គោលការណ៍សាមញ្ញៗ',
      'gallery.title': 'រតនគិរីតាមរយៈរូបភាព',
      'gallery.lede': 'ទេសភាព សហគមន៍ និងជីវិតប្រចាំថ្ងៃនៅខេត្តរតនគិរី។',
      'map.title': 'ផែនទី និងគន្លឹះធ្វើដំណើរ',
      'map.lede': 'ស្វែងរកបានលុង ទឹកជ្រោះនៅជិតៗ និងតំបន់ធម្មជាតិការពារ ហើយរៀបចំដំណើរដោយការគោរព។',
      'map.banlungText': 'ក្រុងរដ្ឋបាលខេត្ត និងជាមូលដ្ឋានសម្រាប់ដំណើរមួយថ្ងៃ។',
      'map.yeakLaomText': 'បឹងភ្នំភ្លើង និងផ្លូវដើរជុំវិញ។',
      'map.chaOngText': 'ទឹកជ្រោះនៅជិតបានលុង។ សូមពិនិត្យការចូលទស្សនា និងស្ថានភាពក្នុងតំបន់។',
      'map.kachanhText': 'ទឹកជ្រោះក្នុងព្រៃ។ ស្ថានភាពប្រែប្រួលតាមរដូវ។',
      'map.katiengText': 'ទឹកជ្រោះនៅតំបន់បានលុង។',
      'map.viracheyText': 'ព្រៃការពារ និងទេសភាពខ្ពង់រាប។',
      'map.banlungPopup': 'ក្រុងរដ្ឋបាលខេត្ត និងជាកន្លែងស្នាក់នៅសម្រាប់ទៅទស្សនាទីកន្លែងជុំវិញ។',
      'map.yeakLaomPopup': 'បឹងភ្នំភ្លើងដែលមានផ្លូវដើរជុំវិញក្នុងព្រៃ។ សូមធ្វើតាមច្បាប់ហែលទឹកក្នុងតំបន់។',
      'map.chaOngPopup': 'ទឹកជ្រោះនៅជិតបានលុង។ សូមសួរអំពីផ្លូវ និងស្ថានភាពទឹកបច្ចុប្បន្ន។',
      'map.kachanhPopup': 'ទឹកជ្រោះក្នុងព្រៃនៅភាគអាគ្នេយ៍បានលុង។ សូមពិនិត្យការចូលទស្សនា និងស្ថានភាពតាមរដូវ។',
      'map.katiengPopup': 'ទឹកជ្រោះនៅតំបន់បានលុង។ សូមសួរម្ចាស់ផ្ទះក្នុងតំបន់អំពីការចូលទស្សនាបច្ចុប្បន្ន។',
      'map.viracheyPopup': 'ព្រៃការពារ និងទេសភាពខ្ពង់រាបនៅភាគឦសានកម្ពុជា។ សូមរៀបចំដំណើរទៅតំបន់ឆ្ងាយដោយមានការណែនាំពីអ្នកក្នុងតំបន់។',
      'about.title': 'អំពីរតនគិរី',
      'about.lede': 'ខេត្តមួយដែលមានព្រៃឈើ ទឹកជ្រោះ ទេសភាពចម្រុះ និងសហគមន៍ជនជាតិដើម។',
      'about.introKicker': 'សូមស្វាគមន៍',
      'about.introTitle': 'ស្វែងយល់ពីជ្រុងមួយទៀតនៃកម្ពុជា',
      'about.introText': 'រតនគិរីស្ថិតនៅភាគឦសានប្រទេសកម្ពុជា។ ខេត្តនេះមានធម្មជាតិ សហគមន៍ក្នុងតំបន់ ទឹកជ្រោះ ព្រៃឈើ និងបឹងយក្សឡោម។',
      'about.location': 'ទីតាំង',
      'about.locationTitle': 'ខេត្តនៅភាគឦសានកម្ពុជា',
      'about.locationText': 'រតនគិរីស្ថិតនៅភាគឦសានប្រទេសកម្ពុជា។ ខេត្តនេះមានព្រំប្រទល់ជាមួយប្រទេសឡាវនៅភាគខាងជើង ប្រទេសវៀតណាមនៅខាងកើត ខេត្តមណ្ឌលគិរីនៅភាគខាងត្បូង និងខេត្តស្ទឹងត្រែងនៅភាគខាងលិច។',
      'about.locationText2': 'បានលុងជាទីរួមខេត្ត និងជាចំណុចចាប់ផ្ដើមសម្រាប់ស្វែងរកព្រៃឈើ បឹង និងទឹកជ្រោះជុំវិញ។',
      'about.discoverKicker': 'ស្វែងយល់',
      'about.discoverTitle': 'តើអ្នកអាចស្វែងយល់អ្វីខ្លះនៅរតនគិរី?',
      'about.discoverText': 'រតនគិរីមានទាំងទីកន្លែងធម្មជាតិ វប្បធម៌ ម្ហូបអាហារ និងជីវិតសហគមន៍។',
      'about.cardNatureTitle': 'ធម្មជាតិ',
      'about.cardNatureText': 'ស្វែងរកព្រៃឈើ បឹង ទឹកជ្រោះ និងទេសភាពធម្មជាតិ។',
      'about.cardCultureTitle': 'វប្បធម៌',
      'about.cardCultureText': 'ស្វែងយល់ពីសហគមន៍ជនជាតិដើម ប្រពៃណី សិប្បកម្ម និងរបៀបរស់នៅក្នុងតំបន់។',
      'about.cardFoodTitle': 'ម្ហូបក្នុងតំបន់',
      'about.cardFoodText': 'ស្វែងយល់ពីម្ហូប និងគ្រឿងផ្សំក្នុងតំបន់តាមរយៈអ្នកលក់ និងម្ចាស់ផ្ទះ។',
      'about.cardPeopleTitle': 'ប្រជាជន',
      'about.cardPeopleText': 'ស្វែងយល់ពីសហគមន៍ និងទំនាក់ទំនងរបស់ពួកគេជាមួយដីធ្លី។',
      'about.overview': 'ទិដ្ឋភាពទូទៅ',
      'about.overviewTitle': 'ខេត្តដែលមានអត្តសញ្ញាណធម្មជាតិចម្រុះ',
      'about.overviewText': 'រតនគិរីមានព្រៃឈើ ទន្លេ ដីកសិកម្ម និងទេសភាពភ្នំភ្លើង។ កសិកម្មជាផ្នែកមួយនៃជីវិតក្នុងតំបន់ រួមមានផលិតផលដូចជា កៅស៊ូ ស្វាយចន្ទី ស្រូវ និងផ្លែឈើ។',
      'about.overviewText2': 'ទេសចរណ៍ក៏កំពុងកើនឡើងនៅតំបន់ធម្មជាតិ ដូចជាបឹងយក្សឡោម ទឹកជ្រោះ និងឧទ្យានជាតិវីរៈជ័យ។',
      'about.nature': 'ធម្មជាតិ',
      'about.natureTitle': 'ព្រៃឈើ ទន្លេ និងបឹងយក្សឡោម',
      'about.natureText': 'រតនគិរីមានបរិស្ថានធម្មជាតិចម្រុះ។ បឹងយក្សឡោមជាបឹងភ្នំភ្លើងដែលព័ទ្ធជុំវិញដោយព្រៃ ហើយក៏មានទឹកជ្រោះ និងទន្លេជាច្រើនផងដែរ។',
      'about.people': 'ប្រជាជន',
      'about.peopleTitle': 'សហគមន៍ និងប្រពៃណី',
      'about.peopleText': 'រតនគិរីជាទីលំនៅរបស់ប្រជាជនខ្មែរ និងសហគមន៍ជនជាតិដើមជាច្រើន រួមមាន ទំពួន គ្រឹង ចារ៉ាយ ប្រៅ និងកាវែត។',
      'about.peopleText2': 'ភាសា ប្រពៃណី សិប្បកម្ម និងទំនាក់ទំនងជាមួយដីធ្លីរបស់សហគមន៍ទាំងនេះ ជាផ្នែកមួយនៃអត្តសញ្ញាណវប្បធម៌ក្នុងខេត្ត។',
      'about.special': 'ហេតុអ្វីរតនគិរី?',
      'about.specialTitle': 'ខេត្តដែលគួរស្វែងយល់',
      'about.whySpecial': 'រតនគិរីមានធម្មជាតិ ទេសភាព ម្ហូបក្នុងតំបន់ និងសហគមន៍ចម្រុះ។ អ្នកទស្សនាអាចស្វែងយល់ពីជ្រុងមួយទៀតនៃប្រទេសកម្ពុជា។',
      'about.ctaKicker': 'ចាប់ផ្ដើមស្វែងយល់',
      'about.ctaTitle': 'ត្រៀមខ្លួនស្វែងយល់ពីរតនគិរីហើយឬនៅ?',
      'about.ctaText': 'ស្វែងរកទីកន្លែង ស្វែងយល់ពីវប្បធម៌ក្នុងតំបន់ និងរៀបចំដំណើរកម្សាន្តរបស់អ្នក។',
      'buttons.viewMap': 'មើលផែនទី',
      'buttons.discoverMore': 'ស្វែងយល់បន្ថែម',
      'buttons.exploreNature': 'ស្វែងរកធម្មជាតិ',
      'buttons.explorePeople': 'សហគមន៍ជនជាតិដើម',
      'buttons.explorePlaces': 'ស្វែងរកទីកន្លែង',
      'buttons.travelTips': 'មគ្គុទ្ទេសក៍ទេសចរណ៍',
      'travel-guide.title': 'រៀបចំដំណើរកម្សាន្តរបស់អ្នក',
      'travel-guide.lede': 'ព័ត៌មានជាក់ស្ដែងសម្រាប់ធ្វើដំណើរនៅរតនគិរី៖ រដូវកាល ការធ្វើដំណើរ របស់របរគួរយកទៅ និងការគោរពវប្បធម៌។'
    }
  };
  function getLanguage() {
    return localStorage.getItem('ratanakiriLanguage') || defaultLanguage;
  }

  function applyLanguage(language) {
    const lang = language === 'km' ? 'km' : 'en';
    document.documentElement.lang = lang;
    document.body.dataset.lang = lang;
    localStorage.setItem('ratanakiriLanguage', lang);
    document.querySelectorAll('[data-en][data-km]').forEach((element) => {
      element.textContent = element.dataset[lang];
    });
    document.querySelectorAll('[data-placeholder-en][data-placeholder-km]').forEach((element) => {
      element.placeholder = element.dataset[`placeholder${lang === 'km' ? 'Km' : 'En'}`];
    });
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      const english = element.dataset.i18nEnglish || element.textContent.trim();
      element.dataset.i18nEnglish = english;
      const text = lang === 'km' ? pageTranslations.km[key] || english : english;
      const textNodes = [...element.childNodes].filter((node) => node.nodeType === Node.TEXT_NODE);
      const labelNode = textNodes.find((node) => node.textContent.trim());
      if (labelNode) {
        labelNode.textContent = text;
        textNodes.filter((node) => node !== labelNode).forEach((node) => { node.textContent = ''; });
      } else {
        element.append(document.createTextNode(text));
      }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
      const key = element.dataset.i18nPlaceholder;
      const english = element.dataset.i18nEnglish || element.placeholder;
      element.dataset.i18nEnglish = english;
      element.placeholder = lang === 'km' ? pageTranslations.km[key] || english : english;
    });
    document.querySelectorAll('[data-i18n-button]').forEach((element) => {
      const key = element.dataset.i18nButton;
      const english = element.dataset.i18nEnglish || element.textContent.trim();
      element.dataset.i18nEnglish = english;
      element.textContent = lang === 'km' ? pageTranslations.km[key] || english : english;
    });
    document.querySelectorAll('.lang-btn').forEach((button) => {
      button.classList.toggle('active', button.dataset.lang === lang);
    });
  }

  function setupLanguage() {
    const savedLanguage = getLanguage();
    applyLanguage(savedLanguage);
    document.querySelectorAll('.lang-btn').forEach((button) => {
      button.addEventListener('click', () => {
        applyLanguage(button.dataset.lang);
      });
    });
  }

  function applyTheme(mode) {
    const theme = mode === 'dark' ? 'dark' : 'light';
    document.body.dataset.theme = theme;
    localStorage.setItem('ratanakiriTheme', theme);
    const toggle = document.getElementById('themeToggle');
    if (toggle) {
      toggle.innerHTML = theme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    }
  }

  function setupTheme() {
    const savedTheme = localStorage.getItem('ratanakiriTheme') || 'light';
    applyTheme(savedTheme);
    const toggle = document.getElementById('themeToggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        const next = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
        applyTheme(next);
      });
    }
  }

  function setupMobileNav() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (!menuToggle || !navLinks) return;

    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function buildSearchResult(item) {
    const title = getLanguage() === 'km' ? item.nameKm || item.name : item.name || 'Place';
    const typeLabel = item.kind || (item.category ? item.category : 'Place');
    const type = getLanguage() === 'km'
      ? { Place: 'ទីកន្លែង', Community: 'សហគមន៍' }[typeLabel] || typeLabel
      : typeLabel;
    const link = item.link || '#';
    return `
      <div class="result-item">
        <a href="${link}">${title}</a>
        <small>${type}</small>
      </div>
    `;
  }

  function setupGlobalSearch() {
    const input = document.getElementById('siteSearchInput');
    const results = document.getElementById('searchResults');
    const button = document.getElementById('globalSearchButton');
    const clearButton = document.getElementById('clearSearchButton');
    if (!input || !results) return;

    const places = (window.ratanakiriData?.places || []).map((item) => ({ ...item, kind: 'Place', link: 'pages/places.html' }));
    const communities = (window.ratanakiriData?.communities || []).map((item) => ({ ...item, kind: 'Community' }));
    const data = [...places, ...communities];

    const runSearch = () => {
      const term = input.value.trim().toLowerCase();
      if (!term) {
        results.classList.remove('visible');
        results.innerHTML = '';
        return;
      }

      const matched = data.filter((item) => {
        const haystack = `${item.name || ''} ${item.nameKm || ''} ${item.title || ''} ${item.description || ''} ${item.location || ''} ${item.category || ''}`.toLowerCase();
        return haystack.includes(term);
      }).slice(0, 6);

      if (!matched.length) {
        results.classList.add('visible');
        results.innerHTML = `<h3>${getLanguage() === 'km' ? 'រកមិនឃើញលទ្ធផល' : 'No results'}</h3><p>${getLanguage() === 'km' ? 'មិនមានទីកន្លែងដែលត្រូវគ្នាទេ។' : 'No matching places found.'}</p>`;
        return;
      }

      results.classList.add('visible');
      results.innerHTML = `
        <h3>${matched.length} ${getLanguage() === 'km' ? 'លទ្ធផល' : 'places'}</h3>
        <div class="search-results-list">
          ${matched.map(buildSearchResult).join('')}
        </div>
      `;
    };

    input.addEventListener('input', runSearch);
    button?.addEventListener('click', runSearch);
    clearButton?.addEventListener('click', () => {
      input.value = '';
      results.classList.remove('visible');
      results.innerHTML = '';
      input.focus();
    });
  }

  function setupPageData() {
    const searchInput = document.querySelector('.search-bar input');
    const cards = [...document.querySelectorAll('.card[data-category]')];
    const filters = [...document.querySelectorAll('.filter-row [data-filter]')];
    if (!cards.length) return;

    function filterPlaces() {
      const activeFilter = document.querySelector('.filter-pill.active')?.dataset.filter || 'all';
      const term = searchInput?.value.trim().toLowerCase() || '';
      cards.forEach((card) => {
        const categoryMatches = activeFilter === 'all' || card.dataset.category.split(/\s+/).includes(activeFilter);
        const textMatches = !term || `${card.dataset.searchName || ''} ${card.textContent}`.toLowerCase().includes(term);
        card.hidden = !categoryMatches || !textMatches;
      });
    }

    filters.forEach((button) => {
      button.addEventListener('click', () => {
        filters.forEach((filter) => filter.classList.toggle('active', filter === button));
        filterPlaces();
      });
    });
    searchInput?.addEventListener('input', filterPlaces);
  }

  function setupScrollTop() {
    document.querySelectorAll('.map-list-item').forEach((item) => {
      const activate = () => {
        const query = item.dataset.mapQuery;
        const map = document.querySelector('.map-canvas iframe');
        if (map && query) map.src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=13&output=embed`;
        document.querySelectorAll('.map-list-item').forEach((entry) => entry.classList.toggle('active', entry === item));
        document.querySelectorAll('.map-popup').forEach((popup) => popup.classList.toggle('show', popup.dataset.popup === item.dataset.place));
      };
      item.addEventListener('click', activate);
      item.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          activate();
        }
      });
    });

    const backToTop = document.querySelector('.to-top');
    backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  function setupGallery() {
    const lightbox = document.querySelector('.lightbox');
    const lightboxImage = lightbox?.querySelector('img');
    const caption = lightbox?.querySelector('.lightbox-cap');
    const figures = [...document.querySelectorAll('.gallery-item')];
    const closeButton = lightbox?.querySelector('.lightbox-close');
    const previousButton = lightbox?.querySelector('.lightbox-nav.prev');
    const nextButton = lightbox?.querySelector('.lightbox-nav.next');
    const filters = [...document.querySelectorAll('.filter-row [data-filter]')];
    if (!lightbox || !lightboxImage || !figures.length) return;

    let visibleFigures = figures;
    let currentIndex = 0;
    let previousFocus = null;

    function showImage(index) {
      currentIndex = (index + visibleFigures.length) % visibleFigures.length;
      const figure = visibleFigures[currentIndex];
      const image = figure.querySelector('img');
      lightboxImage.src = image.src;
      lightboxImage.alt = image.alt;
      caption.textContent = figure.querySelector('figcaption')?.textContent || image.alt;
    }

    function openLightbox(figure) {
      visibleFigures = figures.filter((item) => !item.hidden);
      previousFocus = document.activeElement;
      showImage(visibleFigures.indexOf(figure));
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('lightbox-open');
      closeButton?.focus();
    }

    function closeLightbox() {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('lightbox-open');
      lightboxImage.removeAttribute('src');
      previousFocus?.focus();
    }

    figures.forEach((figure) => {
      figure.tabIndex = 0;
      figure.setAttribute('role', 'button');
      figure.addEventListener('click', () => openLightbox(figure));
      figure.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openLightbox(figure);
        }
      });
    });

    closeButton?.addEventListener('click', closeLightbox);
    previousButton?.addEventListener('click', () => showImage(currentIndex - 1));
    nextButton?.addEventListener('click', () => showImage(currentIndex + 1));
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (event) => {
      if (!lightbox.classList.contains('open')) return;
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowLeft') showImage(currentIndex - 1);
      if (event.key === 'ArrowRight') showImage(currentIndex + 1);
    });

    filters.forEach((button) => {
      button.addEventListener('click', () => {
        const category = button.dataset.filter;
        figures.forEach((figure) => {
          figure.hidden = category !== 'all' && figure.dataset.category !== category;
        });
        visibleFigures = figures.filter((figure) => !figure.hidden);
        filters.forEach((filter) => filter.classList.toggle('active', filter === button));
      });
    });
  }

  setupLanguage();
  setupTheme();
  setupMobileNav();
  setupGlobalSearch();
  setupPageData();
  setupScrollTop();
  setupGallery();
})();
