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
            d: "M20,12H4A2,2 0 0,0 2,14V22H4V20H20V22H22V14A2,2 0 0,0 20,12M7,17A1,1 0 0,1 6,18A1,1 0 0,1 5,17V15A1,1 0 0,1 6,14A1,1 0 0,1 7,15V17M11,17A1,1 0 0,1 10,18A1,1 0 0,1 9,17V15A1,1 0 0,1 10,14A1,1 0 0,1 11,15V17M15,17A1,1 0 0,1 14,18A1,1 0 0,1 13,17V15A1,1 0 0,1 14,14A1,1 0 0,1 15,15V17M19,17A1,1 0 0,1 18,18A1,1 0 0,1 17,17V15A1,1 0 0,1 18,14A1,1 0 0,1 19,15V17Z",
        })
    ]))
}
