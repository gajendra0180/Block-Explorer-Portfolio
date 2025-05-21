// DOM Elements
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li a');
const contactForm = document.getElementById('contactForm');
const cursorDot = document.querySelector('.cursor-dot');
const cursorCircle = document.querySelector('.cursor-circle');
const cursorHoverTriggers = document.querySelectorAll('.cursor-hover-trigger');
const scrollProgress = document.querySelector('.scroll-progress');
const revealElements = document.querySelectorAll('.reveal-text');
const staggerElements = document.querySelectorAll('.stagger-reveal');
const loadingOverlay = document.querySelector('.loading-overlay');
const timeDisplay = document.getElementById('current-time');
const projectCards = document.querySelectorAll('.project-card');
const projectModal = document.querySelector('.project-preview-modal');
const projectModalClose = document.querySelector('.project-preview-close');
const welcomeOverlay = document.querySelector('.welcome-overlay');
const enterBtn = document.getElementById('enter-btn');
const enterNoMotionBtn = document.getElementById('enter-no-motion');
const loadingPercentage = document.querySelector('.loading-percentage');
const welcomeContent = document.querySelector('.welcome-content');
const cursorOuter = document.querySelector('.cursor-v2.cursor-outer');
const cursorInner = document.querySelector('.cursor-v2.cursor-inner');
const indexButton = document.querySelector('.index-button');
const prevProjectBtn = document.querySelector('.nav-arrow.prev-project');
const nextProjectBtn = document.querySelector('.nav-arrow.next-project');
const projectItems = document.querySelectorAll('.project-item');

console.log('Script loaded - DOM Elements initialized');

// Enter the site immediately when DOM is loaded (no load animation)
document.addEventListener('DOMContentLoaded', function() {
    // Make sure the welcome overlay is hidden after a short delay
    setTimeout(() => {
        if (welcomeOverlay) {
            welcomeOverlay.classList.add('hidden');
        }
    }, 500);

    // Custom cursor initialization
    document.addEventListener('mousemove', updateCursorV2);

    // Bitcoin minting animation on click
    document.addEventListener('click', createBitcoinMint);

    // Execute other initialization functions
    initializeTheme();
    initializeNavigation();
    updateTime();
});

