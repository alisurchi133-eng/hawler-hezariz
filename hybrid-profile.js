import {getFirestore,doc,getDocFromServer,setDoc,deleteDoc} from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js';
const target=(app,u)=>doc(getFirestore(app),'profiles',u.uid);
const valid=p=>p&&typeof p.displayName==='string'&&p.displayName.length>0&&p.displayName.length<=50&&['beginner','player','advanced','master'].includes(p.level);
let legacyQueue=Promise.resolve();
async function legacy(app,u){const m=await import('https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js');return [m,m.ref(m.getDatabase(app),'users/'+u.uid+'/profile')];}
function legacyOperation(app,u,temporary,fn){
 if(!temporary)return legacy(app,u).then(([m,r])=>fn(m,r));
 const job=legacyQueue.then(async()=>{const [m,r]=await legacy(app,u);const db=m.getDatabase(app);m.goOnline(db);try{return await fn(m,r);}finally{m.goOffline(db);}});
 legacyQueue=job.catch(()=>{});return job;
}
export async function readProfile(app,u,temporary=false){try{const s=await getDocFromServer(target(app,u));if(s.exists()&&valid(s.data()))return s.data();}catch(e){console.warn('Firestore profile read',e);}const p=await legacyOperation(app,u,temporary,async(m,r)=>(await m.get(r)).val());if(valid(p)){try{await setDoc(target(app,u),p);}catch(e){console.warn('Profile migration',e);}}return p;}
export async function saveProfile(app,u,p,temporary=false){if(!valid(p))throw Error('Invalid profile');await legacyOperation(app,u,temporary,(m,r)=>m.set(r,p));await setDoc(target(app,u),p);}
export async function deleteProfile(app,u){await deleteDoc(target(app,u));}
