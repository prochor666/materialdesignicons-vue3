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
            d: "M14 1H10C5 1 5 3 5 3V15C5 15 5 17 10 17V19H11V20C11 21.21 11.8 23 14 23H18V21H14C13.19 21 13 20.45 13 20V19H14V17C19 17 19 15 19 15V3C19 3 19 1 14 1M17 12H14V11H17V12M17 5H14V6H17V8H14V9H17V10H7V3.5C7.3 3.32 8.13 3 10 3H14C15.88 3 16.7 3.32 17 3.5V5Z",
        })
    ]))
}
