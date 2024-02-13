import{c as oe,h as W,k as ue,a as ye}from"./QBtn.6855cd1b.js";import{l as p,s as x,v as X,L as xe,p as O,I as re,q as le,a0 as Ce,g as D,a1 as we,V as me,a2 as Me,E as Se,K as Q,X as qe,a3 as Re,F as J,T as Ve,a4 as Ae,Y as Fe,B as ie}from"./index.a3104741.js";import{u as he,a as be,c as pe,d as _e,g as Ee,e as Be}from"./use-id.d96b3a81.js";var at=oe({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:t}){const u=p(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>x(e.tag,{class:u.value},W(t.default))}}),nt=oe({name:"QCard",props:{...he,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const{proxy:{$q:u}}=X(),i=be(e,u),d=p(()=>"q-card"+(i.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>x(e.tag,{class:d.value},W(t.default))}});function $e({validate:e,resetValidation:t,requiresQForm:u}){const i=xe(Ce,!1);if(i!==!1){const{props:d,proxy:f}=X();Object.assign(f,{validate:e,resetValidation:t}),O(()=>d.disable,g=>{g===!0?(typeof t=="function"&&t(),i.unbindComponent(f)):i.bindComponent(f)}),re(()=>{d.disable!==!0&&i.bindComponent(f)}),le(()=>{d.disable!==!0&&i.unbindComponent(f)})}else u===!0&&console.error("Parent QForm not found on useFormChild()!")}const se=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,de=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,fe=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,G=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,ee=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ae={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>se.test(e),hexaColor:e=>de.test(e),hexOrHexaColor:e=>fe.test(e),rgbColor:e=>G.test(e),rgbaColor:e=>ee.test(e),rgbOrRgbaColor:e=>G.test(e)||ee.test(e),hexOrRgbColor:e=>se.test(e)||G.test(e),hexaOrRgbaColor:e=>de.test(e)||ee.test(e),anyColor:e=>fe.test(e)||G.test(e)||ee.test(e)},Te=[!0,!1,"ondemand"],Oe={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>Te.includes(e)}};function Ie(e,t){const{props:u,proxy:i}=X(),d=D(!1),f=D(null),g=D(!1);$e({validate:P,resetValidation:I});let k=0,_;const q=p(()=>u.rules!==void 0&&u.rules!==null&&u.rules.length!==0),C=p(()=>u.disable!==!0&&q.value===!0&&t.value===!1),b=p(()=>u.error===!0||d.value===!0),U=p(()=>typeof u.errorMessage=="string"&&u.errorMessage.length!==0?u.errorMessage:f.value);O(()=>u.modelValue,()=>{g.value=!0,C.value===!0&&u.lazyRules===!1&&$()});function B(){u.lazyRules!=="ondemand"&&C.value===!0&&g.value===!0&&$()}O(()=>u.reactiveRules,j=>{j===!0?_===void 0&&(_=O(()=>u.rules,B,{immediate:!0,deep:!0})):_!==void 0&&(_(),_=void 0)},{immediate:!0}),O(()=>u.lazyRules,B),O(e,j=>{j===!0?g.value=!0:C.value===!0&&u.lazyRules!=="ondemand"&&$()});function I(){k++,t.value=!1,g.value=!1,d.value=!1,f.value=null,$.cancel()}function P(j=u.modelValue){if(u.disable===!0||q.value===!1)return!0;const V=++k,H=t.value!==!0?()=>{g.value=!0}:()=>{},L=(S,w)=>{S===!0&&H(),d.value=S,f.value=w||null,t.value=!1},z=[];for(let S=0;S<u.rules.length;S++){const w=u.rules[S];let E;if(typeof w=="function"?E=w(j,ae):typeof w=="string"&&ae[w]!==void 0&&(E=ae[w](j)),E===!1||typeof E=="string")return L(!0,E),!1;E!==!0&&E!==void 0&&z.push(E)}return z.length===0?(L(!1),!0):(t.value=!0,Promise.all(z).then(S=>{if(S===void 0||Array.isArray(S)===!1||S.length===0)return V===k&&L(!1),!0;const w=S.find(E=>E===!1||typeof E=="string");return V===k&&L(w!==void 0,w),w===void 0},S=>(V===k&&(console.error(S),L(!0)),!1)))}const $=we(P,0);return le(()=>{_!==void 0&&_(),$.cancel()}),Object.assign(i,{resetValidation:I,validate:P}),me(i,"hasError",()=>b.value),{isDirtyModel:g,hasRules:q,hasError:b,errorMessage:U,validate:P,resetValidation:I}}const ce=/^on[A-Z]/;function Pe(e,t){const u={listeners:D({}),attributes:D({})};function i(){const d={},f={};for(const g in e)g!=="class"&&g!=="style"&&ce.test(g)===!1&&(d[g]=e[g]);for(const g in t.props)ce.test(g)===!0&&(f[g]=t.props[g]);u.attributes.value=d,u.listeners.value=f}return Me(i),i(),u}function ne(e){return e!=null&&(""+e).length!==0}const ze={...he,...Oe,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},De=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function je({requiredForAttr:e=!0,tagProp:t}={}){const{props:u,attrs:i,proxy:d,vnode:f}=X(),g=be(u,d.$q),k=_e(u.for,e);return{requiredForAttr:e,tag:t===!0?p(()=>u.tag):{value:"label"},isDark:g,editable:p(()=>u.disable!==!0&&u.readonly!==!0),innerLoading:D(!1),focused:D(!1),hasPopupOpen:!1,splitAttrs:Pe(i,f),targetUid:k,rootRef:D(null),targetRef:D(null),controlRef:D(null)}}function Le(e){const{props:t,emit:u,slots:i,attrs:d,proxy:f}=X(),{$q:g}=f;let k=null;e.hasValue===void 0&&(e.hasValue=p(()=>ne(t.modelValue))),e.emitValue===void 0&&(e.emitValue=l=>{u("update:modelValue",l)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:o,onFocusout:n}),Object.assign(e,{clearValue:s,onControlFocusin:o,onControlFocusout:n,focus:w}),e.computedCounter===void 0&&(e.computedCounter=p(()=>{if(t.counter!==!1){const l=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,v=t.maxlength!==void 0?t.maxlength:t.maxValues;return l+(v!==void 0?" / "+v:"")}}));const{isDirtyModel:_,hasRules:q,hasError:C,errorMessage:b,resetValidation:U}=Ie(e.focused,e.innerLoading),B=e.floatingLabel!==void 0?p(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):p(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),I=p(()=>t.bottomSlots===!0||t.hint!==void 0||q.value===!0||t.counter===!0||t.error!==null),P=p(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),$=p(()=>`q-field row no-wrap items-start q-field--${P.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(B.value===!0?" q-field--float":"")+(V.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(C.value===!0?" q-field--error":"")+(C.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&I.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),j=p(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(C.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),V=p(()=>t.labelSlot===!0||t.label!==void 0),H=p(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&C.value!==!0?` text-${t.labelColor}`:"")),L=p(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:B.value,modelValue:t.modelValue,emitValue:e.emitValue})),z=p(()=>{const l={};return e.targetUid.value&&(l.for=e.targetUid.value),t.disable===!0&&(l["aria-disabled"]="true"),l});O(()=>t.for,l=>{e.targetUid.value=Ee(l,e.requiredForAttr)});function S(){const l=document.activeElement;let v=e.targetRef!==void 0&&e.targetRef.value;v&&(l===null||l.id!==e.targetUid.value)&&(v.hasAttribute("tabindex")===!0||(v=v.querySelector("[tabindex]")),v&&v!==l&&v.focus({preventScroll:!0}))}function w(){pe(S)}function E(){Be(S);const l=document.activeElement;l!==null&&e.rootRef.value.contains(l)&&l.blur()}function o(l){k!==null&&(clearTimeout(k),k=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,u("focus",l))}function n(l,v){k!==null&&clearTimeout(k),k=setTimeout(()=>{k=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,u("blur",l)),v!==void 0&&v())})}function s(l){Se(l),g.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),u("update:modelValue",null),u("clear",t.modelValue),Q(()=>{const v=_.value;U(),_.value=v})}function r(){const l=[];return i.prepend!==void 0&&l.push(x("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:J},i.prepend())),l.push(x("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},m())),C.value===!0&&t.noErrorIcon===!1&&l.push(M("error",[x(ue,{name:g.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?l.push(M("inner-loading-append",i.loading!==void 0?i.loading():[x(ye,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&l.push(M("inner-clearable-append",[x(ue,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||g.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:s})])),i.append!==void 0&&l.push(x("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:J},i.append())),e.getInnerAppend!==void 0&&l.push(M("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&l.push(e.getControlChild()),l}function m(){const l=[];return t.prefix!==void 0&&t.prefix!==null&&l.push(x("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&l.push(e.getShadowControl()),e.getControl!==void 0?l.push(e.getControl()):i.rawControl!==void 0?l.push(i.rawControl()):i.control!==void 0&&l.push(x("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},i.control(L.value))),V.value===!0&&l.push(x("div",{class:H.value},W(i.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&l.push(x("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),l.concat(W(i.default))}function c(){let l,v;C.value===!0?b.value!==null?(l=[x("div",{role:"alert"},b.value)],v=`q--slot-error-${b.value}`):(l=W(i.error),v="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(l=[x("div",t.hint)],v=`q--slot-hint-${t.hint}`):(l=W(i.hint),v="q--slot-hint"));const K=t.counter===!0||i.counter!==void 0;if(t.hideBottomSpace===!0&&K===!1&&l===void 0)return;const y=x("div",{key:v,class:"q-field__messages col"},l);return x("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:J},[t.hideBottomSpace===!0?y:x(Ve,{name:"q-transition--field-message"},()=>y),K===!0?x("div",{class:"q-field__counter"},i.counter!==void 0?i.counter():e.computedCounter.value):null])}function M(l,v){return v===null?null:x("div",{key:l,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},v)}let h=!1;return qe(()=>{h=!0}),Re(()=>{h===!0&&t.autofocus===!0&&f.focus()}),t.autofocus===!0&&re(()=>{f.focus()}),le(()=>{k!==null&&clearTimeout(k)}),Object.assign(f,{focus:w,blur:E}),function(){const v=e.getControl===void 0&&i.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...z.value}:z.value;return x(e.tag.value,{ref:e.rootRef,class:[$.value,d.class],style:d.style,...v},[i.before!==void 0?x("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:J},i.before()):null,x("div",{class:"q-field__inner relative-position col self-stretch"},[x("div",{ref:e.controlRef,class:j.value,tabindex:-1,...e.controlEvents},r()),I.value===!0?c():null]),i.after!==void 0?x("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:J},i.after()):null])}}const ve={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},te={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},ke=Object.keys(te);ke.forEach(e=>{te[e].regex=new RegExp(te[e].pattern)});const Ke=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+ke.join("")+"])|(.)","g"),ge=/[.*+?^${}()|[\]\\]/g,A=String.fromCharCode(1),Ne={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Ze(e,t,u,i){let d,f,g,k,_,q;const C=D(null),b=D(B());function U(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}O(()=>e.type+e.autogrow,P),O(()=>e.mask,o=>{if(o!==void 0)$(b.value,!0);else{const n=w(b.value);P(),e.modelValue!==n&&t("update:modelValue",n)}}),O(()=>e.fillMask+e.reverseFillMask,()=>{C.value===!0&&$(b.value,!0)}),O(()=>e.unmaskedValue,()=>{C.value===!0&&$(b.value)});function B(){if(P(),C.value===!0){const o=z(w(e.modelValue));return e.fillMask!==!1?E(o):o}return e.modelValue}function I(o){if(o<d.length)return d.slice(-o);let n="",s=d;const r=s.indexOf(A);if(r>-1){for(let m=o-s.length;m>0;m--)n+=A;s=s.slice(0,r)+n+s.slice(r)}return s}function P(){if(C.value=e.mask!==void 0&&e.mask.length!==0&&U(),C.value===!1){k=void 0,d="",f="";return}const o=ve[e.mask]===void 0?e.mask:ve[e.mask],n=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",s=n.replace(ge,"\\$&"),r=[],m=[],c=[];let M=e.reverseFillMask===!0,h="",l="";o.replace(Ke,(F,a,R,Z,N)=>{if(Z!==void 0){const T=te[Z];c.push(T),l=T.negate,M===!0&&(m.push("(?:"+l+"+)?("+T.pattern+"+)?(?:"+l+"+)?("+T.pattern+"+)?"),M=!1),m.push("(?:"+l+"+)?("+T.pattern+")?")}else if(R!==void 0)h="\\"+(R==="\\"?"":R),c.push(R),r.push("([^"+h+"]+)?"+h+"?");else{const T=a!==void 0?a:N;h=T==="\\"?"\\\\\\\\":T.replace(ge,"\\\\$&"),c.push(T),r.push("([^"+h+"]+)?"+h+"?")}});const v=new RegExp("^"+r.join("")+"("+(h===""?".":"[^"+h+"]")+"+)?"+(h===""?"":"["+h+"]*")+"$"),K=m.length-1,y=m.map((F,a)=>a===0&&e.reverseFillMask===!0?new RegExp("^"+s+"*"+F):a===K?new RegExp("^"+F+"("+(l===""?".":l)+"+)?"+(e.reverseFillMask===!0?"$":s+"*")):new RegExp("^"+F));g=c,k=F=>{const a=v.exec(e.reverseFillMask===!0?F:F.slice(0,c.length+1));a!==null&&(F=a.slice(1).join(""));const R=[],Z=y.length;for(let N=0,T=F;N<Z;N++){const Y=y[N].exec(T);if(Y===null)break;T=T.slice(Y.shift().length),R.push(...Y)}return R.length!==0?R.join(""):F},d=c.map(F=>typeof F=="string"?F:A).join(""),f=d.split(A).join(n)}function $(o,n,s){const r=i.value,m=r.selectionEnd,c=r.value.length-m,M=w(o);n===!0&&P();const h=z(M),l=e.fillMask!==!1?E(h):h,v=b.value!==l;r.value!==l&&(r.value=l),v===!0&&(b.value=l),document.activeElement===r&&Q(()=>{if(l===f){const y=e.reverseFillMask===!0?f.length:0;r.setSelectionRange(y,y,"forward");return}if(s==="insertFromPaste"&&e.reverseFillMask!==!0){const y=r.selectionEnd;let F=m-1;for(let a=_;a<=F&&a<y;a++)d[a]!==A&&F++;V.right(r,F);return}if(["deleteContentBackward","deleteContentForward"].indexOf(s)>-1){const y=e.reverseFillMask===!0?m===0?l.length>h.length?1:0:Math.max(0,l.length-(l===f?0:Math.min(h.length,c)+1))+1:m;r.setSelectionRange(y,y,"forward");return}if(e.reverseFillMask===!0)if(v===!0){const y=Math.max(0,l.length-(l===f?0:Math.min(h.length,c+1)));y===1&&m===1?r.setSelectionRange(y,y,"forward"):V.rightReverse(r,y)}else{const y=l.length-c;r.setSelectionRange(y,y,"backward")}else if(v===!0){const y=Math.max(0,d.indexOf(A),Math.min(h.length,m)-1);V.right(r,y)}else{const y=m-1;V.right(r,y)}});const K=e.unmaskedValue===!0?w(l):l;String(e.modelValue)!==K&&(e.modelValue!==null||K!=="")&&u(K,!0)}function j(o,n,s){const r=z(w(o.value));n=Math.max(0,d.indexOf(A),Math.min(r.length,n)),_=n,o.setSelectionRange(n,s,"forward")}const V={left(o,n){const s=d.slice(n-1).indexOf(A)===-1;let r=Math.max(0,n-1);for(;r>=0;r--)if(d[r]===A){n=r,s===!0&&n++;break}if(r<0&&d[n]!==void 0&&d[n]!==A)return V.right(o,0);n>=0&&o.setSelectionRange(n,n,"backward")},right(o,n){const s=o.value.length;let r=Math.min(s,n+1);for(;r<=s;r++)if(d[r]===A){n=r;break}else d[r-1]===A&&(n=r);if(r>s&&d[n-1]!==void 0&&d[n-1]!==A)return V.left(o,s);o.setSelectionRange(n,n,"forward")},leftReverse(o,n){const s=I(o.value.length);let r=Math.max(0,n-1);for(;r>=0;r--)if(s[r-1]===A){n=r;break}else if(s[r]===A&&(n=r,r===0))break;if(r<0&&s[n]!==void 0&&s[n]!==A)return V.rightReverse(o,0);n>=0&&o.setSelectionRange(n,n,"backward")},rightReverse(o,n){const s=o.value.length,r=I(s),m=r.slice(0,n+1).indexOf(A)===-1;let c=Math.min(s,n+1);for(;c<=s;c++)if(r[c-1]===A){n=c,n>0&&m===!0&&n--;break}if(c>s&&r[n-1]!==void 0&&r[n-1]!==A)return V.leftReverse(o,s);o.setSelectionRange(n,n,"forward")}};function H(o){t("click",o),q=void 0}function L(o){if(t("keydown",o),Ae(o)===!0||o.altKey===!0)return;const n=i.value,s=n.selectionStart,r=n.selectionEnd;if(o.shiftKey||(q=void 0),o.keyCode===37||o.keyCode===39){o.shiftKey&&q===void 0&&(q=n.selectionDirection==="forward"?s:r);const m=V[(o.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(o.preventDefault(),m(n,q===s?r:s),o.shiftKey){const c=n.selectionStart;n.setSelectionRange(Math.min(q,c),Math.max(q,c),"forward")}}else o.keyCode===8&&e.reverseFillMask!==!0&&s===r?(V.left(n,s),n.setSelectionRange(n.selectionStart,r,"backward")):o.keyCode===46&&e.reverseFillMask===!0&&s===r&&(V.rightReverse(n,r),n.setSelectionRange(s,n.selectionEnd,"forward"))}function z(o){if(o==null||o==="")return"";if(e.reverseFillMask===!0)return S(o);const n=g;let s=0,r="";for(let m=0;m<n.length;m++){const c=o[s],M=n[m];if(typeof M=="string")r+=M,c===M&&s++;else if(c!==void 0&&M.regex.test(c))r+=M.transform!==void 0?M.transform(c):c,s++;else return r}return r}function S(o){const n=g,s=d.indexOf(A);let r=o.length-1,m="";for(let c=n.length-1;c>=0&&r>-1;c--){const M=n[c];let h=o[r];if(typeof M=="string")m=M+m,h===M&&r--;else if(h!==void 0&&M.regex.test(h))do m=(M.transform!==void 0?M.transform(h):h)+m,r--,h=o[r];while(s===c&&h!==void 0&&M.regex.test(h));else return m}return m}function w(o){return typeof o!="string"||k===void 0?typeof o=="number"?k(""+o):o:k(o)}function E(o){return f.length-o.length<=0?o:e.reverseFillMask===!0&&o.length!==0?f.slice(0,-o.length)+o:o+f.slice(o.length)}return{innerValue:b,hasMask:C,moveCursorForPaste:j,updateMaskValue:$,onMaskedKeydown:L,onMaskedClick:H}}const Ue={name:String};function He(e){return p(()=>e.name||e.for)}function Qe(e,t){function u(){const i=e.modelValue;try{const d="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(i)===i&&("length"in i?Array.from(i):[i]).forEach(f=>{d.items.add(f)}),{files:d.files}}catch{return{files:void 0}}}return t===!0?p(()=>{if(e.type==="file")return u()}):p(u)}const Ye=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,We=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,Xe=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,Je=/[a-z0-9_ -]$/i;function Ge(e){return function(u){if(u.type==="compositionend"||u.type==="change"){if(u.target.qComposing!==!0)return;u.target.qComposing=!1,e(u)}else u.type==="compositionupdate"&&u.target.qComposing!==!0&&typeof u.data=="string"&&(Fe.is.firefox===!0?Je.test(u.data)===!1:Ye.test(u.data)===!0||We.test(u.data)===!0||Xe.test(u.data)===!0)===!0&&(u.target.qComposing=!0)}}var ot=oe({name:"QInput",inheritAttrs:!1,props:{...ze,...Ne,...Ue,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...De,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:u}){const{proxy:i}=X(),{$q:d}=i,f={};let g=NaN,k,_,q=null,C;const b=D(null),U=He(e),{innerValue:B,hasMask:I,moveCursorForPaste:P,updateMaskValue:$,onMaskedKeydown:j,onMaskedClick:V}=Ze(e,t,h,b),H=Qe(e,!0),L=p(()=>ne(B.value)),z=Ge(c),S=je(),w=p(()=>e.type==="textarea"||e.autogrow===!0),E=p(()=>w.value===!0||["text","search","url","tel","password"].includes(e.type)),o=p(()=>{const a={...S.splitAttrs.listeners.value,onInput:c,onPaste:m,onChange:v,onBlur:K,onFocus:ie};return a.onCompositionstart=a.onCompositionupdate=a.onCompositionend=z,I.value===!0&&(a.onKeydown=j,a.onClick=V),e.autogrow===!0&&(a.onAnimationend=M),a}),n=p(()=>{const a={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:U.value,...S.splitAttrs.attributes.value,id:S.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return w.value===!1&&(a.type=e.type),e.autogrow===!0&&(a.rows=1),a});O(()=>e.type,()=>{b.value&&(b.value.value=e.modelValue)}),O(()=>e.modelValue,a=>{if(I.value===!0){if(_===!0&&(_=!1,String(a)===g))return;$(a)}else B.value!==a&&(B.value=a,e.type==="number"&&f.hasOwnProperty("value")===!0&&(k===!0?k=!1:delete f.value));e.autogrow===!0&&Q(l)}),O(()=>e.autogrow,a=>{a===!0?Q(l):b.value!==null&&u.rows>0&&(b.value.style.height="auto")}),O(()=>e.dense,()=>{e.autogrow===!0&&Q(l)});function s(){pe(()=>{const a=document.activeElement;b.value!==null&&b.value!==a&&(a===null||a.id!==S.targetUid.value)&&b.value.focus({preventScroll:!0})})}function r(){b.value!==null&&b.value.select()}function m(a){if(I.value===!0&&e.reverseFillMask!==!0){const R=a.target;P(R,R.selectionStart,R.selectionEnd)}t("paste",a)}function c(a){if(!a||!a.target)return;if(e.type==="file"){t("update:modelValue",a.target.files);return}const R=a.target.value;if(a.target.qComposing===!0){f.value=R;return}if(I.value===!0)$(R,!1,a.inputType);else if(h(R),E.value===!0&&a.target===document.activeElement){const{selectionStart:Z,selectionEnd:N}=a.target;Z!==void 0&&N!==void 0&&Q(()=>{a.target===document.activeElement&&R.indexOf(a.target.value)===0&&a.target.setSelectionRange(Z,N)})}e.autogrow===!0&&l()}function M(a){t("animationend",a),l()}function h(a,R){C=()=>{q=null,e.type!=="number"&&f.hasOwnProperty("value")===!0&&delete f.value,e.modelValue!==a&&g!==a&&(g=a,R===!0&&(_=!0),t("update:modelValue",a),Q(()=>{g===a&&(g=NaN)})),C=void 0},e.type==="number"&&(k=!0,f.value=a),e.debounce!==void 0?(q!==null&&clearTimeout(q),f.value=a,q=setTimeout(C,e.debounce)):C()}function l(){requestAnimationFrame(()=>{const a=b.value;if(a!==null){const R=a.parentNode.style,{scrollTop:Z}=a,{overflowY:N,maxHeight:T}=d.platform.is.firefox===!0?{}:window.getComputedStyle(a),Y=N!==void 0&&N!=="scroll";Y===!0&&(a.style.overflowY="hidden"),R.marginBottom=a.scrollHeight-1+"px",a.style.height="1px",a.style.height=a.scrollHeight+"px",Y===!0&&(a.style.overflowY=parseInt(T,10)<a.scrollHeight?"auto":"hidden"),R.marginBottom="",a.scrollTop=Z}})}function v(a){z(a),q!==null&&(clearTimeout(q),q=null),C!==void 0&&C(),t("change",a.target.value)}function K(a){a!==void 0&&ie(a),q!==null&&(clearTimeout(q),q=null),C!==void 0&&C(),k=!1,_=!1,delete f.value,e.type!=="file"&&setTimeout(()=>{b.value!==null&&(b.value.value=B.value!==void 0?B.value:"")})}function y(){return f.hasOwnProperty("value")===!0?f.value:B.value!==void 0?B.value:""}le(()=>{K()}),re(()=>{e.autogrow===!0&&l()}),Object.assign(S,{innerValue:B,fieldClass:p(()=>`q-${w.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:p(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:b,emitValue:h,hasValue:L,floatingLabel:p(()=>L.value===!0&&(e.type!=="number"||isNaN(B.value)===!1)||ne(e.displayValue)),getControl:()=>x(w.value===!0?"textarea":"input",{ref:b,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...n.value,...o.value,...e.type!=="file"?{value:y()}:H.value}),getShadowControl:()=>x("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(w.value===!0?"":" text-no-wrap")},[x("span",{class:"invisible"},y()),x("span",e.shadowText)])});const F=Le(S);return Object.assign(i,{focus:s,select:r,getNativeElement:()=>b.value}),me(i,"nativeEl",()=>b.value),F}});export{nt as Q,at as a,ot as b};