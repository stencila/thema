!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("thema",[],t):"object"==typeof exports?exports.thema=t():e.thema=t()}(window,(function(){return function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/thema/",r(r.s=32)}({0:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.wrap=t.replace=t.after=t.before=t.prepend=t.append=t.text=t.attr=t.attrs=t.tag=t.create=t.select=t.first=t.whenReady=t.ready=t.translate=void 0;const a=r(2);Object.defineProperty(t,"translate",{enumerable:!0,get:function(){return a.translate}});const n=e=>"string"==typeof e?e:JSON.stringify(e);t.ready=function(e){o?setTimeout(e,1):(s.push(e),"loading"!==document.readyState?setTimeout(c,1):i||(document.addEventListener("DOMContentLoaded",c),i=!0))};let s=[],i=!1,o=!1;function c(){o||(o=!0,s.forEach(e=>e()),s=[],document.removeEventListener("DOMContentLoaded",c))}function p(e="div",t,...r){var s,i,o,c,p;let m;if(e instanceof Element)m=e.cloneNode(!0);else if(/^\s*</.test(e)){const t=document.createElement("div");t.innerHTML=e,m=t.firstElementChild}else{e=(e=e.replace(/:--[A-Z][a-z]+/g,e=>"[itemscope] "+a.translate(e))).replace(/:--[a-zA-Z]+/g,a.translate);const t=null!==(i=null===(s=/^[a-z0-9]+/i.exec(e))||void 0===s?void 0:s[0])&&void 0!==i?i:"div",r=null!==(o=e.match(/(?:^|\s)#([a-z]+[a-z0-9-]*)/gi))&&void 0!==o?o:[],n=null!==(c=e.match(/(?:^|\s)\.([a-z]+[a-z0-9-]*)/gi))&&void 0!==c?c:[],u=null!==(p=e.match(/(?:^|\s)\[([a-z][a-z0-9-]+)(~?=['|"]?([^\]]*)['|"]?)?\]/gi))&&void 0!==p?p:[];m=document.createElement(t),r.length>=1&&(m.id=r[0].split("#")[1]),r.length>1&&console.warn("Got more than one id; ignoring all but first"),n.length>0&&m.setAttribute("class",n.map(e=>e.split(".")[1]).join(" ")),u.forEach(e=>{let[t,r]=e.split("[")[1].slice(0,-1).split(/~?=/);void 0!==r&&(r=r.replace(/^['"](.*)['"]$/,"$1")),m.setAttribute(t,null!=r?r:"")})}return null===t||"object"!=typeof t||t instanceof Element?void 0!==t&&(r=[t,...r]):Object.entries(t).forEach(([e,t])=>{void 0!==t&&m.setAttribute(e,n(t))}),r.forEach(e=>u(m,e)),m}function m(e,t){if(void 0===t)return Array.from(e.attributes).reduce((e,t)=>({...e,[t.name]:t.value}),{});Object.entries(t).forEach(([t,r])=>{null!=r&&e.setAttribute(t,n(r))})}function u(e,...t){t.forEach(t=>null!=t?e.appendChild(t instanceof Element?t:document.createTextNode(n(t))):void 0)}function l(e,...t){const r=e.parentNode;null!==r&&t.reverse().forEach(t=>r.insertBefore(t,e.nextSibling))}function d(e,...t){const r=e.parentNode;if(null!==r){const a=t[0];r.replaceChild(a,e),l(a,...t.slice(1))}}t.whenReady=c,t.first=function(...e){const[t,r]=1===e.length?[document,e[0]]:e.slice(0,2);return t.querySelector(a.translate(r))},t.select=function(...e){const[t,r]=1===e.length?[document,e[0]]:e.slice(0,2);return Array.from(t.querySelectorAll(a.translate(r)))},t.create=p,t.tag=function(e,t){if(void 0===t)return e.tagName.toLowerCase();const r=p(t,m(e));return r.innerHTML=e.innerHTML,r},t.attrs=m,t.attr=function(e,t,r){return void 0===r&&null!==r?e.getAttribute(t):(e.setAttribute(t,r),null)},t.text=function(e,t){if(void 0===t)return e.textContent;e.textContent=t},t.append=u,t.prepend=function(e,...t){t.reverse().forEach(t=>{var r;return e.insertBefore(t,null!==(r=e.childNodes[0])&&void 0!==r?r:null)})},t.before=function(e,...t){const r=e.parentNode;null!==r&&t.forEach(t=>r.insertBefore(t,e))},t.after=l,t.replace=d,t.wrap=function(e,t){u(t,p(e)),d(e,t)}},13:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.examples=void 0,t.examples={articleReadme:"articleReadme",articleKitchenSink:"articleKitchenSink",articleDrosophila:"articleDrosophila",articleReplication:"articleReplication",articleAntibodies:"articleAntibodies"}},14:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.themes=void 0,t.themes={bootstrap:"bootstrap",elife:"elife",galleria:"galleria",latex:"latex",nature:"nature",plos:"plos",rpng:"rpng",skeleton:"skeleton",stencila:"stencila",tufte:"tufte",wilmore:"wilmore"}},2:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.translate=void 0,t.translate=function(e){return e.replace(/:--\w+/g,e=>{switch(e){case":--root":return"[data-itemscope='root']";case":--Array":return"[itemtype~='http://schema.stenci.la/Array']";case":--ArrayValidator":return"[itemtype~='http://schema.stenci.la/ArrayValidator']";case":--Article":return"[itemtype~='http://schema.org/Article']";case":--AudioObject":return"[itemtype~='http://schema.org/AudioObject']";case":--Boolean":return"[itemtype~='http://schema.org/Boolean']";case":--BooleanValidator":return"[itemtype~='http://schema.stenci.la/BooleanValidator']";case":--Brand":return"[itemtype~='http://schema.org/Brand']";case":--Cite":return"[itemtype~='http://schema.stenci.la/Cite']";case":--CiteGroup":return"[itemtype~='http://schema.stenci.la/CiteGroup']";case":--Code":return"[itemtype~='http://schema.stenci.la/Code']";case":--CodeBlock":return"[itemtype~='http://schema.stenci.la/CodeBlock']";case":--CodeChunk":return"[itemtype~='http://schema.stenci.la/CodeChunk']";case":--CodeError":return"[itemtype~='http://schema.stenci.la/CodeError']";case":--CodeExpression":return"[itemtype~='http://schema.stenci.la/CodeExpression']";case":--CodeFragment":return"[itemtype~='http://schema.stenci.la/CodeFragment']";case":--Collection":return"[itemtype~='http://schema.org/Collection']";case":--ConstantValidator":return"[itemtype~='http://schema.stenci.la/ConstantValidator']";case":--ContactPoint":return"[itemtype~='http://schema.org/ContactPoint']";case":--CreativeWork":return"[itemtype~='http://schema.org/CreativeWork']";case":--Datatable":return"[itemtype~='http://schema.stenci.la/Datatable']";case":--DatatableColumn":return"[itemtype~='http://schema.stenci.la/DatatableColumn']";case":--Date":return"[itemtype~='http://schema.org/Date']";case":--Delete":return"[itemtype~='http://schema.stenci.la/Delete']";case":--Emphasis":return"[itemtype~='http://schema.stenci.la/Emphasis']";case":--Entity":return"[itemtype~='http://schema.stenci.la/Entity']";case":--EnumValidator":return"[itemtype~='http://schema.stenci.la/EnumValidator']";case":--Figure":return"[itemtype~='http://schema.stenci.la/Figure']";case":--Function":return"[itemtype~='http://schema.stenci.la/Function']";case":--Grant":return"[itemtype~='http://schema.org/Grant']";case":--Heading":return"[itemtype~='http://schema.stenci.la/Heading']";case":--ImageObject":return"[itemtype~='http://schema.org/ImageObject']";case":--Include":return"[itemtype~='http://schema.stenci.la/Include']";case":--IntegerValidator":return"[itemtype~='http://schema.stenci.la/IntegerValidator']";case":--Link":return"[itemtype~='http://schema.stenci.la/Link']";case":--List":return"[itemtype~='http://schema.org/ItemList']";case":--ListItem":return"[itemtype~='http://schema.org/ListItem']";case":--Mark":return"[itemtype~='http://schema.stenci.la/Mark']";case":--Math":return"[itemtype~='http://schema.stenci.la/Math']";case":--MathBlock":return"[itemtype~='http://schema.stenci.la/MathBlock']";case":--MathFragment":return"[itemtype~='http://schema.stenci.la/MathFragment']";case":--MediaObject":return"[itemtype~='http://schema.org/MediaObject']";case":--MonetaryGrant":return"[itemtype~='http://schema.org/MonetaryGrant']";case":--Null":return"[itemtype~='http://schema.stenci.la/Null']";case":--Number":return"[itemtype~='http://schema.org/Number']";case":--NumberValidator":return"[itemtype~='http://schema.stenci.la/NumberValidator']";case":--Object":return"[itemtype~='http://schema.stenci.la/Object']";case":--Organization":return"[itemtype~='http://schema.org/Organization']";case":--Paragraph":return"[itemtype~='http://schema.stenci.la/Paragraph']";case":--Parameter":return"[itemtype~='http://schema.stenci.la/Parameter']";case":--Periodical":return"[itemtype~='http://schema.org/Periodical']";case":--Person":return"[itemtype~='http://schema.org/Person']";case":--PostalAddress":return"[itemtype~='http://schema.org/PostalAddress']";case":--Product":return"[itemtype~='http://schema.org/Product']";case":--PropertyValue":return"[itemtype~='http://schema.org/PropertyValue']";case":--PublicationIssue":return"[itemtype~='http://schema.org/PublicationIssue']";case":--PublicationVolume":return"[itemtype~='http://schema.org/PublicationVolume']";case":--Quote":return"[itemtype~='http://schema.stenci.la/Quote']";case":--QuoteBlock":return"[itemtype~='http://schema.stenci.la/QuoteBlock']";case":--SoftwareApplication":return"[itemtype~='http://schema.org/SoftwareApplication']";case":--SoftwareEnvironment":return"[itemtype~='http://schema.stenci.la/SoftwareEnvironment']";case":--SoftwareSession":return"[itemtype~='http://schema.stenci.la/SoftwareSession']";case":--SoftwareSourceCode":return"[itemtype~='http://schema.org/SoftwareSourceCode']";case":--StringValidator":return"[itemtype~='http://schema.stenci.la/StringValidator']";case":--Strong":return"[itemtype~='http://schema.stenci.la/Strong']";case":--Subscript":return"[itemtype~='http://schema.stenci.la/Subscript']";case":--Superscript":return"[itemtype~='http://schema.stenci.la/Superscript']";case":--Table":return"[itemtype~='http://schema.org/Table']";case":--TableCell":return"[itemtype~='http://schema.stenci.la/TableCell']";case":--TableRow":return"[itemtype~='http://schema.stenci.la/TableRow']";case":--Text":return"[itemtype~='http://schema.org/Text']";case":--ThematicBreak":return"[itemtype~='http://schema.stenci.la/ThematicBreak']";case":--Thing":return"[itemtype~='http://schema.org/Thing']";case":--TupleValidator":return"[itemtype~='http://schema.stenci.la/TupleValidator']";case":--Variable":return"[itemtype~='http://schema.stenci.la/Variable']";case":--VideoObject":return"[itemtype~='http://schema.org/VideoObject']";case":--VolumeMount":return"[itemtype~='http://schema.stenci.la/VolumeMount']";case":--address":return"[itemprop~='address']";case":--addressCountry":return"[itemprop~='addressCountry']";case":--addressLocality":return"[itemprop~='addressLocality']";case":--addressRegion":return"[itemprop~='addressRegion']";case":--adds":return"[data-itemprop~='adds']";case":--add":return"[data-itemprop~='add']";case":--affiliations":return"[data-itemprop~='affiliations']";case":--affiliation":return"[itemprop~='affiliation']";case":--alternateNames":return"[data-itemprop~='alternateNames']";case":--alternateName":return"[itemprop~='alternateName']";case":--alters":return"[data-itemprop~='alters']";case":--alter":return"[data-itemprop~='alter']";case":--amounts":return"[itemprop~='amount']";case":--assigns":return"[data-itemprop~='assigns']";case":--assign":return"[data-itemprop~='assign']";case":--authors":return"[data-itemprop~='authors']";case":--author":return"[itemprop~='author']";case":--availableLanguages":return"[data-itemprop~='availableLanguages']";case":--availableLanguage":return"[itemprop~='availableLanguage']";case":--bitrate":return"[itemprop~='bitrate']";case":--brands":return"[data-itemprop~='brands']";case":--brand":return"[itemprop~='brand']";case":--caption":return"[itemprop~='caption']";case":--cellType":return"[data-itemprop~='cellType']";case":--cells":return"[data-itemprop~='cells']";case":--cell":return"[data-itemprop~='cell']";case":--citationMode":return"[data-itemprop~='citationMode']";case":--cite":return"[data-itemprop~='cite']";case":--clientsLimit":return"[data-itemprop~='clientsLimit']";case":--clientsRequest":return"[data-itemprop~='clientsRequest']";case":--codeRepository":return"[itemprop~='codeRepository']";case":--codeSampleType":return"[itemprop~='codeSampleType']";case":--colspan":return"[data-itemprop~='colspan']";case":--columns":return"[data-itemprop~='columns']";case":--column":return"[data-itemprop~='column']";case":--contactPoints":return"[data-itemprop~='contactPoints']";case":--contactPoint":return"[itemprop~='contactPoint']";case":--contains":return"[data-itemprop~='contains']";case":--content":return"[data-itemprop~='content']";case":--contentSize":return"[itemprop~='contentSize']";case":--contentUrl":return"[itemprop~='contentUrl']";case":--cpuLimit":return"[data-itemprop~='cpuLimit']";case":--cpuRequest":return"[data-itemprop~='cpuRequest']";case":--dateAccepted":return"[data-itemprop~='dateAccepted']";case":--dateCreated":return"[itemprop~='dateCreated']";case":--dateEnd":return"[itemprop~='endDate']";case":--dateModified":return"[itemprop~='dateModified']";case":--datePublished":return"[itemprop~='datePublished']";case":--dateReceived":return"[itemprop~='dateReceived']";case":--dateStart":return"[itemprop~='startDate']";case":--declares":return"[data-itemprop~='declares']";case":--declare":return"[data-itemprop~='declare']";case":--default":return"[itemprop~='defaultValue']";case":--departments":return"[data-itemprop~='departments']";case":--department":return"[itemprop~='department']";case":--depth":return"[data-itemprop~='depth']";case":--description":return"[itemprop~='description']";case":--duration":return"[data-itemprop~='duration']";case":--durationLimit":return"[data-itemprop~='durationLimit']";case":--durationRequest":return"[data-itemprop~='durationRequest']";case":--editors":return"[data-itemprop~='editors']";case":--editor":return"[itemprop~='editor']";case":--emails":return"[data-itemprop~='emails']";case":--email":return"[itemprop~='email']";case":--embedUrl":return"[itemprop~='embedUrl']";case":--environment":return"[data-itemprop~='environment']";case":--errorMessage":return"[data-itemprop~='errorMessage']";case":--errorType":return"[data-itemprop~='errorType']";case":--errors":return"[data-itemprop~='errors']";case":--error":return"[data-itemprop~='error']";case":--exclusiveMaximum":return"[data-itemprop~='exclusiveMaximum']";case":--exclusiveMinimum":return"[data-itemprop~='exclusiveMinimum']";case":--exportFrom":return"[data-itemprop~='exportFrom']";case":--extends":return"[data-itemprop~='extends']";case":--extend":return"[data-itemprop~='extend']";case":--familyNames":return"[data-itemprop~='familyNames']";case":--familyName":return"[itemprop~='familyName']";case":--format":return"[itemprop~='encodingFormat']";case":--fundedBy":return"[data-itemprop~='fundedBy']";case":--fundedItems":return"[data-itemprop~='fundedItems']";case":--fundedItem":return"[itemprop~='fundedItem']";case":--funders":return"[data-itemprop~='funders']";case":--funder":return"[itemprop~='funder']";case":--givenNames":return"[data-itemprop~='givenNames']";case":--givenName":return"[itemprop~='givenName']";case":--honorificPrefix":return"[itemprop~='honorificPrefix']";case":--honorificSuffix":return"[itemprop~='honorificSuffix']";case":--id":return"[data-itemprop~='@id']";case":--identifiers":return"[data-itemprop~='identifiers']";case":--identifier":return"[itemprop~='identifier']";case":--images":return"[data-itemprop~='images']";case":--image":return"[itemprop~='image']";case":--importTo":return"[data-itemprop~='importTo']";case":--imports":return"[data-itemprop~='imports']";case":--import":return"[data-itemprop~='import']";case":--isChecked":return"[data-itemprop~='isChecked']";case":--isExtensible":return"[data-itemprop~='isExtensible']";case":--isPartOf":return"[itemprop~='isPartOf']";case":--isReadonly":return"[itemprop~='readonlyValue']";case":--isRequired":return"[itemprop~='valueRequired']";case":--isVariadic":return"[data-itemprop~='isVariadic']";case":--issns":return"[data-itemprop~='issns']";case":--issn":return"[itemprop~='issn']";case":--issueNumber":return"[itemprop~='issueNumber']";case":--item":return"[itemprop~='item'], [itemprop~='itemListElement']";case":--items":return"[data-itemprop~='items']";case":--itemsValidator":return"[data-itemprop~='itemsValidator']";case":--jobTitle":return"[itemprop~='jobTitle']";case":--keywords":return"[data-itemprop~='keywords']";case":--keyword":return"[itemprop~='keywords']";case":--label":return"[data-itemprop~='label']";case":--legalName":return"[itemprop~='legalName']";case":--licenses":return"[data-itemprop~='licenses']";case":--license":return"[itemprop~='license']";case":--logo":return"[itemprop~='logo']";case":--maintainers":return"[data-itemprop~='maintainers']";case":--maintainer":return"[data-itemprop~='maintainer']";case":--mathLanguage":return"[data-itemprop~='mathLanguage']";case":--maxItems":return"[data-itemprop~='maxItems']";case":--maxLength":return"[data-itemprop~='maxLength']";case":--maximum":return"[data-itemprop~='maximum']";case":--memberOf":return"[itemprop~='memberOf']";case":--memoryLimit":return"[data-itemprop~='memoryLimit']";case":--memoryRequest":return"[data-itemprop~='memoryRequest']";case":--meta":return"[data-itemprop~='meta']";case":--minItems":return"[data-itemprop~='minItems']";case":--minLength":return"[data-itemprop~='minLength']";case":--minimum":return"[data-itemprop~='minimum']";case":--mountDestination":return"[data-itemprop~='mountDestination']";case":--mountOptions":return"[data-itemprop~='mountOptions']";case":--mountOption":return"[data-itemprop~='mountOption']";case":--mountSource":return"[data-itemprop~='mountSource']";case":--mountType":return"[data-itemprop~='mountType']";case":--multipleOf":return"[data-itemprop~='multipleOf']";case":--name":return"[itemprop~='name']";case":--networkTransferLimit":return"[data-itemprop~='networkTransferLimit']";case":--networkTransferRequest":return"[data-itemprop~='networkTransferRequest']";case":--order":return"[itemprop~='itemListOrder']";case":--output":return"[data-itemprop~='output']";case":--outputs":return"[data-itemprop~='outputs']";case":--pageEnd":return"[itemprop~='pageEnd']";case":--pageStart":return"[itemprop~='pageStart']";case":--pagination":return"[itemprop~='pagination']";case":--parameters":return"[data-itemprop~='parameters']";case":--parameter":return"[data-itemprop~='parameter']";case":--parentOrganization":return"[itemprop~='parentOrganization']";case":--parts":return"[data-itemprop~='parts']";case":--part":return"[itemprop~='hasParts']";case":--pattern":return"[data-itemprop~='pattern']";case":--position":return"[itemprop~='position']";case":--postOfficeBoxNumber":return"[itemprop~='postOfficeBoxNumber']";case":--postalCode":return"[itemprop~='postalCode']";case":--prefix":return"[data-itemprop~='citationPrefix']";case":--productID":return"[itemprop~='productID']";case":--programmingLanguage":return"[itemprop~='programmingLanguage']";case":--propertyID":return"[itemprop~='propertyID']";case":--publisher":return"[itemprop~='publisher']";case":--reads":return"[data-itemprop~='reads']";case":--read":return"[data-itemprop~='read']";case":--references":return"[data-itemprop~='references']";case":--reference":return"[itemprop~='citation']";case":--relation":return"[itemprop~='linkRelationship']";case":--removes":return"[data-itemprop~='removes']";case":--remove":return"[data-itemprop~='remove']";case":--returns":return"[data-itemprop~='returns']";case":--reviews":return"[data-itemprop~='reviews']";case":--review":return"[itemprop~='review']";case":--rowType":return"[data-itemprop~='rowType']";case":--rows":return"[data-itemprop~='rows']";case":--row":return"[data-itemprop~='row']";case":--rowspan":return"[data-itemprop~='rowspan']";case":--runtimePlatform":return"[itemprop~='runtimePlatform']";case":--softwareRequirements":return"[data-itemprop~='softwareRequirements']";case":--softwareRequirement":return"[itemprop~='softwareRequirements']";case":--softwareVersion":return"[itemprop~='softwareVersion']";case":--source":return"[data-itemprop~='source']";case":--sponsors":return"[data-itemprop~='sponsors']";case":--sponsor":return"[itemprop~='sponsor']";case":--stackTrace":return"[data-itemprop~='stackTrace']";case":--status":return"[data-itemprop~='sessionStatus']";case":--streetAddress":return"[itemprop~='streetAddress']";case":--suffix":return"[data-itemprop~='citationSuffix']";case":--target":return"[data-itemprop~='target']";case":--targetProducts":return"[data-itemprop~='targetProducts']";case":--targetProduct":return"[itemprop~='targetProduct']";case":--telephoneNumbers":return"[data-itemprop~='telephoneNumbers']";case":--telephoneNumber":return"[itemprop~='telephone']";case":--text":return"[itemprop~='text']";case":--thumbnail":return"[itemprop~='thumbnail']";case":--timeoutLimit":return"[data-itemprop~='timeoutLimit']";case":--timeoutRequest":return"[data-itemprop~='timeoutRequest']";case":--title":return"[itemprop~='headline']";case":--transcript":return"[itemprop~='transcript']";case":--type":return"[data-itemprop~='@type']";case":--uniqueItems":return"[data-itemprop~='uniqueItems']";case":--url":return"[itemprop~='url']";case":--uses":return"[data-itemprop~='uses']";case":--use":return"[data-itemprop~='use']";case":--validator":return"[data-itemprop~='validator']";case":--value":return"[itemprop~='value'], [data-itemprop~='value']";case":--values":return"[data-itemprop~='values']";case":--version":return"[itemprop~='version']";case":--volumeMounts":return"[data-itemprop~='volumeMounts']";case":--volumeMount":return"[data-itemprop~='volumeMount']";case":--volumeNumber":return"[itemprop~='volumeNumber']";default:throw new Error("Unknown custom selector: "+e)}})}},21:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getTheme=t.generateCDNUrl=t.isTheme=t.scriptEntry=t.styleEntry=t.themePath=t.themes=void 0;const a=r(14);Object.defineProperty(t,"themes",{enumerable:!0,get:function(){return a.themes}});const n=null==="2.15.2"?void 0:"2.15.2".split(".")[0];t.themePath="dist/themes",t.styleEntry="styles.css",t.scriptEntry="index.js",t.isTheme=e=>Object.keys(a.themes).includes(e),t.generateCDNUrl=e=>`https://unpkg.com/@stencila/thema@${null!=n?n:"latest"}/${e}`.replace(/\\/g,"/"),t.getTheme=(e,r=!1)=>{const a=e.trim().toLowerCase();if(!t.isTheme(a))return;const n=`${t.themePath}/${a}/${t.styleEntry}`,s=`${t.themePath}/${a}/${t.scriptEntry}`,i=e=>r?e.map(t.generateCDNUrl):e;return{styles:i([n]),scripts:i([s])}}},32:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.upsertThemeOverrides=t.themeSet=t.getTheme=t.getThemeCSS=void 0;const a=r(4),n=r(21),s=r(0),i=r(4),o=r(5);t.getThemeCSS=e=>{const t=new XMLHttpRequest;return t.open("GET",`${a.ASSET_PATH}themes/${e}/styles.css`,!1),t.send(null),t.responseText},t.getTheme=()=>{var e,t;return null!==(t=null!==(e=new URL(window.location.href).searchParams.get(i.keys.THEME))&&void 0!==e?e:sessionStorage.getItem(i.keys.THEME))&&void 0!==t?t:n.themes.stencila},t.themeSet=e=>{const t=new URL(window.location.href);t.searchParams.set(i.keys.EXAMPLE,o.getExample()),t.searchParams.set(i.keys.THEME,e),history.replaceState(null,"none",t.toString()),sessionStorage.setItem(i.keys.THEME,e);const r=s.create("link");r.setAttribute("rel","stylesheet"),r.setAttribute("href",`${a.ASSET_PATH}themes/${e}/${n.styleEntry}`),r.setAttribute("id","themaStyles");const c=o.getPreviewDoc(),p=o.getPreviewHead();if(null!==p){const e=null==c?void 0:c.getElementById("themaStyles");null!=e&&e.remove(),s.prepend(p,r),o.injectPreviewAssets()}if(null!==c){c.querySelectorAll("script.themeScript").forEach(e=>{null!=c&&c.body.removeChild(e)});const t=c.createElement("script");t.type="text/javascript",t.src=`${a.ASSET_PATH}themes/${e}/index.js`,t.classList.add("themeScript"),c.body.appendChild(t),setTimeout(()=>{o.forceReady(c)},300)}},t.upsertThemeOverrides=(e,t)=>{const r=a.objToVars(a.diff(e,t)),n=o.getPreviewHead();if(null!=n){const e=n.querySelector(".varOverrides");null!==e&&e.remove();const t=s.create("style",r);t.classList.add("varOverrides"),s.append(n,t)}}},4:function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.submitPR=t.objToVars=t.diff=t.keys=t.ASSET_PATH=void 0;const n=r(0);t.ASSET_PATH=null!==(a="/thema/")?a:"/",function(e){e.EXAMPLE="example",e.THEME="theme",e.HEADER="header"}(t.keys||(t.keys={})),t.diff=(e,t)=>Object.entries(t).reduce((t,[r,a])=>a===e[r]?t:{...t,[r]:""===a?e[r]:a},{}),t.objToVars=(e,t=!1)=>{const r=Object.entries(e).reduce((e,[t,r])=>e+`  --${t}: ${r};\n`,"");return`${t?":--root":n.translate(":--root")} {\n${r}}`},t.submitPR=(e,r,a,n)=>{e=e.length>0?e:"randomname";const s=t.diff(n,r),i=0===Object.keys(s).length?"/* No changes were made to variables in the base theme but you can set them here if you like :) */\n":t.objToVars(s,!1),o=`https://github.com/stencila/thema/new/master?filename=src/themes/${e}/styles.css&value=${encodeURIComponent(`@import "../${a}/styles.css";\n\n${i}\n`)}`,c=window.open(o,"_blank");null!==c&&c.focus()}},5:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.injectPreviewAssets=t.getPreviewHead=t.getPreviewDoc=t.getPreview=t.forceReady=t.setExample=t.getExample=t.initUiVisibility=void 0;const a=r(4),n=r(9),s=r(0);t.initUiVisibility=()=>{const e=window.location.search,t=e.includes("ui=false");(t||e.includes("header=false"))&&document.body.classList.add("headerHidden"),(t||e.includes("sidebar=false"))&&document.body.classList.add("sideBarHidden")},t.getExample=()=>{var e,t;return null!==(t=null!==(e=new URL(window.location.href).searchParams.get(a.keys.EXAMPLE))&&void 0!==e?e:sessionStorage.getItem(a.keys.EXAMPLE))&&void 0!==t?t:n.examples.articleKitchenSink},t.setExample=e=>{var r;const s=new URL(window.location.href);sessionStorage.setItem(a.keys.EXAMPLE,e),s.searchParams.get(a.keys.EXAMPLE)!==e&&(s.searchParams.set(a.keys.EXAMPLE,e),history.replaceState(null,"none",s.toString()));const i=t.getPreview();null===i||(null===(r=i.getAttribute("src"))||void 0===r?void 0:r.includes(e))||i.setAttribute("src",`${a.ASSET_PATH}examples/${n.resolveExample(e)}.html`)},t.forceReady=e=>{null!=e&&e.dispatchEvent(new Event("DOMContentLoaded",{bubbles:!0,cancelable:!0}))},t.getPreview=()=>{var e;return null!==(e=document.getElementsByTagName("iframe")[0])&&void 0!==e?e:null},t.getPreviewDoc=()=>{var e;const t=null!==(e=document.getElementsByTagName("iframe")[0])&&void 0!==e?e:null;return null!==t?t.contentDocument:null},t.getPreviewHead=()=>{var e,r;return null!==(r=null===(e=t.getPreviewDoc())||void 0===e?void 0:e.getElementsByTagName("head")[0])&&void 0!==r?r:null},t.injectPreviewAssets=()=>{const e=t.getPreviewHead();if(null!=e&&null!=e){const t=s.create("script");t.setAttribute("type","module"),t.setAttribute("src","https://unpkg.com/@stencila/components@latest/dist/stencila-components/stencila-components.esm.js");const r=s.create("script");r.setAttribute("type","text/javascript"),r.setAttribute("nomodule","true"),r.setAttribute("src","https://unpkg.com/@stencila/components@latest/dist/stencila-components/stencila-components.js"),s.append(e,t),s.append(e,r)}}},9:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resolveExample=t.isExample=t.examples=void 0;const a=r(13);Object.defineProperty(t,"examples",{enumerable:!0,get:function(){return a.examples}}),t.isExample=e=>e in a.examples,t.resolveExample=e=>{const r=void 0===e?"":e.trim();return t.isExample(r)?a.examples[r]:a.examples.articleKitchenSink}}})}));