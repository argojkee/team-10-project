(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){["data-first-modal","data-second-modal","data-third-modal"].forEach(o=>{const l=o+"-open",r=o+"-close",e=document.querySelectorAll(`[${l}]`),t=document.querySelectorAll(`[${r}]`),n=document.querySelector(`[${o}]`);if(n||c("Can`t find Modal with attribute "+n),e.length===0&&c("Can`t find Open modal button with attribute "+l),t.length===0&&c("Can`t find Close modal button with attribute "+r),!n||e.length===0||t.length===0)return;e.forEach(s=>s.addEventListener("click",d)),t.forEach(s=>s.addEventListener("click",d));function d(){document.body.classList.toggle("modal-open"),n.classList.toggle("is-hidden")}})},!1);function c(i){const o="color: #bada55";console.log("%c"+i,o)}new Swiper(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination"},slidesPerView:"auto"});
