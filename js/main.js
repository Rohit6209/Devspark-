var WA="910000000000",MAIL="hello@devspark.com";
document.getElementById("wab").href="https://wa.me/"+WA;
var IO=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){en.target.classList.add("in");IO.unobserve(en.target)}})},{threshold:.12});
function obs(){document.querySelectorAll(".rv:not(.in)").forEach(function(el){IO.observe(el)})}
document.querySelectorAll("section h2,.sub,.card,details,.tw,.cta,form").forEach(function(el){el.classList.add("rv")});obs();
var CI=new IntersectionObserver(function(es){es.forEach(function(en){if(!en.isIntersecting)return;var b=en.target,t=+b.dataset.c,i=0;var id=setInterval(function(){i+=t/40;if(i>=t){i=t;clearInterval(id)}b.textContent=Math.round(i)},30);CI.unobserve(b)})});
document.querySelectorAll("[data-c]").forEach(function(b){CI.observe(b)});
var W=["stunning websites","viral Reels & Shorts","cinematic stories","online stores"],wi=0,ci=0,del=0,te=document.getElementById("ty");
if(te)(function tp(){var w=W[wi];ci+=del?-1:1;te.textContent=w.slice(0,ci);var s=del?40:90;if(!del&&ci==w.length){del=1;s=1400}else if(del&&ci==0){del=0;wi=(wi+1)%W.length;s=300}setTimeout(tp,s)})();
var pb=document.createElement("div");pb.id="pb";document.body.appendChild(pb);
addEventListener("scroll",function(){var h=document.documentElement;pb.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+"%"},{passive:true});
document.addEventListener("pointermove",function(e){var c=e.target.closest&&e.target.closest(".card");if(c){var r=c.getBoundingClientRect();c.style.setProperty("--mx",e.clientX-r.left+"px");c.style.setProperty("--my",e.clientY-r.top+"px")}});
var tg=document.getElementById("tg"),nl=document.getElementById("nl");
tg.onclick=function(){var r=document.documentElement,d=r.dataset.theme||(matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");r.dataset.theme=d=="dark"?"light":"dark"};
document.getElementById("bg").onclick=function(){nl.classList.toggle("open")};
nl.onclick=function(){nl.classList.remove("open")};