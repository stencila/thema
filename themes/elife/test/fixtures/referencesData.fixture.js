!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("thema",[],t):"object"==typeof exports?exports.thema=t():e.thema=t()}(window,(function(){return function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/thema/",a(a.s=253)}({0:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.wrap=t.replace=t.after=t.before=t.prepend=t.append=t.text=t.attr=t.attrs=t.tag=t.create=t.select=t.first=t.whenReady=t.ready=t.translate=void 0;const r=a(2);Object.defineProperty(t,"translate",{enumerable:!0,get:function(){return r.translate}});const n=e=>"string"==typeof e?e:JSON.stringify(e);t.ready=function(e){s?setTimeout(e,1):(p.push(e),"loading"!==document.readyState?setTimeout(o,1):i||(document.addEventListener("DOMContentLoaded",o),i=!0))};let p=[],i=!1,s=!1;function o(){s||(s=!0,p.forEach(e=>e()),p=[],document.removeEventListener("DOMContentLoaded",o))}function m(e="div",t,...a){var p,i,s,o,m;let c;if(e instanceof Element)c=e.cloneNode(!0);else if(/^\s*</.test(e)){const t=document.createElement("div");t.innerHTML=e,c=t.firstElementChild}else{e=(e=e.replace(/:--[A-Z][a-z]+/g,e=>"[itemscope] "+r.translate(e))).replace(/:--[a-zA-Z]+/g,r.translate);const t=null!==(i=null===(p=/^[a-z0-9]+/i.exec(e))||void 0===p?void 0:p[0])&&void 0!==i?i:"div",a=null!==(s=e.match(/(?:^|\s)#([a-z]+[a-z0-9-]*)/gi))&&void 0!==s?s:[],n=null!==(o=e.match(/(?:^|\s)\.([a-z]+[a-z0-9-]*)/gi))&&void 0!==o?o:[],u=null!==(m=e.match(/(?:^|\s)\[([a-z][a-z0-9-]+)(~?=['|"]?([^\]]*)['|"]?)?\]/gi))&&void 0!==m?m:[];c=document.createElement(t),a.length>=1&&(c.id=a[0].split("#")[1]),a.length>1&&console.warn("Got more than one id; ignoring all but first"),n.length>0&&c.setAttribute("class",n.map(e=>e.split(".")[1]).join(" ")),u.forEach(e=>{let[t,a]=e.split("[")[1].slice(0,-1).split(/~?=/);void 0!==a&&(a=a.replace(/^['"](.*)['"]$/,"$1")),c.setAttribute(t,null!=a?a:"")})}return null===t||"object"!=typeof t||t instanceof Element?void 0!==t&&(a=[t,...a]):Object.entries(t).forEach(([e,t])=>{void 0!==t&&c.setAttribute(e,n(t))}),a.forEach(e=>u(c,e)),c}function c(e,t){if(void 0===t)return Array.from(e.attributes).reduce((e,t)=>({...e,[t.name]:t.value}),{});Object.entries(t).forEach(([t,a])=>{null!=a&&e.setAttribute(t,n(a))})}function u(e,...t){t.forEach(t=>null!=t?e.appendChild(t instanceof Element?t:document.createTextNode(n(t))):void 0)}function l(e,...t){const a=e.parentNode;null!==a&&t.reverse().forEach(t=>a.insertBefore(t,e.nextSibling))}function d(e,...t){const a=e.parentNode;if(null!==a){const r=t[0];a.replaceChild(r,e),l(r,...t.slice(1))}}t.whenReady=o,t.first=function(...e){const[t,a]=1===e.length?[document,e[0]]:e.slice(0,2);return t.querySelector(r.translate(a))},t.select=function(...e){const[t,a]=1===e.length?[document,e[0]]:e.slice(0,2);return Array.from(t.querySelectorAll(r.translate(a)))},t.create=m,t.tag=function(e,t){if(void 0===t)return e.tagName.toLowerCase();const a=m(t,c(e));return a.innerHTML=e.innerHTML,a},t.attrs=c,t.attr=function(e,t,a){return void 0===a&&null!==a?e.getAttribute(t):(e.setAttribute(t,a),null)},t.text=function(e,t){if(void 0===t)return e.textContent;e.textContent=t},t.append=u,t.prepend=function(e,...t){t.reverse().forEach(t=>{var a;return e.insertBefore(t,null!==(a=e.childNodes[0])&&void 0!==a?a:null)})},t.before=function(e,...t){const a=e.parentNode;null!==a&&t.forEach(t=>a.insertBefore(t,e))},t.after=l,t.replace=d,t.wrap=function(e,t){u(t,m(e)),d(e,t)}},2:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.translate=void 0,t.translate=function(e){return e.replace(/:--\w+/g,e=>{switch(e){case":--root":return"[data-itemscope='root']";case":--Array":return"[itemtype~='http://schema.stenci.la/Array']";case":--ArrayValidator":return"[itemtype~='http://schema.stenci.la/ArrayValidator']";case":--Article":return"[itemtype~='http://schema.org/Article']";case":--AudioObject":return"[itemtype~='http://schema.org/AudioObject']";case":--Boolean":return"[itemtype~='http://schema.org/Boolean']";case":--BooleanValidator":return"[itemtype~='http://schema.stenci.la/BooleanValidator']";case":--Brand":return"[itemtype~='http://schema.org/Brand']";case":--Cite":return"[itemtype~='http://schema.stenci.la/Cite']";case":--CiteGroup":return"[itemtype~='http://schema.stenci.la/CiteGroup']";case":--Code":return"[itemtype~='http://schema.stenci.la/Code']";case":--CodeBlock":return"[itemtype~='http://schema.stenci.la/CodeBlock']";case":--CodeChunk":return"[itemtype~='http://schema.stenci.la/CodeChunk']";case":--CodeError":return"[itemtype~='http://schema.stenci.la/CodeError']";case":--CodeExpression":return"[itemtype~='http://schema.stenci.la/CodeExpression']";case":--CodeFragment":return"[itemtype~='http://schema.stenci.la/CodeFragment']";case":--Collection":return"[itemtype~='http://schema.org/Collection']";case":--ConstantValidator":return"[itemtype~='http://schema.stenci.la/ConstantValidator']";case":--ContactPoint":return"[itemtype~='http://schema.org/ContactPoint']";case":--CreativeWork":return"[itemtype~='http://schema.org/CreativeWork']";case":--Datatable":return"[itemtype~='http://schema.stenci.la/Datatable']";case":--DatatableColumn":return"[itemtype~='http://schema.stenci.la/DatatableColumn']";case":--Date":return"[itemtype~='http://schema.org/Date']";case":--Delete":return"[itemtype~='http://schema.stenci.la/Delete']";case":--Emphasis":return"[itemtype~='http://schema.stenci.la/Emphasis']";case":--Entity":return"[itemtype~='http://schema.stenci.la/Entity']";case":--EnumValidator":return"[itemtype~='http://schema.stenci.la/EnumValidator']";case":--Figure":return"[itemtype~='http://schema.stenci.la/Figure']";case":--Function":return"[itemtype~='http://schema.stenci.la/Function']";case":--Grant":return"[itemtype~='http://schema.org/Grant']";case":--Heading":return"[itemtype~='http://schema.stenci.la/Heading']";case":--ImageObject":return"[itemtype~='http://schema.org/ImageObject']";case":--Include":return"[itemtype~='http://schema.stenci.la/Include']";case":--IntegerValidator":return"[itemtype~='http://schema.stenci.la/IntegerValidator']";case":--Link":return"[itemtype~='http://schema.stenci.la/Link']";case":--List":return"[itemtype~='http://schema.org/ItemList']";case":--ListItem":return"[itemtype~='http://schema.org/ListItem']";case":--Mark":return"[itemtype~='http://schema.stenci.la/Mark']";case":--Math":return"[itemtype~='http://schema.stenci.la/Math']";case":--MathBlock":return"[itemtype~='http://schema.stenci.la/MathBlock']";case":--MathFragment":return"[itemtype~='http://schema.stenci.la/MathFragment']";case":--MediaObject":return"[itemtype~='http://schema.org/MediaObject']";case":--MonetaryGrant":return"[itemtype~='http://schema.org/MonetaryGrant']";case":--Null":return"[itemtype~='http://schema.stenci.la/Null']";case":--Number":return"[itemtype~='http://schema.org/Number']";case":--NumberValidator":return"[itemtype~='http://schema.stenci.la/NumberValidator']";case":--Object":return"[itemtype~='http://schema.stenci.la/Object']";case":--Organization":return"[itemtype~='http://schema.org/Organization']";case":--Paragraph":return"[itemtype~='http://schema.stenci.la/Paragraph']";case":--Parameter":return"[itemtype~='http://schema.stenci.la/Parameter']";case":--Periodical":return"[itemtype~='http://schema.org/Periodical']";case":--Person":return"[itemtype~='http://schema.org/Person']";case":--PostalAddress":return"[itemtype~='http://schema.org/PostalAddress']";case":--Product":return"[itemtype~='http://schema.org/Product']";case":--PropertyValue":return"[itemtype~='http://schema.org/PropertyValue']";case":--PublicationIssue":return"[itemtype~='http://schema.org/PublicationIssue']";case":--PublicationVolume":return"[itemtype~='http://schema.org/PublicationVolume']";case":--Quote":return"[itemtype~='http://schema.stenci.la/Quote']";case":--QuoteBlock":return"[itemtype~='http://schema.stenci.la/QuoteBlock']";case":--SoftwareApplication":return"[itemtype~='http://schema.org/SoftwareApplication']";case":--SoftwareEnvironment":return"[itemtype~='http://schema.stenci.la/SoftwareEnvironment']";case":--SoftwareSession":return"[itemtype~='http://schema.stenci.la/SoftwareSession']";case":--SoftwareSourceCode":return"[itemtype~='http://schema.org/SoftwareSourceCode']";case":--StringValidator":return"[itemtype~='http://schema.stenci.la/StringValidator']";case":--Strong":return"[itemtype~='http://schema.stenci.la/Strong']";case":--Subscript":return"[itemtype~='http://schema.stenci.la/Subscript']";case":--Superscript":return"[itemtype~='http://schema.stenci.la/Superscript']";case":--Table":return"[itemtype~='http://schema.org/Table']";case":--TableCell":return"[itemtype~='http://schema.stenci.la/TableCell']";case":--TableRow":return"[itemtype~='http://schema.stenci.la/TableRow']";case":--Text":return"[itemtype~='http://schema.org/Text']";case":--ThematicBreak":return"[itemtype~='http://schema.stenci.la/ThematicBreak']";case":--Thing":return"[itemtype~='http://schema.org/Thing']";case":--TupleValidator":return"[itemtype~='http://schema.stenci.la/TupleValidator']";case":--Variable":return"[itemtype~='http://schema.stenci.la/Variable']";case":--VideoObject":return"[itemtype~='http://schema.org/VideoObject']";case":--VolumeMount":return"[itemtype~='http://schema.stenci.la/VolumeMount']";case":--address":return"[itemprop~='address']";case":--addressCountry":return"[itemprop~='addressCountry']";case":--addressLocality":return"[itemprop~='addressLocality']";case":--addressRegion":return"[itemprop~='addressRegion']";case":--adds":return"[data-itemprop~='adds']";case":--add":return"[data-itemprop~='add']";case":--affiliations":return"[data-itemprop~='affiliations']";case":--affiliation":return"[itemprop~='affiliation']";case":--alternateNames":return"[data-itemprop~='alternateNames']";case":--alternateName":return"[itemprop~='alternateName']";case":--alters":return"[data-itemprop~='alters']";case":--alter":return"[data-itemprop~='alter']";case":--amounts":return"[itemprop~='amount']";case":--assigns":return"[data-itemprop~='assigns']";case":--assign":return"[data-itemprop~='assign']";case":--authors":return"[data-itemprop~='authors']";case":--author":return"[itemprop~='author']";case":--availableLanguages":return"[data-itemprop~='availableLanguages']";case":--availableLanguage":return"[itemprop~='availableLanguage']";case":--bitrate":return"[itemprop~='bitrate']";case":--brands":return"[data-itemprop~='brands']";case":--brand":return"[itemprop~='brand']";case":--caption":return"[itemprop~='caption']";case":--cellType":return"[data-itemprop~='cellType']";case":--cells":return"[data-itemprop~='cells']";case":--cell":return"[data-itemprop~='cell']";case":--citationMode":return"[data-itemprop~='citationMode']";case":--cite":return"[data-itemprop~='cite']";case":--clientsLimit":return"[data-itemprop~='clientsLimit']";case":--clientsRequest":return"[data-itemprop~='clientsRequest']";case":--codeRepository":return"[itemprop~='codeRepository']";case":--codeSampleType":return"[itemprop~='codeSampleType']";case":--colspan":return"[data-itemprop~='colspan']";case":--columns":return"[data-itemprop~='columns']";case":--column":return"[data-itemprop~='column']";case":--contactPoints":return"[data-itemprop~='contactPoints']";case":--contactPoint":return"[itemprop~='contactPoint']";case":--contains":return"[data-itemprop~='contains']";case":--content":return"[data-itemprop~='content']";case":--contentSize":return"[itemprop~='contentSize']";case":--contentUrl":return"[itemprop~='contentUrl']";case":--cpuLimit":return"[data-itemprop~='cpuLimit']";case":--cpuRequest":return"[data-itemprop~='cpuRequest']";case":--dateAccepted":return"[data-itemprop~='dateAccepted']";case":--dateCreated":return"[itemprop~='dateCreated']";case":--dateEnd":return"[itemprop~='endDate']";case":--dateModified":return"[itemprop~='dateModified']";case":--datePublished":return"[itemprop~='datePublished']";case":--dateReceived":return"[itemprop~='dateReceived']";case":--dateStart":return"[itemprop~='startDate']";case":--declares":return"[data-itemprop~='declares']";case":--declare":return"[data-itemprop~='declare']";case":--default":return"[itemprop~='defaultValue']";case":--departments":return"[data-itemprop~='departments']";case":--department":return"[itemprop~='department']";case":--depth":return"[data-itemprop~='depth']";case":--description":return"[itemprop~='description']";case":--duration":return"[data-itemprop~='duration']";case":--durationLimit":return"[data-itemprop~='durationLimit']";case":--durationRequest":return"[data-itemprop~='durationRequest']";case":--editors":return"[data-itemprop~='editors']";case":--editor":return"[itemprop~='editor']";case":--emails":return"[data-itemprop~='emails']";case":--email":return"[itemprop~='email']";case":--embedUrl":return"[itemprop~='embedUrl']";case":--environment":return"[data-itemprop~='environment']";case":--errorMessage":return"[data-itemprop~='errorMessage']";case":--errorType":return"[data-itemprop~='errorType']";case":--errors":return"[data-itemprop~='errors']";case":--error":return"[data-itemprop~='error']";case":--exclusiveMaximum":return"[data-itemprop~='exclusiveMaximum']";case":--exclusiveMinimum":return"[data-itemprop~='exclusiveMinimum']";case":--exportFrom":return"[data-itemprop~='exportFrom']";case":--extends":return"[data-itemprop~='extends']";case":--extend":return"[data-itemprop~='extend']";case":--familyNames":return"[data-itemprop~='familyNames']";case":--familyName":return"[itemprop~='familyName']";case":--format":return"[itemprop~='encodingFormat']";case":--fundedBy":return"[data-itemprop~='fundedBy']";case":--fundedItems":return"[data-itemprop~='fundedItems']";case":--fundedItem":return"[itemprop~='fundedItem']";case":--funders":return"[data-itemprop~='funders']";case":--funder":return"[itemprop~='funder']";case":--givenNames":return"[data-itemprop~='givenNames']";case":--givenName":return"[itemprop~='givenName']";case":--honorificPrefix":return"[itemprop~='honorificPrefix']";case":--honorificSuffix":return"[itemprop~='honorificSuffix']";case":--id":return"[data-itemprop~='@id']";case":--identifiers":return"[data-itemprop~='identifiers']";case":--identifier":return"[itemprop~='identifier']";case":--images":return"[data-itemprop~='images']";case":--image":return"[itemprop~='image']";case":--importTo":return"[data-itemprop~='importTo']";case":--imports":return"[data-itemprop~='imports']";case":--import":return"[data-itemprop~='import']";case":--isChecked":return"[data-itemprop~='isChecked']";case":--isExtensible":return"[data-itemprop~='isExtensible']";case":--isPartOf":return"[itemprop~='isPartOf']";case":--isReadonly":return"[itemprop~='readonlyValue']";case":--isRequired":return"[itemprop~='valueRequired']";case":--isVariadic":return"[data-itemprop~='isVariadic']";case":--issns":return"[data-itemprop~='issns']";case":--issn":return"[itemprop~='issn']";case":--issueNumber":return"[itemprop~='issueNumber']";case":--item":return"[itemprop~='item'], [itemprop~='itemListElement']";case":--items":return"[data-itemprop~='items']";case":--itemsValidator":return"[data-itemprop~='itemsValidator']";case":--jobTitle":return"[itemprop~='jobTitle']";case":--keywords":return"[data-itemprop~='keywords']";case":--keyword":return"[itemprop~='keywords']";case":--label":return"[data-itemprop~='label']";case":--legalName":return"[itemprop~='legalName']";case":--licenses":return"[data-itemprop~='licenses']";case":--license":return"[itemprop~='license']";case":--logo":return"[itemprop~='logo']";case":--maintainers":return"[data-itemprop~='maintainers']";case":--maintainer":return"[data-itemprop~='maintainer']";case":--mathLanguage":return"[data-itemprop~='mathLanguage']";case":--maxItems":return"[data-itemprop~='maxItems']";case":--maxLength":return"[data-itemprop~='maxLength']";case":--maximum":return"[data-itemprop~='maximum']";case":--memberOf":return"[itemprop~='memberOf']";case":--memoryLimit":return"[data-itemprop~='memoryLimit']";case":--memoryRequest":return"[data-itemprop~='memoryRequest']";case":--meta":return"[data-itemprop~='meta']";case":--minItems":return"[data-itemprop~='minItems']";case":--minLength":return"[data-itemprop~='minLength']";case":--minimum":return"[data-itemprop~='minimum']";case":--mountDestination":return"[data-itemprop~='mountDestination']";case":--mountOptions":return"[data-itemprop~='mountOptions']";case":--mountOption":return"[data-itemprop~='mountOption']";case":--mountSource":return"[data-itemprop~='mountSource']";case":--mountType":return"[data-itemprop~='mountType']";case":--multipleOf":return"[data-itemprop~='multipleOf']";case":--name":return"[itemprop~='name']";case":--networkTransferLimit":return"[data-itemprop~='networkTransferLimit']";case":--networkTransferRequest":return"[data-itemprop~='networkTransferRequest']";case":--order":return"[itemprop~='itemListOrder']";case":--output":return"[data-itemprop~='output']";case":--outputs":return"[data-itemprop~='outputs']";case":--pageEnd":return"[itemprop~='pageEnd']";case":--pageStart":return"[itemprop~='pageStart']";case":--pagination":return"[itemprop~='pagination']";case":--parameters":return"[data-itemprop~='parameters']";case":--parameter":return"[data-itemprop~='parameter']";case":--parentOrganization":return"[itemprop~='parentOrganization']";case":--parts":return"[data-itemprop~='parts']";case":--part":return"[itemprop~='hasParts']";case":--pattern":return"[data-itemprop~='pattern']";case":--position":return"[itemprop~='position']";case":--postOfficeBoxNumber":return"[itemprop~='postOfficeBoxNumber']";case":--postalCode":return"[itemprop~='postalCode']";case":--prefix":return"[data-itemprop~='citationPrefix']";case":--productID":return"[itemprop~='productID']";case":--programmingLanguage":return"[itemprop~='programmingLanguage']";case":--propertyID":return"[itemprop~='propertyID']";case":--publisher":return"[itemprop~='publisher']";case":--reads":return"[data-itemprop~='reads']";case":--read":return"[data-itemprop~='read']";case":--references":return"[data-itemprop~='references']";case":--reference":return"[itemprop~='citation']";case":--relation":return"[itemprop~='linkRelationship']";case":--removes":return"[data-itemprop~='removes']";case":--remove":return"[data-itemprop~='remove']";case":--returns":return"[data-itemprop~='returns']";case":--reviews":return"[data-itemprop~='reviews']";case":--review":return"[itemprop~='review']";case":--rowType":return"[data-itemprop~='rowType']";case":--rows":return"[data-itemprop~='rows']";case":--row":return"[data-itemprop~='row']";case":--rowspan":return"[data-itemprop~='rowspan']";case":--runtimePlatform":return"[itemprop~='runtimePlatform']";case":--softwareRequirements":return"[data-itemprop~='softwareRequirements']";case":--softwareRequirement":return"[itemprop~='softwareRequirements']";case":--softwareVersion":return"[itemprop~='softwareVersion']";case":--source":return"[data-itemprop~='source']";case":--sponsors":return"[data-itemprop~='sponsors']";case":--sponsor":return"[itemprop~='sponsor']";case":--stackTrace":return"[data-itemprop~='stackTrace']";case":--status":return"[data-itemprop~='sessionStatus']";case":--streetAddress":return"[itemprop~='streetAddress']";case":--suffix":return"[data-itemprop~='citationSuffix']";case":--target":return"[data-itemprop~='target']";case":--targetProducts":return"[data-itemprop~='targetProducts']";case":--targetProduct":return"[itemprop~='targetProduct']";case":--telephoneNumbers":return"[data-itemprop~='telephoneNumbers']";case":--telephoneNumber":return"[itemprop~='telephone']";case":--text":return"[itemprop~='text']";case":--thumbnail":return"[itemprop~='thumbnail']";case":--timeoutLimit":return"[data-itemprop~='timeoutLimit']";case":--timeoutRequest":return"[data-itemprop~='timeoutRequest']";case":--title":return"[itemprop~='headline']";case":--transcript":return"[itemprop~='transcript']";case":--type":return"[data-itemprop~='@type']";case":--uniqueItems":return"[data-itemprop~='uniqueItems']";case":--url":return"[itemprop~='url']";case":--uses":return"[data-itemprop~='uses']";case":--use":return"[data-itemprop~='use']";case":--validator":return"[data-itemprop~='validator']";case":--value":return"[itemprop~='value'], [data-itemprop~='value']";case":--values":return"[data-itemprop~='values']";case":--version":return"[itemprop~='version']";case":--volumeMounts":return"[data-itemprop~='volumeMounts']";case":--volumeMount":return"[data-itemprop~='volumeMount']";case":--volumeNumber":return"[itemprop~='volumeNumber']";default:throw new Error("Unknown custom selector: "+e)}})}},253:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getFixtureData=void 0;const r=a(0);t.getFixtureData=()=>r.create("ol",null,r.create('<li itemscope="" itemtype="http://schema.org/Article" itemprop="citation" id="bib5">\n        <ol data-itemprop="authors">\n          <li itemscope="" itemtype="http://schema.org/Person" itemprop="author">\n            <meta itemprop="name" content="DJ Duffy"><span data-itemprop="givenNames"><span itemprop="givenName">DJ</span></span><span data-itemprop="familyNames"><span itemprop="familyName">Duffy</span></span></li>\n          <li itemscope="" itemtype="http://schema.org/Person" itemprop="author">\n            <meta itemprop="name" content="A Krstic"><span data-itemprop="givenNames"><span itemprop="givenName">A</span></span><span data-itemprop="familyNames"><span itemprop="familyName">Krstic</span></span></li>\n          <li itemscope="" itemtype="http://schema.org/Person" itemprop="author">\n            <meta itemprop="name" content="M Halasz"><span data-itemprop="givenNames"><span itemprop="givenName">M</span></span><span data-itemprop="familyNames"><span itemprop="familyName">Halasz</span></span></li>\n          <li itemscope="" itemtype="http://schema.org/Person" itemprop="author">\n            <meta itemprop="name" content="T Schwarzl"><span data-itemprop="givenNames"><span itemprop="givenName">T</span></span><span data-itemprop="familyNames"><span itemprop="familyName">Schwarzl</span></span></li>\n          <li itemscope="" itemtype="http://schema.org/Person" itemprop="author">\n            <meta itemprop="name" content="D Fey"><span data-itemprop="givenNames"><span itemprop="givenName">D</span></span><span data-itemprop="familyNames"><span itemprop="familyName">Fey</span></span></li>\n          <li itemscope="" itemtype="http://schema.org/Person" itemprop="author">\n            <meta itemprop="name" content="K Iljin"><span data-itemprop="givenNames"><span itemprop="givenName">K</span></span><span data-itemprop="familyNames"><span itemprop="familyName">Iljin</span></span></li>\n          <li itemscope="" itemtype="http://schema.org/Person" itemprop="author">\n            <meta itemprop="name" content="JP Mehta"><span data-itemprop="givenNames"><span itemprop="givenName">JP</span></span><span data-itemprop="familyNames"><span itemprop="familyName">Mehta</span></span></li>\n          <li itemscope="" itemtype="http://schema.org/Person" itemprop="author">\n            <meta itemprop="name" content="K Killick"><span data-itemprop="givenNames"><span itemprop="givenName">K</span></span><span data-itemprop="familyNames"><span itemprop="familyName">Killick</span></span></li>\n          <li itemscope="" itemtype="http://schema.org/Person" itemprop="author">\n            <meta itemprop="name" content="J Whilde"><span data-itemprop="givenNames"><span itemprop="givenName">J</span></span><span data-itemprop="familyNames"><span itemprop="familyName">Whilde</span></span></li>\n          <li itemscope="" itemtype="http://schema.org/Person" itemprop="author">\n            <meta itemprop="name" content="B Turriziani"><span data-itemprop="givenNames"><span itemprop="givenName">B</span></span><span data-itemprop="familyNames"><span itemprop="familyName">Turriziani</span></span></li>\n          <li itemscope="" itemtype="http://schema.org/Person" itemprop="author">\n            <meta itemprop="name" content="S Haapa-Paananen"><span data-itemprop="givenNames"><span itemprop="givenName">S</span></span><span data-itemprop="familyNames"><span itemprop="familyName">Haapa-Paananen</span></span></li>\n          <li itemscope="" itemtype="http://schema.org/Person" itemprop="author">\n            <meta itemprop="name" content="V Fey"><span data-itemprop="givenNames"><span itemprop="givenName">V</span></span><span data-itemprop="familyNames"><span itemprop="familyName">Fey</span></span></li>\n          <li itemscope="" itemtype="http://schema.org/Person" itemprop="author">\n            <meta itemprop="name" content="M Fischer"><span data-itemprop="givenNames"><span itemprop="givenName">M</span></span><span data-itemprop="familyNames"><span itemprop="familyName">Fischer</span></span></li>\n          <li itemscope="" itemtype="http://schema.org/Person" itemprop="author">\n            <meta itemprop="name" content="F Westermann"><span data-itemprop="givenNames"><span itemprop="givenName">F</span></span><span data-itemprop="familyNames"><span itemprop="familyName">Westermann</span></span></li>\n          <li itemscope="" itemtype="http://schema.org/Person" itemprop="author">\n            <meta itemprop="name" content="K-O Henrich"><span data-itemprop="givenNames"><span itemprop="givenName">K-O</span></span><span data-itemprop="familyNames"><span itemprop="familyName">Henrich</span></span></li>\n          <li itemscope="" itemtype="http://schema.org/Person" itemprop="author">\n            <meta itemprop="name" content="S Bannert"><span data-itemprop="givenNames"><span itemprop="givenName">S</span></span><span data-itemprop="familyNames"><span itemprop="familyName">Bannert</span></span></li>\n          <li itemscope="" itemtype="http://schema.org/Person" itemprop="author">\n            <meta itemprop="name" content="DG Higgins"><span data-itemprop="givenNames"><span itemprop="givenName">DG</span></span><span data-itemprop="familyNames"><span itemprop="familyName">Higgins</span></span></li>\n          <li itemscope="" itemtype="http://schema.org/Person" itemprop="author">\n            <meta itemprop="name" content="W Kolch"><span data-itemprop="givenNames"><span itemprop="givenName">W</span></span><span data-itemprop="familyNames"><span itemprop="familyName">Kolch</span></span></li>\n        </ol><time itemprop="datePublished" datetime="2015">2015</time><span itemprop="headline" content="Integrative omics reveals MYCN as a global suppressor of cellular signalling and enables network-based therapeutic target discovery in neuroblastoma">Integrative\n          omics reveals MYCN as a global suppressor of cellular signalling and enables network-based\n          therapeutic target discovery in neuroblastoma</span><span itemscope="" itemtype="http://schema.org/PublicationVolume" itemprop="isPartOf"><span itemprop="volumeNumber" data-itemtype="http://schema.org/Number">6</span><span itemscope="" itemtype="http://schema.org/Periodical" itemprop="isPartOf"><span itemprop="name">Oncotarget</span></span></span><span itemprop="pageStart" data-itemtype="http://schema.org/Number">43182</span><span itemprop="pageEnd" data-itemtype="http://schema.org/Number">43201</span><span itemscope="" itemtype="http://schema.org/Organization" itemprop="publisher">\n          <meta itemprop="name" content="Unknown"><span itemscope="" itemtype="http://schema.org/ImageObject" itemprop="logo">\n            <meta itemprop="url" content="https://via.placeholder.com/600x60/dbdbdb/4a4a4a.png?text=Unknown">\n            </span></span>\n        <meta itemprop="image" content="https://via.placeholder.com/1200x714/dbdbdb/4a4a4a.png?text=Integrative%20omics%20reveals%20MYCN%20as%20a%20global%20suppressor%20of%20cellular%20signalling%20and%20enables%20network-based%20therap%E2%80%A6">\n      </li>'))}})}));