// Initialize theme
function initializeTheme() {
    if (themeToggle) {
        const currentTheme = localStorage.getItem('theme') || 'dark';
        
        if (currentTheme === 'light') {
            body.setAttribute('data-theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
        
        themeToggle.addEventListener('click', function() {
            if (body.getAttribute('data-theme') === 'light') {
                body.removeAttribute('data-theme');
                localStorage.setItem('theme', 'dark');
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            } else {
                body.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            }
        });
    }
}

// Initialize navigation
function initializeNavigation() {
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    if (navLinksItems) {
        navLinksItems.forEach(item => {
            item.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
}

// Update time
function updateTime() {
    if (timeDisplay) {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        
        timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
        
        setTimeout(updateTime, 1000);
    }
}

// Update Cursor V2
function updateCursorV2(e) {
    const posX = e.clientX;
    const posY = e.clientY;
    
    if (cursorOuter) {
        cursorOuter.style.left = `${posX}px`;
        cursorOuter.style.top = `${posY}px`;
        cursorOuter.style.transform = 'translate(-50%, -50%)';
    }
    
    if (cursorInner) {
        cursorInner.style.left = `${posX}px`;
        cursorInner.style.top = `${posY}px`;
        cursorInner.style.transform = 'translate(-50%, -50%)';
    }
}

// Bitcoin minting animation on click
function createBitcoinMint(e) {
    // Create multiple bitcoins (3-5 coins)
    const coinCount = Math.floor(Math.random() * 3) + 3;
    
    for (let i = 0; i < coinCount; i++) {
        // Create a new Bitcoin element
        const bitcoin = document.createElement('div');
        bitcoin.className = 'bitcoin-mint';
        
        // Randomize size slightly
        const size = 20 + Math.random() * 20; // 20-40px
        bitcoin.style.width = `${size}px`;
        bitcoin.style.height = `${size}px`;
        
        // Position at click location with slight randomness
        const offsetX = (Math.random() - 0.5) * 40; // -20 to 20px
        const offsetY = (Math.random() - 0.5) * 40; // -20 to 20px
        bitcoin.style.left = `${e.pageX + offsetX}px`;
        bitcoin.style.top = `${e.pageY + offsetY}px`;
        
        // Slightly randomized animation duration
        const duration = 1 + Math.random() * 1; // 1-2s
        bitcoin.style.animationDuration = `${duration}s`;
        
        // Add to document
        document.body.appendChild(bitcoin);
        
        // Remove after animation completes
        setTimeout(() => {
            bitcoin.remove();
        }, duration * 1000);
    }
    
    // Create sparkles (10-15 sparkles)
    const sparkleCount = Math.floor(Math.random() * 6) + 10;
    
    for (let i = 0; i < sparkleCount; i++) {
        // Create sparkle element
        const sparkle = document.createElement('div');
        sparkle.className = 'bitcoin-sparkle';
        
        // Randomize size
        const size = 3 + Math.random() * 7; // 3-10px
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        
        // Position at click location
        sparkle.style.left = `${e.pageX}px`;
        sparkle.style.top = `${e.pageY}px`;
        
        // Randomize direction of travel
        const tx = (Math.random() - 0.5) * 100; // -50 to 50px
        const ty = (Math.random() - 0.5) * 100; // -50 to 50px
        sparkle.style.setProperty('--tx', `${tx}px`);
        sparkle.style.setProperty('--ty', `${ty}px`);
        
        // Slightly randomized animation duration
        const duration = 0.5 + Math.random() * 0.5; // 0.5-1s
        sparkle.style.animationDuration = `${duration}s`;
        
        // Add to document
        document.body.appendChild(sparkle);
        
        // Remove after animation completes
        setTimeout(() => {
            sparkle.remove();
        }, duration * 1000);
    }
    
    // Play a coin sound if available
    const coinSound = document.getElementById('coin-sound');
    if (coinSound) {
        coinSound.currentTime = 0;
        coinSound.play().catch(e => console.log('Sound play failed:', e));
    }
}

// Handle Enter Button click events
if (enterBtn) {
    enterBtn.addEventListener('click', function() {
        welcomeOverlay.classList.add('hidden');
    });
}

if (enterNoMotionBtn) {
    enterNoMotionBtn.addEventListener('click', function() {
        welcomeOverlay.classList.add('hidden');
        disableAnimations = true;
    });
}

// Initialize hover effects for cursor
const hoverElements = document.querySelectorAll('.cursor-hover-trigger');
if (hoverElements.length > 0) {
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            if (cursorOuter) cursorOuter.style.width = '60px';
            if (cursorOuter) cursorOuter.style.height = '60px';
        });
        
        element.addEventListener('mouseleave', () => {
            if (cursorOuter) cursorOuter.style.width = '40px';
            if (cursorOuter) cursorOuter.style.height = '40px';
        });
    });
}

// Add active class to nav links based on scroll position
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    // Update navigation active state
    if (navLinksItems) {
        navLinksItems.forEach(item => {
            const target = document.querySelector(item.getAttribute('href'));
            
            if (target) {
                const targetPosition = target.offsetTop - 100;
                const targetHeight = target.offsetHeight;
                
                if (scrollPosition >= targetPosition && scrollPosition < targetPosition + targetHeight) {
                    navLinksItems.forEach(link => link.classList.remove('active'));
                    item.classList.add('active');
                }
            }
        });
    }
});

// Handle contact form submission
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Add success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = 'Transaction executed successfully! Your message has been sent.';
        
        contactForm.appendChild(successMessage);
        
        // Clear form
        contactForm.reset();
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    });
}

