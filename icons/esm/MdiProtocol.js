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
            d: "M18 20H14L18 4H22M16 4H12L8 20H12M2 16.5A2.5 2.5 0 0 0 4.5 19A2.5 2.5 0 0 0 7 16.5A2.5 2.5 0 0 0 4.5 14A2.5 2.5 0 0 0 2 16.5M2 9.5A2.5 2.5 0 0 0 4.5 12A2.5 2.5 0 0 0 7 9.5A2.5 2.5 0 0 0 4.5 7A2.5 2.5 0 0 0 2 9.5Z",
        })
    ]))
}
