// Create stars in the header with enhanced effects
const starsContainer = document.getElementById('stars');
for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    const size = Math.random() * 4 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    star.style.animationDuration = `${2 + Math.random() * 3}s`;
    starsContainer.appendChild(star);
}

// Create more visually impressive food icons
const foodIcons = document.getElementById('foodIcons');
const foodEmojis = ['🍖', '🍗', '🥘', '🍜', '🍲', '🌮', '🥙', '🥐', '🍩', '🍪', '🍫', '🍬', '🍭', '🍡', '🍧', '🍨', '🍦', '🥧', '🍰', '🧁', '🍮', '🍯', '🍼', '☕', '🧃', '🥤'];

for (let i = 0; i < 50; i++) {
    const food = document.createElement('div');
    food.classList.add('food-icon');
    food.textContent = foodEmojis[Math.floor(Math.random() * foodEmojis.length)];
    food.style.left = `${Math.random() * 100}%`;
    food.style.animationDuration = `${Math.random() * 20 + 15}s`;
    food.style.animationDelay = `${Math.random() * 15}s`;
    // Add different sizes for more visual interest
    const scale = 0.7 + Math.random() * 1.3;
    food.style.transform = `scale(${scale})`;
    // Different opacity for depth effect
    food.style.opacity = 0.1 + Math.random() * 0.4;
    foodIcons.appendChild(food);
}

// Animate elements on scroll for better engagement
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card, .meme-section, .ramadan-countdown');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animate-in');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);

// Image handling with enhanced transitions
// Update this array with paths to all your meme images
const memeImages = [
    'images/meme1.jpg',
    'images/meme2.jpg',
    'images/meme3.jpg',
    'images/meme4.jpg',
    'images/meme5.jpg',
    'images/meme6.jpg',
    'images/meme7.jpg',
    'images/meme8.jpg',
    'images/meme9.jpg',
    'images/meme10.jpg',
    'images/meme11.jpg',
    'images/meme12.jpg',
    'images/meme13.jpg',
    'images/meme14.jpg',
    'images/meme15.jpg',
    'images/meme16.jpg',
    'images/meme17.jpg',
    'images/meme18.jpg',
    'images/meme19.jpg',
    'images/meme20.jpg',
    'images/meme21.jpg',
    'images/meme22.jpg',
    'images/meme23.jpg',
    'images/meme24.jpg',
    'images/meme25.jpg',
    'images/meme26.jpg',
    'images/meme27.jpg',
    'images/meme28.jpg',
    'images/meme29.jpg',
    'images/meme30.jpg',
    'images/meme31.jpg',
    'images/meme32.jpg',
    'images/meme33.jpg',
    'images/meme34.jpg',
];

