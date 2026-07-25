/* ===========================================================
   MIMPI ITSU - Premium Animation (Full Optimized)
   =========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       LOADING SCREEN
    ========================================== */
    const loadingScreen = document.querySelector(".loading-screen");
    if (loadingScreen) {
        window.addEventListener("load", () => {
            setTimeout(() => {
                loadingScreen.style.opacity = "0";
                loadingScreen.style.pointerEvents = "none";
                loadingScreen.style.transition = "opacity 1s ease";
                setTimeout(() => {
                    if (loadingScreen.parentNode) {
                        loadingScreen.remove();
                    }
                }, 1000);
            }, 1000);
        });
    }

    /* ==========================================
       CURSOR GLOW
    ========================================== */
    const cursor = document.querySelector(".cursor-glow");
    if (cursor) {
        document.addEventListener("mousemove", (e) => {
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";
        });
    }

    /* ==========================================
       NAVBAR EFFECT
    ========================================== */
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 40) {
                navbar.style.background = "rgba(5,5,5,.80)";
                navbar.style.backdropFilter = "blur(30px)";
                navbar.style.borderBottom = "1px solid rgba(255,255,255,.08)";
            } else {
                navbar.style.background = "rgba(5,5,5,.45)";
                navbar.style.borderBottom = "1px solid transparent";
            }
        });
    }

    /* ==========================================
       HERO FADE
    ========================================== */
    const hero = document.querySelector(".hero-container");
    if (hero) {
        hero.style.opacity = "0";
        hero.style.transform = "translateY(60px)";
        hero.style.transition = "opacity 1.2s ease, transform 1.2s ease";
        setTimeout(() => {
            hero.style.opacity = "1";
            hero.style.transform = "translateY(0)";
        }, 400);
    }

    /* ==========================================
       SCROLL REVEAL (GABUNGAN)
    ========================================== */
    const revealElements = document.querySelectorAll(
        ".timeline-card, .skill-card, .future, .contact, .section-title"
    );

    const reveal = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                entry.target.style.transition = "opacity 1s ease, transform 1s ease";
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach(item => {
        item.style.opacity = "0";
        item.style.transform = "translateY(80px)";
        reveal.observe(item);
    });

    /* ==========================================
       HERO PARALLAX (DIPERBAIKI)
    ========================================== */
    if (hero) {
        window.addEventListener("scroll", () => {
            const scroll = window.scrollY;
            hero.style.transform = `translateY(${scroll * 0.15}px)`;
        });
    }

    /* ==========================================
       BUTTON HOVER & MAGNET (DIGABUNGKAN)
    ========================================== */
    const buttons = document.querySelectorAll(".button-primary, .button-secondary");
    buttons.forEach(button => {
        // Hover scale
        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.05)";
        });
        button.addEventListener("mouseleave", () => {
            button.style.transform = "translate(0,0) scale(1)";
        });

        // Magnet effect
        button.addEventListener("mousemove", (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const moveX = (x - rect.width / 2) / 8;
            const moveY = (y - rect.height / 2) / 8;
            button.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
        });
    });

    /* ==========================================
       FLOATING CARD (OPTIMASI)
    ========================================== */
    const heroCards = document.querySelectorAll(".hero-card");
    heroCards.forEach(card => {
        let rotate = 0;
        setInterval(() => {
            rotate += 0.4;
            const yOffset = Math.sin(rotate / 10) * 8;
            card.style.transform = `translateY(${yOffset}px)`;
        }, 40);
    });

    /* ==========================================
       PROGRESS BAR ANIMATION
    ========================================== */
    const progressBars = document.querySelectorAll(".progress");
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                bar.style.width = "0%";
                setTimeout(() => {
                    bar.style.transition = "width 2s ease";
                    if (bar.classList.contains("frontend")) {
                        bar.style.width = "92%";
                    } else if (bar.classList.contains("fullstack")) {
                        bar.style.width = "65%";
                    } else if (bar.classList.contains("ai")) {
                        bar.style.width = "30%";
                    }
                }, 200);
            }
        });
    }, { threshold: 0.3 });

    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });

    /* ==========================================
       CARD GLOW & TILT (DIGABUNGKAN)
    ========================================== */
    const cards = document.querySelectorAll(".timeline-content, .skill-card, .hero-card");

    cards.forEach(card => {
        // Glow effect
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(79,140,255,.18), rgba(255,255,255,.04) 55%)`;
        });
        card.addEventListener("mouseleave", () => {
            card.style.background = "rgba(255,255,255,.04)";
            card.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
        });

        // Tilt effect
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const rotateX = (y - rect.height / 2) / 18;
            const rotateY = (x - rect.width / 2) / 18;
            card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
        });
    });

    /* ==========================================
       HERO TITLE PARALLAX
    ========================================== */
    const heroTitle = document.querySelector(".hero h1");
    if (heroTitle) {
        document.addEventListener("mousemove", (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            heroTitle.style.transform = `translate(${x}px, ${y}px)`;
        });
    }

    /* ==========================================
       TIMELINE STAGGER
    ========================================== */
    const timelineCards = document.querySelectorAll(".timeline-card");
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateX(0)";
                }, index * 180);
            }
        });
    }, { threshold: 0.15 });

    timelineCards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateX(-60px)";
        card.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        timelineObserver.observe(card);
    });

    /* ==========================================
       BUTTON RIPPLE
    ========================================== */
    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            const ripple = document.createElement("span");
            ripple.className = "ripple";
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            ripple.style.left = x + "px";
            ripple.style.top = y + "px";
            button.appendChild(ripple);
            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.remove();
                }
            }, 700);
        });
    });

    /* ==========================================
       NUMBER COUNTER
    ========================================== */
    function animateNumber(element, start, end, duration) {
        let startTime = null;

        function animation(current) {
            if (!startTime) startTime = current;
            const progress = Math.min((current - startTime) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = value;

            if (progress < 1) {
                requestAnimationFrame(animation);
            }
        }
        requestAnimationFrame(animation);
    }

    document.querySelectorAll("[data-count]").forEach(item => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateNumber(item, 0, Number(item.dataset.count), 1800);
                }
            });
        }, { threshold: 0.3 });
        observer.observe(item);
    });

    /* ==========================================
       ACTIVE NAVBAR
    ========================================== */
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-menu a");

    if (sections.length && navLinks.length) {
        window.addEventListener("scroll", () => {
            let current = "";
            sections.forEach(section => {
                const top = section.offsetTop - 120;
                const height = section.offsetHeight;
                if (window.scrollY >= top && window.scrollY < top + height) {
                    current = section.getAttribute("id");
                }
            });

            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === "#" + current) {
                    link.classList.add("active");
                }
            });
        });
    }

    /* ==========================================
       HERO GLOW (MOUSE FOLLOW)
    ========================================== */
    const heroSection = document.querySelector(".hero");
    if (heroSection) {
        document.addEventListener("mousemove", (e) => {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            heroSection.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(79,140,255,.08), transparent 55%)`;
        });
    }

    /* ==========================================
       FLOAT RANDOM (OPTIMASI)
    ========================================== */
    const floatItems = document.querySelectorAll(".skill-card, .timeline-content");
    floatItems.forEach((item, index) => {
        setInterval(() => {
            const y = Math.sin(Date.now() / 900 + index) * 6;
            item.style.transform = `translateY(${y}px)`;
        }, 30);
    });

    /* ==========================================
       SMOOTH SCROLL
    ========================================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute("href");
            if (targetId && targetId !== "#") {
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });

    /* ==========================================
       RANDOM GLOW (OPTIMASI)
    ========================================== */
    setInterval(() => {
        cards.forEach(card => {
            const r = Math.random() * 0.25 + 0.05;
            card.style.boxShadow = `0 0 60px rgba(79,140,255,${r})`;
        });
    }, 1800);

    /* ==========================================
       TYPEWRITER
    ========================================== */
    const subtitle = document.querySelector(".hero p");
    if (subtitle) {
        const originalText = subtitle.textContent || "";
        subtitle.textContent = "";
        let charIndex = 0;

        function typing() {
            if (charIndex < originalText.length) {
                subtitle.textContent += originalText.charAt(charIndex);
                charIndex++;
                setTimeout(typing, 40);
            }
        }
        setTimeout(typing, 1200);
    }

    /* ==========================================
       PARTICLE (GABUNGAN DENGAN STAR)
    ========================================== */
    // Particle
    for (let i = 0; i < 25; i++) {
        const dot = document.createElement("div");
        dot.className = "particle";
        dot.style.left = Math.random() * 100 + "vw";
        dot.style.top = Math.random() * 100 + "vh";
        dot.style.animationDuration = 5 + Math.random() * 8 + "s";
        document.body.appendChild(dot);
    }

    // Star
    for (let i = 0; i < 60; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";
        star.style.animationDelay = Math.random() * 8 + "s";
        document.body.appendChild(star);
    }

    /* ==========================================
       SCROLL PROGRESS BAR
    ========================================== */
    const progressLine = document.createElement("div");
    progressLine.style.position = "fixed";
    progressLine.style.top = "0";
    progressLine.style.left = "0";
    progressLine.style.height = "4px";
    progressLine.style.width = "0";
    progressLine.style.background = "linear-gradient(90deg, #4f8cff, #00d9ff)";
    progressLine.style.zIndex = "999999";
    document.body.appendChild(progressLine);

    window.addEventListener("scroll", () => {
        const total = document.documentElement.scrollHeight - window.innerHeight;
        const width = (window.scrollY / total) * 100;
        progressLine.style.width = width + "%";
    });

    /* ==========================================
       HERO SCALE (DIPERBAIKI)
    ========================================== */
    if (hero) {
        window.addEventListener("scroll", () => {
            const value = window.scrollY * 0.0004;
            const translateY = window.scrollY * 0.15;
            hero.style.transform = `scale(${Math.max(1 - value, 0.85)}) translateY(${translateY}px)`;
        });
    }

    /* ==========================================
       BACKGROUND PARALLAX
    ========================================== */
    const gradients = document.querySelectorAll(".gradient");
    if (gradients.length) {
        document.addEventListener("mousemove", (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            gradients.forEach((item, index) => {
                const speed = (index + 1) * 15;
                item.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
            });
        });
    }

    /* ==========================================
       HERO GLOW PULSE (DIPERBAIKI)
    ========================================== */
    if (hero) {
        setInterval(() => {
            hero.style.filter = "drop-shadow(0 0 40px rgba(79,140,255,.25))";
            setTimeout(() => {
                hero.style.filter = "none";
            }, 700);
        }, 5000);
    }

    /* ==========================================
       RANDOM CARD ROTATE (DIPERBAIKI)
    ========================================== */
    cards.forEach(card => {
        card.addEventListener("mouseenter", function() {
            const deg = (Math.random() * 6) - 3;
            const currentTransform = this.style.transform || "";
            this.style.transform = currentTransform + ` rotate(${deg}deg)`;
        });
    });

    /* ==========================================
       SECTION FADE (ANIMASI NATIVE)
    ========================================== */
    const allSection = document.querySelectorAll("section");
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.animate([
                    { opacity: 0, transform: "translateY(50px)" },
                    { opacity: 1, transform: "translateY(0)" }
                ], {
                    duration: 900,
                    fill: "forwards"
                });
            }
        });
    }, { threshold: 0.1 });

    allSection.forEach(section => {
        fadeObserver.observe(section);
    });

    /* ==========================================
       PERFORMANCE (REQUEST ANIMATION FRAME)
    ========================================== */
    let ticking = false;
    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                ticking = false;
            });
            ticking = true;
        }
    });

    /* ==========================================
       CONSOLE
    ========================================== */
    console.clear();
    console.log("%cMIMPI ITSU", "font-size:28px;color:#4f8cff;font-weight:bold;");
    console.log("%cDesigned with HTML CSS JavaScript", "font-size:14px;color:white;");
    console.log("%cCreated By ITSU 🚀", "font-size:14px;color:#00d9ff;");

});

/* ==========================================
   END
========================================== */
