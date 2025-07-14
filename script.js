
// Data
const itinerary = [
  {
    day: "Day 0",
    title: "Departure From Delhi",
    activities: ["Evening departure from Kashmiri Gate", "Overnight journey to Shimla"],
    location: "Delhi → Shimla",
    emotion: "🚌 The Adventure Begins",
    fullContent: "We'll start our incredible journey from Delhi's Kashmiri Gate in the evening. Board our comfortable AC bus for an overnight journey to Shimla, the gateway to the mountains. Rest well as tomorrow we begin our adventure into the mystical Spiti Valley!"
  },
  {
    day: "Day 1", 
    title: "Arrival in Shimla | Transfer to Sangla",
    activities: ["Breakfast in Shimla", "Scenic drive to Sangla", "Visit Kinnaur Gate"],
    location: "Shimla → Sangla",
    emotion: "🏔️ First Mountain Breath",
    fullContent: "Wake up to the fresh mountain air in Shimla! After a hearty breakfast, we'll begin our scenic drive to Sangla. The journey takes us through beautiful landscapes, winding roads, and stunning valleys. We'll stop at the famous Kinnaur Gate for photos and to soak in the mountain views. Arrive in Sangla by evening and check into our accommodation."
  },
  {
    day: "Day 2",
    title: "Sangla to Tabo",
    activities: ["Visit Khab Sangam & Nako Village", "Explore Nako Lake & Monastery", "Overnight in Tabo"],
    location: "Sangla → Tabo",
    emotion: "🌊 Where Rivers Dance",
    fullContent: "Today we venture deeper into the Himalayas! First stop is Khab Sangam, where the Spiti and Sutlej rivers meet - a truly mesmerizing sight. Then we'll visit the charming Nako Village and explore the serene Nako Lake along with its ancient monastery. The journey continues to Tabo, where we'll spend the night in this historic town."
  },
  {
    day: "Day 3",
    title: "Tabo to Kaza",
    activities: ["Explore Tabo Monastery", "Visit Dhankar Monastery", "Discover Pin Valley Wildlife Reserve"],
    location: "Tabo → Kaza",
    emotion: "🏛️ Ancient Wisdom Calls",
    fullContent: "Begin the day by exploring the famous Tabo Monastery, known as the 'Ajanta of the Himalayas' for its ancient murals and sculptures. Next, we'll visit the spectacular Dhankar Monastery, perched dramatically on a cliff. If time permits, we'll also visit the Pin Valley Wildlife Reserve, home to snow leopards and other rare Himalayan wildlife. End the day in Kaza, the heart of Spiti Valley."
  },
  {
    day: "Day 4",
    title: "Explore Hikkim, Komic, Langza & Key",
    activities: ["World's highest post office", "Highest village exploration", "Ancient Key Monastery visit"],
    location: "Kaza (Local sightseeing)",
    emotion: "📮 Touching the Sky",
    fullContent: "Get ready for an epic day of exploration! We'll visit Hikkim, home to the world's highest post office - send a postcard from here! Then to Komic, one of the world's highest villages where you can experience life at extreme altitude. Next stop is Langza village with its giant Buddha statue overlooking the valley. Finally, we'll visit the iconic Key Monastery, a 1000-year-old architectural marvel. Return to Kaza for the night."
  },
  {
    day: "Day 5",
    title: "Chicham Bridge | Chandrataal",
    activities: ["Cross Chicham Bridge", "Journey via Kunzum Pass", "Camping under starry skies"],
    location: "Kaza → Chandrataal",
    emotion: "⭐ Under the Cosmic Canvas",
    fullContent: "Adventure awaits as we cross the famous Chicham Bridge - Asia's highest bridge connecting two villages! The journey continues through the stunning Kunzum Pass (4,590m) with breathtaking views of the Spiti Valley. Our destination is the magical Chandrataal Lake, also known as Moon Lake. We'll set up camp here and spend the night under a blanket of stars - one of the most memorable experiences of the trip!"
  },
  {
    day: "Day 6",
    title: "Chandratal to Manali",
    activities: ["Serene morning by the lake", "Scenic drive to Manali", "Mall Road exploration"],
    location: "Chandrataal → Manali",
    emotion: "🌅 Dawn of Reflection",
    fullContent: "Wake up to the serene beauty of Chandrataal Lake - the perfect moment for sunrise photos and peaceful reflection. After breakfast, we'll begin our scenic drive to Manali, descending from the high altitude desert to lush green valleys. Once in Manali, you can explore the famous Mall Road, shop for souvenirs, and enjoy the vibrant hill station atmosphere."
  },
  {
    day: "Day 7",
    title: "Self-Explore Manali",
    activities: ["Hadimba Devi Temple", "Old Manali streets", "Evening departure to Delhi"],
    location: "Manali → Delhi",
    emotion: "💫 Carrying Mountains Home",
    fullContent: "Your last day in the mountains! Explore Manali at your own pace - visit the ancient Hadimba Devi Temple surrounded by cedar forests, wander through the hippie vibes of Old Manali, or simply relax and reflect on your incredible journey. In the evening, we'll board our bus back to Delhi, carrying memories that will last a lifetime!"
  }
];

