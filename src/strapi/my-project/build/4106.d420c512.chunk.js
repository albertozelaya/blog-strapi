"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[4106],{54106:(c,D,_)=>{_.r(D),_.d(D,{AdminSeatInfoEE:()=>K});var E=_(92132),l=_(68074),t=_(30893),O=_(83997),i=_(79739),L=_(58805),A=_(21610),a=_(91134),C=_(68994),I=_(14595),v=_(54894),B=_(82437),R=_(51835),U=_(50034),N=_(21272),F=_(72810),G=_(18022),H=_(48940),z=_(2600),V=_(51187),J=_(15126),Q=_(63299),X=_(67014),Y=_(59080),Z=_(79275),$=_(14718),e=_(61535),p=_(5790),u=_(12083),k=_(35223),w=_(5409),b=_(74930),q=_(41286),__=_(56336),E_=_(39404),s_=_(58692),t_=_(54257),a_=_(501),M_=_(57646),D_=_(23120),O_=_(44414),n_=_(25962),P_=_(14664),o_=_(42588),d_=_(90325),l_=_(62785),i_=_(87443),L_=_(41032),A_=_(22957),C_=_(93179),I_=_(73055),v_=_(15747),B_=_(85306),R_=_(77965),U_=_(26509),T_=_(84624),W_=_(71210),K_=_(32058),m_=_(81185),h_=_(82261);const T="https://cloud.strapi.io/profile/billing",W="https://strapi.io/billing/request-seats",K=()=>{const{formatMessage:s}=(0,v.A)(),{settings:m}=(0,B.d4)(R.s),{isLoading:n,allowedActions:{canRead:h,canCreate:r,canUpdate:g,canDelete:f}}=(0,a.ec)(m?.users??{}),{license:P,isError:x,isLoading:j}=(0,U.m)({enabled:!n&&h&&r&&g&&f});if(x||(n||j)||!P)return null;const{licenseLimitStatus:S,enforcementUserCount:o,permittedSeats:M,isHostedOnStrapiCloud:d}=P;return M?(0,E.jsxs)(l.E,{col:6,s:12,children:[(0,E.jsx)(t.o,{variant:"sigma",textColor:"neutral600",children:s({id:"Settings.application.admin-seats",defaultMessage:"Admin seats"})}),(0,E.jsxs)(O.s,{gap:2,children:[(0,E.jsx)(O.s,{children:(0,E.jsx)(t.o,{as:"p",children:s({id:"Settings.application.ee.admin-seats.count",defaultMessage:"<text>{enforcementUserCount}</text>/{permittedSeats}"},{permittedSeats:M,enforcementUserCount:o,text:y=>(0,E.jsx)(t.o,{fontWeight:"semiBold",textColor:o>M?"danger500":void 0,children:y})})})}),S==="OVER_LIMIT"&&(0,E.jsx)(i.m,{description:s({id:"Settings.application.ee.admin-seats.at-limit-tooltip",defaultMessage:"At limit: add seats to invite more users"}),children:(0,E.jsx)(L.I,{width:(0,a.a8)(14),height:(0,a.a8)(14),color:"danger500",as:C.A})})]}),(0,E.jsx)(A.N,{href:d?T:W,isExternal:!0,endIcon:(0,E.jsx)(I.A,{}),children:s({id:"Settings.application.ee.admin-seats.add-seats",defaultMessage:"{isHostedOnStrapiCloud, select, true {Add seats} other {Contact sales}}"},{isHostedOnStrapiCloud:d})})]}):null}}}]);
