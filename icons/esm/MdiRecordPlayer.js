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
            d: "M5,17.5A0.5,0.5 0 0,1 4.5,18H3.5A0.5,0.5 0 0,1 3,17.5V17H2A1,1 0 0,1 1,16V13A1,1 0 0,1 2,12H19V10H7L6,11V9A1,1 0 0,1 7,8H19V7H21V8A1,1 0 0,1 22,9V10H21V12H22A1,1 0 0,1 23,13V16A1,1 0 0,1 22,17H21V17.5A0.5,0.5 0 0,1 20.5,18H19.5A0.5,0.5 0 0,1 19,17.5V17H5V17.5M3,14V15H5V14H3M6,14V15H8V14H6M20.5,13.5A1,1 0 0,0 19.5,14.5A1,1 0 0,0 20.5,15.5A1,1 0 0,0 21.5,14.5A1,1 0 0,0 20.5,13.5Z",
        })
    ]))
}
