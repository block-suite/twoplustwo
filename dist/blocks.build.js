!function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=7)}([function(e,t){e.exports=React},function(e,t,n){function a(e){for(var t=1;e(t)>0;)t+=1;for(;e(t)<0;)t-=.01;return t+.01}function r(e,t,n){for(var a=0,r=0,o=0;o<e.length;o++)a+=e[o]/Math.pow(1+n,t[o]);for(o=0;o<e.length;o++)r+=-e[o]*t[o]*Math.pow(1+n,-1-t[o]);return a/r}function o(e,t){return Math.abs(t.getTime()-e.getTime())/31536e6}var l=function(){};l.prototype.PV=function(e,t,n){n="undefined"!==typeof n?n:1;var a,e=e/100;return a=t/Math.pow(1+e,n),Math.round(100*a)/100},l.prototype.FV=function(e,t,n){var a,e=e/100;return a=t*Math.pow(1+e,n),Math.round(100*a)/100},l.prototype.NPV=function(e){for(var e=e/100,t=arguments[1],n=2;n<arguments.length;n++)t+=arguments[n]/Math.pow(1+e,n-1);return Math.round(100*t)/100},l.prototype.IRR=function(e){function t(e){if(++l>1e3)throw new Error("IRR can't find a result");for(var t=1+e/100,n=o[0],a=1;a<o.length;a++)n+=o[a]/Math.pow(t,a);return n}var n,r,o=arguments,l=1;if(Array.prototype.slice.call(o).forEach(function(e){e>0&&(n=!0),e<0&&(r=!0)}),!n||!r)throw new Error("IRR requires at least one positive value and one negative value");return Math.round(100*a(t))/100},l.prototype.PP=function(e,t){if(0===e)return Math.abs(arguments[1])/arguments[2];var n=arguments[1],a=1;for(i=2;i<arguments.length;i++){if((n+=arguments[i])>0)return a+=(n-arguments[i])/arguments[i];a++}},l.prototype.ROI=function(e,t){var n=(t-Math.abs(e))/Math.abs(e)*100;return Math.round(100*n)/100},l.prototype.AM=function(e,t,n,a,r){function o(e){return r&&(e-=1),u*Math.pow(1+u,e)}var l,i,c,u=t/12/100;return a?1===a?(l=o(n),i=Math.pow(1+u,n)-1):console.log("not defined"):(l=o(12*n),i=Math.pow(1+u,12*n)-1),c=e*(l/i),Math.round(100*c)/100},l.prototype.PI=function(e,t){for(var n,a=0,r=2;r<arguments.length;r++){var o;o=1/Math.pow(1+e/100,r-1),a+=arguments[r]*o}return n=a/Math.abs(arguments[1]),Math.round(100*n)/100},l.prototype.DF=function(e,t){for(var n,a=[],r=1;r<t;r++)n=1/Math.pow(1+e/100,r-1),roundedDiscountFactor=Math.ceil(1e3*n)/1e3,a.push(roundedDiscountFactor);return a},l.prototype.CI=function(e,t,n,a){var r=n*Math.pow(1+e/100/t,t*a);return Math.round(100*r)/100},l.prototype.CAGR=function(e,t,n){var a=Math.pow(t/e,1/n)-1;return Math.round(1e4*a)/100},l.prototype.LR=function(e,t,n){return(e+t)/n},l.prototype.R72=function(e){return 72/e},l.prototype.WACC=function(e,t,n,a,r){E=e,D=t,V=e+t,Re=n,Rd=a,T=r;var o=E/V*Re/100+D/V*Rd/100*(1-T/100);return Math.round(1e3*o)/10},l.prototype.PMT=function(e,t,n){return-n*e/(1-Math.pow(1+e,-t))},l.prototype.IAR=function(e,t){return 100*((1+e)/(1+t)-1)},l.prototype.XIRR=function(e,t,n){if(e.length!=t.length)throw new Error("Number of cash flows and dates should match");var a,l;if(Array.prototype.slice.call(e).forEach(function(e){e>0&&(a=!0),e<0&&(l=!0)}),!a||!l)throw new Error("XIRR requires at least one positive value and one negative value");n=n||0;var i,c=100,u=[];u.push(0);for(var s=1;s<t.length;s++)u.push(o(t[0],t[s]));do{i=n,n=i-r(e,u,i),c--}while(i.toFixed(5)!=n.toFixed(5)&&c>0);var p=i.toFixed(5)!=n.toFixed(5)?null:100*n;return Math.round(100*p)/100},"undefined"!==typeof e&&e.exports&&(e.exports=l,e.exports.Finance=l)},function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),c=(n.n(i),n(1)),u=(n.n(c),"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),p=wp.element,m=p.Component,d=p.Fragment,h=wp.i18n.__,v=wp.components,f=v.SelectControl,b=v.TextControl,w=v.Button,g=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={principal:e.principal,rate:e.rate,number_of_payments:e.number_of_payments,interval:e.interval,result:null},n.updateValue=n.updateValue.bind(n),n.calculateResult=n.calculateResult.bind(n),n}return l(t,e),s(t,[{key:"updateValue",value:function(e,t){"object"===("undefined"===typeof t?"undefined":u(t))&&(t=t.target.value);var n=a({},e,t);"undefined"!==typeof this.props.onUpdate&&this.props.onUpdate(n),this.setState(n),null!==this.state.result&&this.setState({result:null})}},{key:"calculateResult",value:function(){var e=new c.Finance,t=[parseFloat(this.state.principal)||0,parseFloat(this.state.rate)||1,parseInt(this.state.number_of_payments)||1,parseInt(this.state.interval)],n=e.AM.apply(e,t);0===n?this.setState({result:h("Could not calculate with the given values.")}):this.setState({result:h("Monthly payment is $"+n+".")})}},{key:"render",value:function(){var e=this.state,t=e.principal,n=e.rate,a=e.number_of_payments,r=e.interval,o=e.result;return wp.element.createElement(d,null,wp.element.createElement("div",{className:"sbb-twoplustwo-amortization-controls"},wp.element.createElement("div",{className:"form-group row"},wp.element.createElement("label",{for:"principal",class:"col-sm-4 col-form-label"},h("Principal")),wp.element.createElement("div",{className:"input-group col-sm-8"},wp.element.createElement("input",{id:"principal",type:"text",className:"components-text-control__input",value:t,onChange:this.updateValue.bind(null,"principal")}),wp.element.createElement("div",{className:"input-group-append"},wp.element.createElement("span",{className:"input-group-text"},"$")))),wp.element.createElement("div",{className:"form-group row"},wp.element.createElement("label",{for:"loanterm",class:"col-sm-4 col-form-label"},h("Loan Term")),wp.element.createElement("div",{className:"col-sm-8 d-flex"},wp.element.createElement(b,{id:"loanterm",value:a,onChange:this.updateValue.bind(null,"number_of_payments")}),wp.element.createElement(f,{className:"d-flex align-items-stretch",id:"interval",value:r,options:[{label:h("Years"),value:0},{label:h("Months"),value:1}],onChange:this.updateValue.bind(null,"interval")}))),wp.element.createElement("div",{className:"form-group row"},wp.element.createElement("label",{for:"rate",class:"col-sm-4 col-form-label"},h("Interest Rate")),wp.element.createElement("div",{className:"input-group col-sm-8"},wp.element.createElement("input",{id:"rate",type:"text",className:"components-text-control__input",value:n,onChange:this.updateValue.bind(null,"rate")}),wp.element.createElement("div",{className:"input-group-append"},wp.element.createElement("span",{className:"input-group-text"},"%"))))),wp.element.createElement("div",{className:"sbb-twoplustwo-amortization-actions mb-3"},wp.element.createElement(w,{className:"btn btn-primary",onClick:this.calculateResult},h("Calculate"))),o&&wp.element.createElement("p",{className:"sbb-twoplustwo-amortization-result"},o))}}]),t}(m);t.a=g},function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),c=(n.n(i),n(1)),u=(n.n(c),function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}()),s=wp.element,p=s.Component,m=s.Fragment,d=wp.i18n.__,h=wp.components,v=h.TextControl,f=h.Button,b=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={beginningValue:e.beginningValue,endingValue:e.endingValue,numberOfPeriods:e.numberOfPeriods,result:null},n.updateValue=n.updateValue.bind(n),n.calculateResult=n.calculateResult.bind(n),n}return l(t,e),u(t,[{key:"updateValue",value:function(e,t){var n=a({},e,t);"undefined"!==typeof this.props.onUpdate&&this.props.onUpdate(n),this.setState(n),null!==this.state.result&&this.setState({result:null})}},{key:"calculateResult",value:function(){var e=new c.Finance,t=[parseFloat(this.state.beginningValue)||0,parseFloat(this.state.endingValue)||1,parseInt(this.state.numberOfPeriods)||1],n=e.CAGR.apply(e,t);0===n?this.setState({result:d("Could not calculate with the given values.")}):this.setState({result:d("CAGR is "+n+"%.")})}},{key:"render",value:function(){var e=this.state,t=e.beginningValue,n=e.endingValue,a=e.numberOfPeriods,r=e.result;return wp.element.createElement(m,null,wp.element.createElement("div",{className:"sbb-twoplustwo-compound-annual-growth-rate-controls"},wp.element.createElement("div",{className:"form-group row"},wp.element.createElement("label",{for:"beginningValue",class:"col-sm-4 col-form-label"},d("Beginning Value")),wp.element.createElement("div",{className:"input-group col-sm-8"},wp.element.createElement("input",{id:"beginningValue",type:"text",className:"components-text-control__input",value:t,onChange:this.updateValue.bind(null,"beginningValue")}),wp.element.createElement("div",{className:"input-group-append"},wp.element.createElement("span",{className:"input-group-text"},"$")))),wp.element.createElement("div",{className:"form-group row"},wp.element.createElement("label",{for:"endingValue",class:"col-sm-4 col-form-label"},d("Ending Value")),wp.element.createElement("div",{className:"input-group col-sm-8"},wp.element.createElement("input",{id:"endingValue",type:"text",className:"components-text-control__input",value:n,onChange:this.updateValue.bind(null,"endingValue")}),wp.element.createElement("div",{className:"input-group-append"},wp.element.createElement("span",{className:"input-group-text"},"$")))),wp.element.createElement("div",{className:"form-group row"},wp.element.createElement("label",{for:"numberOfPeriods",className:"col-sm-4 col-form-label"},d("Number of Periods")),wp.element.createElement("div",{className:"input-group col-sm-8"},wp.element.createElement(v,{id:"numberOfPeriods",value:a,onChange:this.updateValue.bind(null,"numberOfPeriods")})))),wp.element.createElement("div",{className:"sbb-twoplustwo-compound-annual-growth-rate-actions mb-3"},wp.element.createElement(f,{className:"btn btn-primary",onClick:this.calculateResult},d("Calculate"))),r&&wp.element.createElement("p",{className:"sbb-twoplustwo-compound-annual-growth-rate-result"},r))}}]),t}(p);t.a=b},function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),c=(n.n(i),n(1)),u=(n.n(c),function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}()),s=wp.element,p=s.Component,m=s.Fragment,d=wp.i18n.__,h=wp.components,v=h.TextControl,f=h.Button,b=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={rate:e.rate,compoundingsPerPeriod:e.compoundingsPerPeriod,principal:e.principal,numberOfPeriods:e.numberOfPeriods,result:null},n.updateValue=n.updateValue.bind(n),n.calculateResult=n.calculateResult.bind(n),n}return l(t,e),u(t,[{key:"updateValue",value:function(e,t){var n=a({},e,t);"undefined"!==typeof this.props.onUpdate&&this.props.onUpdate(n),this.setState(n),null!==this.state.result&&this.setState({result:null})}},{key:"calculateResult",value:function(){var e=new c.Finance,t=[parseFloat(this.state.rate)||0,parseInt(this.state.compoundingsPerPeriod)||1,parseFloat(this.state.principal)||1,parseInt(this.state.numberOfPeriods)||1],n=e.CI.apply(e,t);0===n?this.setState({result:d("Could not calculate with the given values.")}):this.setState({result:d("Compound Interest is $"+n+".")})}},{key:"render",value:function(){var e=this.state,t=e.rate,n=e.compoundingsPerPeriod,a=e.principal,r=e.numberOfPeriods,o=e.result;return wp.element.createElement(m,null,wp.element.createElement("div",{className:"sbb-twoplustwo-compound-interest-controls"},wp.element.createElement("div",{className:"form-group row"},wp.element.createElement("label",{for:"rate",class:"col-sm-4 col-form-label"},d("Rate")),wp.element.createElement("div",{className:"input-group col-sm-8"},wp.element.createElement("input",{id:"rate",type:"text",className:"components-text-control__input",value:t,onChange:this.updateValue.bind(null,"rate")}),wp.element.createElement("div",{className:"input-group-append"},wp.element.createElement("span",{className:"input-group-text"},"%")))),wp.element.createElement("div",{className:"form-group row"},wp.element.createElement("label",{for:"compoundingsPerPeriod",class:"col-sm-4 col-form-label"},d("Compoundings per period")),wp.element.createElement("div",{className:"input-group col-sm-8"},wp.element.createElement(v,{id:"compoundingsPerPeriod",value:n,onChange:this.updateValue.bind(null,"compoundingsPerPeriod")}))),wp.element.createElement("div",{className:"form-group row"},wp.element.createElement("label",{for:"principal",class:"col-sm-4 col-form-label"},d("Principal")),wp.element.createElement("div",{className:"input-group col-sm-8"},wp.element.createElement("input",{id:"principal",type:"text",className:"components-text-control__input",value:a,onChange:this.updateValue.bind(null,"principal")}),wp.element.createElement("div",{className:"input-group-append"},wp.element.createElement("span",{className:"input-group-text"},"$")))),wp.element.createElement("div",{className:"form-group row"},wp.element.createElement("label",{for:"numberOfPeriods",class:"col-sm-4 col-form-label"},d("Number of periods")),wp.element.createElement("div",{className:"input-group col-sm-8"},wp.element.createElement(v,{id:"numberOfPeriods",value:r,onChange:this.updateValue.bind(null,"numberOfPeriods")})))),wp.element.createElement("div",{className:"sbb-twoplustwo-compound-interest-actions mb-3"},wp.element.createElement(f,{className:"btn btn-primary",onClick:this.calculateResult},d("Calculate"))),o&&wp.element.createElement("p",{className:"sbb-twoplustwo-compound-interest-result"},o))}}]),t}(p);t.a=b},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(8),n(11),n(14);!function(){var e=wp.element.createElement,t=wp.components.SVG,n=e(t,{width:20,height:20,viewBox:"0 0 100 100"},e("path",{d:"M88,17c0-2.8-2.2-5-5-5H17c-2.8,0-5,2.2-5,5v66c0,2.8,2.2,5,5,5h66c2.8,0,5-2.2,5-5V17z M84,17v31H52V16h31 C83.6,16,84,16.4,84,17z M17,16h31v32H16V17C16,16.4,16.4,16,17,16z M16,83V52h32v32H17C16.4,84,16,83.6,16,83z M83,84H52V52h32v31 C84,83.6,83.6,84,83,84z"}),e("path",{d:"M40.4 64L33.7 64 33.7 57.4 29.7 57.4 29.7 64 23.1 64 23.1 68 29.7 68 29.7 74.7 33.7 74.7 33.7 68 40.4 68zM23.1 30.7H40.400000000000006V34.7H23.1zM58.7 70H76V74H58.7zM58.7 61H76V65H58.7zM59.8 37.4L62.6 40.2 67.4 35.5 72.1 40.2 74.9 37.4 70.2 32.7 74.9 28 72.1 25.1 67.4 29.8 62.6 25.1 59.8 28 64.5 32.7z"}));wp.blocks.updateCategory("financial_calculators",{icon:n})}()},function(e,t,n){"use strict";var a=n(9),r=(n.n(a),n(10)),o=(n.n(r),n(2)),l=wp.i18n.__,i=wp.blocks.registerBlockType,c=wp.element.createElement,u=wp.components.SVG,s=c(u,{width:20,height:20,viewBox:"0 0 100 100"},c("path",{d:"M59.8243561 54.4415894c-.3195801-.9751587-.7988281-1.6721191-1.9090576-1.6913452H48.982193h-.0330811-7.1275635c-1.1291504.0192261-1.611084.7161865-1.9169922 1.6913452l-2.5534668 6.8839722h11.5980225.0330811 13.401123L59.8243561 54.4415894zM63.1296539 64.680481c-1.5947266-.0109863-2.878418 1.3085327-2.8867188 2.9420166.0083008 1.625 1.2919922 2.9473877 2.8867188 2.9417114 1.5675049.0056763 2.8483887-1.3167114 2.8565674-2.9417114C65.9780426 65.9890137 64.6971588 64.6694946 63.1296539 64.680481zM36.6043854 64.680481c-1.5838623-.0109863-2.8675537 1.3085327-2.8590088 2.9420166-.0085449 1.625 1.2751465 2.9473877 2.8590088 2.9417114 1.5784912.0056763 2.859375-1.3167114 2.8565674-2.9417114C39.4637604 65.9890137 38.1828766 64.6694946 36.6043854 64.680481z"}),c("path",{d:"M83.3131256,50.9457397l-29.8743896-24.46698c-2.046875-1.7871094-5.0991211-1.7871094-7.1459961,0L16.4319019,50.9338379 c-1.4337168,1.2518311-2.2564707,3.0623169-2.2564707,4.9657593v34.1581421c0,1.5626221,1.2784424,2.8411865,2.8411875,2.8411865 H82.714859c1.5627441,0,2.8413086-1.2785645,2.8413086-2.8411865V55.8815918 C85.5561676,53.989624,84.7382965,52.1900635,83.3131256,50.9457397z M69.6223297,77.2772217v2.9778442 c0,1.7084961-1.3848877,3.0935059-3.0933838,3.0935059h-0.0301514c-1.7084961,0-3.0935059-1.3850098-3.0935059-3.0935059v-2.9778442 H48.982193H36.2961578v2.9778442c0,1.7084961-1.3850098,3.0935059-3.0935059,3.0935059 c-1.7084942,0-3.093504-1.3850098-3.093504-3.0935059v-2.9778442V66.1542969 c-0.0056152-2.9944458,2.3771954-4.5726318,3.7214336-4.7463989l3.3798828-8.7374268 c0.6499023-1.6749878,2.0301514-3.0963135,4.6359863-3.1098633h4.8591309h6.3781738h4.7709961 c2.6223145,0.0135498,4.0024414,1.4348755,4.6359863,3.1098633l3.3879395,8.7374268 c1.3525391,0.1737671,3.732666,1.7519531,3.7436523,4.7463989V77.2772217z"}),c("path",{d:"M94.464859,42.7945557L52.3785553,7.9630127C51.64711,7.3577271,50.7507477,7.0787964,49.8657379,7.102478 c-0.8850098-0.0236816-1.78125,0.255249-2.5126953,0.8605347l-15.4559307,12.791626 c-0.7171631,0.5935059-1.8015137,0.0834351-1.8015137-0.8475342v-6.3713989c0-1.5626831-1.2784424-2.8412476-2.8411865-2.8412476 h-7.576416c-1.5626221,0-2.8411865,1.2785645-2.8411865,2.8412476v18.4498291c0,0.7811279-0.3482666,1.5215454-0.9500742,2.0195923 L5.2666178,42.7945557c-1.4890134,1.2322388-1.8992918,3.3985596-0.8532715,5.0238647 c1.2468262,1.9373169,3.8845215,2.3021851,5.6066895,0.876709l36.744751-30.4105835 c1.7991943-1.4890747,4.402832-1.4890747,6.2020264,0L89.711441,48.6951294 c1.7224121,1.4254761,4.3601074,1.0606079,5.6068115-0.876709C96.3642731,46.1931152,95.9538727,44.0267944,94.464859,42.7945557z"}));i("sbb/twoplustwo-amortization",{title:l("Amortization"),description:l("Calculate monthly payments for anything."),icon:s,category:"financial_calculators",keywords:[l("amortization"),l("installments"),l("sorta brilliant")],attributes:{principal:{type:"string",source:"attribute",selector:"div",attribute:"data-principal",default:"20000"},rate:{type:"string",source:"attribute",selector:"div",attribute:"data-rate",default:"5"},number_of_payments:{type:"string",source:"attribute",selector:"div",attribute:"data-number-of-payments",default:"48"},interval:{type:"string",source:"attribute",selector:"div",attribute:"data-interval",default:"1"}},edit:function(e){var t=e.attributes,n=e.setAttributes,a=e.className,r=function(e){n(e)};return wp.element.createElement("div",{className:a},wp.element.createElement(o.a,{principal:parseFloat(t.principal),rate:parseFloat(t.rate),number_of_payments:parseInt(t.number_of_payments),interval:parseInt(t.interval),onUpdate:r}))},save:function(e){var t=e.attributes,n=e.className;return wp.element.createElement("div",{className:n,"data-principal":t.principal,"data-rate":t.rate,"data-number-of-payments":t.number_of_payments,"data-interval":t.interval},wp.element.createElement("noscript",null,l("JavaScript must be enabled to use the calculator.")))}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";var a=n(12),r=(n.n(a),n(13)),o=(n.n(r),n(3)),l=wp.i18n.__,i=wp.blocks.registerBlockType,c=wp.element.createElement,u=wp.components.SVG,s=c(u,{width:20,height:20,viewBox:"0 0 100 100"},c("path",{d:"M93.695 68.724h-1.351v-3.569c0-.54-.315-1.005-.769-1.233.024-.103.041-.208.041-.318v-3.654h1.42c.765 0 1.386-.622 1.386-1.386v-3.749c0-.764-.621-1.385-1.386-1.385h-2.494V50.23h.416c.764 0 1.386-.621 1.386-1.386v-3.749c0-.764-.622-1.386-1.386-1.386H69.666c-.764 0-1.385.622-1.385 1.386v3.465h-.416c-.765 0-1.386.622-1.386 1.386v3.749c0 .764.621 1.386 1.386 1.386h2.495v3.388h-1.421c-.765 0-1.386.622-1.386 1.386v3.748c0 .542.314 1.006.769 1.234-.024.103-.041.208-.041.317v3.749c0 .765.621 1.386 1.385 1.386h1.353v3.389h-2.495c-.764 0-1.386.621-1.386 1.386v3.748c0 .764.622 1.386 1.386 1.386h.414v3.573c0 .765.622 1.386 1.386 1.386h21.292c.765 0 1.386-.621 1.386-1.386v-3.748c0-.764-.621-1.386-1.386-1.386h-.414v-3.394h2.494c.765 0 1.386-.622 1.386-1.386v-3.748C95.081 69.345 94.46 68.724 93.695 68.724zM86.678 78.534h-1.42v-3.193h1.42V78.534zM88.341 75.341h1.197v3.193h-1.197V75.341zM83.803 70.387h1.386v3.193h-1.386V70.387zM82.14 73.58h-9.459v-3.193h9.459V73.58zM86.158 68.626v-3.193h1.767v3.193H86.158zM89.588 65.433h1.094v3.193h-1.094V65.433zM89.954 63.326h-1.51v-3.194h1.51V63.326zM86.782 63.326h-1.179v-3.194h1.179V63.326zM83.941 60.132v3.194h-1.455v-3.194H83.941zM84.495 65.433v3.193h-1.559v-3.193H84.495zM83.595 75.341v3.193h-1.178v-3.193H83.595zM85.015 80.3v3.193h-1.178V80.3H85.015zM86.678 80.3h1.108v3.193h-1.108V80.3zM86.852 73.58v-3.193h1.767v3.193H86.852zM72.022 58.285v-3.193h10.083v3.193H72.022zM83.768 55.092h1.594v3.193h-1.594V55.092zM87.891 48.561h-1.178v-3.188h1.178V48.561zM85.05 48.561h-1.213v-3.188h1.213V48.561zM85.119 50.23v3.188h-1.386V50.23H85.119zM87.024 55.092h1.767v3.193h-1.767V55.092zM92.76 58.285h-2.306v-3.193h2.306V58.285zM88.88 53.418h-2.098V50.23h2.098V53.418zM90.682 48.568h-1.128v-3.194h1.128V48.568zM69.944 45.374h12.229v3.188H69.944V45.374zM68.143 50.224h1.46c.021.001.042.006.063.006H82.07v3.188H68.143V50.224zM69.217 60.132h11.606v3.194H69.217V60.132zM69.944 65.433h11.329v3.193H69.944V65.433zM68.801 75.341h11.953v3.193H68.801V75.341zM70.601 80.3h11.573v3.193H70.601V80.3zM91.339 83.493h-1.89V80.3h1.89V83.493zM93.418 73.58h-3.137v-3.193h3.137V73.58zM61.408 68.724h-1.352v-3.569c0-.54-.314-1.005-.768-1.233.024-.103.04-.208.04-.318v-3.654h1.421c.764 0 1.386-.622 1.386-1.386v-3.749c0-.764-.622-1.385-1.386-1.385H39.458c-.764 0-1.385.621-1.385 1.385v3.655h-1.421c-.764 0-1.385.622-1.385 1.386v3.748c0 .542.314 1.006.768 1.234-.024.103-.041.208-.041.317v3.749c0 .765.622 1.386 1.385 1.386h1.352v3.389h-2.495c-.764 0-1.385.621-1.385 1.386v3.748c0 .764.622 1.386 1.385 1.386h.415v3.573c0 .765.622 1.386 1.385 1.386h21.292c.765 0 1.386-.621 1.386-1.386v-3.748c0-.764-.621-1.386-1.386-1.386h-.414v-3.394h2.494c.764 0 1.386-.622 1.386-1.386v-3.748C62.794 69.345 62.172 68.724 61.408 68.724zM54.459 78.534h-1.385v-3.193h1.385V78.534zM56.122 75.341h1.129v3.193h-1.129V75.341zM53.593 70.387h1.629v3.193h-1.629V70.387zM51.931 73.58H40.394v-3.193h11.537V73.58zM52.207 68.626v-3.193h1.456v3.193H52.207zM55.326 65.433h3.067v3.193h-3.067V65.433zM57.666 63.326h-1.163v-3.194h1.163V63.326zM54.84 63.326h-1.523v-3.194h1.523V63.326zM56.434 58.285v-3.193h1.282v3.193H56.434zM54.771 58.285h-1.282v-3.193h1.282V58.285zM51.653 60.132v3.194h-1.351v-3.194H51.653zM50.544 65.433v3.193h-1.316v-3.193H50.544zM51.411 75.341v3.193h-1.49v-3.193H51.411zM52.935 80.3v3.193h-1.386V80.3H52.935zM54.598 80.3h1.455v3.193h-1.455V80.3zM56.884 73.58v-3.193h1.352v3.193H56.884zM60.473 58.285h-1.094v-3.193h1.094V58.285zM39.735 55.092h12.091v3.193H39.735V55.092zM36.929 60.132h11.71v3.194h-11.71V60.132zM37.657 65.433h9.909v3.193h-9.909V65.433zM36.514 75.341h11.745v3.193H36.514V75.341zM38.314 80.3h11.572v3.193H38.314V80.3zM59.051 83.493h-1.335V80.3h1.335V83.493zM61.131 73.58h-1.232v-3.193h1.232V73.58zM29.396 78.637h-.415v-3.573c0-.765-.622-1.386-1.386-1.386H6.304c-.764 0-1.385.621-1.385 1.386v3.748c0 .764.622 1.386 1.385 1.386h.415v3.573c0 .765.622 1.386 1.385 1.386h21.292c.764 0 1.386-.621 1.386-1.386v-3.748C30.782 79.259 30.161 78.637 29.396 78.637zM22.691 78.534v-3.193h1.421v3.193H22.691zM21.028 78.534h-1.766v-3.193h1.766V78.534zM22.138 80.3v3.193h-1.212V80.3H22.138zM23.801 80.3h1.767v3.193h-1.767V80.3zM27.319 78.534h-1.543v-3.193h1.543V78.534zM6.582 75.341H17.6v3.193H6.582V75.341zM8.382 80.3h10.88v3.193H8.382V80.3zM29.119 83.493H27.23V80.3h1.889V83.493zM11.015 59.369c.215 0 .432-.063.623-.192l32.54-22.159 8.382 5.449c.413.269.956.233 1.331-.093l27.041-23.489-.312 8.876c-.021.612.457 1.125 1.068 1.147.014 0 .026 0 .04 0 .594 0 1.086-.471 1.107-1.069l.416-11.848c.01-.3-.103-.593-.312-.809s-.496-.338-.797-.338H70.296c-.612 0-1.109.496-1.109 1.108s.497 1.109 1.109 1.109h9.354L53.067 40.153l-8.3-5.396c-.374-.244-.858-.237-1.228.013l-33.15 22.575c-.506.345-.636 1.034-.292 1.54C10.312 59.2 10.66 59.369 11.015 59.369z"}));i("sbb/twoplustwo-compound-annual-growth-rate",{title:l("Compound Annual Growth Rate (CAGR)"),description:l("Calculate year-over-year growth rate of an investment."),icon:s,category:"financial_calculators",keywords:[l("compound annual growth rate"),l("cagr"),l("sorta brilliant")],attributes:{beginningValue:{type:"string",source:"attribute",selector:"div",attribute:"data-beginning-value",default:"10000"},endingValue:{type:"string",source:"attribute",selector:"div",attribute:"data-ending-value",default:"19500"},numberOfPeriods:{type:"string",source:"attribute",selector:"div",attribute:"data-number-of-periods",default:"3"}},edit:function(e){var t=e.attributes,n=e.setAttributes,a=e.className,r=function(e){n(e)};return wp.element.createElement("div",{className:a},wp.element.createElement(o.a,{beginningValue:parseFloat(t.beginningValue),endingValue:parseFloat(t.endingValue),numberOfPeriods:parseInt(t.numberOfPeriods),onUpdate:r}))},save:function(e){var t=e.attributes,n=e.className;return wp.element.createElement("div",{className:n,"data-beginning-value":t.beginningValue,"data-ending-value":t.endingValue,"data-number-of-periods":t.numberOfPeriods},wp.element.createElement("noscript",null,l("JavaScript must be enabled to use the calculator.")))}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";var a=n(15),r=(n.n(a),n(16)),o=(n.n(r),n(4)),l=wp.i18n.__,i=wp.blocks.registerBlockType,c=wp.element.createElement,u=wp.components.SVG,s=c(u,{width:20,height:20,viewBox:"0 0 100 100"},c("path",{d:"M19 24c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7S22.9 24 19 24zM19 14c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3S20.7 14 19 14zM37 38c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7S40.9 38 37 38zM37 28c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3S38.7 28 37 28zM19 37.5c-.4 0-.8-.1-1.2-.4-.9-.7-1.1-1.9-.4-2.8l17-23c.7-.9 1.9-1.1 2.8-.4.9.7 1.1 1.9.4 2.8l-17 23C20.2 37.2 19.6 37.5 19 37.5zM88 90H12c-1.1 0-2-.9-2-2s.9-2 2-2h76c1.1 0 2 .9 2 2S89.1 90 88 90z"}),c("path",{d:"M12 90c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2s2 .9 2 2v6C14 89.1 13.1 90 12 90zM27 90c-1.1 0-2-.9-2-2V75c0-1.1.9-2 2-2s2 .9 2 2v13C29 89.1 28.1 90 27 90zM42 90c-1.1 0-2-.9-2-2V78c0-1.1.9-2 2-2s2 .9 2 2v10C44 89.1 43.1 90 42 90zM58 90c-1.1 0-2-.9-2-2V66c0-1.1.9-2 2-2s2 .9 2 2v22C60 89.1 59.1 90 58 90zM73 90c-1.1 0-2-.9-2-2V70c0-1.1.9-2 2-2s2 .9 2 2v18C75 89.1 74.1 90 73 90zM88 90c-1.1 0-2-.9-2-2V46c0-1.1.9-2 2-2s2 .9 2 2v42C90 89.1 89.1 90 88 90zM12 67.5c-1 0-1.9-.8-2-1.8-.1-1.1.7-2.1 1.8-2.2.4-.1 45.1-5.4 74.6-43.8.7-.9 1.9-1 2.8-.4.9.7 1 1.9.4 2.8C59 61.9 12.7 67.5 12.2 67.5 12.1 67.5 12.1 67.5 12 67.5z"}),c("path",{d:"M88,23H76c-1.1,0-2-0.9-2-2s0.9-2,2-2h12c1.1,0,2,0.9,2,2S89.1,23,88,23z"}),c("path",{d:"M88,35c-1.1,0-2-0.9-2-2V21c0-1.1,0.9-2,2-2s2,0.9,2,2v12C90,34.1,89.1,35,88,35z"}));i("sbb/twoplustwo-compound-interest",{title:l("Compound Interest (CI)"),description:l("Calculate the interest on the principal and the accumulated interest of previous periods."),icon:s,category:"financial_calculators",keywords:[l("compound interest"),l("ci"),l("sorta brilliant")],attributes:{rate:{type:"string",source:"attribute",selector:"div",attribute:"data-rate",default:"4.3"},compoundingsPerPeriod:{type:"string",source:"attribute",selector:"div",attribute:"data-compoundings-per-period",default:"4"},principal:{type:"string",source:"attribute",selector:"div",attribute:"data-principal",default:"1500"},numberOfPeriods:{type:"string",source:"attribute",selector:"div",attribute:"data-number-of-periods",default:"6"}},edit:function(e){var t=e.attributes,n=e.setAttributes,a=e.className,r=function(e){n(e)};return wp.element.createElement("div",{className:a},wp.element.createElement(o.a,{rate:parseFloat(t.rate),compoundingsPerPeriod:parseFloat(t.compoundingsPerPeriod),principal:parseInt(t.principal),numberOfPeriods:parseInt(t.numberOfPeriods),onUpdate:r}))},save:function(e){var t=e.attributes,n=e.className;return wp.element.createElement("div",{className:n,"data-rate":t.rate,"data-compoundings-per-period":t.compoundingsPerPeriod,"data-principal":t.principal,"data-number-of-periods":t.numberOfPeriods},wp.element.createElement("noscript",null,l("JavaScript must be enabled to use the calculator.")))}})},function(e,t){},function(e,t){}]);