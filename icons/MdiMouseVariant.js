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
            d: "M14,7H10V2.1C12.28,2.56 14,4.58 14,7M4,7C4,4.58 5.72,2.56 8,2.1V7H4M14,12C14,14.42 12.28,16.44 10,16.9V18A3,3 0 0,0 13,21A3,3 0 0,0 16,18V13A4,4 0 0,1 20,9H22L21,10L22,11H20A2,2 0 0,0 18,13H18V18A5,5 0 0,1 13,23A5,5 0 0,1 8,18V16.9C5.72,16.44 4,14.42 4,12V9H14V12Z",
        })
    ]))
}
