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
            d: "M17 5L21 9L17 13V5M16 8H13V10H16V8M12 10V8H10V10H12M3 15L7 11V19L3 15M8 16H11V14H8V16M12 14V16H14V14H12Z",
        })
    ]))
}
