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
            d: "M22 9.85L19.14 7H18.64V10.79L16.35 8.5L15.64 9.21L18.43 12L15.64 14.79L16.35 15.5L18.64 13.21V17H19.14L22 14.15L19.85 12L22 9.85M19.64 8.91L20.58 9.85L19.64 10.79V8.91M20.58 14.15L19.64 15.09V13.21L20.58 14.15M1.96 3L.687 4.27L9.69 13.27V13.55C9.1 13.21 8.42 13 7.69 13C5.5 13 3.69 14.79 3.69 17S5.5 21 7.69 21 11.69 19.21 11.69 17V15.27L17.42 21L18.69 19.73L1.96 3M11.69 7H15.69V3H9.69V8.18L11.69 10.18V7Z",
        })
    ]))
}
