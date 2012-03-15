((function(){var a,b;a=jQuery,b={},b.Line=function(){function c(c){if(!(this instanceof b.Line))return new b.Line(c);typeof c.element=="string"?this.el=a(document.getElementById(c.element)):this.el=a(c.element),this.options=a.extend({},this.defaults,c);if(this.options.data===void 0||this.options.data.length===0)return;this.el.addClass("graph-initialised"),this.precalc(),this.redraw()}return c.prototype.defaults={lineWidth:3,pointSize:4,lineColors:["#0b62a4","#7A92A3","#4da74d","#afd8f8","#edc240","#cb4b4b","#9440ed"],ymax:"auto",ymin:"auto 0",marginTop:25,marginRight:25,marginBottom:30,marginLeft:25,numLines:5,gridLineColor:"#aaa",gridTextColor:"#888",gridTextSize:12,gridStrokeWidth:.5,hoverPaddingX:10,hoverPaddingY:5,hoverMargin:10,hoverFillColor:"#fff",hoverBorderColor:"#ccc",hoverBorderWidth:2,hoverOpacity:.95,hoverLabelColor:"#444",hoverFontSize:12,smooth:!0,hideHover:!1,parseTime:!0,units:"",dateFormat:function(a){return(new Date(a)).toString()}},c.prototype.precalc=function(){var b,c,d,e,f,g,h,i,j,k=this;this.options.data.sort(function(a,b){return(a[k.options.xkey]<b[k.options.xkey])-(b[k.options.xkey]<a[k.options.xkey])}),this.columnLabels=a.map(this.options.data,function(a){return a[k.options.xkey]}),this.seriesLabels=this.options.labels,this.series=[],h=this.options.ykeys;for(e=0,g=h.length;e<g;e++)b=h[e],this.series.push(a.map(this.options.data,function(a){return a[b]}));this.options.parseTime?this.xvals=a.map(this.columnLabels,function(a){return k.parseYear(a)}):this.xvals=function(){j=[];for(var a=i=this.columnLabels.length-1;i<=0?a<=0:a>=0;i<=0?a++:a--)j.push(a);return j}.apply(this),this.columnLabels=a.map(this.columnLabels,function(a){return typeof a=="number"?k.options.dateFormat(a):a}),this.xmin=Math.min.apply(null,this.xvals),this.xmax=Math.max.apply(null,this.xvals),this.xmin===this.xmax&&(this.xmin-=1,this.xmax+=1),typeof this.options.ymax=="string"&&this.options.ymax.slice(0,4)==="auto"&&(c=Math.max.apply(null,Array.prototype.concat.apply([],this.series)),this.options.ymax.length>5?this.options.ymax=Math.max(parseInt(this.options.ymax.slice(5),10),c):this.options.ymax=c);if(typeof this.options.ymin=="string"&&this.options.ymin.slice(0,4)==="auto")return d=Math.min.apply(null,Array.prototype.concat.apply([],this.series)),this.options.ymin.length>5?this.options.ymin=Math.min(parseInt(this.options.ymin.slice(5),10),d):this.options.ymin=d},c.prototype.redraw=function(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,ba,bb,bc,bd,be=this;this.el.empty(),this.r=new Raphael(this.el[0]),w=Math.max(this.measureText(this.options.ymin+this.options.units,this.options.gridTextSize).width,this.measureText(this.options.ymax+this.options.units,this.options.gridTextSize).width),u=w+this.options.marginLeft,L=this.el.width()-u-this.options.marginRight,i=this.el.height()-this.options.marginTop-this.options.marginBottom,f=L/(this.xmax-this.xmin),g=i/(this.options.ymax-this.options.ymin),G=function(a){return be.xvals.length===1?u+L/2:u+(a-be.xmin)*f},H=function(a){return be.options.marginTop+i-(a-be.options.ymin)*g},T=(this.options.ymax-this.options.ymin)/(this.options.numLines-1),h=Math.ceil(this.options.ymin/T)*T,t=Math.floor(this.options.ymax/T)*T;for(v=h;h<=t?v<=t:v>=t;v+=T)K=Math.floor(v),S=H(K),this.r.text(u-this.options.marginLeft/2,S,K+this.options.units).attr("font-size",this.options.gridTextSize).attr("fill",this.options.gridTextColor).attr("text-anchor","end"),this.r.path("M"+u+","+S+"H"+(u+L)).attr("stroke",this.options.gridLineColor).attr("stroke-width",this.options.gridStrokeWidth);B=null,Q=50,this.options.parseTime?(N=(new Date(this.xmin)).getFullYear(),O=(new Date(this.xmax)).getFullYear()):(N=this.xmin,O=this.xmax);for(p=N;N<=O?p<=O:p>=O;N<=O?p++:p--){if(this.options.parseTime){R=(new Date(p,0,1)).getTime();if(R<this.xmin)continue}else R=p;s=this.options.parseTime?p:this.columnLabels[this.columnLabels.length-p-1],q=this.r.text(G(R),this.options.marginTop+i+this.options.marginBottom/2,s).attr("font-size",this.options.gridTextSize).attr("fill",this.options.gridTextColor),r=q.getBBox(),B===null||B<=r.x?B=r.x+r.width+Q:q.remove()}d=function(){var a,b,c,d;c=this.xvals,d=[];for(a=0,b=c.length;a<b;a++)M=c[a],d.push(G(M));return d}.call(this),D=[],_=this.series;for(W=0,Y=_.length;W<Y;W++)C=_[W],D.push(a.map(C,function(a,b){return{x:d[b],y:H(a)}}));for(p=ba=D.length-1;ba<=0?p<=0:p>=0;ba<=0?p++:p--)e=D[p],e.length>1&&(x=this.createPath(e,this.options.marginTop,u,this.options.marginTop+i,u+L),this.r.path(x).attr("stroke",this.options.lineColors[p]).attr("stroke-width",this.options.lineWidth));E=function(){var a,b;b=[];for(p=0,a=D.length-1;0<=a?p<=a:p>=a;0<=a?p++:p--)b.push([]);return b}();for(p=bb=D.length-1;bb<=0?p<=0:p>=0;bb<=0?p++:p--){bc=D[p];for(X=0,Z=bc.length;X<Z;X++)b=bc[X],c=this.r.circle(b.x,b.y,this.options.pointSize).attr("fill",this.options.lineColors[p]).attr("stroke-width",1).attr("stroke","#ffffff"),E[p].push(c)}m=this.options.hoverFontSize*1.5*(this.series.length+1),l=this.r.rect(-10,-m/2-this.options.hoverPaddingY,20,m+this.options.hoverPaddingY*2,10).attr("fill",this.options.hoverFillColor).attr("stroke",this.options.hoverBorderColor).attr("stroke-width",this.options.hoverBorderWidth).attr("opacity",this.options.hoverOpacity),P=this.r.text(0,this.options.hoverFontSize*.75-m/2,"").attr("fill",this.options.hoverLabelColor).attr("font-weight","bold").attr("font-size",this.options.hoverFontSize),o=this.r.set(),o.push(l),o.push(P),V=[];for(p=0,bd=this.series.length-1;0<=bd?p<=bd:p>=bd;0<=bd?p++:p--)U=this.r.text(0,this.options.hoverFontSize*1.5*(p+1.5)-m/2,"").attr("fill",this.options.lineColors[p]).attr("font-size",this.options.hoverFontSize),V.push(U),o.push(U);return J=function(b){var c,e,f,g,h;o.show(),P.attr("text",be.columnLabels[b]);for(c=0,h=be.series.length-1;0<=h?c<=h:c>=h;0<=h?c++:c--)V[c].attr("text",""+be.seriesLabels[c]+": "+be.commas(be.series[c][b])+be.options.units);return e=Math.max.apply(null,a.map(V,function(a){return a.getBBox().width})),e=Math.max(e,P.getBBox().width),l.attr("width",e+be.options.hoverPaddingX*2),l.attr("x",-be.options.hoverPaddingX-e/2),g=Math.min.apply(null,a.map(be.series,function(a){return H(a[b])})),g>m+be.options.hoverPaddingY*2+be.options.hoverMargin+be.options.marginTop?g=g-m/2-be.options.hoverPaddingY-be.options.hoverMargin:g=g+m/2+be.options.hoverPaddingY+be.options.hoverMargin,g=Math.max(be.options.marginTop+m/2+be.options.hoverPaddingY,g),g=Math.min(be.options.marginTop+i-m/2-be.options.hoverPaddingY,g),f=Math.min(u+L-e/2-be.options.hoverPaddingX,d[b]),f=Math.max(u+e/2+be.options.hoverPaddingX,f),o.attr("transform","t"+f+","+g)},j=function(){return o.hide()},n=a.map(d.slice(1),function(a,b){return(a+d[b])/2}),A=null,y=Raphael.animation({r:this.options.pointSize+3},25,"linear"),z=Raphael.animation({r:this.options.pointSize},25,"linear"),k=function(a){var b,c,d;if(A!==null&&A!==a)for(b=0,c=E.length-1;0<=c?b<=c:b>=c;0<=c?b++:b--)E[b][A].animate(z);if(a!==null&&A!==a){for(b=0,d=E.length-1;0<=d?b<=d:b>=d;0<=d?b++:b--)E[b][a].animate(y);J(a)}A=a;if(a===null)return j()},I=function(a){var b,c,d;a-=be.el.offset().left,d=[];for(b=c=n.length;c<=0?b<=0:b>=0;c<=0?b++:b--){if(b===0||n[b-1]>a){k(b);break}d.push(void 0)}return d},this.el.mousemove(function(a){return I(a.pageX)}),this.options.hideHover&&this.el.mouseout(function(a){return k(null)}),F=function(a){var b;return b=a.originalEvent.touches[0]||a.originalEvent.changedTouches[0],I(b.pageX),b},this.el.bind("touchstart",F),this.el.bind("touchmove",F),this.el.bind("touchend",F),k(this.options.hideHover?null:0)},c.prototype.createPath=function(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s;n="";if(this.options.smooth){i=this.gradients(b);for(j=0,s=b.length-1;0<=s?j<=s:j>=s;0<=s?j++:j--)g=b[j],j===0?n+="M"+g.x+","+g.y:(h=i[j],l=b[j-1],m=i[j-1],k=(g.x-l.x)/4,o=l.x+k,q=Math.min(e,l.y+k*m),p=g.x-k,r=Math.min(e,g.y-k*h),n+="C"+o+","+q+","+p+","+r+","+g.x+","+g.y)}else n="M"+a.map(b,function(a){return""+a.x+","+a.y}).join("L");return n},c.prototype.gradients=function(b){return a.map(b,function(a,c){return c===0?(b[1].y-a.y)/(b[1].x-a.x):c===b.length-1?(a.y-b[c-1].y)/(a.x-b[c-1].x):(b[c+1].y-b[c-1].y)/(b[c+1].x-b[c-1].x)})},c.prototype.measureText=function(a,b){var c,d;return b==null&&(b=12),d=this.r.text(100,100,a).attr("font-size",b),c=d.getBBox(),d.remove(),c},c.prototype.parseYear=function(a){var b,c,d,e,f,g,h,i,j,k;return typeof a=="number"?a:(c=a.match(/^(\d+) Q(\d)$/),e=a.match(/^(\d+)-(\d+)$/),f=a.match(/^(\d+)-(\d+)-(\d+)$/),g=a.match(/^(\d+) W(\d+)$/),h=a.match(/^(\d+)-(\d+)-(\d+) (\d+):(\d+)$/),i=a.match(/^(\d+)-(\d+)-(\d+) (\d+):(\d+):(\d+(\.\d+)?)$/),c?(new Date(parseInt(c[1],10),parseInt(c[2],10)*3-1,1)).getTime():e?(new Date(parseInt(e[1],10),parseInt(e[2],10)-1,1)).getTime():f?(new Date(parseInt(f[1],10),parseInt(f[2],10)-1,parseInt(f[3],10))).getTime():g?(j=new Date(parseInt(g[1],10),0,1),j.getDay()!==4&&j.setMonth(0,1+(4-j.getDay()+7)%7),j.getTime()+parseInt(g[2],10)*6048e5):h?(new Date(parseInt(h[1],10),parseInt(h[2],10)-1,parseInt(h[3],10),parseInt(h[4],10),parseInt(h[5],10))).getTime():i?(k=parseFloat(i[6]),b=Math.floor(k),d=Math.floor((k-b)*1e3),(new Date(parseInt(i[1],10),parseInt(i[2],10)-1,parseInt(i[3],10),parseInt(i[4],10),parseInt(i[5],10),b,d)).getTime()):new Date(parseInt(a,10),0,1))},c.prototype.commas=function(a){var b,c,d,e;return d=a<0?"-":"",b=Math.abs(a),c=Math.floor(b).toFixed(0),d+=c.replace(/(?=(?:\d{3})+$)(?!^)/g,","),e=b.toString(),e.length>c.length&&(d+=e.slice(c.length)),d},c}(),window.Morris=b})).call(this);