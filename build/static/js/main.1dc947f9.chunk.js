(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{19:function(e){e.exports=JSON.parse('[{"id":"1","title":"Dream Come True","body":"JavaScript is the world most popular lightweight, interpreted compiled programming language....","date":"11/23/2021","imgUrl":"disney-quote.jpg","summary":"Disney quote is so accurate and it did come true for me......"},{"id":"2","title":"Cricket an Emotion","body":"Cricket unites India. Cricket in India is not just a game but its a way of life and that would not have been possible without the loyal fans. Indian fans are passionate and sometimes irrational, but at the end of the day, they play a big role in elevating the status of the game. Cricket is a religion here; which unites everyone irrespective of their caste, creed or socio-economic strata.\\nCricket is the most popular sport in India and some would even see it as a religion in the country instead of a sport. When there\u2019s a big cricket match, everybody will seem to stop what they\u2019re doing and just focus on the game. You\u2019ll also see many children play gully cricket on the streets. It\u2019s simply something that unites the Indians like nothing else in the world. There are just many reasons why Indians love and enjoy cricket so much, and here are some of those. India\u2019s interest In cricket is definitely to the extremes. Up to this day, the love for cricket that Indians have remains the same.","date":"11/20/2021","imgUrl":"cricket.jpg","summary":"In India when we talk of cricket it is not just a game, but an emotion......"},{"id":"3","title":"Code to Rescue","body":"From switching the streams from animation, to Banking, to Designing and then to Developing, it sure was a long road\\n Journey so far was a roller coaster of life events and am happy to have reached the destination, where I know what i want to do and persue in future\\n It was not easy and the mind was never this steady and still there are many branches to select from, now i know which stream to take and what to do. ","date":"11/21/2121","imgUrl":"coding.jpg","summary":"From switching streams to sticking to coding, because it just"}]')},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n.n(i),a=n(32),c=n.n(a),r=(n(42),n(8)),o=n(9),l=n(11),d=n(36),j=(n(43),n(44),n(45),n(14)),h=n(2),u=function(e){var t=e.post,n=t.id,i=t.title,s=(t.body,t.imgUrl),a=t.date,c=t.summary;return Object(h.jsxs)("div",{className:"post-container",children:[Object(h.jsx)(j.b,{to:"/Blog/".concat(n),children:Object(h.jsx)("h1",{className:"heading",children:i})}),Object(h.jsx)("p",{children:Object(h.jsxs)("strong",{children:["Date: ",a]})}),Object(h.jsx)("img",{className:"image",src:"/images/".concat(s),alt:"post"}),Object(h.jsx)("p",{children:c})]})},b=n(19),m=function(){return Object(h.jsx)("div",{className:"posts-container",children:b.map((function(e){return Object(h.jsx)(u,{post:e},e.id)}))})},p=function(){return Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)("h1",{children:"MY BLOG"}),Object(h.jsx)("div",{className:"links"})]})},g=function(){return Object(h.jsx)("footer",{className:"App-footer",children:Object(h.jsx)("p",{children:"Copyright \xa9 MyBlog.com"})})},O=n(3),f=n(16),x=function(e){var t=e.post,n=t.id,i=t.title,s=t.body,a=t.imgUrl,c=t.date;return Object(h.jsxs)("div",{className:"blogDetails-container",children:[Object(h.jsx)(j.b,{to:"/Blog/".concat(n),children:Object(h.jsx)("h1",{className:"heading",children:i})}),Object(h.jsx)("br",{}),Object(h.jsx)("p",{children:Object(h.jsxs)("strong",{children:["Date: ",c]})}),Object(h.jsx)("br",{}),Object(h.jsx)("img",{className:"image",src:"/images/".concat(a),alt:"post"}),Object(h.jsx)("br",{}),Object(h.jsx)("p",{children:s}),Object(h.jsx)("br",{})]})},y=function(){var e=Object(i.useState)(!1),t=Object(f.a)(e,2),n=t[0],s=t[1],a=Object(O.f)().id;return Object(i.useEffect)((function(){setTimeout((function(){s(!n)}),5e3)}),[n]),Object(h.jsx)("div",{className:"posts-container",children:!!a&&b.filter((function(e){return e.id===a})).map((function(e){return Object(h.jsx)(x,{post:e},e.id)}))})},v=n(35),w=n.n(v);function k(){var e=s.a.useState(null),t=Object(f.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(!1),r=Object(f.a)(c,2),o=r[0],l=r[1];return s.a.useEffect((function(){setTimeout((function(){w.a.get("https://newsapi.org/v2/everything?q=bitcoin&from=2021-10-25&sortBy=publishedAt&apiKey=6cc4c09c9d374e3eaba3bf30ee379d73").then((function(e){a(e.data.articles),console.log(JSON.stringify(e.data.articles))})),l(!o)}),1e5)}),[o]),n?Object(h.jsxs)("div",{children:[Object(h.jsx)(j.b,{to:"/",children:Object(h.jsx)("h2",{className:"heading",children:"Home"})}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"GoodApi",children:[Object(h.jsx)("h4",{children:"NEWS"}),Object(h.jsx)("hr",{}),n.filter((function(e,t){return t<5})).map((function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"newsApi",children:[Object(h.jsx)("p",{children:e.title}),Object(h.jsxs)("p",{children:[Object(h.jsx)("strong",{children:"Published At: "}),e.publishedAt]})]}),Object(h.jsx)("hr",{})]})}))]})]}):null}var N=n(37),I=function(){return Object(h.jsx)(N.a,{sourceType:"profile",screenName:"neerav_blitz",options:{height:250}})},C=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)(j.a,{children:Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(p,{}),Object(h.jsx)("div",{className:"App-leftdiv",style:{flexGrow:7},children:Object(h.jsxs)(O.c,{children:[Object(h.jsx)(O.a,{exact:!0,path:"/",component:m}),Object(h.jsx)(O.a,{path:"/blog/:id",component:y})]})}),Object(h.jsxs)("div",{className:"App-rightdiv",style:{flexGrow:3},children:[Object(h.jsx)(k,{}),Object(h.jsx)(I,{})]}),Object(h.jsx)(g,{})]})})}}]),n}(i.Component),A=C,S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),i(e),s(e),a(e),c(e)}))};c.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(A,{})}),document.getElementById("root")),S()}},[[73,1,2]]]);
//# sourceMappingURL=main.1dc947f9.chunk.js.map