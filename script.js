const app = document.getElementById('app');
const hamburger = document.getElementById('hamburger');
const aboutPanel = document.getElementById('aboutPanel');
const aboutClose = document.getElementById('aboutClose');
const dotLight = document.getElementById('dotLight');
const dotDark = document.getElementById('dotDark');
const seeBtn = document.getElementById('seeBtn');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const page4 = document.getElementById('page4');
const page5 = document.getElementById('page5');
const page6 = document.getElementById('page6');
const bufferLogo = document.getElementById('bufferLogo');
const bufferText = document.getElementById('bufferText');

hamburger.addEventListener('click', () => {
    const isOpen = aboutPanel.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
});
aboutClose.addEventListener('click', () => {
    aboutPanel.classList.remove('open');
    hamburger.classList.remove('open');
});

const logoIds = ['bufferLogo', 'p3Logo', 'p5Logo', 'p6HeaderLogo'];

function setLogoSrc(dark) {
    const src = dark
        ? 'Images/nullwhite.png'
        : 'Images/logo.png';
    logoIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.src = src;
    });
}

dotLight.addEventListener('click', () => { app.classList.add('dark'); setLogoSrc(true); });
dotDark.addEventListener('click', () => { app.classList.remove('dark'); setLogoSrc(false); });

function goTo(from, to) {
    from.classList.replace('visible', 'hidden-left');
    to.classList.replace('hidden-right', 'visible');
}

function showPage3() {
    goTo(page2, page3);
    setTimeout(() => {
        ['p3Logo', 'p3Heading', 'p3Sub', 'p3Box', 'p3Disc', 'p3Btns', 'p3Url']
            .forEach(id => document.getElementById(id).classList.add('shown'));
    }, 200);
}

function showPage4() {
    goTo(page3, page4);
    setTimeout(() => {
        document.getElementById('p4Text').classList.add('shown');
        document.getElementById('p4AllowBtn').classList.add('shown');
    }, 200);
}

function showPage5(fromPage) {
    goTo(fromPage, page5);
    startScanning();
}

function startScanning() {
    const steps = document.querySelectorAll('.p5-step');
    let i = 0;
    function next() {
        if (i < steps.length) {
            steps[i].classList.add('shown');
            i++;
            setTimeout(next, 700);
        } else {
            setTimeout(() => {
                document.getElementById('p5Almost').classList.add('shown');
                setTimeout(() => showPage6(), 1200);
            }, 400);
        }
    }
    setTimeout(next, 500);
}

