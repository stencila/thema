!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("thema",[],t):"object"==typeof exports?exports.thema=t():e.thema=t()}(window,(function(){return function(e){var t={};function r(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(a,i,function(t){return e[t]}.bind(null,i));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/thema/",r(r.s=226)}({0:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.wrap=t.replace=t.after=t.before=t.prepend=t.append=t.text=t.attr=t.attrs=t.tag=t.create=t.select=t.first=t.whenReady=t.ready=t.translate=void 0;const a=r(2);Object.defineProperty(t,"translate",{enumerable:!0,get:function(){return a.translate}});const i=e=>"string"==typeof e?e:JSON.stringify(e);t.ready=function(e){o?setTimeout(e,1):(n.push(e),"loading"!==document.readyState?setTimeout(c,1):s||(document.addEventListener("DOMContentLoaded",c),s=!0))};let n=[],s=!1,o=!1;function c(){o||(o=!0,n.forEach(e=>e()),n=[],document.removeEventListener("DOMContentLoaded",c))}function p(e="div",t,...r){var n,s,o,c,p;let u;if(e instanceof Element)u=e.cloneNode();else if(/^\s*</.test(e)){const t=document.createElement("div");t.innerHTML=e,u=t.firstElementChild}else{e=(e=e.replace(/:--[A-Z][a-z]+/g,e=>"[itemscope] "+a.translate(e))).replace(/:--[a-zA-Z]+/g,a.translate);const t=null!==(s=null===(n=/^[a-z0-9]+/i.exec(e))||void 0===n?void 0:n[0])&&void 0!==s?s:"div",r=null!==(o=e.match(/(?:^|\s)#([a-z]+[a-z0-9-]*)/gi))&&void 0!==o?o:[],i=null!==(c=e.match(/(?:^|\s)\.([a-z]+[a-z0-9-]*)/gi))&&void 0!==c?c:[],m=null!==(p=e.match(/(?:^|\s)\[([a-z][a-z0-9-]+)(~?=['|"]?([^\]]*)['|"]?)?\]/gi))&&void 0!==p?p:[];u=document.createElement(t),r.length>=1&&(u.id=r[0].split("#")[1]),r.length>1&&console.warn("Got more than one id; ignoring all but first"),i.length>0&&u.setAttribute("class",i.map(e=>e.split(".")[1]).join(" ")),m.forEach(e=>{let[t,r]=e.split("[")[1].slice(0,-1).split(/~?=/);void 0!==r&&(r=r.replace(/^['"](.*)['"]$/,"$1")),u.setAttribute(t,null!=r?r:"")})}return null===t||"object"!=typeof t||t instanceof Element?void 0!==t&&(r=[t,...r]):Object.entries(t).forEach(([e,t])=>{void 0!==t&&u.setAttribute(e,i(t))}),r.forEach(e=>m(u,e)),u}function u(e,t){if(void 0===t)return Array.from(e.attributes).reduce((e,t)=>({...e,[t.name]:t.value}),{});Object.entries(t).forEach(([t,r])=>{null!=r&&e.setAttribute(t,i(r))})}function m(e,...t){t.forEach(t=>null!=t?e.appendChild(t instanceof Element?t:document.createTextNode(i(t))):void 0)}function l(e,...t){const r=e.parentNode;null!==r&&t.reverse().forEach(t=>r.insertBefore(t,e.nextSibling))}function d(e,...t){const r=e.parentNode;if(null!==r){const a=t[0];r.replaceChild(a,e),l(a,...t.slice(1))}}t.whenReady=c,t.first=function(...e){const[t,r]=1===e.length?[document,e[0]]:e.slice(0,2);return t.querySelector(a.translate(r))},t.select=function(...e){const[t,r]=1===e.length?[document,e[0]]:e.slice(0,2);return Array.from(t.querySelectorAll(a.translate(r)))},t.create=p,t.tag=function(e,t){if(void 0===t)return e.tagName.toLowerCase();const r=p(t,u(e));return r.innerHTML=e.innerHTML,r},t.attrs=u,t.attr=function(e,t,r){return void 0===r&&null!==r?e.getAttribute(t):(e.setAttribute(t,r),null)},t.text=function(e,t){if(void 0===t)return e.textContent;e.textContent=t},t.append=m,t.prepend=function(e,...t){t.reverse().forEach(t=>{var r;return e.insertBefore(t,null!==(r=e.childNodes[0])&&void 0!==r?r:null)})},t.before=function(e,...t){const r=e.parentNode;null!==r&&t.forEach(t=>r.insertBefore(t,e))},t.after=l,t.replace=d,t.wrap=function(e,t){m(t,p(e)),d(e,t)}},2:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.translate=void 0,t.translate=function(e){return e.replace(/:--\w+/g,e=>{switch(e){case":--root":return"[data-itemscope='root']";case":--Array":return"[itemtype~='http://schema.stenci.la/Array']";case":--ArrayValidator":return"[itemtype~='http://schema.stenci.la/ArrayValidator']";case":--Article":return"[itemtype~='http://schema.org/Article']";case":--AudioObject":return"[itemtype~='http://schema.org/AudioObject']";case":--Boolean":return"[itemtype~='http://schema.org/Boolean']";case":--BooleanValidator":return"[itemtype~='http://schema.stenci.la/BooleanValidator']";case":--Brand":return"[itemtype~='http://schema.org/Brand']";case":--Cite":return"[itemtype~='http://schema.stenci.la/Cite']";case":--CiteGroup":return"[itemtype~='http://schema.stenci.la/CiteGroup']";case":--Code":return"[itemtype~='http://schema.stenci.la/Code']";case":--CodeBlock":return"[itemtype~='http://schema.stenci.la/CodeBlock']";case":--CodeChunk":return"[itemtype~='http://schema.stenci.la/CodeChunk']";case":--CodeError":return"[itemtype~='http://schema.stenci.la/CodeError']";case":--CodeExpression":return"[itemtype~='http://schema.stenci.la/CodeExpression']";case":--CodeFragment":return"[itemtype~='http://schema.stenci.la/CodeFragment']";case":--Collection":return"[itemtype~='http://schema.org/Collection']";case":--ConstantValidator":return"[itemtype~='http://schema.stenci.la/ConstantValidator']";case":--ContactPoint":return"[itemtype~='http://schema.org/ContactPoint']";case":--CreativeWork":return"[itemtype~='http://schema.org/CreativeWork']";case":--Datatable":return"[itemtype~='http://schema.stenci.la/Datatable']";case":--DatatableColumn":return"[itemtype~='http://schema.stenci.la/DatatableColumn']";case":--Date":return"[itemtype~='http://schema.org/Date']";case":--Delete":return"[itemtype~='http://schema.stenci.la/Delete']";case":--Emphasis":return"[itemtype~='http://schema.stenci.la/Emphasis']";case":--Entity":return"[itemtype~='http://schema.stenci.la/Entity']";case":--EnumValidator":return"[itemtype~='http://schema.stenci.la/EnumValidator']";case":--Figure":return"[itemtype~='http://schema.stenci.la/Figure']";case":--Function":return"[itemtype~='http://schema.stenci.la/Function']";case":--Grant":return"[itemtype~='http://schema.org/Grant']";case":--Heading":return"[itemtype~='http://schema.stenci.la/Heading']";case":--ImageObject":return"[itemtype~='http://schema.org/ImageObject']";case":--Include":return"[itemtype~='http://schema.stenci.la/Include']";case":--IntegerValidator":return"[itemtype~='http://schema.stenci.la/IntegerValidator']";case":--Link":return"[itemtype~='http://schema.stenci.la/Link']";case":--List":return"[itemtype~='http://schema.org/ItemList']";case":--ListItem":return"[itemtype~='http://schema.org/ListItem']";case":--Mark":return"[itemtype~='http://schema.stenci.la/Mark']";case":--Math":return"[itemtype~='http://schema.stenci.la/Math']";case":--MathBlock":return"[itemtype~='http://schema.stenci.la/MathBlock']";case":--MathFragment":return"[itemtype~='http://schema.stenci.la/MathFragment']";case":--MediaObject":return"[itemtype~='http://schema.org/MediaObject']";case":--MonetaryGrant":return"[itemtype~='http://schema.org/MonetaryGrant']";case":--Null":return"[itemtype~='http://schema.stenci.la/Null']";case":--Number":return"[itemtype~='http://schema.org/Number']";case":--NumberValidator":return"[itemtype~='http://schema.stenci.la/NumberValidator']";case":--Object":return"[itemtype~='http://schema.stenci.la/Object']";case":--Organization":return"[itemtype~='http://schema.org/Organization']";case":--Paragraph":return"[itemtype~='http://schema.stenci.la/Paragraph']";case":--Parameter":return"[itemtype~='http://schema.stenci.la/Parameter']";case":--Periodical":return"[itemtype~='http://schema.org/Periodical']";case":--Person":return"[itemtype~='http://schema.org/Person']";case":--PostalAddress":return"[itemtype~='http://schema.org/PostalAddress']";case":--Product":return"[itemtype~='http://schema.org/Product']";case":--PropertyValue":return"[itemtype~='http://schema.org/PropertyValue']";case":--PublicationIssue":return"[itemtype~='http://schema.org/PublicationIssue']";case":--PublicationVolume":return"[itemtype~='http://schema.org/PublicationVolume']";case":--Quote":return"[itemtype~='http://schema.stenci.la/Quote']";case":--QuoteBlock":return"[itemtype~='http://schema.stenci.la/QuoteBlock']";case":--SoftwareApplication":return"[itemtype~='http://schema.org/SoftwareApplication']";case":--SoftwareEnvironment":return"[itemtype~='http://schema.stenci.la/SoftwareEnvironment']";case":--SoftwareSession":return"[itemtype~='http://schema.stenci.la/SoftwareSession']";case":--SoftwareSourceCode":return"[itemtype~='http://schema.org/SoftwareSourceCode']";case":--StringValidator":return"[itemtype~='http://schema.stenci.la/StringValidator']";case":--Strong":return"[itemtype~='http://schema.stenci.la/Strong']";case":--Subscript":return"[itemtype~='http://schema.stenci.la/Subscript']";case":--Superscript":return"[itemtype~='http://schema.stenci.la/Superscript']";case":--Table":return"[itemtype~='http://schema.org/Table']";case":--TableCell":return"[itemtype~='http://schema.stenci.la/TableCell']";case":--TableRow":return"[itemtype~='http://schema.stenci.la/TableRow']";case":--Text":return"[itemtype~='http://schema.org/Text']";case":--ThematicBreak":return"[itemtype~='http://schema.stenci.la/ThematicBreak']";case":--Thing":return"[itemtype~='http://schema.org/Thing']";case":--TupleValidator":return"[itemtype~='http://schema.stenci.la/TupleValidator']";case":--Variable":return"[itemtype~='http://schema.stenci.la/Variable']";case":--VideoObject":return"[itemtype~='http://schema.org/VideoObject']";case":--VolumeMount":return"[itemtype~='http://schema.stenci.la/VolumeMount']";case":--address":return"[itemprop~='address']";case":--addressCountry":return"[itemprop~='addressCountry']";case":--addressLocality":return"[itemprop~='addressLocality']";case":--addressRegion":return"[itemprop~='addressRegion']";case":--adds":return"[data-itemprop~='adds']";case":--add":return"[data-itemprop~='add']";case":--affiliations":return"[data-itemprop~='affiliations']";case":--affiliation":return"[itemprop~='affiliation']";case":--alternateNames":return"[data-itemprop~='alternateNames']";case":--alternateName":return"[itemprop~='alternateName']";case":--alters":return"[data-itemprop~='alters']";case":--alter":return"[data-itemprop~='alter']";case":--amounts":return"[itemprop~='amount']";case":--assigns":return"[data-itemprop~='assigns']";case":--assign":return"[data-itemprop~='assign']";case":--authors":return"[data-itemprop~='authors']";case":--author":return"[itemprop~='author']";case":--availableLanguages":return"[data-itemprop~='availableLanguages']";case":--availableLanguage":return"[itemprop~='availableLanguage']";case":--bitrate":return"[itemprop~='bitrate']";case":--brands":return"[data-itemprop~='brands']";case":--brand":return"[itemprop~='brand']";case":--caption":return"[itemprop~='caption']";case":--cellType":return"[data-itemprop~='cellType']";case":--cells":return"[data-itemprop~='cells']";case":--cell":return"[data-itemprop~='cell']";case":--citationMode":return"[data-itemprop~='citationMode']";case":--cite":return"[data-itemprop~='cite']";case":--clientsLimit":return"[data-itemprop~='clientsLimit']";case":--clientsRequest":return"[data-itemprop~='clientsRequest']";case":--codeRepository":return"[itemprop~='codeRepository']";case":--codeSampleType":return"[itemprop~='codeSampleType']";case":--colspan":return"[data-itemprop~='colspan']";case":--columns":return"[data-itemprop~='columns']";case":--column":return"[data-itemprop~='column']";case":--contactPoints":return"[data-itemprop~='contactPoints']";case":--contactPoint":return"[itemprop~='contactPoint']";case":--contains":return"[data-itemprop~='contains']";case":--content":return"[data-itemprop~='content']";case":--contentSize":return"[itemprop~='contentSize']";case":--contentUrl":return"[itemprop~='contentUrl']";case":--cpuLimit":return"[data-itemprop~='cpuLimit']";case":--cpuRequest":return"[data-itemprop~='cpuRequest']";case":--dateAccepted":return"[data-itemprop~='dateAccepted']";case":--dateCreated":return"[itemprop~='dateCreated']";case":--dateEnd":return"[itemprop~='endDate']";case":--dateModified":return"[itemprop~='dateModified']";case":--datePublished":return"[itemprop~='datePublished']";case":--dateReceived":return"[itemprop~='dateReceived']";case":--dateStart":return"[itemprop~='startDate']";case":--declares":return"[data-itemprop~='declares']";case":--declare":return"[data-itemprop~='declare']";case":--default":return"[itemprop~='defaultValue']";case":--departments":return"[data-itemprop~='departments']";case":--department":return"[itemprop~='department']";case":--depth":return"[data-itemprop~='depth']";case":--description":return"[itemprop~='description']";case":--duration":return"[data-itemprop~='duration']";case":--durationLimit":return"[data-itemprop~='durationLimit']";case":--durationRequest":return"[data-itemprop~='durationRequest']";case":--editors":return"[data-itemprop~='editors']";case":--editor":return"[itemprop~='editor']";case":--emails":return"[data-itemprop~='emails']";case":--email":return"[itemprop~='email']";case":--embedUrl":return"[itemprop~='embedUrl']";case":--environment":return"[data-itemprop~='environment']";case":--errorMessage":return"[data-itemprop~='errorMessage']";case":--errorType":return"[data-itemprop~='errorType']";case":--errors":return"[data-itemprop~='errors']";case":--error":return"[data-itemprop~='error']";case":--exclusiveMaximum":return"[data-itemprop~='exclusiveMaximum']";case":--exclusiveMinimum":return"[data-itemprop~='exclusiveMinimum']";case":--exportFrom":return"[data-itemprop~='exportFrom']";case":--extends":return"[data-itemprop~='extends']";case":--extend":return"[data-itemprop~='extend']";case":--familyNames":return"[data-itemprop~='familyNames']";case":--familyName":return"[itemprop~='familyName']";case":--format":return"[itemprop~='encodingFormat']";case":--fundedBy":return"[data-itemprop~='fundedBy']";case":--fundedItems":return"[data-itemprop~='fundedItems']";case":--fundedItem":return"[itemprop~='fundedItem']";case":--funders":return"[data-itemprop~='funders']";case":--funder":return"[itemprop~='funder']";case":--givenNames":return"[data-itemprop~='givenNames']";case":--givenName":return"[itemprop~='givenName']";case":--honorificPrefix":return"[itemprop~='honorificPrefix']";case":--honorificSuffix":return"[itemprop~='honorificSuffix']";case":--id":return"[data-itemprop~='@id']";case":--identifiers":return"[data-itemprop~='identifiers']";case":--identifier":return"[itemprop~='identifier']";case":--images":return"[data-itemprop~='images']";case":--image":return"[itemprop~='image']";case":--importTo":return"[data-itemprop~='importTo']";case":--imports":return"[data-itemprop~='imports']";case":--import":return"[data-itemprop~='import']";case":--isChecked":return"[data-itemprop~='isChecked']";case":--isExtensible":return"[data-itemprop~='isExtensible']";case":--isPartOf":return"[itemprop~='isPartOf']";case":--isReadonly":return"[itemprop~='readonlyValue']";case":--isRequired":return"[itemprop~='valueRequired']";case":--isVariadic":return"[data-itemprop~='isVariadic']";case":--issns":return"[data-itemprop~='issns']";case":--issn":return"[itemprop~='issn']";case":--issueNumber":return"[itemprop~='issueNumber']";case":--item":return"[itemprop~='item'], [itemprop~='itemListElement']";case":--items":return"[data-itemprop~='items']";case":--itemsValidator":return"[data-itemprop~='itemsValidator']";case":--jobTitle":return"[itemprop~='jobTitle']";case":--keywords":return"[data-itemprop~='keywords']";case":--keyword":return"[itemprop~='keywords']";case":--label":return"[data-itemprop~='label']";case":--legalName":return"[itemprop~='legalName']";case":--licenses":return"[data-itemprop~='licenses']";case":--license":return"[itemprop~='license']";case":--logo":return"[itemprop~='logo']";case":--maintainers":return"[data-itemprop~='maintainers']";case":--maintainer":return"[data-itemprop~='maintainer']";case":--mathLanguage":return"[data-itemprop~='mathLanguage']";case":--maxItems":return"[data-itemprop~='maxItems']";case":--maxLength":return"[data-itemprop~='maxLength']";case":--maximum":return"[data-itemprop~='maximum']";case":--memberOf":return"[itemprop~='memberOf']";case":--memoryLimit":return"[data-itemprop~='memoryLimit']";case":--memoryRequest":return"[data-itemprop~='memoryRequest']";case":--meta":return"[data-itemprop~='meta']";case":--minItems":return"[data-itemprop~='minItems']";case":--minLength":return"[data-itemprop~='minLength']";case":--minimum":return"[data-itemprop~='minimum']";case":--mountDestination":return"[data-itemprop~='mountDestination']";case":--mountOptions":return"[data-itemprop~='mountOptions']";case":--mountOption":return"[data-itemprop~='mountOption']";case":--mountSource":return"[data-itemprop~='mountSource']";case":--mountType":return"[data-itemprop~='mountType']";case":--multipleOf":return"[data-itemprop~='multipleOf']";case":--name":return"[itemprop~='name']";case":--networkTransferLimit":return"[data-itemprop~='networkTransferLimit']";case":--networkTransferRequest":return"[data-itemprop~='networkTransferRequest']";case":--order":return"[itemprop~='itemListOrder']";case":--output":return"[data-itemprop~='output']";case":--outputs":return"[data-itemprop~='outputs']";case":--pageEnd":return"[itemprop~='pageEnd']";case":--pageStart":return"[itemprop~='pageStart']";case":--pagination":return"[itemprop~='pagination']";case":--parameters":return"[data-itemprop~='parameters']";case":--parameter":return"[data-itemprop~='parameter']";case":--parentOrganization":return"[itemprop~='parentOrganization']";case":--parts":return"[data-itemprop~='parts']";case":--part":return"[itemprop~='hasParts']";case":--pattern":return"[data-itemprop~='pattern']";case":--position":return"[itemprop~='position']";case":--postOfficeBoxNumber":return"[itemprop~='postOfficeBoxNumber']";case":--postalCode":return"[itemprop~='postalCode']";case":--prefix":return"[data-itemprop~='citationPrefix']";case":--productID":return"[itemprop~='productID']";case":--programmingLanguage":return"[itemprop~='programmingLanguage']";case":--propertyID":return"[itemprop~='propertyID']";case":--publisher":return"[itemprop~='publisher']";case":--reads":return"[data-itemprop~='reads']";case":--read":return"[data-itemprop~='read']";case":--references":return"[data-itemprop~='references']";case":--reference":return"[itemprop~='citation']";case":--relation":return"[itemprop~='linkRelationship']";case":--removes":return"[data-itemprop~='removes']";case":--remove":return"[data-itemprop~='remove']";case":--returns":return"[data-itemprop~='returns']";case":--reviews":return"[data-itemprop~='reviews']";case":--review":return"[itemprop~='review']";case":--rowType":return"[data-itemprop~='rowType']";case":--rows":return"[data-itemprop~='rows']";case":--row":return"[data-itemprop~='row']";case":--rowspan":return"[data-itemprop~='rowspan']";case":--runtimePlatform":return"[itemprop~='runtimePlatform']";case":--softwareRequirements":return"[data-itemprop~='softwareRequirements']";case":--softwareRequirement":return"[itemprop~='softwareRequirements']";case":--softwareVersion":return"[itemprop~='softwareVersion']";case":--source":return"[data-itemprop~='source']";case":--sponsors":return"[data-itemprop~='sponsors']";case":--sponsor":return"[itemprop~='sponsor']";case":--stackTrace":return"[data-itemprop~='stackTrace']";case":--status":return"[data-itemprop~='sessionStatus']";case":--streetAddress":return"[itemprop~='streetAddress']";case":--suffix":return"[data-itemprop~='citationSuffix']";case":--target":return"[data-itemprop~='target']";case":--targetProducts":return"[data-itemprop~='targetProducts']";case":--targetProduct":return"[itemprop~='targetProduct']";case":--telephoneNumbers":return"[data-itemprop~='telephoneNumbers']";case":--telephoneNumber":return"[itemprop~='telephone']";case":--text":return"[itemprop~='text']";case":--thumbnail":return"[itemprop~='thumbnail']";case":--timeoutLimit":return"[data-itemprop~='timeoutLimit']";case":--timeoutRequest":return"[data-itemprop~='timeoutRequest']";case":--title":return"[itemprop~='headline']";case":--transcript":return"[itemprop~='transcript']";case":--type":return"[data-itemprop~='@type']";case":--uniqueItems":return"[data-itemprop~='uniqueItems']";case":--url":return"[itemprop~='url']";case":--uses":return"[data-itemprop~='uses']";case":--use":return"[data-itemprop~='use']";case":--validator":return"[data-itemprop~='validator']";case":--value":return"[itemprop~='value'], [data-itemprop~='value']";case":--values":return"[data-itemprop~='values']";case":--version":return"[itemprop~='version']";case":--volumeMounts":return"[data-itemprop~='volumeMounts']";case":--volumeMount":return"[data-itemprop~='volumeMount']";case":--volumeNumber":return"[itemprop~='volumeNumber']";default:throw new Error("Unknown custom selector: "+e)}})}},226:function(e,t,r){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.hasOwnProperty.call(e,r)&&a(t,e,r);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const s=r(0),o=n(r(227)),c=n(r(228)),p=n(r(98)),u=n(r(229)),m=n(r(230)),l=n(r(231));s.ready(()=>{const e=p.getArticleTitle();u.build(o.build(),e,p.getArticleId());try{c.format(s.first(":--datePublished")),m.build(e,p.getArticleDoi()),l.format(s.select(":--reference"))}catch(e){console.error(e)}})},227:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.build=void 0;const a=r(0);t.build=()=>{const e=a.first(":--Article > :--title");if(null===e)return Promise.reject(new Error("Can't find element to bolt the content header on top of"));const t=a.create("div",{class:"content-header"});return a.before(e,t),t}},228:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.format=void 0;const a=new(0,Intl.DateTimeFormat)("en-US",{month:"short",day:"numeric",year:"numeric"});t.format=e=>{e instanceof Element&&(e.innerHTML=a.format(new Date(e.innerHTML)))}},229:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.build=void 0;const a=r(0),i=r(98),n=(e,t,r="")=>{switch(e){case"executable-version":return`https://elifesciences.org/articles/${t}/executable/download`;case"bibtex":return`https://elifesciences.org/articles/${t}.bib`;case"ris":return`https://elifesciences.org/articles/${t}.ris`;case"mendeley":return"https://www.mendeley.com/import?doi=10.7554/eLife."+t;case"readcube":return"https://www.readcube.com/articles/10.7554/eLife."+t;case"papers":return`papers2://url/https%3A%2F%2Felifesciences.org%2Farticles%2F${t}?title=${encodeURIComponent(r)}`}return""},s=(e,t)=>a.create("a",{href:e,target:"_parent"},t);t.build=(e,t,r)=>{try{i.getArticlePdfUrl(r).then(e=>((e,t,r,i)=>{a.after(a.select(":--references")[0],a.create("section",{id:i,class:"downloads"},a.create("h2",null,"Download links"),a.create("h3",null,"Downloads"),a.create("ul",null,a.create("li",{"data-is-download-pdf-list-item":!0},s(r,"Article PDF")),a.create("li",null,s(n("executable-version",e),"Executable version"),a.create("div",{class:"downloads--link"},s("https://elifesciences.org/labs/7dbeb390/reproducible-document-stack-supporting-the-next-generation-research-article","What are executable versions?")))),a.create("h3",null,"Download citations"),a.create("ul",null,a.create("li",null,s(n("bibtex",e),"BibTeX")),a.create("li",null,s(n("ris",e),"RIS"))),a.create("h3",null,"Open citations"),a.create("ul",null,a.create("li",null,s(n("mendeley",e),"Mendeley")),a.create("li",null,s(n("readcube",e),"ReadCube")),a.create("li",null,s(n("papers",e,t),"Papers")))))})(r,t,e,"downloadMenu")).then(()=>i.getFiguresPdfUrl(r)).then(e=>{return t=e,void a.after(a.select("[data-is-download-pdf-list-item]")[0],a.create("li",null,s(t,"Figures PDF")));var t}).then(()=>((e,t)=>(a.append(e,a.create("a",{href:"#"+t,class:"download-link"},a.create("span",{class:"download-link-text"},"A two-part list of links to download the article, or parts of the article, in various formats."))),Promise.resolve()))(e,"downloadMenu")).catch(e=>{throw e})}catch(e){console.error(e)}}},230:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.build=void 0;const a=r(0);t.build=(e,t,r)=>{let i=a.first(":--Article :--title");if(void 0!==r&&(i=r),null===i)throw new Error("Can't find element to bolt the social sharers beneath");const n=a.create("div",{class:"social-sharers"});var s,o;return a.after(i,n),(s=encodeURIComponent(e),o=encodeURI("https://doi.org/"+t),[{description:"Share on Facebook",imageMarkup:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>',url:"https://facebook.com/sharer/sharer.php?u="+o},{description:"Tweet a link to this page",imageMarkup:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/></svg>',url:`https://twitter.com/intent/tweet/?text=${s}&amp;url=${o}`},{description:"Email a link to this page (opens up email program, if configured on this system)",imageMarkup:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 4H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.25 14.43l-3.5 2c-.08.05-.17.07-.25.07-.17 0-.34-.1-.43-.25-.14-.24-.06-.55.18-.68l3.5-2c.24-.14.55-.06.68.18.14.24.06.55-.18.68zm4.75.07c-.1 0-.2-.03-.27-.08l-8.5-5.5c-.23-.15-.3-.46-.15-.7.15-.22.46-.3.7-.14L12 13.4l8.23-5.32c.23-.15.54-.08.7.15.14.23.07.54-.16.7l-8.5 5.5c-.08.04-.17.07-.27.07zm8.93 1.75c-.1.16-.26.25-.43.25-.08 0-.17-.02-.25-.07l-3.5-2c-.24-.13-.32-.44-.18-.68s.44-.32.68-.18l3.5 2c.24.13.32.44.18.68z"/></svg>',url:`mailto:?subject=${s}&amp;body=${o}`},{description:"Share this page on Reddit",imageMarkup:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.75-1.64-6.07-1.72.08-1.1.4-3.05 1.52-3.7.72-.4 1.73-.24 3 .5C17.2 6.3 18.46 7.5 20 7.5c1.65 0 3-1.35 3-3s-1.35-3-3-3c-1.38 0-2.54.94-2.88 2.22-1.43-.72-2.64-.8-3.6-.25-1.64.94-1.95 3.47-2 4.55-2.33.08-4.45.7-6.1 1.72C4.86 8.98 3.96 8.5 3 8.5c-1.65 0-3 1.35-3 3 0 1.32.84 2.44 2.05 2.84-.03.22-.05.44-.05.66 0 3.86 4.5 7 10 7s10-3.14 10-7c0-.22-.02-.44-.05-.66 1.2-.4 2.05-1.54 2.05-2.84zM2.3 13.37C1.5 13.07 1 12.35 1 11.5c0-1.1.9-2 2-2 .64 0 1.22.32 1.6.82-1.1.85-1.92 1.9-2.3 3.05zm3.7.13c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9.8 4.8c-1.08.63-2.42.96-3.8.96-1.4 0-2.74-.34-3.8-.95-.24-.13-.32-.44-.2-.68.15-.24.46-.32.7-.18 1.83 1.06 4.76 1.06 6.6 0 .23-.13.53-.05.67.2.14.23.06.54-.18.67zm.2-2.8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm5.7-2.13c-.38-1.16-1.2-2.2-2.3-3.05.38-.5.97-.82 1.6-.82 1.1 0 2 .9 2 2 0 .84-.53 1.57-1.3 1.87z"/></svg>',url:`https://reddit.com/submit/?title=${s}&amp;url=${o}`}]).forEach(e=>{((e,t,r,i)=>{const n=a.create("a",{href:r,class:"social-sharer-link","aria-label":e,target:"_blank",rel:"noopener noreferrer"},a.create(t));a.append(i,n)})(e.description,e.imageMarkup,e.url,n)}),n}},231:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.format=void 0;const a=r(0);t.format=e=>{(e=>{e.forEach(e=>{const t=a.first(e,":--PublicationVolume:--isPartOf");if(null!==t){const e=a.first(t,":--isPartOf");null!==e&&a.prepend(t,e)}})})((e=>(e.forEach(e=>{const t=a.first(e,":--title");null!==t&&a.prepend(e,t)}),e))(e))}},98:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.query=t.getFiguresPdfUrl=t.getArticlePdfUrl=t.getArticleTitle=t.getArticleDoi=t.getArticleId=void 0;const a=r(0),i=e=>{const t=a.first(e);if(null!==t){const e=a.text(t);if(null!==e)return e.replace(/\n/," ").replace(/ \s+|\n+/g," ")}return""},n=async(e,r)=>{const a=["article","figures"];if(!a.includes(r))throw new Error(`Requested Invalid PDF type: "${r}", must be one of ${a.join(", ")}.`);const i=await t.query(e,window.fetch);return"figures"===r?Promise.resolve(i.articleData.figuresPdf):Promise.resolve(i.articleData.pdf)};t.getArticleId=()=>i(':--identifier meta[content="https://registry.identifiers.org/registry/publisher-id"] ~ [itemprop="value"]'),t.getArticleDoi=()=>i(':--identifier meta[content="https://registry.identifiers.org/registry/doi"] ~ [itemprop="value"]'),t.getArticleTitle=()=>i(":--title"),t.getArticlePdfUrl=async(e,t=n)=>t(e,"article"),t.getFiguresPdfUrl=async(e,t=n)=>t(e,"figures"),t.query=async(e,t)=>{const r=await t("https://api.elifesciences.org/articles/"+e);if(!1===r.ok)throw new Error("There was a problem getting article data for "+e);const a=await r.json();return Promise.resolve({ok:r.ok,articleData:a})}}})}));