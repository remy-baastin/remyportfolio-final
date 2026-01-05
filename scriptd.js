document.addEventListener('DOMContentLoaded', () => {

    // --- DATA ---
    const projects = [
        {
            title: "AutoGov AI",
            desc: "AI-driven platform that automates access to government services using NLP & OCR. Identifies eligible schemes and submits applications automatically.",
            tags: ["Python", "React", "Selenium", "NLP", "MongoDB"],
            link: "https://github.com/yourusername/autogov"
        },
        {
            title: "Student Mgmt System",
            desc: "Automated attendance system using BLE technology. Features a Native Android app and Web Interface with analytics dashboards.",
            tags: ["Flutter", "Python", "JavaScript", "MongoDB"],
            link: "https://github.com/yourusername/student-management"
        },
        {
            title: "AniConnect",
            desc: "An intelligent anime recommendation platform that personalizes suggestions and connects users with others who share the same anime tastes.",
            tags: ["HTML5", "CSS3", "JS","Python","Flask", "Supabase"],
            link: "https://github.com/yourusername/portfolio"
        }
    ];

    const skills = [
        "Python", "C++", "HTML", "CSS", "JavaScript", 
        "React", "Node.js", "MongoDB", "MySQL", 
        "TensorFlow", "Pandas", "Selenium", "Git"
    ];

    // --- RENDER PROJECTS ---
    const projectGrid = document.getElementById('project-grid');
    projects.forEach(proj => {
        const div = document.createElement('div');
        div.className = 'project-card';
        // Click event to open link
        div.addEventListener('click', () => {
            window.open(proj.link, '_blank');
        });
        
        const tagsHtml = proj.tags.map(t => `<span style="color:var(--neon-blue); margin-right:8px; font-size:0.9rem;">#${t}</span>`).join('');
        
        div.innerHTML = `
            <h3 class="project-title">${proj.title}</h3>
            <p style="margin-bottom:15px; line-height:1.5;">${proj.desc}</p>
            <div style="margin-bottom:15px;">${tagsHtml}</div>
            <div style="font-size:0.8rem; opacity:0.6; text-transform:uppercase; letter-spacing:1px;">[Click to View Code]</div>
        `;
        projectGrid.appendChild(div);
    });

    // --- RENDER SKILLS ---
    const skillsList = document.getElementById('skills-list');
    skills.forEach(skill => {
        const span = document.createElement('span');
        span.className = 'skill-tag';
        span.innerText = skill;
        skillsList.appendChild(span);
    });

    // --- BACKGROUND PARTICLES ---
    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();

    let particles = [];
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2;
            this.speedX = (Math.random() * 1.5) - 0.75;
            this.speedY = (Math.random() * 1.5) - 0.75;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            // Bounce off edges
            if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
            if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
        }
        draw() {
            ctx.fillStyle = '#00f3ff';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function initParticles() {
        particles = [];
        for (let i = 0; i < 80; i++) {
            particles.push(new Particle());
        }
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            
            // Draw connections if close
            for (let j = i; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(0, 243, 255, ${1 - distance/100})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }

    initParticles();
    animate();

    window.addEventListener('resize', () => {
        resizeCanvas();
        initParticles();
    });
});