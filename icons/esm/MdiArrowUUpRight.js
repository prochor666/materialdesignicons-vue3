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
            d: "M21.5 9.5L20.09 10.92L17 7.83V13.5C17 17.09 14.09 20 10.5 20S4 17.09 4 13.5V6H6V13.5C6 16 8 18 10.5 18S15 16 15 13.5V7.83L11.91 10.91L10.5 9.5L16 4L21.5 9.5Z",
        })
    ]))
}
