'use strict';
const $=id=>document.getElementById(id), audio=$('player');let objectUrl;
function status(s){$('status').textContent=s;}
function search(base){const q=$('q').value.trim();if(!q){status('ناوێک بنووسە.');return;}window.open(base+encodeURIComponent(q),'_blank','noopener,noreferrer');}
$('yt').onclick=()=>search('https://www.youtube.com/results?search_query=');$('sp').onclick=()=>search('https://open.spotify.com/search/');
function source(url){audio.pause();audio.src=url;audio.load();status('دەنگ ئامادەیە بۆ تاقیکردنەوە.');}
function release(){if(objectUrl){URL.revokeObjectURL(objectUrl);objectUrl=null;}}
$('local').onchange=()=>{const f=$('local').files[0];if(!f)return;release();objectUrl=URL.createObjectURL(f);source(objectUrl);};
$('load').onclick=()=>{try{const u=new URL($('url').value.trim());if(u.protocol!=='https:')throw Error();release();source(u.href);}catch{status('لینکی HTTPS ـی دروست بنووسە.');}};
$('play').onclick=()=>audio.play().catch(()=>status('دەنگ نەکرایەوە؛ فایل یان لینک بپشکنە.'));$('pause').onclick=()=>audio.pause();audio.addEventListener('playing',()=>status('دەنگ لێدەدرێت.'));audio.addEventListener('pause',()=>status('دەنگ ڕاگیرا.'));audio.addEventListener('error',()=>status('سەرچاوەی دەنگ بەردەست نییە یان پشتگیری ناکرێت.'));
