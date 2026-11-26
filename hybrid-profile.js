import {getFirestore,doc,getDocFromServer,setDoc,deleteDoc} from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js';
const target=(app,u)=>doc(getFirestore(app),'profiles',u.uid);
const valid=p=>p&&typeof p.displayName==='string'&&p.displayName.length>0&&p.displayName.length<=50&&['beginner','player','advanced','master'].includes(p.level);
async function legacy(app,u){const m=await import('https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js');return [m,m.ref(m.getDatabase(app),'users/'+u.uid+'/profile')];}
export async function readProfile(app,u){try{const s=await getDocFromServer(target(app,u));if(s.exists()&&valid(s.data()))return s.data();}catch(e){console.warn('Firestore profile read',e);}const [m,r]=await legacy(app,u);const p=(await m.get(r)).val();if(valid(p)){try{await setDoc(target(app,u),p);}catch(e){console.warn('Profile migration',e);}}return p;}
export async function saveProfile(app,u,p){if(!valid(p))throw Error('Invalid profile');const [m,r]=await legacy(app,u);await m.set(r,p);await setDoc(target(app,u),p);}
export async function deleteProfile(app,u){await deleteDoc(target(app,u));}
