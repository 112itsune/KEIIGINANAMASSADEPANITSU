/* ===========================================
   RESET
=========================================== */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{

    scroll-behavior:smooth;

}

body{

    font-family:'Inter',sans-serif;

    background:#050505;

    color:#ffffff;

    overflow-x:hidden;

}



/* ===========================================
   ROOT
=========================================== */

:root{

    --background:#050505;

    --surface:#0b0b0b;

    --card:#111111;

    --border:rgba(255,255,255,.08);

    --text:#ffffff;

    --text-secondary:#9da3af;

    --primary:#4f8cff;

    --primary-light:#78a8ff;

    --radius:26px;

    --transition:.45s;

}



/* ===========================================
   SCROLLBAR
=========================================== */

::-webkit-scrollbar{

    width:10px;

}

::-webkit-scrollbar-track{

    background:#050505;

}

::-webkit-scrollbar-thumb{

    background:linear-gradient(

        #4f8cff,

        #00d9ff

    );

    border-radius:999px;

}



/* ===========================================
   BACKGROUND
=========================================== */

.background{

    position:fixed;

    inset:0;

    z-index:-10;

    overflow:hidden;

}



.gradient{

    position:absolute;

    width:650px;

    height:650px;

    border-radius:50%;

    filter:blur(140px);

    opacity:.18;

}



.gradient-one{

    background:#3b82f6;

    top:-180px;

    left:-120px;

}



.gradient-two{

    background:#9333ea;

    right:-200px;

    top:20%;

}



.gradient-three{

    background:#06b6d4;

    bottom:-250px;

    left:30%;

}



.noise{

    position:absolute;

    inset:0;

    opacity:.03;

    background-image:

    radial-gradient(

        white 1px,

        transparent 0

    );

    background-size:6px 6px;

}



.grid{

    position:absolute;

    inset:0;

    background-image:

    linear-gradient(

        rgba(255,255,255,.03) 1px,

        transparent 1px

    ),

    linear-gradient(

        90deg,

        rgba(255,255,255,.03) 1px,

        transparent 1px

    );

    background-size:60px 60px;

}



/* ===========================================
   CURSOR
=========================================== */

.cursor-glow{

    position:fixed;

    width:420px;

    height:420px;

    border-radius:50%;

    pointer-events:none;

    background:

    radial-gradient(

        circle,

        rgba(79,140,255,.18),

        transparent 70%

    );

    transform:translate(-50%,-50%);

    z-index:-1;

}



/* ===========================================
   NAVBAR
=========================================== */

.navbar{

    position:fixed;

    top:0;

    left:0;

    width:100%;

    height:82px;

    display:flex;

    justify-content:space-between;

    align-items:center;

    padding:0 8%;

    backdrop-filter:blur(20px);

    background:rgba(5,5,5,.45);

    border-bottom:1px solid var(--border);

    z-index:999;

}



.logo{

    display:flex;

    gap:8px;

    font-size:24px;

    font-weight:800;

    letter-spacing:2px;

}



.logo span:last-child{

    color:var(--primary);

}



.nav-menu{

    display:flex;

    gap:40px;

    list-style:none;

}



.nav-menu a{

    color:white;

    text-decoration:none;

    font-size:15px;

    transition:var(--transition);

}



.nav-menu a:hover{

    color:var(--primary);

}



.menu-button{

    display:none;

}



/* ===========================================
   HERO
=========================================== */

.hero{

    min-height:100vh;

    display:flex;

    justify-content:center;

    align-items:center;

    padding:140px 8%;

}



.hero-container{

    width:100%;

    max-width:1450px;

    display:grid;

    grid-template-columns:1.2fr .8fr;

    gap:90px;

    align-items:center;

}



.hero-tag{

    display:inline-block;

    padding:10px 20px;

    border:1px solid var(--border);

    border-radius:999px;

    background:rgba(255,255,255,.04);

    color:var(--primary);

    margin-bottom:30px;

}



.hero h1{

    font-size:88px;

    line-height:1;

    font-weight:900;

    margin-bottom:25px;

}



.hero p{

    color:var(--text-secondary);

    font-size:20px;

    max-width:600px;

    margin-bottom:45px;

}
/* ===========================================
   HERO BUTTON
=========================================== */

