import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */let e={email:"",message:""};const t=document.querySelector(".feedback-form"),l="feedback-form-state";m();t.addEventListener("input",a=>{e[a.target.name]=a.target.value.trim(),localStorage.setItem(l,JSON.stringify(e))});t.addEventListener("submit",a=>{if(a.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log("Form Data:",e),t.reset(),localStorage.removeItem(l),e={email:"",message:""}});function m(){const a=localStorage.getItem(l);a&&(e=JSON.parse(a),t.elements.email.value=e.email||"",t.elements.message.value=e.message||"")}
//# sourceMappingURL=2-form.js.map
