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
            d: "M15,12.41L12,9.41L9,12.41L6,9.41L3.71,11.71L2.29,10.29L6,6.59L9,9.59L12,6.59L15,9.59L18,6.59L21.71,10.29L20.29,11.71L18,9.41L15,12.41M18,15.41L20.29,17.71L21.71,16.29L18,12.59L15,15.59L12,12.59L9,15.59L6,12.59L2.29,16.29L3.71,17.71L6,15.41L9,18.41L12,15.41L15,18.41L18,15.41Z",
        })
    ]))
}
