(()=>{
const champion=location.pathname.endsWith('/champion.html');
const source=document.getElementById(champion?'roomCode':'inviteCode');
const original=document.getElementById(champion?'copy':'copyInvite');
if(!source||!original)return;
const panel=document.createElement('section');panel.dir='rtl';panel.style.cssText='border:1px solid #806735;border-radius:14px;padding:14px;margin:12px 0;background:#25221a;color:#f0d58a';
const heading=document.createElement('strong');heading.style.cssText='display:block;text-align:center;font-size:18px;margin-bottom:16px';heading.textContent='♚ بانگهێشتی هاوڕێ';panel.append(heading);
const label=document.createElement('div');label.textContent='کۆدی ژووری یاری';label.style.cssText='text-align:center;font-size:13px';panel.append(label);const codeBox=document.createElement('div');codeBox.dir='ltr';codeBox.style.cssText='border:1px solid #d4af37;border-radius:10px;padding:12px;margin:8px 0;color:#d4af37;font-size:18px;font-weight:bold;text-align:center;overflow-wrap:anywhere';panel.append(codeBox);const codeButton=document.createElement('button');codeButton.type='button';codeButton.textContent='▣ کۆپیکردنی کۆد';codeButton.style.cssText='width:100%;margin-bottom:16px';panel.append(codeButton);const linkLabel=document.createElement('div');linkLabel.textContent='لینکی ڕاستەوخۆی یاری';panel.append(linkLabel);const field=document.createElement('input');field.readOnly=true;field.dir='ltr';field.style.cssText='width:100%;box-sizing:border-box;margin:12px 0;font-size:13px;display:block;max-width:100%;padding:10px;background:#191713;color:#fff;border:1px solid #806735;border-radius:8px';field.placeholder='سەرەتا ژوور دروست بکە';panel.append(field);
const row=document.createElement('div');row.style.cssText='display:flex;flex-wrap:wrap;gap:8px;justify-content:center';panel.append(row);
const status=document.createElement('p');status.setAttribute('role','status');panel.append(status);
const url=()=>{const code=(champion?source.textContent:source.value).trim();if(!/^[a-f0-9]{32}$/.test(code))return '';const u=new URL(champion?'champion.html':'friend.html',location.href);u.searchParams.set(champion?'room':'invite',code);return u.href;};
const buttons=[];function add(label,action){const b=document.createElement('button');b.type='button';b.textContent=label;b.onclick=async()=>{const u=url();if(!u)return;try{await action(u);status.textContent=label.startsWith('کۆپی')?'کۆپی کرا ✓':''}catch(e){if(e.name!=='AbortError')status.textContent='نەتوانرا؛ لینکەکە بە دەستی کۆپی بکە';}};row.append(b);buttons.push(b);if(label==='کۆپیکردنی لینک')b.style.cssText='width:100%;background:#d4af37;color:#191713;font-weight:bold;padding:12px;border-radius:8px';}
add('کۆپیکردنی لینک',async u=>{if(navigator.clipboard){try{await navigator.clipboard.writeText(u);return}catch(e){}}field.select();if(!document.execCommand('copy'))throw Error('copy'); });
codeButton.onclick=async()=>{const code=(champion?source.textContent:source.value).trim();try{await navigator.clipboard.writeText(code);status.textContent='کۆد کۆپی کرا ✓'}catch(e){if(!champion){source.select();if(document.execCommand('copy')){status.textContent='کۆد کۆپی کرا ✓';return;}}status.textContent='کۆپی نەکرا؛ کۆدەکە بە دەستی کۆپی بکە';}};
add('WhatsApp',u=>{window.open('https://wa.me/?text='+encodeURIComponent(u),'_blank','noopener,noreferrer')});
add('Telegram',u=>{window.open('https://t.me/share/url?url='+encodeURIComponent(u),'_blank','noopener,noreferrer')});
add('Share',async u=>{if(navigator.share)await navigator.share({title:'SHABAND',url:u});else if(navigator.clipboard)await navigator.clipboard.writeText(u);else{field.select();if(!document.execCommand('copy'))throw Error('copy');}});
original.insertAdjacentElement('afterend',panel);original.hidden=true;
// Friend setup is hidden once play starts; keep the sharing panel outside it.
if(!champion){const setup=document.getElementById('friendSetup');if(setup)setup.insertAdjacentElement('afterend',panel);}
function refresh(){const u=url();panel.hidden=!u||document.body.classList.contains('live');codeBox.textContent=(champion?source.textContent:source.value).trim();codeButton.disabled=!u;if(field.value!==u)field.value=u;buttons.forEach(b=>b.disabled=!u);}
source.addEventListener('input',refresh);new MutationObserver(refresh).observe(source,{childList:true,subtree:true,characterData:true});setInterval(refresh,500);refresh();
})();