const inclusions = [
  "Entire travel as per the itinerary. (From Delhi to Shimla & Manali to Delhi it will be in a Semi-sleeper Volvo or Tempo Traveller & for the internal transfer it will be in a Tempo Traveller)",
  "6 nights accommodation",
  "12 meals (6 breakfast + 6 dinner)",
  "All inner line permits, Driver Night charges, toll taxes, parking, fuel",
  "Experienced trip captain",
  "24x7 oxygen cylinder",
  "Travel insurance"
];

const exclusions = [
  "5% GST",
  "Anything not mentioned in the Inclusions",
  "Any cost arising due to natural calamities like landslides, roadblocks, etc. (to be borne directly by the customer on the spot)",
  "Any personal expenses like tip to the driver, entry to monuments/monastery, camera/video charges, laundry, telephone bills, Heater etc.",
  "Any kind of food & beverages that is not included in the package like Alcohol, mineral water, meals/refreshments lunch on the highway",
  "Stay in Chandratal is subject to availability and weather condition"
];

const thingsToCarry = [
  {
    category: "Clothing",
    emoji: "🧥",
    items: [
      "Thermal base layers: Both top and bottom",
      "Fleece/Windproof jacket or Heavy Jacket",
      "Woolen caps, Gloves, Socks, Scarf, balaclavas",
      "Insulated, waterproof boots"
    ]
  },
  {
    category: "Personal Care",
    emoji: "🧴",
    items: [
      "Moisturizers, lip balm, Sunscreen, and Wet wipes",
      "First aid kit: medications, altitude sickness tablets (Diamox)"
    ]
  },
  {
    category: "Electronics & Essentials",
    emoji: "🔋",
    items: [
      "Power banks, Headlamp, Bluetooth speakers (very important)",
      "Government-issued ID, Cash: ATMs are rare in remote areas",
      "Sunglasses",
      "Reusable Water Bottle"
    ]
  }
];

const termsContent = [
  {
    type: "safety",
    title: "Important Safety Guidelines",
    content: "Drinking & Smoking are strictly prohibited during journey due to the health & safety of fellow passengers. No act of misconduct or indiscipline shall be tolerated on the tours. We are a cordial travel community and we aspire to bring to you a hassle-free and memorable experience."
  },
  {
    type: "liability",
    title: "Liability & Responsibilities",
    content: "Trip Ek Art shall not be responsible for any delays or alterations in the program or indirectly incurred expenses in cases such as natural hazards, accidents, breakdown of machinery, weather conditions, landslides, political closure, or any untoward incidents. We do not provide any insurance policy to cover the expenditure on sickness accidents or losses incurred due to theft or other reasons."
  },
  {
    type: "itinerary",
    title: "Itinerary Changes",
    content: "Numerous factors such as weather and road conditions the physical ability of participants etc. may bring alteration in the itinerary. We reserve the right to make necessary changes in the schedule in the interest of safety, comfort, and general well-being!"
  },
  {
    type: "payment",
    title: "Payment & Booking Policy",
    items: [
      "The advance amount is non-refundable under any circumstances. Full Payment of the trip cost must be made 24 hours before the trip begins.",
      "Pending Payments may eventually lead to the cancellation of your booking.",
      "The Transfer of the bookings is not permitted. Only the names mentioned at the time of confirmation shall be allowed to travel.",
      "No refunds shall be made towards any inclusion(s) not availed by the Client."
    ]
  },
  {
    type: "travel",
    title: "Travel Requirements",
    items: [
      "The IDs will be verified before boarding. No boarding shall be entertained without a valid Govt. ID.",
      "Travelers must take care of their luggage & belongings. The management shall not be accountable for missing items along the tour.",
      "The time of departure is stated & fixed. All travelers must update their status with the Trip Coordinator(s), & report at the pickup point 30 mins prior to the scheduled departure."
    ]
  },
  {
    type: "disclaimer",
    title: "",
    content: "By booking this trip, you acknowledge that you have read, understood, and agree to abide by all the terms and conditions mentioned above. These terms are subject to change without prior notice."
  }
];

