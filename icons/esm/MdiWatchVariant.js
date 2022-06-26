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
            d: "M8,0L7.17,5H7A2,2 0 0,0 5,7V17C5,18.11 5.9,19 7,19H7.17L8,24H16L16.83,19H17A2,2 0 0,0 19,17V7C19,5.89 18.1,5 17,5H16.83L16,0H8M7,7H17V17H7V7Z",
        })
    ]))
}