.hero-button-group{

    display:flex;

    gap:20px;

    margin-top:45px;

}

.button-primary{

    display:inline-flex;

    justify-content:center;

    align-items:center;

    padding:18px 36px;

    border-radius:999px;

    background:linear-gradient(
        135deg,
        #4f8cff,
        #2563eb
    );

    color:#ffffff;

    text-decoration:none;

    font-weight:700;

    transition:.45s;

    box-shadow:
        0 15px 45px rgba(79,140,255,.35);

}

.button-primary:hover{

    transform:translateY(-6px);

    box-shadow:
        0 25px 60px rgba(79,140,255,.55);

}

.button-secondary{

    display:inline-flex;

    justify-content:center;

    align-items:center;

    padding:18px 36px;

    border-radius:999px;

    border:1px solid var(--border);

    background:rgba(255,255,255,.04);

    color:white;

    text-decoration:none;

    transition:.45s;

}

.button-secondary:hover{

    background:rgba(255,255,255,.09);

    transform:translateY(-6px);

}



/* ===========================================
   HERO CARD
=========================================== */

.hero-card{

    background:rgba(255,255,255,.04);

    backdrop-filter:blur(30px);

    border:1px solid rgba(255,255,255,.08);

    border-radius:32px;

    padding:40px;

    position:relative;

    overflow:hidden;

    transition:.45s;

}

.hero-card::before{

    content:"";

    position:absolute;

    inset:-40%;

    background:

    conic-gradient(

        transparent,

        rgba(79,140,255,.18),

        transparent

    );

    animation:rotateGlow 12s linear infinite;

}

.hero-card>*{

    position:relative;

    z-index:2;

}

.hero-card:hover{

    transform:translateY(-10px);

}



/* ===========================================
   CARD HEADER
=========================================== */

.card-header{

    font-size:22px;

    font-weight:700;

    margin-bottom:35px;

}



/* ===========================================
   PROGRESS
=========================================== */

.progress-item{

    margin-bottom:30px;

}

.progress-item span{

    display:block;

    margin-bottom:10px;

    color:var(--text-secondary);

}

.progress-bar{

    width:100%;

    height:10px;

    border-radius:999px;

    overflow:hidden;

    background:#1c1c1c;

}

.progress{

    height:100%;

    border-radius:999px;

    background:linear-gradient(
        90deg,
        #4f8cff,
        #00d9ff
    );

}

.frontend{

    width:92%;

}

.fullstack{

    width:65%;

}

.ai{

    width:30%;

}



/* ===========================================
   CARD FOOTER
=========================================== */

.card-footer{

    margin-top:40px;

    color:#9da3af;

}



/* ===========================================
   SCROLL DOWN
=========================================== */

.scroll-down{

    position:absolute;

    bottom:35px;

    left:50%;

    transform:translateX(-50%);

    display:flex;

    flex-direction:column;

    align-items:center;

    gap:12px;

    color:#888;

}

.mouse{

    width:28px;

    height:48px;

    border:2px solid rgba(255,255,255,.2);

    border-radius:50px;

    display:flex;

    justify-content:center;

    padding-top:8px;

}

.wheel{

    width:4px;

    height:10px;

    border-radius:999px;

    background:white;

    animation:scrollWheel 1.8s infinite;

}



/* ===========================================
   SECTION TITLE
=========================================== */

.section-title{

    text-align:center;

    margin-bottom:90px;

}

.section-title span{

    color:var(--primary);

    letter-spacing:4px;

    font-size:14px;

}

.section-title h2{

    font-size:62px;

    margin-top:18px;

    margin-bottom:15px;

}

.section-title p{

    color:var(--text-secondary);

    font-size:18px;

}



/* ===========================================
   ROADMAP
=========================================== */

.roadmap{

    padding:140px 8%;

    max-width:1400px;

    margin:auto;

}

.timeline{

    position:relative;

    display:flex;

    flex-direction:column;

    gap:45px;

}

.timeline::before{

    content:"";

    position:absolute;

    left:24px;

    top:0;

    bottom:0;

    width:2px;

    background:rgba(255,255,255,.08);

}



/* ===========================================
   TIMELINE CARD
=========================================== */

.timeline-card{

    display:flex;

    gap:40px;

    align-items:flex-start;

}