const insuranceContent = [
  {
    type: "provider",
    title: "1. Insurance Provider",
    content: "We are not an insurance provider. We act solely as a facilitator to offer travel insurance services provided by ASEGO Insurance. All policies are issued, managed, and underwritten by ASEGO. We does not hold any liability for the acceptance, rejection, settlement, or denial of any claims under the policy."
  },
  {
    type: "coverage",
    title: "2. Coverage Overview (As per ASEGO's Policy)",
    content: "Insurance coverage is provided directly by ASEGO and may include:",
    items: [
      "Trip Cancellation or Interruption",
      "Medical Emergencies",
      "Emergency Evacuation",
      "Baggage Loss or Delay",
      "Travel Delay",
      "Accidental Death & Dismemberment"
    ]
  },
  {
    type: "terms",
    title: "3. Policy Terms",
    content: "Actual benefits, limits, and terms of coverage are subject to the policy issued by ASEGO. Customers are advised to carefully review the ASEGO policy document before purchasing."
  },
  {
    type: "claims",
    title: "4. Claims & Support",
    content: "All claims must be filed directly with ASEGO Insurance. We will not be involved in the processing, tracking, or outcome of any insurance claim. For claims, support, or assistance, contact ASEGO directly:",
    contact: {
      phone: "+91 22 67872 037",
      email: "claims@asego.in",
      website: "https://asego.in/claim-and-assistance"
    }
  },
  {
    type: "exclusions",
    title: "5. Exclusions & Limitations",
    content: "Coverage exclusions, waiting periods, and claim conditions are defined solely by ASEGO. We bear no responsibility for:",
    items: [
      "Rejected or delayed claims",
      "Changes in policy terms by ASEGO",
      "Service quality or customer support provided by ASEGO"
    ]
  },
  {
    type: "cancellation",
    title: "6. Policy Cancellation & Refunds",
    content: "Cancellation and refund terms are governed by ASEGO's policy. We cannot initiate, process, or guarantee any refund or cancellation of insurance once purchased."
  },
  {
    type: "disclaimer",
    title: "7. Disclaimer",
    content: "By purchasing insurance through us, you acknowledge that:",
    items: [
      "We are not liable for any claims, decisions made by ASEGO",
      "All disputes, issues, or grievances must be resolved directly with ASEGO",
      "You are responsible for understanding the terms and scope of the insurance before purchase"
    ]
  },
  {
    type: "law",
    title: "8. Governing Law",
    content: "These terms are governed by the laws of India. Any legal disputes related to insurance must be directed to ASEGO in accordance with their policy terms."
  }
];

// State
let activeItineraryDay = -1;
let activePricingTab = 0;
let activePackageSection = 'inclusions';
let activeFAQItem = -1;

// DOM Elements
const itineraryList = document.getElementById('itinerary-list');
const packageTabs = document.querySelectorAll('.package-tab');
const packageTabContents = document.querySelectorAll('.package-tab-content');
const pricingTabBtns = document.querySelectorAll('.pricing-tab-btn');
const priceTabs = document.querySelectorAll('.price-tab');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  initializeStars();
  renderItinerary();
  renderPackageContent();
  initializeEventListeners();
});

// Create animated stars
function initializeStars() {
  const starsContainer = document.querySelector('.stars-container');
  for (let i = 0; i < 30; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 60 + '%';
    star.style.animationDelay = Math.random() * 4 + 's';
    star.style.animationDuration = (2 + Math.random() * 3) + 's';
    starsContainer.appendChild(star);
  }
}

