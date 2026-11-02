(function(){
var b=document.querySelector('.burger'),n=document.querySelector('nav.m');
if(b)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
var io='IntersectionObserver' in window?new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12}):null;
document.querySelectorAll('.rv').forEach(function(el){io?io.observe(el):el.classList.add('in')});
var lb=document.querySelector('.lb');
document.querySelectorAll('[data-lb]').forEach(function(a){a.addEventListener('click',function(ev){ev.preventDefault();lb.querySelector('img').src=a.getAttribute('href');lb.classList.add('on')})});
if(lb){lb.addEventListener('click',function(){lb.classList.remove('on')});document.addEventListener('keydown',function(k){if(k.key==='Escape')lb.classList.remove('on')})}
var f=document.getElementById('wa-form');
if(f)f.addEventListener('submit',function(ev){ev.preventDefault();var d=new FormData(f);
var t='Hi '+f.dataset.biz+'! I am '+d.get('name')+'. '+(d.get('what')?('I am interested in: '+d.get('what')+'. '):'')+(d.get('msg')||'');
window.open('https://wa.me/'+f.dataset.wa+'?text='+encodeURIComponent(t.trim()),'_blank','noopener')});
})();