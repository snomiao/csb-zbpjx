(self.webpackChunksno_warehouse_manager=self.webpackChunksno_warehouse_manager||[]).push([[678],{2108:function(t,e,r){var n=r(7218);function o(t){this.mode=n.MODE_8BIT_BYTE,this.data=t}o.prototype={getLength:function(t){return this.data.length},write:function(t){for(var e=0;e<this.data.length;e++)t.put(this.data.charCodeAt(e),8)}},t.exports=o},956:function(t){function e(){this.buffer=new Array,this.length=0}e.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},t.exports=e},5766:function(t){t.exports={L:1,M:0,Q:3,H:2}},2209:function(t,e,r){var n=r(2778);function o(t,e){if(null==t.length)throw new Error(t.length+"/"+e);for(var r=0;r<t.length&&0==t[r];)r++;this.num=new Array(t.length-r+e);for(var n=0;n<t.length-r;n++)this.num[n]=t[n+r]}o.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var i=0;i<t.getLength();i++)e[r+i]^=n.gexp(n.glog(this.get(r))+n.glog(t.get(i)));return new o(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=n.glog(this.get(0))-n.glog(t.get(0)),r=new Array(this.getLength()),i=0;i<this.getLength();i++)r[i]=this.get(i);for(i=0;i<t.getLength();i++)r[i]^=n.gexp(n.glog(t.get(i))+e);return new o(r,0).mod(t)}},t.exports=o},5189:function(t,e,r){var n=r(2108),o=r(3085),i=r(956),a=r(6035),s=r(2209);function u(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var l=u.prototype;l.addData=function(t){var e=new n(t);this.dataList.push(e),this.dataCache=null},l.isDark=function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},l.getModuleCount=function(){return this.moduleCount},l.make=function(){if(this.typeNumber<1){var t=1;for(t=1;t<40;t++){for(var e=o.getRSBlocks(t,this.errorCorrectLevel),r=new i,n=0,s=0;s<e.length;s++)n+=e[s].dataCount;for(s=0;s<this.dataList.length;s++){var u=this.dataList[s];r.put(u.mode,4),r.put(u.getLength(),a.getLengthInBits(u.mode,t)),u.write(r)}if(r.getLengthInBits()<=8*n)break}this.typeNumber=t}this.makeImpl(!1,this.getBestMaskPattern())},l.makeImpl=function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++)this.modules[r][n]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=u.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},l.setupPositionProbePattern=function(t,e){for(var r=-1;r<=7;r++)if(!(t+r<=-1||this.moduleCount<=t+r))for(var n=-1;n<=7;n++)e+n<=-1||this.moduleCount<=e+n||(this.modules[t+r][e+n]=0<=r&&r<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=n&&n<=4)},l.getBestMaskPattern=function(){for(var t=0,e=0,r=0;r<8;r++){this.makeImpl(!0,r);var n=a.getLostPoint(this);(0==r||t>n)&&(t=n,e=r)}return e},l.createMovieClip=function(t,e,r){var n=t.createEmptyMovieClip(e,r);this.make();for(var o=0;o<this.modules.length;o++)for(var i=1*o,a=0;a<this.modules[o].length;a++){var s=1*a;this.modules[o][a]&&(n.beginFill(0,100),n.moveTo(s,i),n.lineTo(s+1,i),n.lineTo(s+1,i+1),n.lineTo(s,i+1),n.endFill())}return n},l.setupTimingPattern=function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},l.setupPositionAdjustPattern=function(){for(var t=a.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var n=t[e],o=t[r];if(null==this.modules[n][o])for(var i=-2;i<=2;i++)for(var s=-2;s<=2;s++)this.modules[n+i][o+s]=-2==i||2==i||-2==s||2==s||0==i&&0==s}},l.setupTypeNumber=function(t){for(var e=a.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var n=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=n}for(r=0;r<18;r++){n=!t&&1==(e>>r&1);this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=n}},l.setupTypeInfo=function(t,e){for(var r=this.errorCorrectLevel<<3|e,n=a.getBCHTypeInfo(r),o=0;o<15;o++){var i=!t&&1==(n>>o&1);o<6?this.modules[o][8]=i:o<8?this.modules[o+1][8]=i:this.modules[this.moduleCount-15+o][8]=i}for(o=0;o<15;o++){i=!t&&1==(n>>o&1);o<8?this.modules[8][this.moduleCount-o-1]=i:o<9?this.modules[8][15-o-1+1]=i:this.modules[8][15-o-1]=i}this.modules[this.moduleCount-8][8]=!t},l.mapData=function(t,e){for(var r=-1,n=this.moduleCount-1,o=7,i=0,s=this.moduleCount-1;s>0;s-=2)for(6==s&&s--;;){for(var u=0;u<2;u++)if(null==this.modules[n][s-u]){var l=!1;i<t.length&&(l=1==(t[i]>>>o&1)),a.getMask(e,n,s-u)&&(l=!l),this.modules[n][s-u]=l,-1==--o&&(i++,o=7)}if((n+=r)<0||this.moduleCount<=n){n-=r,r=-r;break}}},u.PAD0=236,u.PAD1=17,u.createData=function(t,e,r){for(var n=o.getRSBlocks(t,e),s=new i,l=0;l<r.length;l++){var h=r[l];s.put(h.mode,4),s.put(h.getLength(),a.getLengthInBits(h.mode,t)),h.write(s)}var f=0;for(l=0;l<n.length;l++)f+=n[l].dataCount;if(s.getLengthInBits()>8*f)throw new Error("code length overflow. ("+s.getLengthInBits()+">"+8*f+")");for(s.getLengthInBits()+4<=8*f&&s.put(0,4);s.getLengthInBits()%8!=0;)s.putBit(!1);for(;!(s.getLengthInBits()>=8*f||(s.put(u.PAD0,8),s.getLengthInBits()>=8*f));)s.put(u.PAD1,8);return u.createBytes(s,n)},u.createBytes=function(t,e){for(var r=0,n=0,o=0,i=new Array(e.length),u=new Array(e.length),l=0;l<e.length;l++){var h=e[l].dataCount,f=e[l].totalCount-h;n=Math.max(n,h),o=Math.max(o,f),i[l]=new Array(h);for(var g=0;g<i[l].length;g++)i[l][g]=255&t.buffer[g+r];r+=h;var c=a.getErrorCorrectPolynomial(f),m=new s(i[l],c.getLength()-1).mod(c);u[l]=new Array(c.getLength()-1);for(g=0;g<u[l].length;g++){var d=g+m.getLength()-u[l].length;u[l][g]=d>=0?m.get(d):0}}var v=0;for(g=0;g<e.length;g++)v+=e[g].totalCount;var p=new Array(v),E=0;for(g=0;g<n;g++)for(l=0;l<e.length;l++)g<i[l].length&&(p[E++]=i[l][g]);for(g=0;g<o;g++)for(l=0;l<e.length;l++)g<u[l].length&&(p[E++]=u[l][g]);return p},t.exports=u},3085:function(t,e,r){var n=r(5766);function o(t,e){this.totalCount=t,this.dataCount=e}o.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],o.getRSBlocks=function(t,e){var r=o.getRsBlockTable(t,e);if(null==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var n=r.length/3,i=new Array,a=0;a<n;a++)for(var s=r[3*a+0],u=r[3*a+1],l=r[3*a+2],h=0;h<s;h++)i.push(new o(u,l));return i},o.getRsBlockTable=function(t,e){switch(e){case n.L:return o.RS_BLOCK_TABLE[4*(t-1)+0];case n.M:return o.RS_BLOCK_TABLE[4*(t-1)+1];case n.Q:return o.RS_BLOCK_TABLE[4*(t-1)+2];case n.H:return o.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},t.exports=o},2778:function(t){for(var e={glog:function(t){if(t<1)throw new Error("glog("+t+")");return e.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return e.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},r=0;r<8;r++)e.EXP_TABLE[r]=1<<r;for(r=8;r<256;r++)e.EXP_TABLE[r]=e.EXP_TABLE[r-4]^e.EXP_TABLE[r-5]^e.EXP_TABLE[r-6]^e.EXP_TABLE[r-8];for(r=0;r<255;r++)e.LOG_TABLE[e.EXP_TABLE[r]]=r;t.exports=e},7218:function(t){t.exports={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8}},6035:function(t,e,r){var n=r(7218),o=r(2209),i=r(2778),a=0,s=1,u=2,l=3,h=4,f=5,g=6,c=7,m={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;m.getBCHDigit(e)-m.getBCHDigit(m.G15)>=0;)e^=m.G15<<m.getBCHDigit(e)-m.getBCHDigit(m.G15);return(t<<10|e)^m.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;m.getBCHDigit(e)-m.getBCHDigit(m.G18)>=0;)e^=m.G18<<m.getBCHDigit(e)-m.getBCHDigit(m.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return m.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case a:return(e+r)%2==0;case s:return e%2==0;case u:return r%3==0;case l:return(e+r)%3==0;case h:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case f:return e*r%2+e*r%3==0;case g:return(e*r%2+e*r%3)%2==0;case c:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new o([1],0),r=0;r<t;r++)e=e.multiply(new o([1,i.gexp(r)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case n.MODE_NUMBER:return 10;case n.MODE_ALPHA_NUM:return 9;case n.MODE_8BIT_BYTE:case n.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case n.MODE_NUMBER:return 12;case n.MODE_ALPHA_NUM:return 11;case n.MODE_8BIT_BYTE:return 16;case n.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case n.MODE_NUMBER:return 14;case n.MODE_ALPHA_NUM:return 13;case n.MODE_8BIT_BYTE:return 16;case n.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,n=0;n<e;n++)for(var o=0;o<e;o++){for(var i=0,a=t.isDark(n,o),s=-1;s<=1;s++)if(!(n+s<0||e<=n+s))for(var u=-1;u<=1;u++)o+u<0||e<=o+u||0==s&&0==u||a==t.isDark(n+s,o+u)&&i++;i>5&&(r+=3+i-5)}for(n=0;n<e-1;n++)for(o=0;o<e-1;o++){var l=0;t.isDark(n,o)&&l++,t.isDark(n+1,o)&&l++,t.isDark(n,o+1)&&l++,t.isDark(n+1,o+1)&&l++,0!=l&&4!=l||(r+=3)}for(n=0;n<e;n++)for(o=0;o<e-6;o++)t.isDark(n,o)&&!t.isDark(n,o+1)&&t.isDark(n,o+2)&&t.isDark(n,o+3)&&t.isDark(n,o+4)&&!t.isDark(n,o+5)&&t.isDark(n,o+6)&&(r+=40);for(o=0;o<e;o++)for(n=0;n<e-6;n++)t.isDark(n,o)&&!t.isDark(n+1,o)&&t.isDark(n+2,o)&&t.isDark(n+3,o)&&t.isDark(n+4,o)&&!t.isDark(n+5,o)&&t.isDark(n+6,o)&&(r+=40);var h=0;for(o=0;o<e;o++)for(n=0;n<e;n++)t.isDark(n,o)&&h++;return r+=10*(Math.abs(100*h/e/e-50)/5)}};t.exports=m},6188:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t};e.QRCode=h;var o=a(r(7294)),i=a(r(5697));function a(t){return t&&t.__esModule?t:{default:t}}function s(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r}var u=r(5189),l=r(5766);function h(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.value,r=void 0===e?"":e,i=t.level,a=void 0===i?"L":i,h=t.bgColor,f=void 0===h?"#FFFFFF":h,g=t.fgColor,c=void 0===g?"#000000":g,m=t.cellClassPrefix,d=void 0===m?"":m,v=s(t,["value","level","bgColor","fgColor","cellClassPrefix"]),p=new u(-1,l[a]);p.addData(r),p.make();var E=p.modules,C=d&&d+"-cell",B=d&&C+" "+d+"-cell-empty",L=d&&C+" "+d+"-cell-filled",_=0;return o.default.createElement("svg",n({shapeRendering:"crispEdges",viewBox:[0,0,E.length,E.length].join(" ")},v),E.map((function(t,e){return t.map((function(t,r){var i=t?L:B,a=i?{className:i}:null,s=!a&&(t?c:f),u=s?{style:{fill:s}}:null;return o.default.createElement("rect",n({height:1,key:_++},u,a,{width:1,x:r,y:e}))}))})))}h.propTypes={value:i.default.string.isRequired,size:i.default.number,level:i.default.oneOf(["L","M","Q","H"]),bgColor:i.default.string,fgColor:i.default.string,cellClassPrefix:i.default.string}},213:function(t,e,r){"use strict";var n=r(6188);t.exports={QRCode:n.QRCode}},5279:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return f}});var n=r(7294),o=(r(5444),r(213));const i="\n🏠客厅🏠 存包处\n缝纫室 拉链纽扣 游标卡尺\t拉链纽扣 缝纫机器\n实验室 打印耗材\t\n实验室 列印废料\t打印备件\t强电线缆 列印角料\t厨房备件 收纳工具 缝纫角料\t缝纫备件\n手工桌 胶刀尺笔 缝纫线材\t打磨流程 台钳钻架\t手持电钻 小缝纫机\n厨房\t米面干粮 储备水源\t厨房纸巾 储备湿粮\t烘培耗材 蛋打发机 微蒸烤箱\t储备汤料\t\n仓库\t排插线板 储备厨纸\t 硬纸板箱\t单车配件 泡沫盒子\n卫生妆间\t洗脸巾  储备厕纸\n冲淋浴室\t洗衣机\n".trim();function a({value:t}){return n.createElement("li",{className:"item"},n.createElement(o.QRCode,{value:t||"",className:"qrcode"}),n.createElement("h2",null,t))}function s({items:t}){return n.createElement("ul",{className:"items"},t.map(((t,e)=>n.createElement(a,{value:t,key:t+e}))))}function u(){const[t,e]=(0,n.useState)({itemsText:i});return n.createElement("div",{className:"root"},n.createElement("div",{className:"noprint control"},n.createElement("h1",null,"雪星仓储管理系统：标签生成器"),n.createElement("h2",null,"使用方法"),n.createElement("ol",null,n.createElement("li",null,"在编辑框写好相应物品的，用空格或换行分割"),n.createElement("li",null,"按 Ctrl+P 将下方标签打印到背胶纸上，你可以调整到你喜欢的 Scale。"),n.createElement("li",null,"按需用透明胶或者热敏覆膜把打印表面保护起来"),n.createElement("li",null,"裁剪"),n.createElement("li",null,"贴在你需要的地方，比如各种物品或盒子表面")),n.createElement("textarea",{onChange:t=>{e({itemsText:t.currentTarget.value})},value:t.itemsText})),n.createElement(s,{items:t.itemsText.trim().split(/\s+/)}))}var l=r(5127),h=r(3751);var f=()=>n.createElement(l.Z,null,n.createElement(h.Z,{title:"Home"}),n.createElement(u,null))}}]);
//# sourceMappingURL=component---src-pages-index-js-95f3fff4a7afdb363afa.js.map