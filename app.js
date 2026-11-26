
const $=id=>document.getElementById(id);
const T=(n,s,l,r)=>{const R={};(r||"").split("|").forEach(e=>{const i=e.indexOf("="),m=e.slice(0,i).match(/^(\d+)(\.+)/);if(m)R[(m[1]-1)*2+(m[2].length>1?1:0)]=e.slice(i+1)});return{n,s,R,m:l.replace(/\d+\./g," ").trim().split(/\s+/)}};
const OPS=[
T("Italian (Pianissimo)","w","1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.c3 Nf6 5.d3 d6 6.O-O O-O 7.Re1 a6 8.Bb3 Ba7 9.h3 h6 10.Nbd2 Re8 11.Nf1 Be6 12.Bxe6 Rxe6 13.Ng3","3.Bc4=بیشۆپ ئاماژە دەکاتە f7، لاوازترین خانەی ڕەش، و قەڵاگرتن ئامادە دەکات|4.c3=ئامادەکاری بۆ d4 و ناوەندێکی گەورە|5.d3=یاریی هێمن: e4 دەپارێزێت و پلانی خاو دەست پێ دەکات|11.Nf1=ئەسپ بەرەو g3 دەچێت بۆ فشار لەسەر لای شا"),
T("Ruy Lopez Breyer","w","1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 d6 8.c3 O-O 9.h3 Nb8 10.d4 Nbd7 11.Nbd2 Bb7 12.Bc2 Re8 13.Nf1 Bf8 14.Ng3 g6","3.Bb5=فشار لەسەر Nc6 کە پاوەنی e5 دەپارێزێت|6.Re1=قەڵا پشتگیریی e4 دەکات بۆ ئامادەکاریی d4|9.h3=ڕێگری لە ...Bg4 و پینکردنی ئەسپی f3|10.d4=کردنەوەی ناوەند لە کاتی گونجاودا"),
T("Najdorf: English Attack","w","1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6 6.Be3 e5 7.Nb3 Be6 8.f3 Be7 9.Qd2 O-O 10.O-O-O Nbd7 11.g4 b5 12.g5 b4 13.Ne2 Ne8 14.f4 a5 15.f5","6.Be3=بیشۆپ d4 دەپارێزێت و ڕێگا بۆ f3 و Qd2 خۆش دەکات|8.f3=پاوەنی e4 دەپارێزێت و g4 ئامادە دەکات|10.O-O-O=شا بۆ لای وەزیر دەچێت و پاوەنەکانی لای شا بۆ هێرش ئازاد دەبن|11.g4=هێرشی پاوەن؛ g5 دواتر Nf6 دەرەوە دەکات|15.f5=بیشۆپی e6 دەخاتە ژێر هێرش"),
T("Alapin vs Sicilian","w","1.e4 c5 2.c3 Nf6 3.e5 Nd5 4.d4 cxd4 5.Nf3 Nc6 6.cxd4 d6 7.Bc4 Nb6 8.Bb3 dxe5 9.Nxe5 Nxe5 10.dxe5 Qxd1+ 11.Kxd1","2.c3=ئامادەکاری بۆ d4 بەبێ تیۆریی قورس|3.e5=ئەسپی f6 ناچار دەکات بجوڵێت|4.d4=ناوەندی گەورەی c3 و d4|11.Kxd1=وەزیرەکان گۆڕدرانەوە، شا لە ناوەند مەترسیی نییە"),
T("QGD Orthodox","w","1.d4 d5 2.c4 e6 3.Nc3 Nf6 4.Bg5 Be7 5.e3 O-O 6.Nf3 h6 7.Bh4 b6 8.cxd5 Nxd5 9.Bxe7 Qxe7 10.Nxd5 exd5 11.Rc1 Be6 12.Qa4 c5 13.Qa3 Rc8 14.Bb5 a6 15.dxc5 bxc5","4.Bg5=Nf6 دەپینێت و فشار لەسەر d5 زیاد دەکات|7.Bh4=بیشۆپ پەیوەندیی pin دەپارێزێت|8.cxd5=ڕەش ناچار دەکات بگۆڕێت بۆ کەمکردنەوەی فشار|11.Rc1=قەڵا بۆ c-file و فشار لەسەر c7"),
T("Catalan","w","1.d4 Nf6 2.c4 e6 3.g3 d5 4.Bg2 Be7 5.Nf3 O-O 6.O-O dxc4 7.Qc2 a6 8.a4 Bd7 9.Qxc4 Bc6 10.Bg5 Bd5 11.Qc1 Nbd7 12.Nc3","3.g3=ئامادەکاری بۆ Bg2 و فشاری درێژخایەن|4.Bg2=بیشۆپ لەسەر دووگۆشەی گەورە فشار لەسەر d5 و b7 دەکات|7.Qc2=ئامادەکاری بۆ گەڕاندنەوەی پاوەنی c4|9.Qxc4=پاوەنی c4 گەڕایەوە و سپی چالاکە"),
T("English (Reversed Sicilian)","w","1.c4 e5 2.Nc3 Nf6 3.Nf3 Nc6 4.g3 d5 5.cxd5 Nxd5 6.Bg2 Nb6 7.O-O Be7 8.a3 O-O 9.b4 Be6 10.Bb2","1.c4=کۆنترۆڵی d5 بەبێ کردنەوەی ناوەند|4.g3=ئامادەکاری بۆ بیشۆپی g2|6.Bg2=فشار لەسەر دووگۆشەی گەورە و b7|9.b4=پاوەن بۆ فەزای لای وەزیر و Bb2 ئامادە دەکات"),
T("Scotch Game","w","1.e4 e5 2.Nf3 Nc6 3.d4 exd4 4.Nxd4 Nf6 5.Nxc6 bxc6 6.e5 Qe7 7.Qe2 Nd5 8.c4 Ba6 9.b3 g5 10.Bb2 Bg7 11.Nd2","3.d4=ناوەند زوو دەکرێتەوە و یاریی کراوە دەبێت|4.Nxd4=ئەسپ بۆ ناوەند و پاوەنی e5ی ڕەش نامێنێت|6.e5=ئەسپی f6 دەرەوە دەکات|8.c4=ئەسپی d5 دەرەوە دەکات و فەزا دەگرێت"),
T("Slav Main Line","w","1.d4 d5 2.c4 c6 3.Nf3 Nf6 4.Nc3 dxc4 5.a4 Bf5 6.e3 e6 7.Bxc4 Bb4 8.O-O Nbd7 9.Qe2 Bg6 10.e4 O-O 11.Bd3 Bh5 12.e5 Nd5","4.Nc3=پشتگیریی ناوەند و ئامادەکاری بۆ e4|5.a4=ڕێگری لە ...b5 تا پاوەنی c4 بپارێزرێت|7.Bxc4=پاوەنی c4 گەڕایەوە و بیشۆپ چالاکە|12.e5=ئەسپی f6 دەرەوە دەکات و فشار لەسەر لای شا"),
T("Petroff Main Line","w","1.e4 e5 2.Nf3 Nf6 3.Nxe5 d6 4.Nf3 Nxe4 5.d4 d5 6.Bd3 Nc6 7.O-O Be7 8.c4 Nb4 9.Be2 O-O 10.Nc3 Bf5 11.a3 Nxc3 12.bxc3 Nc6 13.Re1","3.Nxe5=سپی پاوەنی e5 دەگرێت؛ ڕەش دژەهێرش دەکات لەبری بەرگری|4.Nf3=ئەسپ دەگەڕێتەوە چونکە d6 هێرشی دەکاتە سەری|5.d4=ناوەند دەگرێت و ئەسپی e4 دەخاتە ژێر فشار|8.c4=فشار لەسەر d5 بۆ شکاندنی ناوەندی ڕەش"),
T("Vienna Gambit","w","1.e4 e5 2.Nc3 Nf6 3.f4 d5 4.fxe5 Nxe4 5.Nf3 Be7 6.d4 O-O 7.Bd3 f5 8.exf6 Bxf6 9.O-O","2.Nc3=پاوەنی e4 دەپارێزێت و f4 ئامادە دەکات|3.f4=گامبیت: ناوەند و f-file دەکاتەوە|4.fxe5=پاوەنێکی ڕەش دەگیرێت|6.d4=ناوەندی گەورە و گەشەپێدانی خێرا"),
T("vs Nimzowitsch Defense","w","1.e4 Nc6 2.Nf3 d6 3.d4 Nf6 4.Nc3 Bg4 5.Be3 e6 6.Be2 Be7 7.O-O O-O 8.h3 Bh5 9.a3","2.Nf3=ئەسپ e5 دەپارێزێت و ناوەند ئامادە دەکات|3.d4=ناوەندی گەورە و فەزای زیاتر|5.Be3=بیشۆپ d4 دەپارێزێت|8.h3=بیشۆپی g4 دەخاتە بەردەم پرسیار: بگەڕێتەوە یان بگۆڕێت"),
T("Nimzo-Larsen Attack","w","1.b3 e5 2.Bb2 Nc6 3.e3 d5 4.Bb5 Bd6 5.f4 Qh4+ 6.g3 Qe7 7.Nf3 Nf6 8.Bxc6+ bxc6","1.b3=ئامادەکاری بۆ بیشۆپی b2 لەسەر دووگۆشەی گەورە|2.Bb2=فشار لەسەر پاوەنی e5|4.Bb5=فشار لەسەر Nc6 کە e5 دەپارێزێت|8.Bxc6+=پاوەنی ڕەش دووجار دەکات و پۆزیسیۆنی ڕەش دەشێوێنێت"),
T("Sicilian Najdorf (Be2)","b","1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6 6.Be2 e5 7.Nb3 Be7 8.O-O O-O 9.Be3 Be6 10.f4 Qc7 11.a4 Nbd7 12.Kh1 Rac8","1...c5=دژی d4 بە پاوەنی c؛ ناسیمێتریا و دژەهێرش|5...a6=کۆنترۆڵی b5 و ئامادەکاری بۆ ...e5 و ...b5|6...e5=ناوەند دەگرێت و Nd4 دەرەوە دەکات|9...Be6=بیشۆپ گەشە دەکات و ...d5 ئامادە دەکات"),
T("Sicilian Sveshnikov","b","1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e5 6.Ndb5 d6 7.Bg5 a6 8.Na3 b5 9.Nd5 Be7 10.Bxf6 Bxf6 11.c3 O-O 12.Nc2 Bg5 13.a4 bxa4 14.Rxa4 a5","5...e5=ناوەند دەگرێت و Nd4 دەرەوە دەکات؛ d6 لاوازە بەڵام دژەهێرش چالاکە|7...a6=ئەسپی b5 دەخاتە ژێر هێرش|8...b5=ڕێگری لە گەڕانەوەی ئەسپ بۆ b5 و فەزای لای وەزیر دەگرێت|11...O-O=قەڵاگرتن، شا پارێزراو دەبێت"),
T("Sicilian Dragon (Yugoslav)","b","1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 g6 6.Be3 Bg7 7.f3 O-O 8.Qd2 Nc6 9.Bc4 Bd7 10.O-O-O Rc8 11.Bb3 Ne5 12.h4 h5 13.Bg5 Rc5 14.f4 Nc4 15.Bxc4 Rxc4","5...g6=فیانکێتۆ: بیشۆپ بۆ g7|6...Bg7=بیشۆپ لەسەر دووگۆشەی گەورە فشار لەسەر ناوەند دەکات|10...Rc8=قەڵا بۆ c-file بۆ دژەهێرشی لای وەزیر|12...h5=هێرشی پاوەن لەسەر لای شای سپی"),
T("French Winawer","b","1.e4 e6 2.d4 d5 3.Nc3 Bb4 4.e5 c5 5.a3 Bxc3+ 6.bxc3 Ne7 7.Qg4 Qc7 8.Qxg7 Rg8 9.Qxh7 cxd4 10.Ne2 Nbc6 11.f4 Bd7 12.Qd3 dxc3 13.Qxc3","1...e6=ناوەندی d5 دەپارێزێت|3...Bb4=ئەسپی c3 دەپینێت و فشار لەسەر e4|4...c5=پاوەنی c5 ناوەندی سپی دەشکێنێت|5...Bxc3+=پاوەنەکانی c ی سپی دووجار دەکات"),
T("Caro-Kann Classical","b","1.e4 c6 2.d4 d5 3.Nc3 dxe4 4.Nxe4 Bf5 5.Ng3 Bg6 6.h4 h6 7.Nf3 Nd7 8.h5 Bh7 9.Bd3 Bxd3 10.Qxd3 e6 11.Bf4 Ngf6 12.O-O-O Be7 13.Ne4 Nxe4 14.Qxe4 Qd5 15.Qe2 O-O","1...c6=ناوەندی پتەو و d5 بە پاوەنی پارێزراو|4...Bf5=بیشۆپ پێش پاوەنەکان چالاک دەکرێت|6...h6=g5 کۆنترۆڵ دەکات و بۆ ...Bh7 ئامادەیە|10...e6=ناوەند پتەو دەکات و بیشۆپی f8 ئازاد دەبێت"),
T("Berlin (Ruy Lopez)","b","1.e4 e5 2.Nf3 Nc6 3.Bb5 Nf6 4.O-O Nxe4 5.d4 Nd6 6.Bxc6 dxc6 7.dxe5 Nf5 8.Qxd8+ Kxd8 9.Nc3 Ke8 10.h3 Bd7 11.b3 h6 12.Bb2 Kc8 13.Rad1 b6","3...Nf6=ئەسپ بۆ هێرش لەسەر e4 لەبری بەرگری|4...Nxe4=پاوەنی e4 دەگرێت|5...Nd6=ئەسپ دەگەڕێتەوە و بیشۆپی b5 دەخاتە ئامانج|8...Kxd8=وەزیر گۆڕدرانەوە، شا لە ناوەند ئاسوودەیە"),
T("Nimzo-Indian Rubinstein","b","1.d4 Nf6 2.c4 e6 3.Nc3 Bb4 4.e3 O-O 5.Bd3 d5 6.Nf3 c5 7.O-O Nc6 8.a3 Bxc3 9.bxc3 dxc4 10.Bxc4 Qc7 11.Bd3 e5 12.Qc2 Re8","3...Bb4=ئەسپی c3 دەپینێت و کۆنترۆڵی e4|4...O-O=قەڵاگرتن و ئامادەکاری بۆ ...d5|8...Bxc3=پاوەنەکانی c ی سپی لاواز دەکات|11...e5=ناوەندی ڕەش چالاک دەبێت"),
T("Queen’s Indian (Petrosian)","b","1.d4 Nf6 2.c4 e6 3.Nf3 b6 4.g3 Ba6 5.b3 Bb4+ 6.Bd2 Be7 7.Bg2 c6 8.Bc3 d5 9.Ne5 Nfd7 10.Nxd7 Nxd7 11.Nd2 O-O 12.O-O Rc8 13.e4 dxe4","3...b6=بیشۆپی وەزیر بۆ دووگۆشەی گەورە|4...Ba6=فشار لەسەر c4 و ئامادەکاری بۆ ...d5|5...Bb4+=شاک؛ سپی ناچار دەکات بۆ Bd2|7...c6=ناوەند پتەو دەکات بۆ ...d5"),
T("King’s Indian Classical","b","1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 O-O 6.Be2 e5 7.O-O Nc6 8.d5 Ne7 9.Ne1 Nd7 10.Be3 f5 11.f3 f4 12.Bf2 g5 13.a4 Ng6 14.Nd3 Nf6 15.c5 Rf7","2...g6=فیانکێتۆی شا|4...d6=ناوەند ئامادە دەکات بۆ ...e5|6...e5=پاوەن بەرامبەر ناوەندی سپی|10...f5=هێرشی پاوەن لەسەر لای شا و ...f4 دواتر"),
T("Grünfeld Exchange","b","1.d4 Nf6 2.c4 g6 3.Nc3 d5 4.cxd5 Nxd5 5.e4 Nxc3 6.bxc3 Bg7 7.Nf3 c5 8.Rb1 O-O 9.Be2 cxd4 10.cxd4 Qa5+ 11.Qd2 Qxd2+ 12.Bxd2 b6","3...d5=هێرش لەسەر ناوەندی سپی و c4|4...Nxd5=پاوەنی d5 دەگرێت و ناوەندی سپی دەکرێتەوە|7...c5=هێرش دەکاتە سەر d4|10...Qa5+=شاک؛ ڕێگا بۆ گۆڕینی وەزیر دەکاتەوە")
];
OPS.push(T("London System","w","1.d4 d5 2.Nf3 Nf6 3.Bf4 e6 4.e3 c5 5.c3 Nc6 6.Nbd2 Bd6 7.Bg3 O-O"),
T("Evans Gambit","w","1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.b4 Bxb4 5.c3 Ba5 6.d4 exd4 7.O-O"),
T("Scandinavian Defense","b","1.e4 d5 2.exd5 Qxd5 3.Nc3 Qa5 4.d4 Nf6 5.Nf3 c6"),
T("Legal Trap","w","1.e4 e5 2.Nf3 Nc6 3.Bc4 d6 4.Nc3 Bg4 5.h3 Bh5 6.Nxe5 Bxd1 7.Bxf7+ Ke7 8.Nd5#","6.Nxe5=قوربانیدانی وەزیر بۆ مات"),T("Scholar’s Mate","w","1.e4 e5 2.Bc4 Nc6 3.Qh5 Nf6 4.Qxf7#","4.Qxf7#=مات لە f7"),T("Blackburne Shilling Trap","b","1.e4 e5 2.Nf3 Nc6 3.Bc4 Nd4 4.Nxe5 Qg5 5.Nxf7 Qxg2 6.Rf1 Qxe4+ 7.Be2 Nf3#","7...Nf3#=مات بە ئەسپ"),T("Stafford Gambit Trap","b","1.e4 e5 2.Nf3 Nf6 3.Nxe5 Nc6 4.Nxc6 dxc6 5.d3 Bc5 6.Bg5 Nxe4 7.Bxd8 Bxf2+ 8.Ke2 Bg4#","6...Nxe4=قوربانیدانی وەزیر"),T("Englund Gambit Trap","b","1.d4 e5 2.dxe5 Nc6 3.Nf3 Qe7 4.Bf4 Qb4+ 5.Bd2 Qxb2 6.Bc3 Bb4 7.Qd2 Bxc3 8.Qxc3 Qc1#","8...Qc1#=مات بە وەزیر"),T("Fool’s Mate","b","1.f3 e5 2.g4 Qh4#","2...Qh4#=مات لە دوو جولە"),T("Elephant Trap","b","1.d4 d5 2.c4 e6 3.Nc3 Nf6 4.Bg5 Nbd7 5.cxd5 exd5 6.Nxd5 Nxd5 7.Bxd8 Bb4+ 8.Qd2 Bxd2+ 9.Kxd2 Kxd8","7...Bb4+=شاک و گەڕاندنەوەی وەزیر"),T("Lasker Trap","b","1.d4 d5 2.c4 e5 3.dxe5 d4 4.e3 Bb4+ 5.Bd2 dxe3 6.Bxb4 exf2+ 7.Ke2 fxg1=N+","7...fxg1=N+=گۆڕینی پاوەن بۆ ئەسپ بە شاک"));
const GL={k:"♚",q:"♛",r:"♜",b:"♝",n:"♞",p:"♟"};
const PN={p:"پاوەن",n:"ئەسپ",b:"بیشۆپ",r:"قەڵا",q:"وەزیر",k:"شا"};
const V={p:1,n:3,b:3,r:5,q:9,k:0};
const k=s=>s.replace(/[+#]/g,"");
let S={mode:"learn",flip:false,sel:null,hint:null,bad:null,last:null,pending:false,lock:false,ok:0,no:0,tried:false,ply:0,timer:0};
const hist=()=>{const h=S.g.history({verbose:true});return h.length?h[h.length-1]:null};
const res=(t,c)=>{$("res").textContent=t;$("res").className=c||""};
const ask=t=>{$("ask").textContent=t};

var trainingSession=null, trainingFinished=false, trainingExplicit=false;
function trainingKey(){const u=authInstance?.currentUser;return 'shaband-trainingSession-v1:'+ (u&&!u.isAnonymous?u.uid:'guest')+':'+($('timeMode').value==='10+0'?'rapid':$('timeMode').value==='0'?'untimed':'blitz');}
function trainingRecord(key){try{const r=JSON.parse(localStorage.getItem(key));if(r&&Number.isFinite(r.elo)&&Number.isInteger(r.games))return r;}catch(e){}return {elo:({beginner:600,player:1000,advanced:1600,master:2200})[$('profileLevel').value]||600,games:0};}
function trainingInfo(){const r=trainingRecord(trainingKey());$('ratingInfo').textContent='Elo: '+r.elo+' · Games: '+r.games+' · '+(r.games<10?'Placement ±25':'Rank ±8');}
function trainingControls(on){for(const id of ['undoGame','bestGame','coach','engineChoice','level','color','timeMode','ratingMode','editApply','loadFen','reviewGame'])$(id).disabled=on;$('resignTraining').disabled=!on;}
function trainingAbort(){trainingSession=null;trainingFinished=false;trainingControls(false);$('clockTop').hidden=$('clockBottom').hidden=true;}
function trainingAbandon(){if(trainingSession?.active){trainingFinish(0);cancelEngine();}trainingAbort();}
function trainingStart(){if(!trainingExplicit)return;trainingExplicit=false;const mode=$('ratingMode').value,tm=$('timeMode').value;if(mode==='free'&&tm==='0')return;const key=trainingKey(),r=trainingRecord(key),parts=tm.split('+').map(Number);trainingSession={active:true,rated:mode!=='free',mode,key,r,opponent:Math.max(600,Math.min(2800,r.elo)),timed:tm!=='0',w:parts[0]*60000,b:parts[0]*60000,inc:(parts[1]||0)*1000,turn:S.g.turn(),stamp:Date.now()};if(trainingSession.rated){$('coach').value='off';$('engineChoice').value='local';}else $('coach').value='off';trainingControls(true);trainingTick();}
function trainingFinish(score){if(!trainingSession?.active)return;const t=trainingSession;t.active=false;trainingFinished=true;trainingControls(false);if(t.rated){const k=t.r.games<10?25:8;const delta=t.mode==='adaptive'?Math.round(2*k*(score-1/(1+10**((t.opponent-t.r.elo)/400)))):Math.round(k*(2*score-1));const r={elo:Math.max(100,t.r.elo+delta),games:t.r.games+1};try{localStorage.setItem(t.key,JSON.stringify(r));}catch(e){$('ratingInfo').textContent='Storage unavailable';return;}trainingInfo();$('ratingInfo').textContent+=' · '+(r.elo-t.r.elo>=0?'+':'')+(r.elo-t.r.elo);}}
function trainingClock(){if(!trainingSession?.timed)return;for(const [id,c] of [['clockTop',S.side==='w'?'b':'w'],['clockBottom',S.side]]){const el=$(id),n=Math.ceil(Math.max(0,trainingSession[c])/1000);el.hidden=false;el.classList.toggle('active',trainingSession.active&&trainingSession.turn===c);el.textContent=(c==='w'?'♔ ':'♚ ')+Math.floor(n/60)+':'+String(n%60).padStart(2,'0');}}
function trainingTick(){if(trainingFinished)return false;if(!trainingSession?.active||!trainingSession.timed)return true;const t=trainingSession,now=Date.now();t[t.turn]-=Math.max(0,now-t.stamp);t.stamp=now;trainingClock();if(t[t.turn]<=0){const loser=t.turn;trainingFinish(S.g.insufficient_material()?0.5:loser===S.side?0:1);cancelEngine();S.lock=true;ask('کات تەواو بوو');return false;}return true;}
function trainingMove(c){if(!trainingSession?.active||!trainingSession.timed)return;const t=trainingSession;t[c]-=Math.max(0,Date.now()-t.stamp);t[c]=Math.max(0,t[c])+t.inc;t.turn=S.g.turn();t.stamp=Date.now();trainingClock();}
function load(i){
 const o=OPS[i],g=new Chess(),ok=[];
 for(const m of o.m){if(!g.move(m))break;ok.push(m)}
 S.o=o;S.side=o.s;S.flip=o.s==="b";S.line=ok;S.cut=ok.length<o.m.length;
 restart();
}
function restart(){
 trainingAbandon();
 cancelEngine(); S.side=S.o.s;
 if(S.mode==="game")return newGame();
 clearTimeout(S.timer);
 Object.assign(S,{g:new Chess(),sel:null,hint:null,bad:null,last:null,pending:false,lock:false,ok:0,no:0,tried:false,ply:0});
 $("fix").classList.remove("on");res("");
 S.mode==="learn"?go(0):next();
}
function go(n){
 n=Math.max(0,Math.min(n,S.line.length));
 S.g=new Chess();for(let i=0;i<n;i++)S.g.move(S.line[i]);
 S.ply=n;S.last=hist();S.sel=null;render();
}
function play(s){S.last=S.g.move(s);if(S.last) shSound(S.last);S.sel=S.hint=S.bad=null}
function next(){
 const n=S.g.history().length;
 if(n>=S.line.length){S.lock=true;ask("ئۆپێنینگەکە تەواو بوو ✓");res(`ڕاست: ${S.ok} · هەڵە: ${S.no}`,"ok");return render()}
 if(S.g.turn()===S.side){
  S.lock=false;S.tried=false;
  ask(`جولەی ${(n>>1)+1}${S.side==="b"?" (ڕەش)":""} — تۆ چی دەکەیت؟`);render();
 }else{
  S.lock=true;render();
  S.timer=setTimeout(()=>{play(S.line[n]);next()},650);
 }
}
function tap(sq){
 if(S.mode==="online")return onlineTap(sq);
 if(S.mode==="puzzle")return puzzleTap(sq);
 if(S.mode==="game")return gameTap(sq);
 if(S.mode!=="exam"||S.lock||S.pending)return;
 if(S.sel){
  const mv=S.g.moves({square:S.sel,verbose:true}).find(m=>m.to===sq);
  if(mv)return attempt(mv);
 }
 const p=S.g.get(sq);
 S.sel=(p&&p.color===S.side&&sq!==S.sel)?sq:null;S.hint=null;render();
}
function attempt(mv){
 const n=S.g.history().length,w=S.line[n];
 if(k(mv.san)===k(w)){
  if(!S.tried)S.ok++;
  play(w);res("ڕاستە ✓ — "+why(n)[0],"ok");next();
 }else wrong(mv.san,n);
}
function hang(g){
 let best=0,out=null;
 for(const m of g.moves({verbose:true})){
  if(!m.captured)continue;
  g.move({from:m.from,to:m.to,promotion:"q"});
  let gain=V[m.captured];
  if(g.moves({verbose:true}).some(r=>r.to===m.to&&r.captured))gain-=V[m.piece];
  g.undo();
  if(gain>best){best=gain;out=m}
 }
 return out;
}
function wrong(san,n){
 if(!S.tried){S.no++;S.tried=true}
 const cur=S.line.slice(0,n).map(k).join(),me=k(san);
 const alt=OPS.filter(o=>o!==S.o&&o.m.length>n&&o.m.slice(0,n).map(k).join()===cur&&k(o.m[n])===me).map(o=>o.n);
 const mv=S.g.move(san);S.last=mv;S.bad=mv.to;S.sel=S.hint=null;S.pending=true;
 let t=`هەڵەیە ✗ — ${san} لە هێڵی «${S.o.n}» نییە.`;
 if(alt.length)t+=` ئەمە ئۆپێنینگی ترە: ${alt.slice(0,3).join("، ")}.`;
 else{
  const h=hang(S.g);
  t+=h?` دەرئەنجام: بەرامبەر دەتوانێت بە ${h.san} ${PN[h.captured]} بگرێت و قازانجی ماددی بکات.`
      :" پارچەیەکی بێ پارێزراو نییە، بەڵام پۆزیسیۆنەکە لە هێڵی ئۆپێنینگەکە دەرچووە.";
 }
 res(t,"bad");$("fix").classList.add("on");render();$("bd").classList.remove("sk");void $("bd").offsetWidth;$("bd").classList.add("sk");
}
function fix(showIt){
 if(S.mode==="game"){S.g.undo();S.pending=false;S.bad=null;S.last=hist();$("fix").classList.remove("on");res("");if(showIt){play(S.correct);gameNext();}else {S.lock=false;render();}return;}
 S.g.undo();S.pending=false;S.bad=null;S.last=hist();
 $("fix").classList.remove("on");
 if(showIt){const w=S.line[S.g.history().length];play(w);res("وەڵامی ڕاست: "+w);next()}
 else{res("");render()}
}
function why(i){
 const g=new Chess();for(let j=0;j<i;j++)g.move(S.line[j]);
 const m=g.move(S.line[i]);if(!m)return ['جولە نایاساییە',1];
 const names={p:'جوندی',n:'ئەسپ',b:'بیشۆپ',r:'ڕوخ',q:'وەزیر',k:'شا'};
 const f='abcdefgh',x=f.indexOf(m.to[0]),y=+m.to[1];
 const dirs={n:[[1,2],[2,1],[-1,2],[-2,1],[1,-2],[2,-1],[-1,-2],[-2,-1]],b:[[1,1],[1,-1],[-1,1],[-1,-1]],r:[[1,0],[-1,0],[0,1],[0,-1]],q:[[1,1],[1,-1],[-1,1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],k:[[1,1],[1,-1],[-1,1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],p:[[1,m.color==='w'?1:-1],[-1,m.color==='w'?1:-1]]};
 let attacks=[],guards=[],center=[];for(const [dx,dy] of dirs[m.promotion||m.piece]){for(let z=1;z<=('brq'.includes(m.piece)?7:1);z++){let a=x+dx*z,b=y+dy*z;if(a<0||a>7||b<1||b>8)break;let sq=f[a]+b,p=g.get(sq);if(p){(p.color===m.color?guards:attacks).push(names[p.type]+' '+sq);break;}if(['e4','d4','e5','d5'].includes(sq))center.push(sq);}}
 let t=names[m.piece]+' لە '+m.from+' بۆ '+m.to+' دەجوڵێت.';
 if(m.captured)t+=' '+names[m.captured]+' دەگرێت.';
 if(attacks.length)t+=' هێرش دەکاتە سەر '+attacks.join(' و ')+'.';
 if(guards.length)t+=' پاراستنی '+guards.join(' و ')+' دەکات.';
 if(center.length)t+=' کۆنترۆڵی خانەکانی '+center.join(' و ')+' دەکات.';
 if(g.in_check())t+=' شاک دەدات.';
 if(m.flags.includes('k')||m.flags.includes('q'))t+=' بە قەڵاگرتن شا دەگوازرێتەوە و ڕوخ چالاک دەبێت.';
 if(S.o.R[i])t+=' '+S.o.R[i];
 return [t,0];
}
function showWhy(){
 const el=$("why"),i=S.ply-1;el.className="why lr";
 if(i<0){el.innerHTML="<b>دەستپێک</b>«دواتر» بکە یان کلیک لەسەر جولەیەک بکە بۆ بینینی هۆکارەکەی.";return}
 const[t,g]=why(i);if(g)el.className+=" gen";
 el.innerHTML=`<b>${(i>>1)+1}${i%2?"...":"."} ${S.line[i]}</b>${t}`;
}
function hint(){
 if(S.mode!=="exam"||S.lock||S.pending)return;
 const w=k(S.line[S.g.history().length]);
 const m=S.g.moves({verbose:true}).find(m=>k(m.san)===w);
 if(m){S.hint=m.from;S.tried=true;render()}
}
function render(){
 if(S.g) document.getElementById("shCheck").textContent=S.g.in_checkmate()?"شابەند بوو!":S.g.in_check()?"شاپەنگ!":"";
 document.body.classList.remove("learn","exam","game","online","puzzle","review"); document.body.classList.add(S.mode);
 document.querySelectorAll("[data-m]").forEach(b=>b.classList.toggle("on",b.dataset.m===S.mode));
 const bd=S.g.board(),tg=S.sel?S.g.moves({square:S.sel,verbose:true}).map(m=>m.to):[];
 let h="";
 for(let r=0;r<8;r++)for(let c=0;c<8;c++){
  const rr=S.flip?7-r:r,cc=S.flip?7-c:c,sq="abcdefgh"[cc]+(8-rr),p=bd[rr][cc];
  let cl="s "+((rr+cc)%2?"d":"l");
  if(S.last&&(S.last.from===sq||S.last.to===sq))cl+=" lm";
  if(S.sel===sq)cl+=" sl";if(S.hint===sq)cl+=" ht";if(S.bad===sq)cl+=" bd2";if(tg.includes(sq))cl+=" tg";
  h+=`<div class="${cl}" data-q="${sq}">${p?`<span class="p ${p.color}">${GL[p.type]}\uFE0E</span>`:""}${c===0?`<i class="rk">${8-rr}</i>`:""}${r===7?`<i class="fl">${"abcdefgh"[cc]}</i>`:""}</div>`;
 }
 $("bd").innerHTML=h;$("pgi").style.width=(S.mode==="game"?0:S.g.history().length/S.line.length*100)+"%";
 $("continueRow").hidden=!(S.mode==="exam"&&!S.pending&&S.g.history().length===S.line.length); $("continueGame").disabled=S.g.game_over(); $("continueNote").textContent=S.g.game_over()?"ئەم هێڵە بە کۆتایی یاری دەگات؛ ئۆپێنینگێکی تر هەڵبژێرە.":"هەمان پۆزیشەن دەپارێزرێت؛ ئاستی Elo لە بەشی یاری هەڵبژێرە.";
 const learn=S.mode==="learn",list=learn?S.line:S.g.history();
 $("mv").innerHTML=list.map((m,i)=>(i%2?"":`<b>${(i>>1)+1}.</b>`)+`<span data-i="${i}" class="${learn&&i+1===S.ply?"cur":""}">${m}</span>`).join("");
 if(learn){showWhy();ask(`${S.ply} / ${S.line.length}`);res(S.cut?"هێڵەکە کورت کراوەتەوە چونکە جولەیەکی نایاسایی تێدا بوو.":"")}
 else if(S.mode!=="game") $("sc").textContent=`ڕاست: ${S.ok} · هەڵە: ${S.no}`;
}

[["w","سپی — تۆ سپی دەکەیت"],["b","ڕەش — تۆ ڕەش دەکەیت"]].forEach(([s,l])=>{
 const og=document.createElement("optgroup");og.label=l;
 OPS.forEach((o,i)=>{if(i<OPS.length-8&&o.s===s)og.append(new Option(o.n,i))});
 $("op").append(og);
});
const trapGroup=document.createElement("optgroup");trapGroup.label="تراپەکان — Traps";OPS.slice(-8).forEach((o,i)=>trapGroup.append(new Option(o.n+" · "+(o.s==="w"?"سپی":"ڕەش"),OPS.length-8+i)));$("op").append(trapGroup);
let worker=null, epoch=0, boot=null, pending=null, localSource=null;
function cancelEngine(){epoch++; if(pending||boot){const p=pending;pending=null;const q=boot;boot=null;if(worker)worker.terminate();worker=null;if(p)p.reject(Error('cancelled'));if(q)q.reject(Error('cancelled'));}}
function resetWorker(err){const p=pending,q=boot;pending=boot=null;if(worker)worker.terminate();worker=null;if(p)p.reject(err);if(q)q.reject(err);}
async function initEngine(){if(worker&&!boot)return worker;if(boot)throw Error("Engine starting");let last;for(const file of ['./stockfish-19-lite-single.js','./stockfish-19-asm.js']){const token=epoch;try{await new Promise((resolve,reject)=>{let w;try{w=new Worker(file)}catch(e){reject(e);return}worker=w;let timer=setTimeout(()=>resetWorker(Error('UCI timeout')),30000);let identity='',options=[];boot={reject:e=>{clearTimeout(timer);reject(e)},promise:null};w.onerror=()=>resetWorker(Error('Worker failed'));w.onmessage=e=>{if(worker!==w)return;for(const raw of String(e.data).split('\n')){const line=raw.trim();if(line.startsWith('id name '))identity=line.slice(8);if(line.startsWith('option '))options.push(line);if(line==='uciok'&&boot){if(!/stockfish/i.test(identity)){resetWorker(Error('Invalid engine identity'));return}w.postMessage('isready')}else if(line==='readyok'&&boot){clearTimeout(timer);boot=null;w.options=options;w.identity=identity;$('engineStatus').textContent=identity+' · UCI ready';resolve()}else if(pending){if(line==='readyok'&&pending.stage==='ready'){pending.stage='search';w.postMessage('position fen '+pending.fen);w.postMessage(pending.go)}else if(line.startsWith('info ')){const m=line.match(/score (cp|mate) (-?\d+)/);if(m)pending.score=m[1]==='cp'?+m[2]:Math.sign(+m[2])*100000;}else if(line.startsWith('bestmove ')&&pending.stage==='search'){const p=pending;pending=null;p.resolve({move:line.split(/\s+/)[1],score:p.score});}}}};w.postMessage('uci')});return worker}catch(e){last=e;if(token!==epoch)throw Error('cancelled');}}throw last||Error('Engine unavailable');}
async function localEngine(full=false,only=''){const token=epoch,fen=S.g.fen();const w=await initEngine();if(token!==epoch)throw Error('cancelled');if(pending)throw Error('Engine busy');const elo=trainingSession?.active&&trainingSession.rated?trainingSession.opponent:+$('level').value;const skill=full||elo===9999?20:Math.max(0,Math.min(20,Math.round((elo-800)/100)));return new Promise((resolve,reject)=>{const timer=setTimeout(()=>resetWorker(Error('Search timeout')),20000);pending={fen,stage:'ready',go:'go movetime '+(full?1200:250)+(only?' searchmoves '+only:''),score:null,resolve:x=>{clearTimeout(timer);resolve(x)},reject:e=>{clearTimeout(timer);reject(e)}};const limited=!full&&elo>=1320&&elo<=3190&&w.options?.some(x=>x.includes('name UCI_Elo'));w.postMessage('setoption name UCI_LimitStrength value '+limited);if(limited)w.postMessage('setoption name UCI_Elo value '+Math.round(elo));else w.postMessage('setoption name Skill Level value '+skill);w.postMessage('isready');});}
$('engineFile').closest('label')?.setAttribute('hidden','');$('engineFile').disabled=true;
async function getJSON(url){const c=new AbortController();const t=setTimeout(()=>c.abort(),20000);try{const r=await fetch(url,{signal:c.signal});if(!r.ok)throw Error('HTTP '+r.status);return await r.json()}finally{clearTimeout(t)}}
async function engine(full=false,only=''){
 const fen=S.g.fen();
 if($('engineChoice').value==='local'||localSource){const a=await localEngine(full,only);if(S.g.fen()!==fen)throw Error('cancelled');if(!S.g.moves({verbose:true}).some(x=>x.from+x.to+(x.promotion||'')===a.move))throw Error('Invalid UCI move');return a;}
 if(only)throw Error('Coach requires local Stockfish');
 const token=epoch;const a=await getJSON('https://stockfish.online/api/s/v2.php?fen='+encodeURIComponent(fen)+'&depth=15');if(token!==epoch||S.g.fen()!==fen)throw Error('cancelled');const m=(a.bestmove||'').split(' ')[1];if(!a.success||!S.g.moves({verbose:true}).some(x=>x.from+x.to+(x.promotion||'')===m))throw Error('Online engine returned no legal move');$('engineStatus').textContent='Stockfish Online · full strength';return {move:m,score:null};
}
async function database(kind){const fen=S.g.fen();const el=$('dbResult');el.textContent='چاوەڕوان بە…';try{const url=kind==='end'?'https://tablebase.lichess.ovh/standard?fen=': 'https://explorer.lichess.ovh/masters?fen=';const a=await getJSON(url+encodeURIComponent(fen));el.textContent=(a.moves||[]).slice(0,12).map(m=>kind==='end'?m.san+' : '+m.category:m.san+' : '+(m.white+m.draws+m.black)+' games').join(' | ')||'هیچ داتایەک نییە';}catch(e){el.textContent='داتا بار نەبوو: '+e.message;}}
function uciMove(x){return {from:x.slice(0,2),to:x.slice(2,4),promotion:x[4]||'q'}}
function engineError(e){if(S.mode!=='game'||e?.message==='cancelled')return;$('engineStatus').textContent='Engine unavailable — no fallback';S.lock=false;ask('Stockfish بار نەبوو: '+(e?.message||'Worker error')+' — دووبارە هەوڵ بدە.');render();}
function newGame(){trainingAbort();cancelEngine();clearTimeout(S.timer);Object.assign(S,{g:new Chess(),side:$('color').value,flip:$('color').value==='b',sel:null,hint:null,bad:null,last:null,lock:false,pending:false,base:0});$('fix').classList.remove('on');res('');trainingStart();gameNext();}
async function gameNext(){if(!trainingTick())return;S.lock=true;render();if(S.g.game_over()){trainingFinish(S.g.in_checkmate()?(S.g.turn()===S.side?0:1):0.5);ask(S.g.in_checkmate()?(S.g.turn()===S.side?'کۆمپیوتەر بردیەوە':'تۆ بردتەوە'):'یاری یەکسان بوو');return;}if(S.g.turn()===S.side){S.lock=false;ask('نۆرەی تۆیە');return;}ask('Stockfish بیر دەکاتەوە…');try{const a=await engine();if(S.mode!=='game'||!trainingTick())return;if(!playLegal(a.move))throw Error();gameNext();}catch(e){engineError(e);}}
function playLegal(x){if(!x||x.length<4)return false;const m=S.g.move(uciMove(x));if(!m)return false;S.last=m;shSound(m);trainingMove(m.color);S.sel=S.hint=S.bad=null;return true;}
async function gameTap(sq){if(!trainingTick())return;if(S.lock||S.pending||S.g.turn()!==S.side)return;let m=S.sel&&S.g.moves({square:S.sel,verbose:true}).find(x=>x.to===sq);if(!m){let p=S.g.get(sq);S.sel=p&&p.color===S.side?sq:null;render();return;}if(m.promotion){let p=prompt('q / r / b / n','q');if(!['q','r','b','n'].includes(p))return;m.promotion=p;}if($('coach').value==='on'&&($('engineChoice').value==='local'||localSource)){S.lock=true;ask('شیکردنەوەی جولە');try{let best=await engine(true);let actual=await engine(true,m.from+m.to+(m.promotion||''));if(best.score!==null&&actual.score!==null&&best.score-actual.score>=180&&best.move!==m.from+m.to+(m.promotion||'')){play(m);S.pending=true;S.lock=false;S.bad=m.to;S.correct=uciMove(best.move);res('هەڵەی ئەگەری: '+m.san+' — Engine: '+best.move,'bad');$('fix').classList.add('on');render();return;}}catch(e){engineError(e);return;}}if(!trainingTick())return;play(m);trainingMove(m.color);res('');gameNext();}
$('newgame').onclick=()=>{if(trainingSession?.active&&!confirm('یاریی ئێستا واز لێ بهێنیت؟'))return;trainingAbandon();trainingExplicit=true;newGame();};$('color').onchange=()=>{trainingAbandon();newGame();previewClocks();};$('retryEngine').onclick=()=>{if(!S.pending)gameNext()};$('undoGame').onclick=()=>{cancelEngine();if(S.pending){S.g.undo();}else{while(S.g.history().length>(S.base||0)){S.g.undo();if(S.g.turn()===S.side)break;}}S.pending=false;S.bad=S.sel=S.hint=null;S.last=hist();$('fix').classList.remove('on');res('');gameNext();};
$('bestGame').onclick=async()=>{if(S.lock||S.pending)return;S.lock=true;try{let a=await engine(true);let m=uciMove(a.move);S.hint=S.sel=m.from;res('Engine: '+a.move);S.lock=false;render();}catch(e){engineError(e);}};
$('continueGame').onclick=()=>{if(S.mode!=='exam'||S.pending||S.g.history().length!==S.line.length||S.g.game_over())return;cancelEngine();clearTimeout(S.timer);S.mode='game';S.base=S.g.history().length;S.side=S.o.s;$('color').value=S.side;S.flip=S.side==='b';S.pending=false;S.sel=S.hint=S.bad=null;res('');gameNext();};
$('exportPGN').onclick=()=>{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([S.g.pgn()],{type:'text/plain'}));a.download='SHABAND_game.pgn';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);};
$("bd").onclick=e=>{const q=e.target.closest("[data-q]");if(q)tap(q.dataset.q)};
$("mv").onclick=e=>{const q=e.target.closest("[data-i]");if(q&&S.mode==="learn")go(+q.dataset.i+1)};
$("pv").onclick=()=>go(S.ply-1);$("nx").onclick=()=>go(S.ply+1);
$("fl").onclick=()=>{if(trainingSession?.active)return;S.flip=!S.flip;render()};
$("hn").onclick=hint;$("rs").onclick=restart;
$("rt").onclick=()=>fix(0);$("sh").onclick=()=>fix(1);
document.querySelectorAll("[data-m]").forEach(b=>b.onclick=()=>{leave();cancelEngine();S.mode=b.dataset.m;restart()});
$("op").onchange=e=>{S.mode=document.body.dataset.route==='exam'?'exam':'learn';load(+e.target.value);};

const lessons=[['جوندی · Pawn','یەک خانە بەرەو پێشەوە؛ لە دەستپێک دوو خانە. بە لاوەکی دەگرێت.'],['ئەسپ · Knight','بە شێوەی L دەجوڵێت و بەسەر پارچەکاندا باز دەدات.'],['بیشۆپ · Bishop','بە هێڵی لار دەجوڵێت.'],['ڕوخ · Rook','بە ستوون و ڕیز دەجوڵێت.'],['وەزیر · Queen','بە ڕیز، ستوون و هێڵی لار دەجوڵێت.'],['شا · King','یەک خانە؛ نابێت بچێتە خانەی هێرشکراو.'],['Check / Checkmate','شاک: شا لە ژێر هێرشە. مات: هیچ جولەیەکی یاسایی بۆ ڕزگاربوون نییە.'],['Pin','پارچەیەک ناتوانێت بجوڵێت ئەگەر شای پشتەوەی بخاتە ژێر هێرش.'],['Fork','یەک پارچە هێرش دەکاتە سەر دوو ئامانج.'],['Skewer','هێرش لە پارچەی بەهادار و گرتنی پارچەی پشتەوە.'],['Castling','شا دوو خانە بەرەو ڕوخ؛ بە مەرجی نەجوڵان و نەبوونی شاک و هێرش لە ڕێگا.'],['Promotion / En passant','جوندی لە ڕیزی کۆتایی دەگۆڕدرێت؛ en passant گرتنی تایبەتی جوندییە.']];
const trainingLessons=[['Pawn','4k3/8/8/8/8/8/4P3/4K3 w - - 0 1','e2e4','جوندی لە خانەی سەرەتایی دوو خانە دەڕوات.'],['Knight','4k3/8/8/8/8/8/8/4K1N1 w - - 0 1','g1f3','ئەسپ بە شێوەی L دەجوڵێت.'],['Bishop','4k3/8/8/8/8/8/8/2B1K3 w - - 0 1','c1g5','بیشۆپ بە هێڵی لار دەڕوات.'],['Rook','4k3/8/8/8/8/8/8/R3K3 w - - 0 1','a1a7','ڕوخ بە ستوون دەڕوات.'],['Queen','4k3/8/8/8/8/8/8/3QK3 w - - 0 1','d1h5','وەزیر بە هێڵی لار و ڕاست دەڕوات.'],['King','4k3/8/8/8/8/8/8/4K3 w - - 0 1','e1f2','شا یەک خانە دەڕوات.'],['Castling','4k3/8/8/8/8/8/8/4K2R w K - 0 1','e1g1','شا و ڕوخ بە یەک جولە دەگوازنەوە.'],['En passant','4k3/8/8/3pP3/8/8/8/4K3 w - d6 0 1','e5d6','جوندی بە شێوازی تایبەت دەگیرێت.'],['Promotion','4k3/P7/8/8/8/8/8/4K3 w - - 0 1','a7a8','جوندی دەگۆڕدرێت بۆ وەزیر.'],['Pin','4k3/4n3/8/8/8/8/8/R3K3 w - - 0 1','a1e1','ڕوخ ئەسپەکە بە شا دەبەستێت.']];trainingLessons[9]=['Pin','4k3/4n3/8/8/8/8/R7/4K3 w - - 0 1','a2e2','ڕوخ ئەسپەکە بە شا دەبەستێت.'];trainingLessons.forEach((x,i)=>$('lesson').append(new Option(x[0],i)));$('startLesson').onclick=()=>startExercise(trainingLessons[+$('lesson').value]);
const puzzles=[['Mate in 1','7k/5Q2/6K1/8/8/8/8/8 w - - 0 1','mate','وەزیر خانەکانی هەڵهاتنی شا دەگرێت.'],['Knight fork','4k3/7q/8/3N4/8/8/8/4K3 w - - 0 1','d5f6','ئەسپ هەمان کات شا و وەزیر دەخاتە ژێر هێرش.'],['Back rank mate','6k1/5ppp/8/8/8/8/8/R5K1 w - - 0 1','mate','جوندییەکان ڕێگای هەڵهاتنی شا دەگرن.'],['Skewer','8/4q3/4k3/8/8/8/R7/4K3 w - - 0 1','a2e2','شا ناچارە بجوڵێت و وەزیر دەکەوێتە ژێر هێرش.'],...trainingLessons];
for(let i=0;i<8;i++){let f='abcdefgh'[i];puzzles.push(['Back rank drill '+(i+1),'6k1/5ppp/8/8/8/8/'+(i?i:'')+'R'+(7-i?7-i:'')+'/4K3 w - - 0 1','mate','ڕوخ بگەیەنە ڕیزی هەشتەم بۆ مات.']);}puzzles.forEach((x,i)=>$('puzzle').append(new Option(x[0],i)));let exercise=null;function startExercise(p){trainingAbandon();cancelEngine();clearTimeout(S.timer);exercise=p;Object.assign(S,{mode:'puzzle',g:new Chess(p[1]),side:'w',flip:false,sel:null,last:null,bad:null,hint:null,pending:false,lock:false});res('');ask(p[0]);$('puzzleInfo').textContent='جولەی گونجاو بدۆزەوە';render();} $('startPuzzle').onclick=()=>startExercise(puzzles[+$('puzzle').value]);$('puzzleNext').onclick=()=>{$('puzzle').selectedIndex=($('puzzle').selectedIndex+1)%puzzles.length;$('startPuzzle').click()};$('puzzleHint').onclick=()=>{if(exercise){$('puzzleInfo').textContent=exercise[3];let m=exercise[2]==='mate'?S.g.moves({verbose:true}).find(m=>{S.g.move(m);let ok=S.g.in_checkmate();S.g.undo();return ok}):{from:exercise[2].slice(0,2)};if(m){S.sel=m.from;render()}}};function puzzleTap(sq){if(S.lock)return;let m=S.sel&&S.g.moves({square:S.sel,verbose:true}).find(x=>x.to===sq&&(!x.promotion||x.promotion==='q'));if(!m){S.sel=S.g.get(sq)?.color==='w'?sq:null;render();return;}let p=exercise;S.g.move(m);if(p[2]==='mate'?S.g.in_checkmate():m.from+m.to===p[2]){S.last=m;S.lock=true;res('ڕاستە ✓ — '+p[3],'ok');}else{S.g.undo();res('دووبارە هەوڵ بدە — '+p[3],'bad');}S.sel=null;render();}
let editPieces={},chosen='K';const editGlyph={K:'♔',Q:'♕',R:'♖',B:'♗',N:'♘',P:'♙',k:'♚',q:'♛',r:'♜',b:'♝',n:'♞',p:'♟', '-':'×'};
function drawEditor(){let el=$('editBoard');el.replaceChildren();for(let r=8;r>=1;r--)for(let c=0;c<8;c++){let sq='abcdefgh'[c]+r,b=document.createElement('button');b.type='button';b.style.cssText='aspect-ratio:1;min-height:0;padding:0;border:0;border-radius:0;font-size:clamp(22px,6vw,40px);color:#161616;background:'+((r+c)%2?'#769656':'#eeeed2');b.textContent=editGlyph[editPieces[sq]]||'';b.setAttribute('aria-label',sq);b.onclick=()=>{if(chosen==='-')delete editPieces[sq];else editPieces[sq]=chosen;drawEditor()};el.append(b)}}
for(let p of Object.keys(editGlyph)){let b=document.createElement('button');b.textContent=editGlyph[p];b.style.fontSize='24px';b.onclick=()=>{chosen=p;for(let x of $('palette').children)x.style.outline='';b.style.outline='2px solid gold'};$('palette').append(b)}
function fillEditor(g){editPieces={};for(let r=1;r<=8;r++)for(let c of 'abcdefgh'){let p=g.get(c+r);if(p)editPieces[c+r]=p.color==='w'?p.type.toUpperCase():p.type}let f=g.fen().split(' ');$('editTurn').value=f[1];$('editCastle').value=f[2];$('editEp').value=f[3];drawEditor()}
$('editClear').onclick=()=>{editPieces={};$('editCastle').value=$('editEp').value='-';drawEditor()};$('editCurrent').onclick=()=>fillEditor(S.g);$('editStart').onclick=()=>fillEditor(new Chess());
function loadPosition(f){trainingAbandon();let g=new Chess();try{if(!g.load(f))throw Error('Invalid FEN');let p=f.split(' ')[0];if((p.match(/K/g)||[]).length!==1||(p.match(/k/g)||[]).length!==1||/[pP]/.test(p.split('/')[0]+p.split('/')[7]))throw Error('Kings / pawns invalid');let other=new Chess(f.split(' ').map((x,i)=>i===1?(x==='w'?'b':'w'):i===3?'-':x).join(' '));if(other.in_check())throw Error('Side not to move is in check');cancelEngine();clearTimeout(S.timer);Object.assign(S,{g,mode:'game',side:g.turn(),flip:g.turn()==='b',lock:false,pending:false,sel:null,last:null,bad:null,hint:null,base:0});$('color').value=S.side;$('fix').classList.remove('on');res('');render();ask('Position loaded');$('editStatus').textContent='پۆزیشەن دانرا ✓';fillEditor(g)}catch(e){$('editStatus').textContent=e.message;}}
$('loadFen').onclick=()=>loadPosition($('fenInput').value.trim());$('editApply').onclick=()=>{let rows=[];for(let r=8;r>=1;r--){let row='',n=0;for(let c of 'abcdefgh'){let p=editPieces[c+r];if(!p)n++;else{if(n)row+=n;n=0;row+=p}}if(n)row+=n;rows.push(row)}let f=rows.join('/')+' '+$('editTurn').value+' '+$('editCastle').value.trim()+' '+$('editEp').value.trim()+' 0 1';$('fenInput').value=f;loadPosition(f)};if(typeof Chess!=='undefined')fillEditor(new Chess());$('positionPhoto').onchange=e=>{let f=e.target.files[0];if(f){let im=new Image();im.style.maxWidth='100%';im.onload=()=>URL.revokeObjectURL(im.src);im.src=URL.createObjectURL(f);$('photoPreview').replaceChildren(im)}};let reviewId=0;$('reviewStop').onclick=()=>{reviewId++;cancelEngine();S.lock=false;render()};$('reviewGame').onclick=async()=>{let g=new Chess();let pgn=$('pgnInput').value.trim()||S.g.pgn();if(!g.load_pgn(pgn))return alert('Invalid PGN');let moves=g.history({verbose:true});while(g.undo()){};let old=S.g,id=++reviewId;S.lock=true;let out=$('reviewOut');out.textContent='';try{for(let m of moves){if(id!==reviewId)break;S.g=g;let best=await engine(true),actual=await engine(true,m.from+m.to+(m.promotion||''));if(id!==reviewId)break;let loss=best.score===null||actual.score===null?'N/A':Math.max(0,best.score-actual.score);out.textContent+=m.san+' | Best '+best.move+' | CP loss '+loss+'\n';g.move(m)}}catch(e){out.textContent+='Engine error: '+e.message}finally{S.g=old;S.lock=false;render()}};
if('serviceWorker' in navigator&&location.protocol==='https:')navigator.serviceWorker.register('./sw.js').catch(console.warn);

let fb,db,uid,room,side,off=[],pc,stream,session=0,busy=false,voiceOff=[];
const status=t=>$('onlineStatus').textContent=t;
let authSDK, authInstance, firebaseBoot;
async function setupFirebase(){if(firebaseBoot)return firebaseBoot;firebaseBoot=(async()=>{const [a,b,c]=await Promise.all(['app','auth','database'].map(x=>import('https://www.gstatic.com/firebasejs/10.14.1/firebase-'+x+'.js')));const app=a.initializeApp({apiKey:'AIzaSyCdj2s2WbMqxE9ncWm3iO3irFrErLiiG7Y',authDomain:'hawler-hezariz-ea338.firebaseapp.com',projectId:'hawler-hezariz-ea338',databaseURL:'https://hawler-hezariz-ea338-default-rtdb.europe-west1.firebasedatabase.app'});authSDK=b;authInstance=b.getAuth(app);db=c.getDatabase(app);fb=c;await authInstance.authStateReady();b.onAuthStateChanged(authInstance,u=>{if(room&&uid!==u?.uid)leave();uid=u?.uid;refreshProfile(u);});})().catch(e=>{firebaseBoot=null;throw e});return firebaseBoot;}
async function connect(){await setupFirebase();const u=authInstance.currentUser;if(!u||u.isAnonymous)throw Error('تکایە لە پرۆفایل بچۆ ژوورەوە');await u.reload();const token=await u.getIdTokenResult(true);if(!token.claims.email_verified)throw Error('تکایە ئیمەیڵەکەت پشتڕاست بکەرەوە');uid=u.uid;}

const ref=p=>fb.ref(db,'timedRooms/'+room+(p?'/'+p:''));
function stopVoice(){voiceOff.forEach(f=>f());voiceOff=[];if(pc)pc.close();pc=null;if(stream)stream.getTracks().forEach(t=>t.stop());stream=null;$('remoteAudio').srcObject=null;}
function leave(){document.body.classList.remove("live","room-ready");if($("liveControls"))$("liveControls").hidden=true;if($("friendSetup")&&document.body.dataset.onlineKind==="friend")$("friendSetup").hidden=false;onlineState=null;session++;off.forEach(f=>f());off=[];stopVoice();room=null;busy=false;$('chatLog').replaceChildren();}
let onlineState=null, serverOffset=0;
const nowOnline=()=>Date.now()+serverOffset;
function remaining(v){let st=v.state, w=st.w,b=st.b;if(v.black&&st.started&&!st.result){let elapsed=Math.max(0,nowOnline()-st.at);if(st.ply%2===0)w-=elapsed;else b-=elapsed;}return {w:Math.max(0,w),b:Math.max(0,b)};}
function onlineLabels(){if(!onlineState||!room)return;let v=onlineState,r=remaining(v);for(const [id,c] of [['clockTop',side==='w'?'b':'w'],['clockBottom',side]]){let n=Math.ceil(r[c]/1000);$(id).hidden=false;$(id).textContent=String(Math.floor(n/60)).padStart(2,'0')+':'+String(n%60).padStart(2,'0');}for(const [id,c] of [['playerLine',side],['opponentLine',side==='w'?'b':'w']]){$(id).querySelector('span').textContent=v[c==='w'?'wName':'bName']||(c===side?'تۆ':'چاوەڕوانی هاوڕێ');$(id).querySelector('strong').textContent='بێ ڕەیتینگ';}if(v.black&&v.state.started&&!v.state.result&&!busy&&(r.w<=0||r.b<=0)){onlineAction('timeout');}}
setInterval(onlineLabels,200);
async function enter(create){if(busy)return;busy=true;try{await connect();leave();busy=true;room=create?Array.from(crypto.getRandomValues(new Uint8Array(16)),x=>x.toString(16).padStart(2,'0')).join(''):$('inviteCode').value.trim();if(!/^[a-f0-9]{32}$/.test(room))throw Error('Invalid invite');let name=($('profileName').value||authInstance.currentUser?.displayName||'میوان').slice(0,50);if(create){let [mins,inc]=$('onlineTime').value.split('+').map(Number);await fb.set(ref(''),{white:uid,wName:name,base:mins*60000,inc:inc*1000,state:{pgn:'',ply:0,w:mins*60000,b:mins*60000,at:0,started:false,result:'',offer:''}});side='w';}else{let r=await fb.runTransaction(ref('black'),v=>v===null||v===uid?uid:undefined);if(!r.committed&&r.snapshot.val()!==uid)throw Error('Room full');side='b';await fb.set(ref('bName'),name);} $('inviteCode').value=room;cancelEngine();clearTimeout(S.timer);Object.assign(S,{mode:'online',g:new Chess(),flip:side==='b',sel:null,last:null,hint:null,bad:null,pending:false,lock:true});document.body.classList.add('room-ready');render();off.push(fb.onValue(fb.ref(db,'.info/serverTimeOffset'),s=>serverOffset=s.val()||0));off.push(fb.onValue(ref(''),snap=>{let v=snap.val();if(!v)return;let g=new Chess();if(v.state.pgn&&!g.load_pgn(v.state.pgn))return;if(onlineState&&v.state.ply>onlineState.state.ply&&g.history().length)shSound(g.history({verbose:true}).slice(-1)[0]);onlineState=v;if(document.body.dataset.onlineKind){let live=!!v.black;document.body.classList.toggle("live",live);$("liveControls").hidden=!live; if(document.body.dataset.onlineKind==="friend")$("friendSetup").hidden=live;}S.g=g;S.last=hist();S.sel=null;S.lock=!v.black||!v.state.started||!!v.state.result||g.turn()!==side||g.game_over();render();onlineLabels();ask(v.state.result|| (g.game_over()?'یاری تەواو بوو':!v.black?'چاوەڕوانی هاوڕێ':S.lock?'نۆرەی هاوڕێ':'نۆرەی تۆ'));status(v.state.offer&&v.state.offer!==side?'هاوڕێ داوای یەکسانی دەکات':v.state.result||'Online · '+side);if(v.black&&!v.state.started&&side==='b'&&!v.state.result)fb.runTransaction(ref('state'),st=>st&&!st.started?{...st,started:true,at:fb.serverTimestamp()}:undefined).catch(e=>status(e.message));},e=>status(e.message)));off.push(fb.onChildAdded(ref('chat'),s=>{let v=s.val(),p=document.createElement('p');p.textContent=(v.uid===uid?'تۆ: ':'هاوڕێ: ')+v.text;$('chatLog').append(p);}));}catch(e){leave();status(e.message);}finally{busy=false;}}
async function onlineAction(action){if(!room||!onlineState||busy)return;busy=true;try{await fb.runTransaction(ref('state'),st=>{if(!st||st.result||!st.started)return;let v={...onlineState,state:st},r=remaining(v);if(action==='timeout'){if(r.w>0&&r.b>0)return;return {...st,result:r.w<=0?'b wins on time':'w wins on time'};}if(action==='resign')return {...st,result:side==='w'?'b wins by resignation':'w wins by resignation'};if(action==='draw')return st.offer&&st.offer!==side?{...st,result:'Draw',offer:''}:{...st,offer:side};});}catch(e){status(e.message)}finally{busy=false;}}
async function onlineTap(sq){if(S.lock||busy||!room)return;let m=S.sel&&S.g.moves({square:S.sel,verbose:true}).find(x=>x.to===sq);if(!m){let p=S.g.get(sq);S.sel=p&&p.color===side?sq:null;render();return;}if(m.promotion){m.promotion=prompt('q/r/b/n','q');if(!['q','r','b','n'].includes(m.promotion))return;}let ply=S.g.history().length;S.g.move(m);let pgn=S.g.pgn(),result=S.g.in_checkmate()?side+' wins by checkmate':S.g.game_over()?'Draw':'';S.g.undo();busy=true;try{await fb.runTransaction(ref('state'),st=>{if(!st||st.ply!==ply||st.result||!st.started)return;let r=remaining({...onlineState,state:st});if(r[side]<=0)return; r[side]+=onlineState.inc;return {...st,pgn,ply:ply+1,w:Math.round(r.w),b:Math.round(r.b),at:fb.serverTimestamp(),result,offer:''};});}catch(e){status(e.message)}finally{busy=false;}}
if(document.body.dataset.route==='online'){$('onlineResign').onclick=()=>{if(confirm('واز لە یاری دەهێنیت؟'))onlineAction('resign')};$('onlineDraw').onclick=()=>onlineAction('draw');}
$('createRoom').onclick=()=>enter(true);$('joinRoom').onclick=()=>enter(false);$('copyInvite').onclick=async()=>{try{let u=new URL('friend.html',location.href);u.searchParams.set('invite',room||$('inviteCode').value);await navigator.clipboard.writeText(u.href);status('لینک کۆپی کرا')}catch(e){status(e.message)}};
$('sendChat').onclick=async()=>{let text=$('chatText').value.trim();if(!room||!text)return;try{await fb.push(ref('chat'),{uid,text:text.slice(0,500)});$('chatText').value=''}catch(e){status(e.message)}};
$('mic').onclick=async()=>{if(!room)return;if(pc){stopVoice();return;}try{let token=session;stream=await navigator.mediaDevices.getUserMedia({audio:true});if(token!==session){stopVoice();return;}pc=new RTCPeerConnection({iceServers:[{urls:'stun:stun.l.google.com:19302'}]});let peer=pc,other=side==='w'?'b':'w',queue=[];stream.getTracks().forEach(t=>peer.addTrack(t,stream));peer.ontrack=e=>{$('remoteAudio').srcObject=e.streams[0];$('remoteAudio').play().catch(()=>{status('دەنگ: دوگمەی چالاککردنی دەنگ دابگرە');});};peer.onconnectionstatechange=()=>status('Voice: '+peer.connectionState);/* preserve peer signaling until new offer */peer.onicecandidate=e=>{if(e.candidate&&pc===peer)fb.push(ref('voice/'+side+'/ice'),e.candidate.toJSON()).catch(console.warn)};voiceOff.push(fb.onChildAdded(ref('voice/'+other+'/ice'),async s=>{try{if(peer.remoteDescription)await peer.addIceCandidate(s.val());else queue.push(s.val())}catch(e){console.warn(e)}}));voiceOff.push(fb.onValue(ref('voice/'+other+'/sdp'),async s=>{let d=s.val();if(!d||pc!==peer)return;try{if(side==='b'&&d.type==='offer'&&peer.signalingState==='stable'){await peer.setRemoteDescription(d);await peer.setLocalDescription(await peer.createAnswer());await fb.set(ref('voice/b/sdp'),peer.localDescription.toJSON());}else if(side==='w'&&d.type==='answer'&&peer.signalingState==='have-local-offer')await peer.setRemoteDescription(d);if(peer.remoteDescription){for(let c of queue.splice(0))await peer.addIceCandidate(c)}}catch(e){status(e.message)}}));if(side==='w'){await peer.setLocalDescription(await peer.createOffer());await fb.set(ref('voice/w/sdp'),peer.localDescription.toJSON());}status('مایک چالاکە؛ هاوڕێش مایک بکاتەوە');}catch(e){stopVoice();status(e.message)}};
$('leaveRoom').onclick=()=>{leave();S.mode='learn';restart();};let invite=new URLSearchParams(location.search).get('invite');if(invite)$('inviteCode').value=invite;

if(typeof Chess==="undefined")ask("کتێبخانەی شەترەنج بار نەبوو — ئینتەرنێتەکەت بپشکنە.");
else load(0);

let shAudioCtx,shMuted=false;
function shSound(m){if(shMuted||!shAudioCtx)return;try{const o=shAudioCtx.createOscillator(),g=shAudioCtx.createGain(),t=shAudioCtx.currentTime;o.type='sine';o.frequency.value=m.san.includes('#')?880:m.san.includes('+')?660:m.captured?220:420;g.gain.setValueAtTime(.12,t);g.gain.exponentialRampToValueAtTime(.001,t+.13);o.connect(g);g.connect(shAudioCtx.destination);o.start(t);o.stop(t+.14)}catch(e){}}
document.addEventListener('pointerdown',()=>{try{shAudioCtx ||= new (window.AudioContext||window.webkitAudioContext)();shAudioCtx.resume()}catch(e){}},{passive:true});
$('shMute').onclick=()=>{shMuted=!shMuted;$('shMute').textContent=shMuted?'🔇 دەنگ':'🔊 دەنگ'};
$('shAudio').onclick=()=> $('remoteAudio').play().catch(e=>status(e.message));
const shWork=$('shWork'),shHome=$('shHome');
function shPage(p){shHome.hidden=true;shWork.hidden=false;shWork.dataset.page=p;const m=p==='game'?'game':p==='exam'?'exam':'learn';document.querySelector('[data-m="'+m+'"]').click();const details=[...shWork.querySelectorAll(':scope > details')];details.forEach(d=>{d.open=false});if(p==='room')$('onlinePanel').open=true;if(p==='puzzle'&&details[1])details[1].open=true;if(p==='review'){const d=$('reviewGame').closest('details');if(d)d.open=true;}if(p==='learn'&&details[0])details[0].open=true;if(p==='game')previewClocks();}
document.querySelectorAll('#shHome [data-page]').forEach(b=>b.onclick=()=>shPage(b.dataset.page));$('shBack').onclick=()=>{trainingAbandon();leave();cancelEngine();clearTimeout(S.timer);shWork.hidden=true;shHome.hidden=false;};if(invite&&document.body.dataset.route==='online')$('inviteCode').value=invite;

let profileEpoch=0;
async function refreshProfile(u){const token=++profileEpoch;const registered=!!u&&!u.isAnonymous;$('authFields').hidden=registered;$('profileFields').hidden=!registered;$('accountStatus').textContent=registered?(u.email||u.displayName||'Account'): 'میوان — دەتوانیت ئەکاونت دروست بکەیت';if(!registered)return;try{const s=await fb.get(fb.ref(db,'users/'+u.uid+'/profile'));if(token!==profileEpoch)return;const p=s.val();$('profileName').value=p?.displayName||u.displayName||'';$('profileLevel').value=p?.level||'beginner';}catch(e){$('accountStatus').textContent=e.message;}}
async function accountAction(fn){const buttons=$('accountPanel').querySelectorAll('button');buttons.forEach(b=>b.disabled=true);try{await setupFirebase();await fn();}catch(e){$('accountStatus').textContent=e.code||e.message;}finally{buttons.forEach(b=>b.disabled=false);}}
$('authLogin').onclick=()=>accountAction(async()=>{await authSDK.signInWithEmailAndPassword(authInstance,$('authEmail').value.trim(),$('authPassword').value);$('authPassword').value='';});
$('authRegister').onclick=()=>{const email=$('authEmail').value.trim(),pass=$('authPassword').value;let c=$('authConfirm');if(!c){c=document.createElement('input');c.id='authConfirm';c.type='password';c.autocomplete='new-password';c.placeholder='دووبارە وشەی نهێنی';$('authPassword').after(c);c.focus();$('accountStatus').textContent='وشەی نهێنی دووبارە بنووسە و ئەکاونتی نوێ دابگرە';return;}if(!email||pass.length<6||c.value!==pass){$('accountStatus').textContent='ئیمەیل و وشەی نهێنی (٦ پیت یان زیاتر) و دووبارەکردنەوەی یەکسان پێویستن';return;}accountAction(async()=>{if(authInstance.currentUser?.isAnonymous)await authSDK.linkWithCredential(authInstance.currentUser,authSDK.EmailAuthProvider.credential(email,pass));else await authSDK.createUserWithEmailAndPassword(authInstance,email,pass);$('authPassword').value='';c.remove();await refreshProfile(authInstance.currentUser);const u=authInstance.currentUser;try{await authSDK.sendEmailVerification(u);$('accountStatus').textContent='نامەی پشتڕاستکردنەوە نێردرا';}catch(e){$('accountStatus').textContent='ئەکاونت دروست کرا؛ لە پرۆفایل دووبارە نامە بنێرە';}});};
$('authGoogle').onclick=()=>accountAction(async()=>{const provider=new authSDK.GoogleAuthProvider();if(authInstance.currentUser?.isAnonymous)await authSDK.linkWithPopup(authInstance.currentUser,provider);else await authSDK.signInWithPopup(authInstance,provider);await refreshProfile(authInstance.currentUser);});
$('authReset').onclick=()=>accountAction(async()=>{await authSDK.sendPasswordResetEmail(authInstance,$('authEmail').value.trim());$('accountStatus').textContent='نامەی گەڕاندنەوە داوا کرا';});
$('authLogout').onclick=()=>accountAction(async()=>{leave();await authSDK.signOut(authInstance);});
$('profileSave').onclick=()=>accountAction(async()=>{const u=authInstance.currentUser,name=$('profileName').value.trim();if(!u||u.isAnonymous||!name||name.length>50)throw Error('ناوی دروست بنووسە');await fb.set(fb.ref(db,'users/'+u.uid+'/profile'),{displayName:name,level:$('profileLevel').value});$('accountStatus').textContent='پرۆفایل پاشەکەوت کرا';});
setupFirebase().catch(e=>{$('accountStatus').textContent='Offline / '+e.message;});

$('resignTraining').onclick=()=>{if(trainingSession?.active&&confirm('واز لە یاری دەهێنیت؟')){trainingFinish(0);cancelEngine();S.lock=true;ask('وازت لە یاری هێنا');}};
function previewClocks(){if(trainingSession?.active)return;const tm=$('timeMode').value;for(const [id,c] of [['clockTop',$('color').value==='w'?'b':'w'],['clockBottom',$('color').value]]){const el=$(id);el.hidden=tm==='0'||shWork.dataset.page!=='game';el.classList.remove('active');el.textContent=(c==='w'?'♔ ':'♚ ')+tm.split('+')[0]+':00';}}
$('timeMode').onchange=()=>{trainingInfo();previewClocks();};$('ratingMode').onchange=trainingInfo;setInterval(()=>{if(S.mode==='game'&&trainingSession?.active)trainingTick();},150);trainingInfo();

// Modular page routing, with shared engine and isolated visible controls.
(()=>{const route=document.body.dataset.route;const urls={learn:'learn.html',game:'computer.html',room:'online.html',exam:'exam.html',puzzle:'puzzle.html',review:'review.html'};document.querySelectorAll('#shHome [data-page]').forEach(b=>b.onclick=()=>location.href=urls[b.dataset.page]);$('shBack').onclick=()=>{if(trainingSession?.active&&!confirm('واز لە یاری دەهێنیت؟'))return;trainingAbandon();leave();location.href='index.html'};if(route==='home'){if(invite)location.replace('online.html?invite='+encodeURIComponent(invite));return;}shPage(route==='online'?'room':route==='computer'?'learn':route);if(route==='computer'){shWork.dataset.page='game';let choice={timeMode:'10+0',ratingMode:'fixed',color:'random'};function update(){for(const group of document.querySelectorAll('[data-choice]'))for(const b of group.querySelectorAll('button'))b.classList.toggle('selected',choice[group.dataset.choice]===b.dataset.v);$('timeMode').value=choice.timeMode;$('setupElo').disabled=choice.ratingMode==='fixed';if(choice.ratingMode==='fixed')$('setupElo').value='auto';$('setupRating').textContent='Elo: '+trainingRecord(trainingKey()).elo;}document.querySelectorAll('[data-choice] button').forEach(b=>b.onclick=()=>{choice[b.parentElement.dataset.choice]=b.dataset.v;update()});$('setupStart').onclick=()=>{sessionStorage.setItem('shabandSetup',JSON.stringify({...choice,elo:$('setupElo').value}));location.href='game.html'};update();setInterval(update,1000);}if(route==='puzzle')$('startPuzzle').click();if(route==='game'){let cfg;try{cfg=JSON.parse(sessionStorage.getItem('shabandSetup'))}catch{}if(!cfg){location.replace('computer.html');return;}$('timeMode').value=cfg.timeMode;$('ratingMode').value=cfg.ratingMode;$('color').value=cfg.color==='random'?(Math.random()<.5?'w':'b'):cfg.color;function start(){let r=trainingRecord(trainingKey());let target=cfg.ratingMode==='fixed'||cfg.elo==='auto'?r.elo:Number(cfg.elo);let opts=[...$('level').options].filter(o=>Number(o.value)<9999);$('level').value=opts.sort((a,b)=>Math.abs(Number(a.value)-target)-Math.abs(Number(b.value)-target))[0].value;$('newgame').click();}function labels(){let r=trainingRecord(trainingKey());$('playerLine').querySelector('span').textContent=$('profileName').value||'تۆ';$('playerLine').querySelector('strong').textContent=r.elo;$('opponentLine').querySelector('strong').textContent=trainingSession?.rated?trainingSession.opponent:$('level').value; if(cfg.timeMode==='0'){for(const id of ['clockTop','clockBottom']){$(id).hidden=false;$(id).textContent='∞'}}}let started=false;const launch=()=>{if(started)return;started=true;start();labels();};setupFirebase().then(()=>{if(authInstance?.currentUser) return refreshProfile(authInstance.currentUser)}).catch(()=>{}).finally(launch);setTimeout(launch,2500);setInterval(labels,500);$('arenaResign').onclick=()=>{if(trainingSession?.active)$('resignTraining').click();else if(confirm('واز لە یاری دەهێنیت؟')){cancelEngine();S.lock=true;ask('وازت لە یاری هێنا')}};$('arenaSound').onclick=()=>$('shMute').click();$('arenaNew').onclick=()=>{if(trainingSession?.active&&!confirm('واز لە یاری دەهێنیت؟'))return;trainingAbandon();location.href='computer.html'};}})();

// Casual matchmaking: one waiting slot per time control.
if(document.body.dataset.route==='online'){
 let search=null, working=false;
 const msg=t=>$('matchStatus').textContent=t;
 const controls=v=>{for(const id of ['createRoom','joinRoom','onlineTime','matchStart','leaveRoom'])$(id).disabled=v;$('matchCancel').disabled=!v;};
 async function clearSlot(q){if(q)await fb.runTransaction(q.ref,v=>v&&v.uid===uid&&v.room===q.room&&!v.claim?null:undefined);}
 $('matchStart').onclick=async()=>{if(working||search||room)return msg('سەرەتا لە ژوورەکە دەربچۆ');working=true;controls(true);$('matchCancel').disabled=true;try{
 await connect();if(authInstance.currentUser.isAnonymous)throw Error('سەرەتا لە ئەکاونتەکەت بچۆ ژوورەوە');
 const key=$('onlineTime').value, qr=fb.ref(db,'matchmaking/'+key);let snap=await fb.get(qr),v=snap.val();
 if(v&&v.uid!==uid&&!v.claim&&v.expires>Date.now()+serverOffset){let r=await fb.runTransaction(qr,x=>x&&x.room===v.room&&!x.claim?{...x,claim:uid}:undefined);if(r.committed){$('inviteCode').value=v.room;await enter(false);if(!room)throw Error('ژوور بەردەست نییە؛ دووبارە هەوڵ بدە');msg('یاریزان دۆزرایەوە');return;}}
 await enter(true);if(!room)throw Error('ژوور دروست نەکرا');let q={ref:qr,room,off:null,timer:null};let r=await fb.runTransaction(qr,x=>!x||x.expires<=Date.now()+serverOffset?{uid,room:q.room,expires:Date.now()+serverOffset+60000}:undefined);if(!r.committed){leave();throw Error('دووبارە گەڕان دەست پێ بکە');}search=q;msg('گەڕان بەدوای یاریزاندا…');$('matchCancel').disabled=false;
 q.off=fb.onValue(qr,s=>{let x=s.val();if(search!==q)return;if(x?.room===q.room&&x.claim)msg('یاریزان دۆزرایەوە؛ چاوەڕوانی چوونە ژوور');});
 q.timer=setInterval(async()=>{if(search!==q)return;if(onlineState?.black){finish(q);msg('یاریزان دۆزرایەوە');return;}if(Date.now()+serverOffset>=r.snapshot.val().expires){finish(q);await clearSlot(q).catch(()=>{});leave();msg('کاتی گەڕان تەواو بوو؛ دووبارە هەوڵ بدە');}},500);
 }catch(e){msg(e.message);if(room)leave();}finally{working=false;if(!search)controls(false);}};
 function finish(q){search=null;q.off?.();clearInterval(q.timer);controls(false);}
 $('matchCancel').onclick=async()=>{let q=search;if(!q)return;try{let r=await fb.runTransaction(q.ref,v=>v&&v.uid===uid&&v.room===q.room&&!v.claim?null:undefined);if(!r.committed){msg('یاریزان دۆزرایەوە؛ چاوەڕوان بە');return;}finish(q);leave();msg('گەڕان هەڵوەشایەوە');}catch(e){msg(e.message)}};
}
