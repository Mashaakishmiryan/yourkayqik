// Small YourKayqik badge shown on every example site
(function () {
  const css = `
    .yk-badge{position:fixed;left:50%;bottom:16px;transform:translateX(-50%);z-index:9999;
      display:flex;align-items:center;gap:10px;padding:8px 8px 8px 14px;border-radius:999px;
      background:#2B2A5C;color:#fff;font:700 13px/1.2 Nunito,system-ui,sans-serif;
      box-shadow:0 8px 24px rgba(0,0,0,.25);white-space:nowrap;transition:transform .3s,opacity .3s}
    .yk-badge a{color:inherit;text-decoration:none}
    .yk-badge__order{background:#FF8A6B;color:#2B2A5C!important;padding:7px 14px;border-radius:999px}
    .yk-badge__close{background:none;border:0;color:#fff;opacity:.6;font-size:16px;cursor:pointer;padding:0 6px}
    .yk-badge.is-hidden{opacity:0;transform:translate(-50%,120%);pointer-events:none}
    @media print{.yk-badge{display:none}}
    @media (max-width:420px){.yk-badge__label{display:none}}`;
  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  const badge = document.createElement("div");
  badge.className = "yk-badge";
  badge.innerHTML = `
    <a href="../index.html#examples">♥ <span class="yk-badge__label">Example by </span>yourkayqik</a>
    <a class="yk-badge__order" href="../index.html#contact">Order a site like this</a>
    <button class="yk-badge__close" aria-label="Hide">×</button>`;
  badge.querySelector(".yk-badge__close").onclick = () => badge.classList.add("is-hidden");
  document.addEventListener("DOMContentLoaded", () => document.body.appendChild(badge));
})();
