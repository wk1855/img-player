(this["webpackJsonpimg-player"]=this["webpackJsonpimg-player"]||[]).push([[0],{11:function(e,t,n){e.exports=n(17)},17:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(9),s=n.n(l),r=n(1),c=n(2),o=n(4),p=n(3),u=n(10),m=(n(16),n(7)),d=n.n(m),h=function(e){Object(o.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){console.log("SlowTransition componentDidMount()"),this.instanceSwiper()}},{key:"instanceSwiper",value:function(){this.swiperObj=new u.a(".swiper-container",{autoplay:{delay:3e3,disableOnInteraction:!1},speed:700,allowTouchMove:!1,lazy:{loadPrevNext:!0,loadPrevNextAmount:3},centeredSlides:!0,spaceBetween:50,slidesOffsetBefore:40,slidesPerView:"auto",on:{slideChangeTransitionEnd:function(){this.slides.transition(this.params.autoplay.delay+this.params.speed).transform("translate3d(-60px, 0, 0)"),this.isEnd&&console.log("\u662f\u672b\u5c3e\u4f4d\u7f6e")},slideChangeTransitionStart:function(){this.slides.transition(this.params.speed).transform("translate3d(0, 0, 0)")}},pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(e,t){return'<div class="'+t+'"><span></span><i></i></div>'}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},observer:!0,observeParents:!0})}},{key:"componentWillReceiveProps",value:function(e){console.log("SlowTransition componentWillReceiveProps"),this.props.list!==e.list&&(this.swiperObj.destroy(),this.swiperObj=null,this.instanceSwiper())}},{key:"componentWillUpdate",value:function(e,t){console.log("SlowTransition componentWillUpdate(nextProps, nextState)"),this.swiperObj.update(),this.swiperObj.slideTo(0,1e3,!1)}},{key:"componentWillUnmount",value:function(){console.log("SlowTransition componentWillUnmount"),this.swiperObj.destroy&&(this.swiperObj.destroy(),this.swiperObj=null)}},{key:"render",value:function(){var e=this.props.list;return i.a.createElement("div",{className:d.a.swiperFather},i.a.createElement("h2",null,this.props.title),i.a.createElement("div",{className:"swiper-container swiper-no-swiping ".concat(d.a.con),style:{overflow:"hidden"}},i.a.createElement("div",{className:"swiper-wrapper ".concat(d.a.con)},e&&e.length>0&&e.map((function(e,t){return i.a.createElement("div",{className:"swiper-slide",key:"swiper".concat(t)},i.a.createElement("div",{className:"title"},e),i.a.createElement("img",{"data-src":e,className:"swiper-lazy",alt:"{\u56fe\u7247}"}))})))),i.a.createElement("div",{className:"swiper-pagination"}),i.a.createElement("div",{className:"swiper-button-prev"}),i.a.createElement("div",{className:"swiper-button-next"}))}}]),n}(a.Component),v=["pic/picture-1.jpg","pic/picture-2.jpg","pic/picture-3.jpg","pic/picture-4.jpg","pic/picture-5.jpg","pic/picture-6.jpg","pic/picture-7.jpg","pic/picture-8.jpg","pic/picture-9.jpg","pic/picture-10.jpg"],g=function(e){Object(o.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).handleChangeSecNum=function(t){var n=t.target.value,a=/^[0-9]\d{0,2}$/;if(!a.test(n)||n>100)return console.log("\u8d85\u51fa\u8303\u56f4[1,100]",a.test(n)),!1;e.setState({secnum:t.target.value})},e.handleChangeTitle=function(t){e.setState({title:t.target.value})},e.handleChangePicNum=function(t){var n=t.target.value,a=/^[0-9]\d{0,1}$/;if(!a.test(n)||n>20)return console.log("\u8d85\u51fa\u8303\u56f4[1,20]",a.test(n)),!1;e.setState({picnum:t.target.value})},e.handlePicTirlNamChange=function(t){var n=t.target.value;console.log(n),e.setState({picTirlName:n})},e.handleSubmit=function(t){t.preventDefault(),e.setState({setNumFlag:!1,jumpFlag:!0})},e.state={picnum:10,jumpFlag:!1,setNumFlag:!0,List:v,title:"\u56fe\u7247\u5c55\u793a"},e}return Object(c.a)(n,[{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){return i.a.createElement("div",null,this.state.setNumFlag?i.a.createElement("div",{id:"join-dialog",className:"jumbotron vertical-center"},i.a.createElement("form",{className:"form-group",onSubmit:this.handleSubmit},i.a.createElement("p",null,i.a.createElement("input",{type:"text",name:"title",value:this.state.title,onChange:this.handleChangeTitle})),i.a.createElement("p",null,"\u663e\u793a\u51e0\u5f20\u56fe\u7247[1,20]\uff1a",i.a.createElement("input",{type:"number",name:"picNum",min:"1",max:"20",value:this.state.picnum,onChange:this.handleChangePicNum})),i.a.createElement("p",null,i.a.createElement("input",{className:"btn btn-lg btn-success",type:"submit",value:"\u663e\u793a\u56fe\u7247"})))):null,!this.state.setNumFlag&&this.state.jumpFlag?i.a.createElement("div",null,i.a.createElement(h,{list:this.state.List,title:this.state.title})):null)}}]),n}(a.Component);s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(g,null)),document.getElementById("root"))},7:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.bc9a9638.chunk.js.map