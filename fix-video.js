const fs = require('fs');
let html = fs.readFileSync('C:/Users/tofik/Downloads/rabt-landing/index.html', 'utf8');

const oldCard = slider.innerHTML = testimonials.map((t, i) => \
          <div class="vt-card \" data-idx="\" onclick="activateCard(this)">
            <div class="vt-thumb"><img src="\" alt="\" onerror="this.style.display='none'"><div class="vt-play">&#9654;</div></div>
            <div class="vt-info"><div class="vt-stars-sm">\</div><div class="vt-name">\</div><div class="vt-skin">\</div><div class="vt-quote">"\"</div><div class="vt-prod">\</div></div>
          </div>\).join('');

const newCard = slider.innerHTML = testimonials.map((t, i) => \
          <div class="vt-card \" data-idx="\" data-video="\" onclick="activateCard(this)">
            <div class="vt-thumb">
              \
              <div class="vt-play">&#9654;</div>
            </div>
            <div class="vt-info"><div class="vt-stars-sm">\</div><div class="vt-name">\</div><div class="vt-skin">\</div><div class="vt-quote">"\"</div><div class="vt-prod">\</div></div>
          </div>\).join('');

if (html.includes(oldCard)) {
  html = html.replace(oldCard, newCard);
  fs.writeFileSync('C:/Users/tofik/Downloads/rabt-landing/index.html', html, 'utf8');
  console.log('Done! Video support added.');
} else {
  console.log('Old text not found!');
  // Show what the script looks like
  const idx = html.indexOf('slider.innerHTML');
  console.log('Context:', html.substring(idx, idx+300));
}
