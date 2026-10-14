var sel=document.getElementById("s");
S.forEach(function(x){var o=document.createElement("option");o.textContent=x[1];sel.appendChild(o)});
var q=new URLSearchParams(location.search).get("service");if(q)sel.value=q;
function txt(){return "Hi DevSpark! I'm "+n.value+" ("+e.value+").\nService: "+s.value+"\n"+m.value}
function send(t){if(!document.getElementById("f").reportValidity())return;var b=txt();if(t=="wa")window.open("https://wa.me/"+WA+"?text="+encodeURIComponent(b),"_blank");else location.href="mailto:"+MAIL+"?subject="+encodeURIComponent("Project Enquiry: "+s.value)+"&body="+encodeURIComponent(b)}