!function(){function e(e,t,i,n){Object.defineProperty(e,t,{get:i,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},a=t.parcelRequire127d;null==a&&((a=function(e){if(e in i)return i[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return i[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequire127d=a),a.register("aZhHc",(function(e,t){var i=a("az2Tt"),n=a("h7U8B");const o={openModal:document.querySelector(".page-footer__link"),modalTeam:document.querySelector("[data-team-modal]"),closeModal:document.querySelector(".team-modal__close-button"),teamList:document.querySelector(".js-team-list")};function r(){o.teamList.innerHTML=""}o.openModal.addEventListener("click",(function(e){e.preventDefault(),o.modalTeam.classList.remove("is-hidden"),function(){const e=i.default.map(n.getTeamCard).join("");o.teamList.insertAdjacentHTML("beforeend",e)}()})),o.closeModal.addEventListener("click",(function(e){e.preventDefault(),r(),o.modalTeam.classList.add("is-hidden")})),window.addEventListener("keydown",(function(e){"Escape"===e.code&&(o.modalTeam.classList.add("is-hidden"),r())})),o.modalTeam.addEventListener("click",(function(e){e.target.classList.contains("team-backdrop")&&(o.modalTeam.classList.add("is-hidden"),r())}))})),a.register("az2Tt",(function(t,i){e(t.exports,"default",(function(){return n}));var n=[{photo:"https://raw.githubusercontent.com/SergeyShvetskov/video-library/main/src/images/team/Serhiy-Shvetskov.jpg?raw=true",name:"Serhiy Shvetskov",position:"Team Lead",git:"https://github.com/SergeyShvetskov",linkedin:"https://www.linkedin.com/in/sergeyshvetskov/",email:"svetsoff@gmail.com"},{photo:"https://raw.githubusercontent.com/SergeyShvetskov/video-library/main/src/images/team/Mariia-Tereshchenko.jpg?raw=true",name:"Mariia Tereshchenko",position:"Scrum Master",git:"https://github.com/Mlisovskaja",linkedin:"https://www.linkedin.com/in/maria-tereshchenko-352740176/",email:"mrs.tereshchenko@gmail.com"},{photo:"https://raw.githubusercontent.com/SergeyShvetskov/video-library/main/src/images/team/Maryna-Aponasko.jpg?raw=true",name:"Maryna Aponasko",position:"Developer",git:"https://github.com/MarynaAponasko",linkedin:"https://www.linkedin.com/in/aponasko",email:"maryna.aponasko@gmail.com"},{photo:"https://raw.githubusercontent.com/SergeyShvetskov/video-library/main/src/images/team/Serhii-Zhydkov.jpg?raw=true",name:"Serhii Zhydkov",position:"Developer",git:"https://github.com/serhii95zhydkov",linkedin:"https://www.linkedin.com/in/serhii-zhydkov-1326aa161/",email:"s.o.zhidkov@gmail.com"},{photo:"https://raw.githubusercontent.com/SergeyShvetskov/video-library/main/src/images/team/Oleksandr-Prysmytskyi.jpg?raw=true",name:"Oleksandr Prysmytskyi",position:"Developer",git:"https://github.com/Prysmytskyi-Oleksandr",linkedin:"https://www.linkedin.com/in/aleksandr-prysmytskyi-5683676a",email:"san2003@ukr.net"},{photo:"https://raw.githubusercontent.com/SergeyShvetskov/video-library/main/src/images/team/Serhii-Denysenko.jpg?raw=true",name:"Serhii Denysenko",position:"Developer",git:"https://github.com/DenysenkoSerhii",linkedin:"",email:"demissv@gmail.com"},{photo:"https://raw.githubusercontent.com/SergeyShvetskov/video-library/main/src/images/team/Valentyn-Taldykin.jpg?raw=true",name:"Valentyn Taldykin",position:"Developer",git:"https://github.com/VlikToldo",linkedin:"https://www.linkedin.com/in/valentyn-taldykin-0a1962236",email:"valiktoldo@gmail.com"},{photo:"https://raw.githubusercontent.com/SergeyShvetskov/video-library/main/src/images/team/Volodymyr-Larin.jpg?raw=true",name:"Volodymyr Larin",position:"Developer",git:"",linkedin:"https://www.linkedin.com/in/Volodymyr-Larin-185257120/",email:"lvv0820@gmail.com"}]})),a.register("h7U8B",(function(t,i){function n({photo:e,name:t,position:i,git:n,linkedin:a,email:o}){return`<div class="team-card">\n  <img class="team-card__img" src="${e}" alt="${t}"/>\n  <div class="team-card__info">\n    <h3 class="team-card__title">${t}</h3>\n    <p class="team-card__text">${i}</p>\n    <ul class="team-card__list">\n      <li class="team-card__item">\n        <a class="team-card__link" href="${n}" target="_blank"\n                rel="noreferrer noopener">\n          <svg viewBox="0 0 32 32" width="25" height="25">\n          <path d="M15.938 0.438c-8.801 0-15.938 7.136-15.938 15.938 0 7.042 4.567 13.016 10.899 15.124 0.796 0.148 1.089-0.346 1.089-0.767 0-0.38-0.015-1.636-0.022-2.967-4.434 0.964-5.37-1.881-5.37-1.881-0.725-1.842-1.77-2.332-1.77-2.332-1.446-0.989 0.109-0.969 0.109-0.969 1.601 0.113 2.443 1.642 2.443 1.642 1.421 2.437 3.728 1.732 4.638 1.325 0.143-1.030 0.556-1.733 1.012-2.131-3.54-0.403-7.261-1.77-7.261-7.877 0-1.74 0.623-3.162 1.642-4.278-0.165-0.402-0.711-2.023 0.154-4.218 0 0 1.338-0.428 4.384 1.634 1.271-0.353 2.635-0.53 3.989-0.536 1.355 0.006 2.719 0.183 3.993 0.536 3.042-2.062 4.379-1.634 4.379-1.634 0.867 2.195 0.322 3.816 0.156 4.218 1.022 1.116 1.64 2.538 1.64 4.278 0 6.122-3.729 7.47-7.277 7.864 0.572 0.495 1.081 1.465 1.081 2.951 0 2.133-0.018 3.849-0.018 4.374 0 0.424 0.287 0.921 1.095 0.765 6.329-2.11 10.89-8.082 10.89-15.122 0-8.803-7.136-15.938-15.938-15.938z"></path>\n<path d="M5.969 23.142c-0.035 0.079-0.16 0.103-0.273 0.049-0.116-0.052-0.181-0.16-0.143-0.239 0.034-0.081 0.159-0.104 0.274-0.049 0.116 0.052 0.182 0.161 0.142 0.24zM6.753 23.841c-0.076 0.070-0.225 0.038-0.325-0.074-0.104-0.111-0.124-0.26-0.047-0.331 0.078-0.070 0.223-0.038 0.327 0.074 0.104 0.112 0.125 0.26 0.045 0.331zM7.291 24.736c-0.098 0.068-0.258 0.004-0.356-0.137-0.098-0.142-0.098-0.312 0.002-0.38s0.256-0.007 0.356 0.134c0.098 0.144 0.098 0.314-0.002 0.384zM8.201 25.773c-0.087 0.096-0.273 0.070-0.41-0.061-0.139-0.128-0.178-0.311-0.090-0.407s0.276-0.069 0.413 0.061c0.138 0.128 0.181 0.312 0.088 0.407zM9.376 26.123c-0.038 0.125-0.218 0.181-0.398 0.128-0.18-0.055-0.298-0.201-0.262-0.327 0.037-0.126 0.217-0.185 0.399-0.128 0.18 0.054 0.298 0.2 0.261 0.326zM10.714 26.271c0.005 0.131-0.149 0.241-0.338 0.243-0.191 0.004-0.345-0.102-0.347-0.232 0-0.133 0.15-0.241 0.34-0.244s0.345 0.102 0.345 0.233zM12.028 26.221c0.023 0.128-0.109 0.26-0.297 0.295-0.185 0.034-0.356-0.045-0.38-0.172-0.023-0.131 0.111-0.263 0.296-0.297 0.188-0.033 0.357 0.044 0.381 0.175z"></path>\n          </svg>\n        </a>\n      </li>\n      <li class="team-card__item">\n        <a class="team-card__link" href="${a}" target="_blank"\n                rel="noreferrer noopener">\n          <svg viewBox="0 0 32 32" width="25" height="25">\n            <path d="M7.449 10.295h-6.424c-0.285 0-0.516 0.231-0.516 0.516v0 20.638c0 0.285 0.231 0.516 0.516 0.516v0h6.424c0.285 0 0.516-0.231 0.516-0.516v0-20.638c0-0.285-0.231-0.516-0.516-0.516v0zM4.239 0.035c-2.337 0-4.239 1.9-4.239 4.234 0 2.336 1.902 4.236 4.239 4.236 2.336 0 4.236-1.9 4.236-4.236s-1.9-4.234-4.236-4.234zM23.789 9.782c-2.58 0-4.487 1.109-5.644 2.369v-1.34c0-0.285-0.231-0.516-0.516-0.516v0h-6.152c-0.285 0-0.516 0.231-0.516 0.516v0 20.638c0 0.285 0.231 0.516 0.516 0.516v0h6.41c0.285 0 0.516-0.231 0.516-0.516v0-10.211c0-3.441 0.935-4.781 3.333-4.781 2.612 0 2.82 2.149 2.82 4.958v10.034c0 0.285 0.231 0.516 0.516 0.516v0h6.412c0.285 0 0.516-0.231 0.516-0.516v0-11.32c0-5.116-0.976-10.347-8.211-10.347z"></path>\n          </svg>\n        </a>\n      </li>\n      <li class="team-card__item">\n        <a class="team-card__link" href="mailto:${o}">\n          <svg viewBox="0 0 32 32" width="25" height="25">\n            <path d="M30.080 26.24c0.353 0 0.64-0.287 0.64-0.64v-19.2c0-0.353-0.287-0.64-0.64-0.64h-28.16c-0.353 0-0.64 0.287-0.64 0.64v19.2c0 0.353 0.287 0.64 0.64 0.64h28.16zM30.080 27.52h-28.16c-1.060 0-1.92-0.86-1.92-1.92v-19.2c0-1.060 0.86-1.92 1.92-1.92h28.16c1.060 0 1.92 0.86 1.92 1.92v19.2c0 1.060-0.86 1.92-1.92 1.92z"></path>\n<path d="M30.372 5.161l-14.134 11.654c-0.171 0.141-0.496 0.141-0.667-0l-14.203-11.712c-0.273-0.225-0.676-0.186-0.901 0.087s-0.186 0.676 0.087 0.901l14.204 11.712c0.644 0.531 1.652 0.531 2.295 0l14.135-11.655c0.273-0.225 0.311-0.628 0.087-0.901s-0.628-0.311-0.901-0.087z"></path>\n<path d="M12.983 15.52l-12.29 10.076c-0.273 0.224-0.313 0.627-0.089 0.901s0.627 0.313 0.901 0.089l12.29-10.076c0.273-0.224 0.313-0.627 0.089-0.901s-0.627-0.313-0.901-0.089zM31.629 25.753l-12.419-10.181c-0.273-0.224-0.677-0.184-0.901 0.089s-0.184 0.677 0.089 0.901l12.419 10.181c0.273 0.224 0.677 0.184 0.901-0.089s0.184-0.677-0.089-0.901z"></path>\n          </svg>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>`}e(t.exports,"getTeamCard",(function(){return n}))})),a.register("UL92Z",(function(e,t){var i=a("cdQSu");document.querySelector(".modal-form-watched-bnt"),document.querySelector(".modal-form-queue-bnt"),new(0,i.default)}))}();
//# sourceMappingURL=library.ca4f480d.js.map
