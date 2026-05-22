import{a as De,b as Ie}from"./chunk-LUIGVTZ2.js";import{a as ye}from"./chunk-JN6L33XR.js";import{b as Me}from"./chunk-R5RKAZPW.js";import{g as ke,h as Ee,i as we,k as Oe,l as Te}from"./chunk-QIY6BFIW.js";import{c as Se,d as Pe}from"./chunk-EOXRTNPI.js";import"./chunk-46KQL7ZO.js";import"./chunk-CB7YODRY.js";import{A as Ce,f as ge,h as ue,i as xe,z as be}from"./chunk-SZZ5KB7J.js";import{Fa as _e,Ga as S,Ja as L,La as Q,Ma as $,Na as x,Oa as H,k as ce,l as me,n as se,o as ve,p as fe,q as R,xa as he}from"./chunk-GPGIY4QA.js";import{Ab as ne,Bb as ie,Cb as oe,Ea as l,Eb as P,Fb as w,G as D,H as I,Ib as ae,J as z,L as f,Lb as re,Mb as v,Nb as a,Ob as u,Pb as O,Q as y,Qb as J,R as b,Rb as K,Sa as M,Ta as A,Vb as j,Wa as B,Xa as N,Xb as E,Ya as k,ba as X,cb as g,cc as T,ec as V,fa as C,fb as q,fc as le,gb as U,gc as pe,hb as Y,ib as Z,jb as c,kb as n,kc as de,lb as i,mb as m,qb as ee,rb as te,sb as F,tb as G,yb as _,zb as s}from"./chunk-RA4QBWRB.js";import"./chunk-7CGTOI24.js";var ze=`
    .p-divider-horizontal {
        display: flex;
        width: 100%;
        position: relative;
        align-items: center;
        margin: dt('divider.horizontal.margin');
        padding: dt('divider.horizontal.padding');
    }

    .p-divider-horizontal:before {
        position: absolute;
        display: block;
        inset-block-start: 50%;
        inset-inline-start: 0;
        width: 100%;
        content: '';
        border-block-start: 1px solid dt('divider.border.color');
    }

    .p-divider-horizontal .p-divider-content {
        padding: dt('divider.horizontal.content.padding');
    }

    .p-divider-vertical {
        min-height: 100%;
        display: flex;
        position: relative;
        justify-content: center;
        margin: dt('divider.vertical.margin');
        padding: dt('divider.vertical.padding');
    }

    .p-divider-vertical:before {
        position: absolute;
        display: block;
        inset-block-start: 0;
        inset-inline-start: 50%;
        height: 100%;
        content: '';
        border-inline-start: 1px solid dt('divider.border.color');
    }

    .p-divider.p-divider-vertical .p-divider-content {
        padding: dt('divider.vertical.content.padding');
    }

    .p-divider-content {
        z-index: 1;
        background: dt('divider.content.background');
        color: dt('divider.content.color');
    }

    .p-divider-solid.p-divider-horizontal:before {
        border-block-start-style: solid;
    }

    .p-divider-solid.p-divider-vertical:before {
        border-inline-start-style: solid;
    }

    .p-divider-dashed.p-divider-horizontal:before {
        border-block-start-style: dashed;
    }

    .p-divider-dashed.p-divider-vertical:before {
        border-inline-start-style: dashed;
    }

    .p-divider-dotted.p-divider-horizontal:before {
        border-block-start-style: dotted;
    }

    .p-divider-dotted.p-divider-vertical:before {
        border-inline-start-style: dotted;
    }

    .p-divider-left:dir(rtl),
    .p-divider-right:dir(rtl) {
        flex-direction: row-reverse;
    }
`;var He=["*"],qe={root:({instance:e})=>({justifyContent:e.layout==="horizontal"?e.align==="center"||e.align==null?"center":e.align==="left"?"flex-start":e.align==="right"?"flex-end":null:null,alignItems:e.layout==="vertical"?e.align==="center"||e.align==null?"center":e.align==="top"?"flex-start":e.align==="bottom"?"flex-end":null:null})},Ue={root:({instance:e})=>["p-divider p-component","p-divider-"+e.layout,"p-divider-"+e.type,{"p-divider-left":e.layout==="horizontal"&&(!e.align||e.align==="left")},{"p-divider-center":e.layout==="horizontal"&&e.align==="center"},{"p-divider-right":e.layout==="horizontal"&&e.align==="right"},{"p-divider-top":e.layout==="vertical"&&e.align==="top"},{"p-divider-center":e.layout==="vertical"&&(!e.align||e.align==="center")},{"p-divider-bottom":e.layout==="vertical"&&e.align==="bottom"}],content:"p-divider-content"},Ae=(()=>{class e extends L{name="divider";style=ze;classes=Ue;inlineStyles=qe;static \u0275fac=(()=>{let t;return function(o){return(t||(t=C(e)))(o||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac})}return e})();var Be=new z("DIVIDER_INSTANCE"),Ge=(()=>{class e extends ${componentName="Divider";$pcDivider=f(Be,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=f(x,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;layout="horizontal";type="solid";align;_componentStyle=f(Ae);get dataP(){return this.cn({[this.align]:this.align,[this.layout]:this.layout,[this.type]:this.type})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=C(e)))(o||e)}})();static \u0275cmp=M({type:e,selectors:[["p-divider"]],hostAttrs:["role","separator"],hostVars:6,hostBindings:function(r,o){r&2&&(g("aria-orientation",o.layout)("data-p",o.dataP),re(o.sx("root")),v(o.cn(o.cx("root"),o.styleClass)))},inputs:{styleClass:"styleClass",layout:"layout",type:"type",align:"align"},features:[j([Ae,{provide:Be,useExisting:e},{provide:Q,useExisting:e}]),B([x]),N],ngContentSelectors:He,decls:2,vars:3,consts:[[3,"pBind"]],template:function(r,o){r&1&&(ne(),n(0,"div",0),ie(1),i()),r&2&&(v(o.cx("content")),c("pBind",o.ptm("content")))},dependencies:[R,S,H,x],encapsulation:2,changeDetection:0})}return e})(),Fe=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=A({type:e});static \u0275inj=I({imports:[Ge,H,H]})}return e})();var je=`
    .p-timeline {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        direction: ltr;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .p-timeline-left .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-left .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event {
        flex-direction: row-reverse;
    }

    .p-timeline-right .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: row-reverse;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical .p-timeline-event-opposite,
    .p-timeline-vertical .p-timeline-event-content {
        padding: dt('timeline.vertical.event.content.padding');
    }

    .p-timeline-vertical .p-timeline-event-connector {
        width: dt('timeline.event.connector.size');
    }

    .p-timeline-event {
        display: flex;
        position: relative;
        min-height: dt('timeline.event.min.height');
    }

    .p-timeline-event:last-child {
        min-height: 0;
    }

    .p-timeline-event-opposite {
        flex: 1;
    }

    .p-timeline-event-content {
        flex: 1;
    }

    .p-timeline-event-separator {
        flex: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .p-timeline-event-marker {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        align-self: baseline;
        border-width: dt('timeline.event.marker.border.width');
        border-style: solid;
        border-color: dt('timeline.event.marker.border.color');
        border-radius: dt('timeline.event.marker.border.radius');
        width: dt('timeline.event.marker.size');
        height: dt('timeline.event.marker.size');
        background: dt('timeline.event.marker.background');
    }

    .p-timeline-event-marker::before {
        content: ' ';
        border-radius: dt('timeline.event.marker.content.border.radius');
        width: dt('timeline.event.marker.content.size');
        height: dt('timeline.event.marker.content.size');
        background: dt('timeline.event.marker.content.background');
    }

    .p-timeline-event-marker::after {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: dt('timeline.event.marker.border.radius');
        box-shadow: dt('timeline.event.marker.content.inset.shadow');
    }

    .p-timeline-event-connector {
        flex-grow: 1;
        background: dt('timeline.event.connector.color');
    }

    .p-timeline-horizontal {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event {
        flex-direction: column;
        flex: 1;
    }

    .p-timeline-horizontal .p-timeline-event:last-child {
        flex: 0;
    }

    .p-timeline-horizontal .p-timeline-event-separator {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event-connector {
        width: 100%;
        height: dt('timeline.event.connector.size');
    }

    .p-timeline-horizontal .p-timeline-event-opposite,
    .p-timeline-horizontal .p-timeline-event-content {
        padding: dt('timeline.horizontal.event.content.padding');
    }

    .p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: column-reverse;
    }

    .p-timeline-bottom .p-timeline-event {
        flex-direction: column-reverse;
    }
`;var Je=["content"],Ke=["opposite"],We=["marker"],W=e=>({$implicit:e});function Xe(e,p){e&1&&F(0)}function Ye(e,p){e&1&&F(0)}function Ze(e,p){if(e&1&&(ee(0),k(1,Ye,1,0,"ng-container",3),te()),e&2){let t=s().$implicit,r=s();l(),c("ngTemplateOutlet",r.markerTemplate||r._markerTemplate)("ngTemplateOutletContext",E(2,W,t))}}function et(e,p){if(e&1&&m(0,"div",2),e&2){let t=s(2);v(t.cx("eventMarker")),c("pBind",t.ptm("eventMarker")),g("data-p",t.dataP)}}function tt(e,p){if(e&1&&m(0,"div",2),e&2){let t=s(2);v(t.cx("eventConnector")),c("pBind",t.ptm("eventConnector")),g("data-p",t.dataP)}}function nt(e,p){e&1&&F(0)}function it(e,p){if(e&1&&(n(0,"div",2)(1,"div",2),k(2,Xe,1,0,"ng-container",3),i(),n(3,"div",2),k(4,Ze,2,4,"ng-container",4)(5,et,1,4,"ng-template",null,0,pe)(7,tt,1,4,"div",5),i(),n(8,"div",2),k(9,nt,1,0,"ng-container",3),i()()),e&2){let t=p.$implicit,r=p.last,o=ae(6),d=s();v(d.cx("event")),c("pBind",d.ptm("event")),g("data-p",d.dataP),l(),v(d.cx("eventOpposite")),c("pBind",d.ptm("eventOpposite")),g("data-p",d.dataP),l(),c("ngTemplateOutlet",d.oppositeTemplate||d._oppositeTemplate)("ngTemplateOutletContext",E(23,W,t)),l(),v(d.cx("eventSeparator")),c("pBind",d.ptm("eventSeparator")),g("data-p",d.dataP),l(),c("ngIf",d.markerTemplate||d._markerTemplate)("ngIfElse",o),l(3),c("ngIf",!r),l(),v(d.cx("eventContent")),c("pBind",d.ptm("eventContent")),g("data-p",d.dataP),l(),c("ngTemplateOutlet",d.contentTemplate||d._contentTemplate)("ngTemplateOutletContext",E(25,W,t))}}var ot={root:({instance:e})=>["p-timeline p-component","p-timeline-"+e.align,"p-timeline-"+e.layout],event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},Ve=(()=>{class e extends L{name="timeline";style=je;classes=ot;static \u0275fac=(()=>{let t;return function(o){return(t||(t=C(e)))(o||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac})}return e})();var Re=new z("TIMELINE_INSTANCE"),at=(()=>{class e extends ${componentName="Timeline";bindDirectiveInstance=f(x,{self:!0});$pcTimeline=f(Re,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value;styleClass;align="left";layout="vertical";contentTemplate;oppositeTemplate;markerTemplate;templates;_contentTemplate;_oppositeTemplate;_markerTemplate;_componentStyle=f(Ve);getBlockableElement(){return this.el.nativeElement.children[0]}onAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"opposite":this._oppositeTemplate=t.template;break;case"marker":this._markerTemplate=t.template;break}})}get dataP(){return this.cn({[this.layout]:this.layout,[this.align]:this.align})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=C(e)))(o||e)}})();static \u0275cmp=M({type:e,selectors:[["p-timeline"]],contentQueries:function(r,o,d){if(r&1&&oe(d,Je,4)(d,Ke,4)(d,We,4)(d,_e,4),r&2){let h;P(h=w())&&(o.contentTemplate=h.first),P(h=w())&&(o.oppositeTemplate=h.first),P(h=w())&&(o.markerTemplate=h.first),P(h=w())&&(o.templates=h)}},hostVars:3,hostBindings:function(r,o){r&2&&(g("data-p",o.dataP),v(o.cn(o.cx("root"),o.styleClass)))},inputs:{value:"value",styleClass:"styleClass",align:"align",layout:"layout"},features:[j([Ve,{provide:Re,useExisting:e},{provide:Q,useExisting:e}]),B([x]),N],decls:1,vars:1,consts:[["marker",""],[3,"pBind","class",4,"ngFor","ngForOf"],[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"pBind","class",4,"ngIf"]],template:function(r,o){r&1&&k(0,it,10,27,"div",1),r&2&&c("ngForOf",o.value)},dependencies:[R,ce,me,se,S,x],encapsulation:2,changeDetection:0})}return e})(),Le=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=A({type:e});static \u0275inj=I({imports:[at,S,S]})}return e})();var rt=e=>["/pacientes",e],lt=(e,p)=>p.label;function pt(e,p){if(e&1&&(n(0,"div",26)(1,"div",27),a(2,"Notas previas"),i(),n(3,"div",53),a(4),i()()),e&2){let t=s();l(4),u(t.notes)}}function dt(e,p){if(e&1&&(n(0,"div",54)(1,"div",55),m(2,"i"),i(),n(3,"div",56)(4,"div",57),a(5),i(),n(6,"div",58),a(7),i()()()),e&2){let t=p.$implicit;v(t.state),l(2),v(t.icon),l(3),u(t.label),l(2),u(t.date)}}function ct(e,p){if(e&1){let t=G();n(0,"div",0),m(1,"p-confirmDialog"),n(2,"div",4)(3,"p-button",5),_("onClick",function(){y(t);let o=s();return b(o.goBack())}),i(),n(4,"span",6),a(5,"/"),i(),n(6,"a",7),a(7," Citas "),i(),n(8,"span",6),a(9,"/"),i(),n(10,"span",8),a(11),i()(),n(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"div",13),m(17,"i",14),i(),n(18,"div",15)(19,"h1",16),a(20),i(),n(21,"p",17),a(22),i(),n(23,"div",18),m(24,"p-tag",19)(25,"p-tag",20)(26,"p-tag",21),i()(),n(27,"div",22)(28,"p-button",23),_("onClick",function(){y(t);let o=s();return b(o.startAppointment())}),i(),n(29,"p-button",24),_("onClick",function(){y(t);let o=s();return b(o.showEditDialog.set(!0))}),i(),n(30,"p-button",25),_("onClick",function(){y(t);let o=s();return b(o.confirmCancellation())}),i()()()(),n(31,"div",26)(32,"div",27),a(33,"Informaci\xF3n de la cita"),i(),n(34,"div",28)(35,"div",29)(36,"span",30),a(37,"Fecha"),i(),n(38,"span",31),m(39,"i",32),a(40),T(41,"date"),i()(),n(42,"div",29)(43,"span",30),a(44,"Hora"),i(),n(45,"span",31),m(46,"i",33),a(47),i()(),n(48,"div",29)(49,"span",30),a(50,"Consultorio"),i(),n(51,"span",31),m(52,"i",34),a(53),i()(),n(54,"div",29)(55,"span",30),a(56,"Motivo"),i(),n(57,"span",31),a(58),i()()()(),n(59,"div",26)(60,"div",27),a(61," Paciente "),n(62,"a",35),a(63,"Ver historial \u2192"),i()(),n(64,"div",36)(65,"div",37),a(66),T(67,"slice"),T(68,"slice"),i(),n(69,"div")(70,"div",38),a(71),i(),n(72,"div",39),a(73),i()()(),n(74,"div",40)(75,"div",29)(76,"span",30),a(77,"Tel\xE9fono"),i(),n(78,"span",31),a(79,"+57 310 456 7890"),i()(),n(80,"div",29)(81,"span",30),a(82,"Email"),i(),n(83,"span",31),a(84,"ana.garcia@email.com"),i()(),n(85,"div",29)(86,"span",30),a(87,"EPS"),i(),n(88,"span",31),a(89,"Sura"),i()(),n(90,"div",29)(91,"span",30),a(92,"Alergias"),i(),n(93,"span",41),a(94,"Penicilina"),i()()()(),q(95,pt,5,1,"div",26),i(),n(96,"div",42)(97,"div",26)(98,"div",27),a(99,"Estado de la cita"),i(),n(100,"div",43),Y(101,dt,8,6,"div",44,lt),i()(),n(103,"div",26)(104,"div",27),a(105,"M\xE9dico asignado"),i(),n(106,"div",45)(107,"div",46),a(108),T(109,"slice"),i(),n(110,"div")(111,"div",47),a(112),i(),n(113,"div",48),a(114),i()()(),n(115,"div",49)(116,"div",50),m(117,"i",51),a(118,"+57 301 234 5678"),i(),n(119,"div",50),m(120,"i",52),a(121,"c.morales@clinicaabp.com"),i(),n(122,"div",50),m(123,"i",34),a(124),i()()()()()()}if(e&2){let t=p,r=s();l(3),c("text",!0),l(3),c("routerLink",r.paths.appointments.list),l(5),O(" ",t.id," "),l(9),J(" ",t.specialty," \u2014 ",t.patientName," "),l(2),K(" ",t.id," \xB7 ",t.doctorName," \xB7 ",t.specialty," "),l(2),c("value",t.status)("severity",r.getSeverity(t.status)),l(),c("value",t.type),l(4),c("outlined",!0),l(),c("outlined",!0),l(10),u(le(41,29,t.date,"EEEE d MMMM yyyy","","es")),l(7),K("",t.startTime," \u2013 ",t.endTime," (",t.durationMinutes," min)"),l(6),u(t.office),l(5),u(t.reason),l(4),c("routerLink",E(46,rt,t.patientId)),l(4),J("",V(67,34,t.patientName,0,1),"",V(68,38,t.patientName.split(" ")[1],0,1)),l(5),u(t.patientName),l(2),O("",t.patientNumber," \xB7 34 a\xF1os \xB7 Femenino"),l(22),U(t.notes?95:-1),l(6),Z(r.timelineEvents),l(7),O("",V(109,42,t.doctorName,4,5),"M"),l(4),u(t.doctorName),l(2),O("",t.specialty," \xB7 12 a\xF1os exp."),l(10),u(t.office)}}function mt(e,p){if(e&1){let t=G();n(0,"div",1),m(1,"i",59),n(2,"p"),a(3,"Cita no encontrada"),i(),n(4,"p-button",60),_("onClick",function(){y(t);let o=s();return b(o.goBack())}),i()()}}var Qe=class e{route=f(ge);router=f(ue);appointmentApi=f(Oe);confirmationService=f(he);paths=ye;showEditDialog=X(!1);appointment=de(()=>{let p=this.route.snapshot.paramMap.get("id");return this.appointmentApi.appointments().find(t=>t.id===p)});timelineEvents=[{label:"Cita agendada",date:"May 5, 2026 \xB7 14:32",icon:"pi pi-calendar-plus",state:"done"},{label:"Recordatorio enviado",date:"May 7, 2026 \xB7 08:00",icon:"pi pi-bell",state:"done"},{label:"Paciente en sala espera",date:"Hoy \xB7 En curso",icon:"pi pi-clock",state:"active"},{label:"Consulta realizada",date:"Pendiente",icon:"pi pi-check-circle",state:"pending"}];severityMap={confirmado:"success",pendiente:"warn",cancelado:"danger",completado:"info",no_presentado:"secondary"};AppointmentStatus=we;getSeverity(p){return this.severityMap[p]}startAppointment(){let p=this.appointment();p&&this.appointmentApi.update(p.id,{status:"completado"})}confirmCancellation(){this.confirmationService.confirm({message:"\xBFSeguro que deseas cancelar esta cita?",header:"Cancelar cita",icon:"pi pi-exclamation-triangle",acceptLabel:"S\xED, cancelar",rejectLabel:"No",accept:()=>{let p=this.appointment();p&&(this.appointmentApi.cancel(p.id),this.router.navigate([this.paths.appointments.list]))}})}goBack(){this.router.navigate([this.paths.appointments.list])}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-appointment-detail"]],decls:4,vars:4,consts:[[1,"appointment-detail-page"],[1,"not-found"],["header","Editar cita","styleClass","appointment-dialog",3,"visibleChange","visible","modal"],[3,"saved","cancelled","appointmentToEdit"],[1,"breadcrumb-bar"],["label","Volver","icon","pi pi-arrow-left","severity","secondary","size","small",3,"onClick","text"],[1,"bc-sep"],[1,"bc-link",3,"routerLink"],[1,"bc-current"],[1,"detail-layout"],[1,"main-panel"],[1,"hero-card"],[1,"hero-body"],[1,"hero-icon"],[1,"pi","pi-calendar-clock"],[1,"hero-info"],[1,"hero-title"],[1,"hero-sub"],[1,"hero-badges"],[3,"value","severity"],["severity","info",3,"value"],["value","Primera visita","severity","secondary"],[1,"hero-actions"],["label","Iniciar consulta","icon","pi pi-play","size","small",3,"onClick"],["label","Editar","icon","pi pi-pencil","severity","secondary","size","small",3,"onClick","outlined"],["label","Cancelar","icon","pi pi-times","severity","danger","size","small",3,"onClick","outlined"],[1,"info-card"],[1,"info-card-header"],[1,"info-grid"],[1,"info-item"],[1,"info-key"],[1,"info-val"],[1,"pi","pi-calendar"],[1,"pi","pi-clock"],[1,"pi","pi-building"],[1,"header-link",3,"routerLink"],[1,"paciente-row"],[1,"paciente-avatar"],[1,"paciente-name"],[1,"paciente-sub"],[1,"info-grid",2,"margin-top","12px"],[1,"info-val","allergy"],[1,"side-panel"],[1,"timeline-list"],[1,"tl-item",3,"class"],[1,"medico-row"],[1,"medico-avatar"],[1,"medico-name"],[1,"medico-sub"],[1,"medico-contact"],[1,"contact-row"],[1,"pi","pi-phone"],[1,"pi","pi-envelope"],[1,"notas-box"],[1,"tl-item"],[1,"tl-dot"],[1,"tl-body"],[1,"tl-label"],[1,"tl-fecha"],[1,"pi","pi-calendar-times"],["label","Volver a citas","icon","pi pi-arrow-left",3,"onClick"]],template:function(t,r){if(t&1&&(q(0,ct,125,48,"div",0)(1,mt,5,0,"div",1),n(2,"p-dialog",2),_("visibleChange",function(d){return r.showEditDialog.set(d)}),n(3,"app-appointment-form",3),_("saved",function(){return r.showEditDialog.set(!1)})("cancelled",function(){return r.showEditDialog.set(!1)}),i()()),t&2){let o;U((o=r.appointment())?0:1,o),l(2),c("visible",r.showEditDialog())("modal",!0),l(),c("appointmentToEdit",r.appointment()??null)}},dependencies:[xe,Ce,be,Ee,ke,Me,Fe,Le,Pe,Se,Ie,De,Te,ve,fe],styles:['@charset "UTF-8";.appointment-detail-page[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:18px}.breadcrumb-bar[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.breadcrumb-bar[_ngcontent-%COMP%]   .bc-sep[_ngcontent-%COMP%]{color:#cbd5e1;font-size:12px}.breadcrumb-bar[_ngcontent-%COMP%]   .bc-link[_ngcontent-%COMP%]{font-size:13px;color:#64748b;text-decoration:none}.breadcrumb-bar[_ngcontent-%COMP%]   .bc-link[_ngcontent-%COMP%]:hover{color:#0ea5e9}.breadcrumb-bar[_ngcontent-%COMP%]   .bc-current[_ngcontent-%COMP%]{font-size:13px;color:#0f172a;font-weight:500}.detail-layout[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 320px;gap:18px}@media(max-width:860px){.detail-layout[_ngcontent-%COMP%]{grid-template-columns:1fr}}.main-panel[_ngcontent-%COMP%], .side-panel[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.hero-card[_ngcontent-%COMP%]{background:linear-gradient(135deg,#0c2540,#0a3d62);border-radius:14px;overflow:hidden}.hero-card[_ngcontent-%COMP%]   .hero-body[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:18px;padding:24px;flex-wrap:wrap}.hero-icon[_ngcontent-%COMP%]{width:54px;height:54px;border-radius:14px;flex-shrink:0;background:#38bdf833;border:1px solid rgba(56,189,248,.3);display:flex;align-items:center;justify-content:center;font-size:24px;color:#38bdf8}.hero-info[_ngcontent-%COMP%]{flex:1;min-width:0}.hero-title[_ngcontent-%COMP%]{font-size:18px;font-weight:600;color:#fff;margin:0 0 4px}.hero-sub[_ngcontent-%COMP%]{font-size:13px;color:#ffffff8c;margin:0 0 10px}.hero-badges[_ngcontent-%COMP%]{display:flex;gap:6px;flex-wrap:wrap}.hero-actions[_ngcontent-%COMP%]{display:flex;gap:8px;flex-wrap:wrap;align-self:flex-start}.info-card[_ngcontent-%COMP%]{background:#fff;border-radius:14px;border:1px solid rgba(15,23,42,.07);box-shadow:0 1px 3px #0f172a0f;overflow:hidden}.info-card-header[_ngcontent-%COMP%]{padding:13px 18px;font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:.7px;border-bottom:1px solid rgba(15,23,42,.07);display:flex;justify-content:space-between;align-items:center}.info-card-header[_ngcontent-%COMP%]   .header-link[_ngcontent-%COMP%]{font-size:12px;color:#0ea5e9;font-weight:500;text-decoration:none;text-transform:none;letter-spacing:0}.info-card-header[_ngcontent-%COMP%]   .header-link[_ngcontent-%COMP%]:hover{text-decoration:underline}.info-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:0;padding:16px 18px}@media(max-width:500px){.info-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}.info-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:3px;padding:6px 0}.info-key[_ngcontent-%COMP%]{font-size:11.5px;color:#94a3b8;font-weight:500}.info-val[_ngcontent-%COMP%]{font-size:13.5px;color:#0f172a;font-weight:500;display:flex;align-items:center;gap:5px}.info-val[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:14px;color:#0ea5e9}.info-val.allergy[_ngcontent-%COMP%]{color:#be123c}.notas-box[_ngcontent-%COMP%]{margin:0 18px 16px;background:#f8fafc;border-radius:8px;padding:12px 14px;font-size:13px;color:#475569;line-height:1.65;border:1px solid rgba(15,23,42,.07)}.paciente-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:14px 18px 0}.paciente-avatar[_ngcontent-%COMP%]{width:44px;height:44px;border-radius:50%;background:#e0f2fe;color:#0369a1;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:600}.paciente-name[_ngcontent-%COMP%]{font-size:14px;font-weight:600;color:#0f172a}.paciente-sub[_ngcontent-%COMP%]{font-size:12px;color:#94a3b8;margin-top:2px}.timeline-list[_ngcontent-%COMP%]{padding:14px 18px;display:flex;flex-direction:column;gap:0}.tl-item[_ngcontent-%COMP%]{display:flex;gap:12px;padding-bottom:16px;position:relative}.tl-item[_ngcontent-%COMP%]:not(:last-child):before{content:"";position:absolute;left:14px;top:28px;width:1px;height:calc(100% - 14px);background:#0f172a14}.tl-dot[_ngcontent-%COMP%]{width:28px;height:28px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:13px;border:2px solid rgba(15,23,42,.1);background:#fff}.tl-item.done[_ngcontent-%COMP%]   .tl-dot[_ngcontent-%COMP%]{background:#e0f2fe;border-color:#0ea5e9;color:#0ea5e9}.tl-item.active[_ngcontent-%COMP%]   .tl-dot[_ngcontent-%COMP%]{background:#fef3c7;border-color:#d97706;color:#d97706}.tl-item.pending[_ngcontent-%COMP%]   .tl-dot[_ngcontent-%COMP%]{color:#cbd5e1}.tl-label[_ngcontent-%COMP%]{font-size:13px;font-weight:500;color:#0f172a}.tl-item.pending[_ngcontent-%COMP%]   .tl-label[_ngcontent-%COMP%]{color:#94a3b8}.tl-fecha[_ngcontent-%COMP%]{font-size:11.5px;color:#94a3b8;margin-top:2px}.medico-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:14px 18px}.medico-avatar[_ngcontent-%COMP%]{width:44px;height:44px;border-radius:10px;background:#dcfce7;color:#15803d;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:600}.medico-name[_ngcontent-%COMP%]{font-size:14px;font-weight:600;color:#0f172a}.medico-sub[_ngcontent-%COMP%]{font-size:12px;color:#94a3b8}.medico-contact[_ngcontent-%COMP%]{padding:0 18px 14px;display:flex;flex-direction:column;gap:7px}.contact-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:7px;font-size:12.5px;color:#475569}.contact-row[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:14px;color:#94a3b8}.not-found[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:14px;padding:60px;color:#94a3b8}.not-found[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:3rem}.not-found[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px}  .appointment-dialog{width:640px}']})};export{Qe as AppointmentDetail};
