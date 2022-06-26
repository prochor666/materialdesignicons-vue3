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
            d: "M14.12,8.46L19.78,14.12L14.12,19.78L8.46,14.12L4.22,18.36V4.22H18.36L14.12,8.46M6.34,13.41L8.46,11.29L14.12,16.95L16.95,14.12L11.29,8.47L13.41,6.34H6.34V13.41Z",
        })
    ]))
}