// Randomized results for each category. FIXED!!! ----------------------------------------------------------------------------------------
const categoryPool = [
    { name: 'Amazon', notes: ['"It was free shipping..." – {n} orders', '"One-click checkout..." – {n} times', '"Add-on item deal..." – {n} purchases', '"Prime Day got me..." – {n} items I forgot I bought'] },
    { name: 'Clothing Apparel', notes: ['"It was on sale" – Est. {p}% worn only once', '"Limited drop..." – {n} pieces, unworn', '"I needed it" – {p}% still has tags', '"Summer wardrobe refresh..." – It\'s December'] },
    { name: 'Beauty Items', notes: ['"It was a new collection..." – Most are untouched', '"Influencer said so..." – {n} products unopened', '"Skin needs this..." – {p}% expired unused', '"Full coverage palette..." – Used once'] },
    { name: 'Skincare Items', notes: ['"People say it\'s good..." – No it\'s not', '"Dermatologist-approved..." – {n} bottles unfinished', '"Morning routine add-on..." – {n} steps never taken', '"Glass skin promise..." – Still waiting'] },
    { name: 'Blindboxes', notes: ['"I just want one..." – You bought {n} more', '"Completing the set..." – {n} duplicates', '"Last one online..." – {n} "last ones"', '"Mystery surprise..." – {n} disappointments'] },
    { name: 'TikTok Shop', notes: ['"Went viral for a reason..." – {n} orders', '"30s video convinced me..." – {n} times', '"Everyone has it..." – Used twice', '"Algorithm knows me..." – Too well, {n} purchases'] },
    { name: 'Home Decor', notes: ['"It\'ll look nice..." – Still in the box', '"Aesthetic upgrade..." – {n} pieces, staged once', '"Trending style..." – {n} items forgotten', '"Cozy corner vision..." – Unassembled since {n} months'] },
    { name: 'Food Delivery', notes: ['"Too tired to cook..." – {n} nights', '"It was just a snack..." – {n} "snacks"', '"Free delivery promo..." – {n} orders', '"Treating myself..." – {n} times this month'] },
    { name: 'Subscriptions', notes: ['"I\'ll use it eventually..." – {n} months idle', '"Trial I forgot to cancel..." – {n} services', '"It was only $9.99..." – {n} of them', '"Bundle deal..." – Used {p}% of features'] },
    { name: 'Stationery & Crafts', notes: ['"New hobby era..." – Equipment unused', '"Journaling phase..." – {n} notebooks, blank', '"Art supply haul..." – {p}% still sealed', '"Pinterest made me..." – {n} unfinished projects'] },
    { name: 'Tech Accessories', notes: ['"Productivity upgrade..." – {n} cables, duplicate', '"Cable management era..." – {n} gadgets, decorative', '"Wireless everything..." – {p}% still in packaging', '"Limited colourway..." – {n} of the same thing'] },
    { name: 'Wellness & Health', notes: ['"New year new me..." – {n} items, {p}% unused', '"Gym bag essentials..." – Gym visits: {n}', '"Self-care investment..." – Collected, not used', '"Supplement stack..." – {n} tubs, forgotten'] },
    { name: 'Books & Media', notes: ['"I\'ll read it eventually..." – {n} unread', '"Physical copy person..." – {p}% still unread', '"Series collector..." – {n} books, unfinished', '"Educational era..." – {n} courses, incomplete'] },
    { name: 'Shoes', notes: ['"It completes the outfit..." – {n} pairs, once worn', '"Limited collab..." – Still in the dust bag', '"Platform moment..." – {p}% never left the house', '"Comfort investment..." – Blisters on day one'] },
    { name: 'Accessories', notes: ['"It ties the look together..." – {n} items, forgotten', '"Jewellery era..." – {n} pieces, never worn', '"Bag collection..." – {n} bags, {p}% decorative', '"Viral accessory..." – Trend lasted 2 weeks'] },
    { name: 'Snacks & Drinks', notes: ['"Aesthetic pantry..." – {n} items, expired', '"Viral food trend..." – {n} orders, regretted', '"Bulk buy deal..." – {p}% still unopened', '"Boba every day..." – {n} times this month'] },
    { name: 'Gaming', notes: ['"It was on sale..." – {n} games, unplayed', '"Pre-order bonus..." – {n} games, sealed', '"DLC pack..." – {n} packs, uninstalled', '"Limited edition..." – {p}% still in wrap'] },
    { name: 'Pet Items', notes: ['"They deserve it..." – {n} toys, ignored', '"Matching outfits..." – Worn {n} times, unwillingly', '"Fancy food upgrade..." – Refused by pet', '"Instagram pet era..." – {n} accessories, unused'] },
    { name: 'Plants & Garden', notes: ['"Cottagecore era..." – {n} plants, resting', '"New green thumb..." – {p}% didn\'t survive', '"Rare find..." – {n} plants, one survived', '"Outdoor oasis..." – {n} items, still in bags'] },
    { name: 'Others', notes: ['"Why is it trending?..." – I am a victim too now', '"Impulse find..." – {n} random items', '"It was in my cart forever..." – {n} things', '"Limited time offer..." – {n} "emergencies"'] },
];

