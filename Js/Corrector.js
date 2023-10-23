!function() {
    function e(e) {
        e && e.detail && e.detail.code && (e.stopImmediatePropagation(),
        function(e) {
            const t = document.createElement("script")
              , n = document.querySelector("link[nonce], style[nonce], script[nonce]");
            n && n.nonce && t.setAttribute("nonce", n.nonce),
            t.innerText = e,
            (document.head || document.documentElement).append(t),
            t.remove()
        }(e.detail.code))
    }
    function t(e) {
        document.querySelectorAll("lt-mirror:not([data-lt-linked]), lt-highlighter:not([data-lt-linked])").forEach((e=>{
            if (!e.nextElementSibling || !e.nextElementSibling.hasAttribute("data-lt-tmp-id"))
                return;
            const t = e.nextElementSibling;
            e.setAttribute("data-lt-linked", "1"),
            ["selectionStart", "selectionEnd", "value", "textContent", "innerHTML", "innerText", "required", "maxLength", "disabled", "readOnly", "contentEditable", "isContentEditable"].forEach((n=>{
                try {
                    Object.defineProperty(e, n, {
                        get: ()=>t[n],
                        set: e=>{
                            t[n] = e
                        }
                    })
                } catch (e) {}
            }
            ))
        }
        ))
    }
    document.addEventListener("lt-execute-link-properties", t),
    document.addEventListener("lt-execute-code", e),
    document.addEventListener("lt-execute-destroy", (function n() {
        document.removeEventListener("lt-execute-destroy", n),
        document.removeEventListener("lt-execute-link-properties", t),
        document.removeEventListener("lt-execute-code", e)
    }
    ))
}();