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
            d: "M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V13.03C21.5,12.23 20.8,11.54 20,11V8H4V19H10.5C10.81,19.75 11.26,20.42 11.81,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14M20.31,18.9L23.39,22L22,23.39L18.88,20.32C18.19,20.75 17.37,21 16.5,21C14,21 12,19 12,16.5C12,14 14,12 16.5,12C19,12 21,14 21,16.5C21,17.38 20.75,18.21 20.31,18.9M16.5,19A2.5,2.5 0 0,0 19,16.5A2.5,2.5 0 0,0 16.5,14A2.5,2.5 0 0,0 14,16.5A2.5,2.5 0 0,0 16.5,19Z",
        })
    ]))
}
