document.addEventListener('DOMContentLoaded', () => {
    alert("PortCity Tanıtım Sitesine Hoş Geldiniz");

    const links = document.querySelectorAll('.nav-link');
    const path = window.location.pathname.split("/").pop() || "index.html";

    links.forEach(link => {
        if(link.getAttribute('href') === path) link.classList.add('active');

        link.addEventListener('mouseover', () => {
            if(!link.classList.contains('active')) link.style.color = 'var(--primary)';
        });

        link.addEventListener('mouseout', () => {
            if(!link.classList.contains('active')) link.style.color = '';
        });
    });

    const themeBtn = document.getElementById('theme-toggle');
    if(themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
        });
    }

    const activityList = document.getElementById('activity-list');
    const info = document.getElementById('info-box');
    if(activityList) {
        const items = [
            { t: "Tekne Turu", d: "PortCity koylarını keşfedin." },
            { t: "Dalış Deneyimi", d: "Sualtı canlılığı ile tanışın." },
            { t: "Marina Restoranları", d: "Eşsiz lezzetleri tadın." },
            { t: "Gün Batımı Yürüyüşü", d: "Kordon boyunda romantik anlar." }
        ];

        items.forEach(obj => {
            const li = document.createElement('li');
            li.textContent = obj.t;
            li.addEventListener('mouseover', () => info.textContent = obj.d);
            li.addEventListener('mouseout', () => info.textContent = "Detaylı bilgi için üzerine geliniz.");
            activityList.appendChild(li);
        });
    }

    const lBtn = document.getElementById('like-btn');
    const lDisplay = document.getElementById('like-count');
    let count = 0;
    if(lBtn) {
        lBtn.addEventListener('click', () => {
            count++;
            lDisplay.textContent = count;
        });
    }

    const form = document.getElementById('contact-form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const n = document.getElementById('name').value;
            const em = document.getElementById('email').value;
            const m = document.getElementById('message').value;

            if(!n || !em || !m) {
                alert("Lütfen tüm alanları doldurun.");
            } else {
                alert("Mesajınız başarıyla gönderildi");
                form.reset();
            }
        });
    }

    const thumbs = document.querySelectorAll('.gallery-thumb');
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('lightbox-image');
    let curIdx = 0;

    if(thumbs.length > 0) {
        const urls = Array.from(thumbs).map(i => i.src);

        thumbs.forEach((t, i) => {
            t.addEventListener('click', () => {
                curIdx = i;
                modalImg.src = urls[curIdx];
                modal.style.display = "flex";
            });
        });

        document.getElementById('lightbox-close').addEventListener('click', () => modal.style.display = "none");
        
        document.getElementById('lightbox-next').addEventListener('click', () => {
            curIdx = (curIdx + 1) % urls.length;
            modalImg.src = urls[curIdx];
        });

        document.getElementById('lightbox-prev').addEventListener('click', () => {
            curIdx = (curIdx - 1 + urls.length) % urls.length;
            modalImg.src = urls[curIdx];
        });
    }
});