// Search functionality for explorer search
const searchForm = document.querySelector('.search-form');
if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const searchInput = document.querySelector('.search-input');
        const searchTerm = searchInput.value.trim().toLowerCase();
        
        if (searchTerm.startsWith('0x')) {
            // Find matching transaction hash
            const txHashes = document.querySelectorAll('.hash-id');
            
            let found = false;
            txHashes.forEach(hash => {
                if (hash.textContent.toLowerCase().includes(searchTerm)) {
                    const txItem = hash.closest('.transaction-item') || hash.closest('.explorer-container');
                    
                    if (txItem) {
                        txItem.scrollIntoView({ behavior: 'smooth' });
                        
                        // Highlight the found item
                        txItem.style.border = '2px solid var(--primary-color)';
                        setTimeout(() => {
                            txItem.style.border = '';
                        }, 3000);
                        
                        found = true;
                    }
                }
            });
            
            if (!found) {
                alert('No matching transaction or contract found');
            }
        } else if (searchTerm === 'blocks' || searchTerm === 'skills') {
            document.querySelector('#blocks').scrollIntoView({ behavior: 'smooth' });
        } else if (searchTerm === 'transactions' || searchTerm === 'projects') {
            document.querySelector('#transactions').scrollIntoView({ behavior: 'smooth' });
        } else if (searchTerm === 'contact' || searchTerm === 'message') {
            document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
        } else if (searchTerm === 'profile' || searchTerm === 'about') {
            document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
        } else {
            alert('Try searching for "0x..." (transaction hash), "blocks", "transactions", "contact", or "profile"');
        }
        
        searchInput.value = '';
    });
}

// Project data for modal
const projectData = {
    eigenpie: {
        title: "Eigenpie (Liquid Restaking Platform)",
        description: `<p>Lead developer for Eigenpie (Liquid Restaking Platform), managing $1.5B+ TVL, built on EigenLayer with cross-chain asset bridging using LayerZero.</p>
                     <p>Developed core protocol smart contracts (vlEGP, vlStreamRewarders), governance modules, and reward distribution systems.</p>
                     <p>Engineered and deployed efficient GraphQL subgraphs for EigenPie, improving decentralized application analytics.</p>`,
        image: "https://storage.googleapis.com/cursor-dev-assets/hyperpie-logo.png",
        tech: ["Solidity", "Foundry", "LayerZero", "EigenLayer", "The Graph"],
        badges: ["DeFi", "Cross-chain", "TVL $1.5B+"],
        links: [
            { name: "Magpie", url: "https://www.magpiexyz.io/" }
        ]
    },
    hyperpie: {
        title: "Hyperpie SubDAO Ecosystem",
        description: `<p>Architected the Hyperpie SubDAO ecosystem on Hyperliquid Chain, comprising a Liquid Staking Platform, MEME Launchpad, and MEME DEX.</p>
                     <p>Successfully launched with $2M+ raised within a week of launch and developed token distribution systems.</p>
                     <p>Implemented cross-chain bridging and engineered GraphQL subgraphs for protocol analytics.</p>`,
        image: "https://docs.hyperpiexyz.io/~gitbook/image?url=https%3A%2F%2F457230863-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FqHhLEbutbyZqsnSEbnQv%252Fuploads%252FwOg73heNnmcy0aVnzPXA%252FHyperpie%27s%2520Hyperliquid%2520MEME%2520DEX.jpg%3Falt%3Dmedia%26token%3D716fd4f1-a918-485b-b94b-d1aa956f195f&width=400&dpr=3&quality=100&sign=f3b0b17d&sv=2",
        tech: ["Solidity", "React", "TypeScript", "Node.js", "The Graph"],
        badges: ["SubDAO", "Hyperliquid Chain", "$2M+ Raised"],
        links: [
            { name: "Platform", url: "#" }
        ]
    },
    biddingwar: {
        title: "Blockchain Bidding War Game",
        description: `<p>Developed a Solidity-based decentralized competitive bidding game deployed on Energi Testnet.</p>
                     <p>Implemented automated Node.js backend integrations and smart contract-based auction mechanics.</p>
                     <p>Created secure token handling systems and user interaction flows.</p>`,
        image: "https://plus.unsplash.com/premium_photo-1675445824153-8614bad43dcd",
        tech: ["Solidity", "Node.js", "Ethereum", "Web3.js"],
        badges: ["Gaming", "DApp", "Smart Contracts"],
        links: [
            { name: "Repository", url: "#" }
        ]
    },
    zoombot: {
        title: "AI Zoom Bot",
        description: `<p>Developed Node.js bot integrated with GPT for live AI-driven conversations in Zoom meetings.</p>
                     <p>Implemented speech recognition and synthesis for real-time communication.</p>
                     <p>Created seamless interaction between meeting participants and AI assistant.</p>`,
        image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521",
        tech: ["Node.js", "GPT", "Speech Recognition", "Zoom API"],
        badges: ["AI", "Automation", "Communication"],
        links: [
            { name: "Repository", url: "#" }
        ]
    }
};

