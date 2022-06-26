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
            d: "M2.38,1.73L1.11,3L5,6.89V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V20.89L20.84,22.73L22.11,21.46M17,19H7V8.89L17,18.89V19M17,5V13.8L19,15.8V3A2,2 0 0,0 17,1H7C6.28,1 5.6,1.37 5.24,2L8.24,5H17Z",
        })
    ]))
}
