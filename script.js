document.addEventListener('DOMContentLoaded', () => {

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
        "PYTHON", "C++", "HTML", "CSS", "JAVASCRIPT", 
        "REACT", "NODE.JS", "MONGODB", "MYSQL", 
        "TENSORFLOW", "PANDAS", "SELENIUM", "GIT"
    ];

    // --- RENDER PROJECTS ---
    const projectGrid = document.getElementById('project-grid');
    projects.forEach(proj => {
        const div = document.createElement('div');
        div.className = 'project-card';
        div.onclick = () => window.open(proj.link, '_blank');
        
        const tagsHtml = proj.tags.map(t => `<span class="tech-span">${t}</span>`).join('');
        
        div.innerHTML = `
            <h3 class="project-title">${proj.title}</h3>
            <p style="margin-bottom:20px; font-weight:300;">${proj.desc}</p>
            <div>${tagsHtml}</div>
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

    // --- BLACK ASH PARTICLES ---
    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();

    let particles = [];
    class Ash {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1; 
            this.speedY = (Math.random() * -0.5) - 0.2; 
            this.speedX = (Math.random() * 0.4) - 0.2; 
        }
        update() {
            this.y += this.speedY;
            this.x += this.speedX;
            if (this.y < 0) {
                this.y = canvas.height;
                this.x = Math.random() * canvas.width;
            }
        }
        draw() {
            ctx.fillStyle = '#111';
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.size, this.size); 
            ctx.fill();
        }
    }

    function initAsh() {
        particles = [];
        for (let i = 0; i < 60; i++) particles.push(new Ash());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(animate);
    }

    initAsh();
    animate();
    window.addEventListener('resize', () => { resizeCanvas(); initAsh(); });
});