// Loading Animation
window.addEventListener('load', () => {
    setTimeout(() => {
        loadingOverlay.classList.add('loaded');
        
        // Trigger initial animations after loading
        setTimeout(() => {
            document.querySelectorAll('.reveal-text').forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('revealed');
                }, index * 100);
            });
            
            document.querySelectorAll('.stagger-reveal').forEach(container => {
                const items = container.children;
                Array.from(items).forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('revealed');
                    }, index * 150 + 500);
                });
            });
        }, 500);
    }, 1500); // Simulated loading time
});

// Theme Toggle Functionality
themeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'light') {
        body.removeAttribute('data-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'light');
    }
});

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.setAttribute('data-theme', 'light');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Project Modal
projectCards.forEach(card => {
    const viewDetailsBtn = card.querySelector('.view-details');
    if (viewDetailsBtn) {
        viewDetailsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = card.getAttribute('data-project');
            openProjectModal(projectId);
        });
    }
});

function openProjectModal(projectId) {
    console.log('Opening project modal for:', projectId);
    
    const project = projectData[projectId];
    if (!project) {
        console.error('Project data not found for ID:', projectId);
        return;
    }
    
    if (!projectModal) {
        console.error('Project modal element not found');
        return;
    }
    
    const modalImage = projectModal.querySelector('.project-preview-image');
    const modalTitle = projectModal.querySelector('.project-preview-details h2');
    const modalBadges = projectModal.querySelector('.badges-container');
    const modalDescription = projectModal.querySelector('.project-preview-description');
    const modalTech = projectModal.querySelector('.project-preview-tech');
    const modalLinks = projectModal.querySelector('.project-preview-links');
    
    // Set modal content
    modalImage.src = project.image;
    modalImage.alt = project.title;
    modalTitle.textContent = project.title;
    
    // Set badges
    modalBadges.innerHTML = '';
    project.badges.forEach(badge => {
        const badgeEl = document.createElement('span');
        badgeEl.className = 'badge';
        badgeEl.textContent = badge;
        modalBadges.appendChild(badgeEl);
    });
    
    // Set description
    modalDescription.innerHTML = project.description;
    
    // Set tech stack
    modalTech.innerHTML = '<h3>Technologies Used</h3><div class="tech-stack"></div>';
    const techStackEl = modalTech.querySelector('.tech-stack');
    project.tech.forEach(tech => {
        const techEl = document.createElement('span');
        techEl.textContent = tech;
        techStackEl.appendChild(techEl);
    });
    
    // Set links
    modalLinks.innerHTML = '<h3>Links</h3>';
    project.links.forEach(link => {
        const linkEl = document.createElement('a');
        linkEl.href = link.url;
        linkEl.className = 'btn-small cursor-hover-trigger';
        linkEl.textContent = link.name;
        linkEl.target = "_blank";
        modalLinks.appendChild(linkEl);
    });
    
    // Show modal
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Close modal
projectModalClose.addEventListener('click', () => {
    projectModal.classList.remove('active');
    document.body.style.overflow = ''; // Re-enable scrolling
});

// Close modal on click outside content
projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        projectModal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Custom Cursor
function updateCursor(e) {
    const posX = e.clientX;
    const posY = e.clientY;
    
    // Update cursor position with smooth animation
    if (cursorDot) {
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        cursorDot.style.transform = 'translate(-50%, -50%)';
    }
    
    if (cursorCircle) {
        cursorCircle.style.left = `${posX}px`;
        cursorCircle.style.top = `${posY}px`;
        cursorCircle.style.transform = 'translate(-50%, -50%)';
    }
}

document.addEventListener('mousemove', updateCursor);

// Cursor hover effect
cursorHoverTriggers.forEach(trigger => {
    trigger.addEventListener('mouseenter', () => {
        cursorCircle.classList.add('cursor-hover');
    });
    
    trigger.addEventListener('mouseleave', () => {
        cursorCircle.classList.remove('cursor-hover');
    });
});

// Hide cursor when leaving the window
document.addEventListener('mouseout', (e) => {
    if (e.relatedTarget === null) {
        cursorDot.style.opacity = '0';
        cursorCircle.style.opacity = '0';
    }
});

document.addEventListener('mouseover', () => {
    cursorDot.style.opacity = '1';
    cursorCircle.style.opacity = '1';
});

// Scroll Progress Indicator
window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPosition = window.scrollY;
    const scrollPercentage = (scrollPosition / windowHeight) * 100;
    
    scrollProgress.style.width = `${scrollPercentage}%`;
});