// Preload images for smoother transitions
function preloadImages() {
    memeImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Generate button functionality with enhanced visual effects
const generateBtn = document.getElementById('generateBtn');
const memeImage = document.getElementById('memeImage');
const memeContainer = document.getElementById('memeContainer');
const loadingOverlay = document.getElementById('loadingOverlay');

// Generate a random meme on page load with effects
window.addEventListener('load', function() {
    preloadImages();
    generateNewMeme();
    getUserLocation();
    
    // Add initial entrance animations for key elements
    setTimeout(() => {
        document.querySelector('header').classList.add('animate-in');
        document.querySelector('.ramadan-countdown').classList.add('animate-in');
    }, 300);
    
    // Add particle effects to the background
    addParticleEffects();
    
    // Initialize 3D tilt effect for interactive elements
    initTiltEffect();
    
    // Start the confetti effect in the background
    startConfettiEffect();
});

// Add a spin animation to the button when clicked
generateBtn.addEventListener('click', function() {
    this.classList.add('spin-button');
    generateNewMeme();
    setTimeout(() => {
        this.classList.remove('spin-button');
    }, 600);
});

function generateNewMeme() {
    // Show loading overlay with enhanced animation
    loadingOverlay.style.display = 'flex';
    
    // Add a container shake effect
    memeContainer.classList.add('shake-effect');
    
    // Simulate loading time with progressive animation
    setTimeout(() => {
        // Get random image
        const randomImageIndex = Math.floor(Math.random() * memeImages.length);
        const randomImage = memeImages[randomImageIndex];
        
        // Add transition class to create fade effect
        memeImage.classList.add('transition-active');
        
        // Update meme image
        memeImage.src = randomImage;
        
        // Hide loading overlay and remove effects after animation completes
        setTimeout(() => {
            loadingOverlay.style.display = 'none';
            memeContainer.classList.remove('shake-effect');
            setTimeout(() => {
                memeImage.classList.remove('transition-active');
            }, 800);
        }, 600);
    }, 800);
}

// Add particle background effects
function addParticleEffects() {
    const particlesContainer = document.createElement('div');
    particlesContainer.classList.add('particles-background');
    document.body.appendChild(particlesContainer);
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Randomize particle properties
        const size = Math.random() * 10 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random animation duration and delay
        particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// Initialize 3D tilt effect for interactive elements
function initTiltEffect() {
    const tiltElements = document.querySelectorAll('.meme-container, .feature-card, .btn');
    
    tiltElements.forEach(element => {
        element.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Calculate rotation based on mouse position
            const xRotation = 20 * ((y - rect.height / 2) / rect.height);
            const yRotation = -20 * ((x - rect.width / 2) / rect.width);
            
            // Apply the rotation
            this.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
        });
        
        element.addEventListener('mouseleave', function() {
            // Reset the rotation
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
}

// Add confetti effect in the background
function startConfettiEffect() {
    const confettiContainer = document.createElement('div');
    confettiContainer.classList.add('confetti-container');
    document.body.appendChild(confettiContainer);
    
    const colors = ['#f8b84e', '#a3d4ff', '#ff6b6b', '#4caf50', '#9c27b0'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Random size
        const size = Math.random() * 10 + 5;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        
        // Random color
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Random position
        confetti.style.left = `${Math.random() * 100}%`;
        
        // Random animation duration and delay
        confetti.style.animationDuration = `${Math.random() * 5 + 10}s`;
        confetti.style.animationDelay = `${Math.random() * 5}s`;
        
        confettiContainer.appendChild(confetti);
    }
}

// Prayer Times API Integration
let userLocation = {
    latitude: null,
    longitude: null,
    city: null,
    country: null
};

// Get user's location
function getUserLocation() {
    // Show loading message while getting location
    document.getElementById('iftarTime').textContent = 'جاري تحديد موقعك...';
    
    // First try getting precise location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                userLocation.latitude = position.coords.latitude;
                userLocation.longitude = position.coords.longitude;
                
                // Get city name using reverse geocoding
                reverseGeocode(userLocation.latitude, userLocation.longitude);
                
                // Get prayer times based on coordinates
                getPrayerTimes(userLocation.latitude, userLocation.longitude);
            },
            (error) => {
                console.error("Error getting location:", error);
                // Fallback to IP-based location
                getLocationByIP();
            }
        );
    } else {
        console.error("Geolocation is not supported by this browser.");
        // Fallback to IP-based location
        getLocationByIP();
    }
}

// Get location based on IP address as fallback
function getLocationByIP() {
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            userLocation.latitude = data.latitude;
            userLocation.longitude = data.longitude;
            userLocation.city = data.city;
            userLocation.country = data.country_name;
            
            // Display location
            document.getElementById('iftarTime').textContent = `الموقع: ${userLocation.city}, ${userLocation.country}`;
            
            // Get prayer times based on coordinates
            getPrayerTimes(userLocation.latitude, userLocation.longitude);
        })
        .catch(error => {
            console.error("Error getting location by IP:", error);
            document.getElementById('iftarTime').textContent = 'تعذر تحديد الموقع. يرجى تحديد موقعك يدويًا.';
            
            // Show manual location entry form
            showLocationForm();
        });
}

