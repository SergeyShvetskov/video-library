function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=e.parcelRequire127d;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){r[t]=e},e.parcelRequire127d=o),o("eWCmQ"),o("krGWQ"),o("a2R8d");var a=o("eWCmQ"),i=o("krGWQ"),d=o("2eUFK");function c(t){const e=t.results.map((({id:t,poster_path:e,title:n,release_date:r,genre_ids:o})=>{return`<li class="cards__item" id="${t}">\n        <a class="cards__link">\n            <img class="cards__img" src="${e=""===e||"null"===e||null===e?"https://i.pinimg.com/originals/74/3d/b2/743db230d891b47c1d8c66b161111b91.jpg":"https://image.tmdb.org/t/p/w400"+e}" alt="${n}" loading="lazy">\n        </a>\n            <div class="cards__text"><h2 class="cards__name">${function(t){if(t)return t.length>=32?t.substr(0,32)+"...":t}(n)}</h2>\n            <p class="cards__genres"> ${function(t){const e=t.flatMap((t=>d.genres.filter((e=>e.id===t))));let n=e.map((t=>t.name));if(n.length>2){const t=n.splice(0,2);return t.push("Other"),t.join(", ")}return 0===n.length?n="Genre not found":n.join(", ")}(o)} | ${a=r,a?a.slice(0,4):"Year not found"}</p>\n            </div>\n        </li>`;var a})).join("");i.cardList.insertAdjacentHTML("beforeend",e)}i=o("krGWQ");var s=o("2shzp").default;async function u(t=1){const e=await s.get(`${i.COMMON_URL}${i.TRENDING_FilM}?api_key=${i.API_KEY}&page=${t}`);try{return e.data}catch(t){console.error(t)}}async function l(t,e){const n=await s.get(`${i.COMMON_URL}${i.SEARCH_FilM}?api_key=${i.API_KEY}&query=${t}&page=${e}`);try{return n.data}catch(t){console.error(t)}}i=o("krGWQ"),o("2shzp").default;const m=document.querySelector('[data-index="1"]'),h=document.querySelector('[data-index="2"]'),g=document.querySelector('[data-index="3"]'),p=document.querySelector('[data-index="4"]'),f=document.querySelector('[data-index="5"]'),x=document.querySelector(".first-button"),C=document.querySelector(".last-button"),b=document.querySelector(".pagination-container"),y=document.querySelector(".arrow-right"),L=document.querySelector(".arrow-left"),_=document.querySelector("#previous"),v=document.querySelector("#after");b.addEventListener("click",(function(t){console.log(t),"BUTTON"===t.target.tagName&&(Number(t.target.textContent)&&(N=Number(t.target.textContent)),_.hidden=!0,v.hidden=!0,t.target.classList.contains("pagination-button")&&(q.forEach((t=>t.classList.remove("pagination--current"))),t.target.classList.add("pagination--current")),t.target.classList.contains("arrow-right")&&N<1e3&&(q.forEach((t=>t.classList.remove("pagination--current"))),m.classList.add("pagination--current"),m.textContent=Number(m.textContent)+5,h.textContent=Number(h.textContent)+5,g.textContent=Number(g.textContent)+5,p.textContent=Number(p.textContent)+5,f.textContent=Number(f.textContent)+5,N=m.textContent),t.target.classList.contains("arrow-left")&&N>=5&&(q.forEach((t=>t.classList.remove("pagination--current"))),m.textContent=Number(m.textContent)-5,h.textContent=Number(h.textContent)-5,g.textContent=Number(g.textContent)-5,p.textContent=Number(p.textContent)-5,f.textContent=Number(f.textContent)-5,f.classList.add("pagination--current"),N=f.textContent),t.target.classList.contains("first-button")&&(q.forEach((t=>t.classList.remove("pagination--current"))),m.textContent=1,h.textContent=2,g.textContent=3,p.textContent=4,f.textContent=5,m.classList.add("pagination--current"),N=m.textContent,L.hidden=!0,_.hidden=!0,x.hidden=!0),t.target.classList.contains("last-button")&&(q.forEach((t=>t.classList.remove("pagination--current"))),m.textContent=Number(C.textContent)-4,h.textContent=Number(C.textContent)-3,g.textContent=Number(C.textContent)-2,p.textContent=Number(C.textContent)-1,f.textContent=C.textContent,f.classList.add("pagination--current"),N=f.textContent,y.hidden=!0,v.hidden=!0,C.hidden=!0),Number(N)>5?(L.hidden=!1,_.hidden=!1,x.hidden=!1):(L.hidden=!0,_.hidden=!0,x.hidden=!0),Number(N)<996&&(y.hidden=!1,v.hidden=!1,C.hidden=!1),i.cardList.innerHTML="",window.scrollTo({top:0,behavior:"smooth"}),""!==i.inputRef.value?l(i.inputRef.value,N).then((t=>{c(t)})).catch((t=>t.message)):u(N).then((t=>{c(t)})).catch((t=>t.message)))}));let N=1,q=document.querySelectorAll(".pagination-button");_.hidden=!0,L.hidden=!0,x.hidden=!0;o("2shzp").default;document.addEventListener("DOMContentLoaded",(async function(){u().then((t=>{c(t)})).catch((t=>t.message))}));document.querySelector("pagination--current");const S={searchForm:document.querySelector(".header-search__wrapper"),cardlist:document.querySelector(".cards__list"),cardsListLibrary:document.querySelector(".cards__list--library")};S.searchForm.addEventListener("submit",(async function(e){e.preventDefault();const n=e.currentTarget.elements.query.value.trim();void(S.cardlist.innerHTML=""),""!==n?l(n,1).then((e=>{if(0===e.results.length)return t(a).Loading.remove(400),t(a).Notify.failure("Search result not successful. Enter the correct movie name and try again.");t(a).Loading.remove(400),c(e)})).catch((t=>t.message)):u(1).then((t=>{c(t)})).catch((t=>t.message))})),o("7bYU0"),o("31u3U"),o("jpSoo"),o("bTcpz"),o("56a1K"),window.addEventListener("load",(()=>{document.querySelector(".loader").classList.add("loader--hidden"),setTimeout((()=>{document.body.removeChild(document.querySelector(".loader"))}),400)}));
//# sourceMappingURL=index.7195202b.js.map