// Intersection Observer for Reveal Animations
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});

// Staggered Reveal Animation
staggerElements.forEach(container => {
    const staggerItems = container.children;
    const staggerObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            Array.from(staggerItems).forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('revealed');
                }, index * 150);
            });
            staggerObserver.unobserve(container);
        }
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    staggerObserver.observe(container);
});

// WebGL Background for Hero Section
class WebGLBackground {
    constructor() {
        this.canvas = document.getElementById('heroCanvas');
        
        if (!this.canvas) return;
        
        // Initialize Three.js scene
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            alpha: true,
            antialias: true
        });
        
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.camera.position.z = 30;
        
        // Add light
        const ambientLight = new THREE.AmbientLight(0x404040);
        this.scene.add(ambientLight);
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(0, 1, 1);
        this.scene.add(directionalLight);
        
        // Create particles
        this.particles = [];
        this.createParticles();
        
        // Handle resize
        window.addEventListener('resize', this.onWindowResize.bind(this));
        
        // Start animation loop
        this.animate();
    }
    
    createParticles() {
        const particleGeometry = new THREE.SphereGeometry(0.2, 8, 8);
        const particleMaterial = new THREE.MeshPhongMaterial({
            color: 0x5d4fff,
            transparent: true,
            opacity: 0.8,
            emissive: 0x5d4fff,
            emissiveIntensity: 0.5
        });
        
        // Create a group of particles
        for (let i = 0; i < 100; i++) {
            const particle = new THREE.Mesh(particleGeometry, particleMaterial);
            
            // Random position
            particle.position.x = (Math.random() - 0.5) * 60;
            particle.position.y = (Math.random() - 0.5) * 60;
            particle.position.z = (Math.random() - 0.5) * 30;
            
            // Add to scene
            this.scene.add(particle);
            
            // Store particle data for animation
            this.particles.push({
                mesh: particle,
                speed: Math.random() * 0.05 + 0.02,
                direction: new THREE.Vector3(
                    (Math.random() - 0.5) * 0.1,
                    (Math.random() - 0.5) * 0.1,
                    (Math.random() - 0.5) * 0.1
                )
            });
        }
        
        // Create connections between particles
        const lineMaterial = new THREE.LineBasicMaterial({
            color: 0x5d4fff,
            transparent: true,
            opacity: 0.2
        });
        
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                if (Math.random() > 0.9) {
                    const points = [
                        this.particles[i].mesh.position,
                        this.particles[j].mesh.position
                    ];
                    
                    const geometry = new THREE.BufferGeometry().setFromPoints(points);
                    const line = new THREE.Line(geometry, lineMaterial);
                    
                    this.scene.add(line);
                }
            }
        }
    }
    
    animate() {
        requestAnimationFrame(this.animate.bind(this));
        
        // Update particle positions
        this.particles.forEach(particle => {
            particle.mesh.position.add(particle.direction);
            
            // Bounce off boundaries
            if (Math.abs(particle.mesh.position.x) > 30) {
                particle.direction.x *= -1;
            }
            
            if (Math.abs(particle.mesh.position.y) > 30) {
                particle.direction.y *= -1;
            }
            
            if (Math.abs(particle.mesh.position.z) > 15) {
                particle.direction.z *= -1;
            }
            
            // Rotate particle
            particle.mesh.rotation.x += 0.01;
            particle.mesh.rotation.y += 0.01;
        });
        
        // Rotate camera slightly
        this.camera.position.x = Math.sin(Date.now() * 0.0001) * 5;
        this.camera.position.y = Math.cos(Date.now() * 0.0001) * 5;
        this.camera.lookAt(0, 0, 0);
        
        this.renderer.render(this.scene, this.camera);
    }
    
    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
}

// Initialize WebGL Background
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded event fired');
    
    // Initialize WebGL background
    if (typeof THREE !== 'undefined') {
        new WebGLBackground();
    }
    
    // Create blockchain nodes (previous blockchain animation code)
    const nodesContainer = document.querySelector('.nodes');
    
    if (nodesContainer) {
        for (let i = 0; i < 5; i++) {
            createNode(nodesContainer);
        }
    }
    
    // Start loading simulation
    simulateLoading();
    
    // Initialize project navigation
    updateProjectNavigation();
});

