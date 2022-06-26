const { createVNode: _createVNode, openBlock: _openBlock, createBlock: _createBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
    return (_openBlock(), _createBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true"
    }, [
    _createVNode("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M12 2C11.5 2 11 2.04 10.5 2.11V4.85C11 4.75 11.5 4.7 12 4.7C12.5 4.7 13 4.75 13.5 4.85V2.12C13 2.04 12.5 2 12 2M9.82 2.25C5.4 3.25 2.11 7.24 2.11 12C2.11 17.5 6.53 22 12 22C17.47 22 21.89 17.5 21.89 12C21.89 7.24 18.6 3.25 14.19 2.25V5.03C17.17 5.96 19.34 8.73 19.34 12C19.34 16 16.05 19.3 12 19.3C7.96 19.3 4.67 16 4.67 12C4.67 8.73 6.84 5.96 9.82 5.03M12 5.45C11.5 5.45 11 5.5 10.5 5.62V18.27C11 18.38 11.5 18.44 12 18.44C12.5 18.44 13 18.39 13.5 18.27V5.62C13 5.5 12.5 5.45 12 5.45Z",
        })
    ]))
}
