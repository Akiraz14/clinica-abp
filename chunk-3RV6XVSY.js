import{ca as $,ja as G,ka as J,l as z,la as K,ma as M,n as H,o as V,pa as L,ra as U,sa as W,ta as h,ua as x}from"./chunk-EOYWYDL2.js";import{Ca as p,Eb as A,Fb as _,G as I,Gb as c,H as F,Hb as O,J as P,Jb as q,L as T,Qa as v,Ra as k,Ua as j,Va as w,Wa as s,ba as N,fa as E,fb as a,gb as i,hb as o,ib as b,mb as S,nb as D,ob as y,sb as g,tb as Q,ub as C,vb as R,xb as m,yb as f}from"./chunk-FX7SBMII.js";import"./chunk-7CGTOI24.js";var X=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`;var ie=["header"],ae=["title"],re=["subtitle"],oe=["content"],le=["footer"],pe=["*",[["p-header"]],[["p-footer"]]],de=["*","p-header","p-footer"];function ce(t,d){t&1&&y(0)}function se(t,d){if(t&1&&(i(0,"div",1),C(1,1),s(2,ce,1,0,"ng-container",2),o()),t&2){let e=g();_(e.cx("header")),a("pBind",e.ptm("header")),p(2),a("ngTemplateOutlet",e.headerTemplate||e._headerTemplate)}}function me(t,d){if(t&1&&(S(0),c(1),D()),t&2){let e=g(2);p(),O(e.header)}}function fe(t,d){t&1&&y(0)}function ue(t,d){if(t&1&&(i(0,"div",1),s(1,me,2,1,"ng-container",3)(2,fe,1,0,"ng-container",2),o()),t&2){let e=g();_(e.cx("title")),a("pBind",e.ptm("title")),p(),a("ngIf",e.header&&!e._titleTemplate&&!e.titleTemplate),p(),a("ngTemplateOutlet",e.titleTemplate||e._titleTemplate)}}function _e(t,d){if(t&1&&(S(0),c(1),D()),t&2){let e=g(2);p(),O(e.subheader)}}function ge(t,d){t&1&&y(0)}function ye(t,d){if(t&1&&(i(0,"div",1),s(1,_e,2,1,"ng-container",3)(2,ge,1,0,"ng-container",2),o()),t&2){let e=g();_(e.cx("subtitle")),a("pBind",e.ptm("subtitle")),p(),a("ngIf",e.subheader&&!e._subtitleTemplate&&!e.subtitleTemplate),p(),a("ngTemplateOutlet",e.subtitleTemplate||e._subtitleTemplate)}}function he(t,d){t&1&&y(0)}function Te(t,d){t&1&&y(0)}function ve(t,d){if(t&1&&(i(0,"div",1),C(1,2),s(2,Te,1,0,"ng-container",2),o()),t&2){let e=g();_(e.cx("footer")),a("pBind",e.ptm("footer")),p(2),a("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}var be=`
    ${X}

    .p-card {
        display: block;
    }
`,Ce={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},Y=(()=>{class t extends L{name="card";style=be;classes=Ce;static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var Z=new P("CARD_INSTANCE"),B=(()=>{class t extends W{componentName="Card";$pcCard=T(Z,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=T(h,{self:!0});_componentStyle=T(Y);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}header;subheader;set style(e){$(this._style(),e)||(this._style.set(e),this.el?.nativeElement&&e&&Object.keys(e).forEach(l=>{this.el.nativeElement.style[l]=e[l]}))}get style(){return this._style()}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=N(null);getBlockableElement(){return this.el.nativeElement}templates;onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"header":this._headerTemplate=e.template;break;case"title":this._titleTemplate=e.template;break;case"subtitle":this._subtitleTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275cmp=v({type:t,selectors:[["p-card"]],contentQueries:function(l,n,u){if(l&1&&R(u,G,5)(u,J,5)(u,ie,4)(u,ae,4)(u,re,4)(u,oe,4)(u,le,4)(u,K,4),l&2){let r;m(r=f())&&(n.headerFacet=r.first),m(r=f())&&(n.footerFacet=r.first),m(r=f())&&(n.headerTemplate=r.first),m(r=f())&&(n.titleTemplate=r.first),m(r=f())&&(n.subtitleTemplate=r.first),m(r=f())&&(n.contentTemplate=r.first),m(r=f())&&(n.footerTemplate=r.first),m(r=f())&&(n.templates=r)}},hostVars:4,hostBindings:function(l,n){l&2&&(A(n._style()),_(n.cn(n.cx("root"),n.styleClass)))},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[q([Y,{provide:Z,useExisting:t},{provide:U,useExisting:t}]),j([h]),w],ngContentSelectors:de,decls:8,vars:11,consts:[[3,"pBind","class",4,"ngIf"],[3,"pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"]],template:function(l,n){l&1&&(Q(pe),s(0,se,3,4,"div",0),i(1,"div",1),s(2,ue,3,5,"div",0)(3,ye,3,5,"div",0),i(4,"div",1),C(5),s(6,he,1,0,"ng-container",2),o(),s(7,ve,3,4,"div",0),o()),l&2&&(a("ngIf",n.headerFacet||n.headerTemplate||n._headerTemplate),p(),_(n.cx("body")),a("pBind",n.ptm("body")),p(),a("ngIf",n.header||n.titleTemplate||n._titleTemplate),p(),a("ngIf",n.subheader||n.subtitleTemplate||n._subtitleTemplate),p(),_(n.cx("content")),a("pBind",n.ptm("content")),p(2),a("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),p(),a("ngIf",n.footerFacet||n.footerTemplate||n._footerTemplate))},dependencies:[V,z,H,M,x,h],encapsulation:2,changeDetection:0})}return t})(),ee=(()=>{class t{static \u0275fac=function(l){return new(l||t)};static \u0275mod=k({type:t});static \u0275inj=F({imports:[B,M,x,M,x]})}return t})();var te=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=v({type:t,selectors:[["app-dashboard"]],decls:31,vars:0,consts:[[1,"dashboard"],[1,"page-header"],[1,"stats-grid"],[1,"stat-card"],[1,"pi","pi-users"],[1,"pi","pi-calendar"],[1,"pi","pi-briefcase"]],template:function(e,l){e&1&&(i(0,"div",0)(1,"div",1)(2,"h1"),c(3,"Dashboard"),o(),i(4,"p"),c(5,"Clinical operations overview"),o()(),i(6,"div",2)(7,"p-card")(8,"div",3),b(9,"i",4),i(10,"div")(11,"h3"),c(12,"1,245"),o(),i(13,"span"),c(14,"Patients"),o()()()(),i(15,"p-card")(16,"div",3),b(17,"i",5),i(18,"div")(19,"h3"),c(20,"84"),o(),i(21,"span"),c(22,"Appointments Today"),o()()()(),i(23,"p-card")(24,"div",3),b(25,"i",6),i(26,"div")(27,"h3"),c(28,"27"),o(),i(29,"span"),c(30,"Specialists"),o()()()()()())},dependencies:[ee,B],styles:[".page-header[_ngcontent-%COMP%]{margin-bottom:1.5rem}.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0}.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--color-text-gray)}.stats-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1rem}.stat-card[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem}.stat-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:2rem;color:var(--color-blue)}.stat-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1.5rem}.stat-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--color-text-gray)}"]})};export{te as Dashboard};
