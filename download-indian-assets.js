const fs = require('fs');
const path = require('path');
const https = require('https');

const IMAGES_DIR = path.join(__dirname, 'assets', 'images');

const INDIAN_MANIFEST = [
  // 1. Hero Background - Authentic Indian festival concert energy
  {
    filename: 'hero-india-festival.jpg',
    url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=82',
    category: 'Hero Background: Live Music Festival Atmosphere'
  },
  // 2. Category Cards
  {
    filename: 'cat-music-in.jpg',
    url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80',
    category: 'Category: Music & Sangeet'
  },
  {
    filename: 'cat-tech-in.jpg',
    url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    category: 'Category: Technology & Innovation'
  },
  {
    filename: 'cat-art-in.jpg',
    url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    category: 'Category: Art & Culture'
  },
  {
    filename: 'cat-culinary-in.jpg',
    url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80',
    category: 'Category: Culinary & Royal Feasts'
  },
  {
    filename: 'cat-sports-in.jpg',
    url: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80',
    category: 'Category: Sports & Marathons'
  },
  {
    filename: 'cat-heritage-in.jpg',
    url: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    category: 'Category: Heritage Craft & Lifestyle'
  },
  // 3. Indian Events Photography
  {
    filename: 'event-ragas-modular.jpg',
    url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80',
    category: 'Event: Ragas & Resonances NCPA Mumbai'
  },
  {
    filename: 'event-bengaluru-ai.jpg',
    url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1000&q=80',
    category: 'Event: Bengaluru DeepTech & AI Nexus'
  },
  {
    filename: 'event-kochi-biennale.jpg',
    url: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&w=1000&q=80',
    category: 'Event: Kochi-Muziris Contemporary Art Biennale'
  },
  {
    filename: 'event-dastarkhwan.jpg',
    url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
    category: 'Event: Dastarkhwan Royal Awadhi Feast Hyderabad'
  },
  {
    filename: 'event-mumbai-marathon.jpg',
    url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=80',
    category: 'Event: Mumbai Coastal Ultra Marathon'
  },
  {
    filename: 'event-jaipur-virasat.jpg',
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    category: 'Event: Jaipur Virasat Heritage Craft Bazaar'
  },
  {
    filename: 'event-goa-sunwave.jpg',
    url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80',
    category: 'Event: Goa Sunwave Beach Electronic Festival'
  },
  {
    filename: 'event-delhi-theatre.jpg',
    url: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1000&q=80',
    category: 'Event: Rangmanch National Theatre Expo New Delhi'
  },
  {
    filename: 'event-cyberabad-saas.jpg',
    url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
    category: 'Event: Cyberabad Cloud & Quantum Frontier Summit'
  },
  {
    filename: 'event-sula-wine.jpg',
    url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1000&q=80',
    category: 'Event: Deccan Harvest Sula Vineyard Gathering'
  },
  {
    filename: 'event-rishikesh-yoga.jpg',
    url: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1000&q=80',
    category: 'Event: Prana & Sound Himalayan Wellness Rishikesh'
  },
  {
    filename: 'event-kolkata-literary.jpg',
    url: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1000&q=80',
    category: 'Event: Calcutta Reverie Literature & Jazz Meet'
  },
  {
    filename: 'event-varanasi-ghats.jpg',
    url: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1000&q=80',
    category: 'Event: Ganga Dhwani Assi Ghat Classical Evening'
  },
  {
    filename: 'event-ladakh-ultra.jpg',
    url: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1000&q=80',
    category: 'Event: Trans-Himalayan Trail & Gravel Challenge Ladakh'
  },
  // 4. Royal Night Showcase Background
  {
    filename: 'showcase-palace-night.jpg',
    url: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1400&q=82',
    category: 'Showcase: Royal Nocturne Architecture'
  }
];

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadFile(res.headers.location, destPath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode} for ${url}`));
      }
      const fileStream = fs.createWriteStream(destPath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close(() => {
          const stats = fs.statSync(destPath);
          resolve(stats.size);
        });
      });
      fileStream.on('error', reject);
    }).on('error', reject);
  });
}

async function main() {
  console.log(`Downloading ${INDIAN_MANIFEST.length} authentic Indian event & culture photographs...`);
  
  if (!fs.existsSync(IMAGES_DIR)) {
    fs.mkdirSync(IMAGES_DIR, { recursive: true });
  }

  let totalBytes = 0;
  for (let i = 0; i < INDIAN_MANIFEST.length; i++) {
    const item = INDIAN_MANIFEST[i];
    const dest = path.join(IMAGES_DIR, item.filename);
    process.stdout.write(`[${i + 1}/${INDIAN_MANIFEST.length}] Downloading ${item.filename}... `);
    try {
      const bytes = await downloadFile(item.url, dest);
      totalBytes += bytes;
      console.log(`OK (${(bytes / 1024).toFixed(1)} KB)`);
    } catch (e) {
      console.log(`FAILED: ${e.message}`);
    }
  }

  console.log(`\nAll Indian photographs downloaded! Total size: ${(totalBytes / (1024 * 1024)).toFixed(2)} MB`);
}

main().catch(console.error);