// Reverse geocode to get city and country name
function reverseGeocode(lat, lng) {
    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)
        .then(response => response.json())
        .then(data => {
            if (data.address) {
                userLocation.city = data.address.city || data.address.town || data.address.village || data.address.county;
                userLocation.country = data.address.country;
                
                // Display location for user confidence
                const locationInfo = document.createElement('div');
                locationInfo.classList.add('location-info');
                locationInfo.textContent = `${userLocation.city}, ${userLocation.country}`;
                
                // Add to page near the countdown
                const countdown = document.querySelector('.ramadan-countdown');
                countdown.appendChild(locationInfo);
            }
        })
        .catch(error => {
            console.error("Error in reverse geocoding:", error);
        });
}

// Get prayer times using the Aladhan API
function getPrayerTimes(latitude, longitude) {
    // Get current date
    const date = new Date();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    
    // Calculate Ramadan year (may need adjustment based on current Hijri calendar)
    const hijriYear = 1446; // For Ramadan 2025
    
    // API URL for Aladhan prayer times
    const apiUrl = `https://api.aladhan.com/v1/calendar?latitude=${latitude}&longitude=${longitude}&method=2&month=${month}&year=${year}`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.code === 200) {
                // Get today's prayer times
                const today = date.getDate() - 1; // API uses zero-based array
                const timings = data.data[today].timings;
                
                // Get Maghrib (sunset) time for Iftar
                const maghribTime = timings.Maghrib;
                
                // Clean the time string (remove timezone info)
                const iftarTime = maghribTime.split(' ')[0];
                
                // Display Iftar time
                document.getElementById('iftarTime').textContent = `موعد الإفطار: ${iftarTime}`;
                
                // Setup countdown to Iftar
                setupCountdownToIftar(iftarTime);
                
                // Store all prayer times
                storePrayerTimes(data.data[today].timings);
                
                // Create prayer times section
                createPrayerTimesSection(data.data[today].timings);
            }
        })
        .catch(error => {
            console.error("Error fetching prayer times:", error);
            document.getElementById('iftarTime').textContent = 'تعذر الحصول على مواقيت الصلاة. يرجى المحاولة لاحقًا.';
        });
}

// Store prayer times in local storage
function storePrayerTimes(timings) {
    localStorage.setItem('prayerTimes', JSON.stringify(timings));
}

// Setup countdown to Iftar
function setupCountdownToIftar(iftarTimeStr) {
    // Parse Iftar time
    const iftarTimeParts = iftarTimeStr.split(':');
    const iftarHour = parseInt(iftarTimeParts[0]);
    const iftarMinute = parseInt(iftarTimeParts[1]);
    
    // Set up countdown interval
    const countdownInterval = setInterval(() => {
        // Get current time
        const now = new Date();
        
        // Set today's Iftar time
        const iftarTime = new Date();
        iftarTime.setHours(iftarHour, iftarMinute, 0);
        
        // Calculate time difference
        let diff = iftarTime - now;
        
        // If Iftar time has passed, show message
        if (diff < 0) {
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            clearInterval(countdownInterval);
            document.getElementById('iftarTime').textContent = 'حان موعد الإفطار! تقبل الله صيامكم';
            // Celebration animation
            celebrateIftar();
            return;
        }
        
        // Calculate hours, minutes and seconds
        const hours = Math.floor(diff / (1000 * 60 * 60));
        diff -= hours * (1000 * 60 * 60);
        const minutes = Math.floor(diff / (1000 * 60));
        diff -= minutes * (1000 * 60);
        const seconds = Math.floor(diff / 1000);
        
        // Update countdown
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        
    }, 1000);
}

