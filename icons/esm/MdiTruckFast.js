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
            d: "M3,13.5L2.25,12H7.5L6.9,10.5H2L1.25,9H9.05L8.45,7.5H1.11L0.25,6H4A2,2 0 0,1 6,4H18V8H21L24,12V17H22A3,3 0 0,1 19,20A3,3 0 0,1 16,17H12A3,3 0 0,1 9,20A3,3 0 0,1 6,17H4V13.5H3M19,18.5A1.5,1.5 0 0,0 20.5,17A1.5,1.5 0 0,0 19,15.5A1.5,1.5 0 0,0 17.5,17A1.5,1.5 0 0,0 19,18.5M20.5,9.5H18V12H22.46L20.5,9.5M9,18.5A1.5,1.5 0 0,0 10.5,17A1.5,1.5 0 0,0 9,15.5A1.5,1.5 0 0,0 7.5,17A1.5,1.5 0 0,0 9,18.5Z",
        })
    ]))
}