.timeline-dot{

    width:18px;

    height:18px;

    border-radius:50%;

    background:#4f8cff;

    box-shadow:

    0 0 30px #4f8cff;

    margin-top:25px;

    position:relative;

    z-index:2;

}

.timeline-content{

    flex:1;

    background:rgba(255,255,255,.04);

    border:1px solid rgba(255,255,255,.08);

    border-radius:28px;

    backdrop-filter:blur(20px);

    padding:35px;

    transition:.45s;

}

.timeline-content:hover{

    transform:translateX(12px);

    border-color:#4f8cff;

    box-shadow:

        0 20px 60px rgba(79,140,255,.18);

}

.year{

    display:inline-block;

    color:#4f8cff;

    font-size:30px;

    font-weight:800;

    margin-bottom:15px;

}

.timeline-content h3{

    margin-bottom:18px;

    font-size:28px;

}

.timeline-content p{

    color:#b5bcc8;

    margin-bottom:12px;

    line-height:1.8;

}

.timeline-list{

    display:flex;

    flex-direction:column;

    gap:10px;

}
/* ===========================================
   FUTURE SECTION
=========================================== */

.future{

    padding:160px 8%;

    text-align:center;

}

.future-container{

    max-width:900px;

    margin:auto;

}

.future span{

    color:var(--primary);

    letter-spacing:4px;

}

.future h2{

    font-size:72px;

    margin:30px 0;

    line-height:1;

}

.future p{

    color:var(--text-secondary);

    font-size:22px;

}



/* ===========================================
   SKILLS
=========================================== */

.skills{

    padding:140px 8%;

}

.skills-grid{

    display:grid;

    grid-template-columns:repeat(4,1fr);

    gap:30px;

}



.skill-card{

    background:rgba(255,255,255,.04);

    border:1px solid rgba(255,255,255,.08);

    border-radius:28px;

    padding:35px;

    backdrop-filter:blur(20px);

    transition:.45s;

    position:relative;

    overflow:hidden;

}

.skill-card::before{

    content:"";

    position:absolute;

    inset:0;

    background:linear-gradient(

        135deg,

        rgba(79,140,255,.12),

        transparent

    );

    opacity:0;

    transition:.45s;

}

.skill-card:hover::before{

    opacity:1;

}

.skill-card:hover{

    transform:translateY(-12px);

    border-color:#4f8cff;

    box-shadow:

        0 20px 60px rgba(79,140,255,.20);

}

.skill-card h3{

    margin-bottom:25px;

    font-size:28px;

}

.skill-card p{

    color:#b7c0cb;

    margin-bottom:12px;

}



/* ===========================================
   CONTACT
=========================================== */

.contact{

    padding:180px 8%;

}

.contact-container{

    max-width:900px;

    margin:auto;

    text-align:center;

    background:rgba(255,255,255,.04);

    border:1px solid rgba(255,255,255,.08);

    border-radius:40px;

    padding:80px;

    backdrop-filter:blur(20px);

}

.contact span{

    color:var(--primary);

}

.contact h2{

    font-size:68px;

    line-height:1;

    margin:25px 0;

}

.contact p{

    color:#b5bcc8;

    font-size:20px;

    margin-bottom:50px;

}



/* ===========================================
   FOOTER
=========================================== */

footer{

    border-top:1px solid rgba(255,255,255,.08);

    padding:80px 8%;

}

.footer-container{

    display:flex;

    justify-content:space-between;

    align-items:center;

    gap:30px;

    flex-wrap:wrap;

}

.footer-logo{

    font-size:28px;

    font-weight:800;

}

.footer-text{

    color:#aab3be;

}

.footer-copy{

    color:#777;

    font-size:14px;

}



/* ===========================================
   LOADING SCREEN
=========================================== */

.loading-screen{

    position:fixed;

    inset:0;

    background:#050505;

    display:flex;

    justify-content:center;

    align-items:center;

    z-index:99999;

}

.loader{

    display:flex;

    gap:15px;

}

.loader span{

    width:16px;

    height:16px;

    border-radius:50%;

    background:#4f8cff;

    animation:loader .8s infinite alternate;

}

.loader span:nth-child(2){

    animation-delay:.2s;

}

.loader span:nth-child(3){

    animation-delay:.4s;

}
/* ===========================================
   ANIMATIONS
=========================================== */

