(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(3),o=a.n(r),s=a(4),d=a(5),i=a(6),b=a(10),u=a(9),l=a(7),j=a.n(l),f=a(0),h=function(e){var t=e.message;return Object(f.jsx)("p",{children:t})},k=function(e){var t=e.good,a=e.neutral,n=e.bad,c=e.total,r=e.positivePercentage,o=j.a.feedbackCounter;return Object(f.jsxs)(f.Fragment,{children:[c>0&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("p",{className:o,children:["Good: ",t]}),Object(f.jsxs)("p",{className:o,children:["Neutral: ",a]}),Object(f.jsxs)("p",{className:o,children:["Bad: ",n]}),Object(f.jsxs)("p",{className:o,children:["Total: ",c]}),Object(f.jsxs)("p",{className:o,children:["Positive feedback: ",0===t?0:r,"%"]})]}),0===c&&Object(f.jsx)(h,{message:"No feedback given"})]})},v=a(8),O=a.n(v),g=function(e){var t=e.feedback,a=e.onLeaveFeedback,n=O.a.feedbackButton;return Object(f.jsx)("button",{className:n,"data-feedback":t,type:"button",onClick:a,children:t})},p=function(e){var t=e.options,a=e.onLeaveFeedback;return t.map((function(e){return Object(f.jsx)(g,{feedback:e,onLeaveFeedback:a},e)}))};var x=function(e){var t=e.title,a=e.children;return Object(f.jsxs)("section",{children:[t&&Object(f.jsx)("h2",{children:t}),a]})},m=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handleFeedback=function(t){var a=t.target.dataset.feedback;e.setState((function(e){return Object(s.a)({},a,e[a]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state.good,a=e.countTotalFeedback();return a?Math.round(t/a*100):0},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad,c=this.countTotalFeedback(),r=this.countPositiveFeedbackPercentage();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(x,{title:"Please leave feedback",children:Object(f.jsx)(p,{options:["good","neutral","bad"],onLeaveFeedback:this.handleFeedback})}),Object(f.jsx)(x,{title:"Statistics",children:Object(f.jsx)(k,{good:t,neutral:a,bad:n,total:c,positivePercentage:r})})]})}}]),a}(n.Component);a(16);o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(m,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={feedbackCounter:"Statistics_feedbackCounter__3Jqgj"}},8:function(e,t,a){e.exports={feedbackButton:"FeedbackOptions_feedbackButton__2u5cK"}}},[[17,1,2]]]);
//# sourceMappingURL=main.f314bca9.chunk.js.map