// Create a section displaying all prayer times
function createPrayerTimesSection(timings) {
    // Create section
    const prayerSection = document.createElement('div');
    prayerSection.classList.add('prayer-times-section');
    
    // Create heading
    const heading = document.createElement('h2');
    heading.classList.add('prayer-title');
    heading.textContent = 'مواقيت الصلاة اليوم';
    prayerSection.appendChild(heading);
    
    // Prayer names in Arabic
    const prayerNames = {
        'Fajr': 'الفجر',
        'Sunrise': 'الشروق',
        'Dhuhr': 'الظهر',
        'Asr': 'العصر',
        'Maghrib': 'المغرب',
        'Isha': 'العشاء'
    };
    
    // Create prayer times grid
    const prayerGrid = document.createElement('div');
    prayerGrid.classList.add('prayer-grid');
    
    // Add each prayer time
    for (const [prayer, time] of Object.entries(prayerNames)) {
        if (timings[prayer]) {
            const prayerItem = document.createElement('div');
            prayerItem.classList.add('prayer-item');
            
            const prayerName = document.createElement('div');
            prayerName.classList.add('prayer-name');
            prayerName.textContent = time;
            
            const prayerTime = document.createElement('div');
            prayerTime.classList.add('prayer-time');
            prayerTime.textContent = timings[prayer].split(' ')[0];
            
            prayerItem.appendChild(prayerName);
            prayerItem.appendChild(prayerTime);
            prayerGrid.appendChild(prayerItem);
        }
    }
    
    prayerSection.appendChild(prayerGrid);
    
    // Add the prayer section to the page
    const container = document.querySelector('.container');
    const features = document.querySelector('.features');
    container.insertBefore(prayerSection, features);
    
    // Add entry animation
    setTimeout(() => {
        prayerSection.classList.add('animate-in');
    }, 500);
}

// Show celebration animation when Iftar time arrives
function celebrateIftar() {
    // Create celebration overlay
    const celebrationOverlay = document.createElement('div');
    celebrationOverlay.classList.add('celebration-overlay');
    
    // Add celebration message
    const message = document.createElement('div');
    message.classList.add('celebration-message');
    message.innerHTML = '<h2>حان موعد الإفطار!</h2><p>تقبل الله صيامكم</p>';
    celebrationOverlay.appendChild(message);
    
    // Add to body
    document.body.appendChild(celebrationOverlay);
    
    // Add animation class
    setTimeout(() => {
        celebrationOverlay.classList.add('active');
        
        // Add extra celebration effects
        createCelebrationEffects();
        
        // Remove after some time
        setTimeout(() => {
            celebrationOverlay.classList.remove('active');
            setTimeout(() => {
                celebrationOverlay.remove();
            }, 1000);
        }, 5000);
    }, 100);
}

// Create special effects for Iftar celebration
function createCelebrationEffects() {
    // Create many food emojis bursting from center
    const celebrationEmojis = ['🍖', '🍗', '🥘', '🍜', '🍲', '🌮', '🥙', '🍚', '🥐', '🫓', '🍇', '🍌', '🍎', '🍊', '🍓', '🍉', '🥛', '🧃', '🧆'];
    
    for (let i = 0; i < 100; i++) {
        const emoji = document.createElement('div');
        emoji.classList.add('celebration-emoji');
        emoji.textContent = celebrationEmojis[Math.floor(Math.random() * celebrationEmojis.length)];
        
        // Random position and animation
        const angle = Math.random() * 360;
        const distance = 20 + Math.random() * 60;
        const duration = 1 + Math.random() * 3;
        const delay = Math.random();
        const size = 20 + Math.random() * 30;
        
        emoji.style.fontSize = `${size}px`;
        emoji.style.setProperty('--angle', `${angle}deg`);
        emoji.style.setProperty('--distance', `${distance}vh`);
        emoji.style.setProperty('--duration', `${duration}s`);
        emoji.style.setProperty('--delay', `${delay}s`);
        
        document.body.appendChild(emoji);
        
        // Remove after animation
        setTimeout(() => {
            emoji.remove();
        }, (duration + delay) * 1000 + 500);
    }
}

