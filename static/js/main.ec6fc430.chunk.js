(this.webpackJsonpprojectpics=this.webpackJsonpprojectpics||[]).push([[0],{19:function(e,t,a){e.exports=a(43)},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(16),c=a.n(i),s=a(6),u=a.n(s),o=a(17),l=a(2),m=a(3),p=a(5),h=a(4),f=a(18),v=a.n(f).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID cHqbi3UqdtFHhqkTeNFR7iC1_nvHDPH_Wn1Iva6LZGw"}}),d=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e.onFormSubmitHandler=function(t){t.preventDefault(),e.props.onSubmit(e.state.term)},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ui segment"},r.a.createElement("form",{className:"ui form",onSubmit:this.onFormSubmitHandler},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Image Search"),r.a.createElement("input",{type:"text",value:this.state.term,placeholder:"Search...",onChange:function(t){return e.setState({term:t.target.value})}}))))}}]),a}(n.Component),g=(a(42),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).setSpans=function(){var e=n.imageRef.current.clientHeight,t=Math.ceil(e/10+1);n.setState({span:t})},n.state={span:0},n.imageRef=r.a.createRef(),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpans)}},{key:"render",value:function(){return r.a.createElement("div",{style:{gridRowEnd:"span ".concat(this.state.span)}},r.a.createElement("img",{ref:this.imageRef,src:this.props.image.urls.regular,alt:this.props.image.description}))}}]),a}(n.Component)),b=function(e){var t=e.images.map((function(e){return r.a.createElement(g,{key:e.id,image:e})}));return r.a.createElement("div",{className:"ImageList"},t)},S=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={images:[]},e.showImageHandler=function(){e.state.images.map((function(e){return r.a.createElement("div",null,e.urls.thumb)}))},e}return Object(m.a)(a,[{key:"onSearchSubmit",value:function(){var e=Object(o.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/search/photos",{params:{query:t}});case 2:a=e.sent,this.setState({images:a.data.results});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ui container",style:{marginTop:"10px"}},r.a.createElement(d,{onSubmit:function(t){return e.onSearchSubmit(t)}}),r.a.createElement(b,{images:this.state.images}))}}]),a}(n.Component);c.a.render(r.a.createElement(S,null),document.querySelector("#root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.ec6fc430.chunk.js.map