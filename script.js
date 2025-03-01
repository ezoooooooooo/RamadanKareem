// Create stars in the header
const starsContainer = document.getElementById('stars');
for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    const size = Math.random() * 3 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 2}s`;
    starsContainer.appendChild(star);
}

// Create food icons
const foodIcons = document.getElementById('foodIcons');
const foodEmojis = ['🍖', '🍗', '🥘', '🍜', '🍲', '🌮', '🥙', '🥐', '🍩', '🍪', '🍫', '🍬', '🍭', '🍡', '🍧', '🍨', '🍦', '🥧', '🍰', '🧁', '🍮', '🍯', '🍼', '☕', '🧃', '🥤'];

for (let i = 0; i < 30; i++) {
    const food = document.createElement('div');
    food.classList.add('food-icon');
    food.textContent = foodEmojis[Math.floor(Math.random() * foodEmojis.length)];
    food.style.left = `${Math.random() * 100}%`;
    food.style.animationDuration = `${Math.random() * 20 + 10}s`;
    food.style.animationDelay = `${Math.random() * 10}s`;
    foodIcons.appendChild(food);
}

// Image handling
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

// Generate button functionality
const generateBtn = document.getElementById('generateBtn');
const memeImage = document.getElementById('memeImage');
const loadingOverlay = document.getElementById('loadingOverlay');

// Generate a random meme on page load
window.addEventListener('load', function() {
    generateNewMeme();
    setupIftarTime();
});

generateBtn.addEventListener('click', generateNewMeme);

function generateNewMeme() {
    // Show loading overlay
    loadingOverlay.style.display = 'flex';
    
    // Simulate loading time (can be reduced or removed in production)
    setTimeout(() => {
        // Get random image
        const randomImageIndex = Math.floor(Math.random() * memeImages.length);
        const randomImage = memeImages[randomImageIndex];
        
        // Update meme image
        memeImage.src = randomImage;
        
        // Hide loading overlay
        loadingOverlay.style.display = 'none';
    }, 800); // Reduced loading time for better UX
}

// Iftar time calculation and countdown
function setupIftarTime() {
    // Try to get user's location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            fetchPrayerTimes(position.coords.latitude, position.coords.longitude);
        }, error => {
            console.error("Error getting location:", error);
            // Use default locations or prompt user to enter location
            promptForLocation();
        });
    } else {
        // Geolocation not supported
        promptForLocation();
    }
}

function promptForLocation() {
    // You can replace this with a proper UI for location input
    const city = prompt("أدخل اسم مدينتك للحصول على وقت الإفطار الدقيق:", "مكة");
    if (city) {
        // Use a geocoding service to convert city name to coordinates
        fetchIftarTimeByCity(city);
    } else {
        // Use default iftar time if user cancels
        setDefaultIftarTime();
    }
}

function fetchPrayerTimes(latitude, longitude) {
    // Use a prayer times API
    const date = new Date();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    fetch(`https://api.aladhan.com/v1/calendar/${year}/${month}?latitude=${latitude}&longitude=${longitude}&method=2`)
        .then(response => response.json())
        .then(data => {
            const today = date.getDate() - 1; // API uses 0-based index for days
            if (data.data && data.data[today] && data.data[today].timings && data.data[today].timings.Maghrib) {
                const maghribTime = data.data[today].timings.Maghrib;
                
                // Set iftar time display
                document.getElementById('iftarTime').textContent = `موعد الإفطار: ${maghribTime}`;
                
                // Start countdown
                startCountdown(maghribTime);
            } else {
                setDefaultIftarTime();
            }
        })
        .catch(error => {
            console.error("Error fetching prayer times:", error);
            setDefaultIftarTime();
        });
}

function fetchIftarTimeByCity(city) {
    // Use an API that accepts city names
    const date = new Date();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    
    fetch(`https://api.aladhan.com/v1/calendarByCity/${year}/${month}?city=${encodeURIComponent(city)}&country=&method=2`)
        .then(response => response.json())
        .then(data => {
            const today = date.getDate() - 1;
            if (data.data && data.data[today] && data.data[today].timings && data.data[today].timings.Maghrib) {
                const maghribTime = data.data[today].timings.Maghrib;
                
                document.getElementById('iftarTime').textContent = `موعد الإفطار: ${maghribTime}`;
                startCountdown(maghribTime);
            } else {
                setDefaultIftarTime();
            }
        })
        .catch(error => {
            console.error("Error fetching prayer times by city:", error);
            setDefaultIftarTime();
        });
}

function setDefaultIftarTime() {
    // Set a default iftar time if API fails
    const defaultTime = "18:30";
    document.getElementById('iftarTime').textContent = `موعد الإفطار: ${defaultTime}`;
    startCountdown(defaultTime);
}

function startCountdown(iftarTimeString) {
    // Parse iftar time - Expected format: "HH:MM (GMT+X)"
    const timeParts = iftarTimeString.split(' ')[0].split(':');
    const iftarHour = parseInt(timeParts[0]);
    const iftarMinute = parseInt(timeParts[1]);
    
    // Update countdown every second
    const countdownInterval = setInterval(() => {
        const now = new Date();
        const iftarTime = new Date();
        iftarTime.setHours(iftarHour, iftarMinute, 0);
        
        // If iftar time has already passed for today, show message
        if (now > iftarTime) {
            document.getElementById('hours').textContent = "00";
            document.getElementById('minutes').textContent = "00";
            document.getElementById('seconds').textContent = "00";
            document.getElementById('iftarTime').textContent = "تم حلول وقت الإفطار، تقبل الله صيامكم";
            
            clearInterval(countdownInterval);
            return;
        }
        
        // Calculate remaining time
        const diff = iftarTime - now;
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        // Update the countdown display
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }, 1000);
}

// Share and Save button functionality
document.getElementById('shareBtn').addEventListener('click', () => {
    // Check if Web Share API is supported
    if (navigator.share) {
        navigator.share({
            title: 'تم تعبئة الكرش بنجاح - ميم رمضاني',
            text: 'شاهد هذا الميم الرمضاني المضحك!',
            url: window.location.href
        })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.log('Error sharing:', error));
    } else {
        // Fallback for browsers that don't support the Web Share API
        const dummyInput = document.createElement('input');
        document.body.appendChild(dummyInput);
        dummyInput.value = window.location.href;
        dummyInput.select();
        document.execCommand('copy');
        document.body.removeChild(dummyInput);
        
        alert('تم نسخ رابط الميم! الآن يمكنك مشاركته مع أصدقائك.');
    }
});

document.getElementById('saveBtn').addEventListener('click', () => {
    // This is a simplified version. For actual saving, you'll need canvas manipulation or a server-side solution
    const link = document.createElement('a');
    link.href = memeImage.src;
    link.download = 'ramadan-meme.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});