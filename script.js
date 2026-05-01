function openTab(e, t) {
    const n = e.currentTarget.closest(".curriculum-container"),
        c = n.getElementsByClassName("tab-content"),
        l = n.getElementsByClassName("tab-link");
    for (let e = 0; e < c.length; e++) c[e].classList.remove("active");
    for (let e = 0; e < l.length; e++) l[e].classList.remove("active");
    document.getElementById(t).classList.add("active"), e.currentTarget.classList.add("active")
}
document.addEventListener("DOMContentLoaded", (() => {
    AOS.init({ duration: 800, once: !0 });
    const e = document.querySelector(".main-header");
    window.addEventListener("scroll", (() => {
        window.scrollY > 50 ? (e.style.padding = "8px 0", e.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)", e.style.background = "#fff") : (e.style.padding = "12px 0", e.style.boxShadow = "none", e.style.background = "rgba(255,255,255,0.9)")
    })), document.querySelectorAll('a[href^="#"]').forEach((e => {
        e.addEventListener("click", (function(e) {
            e.preventDefault();
            const t = this.getAttribute("href");
            if ("#" === t) return;
            const n = document.querySelector(t);
            if (n) {
                const e = n.getBoundingClientRect().top + window.pageYOffset - 80;
                window.scrollTo({ top: e, behavior: "smooth" }), document.querySelectorAll(".nav-links a").forEach((e => e.classList.remove("active"))), this.classList.add("active")
            }
        }))
    }));
    const t = document.getElementById("contact-form");
    t && t.addEventListener("submit", (e => {
        e.preventDefault();
        const n = t.querySelector("button");
        n.disabled = !0, n.innerHTML = "Sending...", setTimeout((() => {
            alert("Message sent!"), n.disabled = !1, n.innerHTML = "Send", t.reset()
        }), 1e3)
    }))
}));
