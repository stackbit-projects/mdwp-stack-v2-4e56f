"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[990],{4354:function(e,t,a){var l=this&&this.__createBinding||(Object.create?function(e,t,a,l){void 0===l&&(l=a),Object.defineProperty(e,l,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,l){void 0===l&&(l=a),e[l]=t[a]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&l(t,e,a);return n(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=i(a(7294)),s=u(a(4184));t.default=function(e){const t=e.width||"full",a=`${e.name}-label`,l=e.options||[],n={};return e.label&&(n["aria-labelledby"]=a),e.isRequired&&(n.required=!0),r.createElement("div",{className:(0,s.default)("sb-form-control",{"sm:col-span-2":"full"===t}),"data-sb-field-path":e["data-sb-field-path"]},e.label&&r.createElement("label",{id:a,className:"sb-label",htmlFor:e.name,"data-sb-field-path":".label .name#@for"},e.label),r.createElement("select",{id:e.name,className:"sb-select",name:e.name,...n,"data-sb-field-path":".name#@id .name#@name .options"},e.defaultValue&&r.createElement("option",{value:"","data-sb-field-path":".defaultValue"},e.defaultValue),l.length>0&&l.map(((e,t)=>r.createElement("option",{key:t,value:e,"data-sb-field-path":`.${t}`},e)))))}}}]);