@keyframes rotateGlow{

    from{

        transform:rotate(0deg);

    }

    to{

        transform:rotate(360deg);

    }

}

@keyframes scrollWheel{

    0%{

        transform:translateY(0);

        opacity:1;

    }

    100%{

        transform:translateY(16px);

        opacity:0;

    }

}

@keyframes loader{

    from{

        transform:translateY(0);

        opacity:.5;

    }

    to{

        transform:translateY(-18px);

        opacity:1;

    }

}

@keyframes floating{

    0%{

        transform:translateY(0px);

    }

    50%{

        transform:translateY(-20px);

    }

    100%{

        transform:translateY(0px);

    }

}

@keyframes fadeUp{

    from{

        opacity:0;

        transform:translateY(40px);

    }

    to{

        opacity:1;

        transform:translateY(0);

    }

}

@keyframes pulse{

    0%{

        box-shadow:0 0 0 rgba(79,140,255,.2);

    }

    50%{

        box-shadow:0 0 35px rgba(79,140,255,.45);

    }

    100%{

        box-shadow:0 0 0 rgba(79,140,255,.2);

    }

}



/* ===========================================
   HOVER EFFECT
=========================================== */

.timeline-card{

    animation:floating 7s ease-in-out infinite;

}

.skill-card{

    animation:floating 9s ease-in-out infinite;

}

.hero-card{

    animation:floating 8s ease-in-out infinite;

}

.button-primary{

    animation:pulse 3s infinite;

}



/* ===========================================
   SELECTION
=========================================== */

::selection{

    background:#4f8cff;

    color:white;

}



/* ===========================================
   IMAGE
=========================================== */

img{

    max-width:100%;

    display:block;

}



/* ===========================================
   LINK
=========================================== */

a{

    transition:.4s;

}



/* ===========================================
   RESPONSIVE
=========================================== */

@media(max-width:1200px){

.hero h1{

font-size:72px;

}

.hero-container{

grid-template-columns:1fr;

}

.skills-grid{

grid-template-columns:repeat(2,1fr);

}

.contact h2{

font-size:52px;

}

.future h2{

font-size:56px;

}

}



@media(max-width:768px){

.navbar{

padding:20px;

}

.nav-menu{

display:none;

}

.menu-button{

display:block;

background:none;

border:none;

font-size:28px;

color:white;

cursor:pointer;

}

.hero{

padding:120px 25px;

}

.hero h1{

font-size:48px;

}

.hero p{

font-size:18px;

}

.hero-button-group{

flex-direction:column;

}

.hero-card{

margin-top:50px;

}

.timeline{

gap:25px;

}

.timeline::before{

left:12px;

}

.timeline-dot{

width:14px;

height:14px;

}

.timeline-content{

padding:25px;

}

.timeline-content h3{

font-size:24px;

}

.section-title h2{

font-size:42px;

}

.future h2{

font-size:42px;

}

.skills-grid{

grid-template-columns:1fr;

}

.contact{

padding:120px 25px;

}

.contact-container{

padding:50px 25px;

}

.contact h2{

font-size:40px;

}

.footer-container{

flex-direction:column;

text-align:center;

}

}



@media(max-width:480px){

.hero h1{

font-size:38px;

}

.hero-tag{

font-size:14px;

}

.button-primary,

.button-secondary{

width:100%;

}

.year{

font-size:24px;

}

.timeline-content{

padding:20px;

}

}



/* ===========================================
   UTILITIES
=========================================== */

.container{

max-width:1400px;

margin:auto;

}

.text-center{

text-align:center;

}

.hidden{

display:none;

}

.show{

display:block;

}

.fade-up{

animation:fadeUp .8s ease forwards;

}



/* ===========================================
   END
=========================================== */
.button-primary,
.button-secondary{
    position:relative;
    overflow:hidden;
}

.ripple{
    position:absolute;
    width:12px;
    height:12px;
    background:rgba(255,255,255,.45);
    border-radius:50%;
    transform:translate(-50%,-50%);
    animation:ripple .7s ease-out forwards;
}

@keyframes ripple{
    from{
        width:0;
        height:0;
        opacity:.8;
    }
    to{
        width:350px;
        height:350px;
        opacity:0;
    }
}
