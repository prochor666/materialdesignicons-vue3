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
            d: "M22 2V4C20.26 4 19 8.58 17.96 12.27C16.57 17.27 15.26 22 12 22C8.74 22 7.43 17.27 6.04 12.27C5 8.58 3.74 4 2 4V2C5.26 2 6.57 6.73 7.96 11.73C9 15.42 10.26 20 12 20C13.74 20 15 15.42 16.04 11.73C17.43 6.73 18.74 2 22 2Z",
        })
    ]))
}
