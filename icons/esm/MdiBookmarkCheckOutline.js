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
            "clip-rule": "evenodd"
            d: "M9.47 9.65L8.06 11.07L11 14L16.19 8.82L14.78 7.4L11 11.18M17 3H7C5.9 3 5 3.9 5 5L5 21L12 18L19 21V5C19 3.9 18.1 3 17 3M17 18L12 15.82L7 18V5H17Z",
        })
    ]))
}