// Render itinerary
function renderItinerary() {
  itineraryList.innerHTML = itinerary.map((day, index) => `
    <div class="itinerary-item">
      <button class="itinerary-header" onclick="toggleItinerary(${index})">
        <div class="itinerary-top">
          <div class="itinerary-left">
            <i class="fas fa-calendar-alt"></i>
            <div>
              <div class="itinerary-day">${day.day}</div>
              <div class="itinerary-title">${day.title}</div>
              <div class="itinerary-emotion">${day.emotion}</div>
            </div>
          </div>
          <div class="itinerary-right">
            <i class="fas fa-map-marker-alt"></i>
            <span>${day.location}</span>
          </div>
        </div>
      </button>
      <div class="itinerary-content" id="itinerary-${index}">
        <div class="itinerary-description">
          ${day.fullContent}
        </div>
        <div class="itinerary-activities">
          <h4>Key Activities:</h4>
          ${day.activities.map(activity => `
            <div class="activity-item">
              <i class="fas fa-check"></i>
              <span>${activity}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// Toggle itinerary item
function toggleItinerary(index) {
  const content = document.getElementById(`itinerary-${index}`);
  const header = content.previousElementSibling;
  
  if (activeItineraryDay === index) {
    content.classList.remove('active');
    header.classList.remove('active');
    activeItineraryDay = -1;
  } else {
    // Close all other items
    document.querySelectorAll('.itinerary-content.active').forEach(item => {
      item.classList.remove('active');
    });
    document.querySelectorAll('.itinerary-header.active').forEach(item => {
      item.classList.remove('active');
    });
    
    // Open selected item
    content.classList.add('active');
    header.classList.add('active');
    activeItineraryDay = index;
  }
}

// Render package content
function renderPackageContent() {
  // Inclusions
  const inclusionsContent = document.getElementById('inclusions');
  inclusionsContent.innerHTML = `
    <div class="package-grid">
      ${inclusions.map(inclusion => `
        <div class="package-item inclusion">
          <div class="package-item-content">
            <i class="fas fa-check"></i>
            <span>${inclusion}</span>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  // Exclusions
  const exclusionsContent = document.getElementById('exclusions');
  exclusionsContent.innerHTML = `
    <div class="package-grid">
      ${exclusions.map(exclusion => `
        <div class="package-item exclusion">
          <div class="package-item-content">
            <div class="exclusion-icon">×</div>
            <span>${exclusion}</span>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  // Things to carry
  const packingContent = document.getElementById('packing');
  packingContent.innerHTML = `
    <div class="temperature-info">
      <h3>Summer Temperature Range</h3>
      <p>Mid-June to September: 5°C to 20°C</p>
      <p class="temperature-note">Pack accordingly for extreme temperature variations!</p>
    </div>
    
    ${thingsToCarry.map(category => `
      <div class="packing-category">
        <h3>
          <span style="font-size: 2rem;">${category.emoji}</span>
          ${category.category}
        </h3>
        <div class="packing-items">
          ${category.items.map(item => `
            <div class="packing-item">
              <i class="fas fa-check"></i>
              <span>${item}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('')}
  `;
}

// Initialize event listeners
function initializeEventListeners() {
  // Package tabs
  packageTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const section = tab.dataset.section;
      switchPackageTab(section);
    });
  });

  // Pricing tabs
  pricingTabBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      switchPricingTab(index);
    });
  });
}

// Switch package tab
function switchPackageTab(section) {
  activePackageSection = section;
  
  // Update tab buttons
  packageTabs.forEach(tab => {
    tab.classList.toggle('active', tab.dataset.section === section);
  });
  
  // Update content
  packageTabContents.forEach(content => {
    content.classList.toggle('active', content.id === section);
  });
}

// Switch pricing tab
function switchPricingTab(index) {
  activePricingTab = index;
  
  // Update tab buttons
  pricingTabBtns.forEach((btn, i) => {
    btn.classList.toggle('active', i === index);
  });
  
  // Update price display
  priceTabs.forEach((tab, i) => {
    tab.classList.toggle('active', i === index);
  });
}