function createNode(container) {
    const node = document.createElement('div');
    node.className = 'node';
    
    // Random position
    const posX = Math.random() * 100 - 50;
    const posY = Math.random() * 100 - 50;
    
    // Random size
    const size = Math.random() * 15 + 5;
    
    // Style the node
    node.style.width = `${size}px`;
    node.style.height = `${size}px`;
    node.style.position = 'absolute';
    node.style.borderRadius = '50%';
    node.style.backgroundColor = 'rgba(0, 212, 255, 0.7)';
    node.style.boxShadow = '0 0 10px rgba(0, 212, 255, 0.7)';
    node.style.left = `calc(50% + ${posX}px)`;
    node.style.top = `calc(50% + ${posY}px)`;
    
    // Animation
    node.style.animation = `float ${Math.random() * 3 + 2}s infinite alternate ease-in-out`;
    
    // Append to container
    container.appendChild(node);
    
    // Create connections
    createConnections(container, node);
}

function createConnections(container, node) {
    const existingNodes = container.querySelectorAll('.node:not(:last-child)');
    if (existingNodes.length === 0) return;
    
    // Connect to a random existing node
    const randomNode = existingNodes[Math.floor(Math.random() * existingNodes.length)];
    
    const connection = document.createElement('div');
    connection.className = 'connection';
    connection.style.position = 'absolute';
    connection.style.backgroundColor = 'rgba(0, 212, 255, 0.3)';
    connection.style.height = '1px';
    connection.style.width = '40px';
    connection.style.zIndex = '-1';
    connection.style.left = '50%';
    connection.style.top = '50%';
    connection.style.transformOrigin = 'left center';
    
    container.appendChild(connection);
    
    // Update connection position on animation frame
    function updateConnection() {
        const rect1 = node.getBoundingClientRect();
        const rect2 = randomNode.getBoundingClientRect();
        
        const x1 = rect1.left + rect1.width / 2 - container.getBoundingClientRect().left;
        const y1 = rect1.top + rect1.height / 2 - container.getBoundingClientRect().top;
        const x2 = rect2.left + rect2.width / 2 - container.getBoundingClientRect().left;
        const y2 = rect2.top + rect2.height / 2 - container.getBoundingClientRect().top;
        
        const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
        
        connection.style.width = `${length}px`;
        connection.style.left = `${x1}px`;
        connection.style.top = `${y1}px`;
        connection.style.transform = `rotate(${angle}deg)`;
        
        requestAnimationFrame(updateConnection);
    }
    
    updateConnection();
}

// Add smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: disableAnimations ? 'auto' : 'smooth'
            });
        }
    });
});

// Welcome Overlay Loading Simulation
function simulateLoading() {
    console.log('simulateLoading called');
    
    if (!loadingPercentage || !welcomeContent) {
        console.error('Loading elements not found', { 
            loadingPercentage: loadingPercentage, 
            welcomeContent: welcomeContent 
        });
        return;
    }
    
    let percentage = 0;
    loadingPercentage.textContent = `${percentage}%`;
    
    // Make sure loading percentage is visible immediately
    loadingPercentage.classList.add('visible');
    
    const interval = setInterval(() => {
        percentage += Math.floor(Math.random() * 5) + 1;
        if (percentage > 100) percentage = 100;
        
        loadingPercentage.textContent = `${percentage}%`;
        console.log(`Loading: ${percentage}%`);
        
        if (percentage === 100) {
            clearInterval(interval);
            
            // Show the enter button
            setTimeout(() => {
                welcomeContent.classList.add('loaded');
                console.log('Welcome content loaded');
                
                // Auto-hide loading percentage
                setTimeout(() => {
                    loadingPercentage.classList.remove('visible');
                }, 1000);
            }, 500);
        }
    }, 150);
}