function fmt(n) { return n.toLocaleString(); }
function rnd(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function buildNote(t) { return t.replace('{n}', rnd(3, 47)).replace('{p}', rnd(55, 95)); }

let resultsBuilt = false;

function showPage6() {
    goTo(page5, page6);
    if (!resultsBuilt) { resultsBuilt = true; buildResults(); }
}

function buildResults() {
    const count = 12;
    const chosen = [...categoryPool].sort(() => Math.random() - 0.5).slice(0, count);
    const total = rnd(40000, 120000);

    let rem = total;
    const amounts = chosen.map((_, i) => {
        if (i === chosen.length - 1) return rem;
        const slice = Math.floor(rem * (Math.random() * 0.2 + 0.04));
        rem -= slice;
        return slice;
    }).sort((a, b) => b - a);

    const maxAmt = amounts[0];

    // Counting up animation on the totals ----------------------------------------------------------------------------------------
    const totalEl = document.getElementById('p6Total');
    const dur = 1600, t0 = Date.now();
    (function tick() {
        const p = Math.min((Date.now() - t0) / dur, 1);
        const e = 1 - Math.pow(1 - p, 3);
        totalEl.innerHTML = `<span class="dollar">$</span> ${fmt(Math.round(e * total))}`;
        if (p < 1) requestAnimationFrame(tick);
    })();

    // Building the cards ----------------------------------------------------------------------------------------
    const container = document.getElementById('p6Cards');
    container.innerHTML = '';
    chosen.forEach((cat, i) => {
        const amt = amounts[i];
        const pct = Math.round((amt / maxAmt) * 100);
        const note = buildNote(pick(cat.notes));

        const card = document.createElement('div');
        card.className = 'p6-card';
        card.innerHTML = `
        <div class="p6-card-top">
          <div class="p6-cat-name">${cat.name}</div>
          <div class="p6-cat-amount">$ ${fmt(amt)}</div>
        </div>
        <div class="p6-bar-bg"><div class="p6-bar" data-pct="${pct}"></div></div>
        <div class="p6-cat-note">${note}</div>
      `;
        container.appendChild(card);

        setTimeout(() => {
            card.classList.add('shown');
            setTimeout(() => { card.querySelector('.p6-bar').style.width = pct + '%'; }, 120);
        }, 280 + i * 160);
    });

    // Pick and set insight text. Randomized. ----------------------------------------------------------------------------------------
    const insightPool = [
        'You spent more on things you\'ll forget than on a flight to somewhere you\'ve never been.',
        `That\'s $${fmt(Math.round(total / 360))}/day — mostly in moments of boredom or FOMO.`,
        'Most of this felt like small wins. That\'s the algorithm working, not your intuition.',
        'If this were cash in hand, would you have spent it the same way?',
        'The brands didn\'t manipulate you. They just made it easier to manipulate yourself.',
        `$${fmt(Math.round(total / 12))}/month. Every month. On things you no longer think about.`,
        'Every "it was on sale" is someone else\'s full price.',
        'The dopamine from buying fades in 72 hours. The charge on your card doesn\'t.',
        'You spent more on things you\'ll forget than on a flight to somewhere you\'ve never been.',
    ];
    document.getElementById('p6InsightText').textContent = pick(insightPool);

    // Show insight then share + home button ----------------------------------------------------------------------------------------
    const delay = 280 + count * 160;
    setTimeout(() => {
        document.getElementById('p6Insight').classList.add('shown');
    }, delay + 300);
    setTimeout(() => {
        document.getElementById('p6ShareBtn').classList.add('shown');
        document.getElementById('p6HomeBtn').classList.add('shown');
    }, delay + 700);
}

// Share image image making thingy ----------------------------------------------------------------------------------------
document.getElementById('p6ShareBtn').addEventListener('click', generateShareImage);

function generateShareImage() {
    const btn = document.getElementById('p6ShareBtn');
    btn.textContent = 'Generating...';

    const totalText = document.getElementById('p6Total').textContent.trim();
    const insightText = document.getElementById('p6InsightText').textContent;

    // Collecting the card data ----------------------------------------------------------------------------------------
    let cardsHTML = '';
    document.querySelectorAll('.p6-card').forEach(el => {
        const name = el.querySelector('.p6-cat-name').textContent;
        const amount = el.querySelector('.p6-cat-amount').textContent;
        const note = el.querySelector('.p6-cat-note').textContent;
        const barPct = el.querySelector('.p6-bar').style.width || '60%';
        cardsHTML += `
        <div style="background:#c8c4bc;border-radius:16px;padding:14px 16px;break-inside:avoid;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px;">
            <span style="font-weight:900;font-size:15px;color:#1e2340;">${name}</span>
            <span style="font-weight:900;font-size:15px;color:#1e2340;white-space:nowrap;margin-left:8px;">${amount}</span>
          </div>
          <div style="height:2.5px;background:rgba(30,35,64,0.15);border-radius:2px;margin-bottom:8px;overflow:hidden;">
            <div style="height:100%;width:${barPct};background:#1e2340;border-radius:2px;"></div>
          </div>
          <div style="font-size:12px;color:#1e2340;opacity:0.6;line-height:1.4;">${note}</div>
        </div>`;
    });

    // Building it off the share card ----------------------------------------------------------------------------------------
    const card = document.createElement('div');
    card.style.cssText = `
      position:fixed;left:-9999px;top:0;
      width:750px;background:#eeeae1;
      padding:60px 48px 48px;font-family:Arial,sans-serif;box-sizing:border-box;
    `;
    card.innerHTML = `
      <div style="text-align:center;margin-bottom:20px;">
        <img src="Images/logo.png" style="width:120px;height:auto;opacity:0.9;">
      </div>
      <div style="text-align:center;font-size:18px;color:#8a8d9a;font-weight:700;letter-spacing:0.02em;margin-bottom:8px;">
        Based on  NU:LL I wasted
      </div>
      <div style="text-align:center;font-weight:900;font-size:88px;color:#1e2340;line-height:1;letter-spacing:-3px;margin-bottom:24px;">
        ${totalText}
      </div>
      <div style="text-align:center;font-weight:900;font-style:italic;font-size:26px;color:#1e2340;line-height:1.25;margin-bottom:40px;padding:0 10px;">
        ${insightText}
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:40px;">
        ${cardsHTML}
      </div>
      <div style="text-align:center;font-size:18px;color:#8a8d9a;font-weight:700;">NULL.co</div>
    `;
    document.body.appendChild(card);

    function cleanup() { if (card.parentNode) document.body.removeChild(card); }

    function renderAndDeliver() {
        html2canvas(card, { scale: 2, useCORS: true, backgroundColor: '#eeeae1', logging: false })
            .then(canvas => {
                cleanup();
                btn.textContent = 'Share?';

                canvas.toBlob(blob => {
                    const file = new File([blob], 'My Null Spending.png', { type: 'image/png' });

                    if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
                        navigator.share({ title: 'NU:ll — My Spending Simulation', files: [file] })
                            .catch(() => fallbackDownload(canvas));
                        return;
                    }

                    if (window.ClipboardItem && navigator.clipboard && navigator.clipboard.write) {
                        navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })])
                            .then(() => {
                                btn.textContent = 'Copied!';
                                setTimeout(() => btn.textContent = 'Share?', 2500);
                            })
                            .catch(() => fallbackDownload(canvas));
                        return;
                    }

                    fallbackDownload(canvas);
                }, 'image/png');
            })
            .catch(() => { cleanup(); btn.textContent = 'Share?'; });
    }

    function fallbackDownload(canvas) {
        const url = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = url;
        a.download = 'My Null Spending.png';
        a.click();
        setTimeout(() => {
            const w = window.open();
            if (w) { w.document.write(`<img src="${url}" style="max-width:100%">`); }
        }, 400);
    }

    if (window.html2canvas) {
        renderAndDeliver();
    } else {
        const s = document.createElement('script');
        s.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
        s.onload = renderAndDeliver;
        s.onerror = () => { cleanup(); btn.textContent = 'Share?'; };
        document.head.appendChild(s);
    }
}

