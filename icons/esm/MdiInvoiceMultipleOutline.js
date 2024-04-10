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
            d: "M2 2V17H4V4H17V2H2M18.5 20.32L21 22V6H6V22L8.5 20.32L11 22L13.5 20.32L16 22L18.5 20.32M19 8V17.57L16 19.59L13.5 17.9L11 19.59L8 17.57V8H19Z",
        })
    ]))
}
