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
            d: "M12,19H16L14,17H12V19M10,15V13H8V15H10M10,19V17H8V19H10M6,11V9H4V11H6M6,15V13H4V15H6M6,19V17H4V19H6M1.31,1.78L22.31,22.69L21,24L18,21H2V5L0.09,3.09L1.31,1.78M16,11H18V13H16V11M8,5V5.91L5.11,3H12V7H22V19.92L20,17.91V9H12V9.89L9.09,7H10V5H8Z",
        })
    ]))
}
