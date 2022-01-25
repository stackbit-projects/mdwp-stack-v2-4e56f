"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[104],{6104:function(e,t,l){var n=this&&this.__createBinding||(Object.create?function(e,t,l,n){void 0===n&&(n=l),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[l]}})}:function(e,t,l,n){void 0===n&&(n=l),e[n]=t[l]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var l in e)"default"!==l&&Object.prototype.hasOwnProperty.call(e,l)&&n(t,e,l);return r(t,e),t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(l(7294)),i=s(l(4702)),u=s(l(4184)),c=l(4231),d=l(708);function f(e){switch(e){case"auto":return"min-h-0";case"screen":return"min-h-screen"}return null}function m(e){switch(e){case"narrow":return"max-w-screen-md";case"wide":return"max-w-screen-xl";case"full":return"max-w-full"}return null}function x(e){switch(e){case"row":return["flex-col","lg:flex-row","lg:justify-between"];case"col":return["flex-col"]}return null}t.default=function(e){const t=e.elementId||null,l=e.colors||"colors-a",n=e.styles?.self||{},r=n.borderWidth?n.borderWidth:0;return o.createElement("div",{id:t,className:(0,u.default)("sb-component","sb-component-section","sb-component-cta-section",l,"flex","flex-col","justify-center","relative",n.height?f(n.height):null,n.margin,n.padding,n.borderColor,n.borderRadius?(0,d.mapStylesToClassNames)({borderRadius:n.borderRadius}):null,n.borderStyle?(0,d.mapStylesToClassNames)({borderStyle:n.borderStyle}):null),style:{borderWidth:`${r}px`}},e.backgroundImage&&function(e){const t=e.url;if(!t)return null;const l=e.styles?.self||{},n=l.opacity||0===l.opacity?l.opacity:100;return o.createElement("div",{className:"bg-cover bg-center block absolute inset-0",style:{backgroundImage:`url('${t}')`,opacity:.01*n}})}(e.backgroundImage),o.createElement("div",{className:(0,u.default)("flex","relative","w-full",n.justifyContent?(0,d.mapStylesToClassNames)({justifyContent:n.justifyContent}):null)},o.createElement("div",{className:(0,u.default)("w-full",n.width?m(n.width):null)},o.createElement("div",{className:(0,u.default)("flex","-mx-4",n.flexDirection?x(n.flexDirection):null,n.alignItems?(0,d.mapStylesToClassNames)({alignItems:n.alignItems}):null)},function(e){if(!e.title&&!e.text)return null;const t=e.styles||{};return o.createElement("div",{className:"my-3 px-4 w-full lg:flex-grow"},e.title&&o.createElement("h2",{className:(0,u.default)(t.title?(0,d.mapStylesToClassNames)(t.title):null),"data-sb-field-path":".title"},e.title),e.text&&o.createElement(i.default,{options:{forceBlock:!0,forceWrapper:!0},className:(0,u.default)("sb-markdown","sm:text-lg",t.text?(0,d.mapStylesToClassNames)(t.text):null,{"mt-4":e.title}),"data-sb-field-path":".text"},e.text))}(e),function(e){const t=e.actions||[];if(0===t.length)return null;const l=e.styles||{},n=(0,c.getComponent)("Action");return o.createElement("div",{className:(0,u.default)("my-3","px-4","w-full","row"===l.self?.flexDirection?"lg:w-auto":null)},o.createElement("div",{className:(0,u.default)("flex","flex-wrap","items-center","-mx-2","lg:flex-nowrap",l.actions?(0,d.mapStylesToClassNames)(l.actions):null),"data-sb-field-path":".actions"},t.map(((e,t)=>o.createElement(n,{key:t,...e,className:"mb-3 mx-2 lg:whitespace-nowrap","data-sb-field-path":`.${t}`})))))}(e)))))}},708:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.mapStylesToClassNames=void 0;const l={fontSize:{"x-small":"text-xs",small:"text-sm",medium:"text-base",large:"text-lg","x-large":"text-xl","xx-large":"text-2xl","xxx-large":"text-3xl"},fontStyle:{normal:"non-italic",italic:"italic"},fontWeight:{100:"font-thin",200:"font-extralight",300:"font-light",400:"font-normal",500:"font-medium",600:"font-semibold",700:"font-bold",800:"font-extrabold"},textAlign:{left:"text-left",center:"text-center",right:"text-right",justify:"text-justify"},justifyContent:{"flex-start":"justify-start","flex-end":"justify-end",center:"justify-center"},alignItems:{"flex-start":"items-start","flex-end":"items-end",center:"items-center"},borderRadius:{none:"rounded-none","xx-small":"rounded-sm","x-small":"rounded",small:"rounded-md",medium:"rounded-lg",large:"rounded-xl","x-large":"rounded-2xl","xx-large":"rounded-3xl",full:"rounded-full"},borderStyle:{none:"border-none",solid:"border-solid",dashed:"border-dashed",dotted:"border-dotted",double:"border-double"},margin:function(e){return Array.isArray(e)?e.join(" "):(console.warn('cannot convert "margin" style field value to class name'),"")}};t.mapStylesToClassNames=function(e){return Object.entries(e).map((([e,t])=>e in l?"function"===typeof l[e]?l[e](t):t in l[e]?l[e][t]:void 0:t)).join(" ")}}}]);