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
            d: "M17,2A2,2 0 0,1 19,4V7A2,2 0 0,1 17,9V17C17,17.85 16.5,18.57 15.74,18.86L9.5,21.77C8.5,22.24 7.29,21.81 6.83,20.81L6,19C5.5,18 5.95,16.8 6.95,16.34L10,14.91V9A2,2 0 0,1 8,7V4A2,2 0 0,1 10,2H17M10,4V7H17V4H10Z",
        })
    ]))
}
