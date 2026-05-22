import{c as et,f as mt,g as ht,h as vt,l as nt}from"./chunk-46KQL7ZO.js";import{y as yt}from"./chunk-SZZ5KB7J.js";import{Fa as Z,Ga as b,Ja as N,La as A,Ma as bt,Na as d,Oa as tt,j as gt,l as ft,n as W,oa as X,pa as $,q as O}from"./chunk-GPGIY4QA.js";import{Ab as ct,Bb as ut,Ca as rt,Cb as q,Ea as p,Eb as x,F as j,Fb as C,G as E,H as z,Ib as it,J as B,L as c,Mb as u,Nb as G,Ob as Y,Q as H,R as K,Sa as k,Ta as F,Vb as D,Wa as w,Xa as I,Xb as at,Y as _,Ya as g,Yb as pt,cb as f,fa as m,fb as L,gb as M,gc as P,hb as st,ib as dt,jb as s,kb as v,lb as y,mb as Q,oc as R,sb as V,tb as U,uc as h,vc as J,yb as S,zb as r}from"./chunk-RA4QBWRB.js";var _t=`
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: dt('avatar.width');
        height: dt('avatar.height');
        font-size: dt('avatar.font.size');
        background: dt('avatar.background');
        color: dt('avatar.color');
        border-radius: dt('avatar.border.radius');
    }

    .p-avatar-image {
        background: transparent;
    }

    .p-avatar-circle {
        border-radius: 50%;
    }

    .p-avatar-circle img {
        border-radius: 50%;
    }

    .p-avatar-icon {
        font-size: dt('avatar.icon.size');
        width: dt('avatar.icon.size');
        height: dt('avatar.icon.size');
    }

    .p-avatar img {
        width: 100%;
        height: 100%;
    }

    .p-avatar-lg {
        width: dt('avatar.lg.width');
        height: dt('avatar.lg.width');
        font-size: dt('avatar.lg.font.size');
    }

    .p-avatar-lg .p-avatar-icon {
        font-size: dt('avatar.lg.icon.size');
        width: dt('avatar.lg.icon.size');
        height: dt('avatar.lg.icon.size');
    }

    .p-avatar-xl {
        width: dt('avatar.xl.width');
        height: dt('avatar.xl.width');
        font-size: dt('avatar.xl.font.size');
    }

    .p-avatar-xl .p-avatar-icon {
        font-size: dt('avatar.xl.icon.size');
        width: dt('avatar.xl.icon.size');
        height: dt('avatar.xl.icon.size');
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }

    .p-avatar-group .p-avatar + .p-avatar {
        margin-inline-start: dt('avatar.group.offset');
    }

    .p-avatar-group .p-avatar {
        border: 2px solid dt('avatar.group.border.color');
    }

    .p-avatar-group .p-avatar-lg + .p-avatar-lg {
        margin-inline-start: dt('avatar.lg.group.offset');
    }

    .p-avatar-group .p-avatar-xl + .p-avatar-xl {
        margin-inline-start: dt('avatar.xl.group.offset');
    }
`;var Nt=["*"];function At(e,l){if(e&1&&(v(0,"span",3),G(1),y()),e&2){let t=r();u(t.cx("label")),s("pBind",t.ptm("label")),f("data-p",t.dataP),p(),Y(t.label)}}function zt(e,l){if(e&1&&Q(0,"span",5),e&2){let t=r(2);u(t.icon),s("pBind",t.ptm("icon"))("ngClass",t.cx("icon")),f("data-p",t.dataP)}}function Ft(e,l){if(e&1&&g(0,zt,1,5,"span",4),e&2){let t=r(),o=it(5);s("ngIf",t.icon)("ngIfElse",o)}}function Vt(e,l){if(e&1){let t=U();v(0,"img",7),S("error",function(n){H(t);let i=r(2);return K(i.imageError(n))}),y()}if(e&2){let t=r(2);s("pBind",t.ptm("image"))("src",t.image,rt),f("aria-label",t.ariaLabel)("data-p",t.dataP)}}function Pt(e,l){if(e&1&&g(0,Vt,1,4,"img",6),e&2){let t=r();s("ngIf",t.image)}}var Rt={root:({instance:e})=>["p-avatar p-component",{"p-avatar-image":e.image!=null,"p-avatar-circle":e.shape==="circle","p-avatar-lg":e.size==="large","p-avatar-xl":e.size==="xlarge"}],label:"p-avatar-label",icon:"p-avatar-icon"},xt=(()=>{class e extends N{name="avatar";style=_t;classes=Rt;static \u0275fac=(()=>{let t;return function(n){return(t||(t=m(e)))(n||e)}})();static \u0275prov=E({token:e,factory:e.\u0275fac})}return e})();var Ct=new B("AVATAR_INSTANCE"),$t=(()=>{class e extends bt{componentName="Avatar";$pcAvatar=c(Ct,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(d,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}label;icon;image;size="normal";shape="square";styleClass;ariaLabel;ariaLabelledBy;onImageError=new _;_componentStyle=c(xt);imageError(t){this.onImageError.emit(t)}get dataP(){return this.cn({[this.shape]:this.shape,[this.size]:this.size})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=m(e)))(n||e)}})();static \u0275cmp=k({type:e,selectors:[["p-avatar"]],hostVars:5,hostBindings:function(o,n){o&2&&(f("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledBy)("data-p",n.dataP),u(n.cn(n.cx("root"),n.styleClass)))},inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onImageError:"onImageError"},features:[D([xt,{provide:Ct,useExisting:e},{provide:A,useExisting:e}]),w([d]),I],ngContentSelectors:Nt,decls:6,vars:2,consts:[["iconTemplate",""],["imageTemplate",""],[3,"pBind","class",4,"ngIf","ngIfElse"],[3,"pBind"],[3,"pBind","class","ngClass",4,"ngIf","ngIfElse"],[3,"pBind","ngClass"],[3,"pBind","src","error",4,"ngIf"],[3,"error","pBind","src"]],template:function(o,n){if(o&1&&(ct(),ut(0),g(1,At,2,5,"span",2)(2,Ft,1,2,"ng-template",null,0,P)(4,Pt,1,1,"ng-template",null,1,P)),o&2){let i=it(3);p(),s("ngIf",n.label)("ngIfElse",i)}},dependencies:[O,gt,ft,b,d],encapsulation:2,changeDetection:0})}return e})(),Ee=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=F({type:e});static \u0275inj=z({imports:[$t,b,b]})}return e})();var kt=`
    .p-togglebutton {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        color: dt('togglebutton.color');
        background: dt('togglebutton.background');
        border: 1px solid dt('togglebutton.border.color');
        padding: dt('togglebutton.padding');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
        border-radius: dt('togglebutton.border.radius');
        outline-color: transparent;
        font-weight: dt('togglebutton.font.weight');
    }

    .p-togglebutton-content {
        display: inline-flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        gap: dt('togglebutton.gap');
        padding: dt('togglebutton.content.padding');
        background: transparent;
        border-radius: dt('togglebutton.content.border.radius');
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
        background: dt('togglebutton.hover.background');
        color: dt('togglebutton.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked {
        background: dt('togglebutton.checked.background');
        border-color: dt('togglebutton.checked.border.color');
        color: dt('togglebutton.checked.color');
    }

    .p-togglebutton-checked .p-togglebutton-content {
        background: dt('togglebutton.content.checked.background');
        box-shadow: dt('togglebutton.content.checked.shadow');
    }

    .p-togglebutton:focus-visible {
        box-shadow: dt('togglebutton.focus.ring.shadow');
        outline: dt('togglebutton.focus.ring.width') dt('togglebutton.focus.ring.style') dt('togglebutton.focus.ring.color');
        outline-offset: dt('togglebutton.focus.ring.offset');
    }

    .p-togglebutton.p-invalid {
        border-color: dt('togglebutton.invalid.border.color');
    }

    .p-togglebutton:disabled {
        opacity: 1;
        cursor: default;
        background: dt('togglebutton.disabled.background');
        border-color: dt('togglebutton.disabled.border.color');
        color: dt('togglebutton.disabled.color');
    }

    .p-togglebutton-label,
    .p-togglebutton-icon {
        position: relative;
        transition: none;
    }

    .p-togglebutton-icon {
        color: dt('togglebutton.icon.color');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
        color: dt('togglebutton.icon.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
        color: dt('togglebutton.icon.checked.color');
    }

    .p-togglebutton:disabled .p-togglebutton-icon {
        color: dt('togglebutton.icon.disabled.color');
    }

    .p-togglebutton-sm {
        padding: dt('togglebutton.sm.padding');
        font-size: dt('togglebutton.sm.font.size');
    }

    .p-togglebutton-sm .p-togglebutton-content {
        padding: dt('togglebutton.content.sm.padding');
    }

    .p-togglebutton-lg {
        padding: dt('togglebutton.lg.padding');
        font-size: dt('togglebutton.lg.font.size');
    }

    .p-togglebutton-lg .p-togglebutton-content {
        padding: dt('togglebutton.content.lg.padding');
    }

    .p-togglebutton-fluid {
        width: 100%;
    }
`;var jt=["icon"],Ht=["content"],Lt=e=>({$implicit:e});function Kt(e,l){e&1&&V(0)}function Qt(e,l){if(e&1&&Q(0,"span",0),e&2){let t=r(3);u(t.cn(t.cx("icon"),t.checked?t.onIcon:t.offIcon,t.iconPos==="left"?t.cx("iconLeft"):t.cx("iconRight"))),s("pBind",t.ptm("icon"))}}function Ut(e,l){if(e&1&&L(0,Qt,1,3,"span",2),e&2){let t=r(2);M(t.onIcon||t.offIcon?0:-1)}}function qt(e,l){e&1&&V(0)}function Gt(e,l){if(e&1&&g(0,qt,1,0,"ng-container",1),e&2){let t=r(2);s("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",at(2,Lt,t.checked))}}function Yt(e,l){if(e&1&&(L(0,Ut,1,1)(1,Gt,1,4,"ng-container"),v(2,"span",0),G(3),y()),e&2){let t=r();M(t.iconTemplate?1:0),p(2),u(t.cx("label")),s("pBind",t.ptm("label")),p(),Y(t.checked?t.hasOnLabel?t.onLabel:"\xA0":t.hasOffLabel?t.offLabel:"\xA0")}}var Jt=`
    ${kt}

    /* For PrimeNG (iconPos) */
    .p-togglebutton-icon-right {
        order: 1;
    }

    .p-togglebutton.ng-invalid.ng-dirty {
        border-color: dt('togglebutton.invalid.border.color');
    }
`,Wt={root:({instance:e})=>["p-togglebutton p-component",{"p-togglebutton-checked":e.checked,"p-invalid":e.invalid(),"p-disabled":e.$disabled(),"p-togglebutton-sm p-inputfield-sm":e.size==="small","p-togglebutton-lg p-inputfield-lg":e.size==="large","p-togglebutton-fluid":e.fluid()}],content:"p-togglebutton-content",icon:"p-togglebutton-icon",iconLeft:"p-togglebutton-icon-left",iconRight:"p-togglebutton-icon-right",label:"p-togglebutton-label"},wt=(()=>{class e extends N{name="togglebutton";style=Jt;classes=Wt;static \u0275fac=(()=>{let t;return function(n){return(t||(t=m(e)))(n||e)}})();static \u0275prov=E({token:e,factory:e.\u0275fac})}return e})();var It=new B("TOGGLEBUTTON_INSTANCE"),Xt={provide:et,useExisting:j(()=>lt),multi:!0},lt=(()=>{class e extends nt{componentName="ToggleButton";$pcToggleButton=c(It,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(d,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}onKeyDown(t){switch(t.code){case"Enter":this.toggle(t),t.preventDefault();break;case"Space":this.toggle(t),t.preventDefault();break}}toggle(t){!this.$disabled()&&!(this.allowEmpty===!1&&this.checked)&&(this.checked=!this.checked,this.writeModelValue(this.checked),this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:t,checked:this.checked}),this.cd.markForCheck())}onLabel="Yes";offLabel="No";onIcon;offIcon;ariaLabel;ariaLabelledBy;styleClass;inputId;tabindex=0;iconPos="left";autofocus;size;allowEmpty;fluid=R(void 0,{transform:h});onChange=new _;iconTemplate;contentTemplate;templates;checked=!1;onInit(){(this.checked===null||this.checked===void 0)&&(this.checked=!1)}_componentStyle=c(wt);onBlur(){this.onModelTouched()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.offLabel&&this.offLabel.length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;onAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"icon":this._iconTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}writeControlValue(t,o){this.checked=t,o(t),this.cd.markForCheck()}get dataP(){return this.cn({checked:this.active,invalid:this.invalid(),[this.size]:this.size})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=m(e)))(n||e)}})();static \u0275cmp=k({type:e,selectors:[["p-toggleButton"],["p-togglebutton"],["p-toggle-button"]],contentQueries:function(o,n,i){if(o&1&&q(i,jt,4)(i,Ht,4)(i,Z,4),o&2){let a;x(a=C())&&(n.iconTemplate=a.first),x(a=C())&&(n.contentTemplate=a.first),x(a=C())&&(n.templates=a)}},hostVars:11,hostBindings:function(o,n){o&1&&S("keydown",function(a){return n.onKeyDown(a)})("click",function(a){return n.toggle(a)}),o&2&&(f("aria-labelledby",n.ariaLabelledBy)("aria-label",n.ariaLabel)("aria-pressed",n.checked?"true":"false")("role","button")("tabindex",n.tabindex!==void 0?n.tabindex:n.$disabled()?-1:0)("data-pc-name","togglebutton")("data-p-checked",n.active)("data-p-disabled",n.$disabled())("data-p",n.dataP),u(n.cn(n.cx("root"),n.styleClass)))},inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",styleClass:"styleClass",inputId:"inputId",tabindex:[2,"tabindex","tabindex",J],iconPos:"iconPos",autofocus:[2,"autofocus","autofocus",h],size:"size",allowEmpty:"allowEmpty",fluid:[1,"fluid"]},outputs:{onChange:"onChange"},features:[D([Xt,wt,{provide:It,useExisting:e},{provide:A,useExisting:e}]),w([yt,d]),I],decls:3,vars:9,consts:[[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","pBind"]],template:function(o,n){o&1&&(v(0,"span",0),g(1,Kt,1,0,"ng-container",1),L(2,Yt,4,5),y()),o&2&&(u(n.cx("content")),s("pBind",n.ptm("content")),f("data-p",n.dataP),p(),s("ngTemplateOutlet",n.contentTemplate||n._contentTemplate)("ngTemplateOutletContext",at(7,Lt,n.checked)),p(),M(n.contentTemplate?-1:2))},dependencies:[O,W,b,tt,d],encapsulation:2,changeDetection:0})}return e})();var Mt=`
    .p-selectbutton {
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        outline-color: transparent;
        border-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton {
        border-radius: 0;
        border-width: 1px 1px 1px 0;
    }

    .p-selectbutton .p-togglebutton:focus-visible {
        position: relative;
        z-index: 1;
    }

    .p-selectbutton .p-togglebutton:first-child {
        border-inline-start-width: 1px;
        border-start-start-radius: dt('selectbutton.border.radius');
        border-end-start-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton:last-child {
        border-start-end-radius: dt('selectbutton.border.radius');
        border-end-end-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton.p-invalid {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }

    .p-selectbutton-fluid {
        width: 100%;
    }
    
    .p-selectbutton-fluid .p-togglebutton {
        flex: 1 1 0;
    }
`;var Zt=["item"],te=(e,l)=>({$implicit:e,index:l});function ee(e,l){return this.getOptionLabel(l)}function ne(e,l){e&1&&V(0)}function oe(e,l){if(e&1&&g(0,ne,1,0,"ng-container",3),e&2){let t=r(2),o=t.$implicit,n=t.$index,i=r();s("ngTemplateOutlet",i.itemTemplate||i._itemTemplate)("ngTemplateOutletContext",pt(2,te,o,n))}}function ie(e,l){e&1&&g(0,oe,1,5,"ng-template",null,0,P)}function ae(e,l){if(e&1){let t=U();v(0,"p-togglebutton",2),S("onChange",function(n){let i=H(t),a=i.$implicit,T=i.$index,ot=r();return K(ot.onOptionSelect(n,a,T))}),L(1,ie,2,0),y()}if(e&2){let t=l.$implicit,o=r();s("autofocus",o.autofocus)("styleClass",o.styleClass)("ngModel",o.isSelected(t))("onLabel",o.getOptionLabel(t))("offLabel",o.getOptionLabel(t))("disabled",o.$disabled()||o.isOptionDisabled(t))("allowEmpty",o.getAllowEmpty())("size",o.size())("fluid",o.fluid())("pt",o.ptm("pcToggleButton"))("unstyled",o.unstyled()),p(),M(o.itemTemplate||o._itemTemplate?1:-1)}}var le=`
    ${Mt}

    /* For PrimeNG */
    .p-selectbutton.ng-invalid.ng-dirty {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }
`,re={root:({instance:e})=>["p-selectbutton p-component",{"p-invalid":e.invalid(),"p-selectbutton-fluid":e.fluid()}]},St=(()=>{class e extends N{name="selectbutton";style=le;classes=re;static \u0275fac=(()=>{let t;return function(n){return(t||(t=m(e)))(n||e)}})();static \u0275prov=E({token:e,factory:e.\u0275fac})}return e})();var Dt=new B("SELECTBUTTON_INSTANCE"),se={provide:et,useExisting:j(()=>Ot),multi:!0},Ot=(()=>{class e extends nt{componentName="SelectButton";options;optionLabel;optionValue;optionDisabled;get unselectable(){return this._unselectable}_unselectable=!1;set unselectable(t){this._unselectable=t,this.allowEmpty=!t}tabindex=0;multiple;allowEmpty=!0;styleClass;ariaLabelledBy;dataKey;autofocus;size=R();fluid=R(void 0,{transform:h});onOptionClick=new _;onChange=new _;itemTemplate;_itemTemplate;get equalityKey(){return this.optionValue?null:this.dataKey}value;focusedIndex=0;_componentStyle=c(St);$pcSelectButton=c(Dt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(d,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}getAllowEmpty(){return this.multiple?this.allowEmpty||this.value?.length!==1:this.allowEmpty}getOptionLabel(t){return this.optionLabel?X(t,this.optionLabel):t.label!=null?t.label:t}getOptionValue(t){return this.optionValue?X(t,this.optionValue):this.optionLabel||t.value===void 0?t:t.value}isOptionDisabled(t){return this.optionDisabled?X(t,this.optionDisabled):t.disabled!==void 0?t.disabled:!1}onOptionSelect(t,o,n){if(this.$disabled()||this.isOptionDisabled(o))return;let i=this.isSelected(o);if(i&&this.unselectable)return;let a=this.getOptionValue(o),T;if(this.multiple)i?T=this.value.filter(ot=>!$(ot,a,this.equalityKey||void 0)):T=this.value?[...this.value,a]:[a];else{if(i&&!this.allowEmpty)return;T=i?null:a}this.focusedIndex=n,this.value=T,this.writeModelValue(this.value),this.onModelChange(this.value),this.onChange.emit({originalEvent:t,value:this.value}),this.onOptionClick.emit({originalEvent:t,option:o,index:n})}changeTabIndexes(t,o){let n,i;for(let a=0;a<=this.el.nativeElement.children.length-1;a++)this.el.nativeElement.children[a].getAttribute("tabindex")==="0"&&(n={elem:this.el.nativeElement.children[a],index:a});o==="prev"?n.index===0?i=this.el.nativeElement.children.length-1:i=n.index-1:n.index===this.el.nativeElement.children.length-1?i=0:i=n.index+1,this.focusedIndex=i,this.el.nativeElement.children[i].focus()}onFocus(t,o){this.focusedIndex=o}onBlur(){this.onModelTouched()}removeOption(t){this.value=this.value.filter(o=>!$(o,this.getOptionValue(t),this.dataKey))}isSelected(t){let o=!1,n=this.getOptionValue(t);if(this.multiple){if(this.value&&Array.isArray(this.value)){for(let i of this.value)if($(i,n,this.dataKey)){o=!0;break}}}else o=$(this.getOptionValue(t),this.value,this.equalityKey||void 0);return o}templates;onAfterContentInit(){this.templates.forEach(t=>{t.getType()==="item"&&(this._itemTemplate=t.template)})}writeControlValue(t,o){this.value=t,o(this.value),this.cd.markForCheck()}get dataP(){return this.cn({invalid:this.invalid()})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=m(e)))(n||e)}})();static \u0275cmp=k({type:e,selectors:[["p-selectButton"],["p-selectbutton"],["p-select-button"]],contentQueries:function(o,n,i){if(o&1&&q(i,Zt,4)(i,Z,4),o&2){let a;x(a=C())&&(n.itemTemplate=a.first),x(a=C())&&(n.templates=a)}},hostVars:5,hostBindings:function(o,n){o&2&&(f("role","group")("aria-labelledby",n.ariaLabelledBy)("data-p",n.dataP),u(n.cx("root")))},inputs:{options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",unselectable:[2,"unselectable","unselectable",h],tabindex:[2,"tabindex","tabindex",J],multiple:[2,"multiple","multiple",h],allowEmpty:[2,"allowEmpty","allowEmpty",h],styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",dataKey:"dataKey",autofocus:[2,"autofocus","autofocus",h],size:[1,"size"],fluid:[1,"fluid"]},outputs:{onOptionClick:"onOptionClick",onChange:"onChange"},features:[D([se,St,{provide:Dt,useExisting:e},{provide:A,useExisting:e}]),w([d]),I],decls:2,vars:0,consts:[["content",""],[3,"autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size","fluid","pt","unstyled"],[3,"onChange","autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size","fluid","pt","unstyled"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(o,n){o&1&&st(0,ae,2,12,"p-togglebutton",1,ee,!0),o&2&&dt(n.options)},dependencies:[lt,vt,mt,ht,O,W,b,tt],encapsulation:2,changeDetection:0})}return e})(),vn=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=F({type:e});static \u0275inj=z({imports:[Ot,b,b]})}return e})();export{$t as a,Ee as b,vn as c};
