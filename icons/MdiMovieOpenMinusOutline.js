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
            d: "M13.09 20C13.21 20.72 13.46 21.39 13.81 22H4C2.9 22 2 21.11 2 20V10H22V13.81C21.39 13.46 20.72 13.22 20 13.09V12H4V20H13.09M21.62 6.1L20.84 2.18L16.91 2.96L19.65 6.5L21.62 6.1M16.71 7.07L13.97 3.54L12 3.93L14.75 7.46L16.71 7.07M4.16 5.5L3.18 5.69C2.1 5.9 1.39 6.96 1.61 8.04L2 10L6.9 9.03L4.16 5.5M11.81 8.05L9.07 4.5L7.1 4.91L9.85 8.44L11.81 8.05M15 18V20H23V18H15Z",
        })
    ]))
}
