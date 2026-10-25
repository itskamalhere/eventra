/**
 * EVENTRA INDIA — Discover. Book. Experience.
 * V3.0 Bharat Edition: Pan-India Cultural & Tech Experience Platform
 * Zero external library or CDN dependencies.
 */

(function () {
  'use strict';

  // =========================================================================
  // STORAGE KEYS & CONSTANTS
  // =========================================================================
  const STORAGE_KEYS = {
    SAVED_EVENTS: 'eventra_in_saved_v1',
    BOOKINGS: 'eventra_in_bookings_v1',
    THEME: 'eventra_theme_v1'
  };

  const PLATFORM_FEE_INR = 99; // ₹99 simulated GST & digital issuance fee

  // =========================================================================
  // 14 CURATED INDIAN EXPERIENCES (Late 2026 – 2027 Season)
  // =========================================================================
  const INDIAN_EVENTS_DATA = [
    {
      id: 'evt-ragas-modular-2026',
      title: 'Ragas & Resonances: Classical Sitar Meets Modular Synthesis',
      category: 'Music & Concerts',
      city: 'Mumbai',
      venue: 'NCPA Tata Theatre, Nariman Point',
      date: '2026-11-13',
      displayDate: 'Fri, Nov 13, 2026',
      time: '19:30 - 23:00 IST',
      doorTime: '18:30 IST',
      startingPrice: 1499,
      featured: true,
      image: 'assets/images/event-ragas-modular.jpg',
      imageAlt: 'Classical sitar maestro performing with live modular synth ensemble at NCPA Mumbai',
      description: 'An acoustic and electronic synthesis pairing Hindustani classical ragas with analog modular synthesizers and ambient sub-bass architectures. Featuring internationally acclaimed sitarists and sound artists exploring microtonal Raag Darbari and Yaman.',
      highlights: [
        'Acoustically tuned Tata Theatre auditorium with 360° sound stage',
        'Immersive live modular synth & sitar jugalbandi',
        'Post-concert baithak discussion with maestro performers',
        'Complimentary artisanal Kashmiri kahwa reception'
      ],
      tiers: [
        { name: 'Balcony Tier', price: 1499, perks: 'Upper gallery seating with full stage & acoustic sightlines', available: 55 },
        { name: 'Stalls Premium', price: 2499, perks: 'Prime central stalls seating, signed collector program booklet', available: 28 },
        { name: 'Royal Box VIP', price: 4499, perks: 'Private mezzanine box, artist lounge tea reception, vinyl record', available: 8 }
      ]
    },
    {
      id: 'evt-bengaluru-ai-2026',
      title: 'Bengaluru DeepTech & Frontier AI Nexus 2026',
      category: 'Technology',
      city: 'Bengaluru',
      venue: 'BIEC & Whitefield Innovation Campus',
      date: '2026-11-26',
      displayDate: 'Thu, Nov 26, 2026',
      time: '09:00 - 18:30 IST',
      doorTime: '08:00 IST',
      startingPrice: 2499,
      featured: true,
      image: 'assets/images/event-bengaluru-ai.jpg',
      imageAlt: 'Frontier AI keynote auditorium with audience and illuminated digital display in Bengaluru',
      description: 'India’s premier deep-tech gathering uniting frontier generative AI researchers, robotics founders, silicon architects, and global venture pioneers. Live demonstrations of neuromorphic chips, edge LLMs, and open compute clusters.',
      highlights: [
        'Keynotes from India’s foremost AI laboratory and startup founders',
        'Live demonstrations of indigenous hardware compute clusters',
        'Venture syndicate pitch market for early-stage deep-tech labs',
        'Closed-door Founders & CTO Dinner at Indiranagar'
      ],
      tiers: [
        { name: 'Delegate Pass', price: 2499, perks: 'Keynote hall access, technical breakout tracks, networking lunch', available: 80 },
        { name: 'Innovator All-Access', price: 4999, perks: 'Workshop labs access, founders lounge, fast-track entry', available: 35 },
        { name: 'Founders Syndicate VIP', price: 9999, perks: 'Private investor dinner, closed-door policy roundtable, executive suite', available: 12 }
      ]
    },
    {
      id: 'evt-kochi-biennale-2026',
      title: 'Kochi-Muziris Contemporary Art Biennale 2026',
      category: 'Art & Culture',
      city: 'Kochi',
      venue: 'Aspinwall House & Pepper House, Fort Kochi',
      date: '2026-12-11',
      displayDate: 'Fri, Dec 11, 2026',
      time: '10:00 - 19:00 IST',
      doorTime: '09:30 IST',
      startingPrice: 499,
      featured: true,
      image: 'assets/images/event-kochi-biennale.jpg',
      imageAlt: 'Contemporary art installations along the heritage colonial waterfront of Fort Kochi',
      description: 'South Asia’s largest contemporary art biennial celebrating radical installations, site-specific sculptures, and heritage maritime memory across 14 historic warehouses along the Arabian Sea waterfront.',
      highlights: [
        'Curator-led walkthrough across historic sea-facing godowns',
        'Site-specific multimedia installations by 80+ international artists',
        'Evening cultural talks at Pepper House heritage library courtyard',
        'Official hardbound exhibition catalogue'
      ],
      tiers: [
        { name: 'Day Pass', price: 499, perks: 'Full access to all Aspinwall House & Fort Kochi pavilions', available: 140 },
        { name: 'Season Pass (3 Days)', price: 1199, perks: '3-day unlimited entry, guided curator tour voucher', available: 50 },
        { name: 'Patron Preview & Gala', price: 3499, perks: 'Opening night vernissage, waterfront dinner with participating artists', available: 15 }
      ]
    },
    {
      id: 'evt-dastarkhwan-2026',
      title: 'Dastarkhwan: Royal Awadhi & Dum Pukht Gastronomy Conclave',
      category: 'Food & Drink',
      city: 'Hyderabad',
      venue: 'Taj Falaknuma Palace, Engine Bowli',
      date: '2026-12-19',
      displayDate: 'Sat, Dec 19, 2026',
      time: '18:30 - 23:00 IST',
      doorTime: '18:00 IST',
      startingPrice: 3200,
      featured: false,
      image: 'assets/images/event-dastarkhwan.jpg',
      imageAlt: 'Royal Awadhi charcoal hearth culinary spread and silver dining setting at Falaknuma Palace',
      description: 'An extraordinary royal feast celebrating ancestral Dum Pukht and Nizami slow-cooked gastronomy. Generational Khansamas present 14 ceremonial courses over fragrant rosewood and copper degs in the 101-seat dining hall of Falaknuma Palace.',
      highlights: [
        '14-course royal progressive tasting menu by master Ustaads',
        'Heirloom spice foraging notes and saffron slow-braise masterclass',
        'Live Sufi acoustic accompaniment in the palace courtyard',
        'Handcrafted silver ittar flask souvenir'
      ],
      tiers: [
        { name: 'Royal Banquet Seating', price: 3200, perks: '14-course royal banquet, palace garden arrival carriage ride', available: 24 },
        { name: 'Nizami Degustation', price: 4800, perks: 'Pairings of rare vintage sherbets & royal cellar selections', available: 16 },
        { name: 'Grand 101-Table VIP', price: 8500, perks: 'Seat at the historic 101-seat table, private palace tour with historian', available: 6 }
      ]
    },
    {
      id: 'evt-mumbai-marathon-2026',
      title: 'Mumbai Midnight Coastal Ultra Marathon & Expo',
      category: 'Sports',
      city: 'Mumbai',
      venue: 'Bandra-Worli Sea Link Promenade',
      date: '2026-12-31',
      displayDate: 'Thu, Dec 31, 2026',
      time: '23:30 - 06:00 IST',
      doorTime: '22:30 IST',
      startingPrice: 1200,
      featured: false,
      image: 'assets/images/event-mumbai-marathon.jpg',
      imageAlt: 'Marathon runners illuminated under coastal city floodlights on the Bandra-Worli Sea Link',
      description: 'Run across the iconic Bandra-Worli Sea Link under Mumbai’s midnight stars. Featuring 21km and 42km coastal endurance challenges with live pacing beacons, acoustic cheering zones, and sunrise oceanfront breakfast.',
      highlights: [
        'Traffic-free illuminated Bandra-Worli Sea Link circuit',
        'RFID chip timing with live WhatsApp milestone notifications',
        'Recovery village with cold plunge pools and physiotherapists',
        'Exclusive finisher medal and technical coastal running jersey'
      ],
      tiers: [
        { name: 'Half Marathon (21K)', price: 1200, perks: 'Bib, RFID timing, finisher medal, hydration support, breakfast', available: 160 },
        { name: 'Full Coastal (42K)', price: 1800, perks: 'Full marathon entry, pacing bands, post-run physio massage voucher', available: 90 },
        { name: 'Elite Coastal Club', price: 3200, perks: 'Wave 1 priority start, VIP oceanfront lounge, race photography pack', available: 20 }
      ]
    },
    {
      id: 'evt-jaipur-virasat-2027',
      title: 'Jaipur Virasat: Royal Heritage Handloom & Craft Biennale',
      category: 'Heritage & Craft',
      city: 'Jaipur',
      venue: 'City Palace Courtyards & Mubarak Mahal',
      date: '2027-01-15',
      displayDate: 'Fri, Jan 15, 2027',
      time: '10:00 - 20:00 IST',
      doorTime: '09:30 IST',
      startingPrice: 650,
      featured: false,
      image: 'assets/images/event-jaipur-virasat.jpg',
      imageAlt: 'Heritage courtyards of City Palace Jaipur displaying handloom textiles and artisan craft',
      description: 'A tribute to slow heritage craftsmanship inside the historic courtyards of the Jaipur Royal Palace. Featuring 90 generational artisans of Dabu block printing, blue pottery, Meenakari enamelling, and hand-spun Pashmina.',
      highlights: [
        'Hands-on masterclasses in natural indigo and mud-resist block printing',
        'Live demonstrations of delicate Meenakari gold enamelling',
        'Evening Rajasthani Manganiyar folk fusion under palace lanterns',
        'Curated fair-trade direct artisan marketplace'
      ],
      tiers: [
        { name: 'Day Bazaar Pass', price: 650, perks: 'Access to all palace courtyards, artisan pavilions & music', available: 120 },
        { name: 'Masterclass Pass', price: 1450, perks: 'Includes 2 hands-on workshops + personal block printed scarf', available: 35 },
        { name: 'Royal Patron Invitation', price: 3600, perks: 'Private tour of royal private chambers, high tea with royal historians', available: 10 }
      ]
    },
    {
      id: 'evt-goa-sunwave-2027',
      title: 'Goa Sunwave: Coastal Electronic & Modular Beach Festival',
      category: 'Music & Concerts',
      city: 'Goa',
      venue: 'Vagator Cliffs & Beachfront',
      date: '2027-01-22',
      displayDate: 'Fri, Jan 22, 2027',
      time: '16:00 - 04:00 IST',
      doorTime: '15:00 IST',
      startingPrice: 2899,
      featured: false,
      image: 'assets/images/event-goa-sunwave.jpg',
      imageAlt: 'Vibrant coastal electronic festival stage overlooking the Arabian Sea sunset in Vagator Goa',
      description: 'India’s premier coastal electronic soundscape on the dramatic red cliffs of Vagator. Three stages blending progressive techno, live modular ambient synthesis, and coastal sunset sound immersions.',
      highlights: [
        'Cliffside amphitheatre with panoramic sunset views over the Arabian Sea',
        'World-class Funktion-One spatial sound system',
        'Curated artisanal Goan poee and craft beverage village',
        'Sunrise ambient sound meditation on the sand'
      ],
      tiers: [
        { name: 'Festival Day Pass', price: 2899, perks: 'Access to all 3 stages, beach concourse & food village', available: 75 },
        { name: 'Weekend Sunset Pass', price: 4999, perks: 'Full 3-day access, priority cliffside viewing deck', available: 40 },
        { name: 'Cabana VIP Pass', price: 8999, perks: 'Private raised cabana, dedicated mixologist bar, artist lounge access', available: 14 }
      ]
    },
    {
      id: 'evt-delhi-theatre-2027',
      title: 'Rangmanch: National Contemporary Theatre & Cinema Conclave',
      category: 'Art & Culture',
      city: 'Delhi NCR',
      venue: 'Kamani Auditorium & Mandi House Cultural Complex',
      date: '2027-02-06',
      displayDate: 'Sat, Feb 6, 2027',
      time: '11:00 - 22:30 IST',
      doorTime: '10:30 IST',
      startingPrice: 799,
      featured: false,
      image: 'assets/images/event-delhi-theatre.jpg',
      imageAlt: 'Dramatic stage play performance under theatrical spotlights at Kamani Auditorium Delhi',
      description: 'The epicenter of contemporary Indian dramatic arts. Premiering 18 experimental Hindi, Bengali, and English theatre productions alongside masterclasses by National School of Drama alumni and indie cinema directors.',
      highlights: [
        'Premieres of award-winning contemporary original Indian plays',
        'Actor roundtable with veteran theatre icons and screen directors',
        'Scriptwriting and stage lighting design clinics',
        'Mandi House cultural canteen chai & snack voucher'
      ],
      tiers: [
        { name: 'Single Production Pass', price: 799, perks: 'Admission to feature play in Main Auditorium', available: 110 },
        { name: 'All-Day Theatre Pass', price: 1699, perks: 'Access to 3 headline plays and director Q&A panels', available: 45 },
        { name: 'Director Circle VIP', price: 3200, perks: 'Front orchestra rows, greenroom meet-and-greet, gala dinner', available: 12 }
      ]
    },
    {
      id: 'evt-cyberabad-saas-2027',
      title: 'Cyberabad Cloud & Quantum Computing Conclave',
      category: 'Technology',
      city: 'Hyderabad',
      venue: 'HICC Novotel & HITEC City Convention Center',
      date: '2027-02-18',
      displayDate: 'Thu, Feb 18, 2027',
      time: '09:30 - 18:30 IST',
      doorTime: '08:30 IST',
      startingPrice: 2199,
      featured: false,
      image: 'assets/images/event-cyberabad-saas.jpg',
      imageAlt: 'Tech researchers and enterprise software leads gathering at HICC HITEC City Hyderabad',
      description: 'Bringing together 2,500 software architects, enterprise cloud founders, and post-quantum cryptography researchers exploring scalable global architectures built from Cyberabad.',
      highlights: [
        'In-depth technical architecture teardowns from unicorn engineering leads',
        'Hands-on quantum simulation and lattice cryptography sessions',
        'Enterprise SaaS startup product showcase & pitch stage',
        'Authentic Hyderabadi biryani networking luncheon'
      ],
      tiers: [
        { name: 'Developer Pass', price: 2199, perks: 'Access to technical keynotes, hack lab, networking lunch', available: 95 },
        { name: 'Architect Pass', price: 3899, perks: 'Deep-dive masterclasses, priority seating, swag pack', available: 40 },
        { name: 'Executive Leader', price: 7500, perks: 'Private CXO roundtable, 1-on-1 VC meetings, luxury lounge', available: 15 }
      ]
    },
    {
      id: 'evt-sula-wine-2027',
      title: 'Deccan Harvest: Artisanal Wine & Farm-to-Table Fest',
      category: 'Food & Drink',
      city: 'Mumbai',
      venue: 'Sula Vineyards & Amphitheatre, Nashik',
      date: '2027-02-27',
      displayDate: 'Sat, Feb 27, 2027',
      time: '11:00 - 22:00 IST',
      doorTime: '10:30 IST',
      startingPrice: 1850,
      featured: false,
      image: 'assets/images/event-sula-wine.jpg',
      imageAlt: 'Wine tasting glasses overlooking the sunlit vineyards of the Deccan plateau',
      description: 'Celebrate the spring grape harvest across rolling vineyard hills. Enjoy unlimited tastings of estate-grown cuvées, farm-to-table Maharashtra culinary pairings, grape stomping, and live indie acoustic bands in the vineyard amphitheatre.',
      highlights: [
        'Unlimited guided barrel tastings of reserve Dindori wines',
        'Grape stomping vats and organic vineyard master tour',
        'Artisan sourdough, goat cheese, and smoked meats marketplace',
        'Sunset acoustic live sets in the open-air amphitheatre'
      ],
      tiers: [
        { name: 'Harvest Pass', price: 1850, perks: 'Includes tasting booklet, crystal wine glass, amphitheatre entry', available: 120 },
        { name: 'Reserve Tasting Pass', price: 2950, perks: 'Winemaker barrel tasting session, private vineyard picnic basket', available: 50 },
        { name: 'Estate Villa Experience', price: 6200, perks: 'VIP estate lounge, private 5-course wine paired dinner, harvest crate', available: 10 }
      ]
    },
    {
      id: 'evt-rishikesh-yoga-2027',
      title: 'Prana & Sound: International Himalayan Meditation & Yoga Summit',
      category: 'Sports',
      city: 'Rishikesh',
      venue: 'Parmarth Niketan & Holy Riverfront, Rishikesh',
      date: '2027-03-14',
      displayDate: 'Sun, Mar 14, 2027',
      time: '06:00 - 19:30 IST',
      doorTime: '05:30 IST',
      startingPrice: 1650,
      featured: false,
      image: 'assets/images/event-rishikesh-yoga.jpg',
      imageAlt: 'Yoga and meditation practitioners gathered peacefully on the Himalayan riverfront in Rishikesh',
      description: 'An introspective spiritual and physical gathering on the banks of the sacred Ganges in the Himalayan foothills. Led by venerated yoga acharyas, sound healers with Tibetan bowls, and Ayurvedic pulse masters.',
      highlights: [
        'Dawn Pranayama and Ashtanga alignment on riverfront Ghats',
        'Sound bath meditation using 40 handcrafted singing bowls',
        'Ayurvedic wellness assessment and organic sattvic feast',
        'Evening sacred Ganga Aarti and lamp floating ceremony'
      ],
      tiers: [
        { name: 'Day Immersion Pass', price: 1650, perks: 'Access to all 4 daily yoga sessions, sattvic meals, Ganga Aarti', available: 85 },
        { name: '3-Day Retreat Pass', price: 3800, perks: 'Unlimited sessions, Ayurvedic consultation, meditation cushion', available: 30 },
        { name: 'Acharya Seeker VIP', price: 6500, perks: 'Private ashram accommodation voucher, 1-on-1 meditation mentorship', available: 8 }
      ]
    },
    {
      id: 'evt-kolkata-literary-2027',
      title: 'Calcutta Reverie: Literature, Jazz & Independent Arts Meet',
      category: 'Art & Culture',
      city: 'Kolkata',
      venue: 'Victoria Memorial Grounds & Park Street Pavilion',
      date: '2027-03-27',
      displayDate: 'Sat, Mar 27, 2027',
      time: '11:00 - 21:00 IST',
      doorTime: '10:30 IST',
      startingPrice: 550,
      featured: false,
      image: 'assets/images/event-kolkata-literary.jpg',
      imageAlt: 'Intellectual and artistic book reading gathering under colonial architecture in Kolkata',
      description: 'The intellectual heartbeat of Bengal. Uniting contemporary novelists, Bengali poets, jazz musicians, and independent graphic novel artists for vibrant debates on the grand lawns of the Victoria Memorial.',
      highlights: [
        'Keynote addresses from Booker Prize nominees and Sahitya Akademi laureates',
        'Evening Park Street jazz revival live performance',
        'Rare antiquarian book fair and indie press pop-up bazaar',
        'Authentic Darjeeling first-flush tea tasting bar'
      ],
      tiers: [
        { name: 'General Delegate', price: 550, perks: 'Full access to literary gazebos, book pavilions & jazz stage', available: 140 },
        { name: 'Literary Circle Pass', price: 1250, perks: 'Reserved marquee front seating, hardbound literary anthology', available: 45 },
        { name: 'Author Dinner Invitation', price: 2900, perks: 'Evening dinner at Bengal Club with visiting novelists and poets', available: 12 }
      ]
    },
    {
      id: 'evt-varanasi-ghats-2027',
      title: 'Ganga Dhwani: Ancient Acoustic Ragas & Boat Recitals',
      category: 'Music & Concerts',
      city: 'Varanasi',
      venue: 'Assi Ghat & Bajra Boat Amphitheatre',
      date: '2027-04-10',
      displayDate: 'Sat, Apr 10, 2027',
      time: '05:30 - 10:00 & 18:30 - 22:30 IST',
      doorTime: '05:00 IST',
      startingPrice: 1100,
      featured: false,
      image: 'assets/images/event-varanasi-ghats.jpg',
      imageAlt: 'Evening oil lamps and sacred musical recitals floating along the ghats of Varanasi',
      description: 'A deeply moving spiritual acoustic tradition. Experience Raag Bhairav at dawn and Raag Yaman at dusk performed on floating wooden Bajra boats drifting along the ghats of Kashi, accompanied by tabla and shehnai.',
      highlights: [
        'Subah-e-Banaras dawn raga performance on wooden bajra boats',
        'Unamplified pure acoustic sound echoing across ancient stone steps',
        'Traditional Banarasi breakfast of kachori and rabri malaiyo',
        'Evening boat promenade alongside the grand Ganga Aarti'
      ],
      tiers: [
        { name: 'Ghat Steps Seating', price: 1100, perks: 'Front stone tier seating at Assi Ghat, morning tea & sweets', available: 70 },
        { name: 'Floating Bajra Boat Pass', price: 2200, perks: 'Seating aboard royal decorated wooden boat drifting with musicians', available: 32 },
        { name: 'Maharaja Bajra VIP', price: 4200, perks: 'Private boat deck, traditional musicians dialogue, silk uttariya shawl', available: 8 }
      ]
    },
    {
      id: 'evt-ladakh-ultra-2027',
      title: 'Trans-Himalayan Ultra Trail & High-Altitude Gravel Rally',
      category: 'Sports',
      city: 'Ladakh',
      venue: 'Leh Valley & Khardung La Mountain Pass',
      date: '2027-05-02',
      displayDate: 'Sun, May 2, 2027',
      time: '05:00 - 18:00 IST',
      doorTime: '04:30 IST',
      startingPrice: 3500,
      featured: false,
      image: 'assets/images/event-ladakh-ultra.jpg',
      imageAlt: 'High altitude mountain runner navigating rugged Himalayan peaks in Ladakh',
      description: 'One of the highest and most rigorous endurance events on Earth. Run or cycle through the barren moonscapes of Ladakh at 11,500 to 17,500 feet, across ancient Buddhist monastery trails and Khardung La pass.',
      highlights: [
        'Certified high-altitude route with medical oxygen stations throughout',
        'Acclimatization briefing with Himalayan mountaineering veterans',
        'Monastery blessing ceremony at Thiksey Gompa before flag-off',
        'Finisher bronze yak-horn trophy and technical windbreaker'
      ],
      tiers: [
        { name: 'Valley Trail (25K)', price: 3500, perks: 'Medical checkup, oxygen support, timing bib, finisher medal', available: 50 },
        { name: 'High Pass Ultra (50K)', price: 5500, perks: 'Full pass crossing, expedition support vehicle, GPS tracker', available: 25 },
        { name: 'Khampa Expedition Club', price: 9500, perks: 'Includes 3-day hotel acclimatization stay, support crew, gala banquet', available: 8 }
      ]
    }
  ];

  // 6 Indian Cultural Disciplines
  const INDIAN_CATEGORIES = [
    { name: 'Music & Concerts', short: 'Music', count: 4, image: 'assets/images/cat-music-in.jpg', desc: 'Classical sitar, modular synth, indie sangeet & beach festivals' },
    { name: 'Technology', short: 'Tech', count: 2, image: 'assets/images/cat-tech-in.jpg', desc: 'Bengaluru AI summits & Cyberabad quantum conclaves' },
    { name: 'Art & Culture', short: 'Art', count: 3, image: 'assets/images/cat-art-in.jpg', desc: 'Kochi-Muziris Biennale, Mandi House theatre & literature' },
    { name: 'Food & Drink', short: 'Royal Feasts', count: 2, image: 'assets/images/cat-culinary-in.jpg', desc: 'Awadhi Falaknuma feasts & Deccan vineyard harvest fests' },
    { name: 'Sports', short: 'Sports', count: 2, image: 'assets/images/cat-sports-in.jpg', desc: 'Mumbai midnight coastal ultra & Ladakh high pass challenges' },
    { name: 'Heritage & Craft', short: 'Craft', count: 1, image: 'assets/images/cat-heritage-in.jpg', desc: 'Jaipur royal handlooms, block prints & slow artisan bazaars' }
  ];

  // =========================================================================
  // APPLICATION STATE
  // =========================================================================
  const state = {
    events: [...INDIAN_EVENTS_DATA],
    filters: {
      search: '',
      category: 'all',
      city: 'all',
      date: 'all',
      price: 'all',
      sort: 'featured'
    },
    savedEventIds: new Set(),
    bookings: [],
    theme: 'light',
    // Active Booking Draft state
    activeBookingDraft: {
      event: null,
      selectedTierIndex: 0,
      quantity: 1,
      attendeeName: 'Aarav Sharma',
      attendeeEmail: 'aarav.sharma@eventra.in',
      attendeePhone: '+91 98765 43210'
    },
    activeTicketBooking: null
  };

  // =========================================================================
  // LOCAL STORAGE SAFEKEEPING (INR Versioned & Resilient)
  // =========================================================================
  function loadPersistedState() {
    // 1. Theme (URL param override or LocalStorage)
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const urlTheme = urlParams.get('theme');
      if (urlTheme === 'dark' || urlTheme === 'light') {
        state.theme = urlTheme;
      } else {
        const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
        if (savedTheme === 'dark' || savedTheme === 'light') {
          state.theme = savedTheme;
        }
      }
    } catch (e) {
      state.theme = 'light';
    }
    document.documentElement.setAttribute('data-theme', state.theme);

    // 2. Saved Events
    try {
      const rawSaved = localStorage.getItem(STORAGE_KEYS.SAVED_EVENTS);
      if (rawSaved) {
        const parsed = JSON.parse(rawSaved);
        if (Array.isArray(parsed)) {
          state.savedEventIds = new Set(parsed);
        }
      }
    } catch (e) {
      console.warn('Eventra India: Resetting saved wishlist.', e);
      state.savedEventIds = new Set();
    }

    // 3. Bookings (Initial demo seed in INR)
    try {
      const rawBookings = localStorage.getItem(STORAGE_KEYS.BOOKINGS);
      if (rawBookings) {
        const parsed = JSON.parse(rawBookings);
        if (Array.isArray(parsed)) {
          state.bookings = parsed;
        }
      } else {
        const sampleEvent = INDIAN_EVENTS_DATA[0];
        const initialBooking = {
          bookingId: 'BK-' + Date.now().toString(36).toUpperCase(),
          bookingRef: 'EVT-IN-2026-08912',
          eventId: sampleEvent.id,
          eventTitle: sampleEvent.title,
          category: sampleEvent.category,
          city: sampleEvent.city,
          venue: sampleEvent.venue,
          displayDate: sampleEvent.displayDate,
          time: sampleEvent.time,
          image: sampleEvent.image,
          tierName: sampleEvent.tiers[1].name,
          tierPrice: sampleEvent.tiers[1].price,
          quantity: 2,
          subtotal: sampleEvent.tiers[1].price * 2,
          fee: PLATFORM_FEE_INR,
          total: (sampleEvent.tiers[1].price * 2) + PLATFORM_FEE_INR,
          attendeeName: 'Aarav Sharma',
          attendeeEmail: 'aarav.sharma@eventra.in',
          attendeePhone: '+91 98765 43210',
          bookedAt: new Date().toISOString(),
          status: 'Confirmed'
        };
        state.bookings = [initialBooking];
        saveBookingsToStorage();
      }
    } catch (e) {
      console.warn('Eventra India: Resetting bookings.', e);
      state.bookings = [];
    }
  }

  function saveSavedEventsToStorage() {
    try {
      localStorage.setItem(STORAGE_KEYS.SAVED_EVENTS, JSON.stringify(Array.from(state.savedEventIds)));
    } catch (e) {
      console.error('Eventra India: Failed to persist saved wishlist.', e);
    }
  }

  function saveBookingsToStorage() {
    try {
      localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(state.bookings));
    } catch (e) {
      console.error('Eventra India: Failed to persist bookings.', e);
    }
  }

  function toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', state.theme);
    try {
      localStorage.setItem(STORAGE_KEYS.THEME, state.theme);
    } catch (e) {}
    showToast(`Switched to ${state.theme === 'dark' ? 'Midnight Silk' : 'Royal Sandalwood'} theme`, 'info', 2000);
  }

  // =========================================================================
  // LIVE COUNTDOWN TIMER (Marquee Event)
  // =========================================================================
  function initCountdownTimer() {
    const el = document.getElementById('countdownTimerVal');
    if (!el) return;

    // Target: NCPA Mumbai Concert (Nov 13, 2026)
    const targetDate = new Date('2026-11-13T19:30:00+05:30').getTime();

    function update() {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        el.textContent = 'Event Live Today!';
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      el.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    update();
    setInterval(update, 1000);
  }

  // =========================================================================
  // QR & BARCODE CANVAS GRAPHICS GENERATOR (Self-Contained)
  // =========================================================================
  function renderTicketQr(canvas, refCode) {
    if (!canvas || !canvas.getContext) return;
    const ctx = canvas.getContext('2d');
    const size = canvas.width;
    ctx.clearRect(0, 0, size, size);

    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, size, size);

    const matrixSize = 25;
    const cellSize = Math.floor((size - 16) / matrixSize);
    const offset = Math.floor((size - (matrixSize * cellSize)) / 2);

    ctx.fillStyle = '#111D2E';

    function drawLocator(gx, gy) {
      for (let r = 0; r < 7; r++) {
        for (let c = 0; c < 7; c++) {
          const isOuter = r === 0 || r === 6 || c === 0 || c === 6;
          const isInner = r >= 2 && r <= 4 && c >= 2 && c <= 4;
          if (isOuter || isInner) {
            ctx.fillRect(offset + (gx + c) * cellSize, offset + (gy + r) * cellSize, cellSize, cellSize);
          }
        }
      }
    }

    drawLocator(0, 0);
    drawLocator(matrixSize - 7, 0);
    drawLocator(0, matrixSize - 7);

    let seed = 0;
    for (let i = 0; i < refCode.length; i++) {
      seed = (seed * 31 + refCode.charCodeAt(i)) & 0x7FFFFFFF;
    }

    function pseudoRandom() {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    }

    for (let r = 0; r < matrixSize; r++) {
      for (let c = 0; c < matrixSize; c++) {
        const inTopLeft = r < 7 && c < 7;
        const inTopRight = r < 7 && c >= matrixSize - 7;
        const inBottomLeft = r >= matrixSize - 7 && c < 7;
        if (inTopLeft || inTopRight || inBottomLeft) continue;

        if (r === 6 || c === 6) {
          if ((r + c) % 2 === 0) {
            ctx.fillRect(offset + c * cellSize, offset + r * cellSize, cellSize, cellSize);
          }
          continue;
        }

        if (pseudoRandom() > 0.52) {
          ctx.fillRect(offset + c * cellSize, offset + r * cellSize, cellSize, cellSize);
        }
      }
    }
  }

  // =========================================================================
  // TOAST NOTIFICATIONS
  // =========================================================================
  function showToast(message, type = 'info', duration = 3200) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.setAttribute('role', 'alert');

    const msgSpan = document.createElement('span');
    msgSpan.textContent = message;

    const closeBtn = document.createElement('button');
    closeBtn.className = 'toast-close';
    closeBtn.setAttribute('aria-label', 'Dismiss notification');
    closeBtn.innerHTML = '<svg class="icon icon-sm" aria-hidden="true"><use href="#icon-close"/></svg>';

    toast.appendChild(msgSpan);
    toast.appendChild(closeBtn);
    container.appendChild(toast);

    function removeToast() {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 200);
    }

    closeBtn.addEventListener('click', removeToast);
    setTimeout(removeToast, duration);
  }

  // =========================================================================
  // CURRENCY & FORMATTING (Indian Rupee ₹)
  // =========================================================================
  function formatINR(amount) {
    return '₹' + Number(amount).toLocaleString('en-IN');
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // =========================================================================
  // COMPONENT RENDERS
  // =========================================================================

  // 1. Render Photographic Indian Category Navigation
  function renderCategories() {
    const grid = document.getElementById('categoriesGrid');
    if (!grid) return;

    grid.innerHTML = INDIAN_CATEGORIES.map(cat => {
      const isActive = state.filters.category === cat.name;
      return `
        <div class="category-card ${isActive ? 'active' : ''}" data-cat-name="${escapeHtml(cat.name)}" role="button" tabindex="0" aria-label="Explore ${escapeHtml(cat.name)}">
          <img src="${escapeHtml(cat.image)}" alt="${escapeHtml(cat.name)}" class="cat-card-img" loading="lazy">
          <div class="cat-card-scrim"></div>
          <div class="cat-card-content">
            <h3 class="cat-meta-title">${escapeHtml(cat.name)}</h3>
            <span class="cat-meta-count">${cat.count} Curated Events</span>
          </div>
        </div>
      `;
    }).join('');

    grid.querySelectorAll('.category-card').forEach(card => {
      const handler = () => {
        const catName = card.getAttribute('data-cat-name');
        setCategoryFilter(catName);
        document.getElementById('explore').scrollIntoView({ behavior: 'smooth' });
      };
      card.addEventListener('click', handler);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handler();
        }
      });
    });
  }

  // 2. Render Hero Spotlight (Curator's Choice)
  function renderHeroSpotlight() {
    const spotlightEvent = state.events.find(e => e.featured) || state.events[0];
    if (!spotlightEvent) return;

    const artWrap = document.getElementById('heroSpotlightArtwork');
    const catEl = document.getElementById('heroSpotlightCategory');
    const cityEl = document.getElementById('heroSpotlightCity');
    const titleEl = document.getElementById('heroSpotlightTitle');
    const priceEl = document.getElementById('heroSpotlightPrice');
    const detailsBtn = document.getElementById('heroSpotlightDetailsBtn');
    const bookBtn = document.getElementById('heroSpotlightBookBtn');

    if (artWrap) {
      artWrap.innerHTML = `<img src="${spotlightEvent.image}" alt="${escapeHtml(spotlightEvent.imageAlt)}" loading="eager">`;
    }
    if (catEl) catEl.textContent = spotlightEvent.category;
    if (cityEl) cityEl.textContent = `${spotlightEvent.venue}, ${spotlightEvent.city}`;
    if (titleEl) titleEl.textContent = spotlightEvent.title;
    if (priceEl) priceEl.textContent = formatINR(spotlightEvent.startingPrice);

    if (detailsBtn) {
      detailsBtn.onclick = () => openEventDetailsModal(spotlightEvent.id);
    }
    if (bookBtn) {
      bookBtn.onclick = () => startBookingFlow(spotlightEvent.id);
    }

    // Editorial Spotlight Section Buttons
    const editorialDetailsBtn = document.getElementById('spotlightEditorialDetailsBtn');
    const editorialBookBtn = document.getElementById('spotlightEditorialBookBtn');
    const summitEvent = state.events.find(e => e.id === 'evt-bengaluru-ai-2025') || spotlightEvent;

    if (editorialDetailsBtn) {
      editorialDetailsBtn.onclick = () => openEventDetailsModal(summitEvent.id);
    }
    if (editorialBookBtn) {
      editorialBookBtn.onclick = () => startBookingFlow(summitEvent.id);
    }
  }

  // 3. Render Events Grid (The 14+ Indian Experiences)
  function renderEventsGrid() {
    const grid = document.getElementById('eventsGrid');
    const countBadge = document.getElementById('resultsCount');
    const noResults = document.getElementById('noResultsState');
    if (!grid) return;

    // Filter Logic
    let filtered = state.events.filter(event => {
      // Search (title, venue, city, description)
      if (state.filters.search.trim()) {
        const q = state.filters.search.toLowerCase().trim();
        const matchesTitle = event.title.toLowerCase().includes(q);
        const matchesVenue = event.venue.toLowerCase().includes(q);
        const matchesCity = event.city.toLowerCase().includes(q);
        const matchesDesc = event.description.toLowerCase().includes(q);
        if (!matchesTitle && !matchesVenue && !matchesCity && !matchesDesc) {
          return false;
        }
      }

      // Category
      if (state.filters.category !== 'all' && event.category !== state.filters.category) {
        return false;
      }

      // City Hub
      if (state.filters.city !== 'all' && event.city !== state.filters.city) {
        return false;
      }

      // Date / Season
      if (state.filters.date !== 'all') {
        const eventDate = new Date(event.date);
        const m = eventDate.getMonth() + 1; // 1-12
        const y = eventDate.getFullYear();

        if (state.filters.date === 'weekend') {
          // Within next 30 days
          const now = new Date();
          const diffDays = Math.ceil((eventDate - now) / (1000 * 60 * 60 * 24));
          if (diffDays < 0 || diffDays > 30) return false;
        } else if (state.filters.date === 'winter') {
          // Nov 2026 - Dec 2026
          if (!(y === 2026 && (m === 11 || m === 12))) return false;
        } else if (state.filters.date === 'spring') {
          // Jan 2027 - Feb 2027
          if (!(y === 2027 && (m === 1 || m === 2))) return false;
        } else if (state.filters.date === 'summer') {
          // Mar 2027 - May 2027
          if (!(y === 2027 && (m >= 3 && m <= 5))) return false;
        }
      }

      // Price in Rupees
      if (state.filters.price !== 'all') {
        const p = event.startingPrice;
        if (state.filters.price === 'under1000' && p >= 1000) return false;
        if (state.filters.price === '1000-2500' && (p < 1000 || p > 2500)) return false;
        if (state.filters.price === 'over2500' && p <= 2500) return false;
      }

      return true;
    });

    // Sorting Logic
    filtered.sort((a, b) => {
      if (state.filters.sort === 'featured') {
        if (a.featured === b.featured) return 0;
        return a.featured ? -1 : 1;
      } else if (state.filters.sort === 'date-soonest') {
        return new Date(a.date) - new Date(b.date);
      } else if (state.filters.sort === 'price-asc') {
        return a.startingPrice - b.startingPrice;
      } else if (state.filters.sort === 'price-desc') {
        return b.startingPrice - a.startingPrice;
      } else if (state.filters.sort === 'name') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

    // Update Counts & Empty state
    if (countBadge) {
      countBadge.textContent = `Showing ${filtered.length} of ${state.events.length} experiences`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = '';
      if (noResults) noResults.style.display = 'block';
      updateActiveFilterChips();
      return;
    } else {
      if (noResults) noResults.style.display = 'none';
    }

    // Render Event Cards
    grid.innerHTML = filtered.map(event => {
      const isSaved = state.savedEventIds.has(event.id);
      return `
        <article class="event-card" data-event-id="${event.id}">
          <div class="event-artwork-box" role="button" tabindex="0" aria-label="View details for ${escapeHtml(event.title)}">
            <img src="${escapeHtml(event.image)}" alt="${escapeHtml(event.imageAlt)}" loading="lazy">
            <span class="event-category-badge">${escapeHtml(event.category)}</span>
            <button type="button" class="event-bookmark-btn ${isSaved ? 'saved' : ''}" data-bookmark-id="${event.id}" aria-label="${isSaved ? 'Remove from wishlist' : 'Save to favorites'}" title="${isSaved ? 'Saved' : 'Save event'}">
              <svg class="icon"><use href="${isSaved ? '#icon-bookmark-filled' : '#icon-bookmark'}"/></svg>
            </button>
          </div>

          <div class="event-card-body">
            <div class="event-date-row">
              <svg class="icon"><use href="#icon-calendar"/></svg>
              <span>${escapeHtml(event.displayDate)}</span>
            </div>

            <h3 class="event-card-title" role="button" tabindex="0">${escapeHtml(event.title)}</h3>

            <div class="event-location-row">
              <svg class="icon"><use href="#icon-pin"/></svg>
              <span>${escapeHtml(event.venue)}, ${escapeHtml(event.city)}</span>
            </div>

            <p class="event-card-snippet">${escapeHtml(event.description)}</p>

            <div class="event-card-footer">
              <div class="event-card-price">
                <span class="card-price-label">Passes from</span>
                <span class="card-price-value">${formatINR(event.startingPrice)}</span>
              </div>

              <div class="event-card-btns">
                <button type="button" class="btn btn-sm btn-outline btn-details" data-event-id="${event.id}">
                  <span>Details</span>
                </button>
                <button type="button" class="btn btn-sm btn-primary btn-book" data-event-id="${event.id}">
                  <span>Book</span>
                </button>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach Event Listeners to Cards
    grid.querySelectorAll('.event-card').forEach(card => {
      const eventId = card.getAttribute('data-event-id');

      const triggerDetails = () => openEventDetailsModal(eventId);
      const artBox = card.querySelector('.event-artwork-box');
      const titleEl = card.querySelector('.event-card-title');
      const detailsBtn = card.querySelector('.btn-details');
      const bookBtn = card.querySelector('.btn-book');
      const bookmarkBtn = card.querySelector('.event-bookmark-btn');

      if (artBox) {
        artBox.addEventListener('click', (e) => {
          if (!e.target.closest('.event-bookmark-btn')) {
            triggerDetails();
          }
        });
        artBox.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            triggerDetails();
          }
        });
      }

      if (titleEl) {
        titleEl.addEventListener('click', triggerDetails);
        titleEl.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            triggerDetails();
          }
        });
      }

      if (detailsBtn) detailsBtn.addEventListener('click', triggerDetails);
      if (bookBtn) bookBtn.addEventListener('click', () => startBookingFlow(eventId));

      if (bookmarkBtn) {
        bookmarkBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleSaveEvent(eventId);
        });
      }
    });

    updateActiveFilterChips();
  }

  // 4. Render Active Filter Chips Row
  function updateActiveFilterChips() {
    const chipsRow = document.getElementById('activeChipsRow');
    const container = document.getElementById('activeChipsContainer');
    if (!chipsRow || !container) return;

    const chips = [];

    if (state.filters.search.trim()) {
      chips.push({
        label: `"${state.filters.search.trim()}"`,
        onRemove: () => {
          state.filters.search = '';
          const inp1 = document.getElementById('catalogueSearchInput');
          const inp2 = document.getElementById('heroSearchInput');
          if (inp1) inp1.value = '';
          if (inp2) inp2.value = '';
          toggleClearSearchBtn();
          renderEventsGrid();
        }
      });
    }

    if (state.filters.category !== 'all') {
      chips.push({
        label: `Category: ${state.filters.category}`,
        onRemove: () => setCategoryFilter('all')
      });
    }

    if (state.filters.city !== 'all') {
      chips.push({
        label: `Hub: ${state.filters.city}`,
        onRemove: () => {
          state.filters.city = 'all';
          const sel = document.getElementById('filterCity');
          const heroSel = document.getElementById('heroCitySelect');
          if (sel) sel.value = 'all';
          if (heroSel) heroSel.value = '';
          renderEventsGrid();
        }
      });
    }

    if (state.filters.date !== 'all') {
      const dateMap = {
        'weekend': 'This Weekend',
        'winter': 'Winter Season 2025',
        'spring': 'Spring Festivals 2026',
        'summer': 'Summer / Monsoon 2026'
      };
      chips.push({
        label: `Season: ${dateMap[state.filters.date] || state.filters.date}`,
        onRemove: () => {
          state.filters.date = 'all';
          const sel = document.getElementById('filterDate');
          const heroSel = document.getElementById('heroDateSelect');
          if (sel) sel.value = 'all';
          if (heroSel) heroSel.value = '';
          renderEventsGrid();
        }
      });
    }

    if (state.filters.price !== 'all') {
      const priceMap = {
        'under1000': 'Under ₹1,000',
        '1000-2500': '₹1,000 to ₹2,500',
        'over2500': '₹2,500+'
      };
      chips.push({
        label: `Price: ${priceMap[state.filters.price] || state.filters.price}`,
        onRemove: () => {
          state.filters.price = 'all';
          const sel = document.getElementById('filterPrice');
          if (sel) sel.value = 'all';
          renderEventsGrid();
        }
      });
    }

    if (chips.length > 0) {
      chipsRow.style.display = 'flex';
      container.innerHTML = chips.map((chip, idx) => `
        <span class="filter-chip">
          <span>${escapeHtml(chip.label)}</span>
          <button type="button" data-chip-idx="${idx}" aria-label="Remove filter">&times;</button>
        </span>
      `).join('');

      container.querySelectorAll('button').forEach(btn => {
        const idx = Number(btn.getAttribute('data-chip-idx'));
        btn.onclick = () => chips[idx].onRemove();
      });
    } else {
      chipsRow.style.display = 'none';
      container.innerHTML = '';
    }
  }

  // 5. Render Saved Events View
  function renderSavedEvents() {
    const grid = document.getElementById('savedGrid');
    const emptyState = document.getElementById('savedEmptyState');
    const actions = document.getElementById('savedSectionActions');
    const badge = document.getElementById('savedCountBadge');
    const mobileBadge = document.getElementById('mobileSavedBadge');

    const count = state.savedEventIds.size;
    if (badge) {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'inline-flex' : 'none';
    }
    if (mobileBadge) {
      mobileBadge.textContent = count;
    }

    if (!grid) return;

    if (count === 0) {
      grid.innerHTML = '';
      if (emptyState) emptyState.style.display = 'block';
      if (actions) actions.style.display = 'none';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';
    if (actions) actions.style.display = 'block';

    const savedList = state.events.filter(e => state.savedEventIds.has(e.id));

    grid.innerHTML = savedList.map(event => `
      <article class="event-card" data-event-id="${event.id}">
        <div class="event-artwork-box" role="button" tabindex="0">
          <img src="${escapeHtml(event.image)}" alt="${escapeHtml(event.imageAlt)}" loading="lazy">
          <span class="event-category-badge">${escapeHtml(event.category)}</span>
          <button type="button" class="event-bookmark-btn saved" data-bookmark-id="${event.id}" title="Remove from wishlist">
            <svg class="icon"><use href="#icon-bookmark-filled"/></svg>
          </button>
        </div>

        <div class="event-card-body">
          <div class="event-date-row">
            <svg class="icon"><use href="#icon-calendar"/></svg>
            <span>${escapeHtml(event.displayDate)}</span>
          </div>

          <h3 class="event-card-title">${escapeHtml(event.title)}</h3>

          <div class="event-location-row">
            <svg class="icon"><use href="#icon-pin"/></svg>
            <span>${escapeHtml(event.venue)}, ${escapeHtml(event.city)}</span>
          </div>

          <div class="event-card-footer">
            <div class="event-card-price">
              <span class="card-price-label">Passes from</span>
              <span class="card-price-value">${formatINR(event.startingPrice)}</span>
            </div>

            <div class="event-card-btns">
              <button type="button" class="btn btn-sm btn-outline btn-details" data-event-id="${event.id}">
                <span>Details</span>
              </button>
              <button type="button" class="btn btn-sm btn-primary btn-book" data-event-id="${event.id}">
                <span>Book</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    `).join('');

    grid.querySelectorAll('.event-card').forEach(card => {
      const id = card.getAttribute('data-event-id');
      const detBtn = card.querySelector('.btn-details');
      const bkBtn = card.querySelector('.btn-book');
      const bkmk = card.querySelector('.event-bookmark-btn');

      if (detBtn) detBtn.onclick = () => openEventDetailsModal(id);
      if (bkBtn) bkBtn.onclick = () => startBookingFlow(id);
      if (bkmk) bkmk.onclick = (e) => {
        e.stopPropagation();
        toggleSaveEvent(id);
      };
    });
  }

  // 6. Render My Tickets List
  function renderMyTickets() {
    const list = document.getElementById('ticketsList');
    const emptyState = document.getElementById('ticketsEmptyState');
    const badge = document.getElementById('ticketsCountBadge');
    const mobileBadge = document.getElementById('mobileTicketsBadge');

    const count = state.bookings.length;
    if (badge) {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'inline-flex' : 'none';
    }
    if (mobileBadge) {
      mobileBadge.textContent = count;
    }

    if (!list) return;

    if (count === 0) {
      list.innerHTML = '';
      if (emptyState) emptyState.style.display = 'block';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';

    list.innerHTML = state.bookings.map((booking, idx) => `
      <div class="ticket-item-card" data-booking-id="${escapeHtml(booking.bookingId)}">
        <div class="ticket-item-art">
          <img src="${escapeHtml(booking.image || 'assets/images/event-ragas-modular.jpg')}" alt="${escapeHtml(booking.eventTitle)}" loading="lazy">
        </div>

        <div class="ticket-item-content">
          <div class="ticket-item-top">
            <span class="badge-status confirmed">${escapeHtml(booking.status)}</span>
            <span class="ticket-ref-code">${escapeHtml(booking.bookingRef)}</span>
          </div>

          <h3 class="ticket-item-title">${escapeHtml(booking.eventTitle)}</h3>

          <div class="ticket-item-details">
            <span>
              <svg class="icon icon-sm"><use href="#icon-calendar"/></svg>
              ${escapeHtml(booking.displayDate)}
            </span>
            <span>
              <svg class="icon icon-sm"><use href="#icon-pin"/></svg>
              ${escapeHtml(booking.venue)}, ${escapeHtml(booking.city)}
            </span>
            <span>
              <svg class="icon icon-sm"><use href="#icon-ticket"/></svg>
              ${escapeHtml(booking.tierName)} × ${booking.quantity}
            </span>
          </div>
        </div>

        <div class="ticket-item-actions">
          <div>
            <div class="ticket-item-total-label">Total Amount (₹)</div>
            <div class="ticket-item-total">${formatINR(booking.total)}</div>
          </div>
          <button type="button" class="btn btn-sm btn-primary btn-view-pass" data-booking-index="${idx}">
            <svg class="icon icon-sm"><use href="#icon-ticket"/></svg>
            <span>View Pass</span>
          </button>
          <button type="button" class="btn btn-sm btn-ghost btn-cancel-booking" data-booking-index="${idx}" title="Cancel simulation">
            <svg class="icon icon-sm"><use href="#icon-trash"/></svg>
            <span>Cancel</span>
          </button>
        </div>
      </div>
    `).join('');

    list.querySelectorAll('.btn-view-pass').forEach(btn => {
      const idx = Number(btn.getAttribute('data-booking-index'));
      btn.onclick = () => openTicketPassModal(state.bookings[idx]);
    });

    list.querySelectorAll('.btn-cancel-booking').forEach(btn => {
      const idx = Number(btn.getAttribute('data-booking-index'));
      btn.onclick = () => {
        const item = state.bookings[idx];
        if (confirm(`Cancel demo pass for "${item.eventTitle}"?`)) {
          state.bookings.splice(idx, 1);
          saveBookingsToStorage();
          renderMyTickets();
          showToast('Demo booking cancelled.', 'info');
        }
      };
    });
  }

  // =========================================================================
  // FILTERING ACTIONS
  // =========================================================================
  function setCategoryFilter(catName) {
    state.filters.category = catName;

    const pills = document.querySelectorAll('.cat-pill');
    pills.forEach(pill => {
      const target = pill.getAttribute('data-category');
      const isMatch = (target === 'all' && catName === 'all') || (target === catName);
      pill.classList.toggle('active', isMatch);
      pill.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    });

    document.querySelectorAll('.category-card').forEach(card => {
      const name = card.getAttribute('data-cat-name');
      card.classList.toggle('active', name === catName);
    });

    renderEventsGrid();
  }

  function resetAllFilters() {
    state.filters.search = '';
    state.filters.category = 'all';
    state.filters.city = 'all';
    state.filters.date = 'all';
    state.filters.price = 'all';
    state.filters.sort = 'featured';

    const sInp1 = document.getElementById('catalogueSearchInput');
    const sInp2 = document.getElementById('heroSearchInput');
    const sCity = document.getElementById('filterCity');
    const sDate = document.getElementById('filterDate');
    const sPrice = document.getElementById('filterPrice');
    const sSort = document.getElementById('filterSort');
    const heroCity = document.getElementById('heroCitySelect');
    const heroDate = document.getElementById('heroDateSelect');

    if (sInp1) sInp1.value = '';
    if (sInp2) sInp2.value = '';
    if (sCity) sCity.value = 'all';
    if (sDate) sDate.value = 'all';
    if (sPrice) sPrice.value = 'all';
    if (sSort) sSort.value = 'featured';
    if (heroCity) heroCity.value = '';
    if (heroDate) heroDate.value = '';

    toggleClearSearchBtn();
    setCategoryFilter('all');
    showToast('Filters have been reset', 'info');
  }

  function toggleClearSearchBtn() {
    const val = state.filters.search;
    const btn = document.getElementById('clearSearchBtn');
    if (btn) btn.style.display = val.length > 0 ? 'inline-flex' : 'none';
  }

  function toggleSaveEvent(eventId) {
    const event = state.events.find(e => e.id === eventId);
    if (!event) return;

    if (state.savedEventIds.has(eventId)) {
      state.savedEventIds.delete(eventId);
      showToast(`Removed "${event.title}" from saved list`, 'info');
    } else {
      state.savedEventIds.add(eventId);
      showToast(`Saved "${event.title}" to your wishlist`, 'success');
    }

    saveSavedEventsToStorage();
    renderEventsGrid();
    renderSavedEvents();
  }

  // =========================================================================
  // MODAL 1: EVENT DETAILS DIALOG
  // =========================================================================
  function openEventDetailsModal(eventId) {
    const event = state.events.find(e => e.id === eventId);
    if (!event) return;

    const modal = document.getElementById('eventDetailsModal');
    const content = document.getElementById('modalDetailsContent');
    if (!modal || !content) return;

    const isSaved = state.savedEventIds.has(event.id);

    content.innerHTML = `
      <div class="details-grid">
        <div class="details-banner">
          <img src="${escapeHtml(event.image)}" alt="${escapeHtml(event.imageAlt)}" loading="eager">
        </div>

        <div class="details-body">
          <div class="details-meta-bar">
            <span class="details-category">${escapeHtml(event.category)}</span>
            <div class="details-date-venue">
              <span>
                <svg class="icon icon-sm"><use href="#icon-calendar"/></svg>
                ${escapeHtml(event.displayDate)} (${escapeHtml(event.time)})
              </span>
              <span>
                <svg class="icon icon-sm"><use href="#icon-pin"/></svg>
                ${escapeHtml(event.venue)}, ${escapeHtml(event.city)}
              </span>
            </div>
          </div>

          <h2 class="details-title" id="modalEventTitle">${escapeHtml(event.title)}</h2>

          <p class="details-desc">${escapeHtml(event.description)}</p>

          <div class="details-highlights-box">
            <h4 class="highlights-title">Experience Highlights</h4>
            <ul class="highlights-list">
              ${event.highlights.map(h => `<li>${escapeHtml(h)}</li>`).join('')}
            </ul>
          </div>

          <div class="details-tiers-section">
            <h4 class="highlights-title">Available Pass Tiers (₹ INR)</h4>
            <div class="details-tiers-grid">
              ${event.tiers.map((t, i) => `
                <div class="tier-preview-card ${i === 1 ? 'featured-tier' : ''}">
                  <div class="tier-name">${escapeHtml(t.name)}</div>
                  <div class="tier-price-val">${formatINR(t.price)}</div>
                  <div class="tier-perks">${escapeHtml(t.perks)}</div>
                  <div class="tier-inventory-text" style="margin-top:0.5rem;">Only ${t.available} demo passes left</div>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="details-actions-row">
            <button type="button" class="btn btn-outline" id="modalToggleSaveBtn">
              <svg class="icon"><use href="${isSaved ? '#icon-bookmark-filled' : '#icon-bookmark'}"/></svg>
              <span>${isSaved ? 'Saved in Wishlist' : 'Save Event'}</span>
            </button>

            <button type="button" class="btn btn-primary" id="modalBookNowBtn">
              <svg class="icon"><use href="#icon-ticket"/></svg>
              <span>Book Passes From ${formatINR(event.startingPrice)}</span>
            </button>
          </div>
        </div>
      </div>
    `;

    document.getElementById('modalToggleSaveBtn').onclick = () => {
      toggleSaveEvent(event.id);
      openEventDetailsModal(event.id);
    };

    document.getElementById('modalBookNowBtn').onclick = () => {
      closeModal(modal);
      startBookingFlow(event.id);
    };

    openModal(modal);
  }

  // =========================================================================
  // MODAL 2: TICKET BOOKING FLOW
  // =========================================================================
  function startBookingFlow(eventId) {
    const event = state.events.find(e => e.id === eventId);
    if (!event) return;

    state.activeBookingDraft = {
      event: event,
      selectedTierIndex: 0,
      quantity: 1,
      attendeeName: 'Aarav Sharma',
      attendeeEmail: 'aarav.sharma@eventra.in',
      attendeePhone: '+91 98765 43210'
    };

    const modal = document.getElementById('bookingModal');
    if (!modal) return;

    setBookingStage(1);
    updateBookingStage1UI();
    openModal(modal);
  }

  function setBookingStage(stageNumber) {
    const s1 = document.getElementById('bookingStage1');
    const s2 = document.getElementById('bookingStage2');
    const s3 = document.getElementById('bookingStage3');

    const ind1 = document.getElementById('stepIndicator1');
    const ind2 = document.getElementById('stepIndicator2');
    const ind3 = document.getElementById('stepIndicator3');
    const line1 = document.getElementById('stepLine1');
    const line2 = document.getElementById('stepLine2');

    if (s1) s1.style.display = stageNumber === 1 ? 'block' : 'none';
    if (s2) s2.style.display = stageNumber === 2 ? 'block' : 'none';
    if (s3) s3.style.display = stageNumber === 3 ? 'block' : 'none';

    if (ind1) {
      ind1.className = `step-item ${stageNumber === 1 ? 'active' : (stageNumber > 1 ? 'completed' : '')}`;
    }
    if (line1) {
      line1.className = `step-line ${stageNumber > 1 ? 'active' : ''}`;
    }
    if (ind2) {
      ind2.className = `step-item ${stageNumber === 2 ? 'active' : (stageNumber > 2 ? 'completed' : '')}`;
    }
    if (line2) {
      line2.className = `step-line ${stageNumber > 2 ? 'active' : ''}`;
    }
    if (ind3) {
      ind3.className = `step-item ${stageNumber === 3 ? 'active' : ''}`;
    }
  }

  function updateBookingStage1UI() {
    const draft = state.activeBookingDraft;
    const event = draft.event;
    if (!event) return;

    document.getElementById('bookingEventCategory').textContent = event.category;
    document.getElementById('bookingEventSummary').textContent = `${event.title} • ${event.displayDate} • ${event.venue}`;

    const tierList = document.getElementById('tierOptionsList');
    if (tierList) {
      tierList.innerHTML = event.tiers.map((tier, idx) => {
        const isSelected = draft.selectedTierIndex === idx;
        return `
          <div class="tier-option-card ${isSelected ? 'selected' : ''}" data-tier-index="${idx}" role="radio" aria-checked="${isSelected}" tabindex="0">
            <div class="tier-radio-wrap">
              <div class="tier-radio-custom"></div>
              <div class="tier-info">
                <span class="tier-info-title">${escapeHtml(tier.name)}</span>
                <span class="tier-info-perks">${escapeHtml(tier.perks)}</span>
              </div>
            </div>
            <div class="tier-price-box">
              <div class="tier-price-tag">${formatINR(tier.price)}</div>
              <div class="tier-inventory-text">${tier.available} passes left</div>
            </div>
          </div>
        `;
      }).join('');

      tierList.querySelectorAll('.tier-option-card').forEach(card => {
        const idx = Number(card.getAttribute('data-tier-index'));
        const selectAction = () => {
          draft.selectedTierIndex = idx;
          updateBookingStage1UI();
        };
        card.addEventListener('click', selectAction);
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            selectAction();
          }
        });
      });
    }

    const qtyInput = document.getElementById('ticketQtyInput');
    const decBtn = document.getElementById('qtyDecrementBtn');
    const incBtn = document.getElementById('qtyIncrementBtn');

    if (qtyInput) qtyInput.value = draft.quantity;
    if (decBtn) decBtn.disabled = draft.quantity <= 1;
    if (incBtn) incBtn.disabled = draft.quantity >= 6;

    const currentTier = event.tiers[draft.selectedTierIndex];
    const subtotal = currentTier.price * draft.quantity;
    const total = subtotal + PLATFORM_FEE_INR;

    const summaryTierLabel = document.getElementById('summaryTierLabel');
    const summarySubtotal = document.getElementById('summarySubtotal');
    const summaryFee = document.getElementById('summaryFee');
    const summaryTotal = document.getElementById('summaryTotal');

    if (summaryTierLabel) summaryTierLabel.textContent = `${currentTier.name} × ${draft.quantity}`;
    if (summarySubtotal) summarySubtotal.textContent = formatINR(subtotal);
    if (summaryFee) summaryFee.textContent = formatINR(PLATFORM_FEE_INR);
    if (summaryTotal) summaryTotal.textContent = formatINR(total);
  }

  function confirmBookingSubmission() {
    const draft = state.activeBookingDraft;
    const event = draft.event;
    if (!event) return;

    const nameInput = document.getElementById('attendeeName');
    const emailInput = document.getElementById('attendeeEmail');
    let hasError = false;

    if (!nameInput || !nameInput.value.trim() || nameInput.value.trim().length < 2) {
      if (nameInput) nameInput.classList.add('is-invalid');
      hasError = true;
    } else {
      if (nameInput) nameInput.classList.remove('is-invalid');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput || !emailRegex.test(emailInput.value.trim())) {
      if (emailInput) emailInput.classList.add('is-invalid');
      hasError = true;
    } else {
      if (emailInput) emailInput.classList.remove('is-invalid');
    }

    if (hasError) return;

    draft.attendeeName = nameInput.value.trim();
    draft.attendeeEmail = emailInput.value.trim();

    const phoneInput = document.getElementById('attendeePhone');
    if (phoneInput && phoneInput.value.trim()) {
      draft.attendeePhone = phoneInput.value.trim();
    }

    const submitBtn = document.getElementById('confirmDemoBookingBtn');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Securing Reservation in India...</span>';
    }

    setTimeout(() => {
      const randomSuffix = Math.floor(10000 + Math.random() * 90000);
      const bookingRef = `EVT-IN-2025-${randomSuffix}`;
      const tier = event.tiers[draft.selectedTierIndex];
      const subtotal = tier.price * draft.quantity;
      const total = subtotal + PLATFORM_FEE_INR;

      const newBooking = {
        bookingId: 'BK-IN-' + Date.now().toString(36).toUpperCase(),
        bookingRef: bookingRef,
        eventId: event.id,
        eventTitle: event.title,
        category: event.category,
        city: event.city,
        venue: event.venue,
        displayDate: event.displayDate,
        time: event.time,
        image: event.image,
        tierName: tier.name,
        tierPrice: tier.price,
        quantity: draft.quantity,
        subtotal: subtotal,
        fee: PLATFORM_FEE_INR,
        total: total,
        attendeeName: draft.attendeeName,
        attendeeEmail: draft.attendeeEmail,
        attendeePhone: draft.attendeePhone,
        bookedAt: new Date().toISOString(),
        status: 'Confirmed'
      };

      state.bookings.unshift(newBooking);
      saveBookingsToStorage();
      renderMyTickets();

      state.activeTicketBooking = newBooking;

      document.getElementById('confirmBookingRef').textContent = bookingRef;
      document.getElementById('confirmEventTitle').textContent = event.title;
      document.getElementById('confirmTierQty').textContent = `${tier.name} × ${draft.quantity}`;
      document.getElementById('confirmTotalPaid').textContent = formatINR(total);

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Confirm Demo Booking (₹)</span>';
      }

      setBookingStage(3);
      showToast('Indian reservation confirmed successfully!', 'success');
    }, 400);
  }

  // =========================================================================
  // MODAL 3: DIGITAL TICKET PASS (PRINTABLE)
  // =========================================================================
  function openTicketPassModal(booking) {
    if (!booking) return;
    state.activeTicketBooking = booking;

    const modal = document.getElementById('ticketModal');
    if (!modal) return;

    document.getElementById('ticketPassTier').textContent = booking.tierName.toUpperCase();
    document.getElementById('ticketPassTitle').textContent = booking.eventTitle;
    document.getElementById('ticketPassDate').textContent = booking.displayDate;
    document.getElementById('ticketPassTime').textContent = booking.time;
    document.getElementById('ticketPassVenue').textContent = booking.venue;
    document.getElementById('ticketPassCity').textContent = `${booking.city}, India`;
    document.getElementById('ticketPassAttendee').textContent = booking.attendeeName;
    document.getElementById('ticketPassQty').textContent = `${booking.quantity} ${booking.quantity === 1 ? 'Guest' : 'Guests'}`;
    document.getElementById('ticketPassRef').textContent = booking.bookingRef;
    document.getElementById('ticketPassTotal').textContent = formatINR(booking.total);

    const artMini = document.getElementById('ticketPassArtwork');
    if (artMini) {
      artMini.innerHTML = `<img src="${booking.image || 'assets/images/event-ragas-modular.jpg'}" alt="${escapeHtml(booking.eventTitle)}" loading="lazy">`;
    }

    const qrCanvas = document.getElementById('ticketQrCanvas');
    if (qrCanvas) {
      renderTicketQr(qrCanvas, booking.bookingRef);
    }

    const barcodeEl = document.getElementById('ticketBarcodeNumber');
    if (barcodeEl) {
      barcodeEl.textContent = booking.bookingRef.split('').join(' ');
    }

    openModal(modal);
  }

  // =========================================================================
  // ACCESSIBLE MODAL CONTROLS
  // =========================================================================
  let previousActiveElement = null;

  function openModal(modalEl) {
    if (!modalEl) return;
    previousActiveElement = document.activeElement;
    modalEl.classList.add('open');
    modalEl.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    const closeBtn = modalEl.querySelector('.modal-close-btn');
    if (closeBtn) closeBtn.focus();
  }

  function closeModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.remove('open');
    modalEl.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
      previousActiveElement.focus();
    }
  }

  function closeAllModals() {
    document.querySelectorAll('.modal-backdrop.open').forEach(closeModal);
  }

  // =========================================================================
  // MOBILE NAVIGATION DRAWER
  // =========================================================================
  function initMobileDrawer() {
    const toggle = document.getElementById('mobileMenuToggle');
    const drawer = document.getElementById('mobileDrawer');
    const closeBtn = document.getElementById('drawerCloseBtn');
    const backdrop = document.getElementById('drawerBackdrop');
    const cta = document.getElementById('mobileExploreCta');

    function openDrawer() {
      drawer.classList.add('open');
      drawer.setAttribute('aria-hidden', 'false');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
      drawer.classList.remove('open');
      drawer.setAttribute('aria-hidden', 'true');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    if (toggle) toggle.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (backdrop) backdrop.addEventListener('click', closeDrawer);
    if (cta) {
      cta.addEventListener('click', () => {
        closeDrawer();
        document.getElementById('explore').scrollIntoView({ behavior: 'smooth' });
      });
    }

    drawer.querySelectorAll('.drawer-link').forEach(link => {
      link.addEventListener('click', () => {
        closeDrawer();
      });
    });
  }

  // =========================================================================
  // ROUTING & ACTIVE SECTION HIGHLIGHTING
  // =========================================================================
  function initNavigation() {
    const headerBrowse = document.getElementById('headerBrowseBtn');
    if (headerBrowse) {
      headerBrowse.onclick = () => {
        document.getElementById('explore').scrollIntoView({ behavior: 'smooth' });
      };
    }

    const sections = ['discover', 'categoriesSection', 'explore', 'saved', 'my-tickets'];
    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY + 140;
      let currentSection = 'discover';

      sections.forEach(secId => {
        const el = document.getElementById(secId);
        if (el && el.offsetTop <= scrollPos) {
          currentSection = secId;
        }
      });

      const activeNavId = (currentSection === 'categoriesSection') ? 'discover' : currentSection;

      document.querySelectorAll('.nav-link').forEach(link => {
        const target = link.getAttribute('data-nav');
        link.classList.toggle('active', target === activeNavId);
      });
    }, { passive: true });
  }

  // =========================================================================
  // SETUP EVENT LISTENERS
  // =========================================================================
  function setupEventListeners() {
    // Theme toggle button
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
      themeBtn.onclick = toggleTheme;
    }

    // Hero Discovery Controls
    const heroSearch = document.getElementById('heroSearchInput');
    const heroCity = document.getElementById('heroCitySelect');
    const heroDate = document.getElementById('heroDateSelect');
    const heroSubmit = document.getElementById('heroSearchSubmit');

    function executeHeroSearch() {
      state.filters.search = heroSearch.value.trim();
      state.filters.city = heroCity.value || 'all';
      state.filters.date = heroDate.value || 'all';

      const catSearch = document.getElementById('catalogueSearchInput');
      const catCity = document.getElementById('filterCity');
      const catDate = document.getElementById('filterDate');

      if (catSearch) catSearch.value = state.filters.search;
      if (catCity) catCity.value = state.filters.city;
      if (catDate) catDate.value = state.filters.date;

      toggleClearSearchBtn();
      renderEventsGrid();
      document.getElementById('explore').scrollIntoView({ behavior: 'smooth' });
    }

    if (heroSubmit) heroSubmit.onclick = executeHeroSearch;
    if (heroSearch) {
      heroSearch.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') executeHeroSearch();
      });
    }

    // Catalogue Filter Controls
    const catSearchInput = document.getElementById('catalogueSearchInput');
    const clearSearchBtn = document.getElementById('clearSearchBtn');

    if (catSearchInput) {
      catSearchInput.addEventListener('input', (e) => {
        state.filters.search = e.target.value;
        toggleClearSearchBtn();
        renderEventsGrid();
      });
    }

    if (clearSearchBtn) {
      clearSearchBtn.addEventListener('click', () => {
        state.filters.search = '';
        if (catSearchInput) catSearchInput.value = '';
        const heroInp = document.getElementById('heroSearchInput');
        if (heroInp) heroInp.value = '';
        toggleClearSearchBtn();
        renderEventsGrid();
        if (catSearchInput) catSearchInput.focus();
      });
    }

    document.querySelectorAll('.cat-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        const cat = pill.getAttribute('data-category');
        setCategoryFilter(cat);
      });
    });

    const filterCity = document.getElementById('filterCity');
    const filterDate = document.getElementById('filterDate');
    const filterPrice = document.getElementById('filterPrice');
    const filterSort = document.getElementById('filterSort');
    const resetFiltersBtn = document.getElementById('resetFiltersBtn');
    const emptyStateResetBtn = document.getElementById('emptyStateResetBtn');

    if (filterCity) {
      filterCity.addEventListener('change', (e) => {
        state.filters.city = e.target.value;
        renderEventsGrid();
      });
    }

    if (filterDate) {
      filterDate.addEventListener('change', (e) => {
        state.filters.date = e.target.value;
        renderEventsGrid();
      });
    }

    if (filterPrice) {
      filterPrice.addEventListener('change', (e) => {
        state.filters.price = e.target.value;
        renderEventsGrid();
      });
    }

    if (filterSort) {
      filterSort.addEventListener('change', (e) => {
        state.filters.sort = e.target.value;
        renderEventsGrid();
      });
    }

    if (resetFiltersBtn) resetFiltersBtn.onclick = resetAllFilters;
    if (emptyStateResetBtn) emptyStateResetBtn.onclick = resetAllFilters;

    const clearAllSavedBtn = document.getElementById('clearAllSavedBtn');
    if (clearAllSavedBtn) {
      clearAllSavedBtn.onclick = () => {
        if (state.savedEventIds.size === 0) return;
        if (confirm('Clear all events from your saved wishlist?')) {
          state.savedEventIds.clear();
          saveSavedEventsToStorage();
          renderSavedEvents();
          renderEventsGrid();
          showToast('Wishlist cleared', 'info');
        }
      };
    }

    const closeDetailsBtn = document.getElementById('closeDetailsModalBtn');
    if (closeDetailsBtn) {
      closeDetailsBtn.onclick = () => closeModal(document.getElementById('eventDetailsModal'));
    }

    const closeBookingBtn = document.getElementById('closeBookingModalBtn');
    const cancelBookingBtn = document.getElementById('cancelBookingBtn');
    const proceedToAttendeeBtn = document.getElementById('proceedToAttendeeBtn');
    const backToTierBtn = document.getElementById('backToTierBtn');
    const confirmDemoBookingBtn = document.getElementById('confirmDemoBookingBtn');
    const viewDigitalTicketBtn = document.getElementById('viewDigitalTicketBtn');
    const finishBookingBtn = document.getElementById('finishBookingBtn');

    if (closeBookingBtn) closeBookingBtn.onclick = () => closeModal(document.getElementById('bookingModal'));
    if (cancelBookingBtn) cancelBookingBtn.onclick = () => closeModal(document.getElementById('bookingModal'));

    const qtyDecBtn = document.getElementById('qtyDecrementBtn');
    const qtyIncBtn = document.getElementById('qtyIncrementBtn');

    if (qtyDecBtn) {
      qtyDecBtn.onclick = () => {
        if (state.activeBookingDraft.quantity > 1) {
          state.activeBookingDraft.quantity -= 1;
          updateBookingStage1UI();
        }
      };
    }

    if (qtyIncBtn) {
      qtyIncBtn.onclick = () => {
        if (state.activeBookingDraft.quantity < 6) {
          state.activeBookingDraft.quantity += 1;
          updateBookingStage1UI();
        }
      };
    }

    if (proceedToAttendeeBtn) {
      proceedToAttendeeBtn.onclick = () => setBookingStage(2);
    }

    if (backToTierBtn) {
      backToTierBtn.onclick = () => setBookingStage(1);
    }

    if (confirmDemoBookingBtn) {
      confirmDemoBookingBtn.onclick = confirmBookingSubmission;
    }

    if (viewDigitalTicketBtn) {
      viewDigitalTicketBtn.onclick = () => {
        closeModal(document.getElementById('bookingModal'));
        if (state.activeTicketBooking) {
          openTicketPassModal(state.activeTicketBooking);
        }
      };
    }

    if (finishBookingBtn) {
      finishBookingBtn.onclick = () => {
        closeModal(document.getElementById('bookingModal'));
        document.getElementById('my-tickets').scrollIntoView({ behavior: 'smooth' });
      };
    }

    const closeTicketBtn = document.getElementById('closeTicketModalBtn');
    const printTicketBtn = document.getElementById('printTicketBtn');

    if (closeTicketBtn) closeTicketBtn.onclick = () => closeModal(document.getElementById('ticketModal'));
    if (printTicketBtn) {
      printTicketBtn.onclick = () => {
        window.print();
      };
    }

    document.querySelectorAll('.modal-backdrop').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeModal(modal);
        }
      });
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeAllModals();
        const drawer = document.getElementById('mobileDrawer');
        if (drawer && drawer.classList.contains('open')) {
          drawer.classList.remove('open');
          document.body.style.overflow = '';
        }
      }
    });

    document.querySelectorAll('[data-filter-city]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const city = link.getAttribute('data-filter-city');
        state.filters.city = city;
        const sel = document.getElementById('filterCity');
        if (sel) sel.value = city;
        renderEventsGrid();
        document.getElementById('explore').scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  // =========================================================================
  // INITIALIZATION LIFECYCLE
  // =========================================================================
  function init() {
    loadPersistedState();
    initCountdownTimer();
    renderHeroSpotlight();
    renderCategories();
    renderEventsGrid();
    renderSavedEvents();
    renderMyTickets();
    initMobileDrawer();
    initNavigation();
    setupEventListeners();

    console.log('Eventra India: Platform initialized successfully. All Indian experiences, ₹ INR currency, and Day/Night themes active.');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
