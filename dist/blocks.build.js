!function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=7)}([function(e,t){e.exports=React},function(e,t,n){function r(e){for(var t=1;e(t)>0;)t+=1;for(;e(t)<0;)t-=.01;return t+.01}function a(e,t,n){for(var r=0,a=0,o=0;o<e.length;o++)r+=e[o]/Math.pow(1+n,t[o]);for(o=0;o<e.length;o++)a+=-e[o]*t[o]*Math.pow(1+n,-1-t[o]);return r/a}function o(e,t){return Math.abs(t.getTime()-e.getTime())/31536e6}var l=function(){};l.prototype.PV=function(e,t,n){n="undefined"!==typeof n?n:1;var r,e=e/100;return r=t/Math.pow(1+e,n),Math.round(100*r)/100},l.prototype.FV=function(e,t,n){var r,e=e/100;return r=t*Math.pow(1+e,n),Math.round(100*r)/100},l.prototype.NPV=function(e){for(var e=e/100,t=arguments[1],n=2;n<arguments.length;n++)t+=arguments[n]/Math.pow(1+e,n-1);return Math.round(100*t)/100},l.prototype.IRR=function(e){function t(e){if(++i>1e3)throw new Error("IRR can't find a result");for(var t=1+e/100,n=o[0],r=1;r<o.length;r++)n+=o[r]/Math.pow(t,r);return n}var n,a,o=arguments,i=1;if(Array.prototype.slice.call(o).forEach(function(e){e>0&&(n=!0),e<0&&(a=!0)}),!n||!a)throw new Error("IRR requires at least one positive value and one negative value");return Math.round(100*r(t))/100},l.prototype.PP=function(e,t){if(0===e)return Math.abs(arguments[1])/arguments[2];var n=arguments[1],r=1;for(i=2;i<arguments.length;i++){if((n+=arguments[i])>0)return r+=(n-arguments[i])/arguments[i];r++}},l.prototype.ROI=function(e,t){var n=(t-Math.abs(e))/Math.abs(e)*100;return Math.round(100*n)/100},l.prototype.AM=function(e,t,n,r,a){function o(e){return a&&(e-=1),s*Math.pow(1+s,e)}var i,l,u,s=t/12/100;return r?1===r?(i=o(n),l=Math.pow(1+s,n)-1):console.log("not defined"):(i=o(12*n),l=Math.pow(1+s,12*n)-1),u=e*(i/l),Math.round(100*u)/100},l.prototype.PI=function(e,t){for(var n,r=0,a=2;a<arguments.length;a++){var o;o=1/Math.pow(1+e/100,a-1),r+=arguments[a]*o}return n=r/Math.abs(arguments[1]),Math.round(100*n)/100},l.prototype.DF=function(e,t){for(var n,r=[],a=1;a<t;a++)n=1/Math.pow(1+e/100,a-1),roundedDiscountFactor=Math.ceil(1e3*n)/1e3,r.push(roundedDiscountFactor);return r},l.prototype.CI=function(e,t,n,r){var a=n*Math.pow(1+e/100/t,t*r);return Math.round(100*a)/100},l.prototype.CAGR=function(e,t,n){var r=Math.pow(t/e,1/n)-1;return Math.round(1e4*r)/100},l.prototype.LR=function(e,t,n){return(e+t)/n},l.prototype.R72=function(e){return 72/e},l.prototype.WACC=function(e,t,n,r,a){E=e,D=t,V=e+t,Re=n,Rd=r,T=a;var o=E/V*Re/100+D/V*Rd/100*(1-T/100);return Math.round(1e3*o)/10},l.prototype.PMT=function(e,t,n){return-n*e/(1-Math.pow(1+e,-t))},l.prototype.IAR=function(e,t){return 100*((1+e)/(1+t)-1)},l.prototype.XIRR=function(e,t,n){if(e.length!=t.length)throw new Error("Number of cash flows and dates should match");var r,i;if(Array.prototype.slice.call(e).forEach(function(e){e>0&&(r=!0),e<0&&(i=!0)}),!r||!i)throw new Error("XIRR requires at least one positive value and one negative value");n=n||0;var l,u=100,s=[];s.push(0);for(var p=1;p<t.length;p++)s.push(o(t[0],t[p]));do{l=n,n=l-a(e,s,l),u--}while(l.toFixed(5)!=n.toFixed(5)&&u>0);var c=l.toFixed(5)!=n.toFixed(5)?null:100*n;return Math.round(100*c)/100},"undefined"!==typeof e&&e.exports&&(e.exports=l,e.exports.Finance=l)},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(0),u=(n.n(l),n(1)),s=(n.n(u),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),p=wp.element,c=p.Component,d=p.Fragment,f=wp.i18n.__,b=wp.components,m=b.SelectControl,h=b.TextControl,v=b.Button,w=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={principal:e.principal,rate:e.rate,number_of_payments:e.number_of_payments,interval:e.interval,result:null},n.updateValue=n.updateValue.bind(n),n.calculateResult=n.calculateResult.bind(n),n}return i(t,e),s(t,[{key:"updateValue",value:function(e,t){var n=r({},e,t);"undefined"!==typeof this.props.onUpdate&&this.props.onUpdate(n),this.setState(n),null!==this.state.result&&this.setState({result:null})}},{key:"calculateResult",value:function(){var e=new u.Finance,t=[parseFloat(this.state.principal)||0,parseFloat(this.state.rate)||1,parseInt(this.state.number_of_payments)||1,parseInt(this.state.interval)],n=e.AM.apply(e,t);0===n?this.setState({result:f("Could not calculate with the given values.")}):this.setState({result:f("Monthly payment is $"+n+".")})}},{key:"render",value:function(){var e=this.state,t=e.principal,n=e.rate,r=e.number_of_payments,a=e.interval,o=e.result;return wp.element.createElement(d,null,wp.element.createElement("div",{className:"sbb-twoplustwo-amortization-controls"},wp.element.createElement(h,{label:f("Principal"),value:t,onChange:this.updateValue.bind(null,"principal")}),wp.element.createElement(h,{label:f("Interest Rate"),value:n,onChange:this.updateValue.bind(null,"rate")}),wp.element.createElement(h,{label:f("Number of Payments"),value:r,onChange:this.updateValue.bind(null,"number_of_payments")}),wp.element.createElement(m,{label:f("Interval"),value:a,options:[{label:f("Years"),value:0},{label:f("Months"),value:1}],onChange:this.updateValue.bind(null,"interval")})),wp.element.createElement("div",{className:"sbb-twoplustwo-amortization-actions"},wp.element.createElement(v,{isPrimary:!0,onClick:this.calculateResult},f("Calculate"))),o&&wp.element.createElement("p",{className:"sbb-twoplustwo-amortization-result"},o))}}]),t}(c);t.a=w},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(0),u=(n.n(l),n(1)),s=(n.n(u),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),p=wp.element,c=p.Component,d=p.Fragment,f=wp.i18n.__,b=wp.components,m=b.TextControl,h=b.Button,v=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={beginningValue:e.beginningValue,endingValue:e.endingValue,numberOfPeriods:e.numberOfPeriods,result:null},n.updateValue=n.updateValue.bind(n),n.calculateResult=n.calculateResult.bind(n),n}return i(t,e),s(t,[{key:"updateValue",value:function(e,t){var n=r({},e,t);"undefined"!==typeof this.props.onUpdate&&this.props.onUpdate(n),this.setState(n),null!==this.state.result&&this.setState({result:null})}},{key:"calculateResult",value:function(){var e=new u.Finance,t=[parseFloat(this.state.beginningValue)||0,parseFloat(this.state.endingValue)||1,parseInt(this.state.numberOfPeriods)||1],n=e.CAGR.apply(e,t);0===n?this.setState({result:f("Could not calculate with the given values.")}):this.setState({result:f("CAGR is "+n+"%.")})}},{key:"render",value:function(){var e=this.state,t=e.beginningValue,n=e.endingValue,r=e.numberOfPeriods,a=e.result;return wp.element.createElement(d,null,wp.element.createElement("div",{className:"sbb-twoplustwo-amortization-controls"},wp.element.createElement(m,{label:f("Beginning Value"),value:t,onChange:this.updateValue.bind(null,"beginningValue")}),wp.element.createElement(m,{label:f("Ending Value"),value:n,onChange:this.updateValue.bind(null,"endingValue")}),wp.element.createElement(m,{label:f("Number of Periods"),value:r,onChange:this.updateValue.bind(null,"numberOfPeriods")})),wp.element.createElement("div",{className:"sbb-twoplustwo-amortization-actions"},wp.element.createElement(h,{isPrimary:!0,onClick:this.calculateResult},f("Calculate"))),a&&wp.element.createElement("p",{className:"sbb-twoplustwo-amortization-result"},a))}}]),t}(c);t.a=v},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(0),u=(n.n(l),n(1)),s=(n.n(u),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),p=wp.element,c=p.Component,d=p.Fragment,f=wp.i18n.__,b=wp.components,m=b.TextControl,h=b.Button,v=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={rate:e.rate,compoundingsPerPeriod:e.compoundingsPerPeriod,principal:e.principal,numberOfPeriods:e.numberOfPeriods,result:null},n.updateValue=n.updateValue.bind(n),n.calculateResult=n.calculateResult.bind(n),n}return i(t,e),s(t,[{key:"updateValue",value:function(e,t){var n=r({},e,t);"undefined"!==typeof this.props.onUpdate&&this.props.onUpdate(n),this.setState(n),null!==this.state.result&&this.setState({result:null})}},{key:"calculateResult",value:function(){var e=new u.Finance,t=[parseFloat(this.state.rate)||0,parseInt(this.state.compoundingsPerPeriod)||1,parseFloat(this.state.principal)||1,parseInt(this.state.numberOfPeriods)||1],n=e.CI.apply(e,t);0===n?this.setState({result:f("Could not calculate with the given values.")}):this.setState({result:f("Compound Interest is $"+n+".")})}},{key:"render",value:function(){var e=this.state,t=e.rate,n=e.compoundingsPerPeriod,r=e.principal,a=e.numberOfPeriods,o=e.result;return wp.element.createElement(d,null,wp.element.createElement("div",{className:"sbb-twoplustwo-amortization-controls"},wp.element.createElement(m,{label:f("Rate"),value:t,onChange:this.updateValue.bind(null,"rate")}),wp.element.createElement(m,{label:f("Compoundings per period"),value:n,onChange:this.updateValue.bind(null,"compoundingsPerPeriod")}),wp.element.createElement(m,{label:f("Principal"),value:r,onChange:this.updateValue.bind(null,"principal")}),wp.element.createElement(m,{label:f("Number of periods"),value:a,onChange:this.updateValue.bind(null,"numberOfPeriods")})),wp.element.createElement("div",{className:"sbb-twoplustwo-amortization-actions"},wp.element.createElement(h,{isPrimary:!0,onClick:this.calculateResult},f("Calculate"))),o&&wp.element.createElement("p",{className:"sbb-twoplustwo-amortization-result"},o))}}]),t}(c);t.a=v},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(8),n(11),n(14)},function(e,t,n){"use strict";var r=n(9),a=(n.n(r),n(10)),o=(n.n(a),n(2)),i=wp.i18n.__;(0,wp.blocks.registerBlockType)("sbb/twoplustwo-amortization",{title:i("Amortization"),icon:"shield",category:"finance",keywords:[i("amortization"),i("installments"),i("sorta brilliant")],attributes:{principal:{type:"string",source:"attribute",selector:"div",attribute:"data-principal",default:"20000"},rate:{type:"string",source:"attribute",selector:"div",attribute:"data-rate",default:"5"},number_of_payments:{type:"string",source:"attribute",selector:"div",attribute:"data-number-of-payments",default:"48"},interval:{type:"string",source:"attribute",selector:"div",attribute:"data-interval",default:"1"}},edit:function(e){var t=e.attributes,n=e.setAttributes,r=e.className,a=function(e){n(e)};return wp.element.createElement("div",{className:r},wp.element.createElement(o.a,{principal:parseFloat(t.principal),rate:parseFloat(t.rate),number_of_payments:parseInt(t.number_of_payments),interval:parseInt(t.interval),onUpdate:a}))},save:function(e){var t=e.attributes,n=e.className;return wp.element.createElement("div",{className:n,"data-principal":t.principal,"data-rate":t.rate,"data-number-of-payments":t.number_of_payments,"data-interval":t.interval},wp.element.createElement("noscript",null,i("JavaScript must be enabled to use the calculator.")))}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";var r=n(12),a=(n.n(r),n(13)),o=(n.n(a),n(3)),i=wp.i18n.__;(0,wp.blocks.registerBlockType)("sbb/twoplustwo-compound-annual-growth-rate",{title:i("Compound Annual Growth Rate (CAGR)"),icon:"shield",category:"finance",keywords:[i("compound annual growth rate"),i("cagr"),i("sorta brilliant")],attributes:{beginningValue:{type:"string",source:"attribute",selector:"div",attribute:"data-beginning-value",default:"10000"},endingValue:{type:"string",source:"attribute",selector:"div",attribute:"data-ending-value",default:"19500"},numberOfPeriods:{type:"string",source:"attribute",selector:"div",attribute:"data-number-of-periods",default:"3"}},edit:function(e){var t=e.attributes,n=e.setAttributes,r=e.className,a=function(e){n(e)};return wp.element.createElement("div",{className:r},wp.element.createElement(o.a,{beginningValue:parseFloat(t.beginningValue),endingValue:parseFloat(t.endingValue),numberOfPeriods:parseInt(t.numberOfPeriods),onUpdate:a}))},save:function(e){var t=e.attributes,n=e.className;return wp.element.createElement("div",{className:n,"data-beginning-value":t.beginningValue,"data-ending-value":t.endingValue,"data-number-of-periods":t.numberOfPeriods},wp.element.createElement("noscript",null,i("JavaScript must be enabled to use the calculator.")))}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";var r=n(15),a=(n.n(r),n(16)),o=(n.n(a),n(4)),i=wp.i18n.__;(0,wp.blocks.registerBlockType)("sbb/twoplustwo-compound-interest",{title:i("Compound Interest (CI)"),icon:"shield",category:"finance",keywords:[i("compound interest"),i("ci"),i("sorta brilliant")],attributes:{rate:{type:"string",source:"attribute",selector:"div",attribute:"data-rate",default:"4.3"},compoundingsPerPeriod:{type:"string",source:"attribute",selector:"div",attribute:"data-compoundings-per-period",default:"4"},principal:{type:"string",source:"attribute",selector:"div",attribute:"data-principal",default:"1500"},numberOfPeriods:{type:"string",source:"attribute",selector:"div",attribute:"data-number-of-periods",default:"6"}},edit:function(e){var t=e.attributes,n=e.setAttributes,r=e.className,a=function(e){n(e)};return wp.element.createElement("div",{className:r},wp.element.createElement(o.a,{rate:parseFloat(t.rate),compoundingsPerPeriod:parseFloat(t.compoundingsPerPeriod),principal:parseInt(t.principal),numberOfPeriods:parseInt(t.numberOfPeriods),onUpdate:a}))},save:function(e){var t=e.attributes,n=e.className;return wp.element.createElement("div",{className:n,"data-rate":t.rate,"data-compoundings-per-period":t.compoundingsPerPeriod,"data-principal":t.principal,"data-number-of-periods":t.numberOfPeriods},wp.element.createElement("noscript",null,i("JavaScript must be enabled to use the calculator.")))}})},function(e,t){},function(e,t){}]);