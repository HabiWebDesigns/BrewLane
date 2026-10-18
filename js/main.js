/* ===== EDIT THIS CONFIG TO RE-BRAND THE WHOLE PAGE ===== */
const SITE = {
  brand: ["Brew","lane"],
  nav: [["Features","#features"],["Pricing","#pricing"],["Stories","#stories"],["FAQ","#faq"]],
  navCta: "Start my box",
  hero: {badge:"☕ Freshly roasted, delivered weekly", title:"Better coffee, <em>brewed</em> at your doorstep.", text:"Small-batch beans from Philippine highland farms, roasted to order and shipped within 48 hours. Skip, pause or cancel anytime.", cta:"Get my first bag", cta2:"See plans", emoji:"☕",
    stats:[["12k+","Happy drinkers"],["48h","Roast to door"],["4.9★","Average rating"]]},
  features:{title:"Why people switch to Brewlane", text:"Everything you need for a great cup, nothing you don’t.", items:[
    ["🌱","Single-origin beans","Traceable lots from Benguet, Sagada and Mt. Apo growers paid fairly."],
    ["🔥","Roasted to order","Your bag is roasted after you order, never sitting on a shelf."],
    ["🚚","Flexible delivery","Weekly, biweekly or monthly. Skip a week with one tap."],
    ["🎯","Tuned to your taste","Take a 30-second quiz and we match roast, grind and notes."]]},
  pricing:{title:"Simple plans", text:"Free shipping on every plan. Switch whenever you like.", yearlyDiscount:0.2, currency:"₱", plans:[
    {name:"Starter",price:490,note:"1 bag / month",perks:["250g single-origin","Free shipping","Skip anytime"]},
    {name:"Daily Brew",price:890,note:"2 bags / month",perks:["2 × 250g beans","Choose your grind","Priority roasting","Free shipping"],pop:true},
    {name:"Office",price:2190,note:"6 bags / month",perks:["6 × 250g beans","Brewing guide for teams","Dedicated support","Free shipping"]}]},
  stories:{title:"Loved by coffee fans", text:"A few words from our community.", items:[
    ["The Daily Brew plan changed my mornings. The Sagada roast is unreal.","Mika R.","Designer, Quezon City"],
    ["Fresh every time, and skipping a delivery takes seconds.","Jon D.","Developer, Cavite"],
    ["We ordered for the whole office and nobody went back to instant.","Ana L.","Ops lead, Makati"]]},
  faq:[
    ["How fresh is the coffee?","Every bag is roasted after you order and ships within 48 hours."],
    ["Can I change or cancel my plan?","Yes. Pause, skip or cancel from your account anytime, no fees."],
    ["Do you offer whole bean and ground?","Both. Pick from espresso to French press when you set up your box."],
    ["Where do you deliver?","Nationwide across the Philippines, usually in 2–4 days."]],
  cta:{title:"Ready for a better cup?", text:"Join the list and get 15% off your first box.", button:"Claim offer", ok:"You’re in! Check your inbox for your code."},
  footer:"© 2026 Brewlane Coffee Roasters. Template demo – replace with your business."
};
const THEMES={Ember:["#c2410c","#f59e0b"],Ocean:["#0369a1","#22d3ee"],Forest:["#15803d","#a3e635"],Berry:["#be185d","#fb923c"],Ink:["#4338ca","#a78bfa"]};
/* ======================================================= */
const $=id=>document.getElementById(id),root=document.documentElement;
const store={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
const money=n=>SITE.pricing.currency+Math.round(n).toLocaleString("en-US");

document.title=SITE.brand.join("")+" – Landing Page Template";
$("logo").innerHTML=SITE.brand[0]+"<span>"+SITE.brand[1]+"</span>";
$("links").innerHTML=SITE.nav.map(n=>`<a href="${n[1]}">${n[0]}</a>`).join("");
$("navcta").textContent=SITE.navCta;
const h=SITE.hero;
$("hero").innerHTML=`<div class="rv"><span class="badge">${h.badge}</span><h1>${h.title}</h1><p>${h.text}</p>
<div class="cta"><a class="btn" href="#join">${h.cta}</a><a class="btn ghost" href="#pricing">${h.cta2}</a></div>
<div class="stats">${h.stats.map(s=>`<div><b>${s[0]}</b><span>${s[1]}</span></div>`).join("")}</div></div>
<div class="art rv" aria-hidden="true">${h.emoji}</div>`;
const F=SITE.features;$("ft").textContent=F.title;$("fs").textContent=F.text;
$("fg").innerHTML=F.items.map(i=>`<div class="card rv"><div class="ic">${i[0]}</div><h3>${i[1]}</h3><p>${i[2]}</p></div>`).join("");
const P=SITE.pricing;$("pt").textContent=P.title;$("ps").textContent=P.text;$("save").textContent="save "+P.yearlyDiscount*100+"%";
let yearly=false;
function renderPlans(){
  $("pg").innerHTML=P.plans.map(p=>{const v=yearly?p.price*(1-P.yearlyDiscount):p.price;
  return `<div class="card price ${p.pop?"pop":""}">${p.pop?'<span class="tag">Most popular</span>':""}<h3>${p.name}</h3>
  <div class="amt">${money(v)}<small>/mo</small></div><small style="color:var(--muted)">${p.note}${yearly?" · billed yearly":""}</small>
  <ul>${p.perks.map(x=>`<li>${x}</li>`).join("")}</ul><a class="btn ${p.pop?"":"ghost"}" href="#join">Choose ${p.name}</a></div>`}).join("");
}
$("bill").onclick=e=>{yearly=!yearly;e.currentTarget.setAttribute("aria-pressed",yearly);renderPlans()};
renderPlans();
const T=SITE.stories;$("tt").textContent=T.title;$("ts").textContent=T.text;
$("tg").innerHTML=T.items.map(i=>`<div class="card quote rv"><p>“${i[0]}”</p><b>${i[1]}</b><br><small>${i[2]}</small></div>`).join("");
$("fq").innerHTML=SITE.faq.map(f=>`<details><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join("");
$("ct").textContent=SITE.cta.title;$("cs").textContent=SITE.cta.text;$("cb").textContent=SITE.cta.button;
$("foot").textContent=SITE.footer;
$("form").onsubmit=e=>{e.preventDefault();$("msg").textContent=SITE.cta.ok;$("email").value=""};

function setAccent(n){const t=THEMES[n];if(!t)return;root.style.setProperty("--accent",t[0]);root.style.setProperty("--accent2",t[1]);store.set("accent",n)}
$("theme").innerHTML=Object.keys(THEMES).map(n=>`<button title="${n}" aria-label="${n} theme" style="background:${THEMES[n][0]}" data-n="${n}"></button>`).join("");
$("theme").onclick=e=>{if(e.target.dataset.n)setAccent(e.target.dataset.n)};
setAccent(store.get("accent")||"Ember");
$("mode").onclick=()=>{const dark=root.dataset.mode?root.dataset.mode==="dark":matchMedia("(prefers-color-scheme:dark)").matches;
  root.dataset.mode=dark?"light":"dark";store.set("mode",root.dataset.mode)};
const sm=store.get("mode");if(sm)root.dataset.mode=sm;

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".rv").forEach(el=>io.observe(el));
