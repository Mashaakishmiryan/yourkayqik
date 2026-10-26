// Shared helpers that fill an example page from its DATA (see data/<example>.js)

// Escape text before putting it into HTML
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// Read a value like "clinic.address" from an object
const get = (obj, path) => path.split(".").reduce((o, k) => (o == null ? o : o[k]), obj);

// <p data-text="name"> gets DATA.name as text, <a data-href="mapLink"> gets it as link
function bindData(data) {
  document.querySelectorAll("[data-text]").forEach((el) => {
    const v = get(data, el.dataset.text);
    if (v != null) el.textContent = v;
  });
  document.querySelectorAll("[data-href]").forEach((el) => {
    const v = get(data, el.dataset.href);
    if (v != null) el.href = v;
  });
}

// Render a list into a container
function fill(selector, items, template) {
  document.querySelector(selector).innerHTML = items.map(template).join("");
}

const waLink = (number, text) => `https://wa.me/${number}${text ? "?text=" + encodeURIComponent(text) : ""}`;
const telLink = (phone) => "tel:" + phone.replace(/[^\d+]/g, "");
const mapLink = (query) => "https://maps.google.com/?q=" + encodeURIComponent(query);
