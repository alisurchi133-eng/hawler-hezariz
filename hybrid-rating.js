import {getFirestore,doc,runTransaction,deleteDoc} from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js';
const modes=['rapid','blitz','untimed'];
const key=(u,m)=>'shaband-trainingSession-v1:'+u.uid+':'+m;
const target=(a,u,m)=>doc(getFirestore(a),'trainingRatings',u.uid,'modes',m);
const valid=r=>r&&Number.isSafeInteger(r.elo)&&r.elo>=100&&Number.isSafeInteger(r.games)&&r.games>=0;
function local(u,m){try{return JSON.parse(localStorage.getItem(key(u,m)))}catch{return null}}
// Existing cloud record wins on migration; never overwrite a newer record silently.
export async function syncRatings(a,u){if(!u||u.isAnonymous)return;await Promise.all(modes.map(async m=>{const old=local(u,m);const r=await runTransaction(getFirestore(a),async t=>{const d=target(a,u,m),s=await t.get(d);if(s.exists())return s.data();if(valid(old)){t.set(d,old);return old}return null});if(valid(r)){const current=local(u,m);if(JSON.stringify(current)===JSON.stringify(old)){if(valid(old)&&JSON.stringify(old)!==JSON.stringify(r))localStorage.setItem(key(u,m)+':backup',JSON.stringify(old));localStorage.setItem(key(u,m),JSON.stringify(r));}}}));}
export async function saveRating(a,u,m,base,next){if(!u||u.isAnonymous||!modes.includes(m)||!valid(next))return;await runTransaction(getFirestore(a),async t=>{const d=target(a,u,m),s=await t.get(d);if(s.exists()){const r=s.data();if(r.elo!==base.elo||r.games!==base.games)throw Error('Training rating conflict; local result retained');}t.set(d,next)});}
export async function deleteRatings(a,u){await Promise.all(modes.map(m=>deleteDoc(target(a,u,m))));}