seeBtn.addEventListener('click', () => {
    goTo(page1, page2);
    setTimeout(() => {
        bufferLogo.classList.add('shown');
        bufferText.classList.add('shown');
    }, 200);
    setTimeout(showPage3, 3000);
});

document.getElementById('allowBtn').addEventListener('click', () => showPage5(page3));
document.getElementById('notNowBtn').addEventListener('click', showPage4);
document.getElementById('p4AllowBtn').addEventListener('click', () => showPage5(page4));



// Home button to buffer to home/landing page ----------------------------------------------------------------------------------------

document.getElementById('p6HomeBtn').addEventListener('click', () => {
    // Close about panel if open ----------------------------------------------------------------------------------------
    aboutPanel.classList.remove('open');
    hamburger.classList.remove('open');

    // Reset buffer page to right so it slides in naturally ----------------------------------------------------------------------------------------
    page2.classList.remove('visible', 'hidden-left');
    page2.classList.add('hidden-right');

    // Slides from last page to go back to buffer page first ----------------------------------------------------------------------------------------
    goTo(page6, page2);

    // Reset + replay buffer animations ----------------------------------------------------------------------------------------
    const bLogo = document.getElementById('bufferLogo');
    const bText = document.getElementById('bufferText');
    bLogo.classList.remove('shown');
    bText.classList.remove('shown');
    setTimeout(() => {
        bLogo.classList.add('shown');
        bText.classList.add('shown');
    }, 200);

    // After 3 seconds slide to 1st page ----------------------------------------------------------------------------------------
    setTimeout(() => {
        // Reset page 1 position in case it shifted ----------------------------------------------------------------------------------------
        page1.classList.remove('hidden-left', 'hidden-right');
        page1.classList.add('hidden-right');

        goTo(page2, page1);

        // Reset all other pages ----------------------------------------------------------------------------------------
        [page3, page4, page5, page6].forEach(p => {
            p.classList.remove('visible', 'hidden-left');
            p.classList.add('hidden-right');
        });

        // Reset animated elements ----------------------------------------------------------------------------------------
        document.querySelectorAll('.p5-step').forEach(el => el.classList.remove('shown'));
        ['p3Logo', 'p3Heading', 'p3Sub', 'p3Box', 'p3Disc', 'p3Btns', 'p3Url',
            'p4Text', 'p4AllowBtn', 'p5Almost', 'p6Insight', 'p6ShareBtn', 'p6HomeBtn'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.classList.remove('shown');
            });

        // Fresh/Resetted results next run ----------------------------------------------------------------------------------------
        resultsBuilt = false;
        document.getElementById('p6Cards').innerHTML = '';
        document.getElementById('p6Total').innerHTML = '<span class="dollar">$</span> 0';
        document.getElementById('p6InsightText').textContent = '';
    }, 3000);
});

