(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{141:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n),a=o(33),c=o.n(a),i=o(7),s=o.n(i),l=(o(142),o(143),o(144),r.a.Component,o(50),o(145)),d=o.n(l),m=function(e){function t(t){var o;return(o=e.call(this,t)||this).state={},o._handleScroll=o._handleScroll.bind(c()(o)),o}s()(t,e);var o=t.prototype;return o.componentDidMount=function(){this._handleScroll()},o._handleScroll=function(){var e=document.getElementById("v0"),t=d()("#time"),o=d()("#scroll"),n=d()(window).height()-20,r=window.pageYOffset/400,a=r;e.pause(),window.onscroll=function(){a=window.pageYOffset/400,o.css("top",10+window.pageYOffset/13500*n)},setInterval(function(){r+=.2*(a-r),t.css("top",10+r/13500*400*n),e.currentTime=r,e.pause()},30)},o.render=function(){return r.a.createElement("div",{className:"hero"},r.a.createElement("div",{id:"set-height"}),r.a.createElement("div",{id:"scroll"}),r.a.createElement("div",{id:"time"}),r.a.createElement("div",{className:"video-holder"},r.a.createElement("video",{id:"v0",tabIndex:"0",autobuffer:"autobuffer",preload:"preload"},r.a.createElement("source",{type:'video/webm; codecs="vp8, vorbis"',src:"http://www.html5rocks.com/tutorials/video/basics/Chrome_ImF.webm"}),r.a.createElement("source",{type:'video/ogg; codecs="theora, vorbis"',src:"http://www.html5rocks.com/tutorials/video/basics/Chrome_ImF.ogv"}),r.a.createElement("source",{type:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',src:"http://www.html5rocks.com/tutorials/video/basics/Chrome_ImF.mp4"}),r.a.createElement("p",null,"Sorry, your browser does not support the <video> element."))))},t}(r.a.Component);o(146),t.default=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(m,null))}},143:function(e,t,o){e.exports=o.p+"static/GoF-Strolling-39c5bdfdea6d52b7bee741793ec15058.mp4"}}]);
//# sourceMappingURL=component---src-pages-index-jsx-76161a477876950636ea.js.map