// Show form for manual location entry
function showLocationForm() {
    // Create form container
    const formContainer = document.createElement('div');
    formContainer.classList.add('location-form-container');
    
    const form = document.createElement('form');
    form.classList.add('location-form');
    form.innerHTML = `
        <h3>تحديد الموقع يدويًا</h3>
        <div class="form-group">
            <label for="city">المدينة</label>
            <input type="text" id="city" required>
        </div>
        <div class="form-group">
            <label for="country">البلد</label>
            <input type="text" id="country" required>
        </div>
        <button type="submit" class="btn">تحديد</button>
    `;
    
    formContainer.appendChild(form);
    
    // Add form to page
    const container = document.querySelector('.container');
    const countdownSection = document.querySelector('.ramadan-countdown');
    container.insertBefore(formContainer, countdownSection.nextSibling);
    
    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const city = document.getElementById('city').value;
        const country = document.getElementById('country').value;
        
        // Get coordinates from city and country using geocoding API
        geocodeLocation(city, country);
        
        // Remove form
        formContainer.remove();
    });
}

// Geocode location from city and country names
function geocodeLocation(city, country) {
    const query = encodeURIComponent(`${city}, ${country}`);
    fetch(`https://nominatim.openstreetmap.org/search?q=${query}&format=json&limit=1`)
        .then(response => response.json())
        .then(data => {
            if (data && data.length > 0) {
                userLocation.latitude = parseFloat(data[0].lat);
                userLocation.longitude = parseFloat(data[0].lon);
                userLocation.city = city;
                userLocation.country = country;
                
                // Update location display
                document.getElementById('iftarTime').textContent = `الموقع: ${city}, ${country}`;
                
                // Get prayer times based on coordinates
                getPrayerTimes(userLocation.latitude, userLocation.longitude);
            } else {
                document.getElementById('iftarTime').textContent = 'لم يتم العثور على الموقع. يرجى المحاولة مرة أخرى.';
                showLocationForm();
            }
        })
        .catch(error => {
            console.error("Error geocoding location:", error);
            document.getElementById('iftarTime').textContent = 'حدث خطأ في تحديد الموقع. يرجى المحاولة مرة أخرى.';
            showLocationForm();
        });
}

// Handle share button click
document.getElementById('shareBtn').addEventListener('click', function() {
    // If Web Share API is available, use it
    if (navigator.share) {
        navigator.share({
            title: 'تم تعبئة الكرش بنجاح - مولد الميمات الرمضاني',
            text: 'شاهد هذا الميم الرمضاني المضحك!',
            url: window.location.href
        })
        .catch(error => console.error('Error sharing:', error));
    } else {
        // Fallback to clipboard
        const shareUrl = window.location.href;
        
        // Create temporary input
        const input = document.createElement('input');
        input.value = shareUrl;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        
        // Show success message
        alert('تم نسخ الرابط. يمكنك مشاركته الآن!');
    }
});

// Handle save button click
document.getElementById('saveBtn').addEventListener('click', function() {
    // Get current meme
    const memeImg = document.getElementById('memeImage');
    
    // Create a canvas to combine image and text
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Load image first to get dimensions
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = memeImg.src;
    
    img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        
        // Draw the image
        ctx.drawImage(img, 0, 0, img.width, img.height);
        
        // Convert to data URL and trigger download
        try {
            const dataUrl = canvas.toDataURL('image/png');
            
            // Create download link
            const link = document.createElement('a');
            link.download = 'ramadan-meme.png';
            link.href = dataUrl;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error saving image:', error);
            alert('تعذر حفظ الصورة. قد يكون ذلك بسبب قيود الخادم أو المتصفح.');
        }
    };
    
    img.onerror = function() {
        console.error('Error loading image for saving');
        alert('تعذر تحميل الصورة للحفظ. حاول مرة أخرى لاحقًا.');
    };
});