// Enter the site
function enterSite(noMotion = false) {
    console.log('enterSite called with noMotion:', noMotion);
    
    if (!welcomeOverlay) {
        console.error('Welcome overlay not found');
        return;
    }
    
    welcomeOverlay.classList.add('hidden');
    console.log('Welcome overlay hidden');
    
    if (noMotion) {
        disableAnimations = true;
        document.documentElement.style.setProperty('--transition', 'none !important');
        document.body.classList.add('reduce-motion');
        console.log('Animations disabled');
    }
    
    // Reveal elements immediately if animations are disabled
    if (disableAnimations) {
        document.querySelectorAll('.reveal-text, .stagger-reveal > *').forEach(el => {
            el.classList.add('revealed');
        });
        console.log('Elements revealed immediately (animations disabled)');
    } else {
        // Start regular animations
        setTimeout(() => {
            document.querySelectorAll('.reveal-text').forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('revealed');
                }, index * 100);
            });
            
            document.querySelectorAll('.stagger-reveal').forEach(container => {
                const items = container.children;
                Array.from(items).forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('revealed');
                    }, index * 150 + 300);
                });
            });
            console.log('Started revealing elements with animations');
        }, 1000);
    }
}

// Enter buttons click handlers
if (enterBtn) {
    enterBtn.addEventListener('click', () => enterSite(false));
}

if (enterNoMotionBtn) {
    enterNoMotionBtn.addEventListener('click', (e) => {
        e.preventDefault();
        enterSite(true);
    });
}

// Custom Cursor V2
function updateCursorV2(e) {
    const posX = e.clientX;
    const posY = e.clientY;
    
    // Smooth follow for outer cursor
    gsapMove(cursorOuter, 0.15, posX, posY);
    
    // Instant follow for inner cursor
    gsapMove(cursorInner, 0.05, posX, posY);
}

function gsapMove(cursor, duration, x, y) {
    if (!cursor) return;
    
    // Simple implementation without GSAP library
    cursor.style.transition = `transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1)`;
    cursor.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
}

document.addEventListener('mousemove', updateCursorV2);

// Cursor interactions
document.querySelectorAll('a, button, .cursor-hover-trigger, input, textarea').forEach(item => {
    item.addEventListener('mouseenter', () => {
        cursorOuter.style.width = '60px';
        cursorOuter.style.height = '60px';
        cursorOuter.style.border = '1px solid rgba(255, 255, 255, 0.8)';
    });
    
    item.addEventListener('mouseleave', () => {
        cursorOuter.style.width = '40px';
        cursorOuter.style.height = '40px';
        cursorOuter.style.border = '1px solid rgba(255, 255, 255, 0.5)';
    });
});

// Hide cursor when leaving window
document.addEventListener('mouseout', (e) => {
    if (e.relatedTarget === null) {
        cursorOuter.style.opacity = '0';
        cursorInner.style.opacity = '0';
    }
});

document.addEventListener('mouseover', () => {
    cursorOuter.style.opacity = '1';
    cursorInner.style.opacity = '1';
});

// Project navigation
let currentProjectIndex = 0;

function updateProjectNavigation() {
    // Hide arrows if at the beginning or end
    prevProjectBtn.style.opacity = currentProjectIndex === 0 ? '0.3' : '1';
    nextProjectBtn.style.opacity = currentProjectIndex === projectItems.length - 1 ? '0.3' : '1';
}

prevProjectBtn.addEventListener('click', () => {
    if (currentProjectIndex > 0) {
        currentProjectIndex--;
        scrollToProject(currentProjectIndex);
    }
});

nextProjectBtn.addEventListener('click', () => {
    if (currentProjectIndex < projectItems.length - 1) {
        currentProjectIndex++;
        scrollToProject(currentProjectIndex);
    }
});

function scrollToProject(index) {
    const projectElement = projectItems[index];
    if (projectElement) {
        const offsetTop = projectElement.offsetTop;
        window.scrollTo({
            top: offsetTop - 100,
            behavior: disableAnimations ? 'auto' : 'smooth'
        });
        
        updateProjectNavigation();
    }
}

// Scroll Progress Indicator
window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPosition = window.scrollY;
    const scrollPercentage = (scrollPosition / windowHeight) * 100;
    
    document.querySelector('.scroll-progress').style.width = `${scrollPercentage}%`;
    
    // Hide/show index button based on scroll position
    if (indexButton) {
        indexButton.style.opacity = scrollPosition > 300 ? '0.7' : '0';
        indexButton.style.pointerEvents = scrollPosition > 300 ? 'auto' : 'none';
    }
}); 