!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequire127d;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequire127d=r),r("aZhHc"),r("UL92Z");const a=new(0,r("cdQSu").default),o={watchedBtnLb:document.querySelector(".watchedBtnLb"),queueBtnLb:document.querySelector(".queueBtnLb"),libraryCardsList:document.querySelector(".library-cards__list")};function l(e){o.queueBtnLb.style.backgroundColor="transparent",o.queueBtnLb.style.border="1px solid #FFFFFF",o.watchedBtnLb.style.backgroundColor="#ff6b01",o.watchedBtnLb.style.border="1px solid #ff6b01",function(){o.libraryCardsList.innerHTML="";for(let e=0;e<localStorage.length;e+=1)if(localStorage.key(e).includes("watched")){const t=JSON.parse(localStorage.getItem(localStorage.key(e)));a.id=t,a.fetchMoviesInfo().then((({genres:e,id:t,original_title:n,poster_path:r,release_date:a,vote_average:o})=>{i({genres:e,id:t,original_title:n,poster_path:r,release_date:a,vote_average:o})}))}}()}function i({genres:e,id:t,original_title:n,poster_path:r,release_date:a,vote_average:l}){const i=`<li class="cards__item" id="${t}">\n          <a class="cards__link">\n              <img class="cards__img" src="https://image.tmdb.org/t/p/w400${r}" alt="${n}" loading="lazy">\n          </a>\n              <div class="cards__text"><h2 class="cards__name">${function(e){if(e)return e.length>32?e.slice(0,32)+"...":e}(n)}</h2>\n              <p class="cards__genres"> ${d=e,d.length>2?`${d[0].name}, ${d[1].name}, other`:function(e){e.map((e=>e.name)).join(", ")}(d)} | ${s=a,s?s.slice(0,4):"Not found"}<span class="film-rating"> ${l.toFixed(1)}</span>\n              </p>\n              </div>\n          </li>`;var s,d;o.libraryCardsList.insertAdjacentHTML("beforeend",i)}o.watchedBtnLb.addEventListener("click",l),o.queueBtnLb.addEventListener("click",(function(e){o.watchedBtnLb.style.backgroundColor="transparent",o.watchedBtnLb.style.border="1px solid #FFFFFF",o.queueBtnLb.style.backgroundColor="#ff6b01",o.queueBtnLb.style.border="1px solid #ff6b01",function(){o.libraryCardsList.innerHTML="";for(let e=0;e<localStorage.length;e+=1)if(localStorage.key(e).includes("queue")){const t=JSON.parse(localStorage.getItem(localStorage.key(e)));a.id=t,a.fetchMoviesInfo().then((({genres:e,id:t,original_title:n,poster_path:r,release_date:a,vote_average:o})=>{i({genres:e,id:t,original_title:n,poster_path:r,release_date:a,vote_average:o})}))}}()})),window.addEventListener("load",l)}();
//# sourceMappingURL=library.ab06061a.js.map
