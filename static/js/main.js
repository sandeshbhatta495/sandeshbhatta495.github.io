// Hero Section Animation
const initHeroAnimation = () => {
    try {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    const heroElement = document.getElementById('hero-animation');
    if (!heroElement) {
        console.error('Hero element not found');
        return;
    }
    renderer.setSize(window.innerWidth, window.innerHeight);
    heroElement.appendChild(renderer.domElement);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const positions = new Float32Array(particlesCount * 3);

    for(let i = 0; i < particlesCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.02,
        color: '#00ff88'
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    camera.position.z = 5;

    const animate = () => {
        try {
            requestAnimationFrame(animate);
            particles.rotation.x += 0.001;
            particles.rotation.y += 0.001;
            renderer.render(scene, camera);
        } catch (error) {
            console.error('Error in animation frame:', error);
        }
    },
    init = () => {
        animate();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    };
    init();
    } catch (error) {
        console.error('Error in animation:', error);
    }
};

// Project Data
const projects = [
    {
        title: "Diwali Sales Analysis",
        description: "Explored customer behavior, regional trends, and sales forecasting using Pandas and Seaborn.",
        category: "python",
        technologies: ["Python"," Pandas", " Seaborn"],
        github: "https://github.com/sandeshbhatta495/diwali-sales-analysis"
    },
    {
        title: "School Result Management System",
        description: "GUI-based system for managing student records and results with authentication.",
        category: "python",
        technologies: [" Python", " Tkinter", " SQLite"],
        github: "https://github.com/sandeshbhatta495/school-result-system"
    },
    {
        title: "Modern Smart Agriculture System",
        description: "IoT-based farming solution monitoring soil moisture, weather, and automating irrigation.",
        category: "hardware",
        technologies: [" Arduino", " C++", " Sensors"],
        github: "https://github.com/sandeshbhatta495/"
    },
    {
        title: "AI-Powered Chatbot",
        description: "Chatbot using NLP and machine learning for Practice .",
        category: "ai-ml",
        technologies: [" Python", " TensorFlow"],
        github: "https://github.com/sandeshbhatta495/"
    },
    {
        title: "Portfolio Website",
        description: "Personal portfolio website showcasing projects and skills.",
        category: "web",
        technologies: [" HTML", " CSS", " JavaScript"],
        github: "httpps://github.com/sandeshbhatta495/portfolio"
    },
    {
        title:"Whatsapp chat Automation",
        description: "Automated WhatsApp messaging using Selenium and Python.",
        category: "python",
        technologies: [" Python", " Selenium"],
        github:  "https://github.com/sandeshbhatta495/"
    },
    {
        title: "Weather Forecasting App",
        description: "Web app providing weather forecasts using OpenWeatherMap API.",
        category: "web",
        technologies: ["HTML", " CSS", " JavaScript", " APIs"],
        github:"https://github.com/sandeshbhatta495/"
    },
    {
        title: "Simple Banking System",
        description: "Basic banking system with account management and transaction history.",
        category: "Terminal",
        technologies: ["Python"],
        github: "https://github.com/sandeshbhatta495/"
    },
    {
        title: " Basics Inventory Management System",
        description: "System for managing inventory, tracking stock levels, and generating reports.",
        category: "python",
        technologies: ["Python", " pandas"],
        category: " Terminal",
        github: "https://github.com/sandeshbhatta495/"
    },
    {
        title: "Personal AI Agent (N8n)",
        description: "AI agent for automating tasks and workflows using N8n.",
        category: "ai",
        technologies: [" Nodes component", " N8n"],
        github: "https://github.com/sandeshbhatta495/"
    },
    {
        title: "Mobile Stand(3D Printing)For Phone",
        description: "3D printed mobile stand designed for optimal phone support.",
        category: "hardware",
        technologies: ["3D Printing", " Fusion 360"],
        github:  "https://github.com/sandeshbhatta495/fusion360"
    },
    {
        title: "Task Management System",
        description: "Simple task management system for tracking and organizing tasks.",
        category: "python",
        technologies: ["Python"],
        category: "Terminal",
        github: "https://github.com/sandeshbhatta495/"
    },
    {
        title: "Mechanical Clock (pygame)",
        description: "Mechanical clock project showcasing My skills using python library like pygame and library",
        category: "python",
        technologies: ["Python", " pygame", " tkinter"],
        github: "https://github.com/sandeshbhatta495/Mechanical-clock"
    },
    {
        //multiple N8n projects(daily task reader, email reader, etc)
        title: "N8n Automation Projects",
        description: "Various automation projects using N8n for task management and workflow automation.",
        category: "ai",
        technologies: [" N8n", " Automation"],
        github:  "https://github.com/sandeshbhatta495/"
    },
    {
        title: "Telegram Based AI Agent (N8n)",
        description: "This works when i will trigger it by Telegram with specific commands then it will work  work as a news fetchers send emails by voice of mine .",
        category: "ai",
        technologies: [" N8n", " Automation"],
        github:  "https://github.com/sandeshbhatta495/"
    }


];


// Certifications Data
const certifications = [
    
    {  title: "AI for Everyone",
        organization: "DeepLearning.AI",
        date: "May 2025",
        skills: ["Artificial Intelligence (AI)", "AI for Business"],
        description: "Completed a comprehensive course on AI fundamentals, its applications in business, and ethical considerations."
    },
    {
        title: "Social Media Marketing",
        organization: "HP LIFE",
        date: "May 2025",
        skills: ["Social Media", "Marketing"],
        description: "Acquired skills in social media marketing strategies, content creation, and audience engagement techniques."
    },
    { 
        
        
        title: "3D Printing",
        organization: "HP LIFE",
        date: "May 2025",
        skills: ["3D", "3D Printing"],
        description: "Completed an in-depth course on 3D Printing, focusing on digital modeling, additive manufacturing principles, and practical 3D prototyping applications."
    },
    {
        title: "AI for Beginners",
        organization: "HP LIFE",
        date: "May 2025",
        skills: ["Artificial Intelligence (AI)", "AI for Business"],
        description: "Gained foundational knowledge in artificial intelligence, machine learning basics, ethical considerations, and real-world business applications of AI."
    },
    {
        title: "Business Email",
        organization: "HP LIFE",
        date: "May 2025",
        skills: ["Email", "Business Communication"],
        description: "Learned effective techniques for writing professional business emails, understanding email etiquette, and optimizing communication clarity."
     },
    {
        title: "ChatGPT Prompt Engineering for Developers",
        organization: "DeepLearning.AI",
        date: "May 2025",
        skills: ["Prompt Engineering", "Generative AI Application"],
        description: "Mastered the use of prompt engineering strategies for building powerful applications using ChatGPT. Explored best practices for instruction-tuned LLMs."
    },
    {
        title: "Effective Presentations",
        organization: "HP LIFE",
        date: "May 2025",
        skills: ["Presentation Skills", "Visual Communication"],
        description: "Explored principles of impactful presentations, use of visuals, time management, and strategies to communicate confidently and clearly."
    },
    {
        title: "HP LIFE Ambassador",
        organization: "HP LIFE",
        date: "May 2025",
        skills: ["Leadership", "Community Engagement"],
        description: "Earned HP LIFE Ambassador status for promoting HP LIFE programs and empowering peers through digital learning advocacy."
    },
    {
        title: "Introduction to Cyber Security Awareness",
        organization: "HP LIFE",
        date: "May 2025",
        skills: ["Cybersecurity", "Information Safety"],
        description: "Developed awareness of cybersecurity threats, personal data protection, secure browsing practices, and password hygiene."
    },
    {
        title: "What Is Generative AI?",
        organization: "LinkedIn",
        date: "May 2025",
        skills: ["Generative AI Tools", "Generative AI"],
        description: "In-depth exploration of generative AI technologies, including current applications, limitations, and future potential in various industries."
    },
    {
        title: "Python With Data Science",
        organization: "Research and Innovation Unit",
        date: "Jan 2025",
        skills: ["Python", "Data Science"],
        description: "Gained hands-on experience in Python for data manipulation, analysis, and visualization using libraries like NumPy, Pandas, and Matplotlib."
    },
    {
        title: "Introduction to Figma",
        organization: "Research and Innovation Unit",
        date: "Apr 2024",
        skills: ["Figma", "UI/UX Design"],
        description: "Learned the fundamentals of UI/UX design using Figma, including prototyping, layout grids, interactive design, and component management."
    },
    {
        title: "School Disaster Management",
        organization: "National Reconstruction Fund Corporation",
        date: "Sep 2021",
        skills: ["Disaster Resilience", "Risk Management"],
        description: "Participated in a 4-day training on school disaster preparedness and resilience planning, including emergency response strategies."
    },
    {
        title: "Introduction to Image Generation ",
        organization : "Google cloud skills boost",
        date: "May 2025",
        skills: ["Image Generation", "Generative AI"],  
        description: "Explored the fundamentals of image generation using generative AI techniques, including GANs and diffusion models."
        

    }


];
// Function to create certification cards
const createCertificationCard = (cert) => {
    const card = document.createElement('div');
    card.className = 'cert-card';

    const header = document.createElement('div');
    header.className = 'cert-header';

    // Add logo if available
    if (cert.logo) {
        const logo = document.createElement('img');
        logo.src = cert.logo;
        logo.alt = `${cert.organization} logo`;
        logo.className = 'cert-logo';
        header.appendChild(logo);
    }

    const title = document.createElement('h3');
    title.className = 'cert-title';
    title.textContent = cert.title;

    const org = document.createElement('div');
    org.className = 'cert-organization';
    org.textContent = cert.organization;

    const date = document.createElement('div');
    date.className = 'cert-date';
    date.textContent = cert.date;

    const details = document.createElement('div');
    details.className = 'cert-details';

    if (cert.credentialId) {
        const credential = document.createElement('div');
        credential.className = 'credential-id';
        credential.textContent = `Credential ID: ${cert.credentialId}`;
        details.appendChild(credential);
    }

    if (cert.description) {
        const description = document.createElement('div');
        description.className = 'cert-description';
        description.textContent = cert.description;
        details.appendChild(description);
    }

    if (cert.skills && cert.skills.length > 0) {
        const skillsContainer = document.createElement('div');
        skillsContainer.className = 'cert-skills';
        
        const skillsList = document.createElement('div');
        skillsList.className = 'skills-list';
        
        cert.skills.forEach(skill => {
            const skillTag = document.createElement('span');
            skillTag.className = 'skill-tag';
            skillTag.textContent = skill;
            skillsList.appendChild(skillTag);
        });
        
        skillsContainer.appendChild(skillsList);
        details.appendChild(skillsContainer);
    }

    header.appendChild(title);
    card.appendChild(header);
    card.appendChild(org);
    card.appendChild(date);
    card.appendChild(details);

    return card;
};

// Initialize the page
// Typewriter effect
const typewriterTexts = [
    'I am an Engineering student...',
    'I am a passionate student in engineering...',
    'I am highly passionate about AI and ML...',
    'I love building innovative solutions...',
    'I am exploring the world of technology...',
    'I create, code, and innovate...',
    'I turn ideas into reality...',
    'I am a lifelong learner...',
    'I am a tech enthusiast...',
    'I am engineer who changes ideas into reality...',
    '#Humancoder ENTHUSIAST #AI #ML...',

];

const typewriterEffect = (text, element, delay = 100) => {
    return new Promise((resolve) => {
        let index = 0;
        const intervalId = setInterval(() => {
            element.textContent += text[index];
            index++;
            if (index === text.length) {
                clearInterval(intervalId);
                resolve();
            }
        }, delay);
    });
};

const eraseText = (element, delay = 50) => {
    return new Promise((resolve) => {
        const text = element.textContent;
        let index = text.length;
        const intervalId = setInterval(() => {
            element.textContent = text.substring(0, index - 1);
            index--;
            if (index === 0) {
                clearInterval(intervalId);
                resolve();
            }
        }, delay);
    });
};

const startTypewriterAnimation = async () => {
    const element = document.querySelector('.typewriter-text');
    if (!element) return;

    while (true) {
        for (const text of typewriterTexts) {
            await typewriterEffect(text, element);
            await new Promise(resolve => setTimeout(resolve, 2000));
            await eraseText(element);
            await new Promise(resolve => setTimeout(resolve, 500));
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    try {
        // Start typewriter animation
        startTypewriterAnimation();

        // Initialize hero animation
        initHeroAnimation();

        // Render certifications
        const certificationGrid = document.querySelector('.cert-grid');
        if (certificationGrid) {
            certifications.forEach(cert => {
                certificationGrid.appendChild(createCertificationCard(cert));
            });
        }

        // Skills filtering
        const skillsFilterButtons = document.querySelectorAll('.skills-filter .filter-btn');
        const skillCategories = document.querySelectorAll('.skill-category');

        skillsFilterButtons.forEach(button => {
            button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active button
            skillsFilterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter skill categories
            skillCategories.forEach(category => {
                if (filter === 'all' || category.getAttribute('data-category') === filter) {
                    category.classList.remove('hidden');
                    gsap.to(category, {
                        opacity: 1,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                } else {
                    gsap.to(category, {
                        opacity: 0,
                        duration: 0.3,
                        ease: 'power2.out',
                        onComplete: () => {
                            category.classList.add('hidden');
                        }
                    });
                }
            });
        });
    });

    // Initialize hero animation
    initHeroAnimation();

    // Populate projects
    const projectsGrid = document.querySelector('.projects-grid');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = `project-card ${project.category}`;
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tech-stack">
                ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
            </div>
            <a href="${project.github}" target="_blank" class="project-link">
                <i class="fab fa-github"></i> View on GitHub
            </a>
        `;
        projectsGrid.appendChild(projectCard);
    });

    // Project filters
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const projectCards = document.querySelectorAll('.project-card');
            projectCards.forEach(card => {
                if (filter === 'all' || card.classList.contains(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

  // Remove duplicates based on title and credentialId
const uniqueCertifications = certifications.filter((cert, index, self) =>
    index === self.findIndex(c =>
        c.title === cert.title && c.credentialId === cert.credentialId
    )
);

// Now render using the filtered list
uniqueCertifications.forEach(cert => {
    const certCard = document.createElement('div');
    certCard.className = 'cert-card';
    certCard.innerHTML = `
        <div class="cert-header">
            <img src="/static/images/${cert.logo}" alt="${cert.organization} logo" class="cert-logo">
            <div class="cert-title">
                <h3>${cert.title}</h3>
                <p class="organization">${cert.organization}</p>
            </div>
        </div>
        <div class="cert-details">
            <p class="cert-date">Issued ${cert.date}</p>
            ${cert.credentialId ? `<p class="credential-id">Credential ID ${cert.credentialId}</p>` : ''}
            ${cert.skills ? `
                <div class="cert-skills">
                    <p>Skills:</p>
                    <div class="skills-list">
                        ${cert.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>
            ` : ''}
            ${cert.description ? `<p class="cert-description">${cert.description}</p>` : ''}
        </div>
    `;
    certGrid.appendChild(certCard);
});

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        
        try {
            const response = await fetch('/send_message', {
                method: 'POST',
                body: formData
            });
            const data = await response.json();
            alert(data.message);
            contactForm.reset();
        } catch (error) {
            alert('Error sending message. Please try again.');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    } catch (error) {
        console.error('Error in initialization:', error);
    }
});
