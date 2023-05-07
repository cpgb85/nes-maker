(function(){"use strict";var e={4217:function(e,t,r){var n=r(9242),s=r(3396),o=r(7718),a=r(3140);function l(e,t,r,n,l,c){const i=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(o.q,null,{default:(0,s.w5)((()=>[(0,s.Wm)(a.O,null,{default:(0,s.w5)((()=>[(0,s.Wm)(i)])),_:1})])),_:1})}var c={name:"App",data:()=>({})},i=r(89);const u=(0,i.Z)(c,[["render",l]]);var d=u,p=r(2483),m=r(7312),f=r(11),v=r(1888),h=r(1334),g=r(3601),w=r(9657),_=r(3173);const y={class:"text-center"},b={class:"mt-4 mb-2"},k=(0,s._)("div",{class:""},null,-1),j={class:"mt-2 mb-4"},$={class:"h-100 bg-grey-lighten-4 pt-10 pb-10 ps-10 pe-10"},S=["innerHTML"],W={key:1,class:"text-center h-100 d-flex align-center justify-center"};function C(e,t,r,o,a,l){const c=(0,s.up)("RetroverseBar"),i=(0,s.up)("ChooseSystem"),u=(0,s.up)("ChooseSetup"),d=(0,s.up)("ChooseGenre"),p=(0,s.up)("AdvancedSetup");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(c),(0,s.Wm)(w.V,{permanent:""},{default:(0,s.w5)((()=>[(0,s._)("div",y,[(0,s._)("div",b,[(0,s.Wm)(m.T,{class:"bg-light-blue-darken-3 pill-button",onClick:t[0]||(t[0]=(0,n.iM)((t=>{e.create=!e.create,e.createProject()}),["prevent","stop"]))},{default:(0,s.w5)((()=>[(0,s.Uk)("Create")])),_:1}),(0,s.Wm)(g.B,{modelValue:e.create,"onUpdate:modelValue":t[2]||(t[2]=t=>e.create=t),width:"680",persistent:"",class:""},{default:(0,s.w5)((()=>[(0,s.Wm)(f._,{class:""},{default:(0,s.w5)((()=>[(0,s.Wm)(v.Z,null,{default:(0,s.w5)((()=>[k,"Choose System"==e.$store.state.state?((0,s.wg)(),(0,s.j4)(i,{key:0})):(0,s.kq)("",!0),"Choose Setup"==e.$store.state.state?((0,s.wg)(),(0,s.j4)(u,{key:1})):(0,s.kq)("",!0),"Choose Genre"==e.$store.state.state?((0,s.wg)(),(0,s.j4)(d,{key:2})):(0,s.kq)("",!0),"Advanced Setup"==e.$store.state.state?((0,s.wg)(),(0,s.j4)(p,{key:3})):(0,s.kq)("",!0)])),_:1}),(0,s.Wm)(h.h,{class:"d-flex justify-center text-center"},{default:(0,s.w5)((()=>[(0,s.Wm)(m.T,{onClick:t[1]||(t[1]=t=>{e.create=!1,e.$store.state.project=null})},{default:(0,s.w5)((()=>[(0,s.Uk)("Cancel")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,s._)("div",j,[(0,s.Wm)(m.T,{class:"bg-light-blue-darken-3 pill-button",onClick:(0,n.iM)(e.openProject,["prevent","stop"])},{default:(0,s.w5)((()=>[(0,s.Uk)("Open")])),_:1},8,["onClick"])])])])),_:1}),(0,s._)("div",$,[e.html?((0,s.wg)(),(0,s.iD)("div",{key:0,innerHTML:e.html},null,8,S)):((0,s.wg)(),(0,s.iD)("div",W,[(0,s.Wm)(_.L,{size:"50",indeterminate:"",color:"blue-lighten-1"})]))])],64)}function x(e,t,r,n,o,a){const l=(0,s.up)("NotLoggedIn"),c=(0,s.up)("LoggedIn");return(0,s.wg)(),(0,s.iD)(s.HY,null,[null==e.$store.state.retroverseUser?((0,s.wg)(),(0,s.j4)(l,{key:0,rail:e.rail},null,8,["rail"])):(0,s.kq)("",!0),null!=e.$store.state.retroverseUser?((0,s.wg)(),(0,s.j4)(c,{key:1,rail:e.rail},null,8,["rail"])):(0,s.kq)("",!0)],64)}var A=r(7771),P=r(6572),D=r(4075),O=r(8777),I=r(2329),M=r(2900);const U=(0,s._)("div",{class:"text-h5 text-center d-block pb-4"},"Retroverse Login",-1),L=["disabled"],T={class:"text-end"},E={key:0};function V(e,t,r,o,a,l){return(0,s.wg)(),(0,s.j4)(w.V,{rail:r.rail,permanent:"",theme:"dark"},{default:(0,s.w5)((()=>[(0,s.Wm)(O.l,{"prepend-avatar":"https://theretroverse.com/wp-content/uploads/2022/10/cropped-Favicon-1-32x32.png",title:"Retroverse",subtitle:"Not logged in",onClick:t[1]||(t[1]=e=>r.rail=!r.rail),nav:""},{append:(0,s.w5)((()=>[(0,s.Wm)(m.T,{variant:"text",icon:"mdi-chevron-left",onClick:t[0]||(t[0]=(0,n.iM)((e=>r.rail=!r.rail),["stop"]))})])),_:1}),(0,s.Wm)(D.J),(0,s.Wm)(I.i,{density:"compact",nav:""},{default:(0,s.w5)((()=>[(0,s.Wm)(O.l,{"prepend-icon":"mdi-login",title:"Log-In",value:"log-in",onClick:t[2]||(t[2]=e=>a.login=!a.login)})])),_:1}),(0,s.Wm)(g.B,{modelValue:a.login,"onUpdate:modelValue":t[6]||(t[6]=e=>a.login=e),width:"670",theme:"light"},{default:(0,s.w5)((()=>[(0,s.Wm)(f._,null,{default:(0,s.w5)((()=>[(0,s.Wm)(P.E,null,{default:(0,s.w5)((()=>[U])),_:1}),(0,s.Wm)(v.Z,null,{default:(0,s.w5)((()=>[a.error?((0,s.wg)(),(0,s.j4)(A.w,{key:0,innerHTML:a.error,type:"warning",prominent:"",class:"mb-5"},null,8,["innerHTML"])):(0,s.kq)("",!0),(0,s._)("form",{onSubmit:t[5]||(t[5]=(0,n.iM)(((...e)=>l.logIn&&l.logIn(...e)),["prevent","stop"]))},[(0,s._)("fieldset",{disabled:a.disabled},[(0,s.Wm)(M.h,{modelValue:a.usrnm,"onUpdate:modelValue":t[3]||(t[3]=e=>a.usrnm=e),label:"Email Address *",required:"",variant:"underlined"},null,8,["modelValue"]),(0,s.Wm)(M.h,{modelValue:a.pswd,"onUpdate:modelValue":t[4]||(t[4]=e=>a.pswd=e),label:"Password *",required:"",type:"password",variant:"underlined"},null,8,["modelValue"]),(0,s._)("div",T,[(0,s.Wm)(m.T,{color:"blue-darken-2",type:"submit"},{default:(0,s.w5)((()=>[a.disabled?((0,s.wg)(),(0,s.j4)(_.L,{key:1,size:"24",indeterminate:"",color:"blue-lighten-5"})):((0,s.wg)(),(0,s.iD)("span",E,"Log-In"))])),_:1})])],8,L)],32)])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["rail"])}var N={name:"NotLoggedIn",props:["rail"],data(){return{login:!1,usrnm:"",pswd:"",error:"",disabled:!1}},async mounted(){},methods:{async logIn(){this.error="",this.disabled=!0;let e=await this.$axios.post(`${this.$store.state.retroverseURL}/wp-json/jwt-auth/v1/token`,{username:this.usrnm,password:this.pswd});void 0!=e.data.token?(this.$store.state.token=e.data.token,localStorage.token=e.data.token,e=await this.$axios.get(`${this.$store.state.retroverseAPI}/users/me`,{headers:{Authorization:`Bearer ${this.$store.state.token}`}}),localStorage.setItem("retroverseUser",JSON.stringify(e.data)),this.$store.state.retroverseUser=e.data):this.error="Incorrect username or password.",this.disabled=!1}}};const R=(0,i.Z)(N,[["render",V]]);var Z=R,q=r(3289);function B(e,t,r,o,a,l){return(0,s.wg)(),(0,s.j4)(w.V,{rail:r.rail,permanent:"",theme:"dark"},{default:(0,s.w5)((()=>[e.$store.state.retroverseUser.user_photo?((0,s.wg)(),(0,s.j4)(O.l,{key:1,"prepend-avatar":e.$store.state.retroverseUser.user_photo.url,title:"Retroverse",subtitle:`Logged in as: ${e.$store.state.retroverseUser.acf.public_name}`,onClick:t[3]||(t[3]=e=>r.rail=!r.rail),nav:""},{append:(0,s.w5)((()=>[(0,s.Wm)(m.T,{variant:"text",icon:"mdi-chevron-left",onClick:t[2]||(t[2]=(0,n.iM)((e=>r.rail=!r.rail),["stop"]))})])),_:1},8,["prepend-avatar","subtitle"])):((0,s.wg)(),(0,s.j4)(O.l,{key:0,"prepend-avatar":"https://theretroverse.com/wp-content/uploads/2022/10/cropped-Favicon-1-32x32.png",title:"Retroverse",subtitle:`Logged in as: ${e.$store.state.retroverseUser.acf.public_name}`,onClick:t[1]||(t[1]=e=>r.rail=!r.rail),nav:""},{append:(0,s.w5)((()=>[(0,s.Wm)(m.T,{variant:"text",icon:"mdi-chevron-left",onClick:t[0]||(t[0]=(0,n.iM)((e=>r.rail=!r.rail),["stop"]))})])),_:1},8,["subtitle"])),(0,s.Wm)(D.J),(0,s.Wm)(I.i,{density:"compact",nav:""},{default:(0,s.w5)((()=>[e.$store.state.retroverseUser.acf.nes_maker_license?((0,s.wg)(),(0,s.j4)(O.l,{key:0,title:"Valid NES Maker License",value:"valid-license"},{prepend:(0,s.w5)((()=>[(0,s.Wm)(q.t,{icon:"mdi-check-circle-outline",color:"green-lighten-1",title:"Valid NES Maker License"})])),_:1})):(0,s.kq)("",!0)])),_:1})])),_:1},8,["rail"])}var H={name:"LoggedIn",props:["rail"],data(){return{}},async mounted(){},methods:{}};const G=(0,i.Z)(H,[["render",B]]);var F=G,J={name:"RetroverseBar",components:{LoggedIn:F,NotLoggedIn:Z},data:()=>({rail:!0}),methods:{}};const z=(0,i.Z)(J,[["render",x]]);var K=z;function Y(e,t,r,n,o,a){const l=(0,s.up)("CreateOpen");return(0,s.wg)(),(0,s.j4)(w.V,{permanent:""},{default:(0,s.w5)((()=>[(0,s.Wm)(l)])),_:1})}const Q={class:"text-center"},X={class:"mt-4 mb-2"},ee={class:"mt-2 mb-4"};function te(e,t,r,o,a,l){const c=(0,s.up)("ChooseSystem"),i=(0,s.up)("ChooseDirectory");return(0,s.wg)(),(0,s.iD)("div",Q,[(0,s._)("div",X,[(0,s.Wm)(m.T,{class:"bg-light-blue-darken-3 pill-button",onClick:t[0]||(t[0]=(0,n.iM)((t=>{a.create=!a.create,e.createProject()}),["prevent","stop"]))},{default:(0,s.w5)((()=>[(0,s.Uk)("Create")])),_:1}),(0,s.Wm)(g.B,{modelValue:a.create,"onUpdate:modelValue":t[2]||(t[2]=e=>a.create=e),width:"860",persistent:"",class:"bg-grey-lighten-4"},{default:(0,s.w5)((()=>[(0,s.Wm)(f._,{class:""},{default:(0,s.w5)((()=>[(0,s.Wm)(v.Z,null,{default:(0,s.w5)((()=>[null!=e.$store.state.project&&null==e.$store.state.project.system?((0,s.wg)(),(0,s.j4)(c,{key:0})):(0,s.kq)("",!0),null!=e.$store.state.project&&null!=e.$store.state.project.system&&""==e.$store.state.project.directory?((0,s.wg)(),(0,s.j4)(i,{key:1})):(0,s.kq)("",!0)])),_:1}),(0,s.Wm)(h.h,{class:"text-center"},{default:(0,s.w5)((()=>[(0,s.Wm)(m.T,{onClick:t[1]||(t[1]=t=>{a.create=!1,e.$store.state.project=null})},{default:(0,s.w5)((()=>[(0,s.Uk)("Cancel")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,s._)("div",ee,[(0,s.Wm)(m.T,{class:"bg-light-blue-darken-3 pill-button",onClick:(0,n.iM)(e.openProject,["prevent","stop"])},{default:(0,s.w5)((()=>[(0,s.Uk)("Open")])),_:1},8,["onClick"])])])}var re=r(3369),ne=r(6824),se=r(8521);const oe=e=>((0,s.dD)("data-v-99520faa"),e=e(),(0,s.Cn)(),e),ae=oe((()=>(0,s._)("h3",null,"Choose System",-1))),le=oe((()=>(0,s._)("img",{class:"mw-100 mh-100",src:"images/nes.png"},null,-1))),ce=oe((()=>(0,s._)("img",{class:"mw-100 mh-100",src:"images/snes.png"},null,-1)));function ie(e,t,r,n,o,a){return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(re.K,null,{default:(0,s.w5)((()=>[(0,s.Wm)(ne.o,null,{default:(0,s.w5)((()=>[(0,s.Wm)(se.D,{class:"v-col-12 text-center"},{default:(0,s.w5)((()=>[ae])),_:1}),(0,s.Wm)(se.D,{class:"p-2"},{default:(0,s.w5)((()=>[(0,s.Wm)(f._,{onClick:t[0]||(t[0]=t=>{e.$store.state.project.system="nes",e.$store.state.state="Choose Setup"})},{default:(0,s.w5)((()=>[(0,s.Wm)(v.Z,null,{default:(0,s.w5)((()=>[le])),_:1}),(0,s.Wm)(P.E,{class:"text-center"},{default:(0,s.w5)((()=>[(0,s.Uk)("NES")])),_:1})])),_:1})])),_:1}),(0,s.Wm)(se.D,{class:"p-2"},{default:(0,s.w5)((()=>[(0,s.Wm)(f._,{onClick:t[1]||(t[1]=t=>{e.$store.state.project.system="snes",e.$store.state.state="Choose Setup"})},{default:(0,s.w5)((()=>[(0,s.Wm)(v.Z,null,{default:(0,s.w5)((()=>[ce])),_:1}),(0,s.Wm)(P.E,{class:"text-center"},{default:(0,s.w5)((()=>[(0,s.Uk)("SNES")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])}var ue={name:"ChooseSystem",data(){return{}},async mounted(){}};const de=(0,i.Z)(ue,[["render",ie],["__scopeId","data-v-99520faa"]]);var pe=de;const me=e=>((0,s.dD)("data-v-c9c37172"),e=e(),(0,s.Cn)(),e),fe=me((()=>(0,s._)("br",null,null,-1))),ve={class:"text-center"};function he(e,t,r,n,o,a){return(0,s.wg)(),(0,s.iD)("form",null,[(0,s.Wm)(M.h,{class:"",modelValue:e.$store.state.project.name,"onUpdate:modelValue":t[0]||(t[0]=t=>e.$store.state.project.name=t),label:"Project Name",required:"",variant:"underlined"},null,8,["modelValue"]),(0,s.Wm)(ne.o,null,{default:(0,s.w5)((()=>[(0,s.Wm)(se.D,{cols:"9"},{default:(0,s.w5)((()=>[(0,s.Wm)(M.h,{class:"",modelValue:e.$store.state.project.directory,"onUpdate:modelValue":t[1]||(t[1]=t=>e.$store.state.project.directory=t),label:"Project Directory",required:"",variant:"underlined",readonly:""},null,8,["modelValue"])])),_:1}),(0,s.Wm)(se.D,{cols:"3"},{default:(0,s.w5)((()=>[(0,s.Wm)(m.T,{block:"",onClick:t[2]||(t[2]=t=>e.$API.send("select-directory")),color:"blue-darken-2"},{default:(0,s.w5)((()=>[(0,s.Uk)("Browse")])),_:1}),fe])),_:1})])),_:1}),(0,s._)("div",ve,[(0,s.Wm)(m.T,{color:"blue-darken-2",onClick:a.createProject,class:"mt-3",disabled:""==e.$store.state.project.directory||null==e.$store.state.project.name},{default:(0,s.w5)((()=>[(0,s.Uk)("Create Project")])),_:1},8,["onClick","disabled"])])])}var ge={name:"ChooseDirectory",data(){return{}},async mounted(){this.$API.receive("select-directory",(e=>{this.$store.state.project.directory=e.directory})),this.$API.receive("create-project",(e=>{this.$store.state.project.directory=e.directory}))},methods:{createProject(){this.$API.existsSync(".nsmkr")||(this.$API.mkdirSync(`${this.$store.state.project.directory}/MAPS`,{recursive:!0}),this.$API.mkdirSync(`${this.$store.state.project.directory}/SCREENS`,{recursive:!0}),this.$API.mkdirSync(`${this.$store.state.project.directory}/TILESETS`,{recursive:!0}),this.$API.mkdirSync(`${this.$store.state.project.directory}/OBJECTS`,{recursive:!0}),this.$API.mkdirSync(`${this.$store.state.project.directory}/ANIMATIONS`,{recursive:!0}),this.$API.mkdirSync(`${this.$store.state.project.directory}/SOUNDS`,{recursive:!0}),this.$API.mkdirSync(`${this.$store.state.project.directory}/CODE`,{recursive:!0}),this.$API.writeFileSync(`${this.$store.state.project.directory}/.nsmkr`,JSON.stringify(this.$store.state.project)))}}};const we=(0,i.Z)(ge,[["render",he],["__scopeId","data-v-c9c37172"]]);var _e=we,ye={name:"CreateOpen",components:{ChooseSystem:pe,ChooseDirectory:_e},data(){return{create:!1}},methods:{}};const be=(0,i.Z)(ye,[["render",te]]);var ke=be,je={name:"RecentProjects",components:{CreateOpen:ke,ChooseDirectory:_e},data(){return{}}};const $e=(0,i.Z)(je,[["render",Y],["__scopeId","data-v-e9acd6e6"]]);var Se=$e;const We=(0,s._)("h3",null,"Choose Setup",-1),Ce=(0,s._)("div",{class:"mt-5"},"SIMPLE",-1),xe=(0,s._)("div",{class:"mt-5"},"ADVANCED",-1);function Ae(e,t,r,n,o,a){return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(re.K,null,{default:(0,s.w5)((()=>[(0,s.Wm)(ne.o,{class:"align-stretch"},{default:(0,s.w5)((()=>[(0,s.Wm)(se.D,{class:"v-col-12 text-center"},{default:(0,s.w5)((()=>[We])),_:1}),(0,s.Wm)(se.D,null,{default:(0,s.w5)((()=>[(0,s.Wm)(f._,{class:"ps-15 pe-15 pt-15 pb-15 text-center",onClick:t[0]||(t[0]=t=>{e.$store.state.project.setup="simple",e.$store.state.state="Choose Genre"})},{default:(0,s.w5)((()=>[(0,s.Wm)(q.t,{icon:"mdi-cog-outline",size:"120"}),Ce])),_:1})])),_:1}),(0,s.Wm)(se.D,null,{default:(0,s.w5)((()=>[(0,s.Wm)(f._,{class:"ps-15 pe-15 pt-15 pb-15 text-center",onClick:t[1]||(t[1]=t=>{e.$store.state.project.setup="advanced",e.$store.state.state="Choose Genre"})},{default:(0,s.w5)((()=>[(0,s.Wm)(q.t,{icon:"mdi-folder-cog-outline",size:"120"}),xe])),_:1})])),_:1})])),_:1})])),_:1})])}var Pe={name:"ChooseSetup",data(){return{}},async mounted(){}};const De=(0,i.Z)(Pe,[["render",Ae]]);var Oe=De;const Ie=(0,s._)("h3",null,"Choose Genre",-1),Me=(0,s._)("div",{class:"mt-5"},"MAZE",-1),Ue=(0,s._)("div",{class:"mt-5"},"ARCADE PLATFORM",-1),Le=(0,s._)("div",{class:"mt-5"},"SCROLLING PLATFORM",-1),Te=(0,s._)("div",{class:"mt-5"},"ADVENTURE",-1),Ee=(0,s._)("div",{class:"mt-5"},"RPG",-1),Ve=(0,s._)("div",{class:"mt-5"},"SCROLLING SHOOTER",-1),Ne=(0,s._)("div",{class:"mt-5"},"BRAWLER",-1),Re=(0,s._)("div",{class:"mt-5"},"CUSTOM",-1);function Ze(e,t,r,n,o,a){return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(re.K,null,{default:(0,s.w5)((()=>[(0,s.Wm)(ne.o,{class:"align-stretch justify-center"},{default:(0,s.w5)((()=>[(0,s.Wm)(se.D,{class:"v-col-12 text-center"},{default:(0,s.w5)((()=>[Ie])),_:1}),(0,s.Wm)(se.D,{class:"v-col-4 text-center"},{default:(0,s.w5)((()=>[(0,s.Wm)(f._,{onClick:t[0]||(t[0]=t=>{e.$store.state.genre="maze",e.$store.state.state="simple"==e.$store.state.project.setup?"Simple Setup":"Advanced Setup"}),color:"grey-lighten-5",class:"h-100 ps-8 pe-8 pt-8 pb-8 text-center d-flex align-center justify-center"},{default:(0,s.w5)((()=>[Me])),_:1})])),_:1}),(0,s.Wm)(se.D,{class:"v-col-4 text-center"},{default:(0,s.w5)((()=>[(0,s.Wm)(f._,{onClick:t[1]||(t[1]=t=>{e.$store.state.genre="arcade-platform",e.$store.state.state="simple"==e.$store.state.project.setup?"Simple Setup":"Advanced Setup"}),color:"grey-lighten-5",class:"h-100 ps-8 pe-8 pt-8 pb-8 text-center d-flex align-center justify-center"},{default:(0,s.w5)((()=>[Ue])),_:1})])),_:1}),(0,s.Wm)(se.D,{class:"v-col-4 text-center"},{default:(0,s.w5)((()=>[(0,s.Wm)(f._,{onClick:t[2]||(t[2]=t=>{e.$store.state.genre="scrolling-platform",e.$store.state.state="simple"==e.$store.state.project.setup?"Simple Setup":"Advanced Setup"}),color:"grey-lighten-5",class:"h-100 ps-8 pe-8 pt-8 pb-8 text-center d-flex align-center justify-center"},{default:(0,s.w5)((()=>[Le])),_:1})])),_:1}),(0,s.Wm)(se.D,{class:"v-col-4 text-center"},{default:(0,s.w5)((()=>[(0,s.Wm)(f._,{onClick:t[3]||(t[3]=t=>{e.$store.state.genre="adventure",e.$store.state.state="simple"==e.$store.state.project.setup?"Simple Setup":"Advanced Setup"}),color:"grey-lighten-5",class:"h-100 ps-8 pe-8 pt-8 pb-8 text-center d-flex align-center justify-center"},{default:(0,s.w5)((()=>[Te])),_:1})])),_:1}),(0,s.Wm)(se.D,{class:"v-col-4 text-center"},{default:(0,s.w5)((()=>[(0,s.Wm)(f._,{onClick:t[4]||(t[4]=t=>{e.$store.state.genre="rpg",e.$store.state.state="simple"==e.$store.state.project.setup?"Simple Setup":"Advanced Setup"}),color:"grey-lighten-5",class:"h-100 ps-8 pe-8 pt-8 pb-8 text-center d-flex align-center justify-center"},{default:(0,s.w5)((()=>[Ee])),_:1})])),_:1}),(0,s.Wm)(se.D,{class:"v-col-4 text-center"},{default:(0,s.w5)((()=>[(0,s.Wm)(f._,{onClick:t[5]||(t[5]=t=>{e.$store.state.genre="scrolling-shooter",e.$store.state.state="simple"==e.$store.state.project.setup?"Simple Setup":"Advanced Setup"}),color:"grey-lighten-5",class:"h-100 ps-8 pe-8 pt-8 pb-8 text-center d-flex align-center justify-center"},{default:(0,s.w5)((()=>[Ve])),_:1})])),_:1}),(0,s.Wm)(se.D,{class:"v-col-4 text-center"},{default:(0,s.w5)((()=>[(0,s.Wm)(f._,{onClick:t[6]||(t[6]=t=>{e.$store.state.genre="brawler",e.$store.state.state="simple"==e.$store.state.project.setup?"Simple Setup":"Advanced Setup"}),color:"grey-lighten-5",class:"h-100 ps-8 pe-8 pt-8 pb-8 text-center d-flex align-center justify-center"},{default:(0,s.w5)((()=>[Ne])),_:1})])),_:1}),(0,s.Wm)(se.D,{class:"v-col-4 text-center"},{default:(0,s.w5)((()=>[(0,s.Wm)(f._,{onClick:t[7]||(t[7]=t=>{e.$store.state.genre="custom",e.$store.state.state="simple"==e.$store.state.project.setup?"Simple Setup":"Advanced Setup"}),color:"grey-lighten-5",class:"h-100 ps-8 pe-8 pt-8 pb-8 text-center d-flex align-center justify-center"},{default:(0,s.w5)((()=>[Re])),_:1})])),_:1})])),_:1})])),_:1})])}var qe={name:"ChooseSetup",data(){return{}},async mounted(){}};const Be=(0,i.Z)(qe,[["render",Ze]]);var He=Be,Ge=r(6836);const Fe=(0,s._)("h3",null,"Advanced Setup Options",-1);function Je(e,t,r,n,o,a){return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(re.K,null,{default:(0,s.w5)((()=>[(0,s.Wm)(ne.o,{class:"align-stretch"},{default:(0,s.w5)((()=>[(0,s.Wm)(se.D,{class:"v-col-12 text-center"},{default:(0,s.w5)((()=>[Fe])),_:1}),(0,s.Wm)(se.D,{class:"v-col-12"},{default:(0,s.w5)((()=>[(0,s.Wm)(Ge.r,{label:"Assembler",items:["ASM6"]}),(0,s.Wm)(Ge.r,{label:"Mapper Choice",items:["Mapper 2","Mapper 30"]}),(0,s.Wm)(Ge.r,{label:"Header",items:[]}),(0,s.Wm)(Ge.r,{label:"RAM Map",items:[]})])),_:1})])),_:1})])),_:1})])}var ze={name:"AdvancedSetup",data(){return{}},async mounted(){}};const Ke=(0,i.Z)(ze,[["render",Je]]);var Ye=Ke,Qe=(0,s.aZ)({name:"HomeView",components:{RetroverseBar:K,RecentProjects:Se,ChooseSystem:pe,ChooseSetup:Oe,ChooseGenre:He,ChooseDirectory:_e,AdvancedSetup:Ye},data(){return{html:"",create:!1}},async mounted(){let e=await this.$axios.get("https://theretroverse.com/wp-json/wp/v2/pages/2084");this.html=e.data.content.rendered},methods:{createProject(){this.$store.state.project={system:null,name:"",directory:"",setup:null,genre:null,assember:"ASM6"},this.$store.state.state="Choose System"},openProject(){console.log(this.$API.showOpenDialogSync);this.$API.showOpenDialogSync({buttonLabel:"Select Project",title:"Select a Project",properties:["openDirectory","createDirectory","showHiddenFiles"],filters:[{name:"NES Maker",extensions:["nsmkr"]}]})}}});const Xe=(0,i.Z)(Qe,[["render",C]]);var et=Xe;const tt=[{path:"/",name:"home",component:et},{path:"/project",name:"project",component:()=>r.e(443).then(r.bind(r,650))}],rt=(0,p.p7)({history:(0,p.r5)(),routes:tt});var nt=rt,st=r(65),ot=r(7603),at=(0,st.MT)({state:{state:"",db:new ot.ZP("db"),project:null==sessionStorage.getItem("project")?null:JSON.parse(sessionStorage.getItem("project")),retroverseUser:null==localStorage.getItem("retroverseUser")?null:JSON.parse(localStorage.getItem("retroverseUser")),retroverseURL:"https://theretroverse.com",retroverseAPI:"https://theretroverse.com/wp-json/wp/v2",token:""},getters:{},mutations:{},actions:{},modules:{}}),lt=(r(9773),r(8957)),ct=(0,lt.Rd)();async function it(){const e=await r.e(461).then(r.t.bind(r,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}var ut=r(4806),dt=r.n(ut),pt=r(4161);it();const mt=(0,n.ri)({...d,...{icons:{iconfont:"mdi"},data(){return{}},async mounted(){this.$store.state.db.version(1).stores({recentProjects:"++id, directory, name, createDate, lastChangeDate"}),this.$store.state.recentProjects=await this.$store.state.db.recentProjects.toArray()}}}).use(nt).use(at).use(ct);mt.config.globalProperties.$_=dt(),mt.config.globalProperties.$axios=pt.Z,mt.config.globalProperties.$API=window.API,mt.mount("#app")}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var o=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.m=e,function(){var e=[];r.O=function(t,n,s,o){if(!n){var a=1/0;for(u=0;u<e.length;u++){n=e[u][0],s=e[u][1],o=e[u][2];for(var l=!0,c=0;c<n.length;c++)(!1&o||a>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[c])}))?n.splice(c--,1):(l=!1,o<a&&(a=o));if(l){e.splice(u--,1);var i=s();void 0!==i&&(t=i)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,s,o]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};r.t=function(n,s){if(1&s&&(n=this(n)),8&s)return n;if("object"===typeof n&&n){if(4&s&&n.__esModule)return n;if(16&s&&"function"===typeof n.then)return n}var o=Object.create(null);r.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var l=2&s&&n;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((function(e){a[e]=function(){return n[e]}}));return a["default"]=function(){return n},r.d(o,a),o}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/"+{443:"about",461:"webfontloader"}[e]+"."+{443:"401cc791",461:"a7d6298a"}[e]+".js"}}(),function(){r.miniCssF=function(e){}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="nes-maker:";r.l=function(n,s,o,a){if(e[n])e[n].push(s);else{var l,c;if(void 0!==o)for(var i=document.getElementsByTagName("script"),u=0;u<i.length;u++){var d=i[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+o){l=d;break}}l||(c=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+o),l.src=n),e[n]=[s];var p=function(t,r){l.onerror=l.onload=null,clearTimeout(m);var s=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),s&&s.forEach((function(e){return e(r)})),t)return t(r)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),c&&document.head.appendChild(l)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){r.p="app://./"}(),function(){var e={143:0};r.f.j=function(t,n){var s=r.o(e,t)?e[t]:void 0;if(0!==s)if(s)n.push(s[2]);else{var o=new Promise((function(r,n){s=e[t]=[r,n]}));n.push(s[2]=o);var a=r.p+r.u(t),l=new Error,c=function(n){if(r.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,s[1](l)}};r.l(a,c,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,o,a=n[0],l=n[1],c=n[2],i=0;if(a.some((function(t){return 0!==e[t]}))){for(s in l)r.o(l,s)&&(r.m[s]=l[s]);if(c)var u=c(r)}for(t&&t(n);i<a.length;i++)o=a[i],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(u)},n=self["webpackChunknes_maker"]=self["webpackChunknes_maker"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(4217)}));n=r.O(n)})();
//# sourceMappingURL=app.5aaffe57.js.map