(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{141:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),r=o(33),c=o.n(r),i=o(7),l=o.n(i),s=(o(142),o(143),o(144),a.a.Component,o(50),o(145)),d=o.n(s),m=function(e){function t(t){var o;return(o=e.call(this,t)||this).state={},o._handleScroll=o._handleScroll.bind(c()(o)),o}l()(t,e);var o=t.prototype;return o.componentDidMount=function(){this._handleScroll()},o._handleScroll=function(){var e=document.getElementById("v0"),t=d()("#time"),o=d()("#scroll"),n=d()(window).height()-20,a=window.pageYOffset/400,r=a;e.pause(),window.onscroll=function(){r=window.pageYOffset/400,o.css("top",10+window.pageYOffset/13500*n)},setInterval(function(){a+=.2*(r-a),t.css("top",10+a/13500*400*n),e.currentTime=a,e.pause()},30)},o.render=function(){return a.a.createElement("div",{className:"hero"},a.a.createElement("div",{id:"set-height"}),a.a.createElement("div",{id:"scroll"}),a.a.createElement("div",{id:"time"}),a.a.createElement("div",{className:"video-holder"},a.a.createElement("video",{id:"v0",tabIndex:"0",autobuffer:"autobuffer",preload:"preload"},a.a.createElement("source",{type:'video/ogg; codecs="theora, vorbis"',src:"https://www.html5rocks.com/tutorials/video/basics/Chrome_ImF.ogv"}),a.a.createElement("source",{type:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',src:"https://www.html5rocks.com/tutorials/video/basics/Chrome_ImF.mp4"}),a.a.createElement("p",null,"Sorry, your browser does not support the <video> element."))))},t}(a.a.Component);o(146),t.default=function(){return a.a.createElement("div",{className:"app"},a.a.createElement(m,null))}},143:function(e,t,o){e.exports=o.p+"static/GoF-Strolling-39c5bdfdea6d52b7bee741793ec15058.mp4"}}]);
//# sourceMappingURL=component---src-pages-index-jsx-e6f16bea42af4094015b.js.map