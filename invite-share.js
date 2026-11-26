(()=>{
const champion=location.pathname.endsWith('/champion.html');
const source=document.getElementById(champion?'roomCode':'inviteCode');
const original=document.getElementById(champion?'copy':'copyInvite');
if(!source||!original)return;
const panel=document.createElement('section');panel.dir='rtl';panel.style.cssText='border:1px solid #806735;border-radius:14px;padding:14px;margin:12px 0;background:#25221a;color:#f0d58a';
const heading=document.createElement('strong');heading.textContent='♚ بانگهێشتی هاوڕێ';panel.append(heading);
const field=document.createElement('input');field.readOnly=true;field.dir='ltr';field.style.cssText='width:100%;box-sizing:border-box;margin:12px 0;font-size:13px';field.placeholder='سەرەتا ژوور دروست بکە';panel.append(field);
const row=document.createElement('div');row.style.cssText='display:flex;flex-wrap:wrap;gap:8px;justify-content:center';panel.append(row);
const status=document.createElement('p');status.setAttribute('role','status');panel.append(status);
const url=()=>{const code=(champion?source.textContent:source.value).trim();if(!/^[a-f0-9]{32}$/.test(code))return '';const u=new URL(champion?'champion.html':'index.html',location.href);u.searchParams.set(champion?'room':'invite',code);return u.href;};
const buttons=[];function add(label,action){const b=document.createElement('button');b.type='button';b.textContent=label;b.onclick=async()=>{const u=url();if(!u)return;try{await action(u);status.textContent=label.startsWith('کۆپی')?'کۆپی کرا ✓':''}catch(e){if(e.name!=='AbortError')status.textContent='نەتوانرا؛ لینکەکە بە دەستی کۆپی بکە';}};row.append(b);buttons.push(b);}
add('کۆپیکردنی لینک',async u=>{if(navigator.clipboard){try{await navigator.clipboard.writeText(u);return}catch(e){}}field.select();if(!document.execCommand('copy'))throw Error('copy'); });
if(!champion)add('کۆپیکردنی کۆد',async()=>{const code=source.value.trim();if(navigator.clipboard){try{await navigator.clipboard.writeText(code);return}catch(e){}}source.select();if(!document.execCommand('copy'))throw Error('copy');});
add('WhatsApp',u=>{window.open('https://wa.me/?text='+encodeURIComponent(u),'_blank','noopener,noreferrer')});
add('Telegram',u=>{window.open('https://t.me/share/url?url='+encodeURIComponent(u),'_blank','noopener,noreferrer')});
add('Share',async u=>{if(navigator.share)await navigator.share({title:'SHABAND',url:u});else if(navigator.clipboard)await navigator.clipboard.writeText(u);else{field.select();if(!document.execCommand('copy'))throw Error('copy');}});
original.insertAdjacentElement('afterend',panel);original.hidden=true;
// Friend setup is hidden once play starts; keep the sharing panel outside it.
if(!champion){const setup=document.getElementById('friendSetup');if(setup)setup.insertAdjacentElement('afterend',panel);}
function refresh(){const u=url();if(field.value!==u)field.value=u;buttons.forEach(b=>b.disabled=!u);}
source.addEventListener('input',refresh);new MutationObserver(refresh).observe(source,{childList:true,subtree:true,characterData:true});setInterval(refresh,500);refresh();
})();