// Modal functions
function openModal(type) {
  const modal = document.getElementById(`${type}-modal`);
  const modalBody = modal.querySelector('.modal-body');
  
  if (type === 'terms') {
    modalBody.innerHTML = renderTermsContent();
  } else if (type === 'insurance') {
    modalBody.innerHTML = renderInsuranceContent();
  }
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(type) {
  const modal = document.getElementById(`${type}-modal`);
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Render terms content
function renderTermsContent() {
  return termsContent.map(section => {
    let sectionClass = section.type;
    let content = '';
    
    if (section.items) {
      content = `
        <p>${section.content}</p>
        <ul>
          ${section.items.map(item => `<li>${item}</li>`).join('')}
        </ul>
      `;
    } else {
      content = `<p>${section.content}</p>`;
    }
    
    return `
      <div class="modal-section ${sectionClass}">
        ${section.title ? `<h3>${section.title}</h3>` : ''}
        ${content}
      </div>
    `;
  }).join('');
}

// Render insurance content
function renderInsuranceContent() {
  return insuranceContent.map(section => {
    let sectionClass = getSectionClass(section.type);
    let content = '';
    
    if (section.items) {
      content = `
        <p>${section.content}</p>
        <ul>
          ${section.items.map(item => `<li>${item}</li>`).join('')}
        </ul>
      `;
    } else if (section.contact) {
      content = `
        <p>${section.content}</p>
        <div class="contact-box" style="border-color: #4f46e5;">
          <p style="color: #4338ca;">ASEGO Insurance Support</p>
          <div style="color: #4338ca;">
            <p><strong>Phone:</strong> ${section.contact.phone}</p>
            <p><strong>Email:</strong> ${section.contact.email}</p>
            <p><strong>Website:</strong> <a href="${section.contact.website}" target="_blank">${section.contact.website}</a></p>
          </div>
        </div>
      `;
    } else {
      content = `<p>${section.content}</p>`;
    }
    
    return `
      <div class="modal-section ${sectionClass}">
        <h3>${section.title}</h3>
        ${content}
      </div>
    `;
  }).join('');
}

// Get section class for insurance modal
function getSectionClass(type) {
  const classMap = {
    'provider': 'liability',
    'coverage': 'travel',
    'terms': 'payment',
    'claims': 'itinerary',
    'exclusions': 'safety',
    'cancellation': 'payment',
    'disclaimer': 'safety',
    'law': 'disclaimer'
  };
  return classMap[type] || 'disclaimer';
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('modal')) {
    const modalId = e.target.id;
    const type = modalId.replace('-modal', '');
    closeModal(type);
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Toggle FAQ item
function toggleFAQ(index) {
  const answer = document.getElementById(`faq-${index}`);
  const question = answer.previousElementSibling;
  
  if (activeFAQItem === index) {
    answer.classList.remove('active');
    question.classList.remove('active');
    activeFAQItem = -1;
  } else {
    // Close all other items
    document.querySelectorAll('.faq-answer.active').forEach(item => {
      item.classList.remove('active');
    });
    document.querySelectorAll('.faq-question.active').forEach(item => {
      item.classList.remove('active');
    });
    
    // Open selected item
    answer.classList.add('active');
    question.classList.add('active');
    activeFAQItem = index;
  }
}

// Lead capture function
function captureLead() {
  const emailInput = document.getElementById('leadEmail');
  const email = emailInput.value.trim();
  
  // Enhanced email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!email) {
    showLeadMessage('Please enter your email address', 'error');
    return;
  }
  
  if (!emailRegex.test(email)) {
    showLeadMessage('Please enter a valid email address', 'error');
    return;
  }
  
  // Show loading state
  const button = document.querySelector('.send-pdf-btn');
  const originalText = button.innerHTML;
  button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> SENDING...';
  button.disabled = true;
  
  // Generate PDF with itinerary content
  generateItineraryPDF(email).then(() => {
    showLeadMessage('🎉 Success! Check your email for the detailed Spiti Valley itinerary PDF.', 'success');
    
    // Store email in localStorage
    const emails = JSON.parse(localStorage.getItem('leadEmails') || '[]');
    emails.push({
      email: email,
      timestamp: new Date().toISOString(),
      source: 'Spiti Valley Landing Page',
      content: 'Day-by-day itinerary'
    });
    localStorage.setItem('leadEmails', JSON.stringify(emails));
    
    // Clear the input
    emailInput.value = '';
    
    // Reset button
    button.innerHTML = originalText;
    button.disabled = false;
  }).catch(() => {
    showLeadMessage('Failed to send PDF. Please try again.', 'error');
    button.innerHTML = originalText;
    button.disabled = false;
  });
}

// Generate PDF with itinerary content
async function generateItineraryPDF(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate PDF generation with itinerary data
      const pdfContent = {
        title: 'Summer Spiti Expedition - Day by Day Itinerary',
        email: email,
        itinerary: itinerary.map(day => ({
          day: day.day,
          title: day.title,
          location: day.location,
          description: day.fullContent,
          activities: day.activities
        })),
        generatedAt: new Date().toISOString()
      };
      
      // Here you would integrate with a PDF generation service
      // For now, we'll simulate the process
      console.log('PDF Generated:', pdfContent);
      
      // Simulate email sending
      resolve(pdfContent);
    }, 2000);
  });
}

// Show lead capture messages
function showLeadMessage(message, type) {
  // Remove existing message
  const existingMessage = document.querySelector('.lead-message');
  if (existingMessage) {
    existingMessage.remove();
  }
  
  // Create new message
  const messageDiv = document.createElement('div');
  messageDiv.className = `lead-message lead-message-${type}`;
  messageDiv.innerHTML = message;
  
  // Insert message after the form
  const form = document.querySelector('.lead-capture-form');
  form.parentNode.insertBefore(messageDiv, form.nextSibling);
  
  // Remove message after 5 seconds
  setTimeout(() => {
    if (messageDiv.parentNode) {
      messageDiv.remove();
    }
  }, 5000);
}

// Add scroll effect for parallax
window.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector('.hero-section');
  const speed = scrolled * 0.5;
  
  if (parallax) {
    parallax.style.transform = `translateY(${speed}px)`;
  }
});