// FOR SPLASH PAGE ----------------------------------------------------------------------------------------
const splashMessages = ['Initializing...', 'Checking connection...', 'Authenticating...', 'Loading assets...', 'Ready.'];
const splashStatusEl = document.getElementById('splashStatus');
const messageTimes = [200, 1100, 2200, 3500, 5100];

splashMessages.forEach((msg, i) => {
  setTimeout(() => { splashStatusEl.textContent = msg; }, messageTimes[i]);
});

let splashDone = false;
let splashReady = false;

setTimeout(() => { splashReady = true; }, 5800);

function splashEnter() {
    if (!splashReady) return;
    if (splashDone) return;
    splashDone = true;
    const splash = document.getElementById('splash');
    const appEl = document.getElementById('app');

    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.cssText = 'position:fixed;inset:0;z-index:99999;pointer-events:none;';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    // Soft disperse animation effect ----------------------------------------------------------------------------------------
    const count = 180;
    const particles = Array.from({ length: count }, () => {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        return {
            x, y,
            startX: x,
            startY: y,
            r: 2 + Math.random() * 5,
            vx: (Math.random() * 2.5 + 0.5) * (Math.random() > 0.3 ? 1 : -0.3),
            vy: -(Math.random() * 1.2 + 0.1),
            opacity: 0.6 + Math.random() * 0.4,
            delay: Math.random() * 0.4,
            speed: 0.7 + Math.random() * 0.5
        };
    });

    // Reveal app after disperse ----------------------------------------------------------------------------------------
    appEl.style.opacity = '1';
    appEl.style.pointerEvents = 'all';

    // full colour fill bg ----------------------------------------------------------------------------------------
    ctx.fillStyle = '#eeeae1';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    splash.style.visibility = 'hidden';

    const start = performance.now();
    const duration = 1400;

    function animate(now) {
        const elapsed = (now - start) / duration;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Shrinking background then disperse
        const bgOpacity = Math.max(0, 1 - elapsed * 2.2);
        if (bgOpacity > 0) {
            ctx.globalAlpha = bgOpacity;
            ctx.fillStyle = '#eeeae1';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        // Drifting particles
        let anyVisible = false;
        particles.forEach(p => {
            const t = Math.max(0, (elapsed - p.delay) * p.speed);
            if (t <= 0) { anyVisible = true; return; }

            p.x += p.vx * 1.8;
            p.y += p.vy * 1.2;

            const pOpacity = Math.max(0, p.opacity * (1 - t * 1.1));
            if (pOpacity > 0) {
                const radius = p.r * (1 - t * 0.4);
                ctx.globalAlpha = pOpacity;
                const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, Math.max(0.1, radius * 2.5));
                grad.addColorStop(0, 'rgba(238,234,225,0.9)');
                grad.addColorStop(1, 'rgba(238,234,225,0)');
                ctx.beginPath();
                ctx.arc(p.x, p.y, Math.max(0.1, radius * 2.5), 0, Math.PI * 2);
                ctx.fillStyle = grad;
                ctx.fill();
                anyVisible = true;
            }
        });

        ctx.globalAlpha = 1;

        if (elapsed < 1 || anyVisible) requestAnimationFrame(animate);
        else canvas.remove();
    }

    requestAnimationFrame(animate);
}

window.addEventListener('keydown', splashEnter);
document.getElementById('splash').addEventListener('click', splashEnter);