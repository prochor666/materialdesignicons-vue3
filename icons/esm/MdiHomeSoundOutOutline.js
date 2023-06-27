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
            d: "M2.4038 7.01172C2.47451 4.39542 4.45441 2.41552 7 2.41552V1.00131C3.53517 0.9306 0.848167 3.61761 0.989589 7.01172L2.4038 7.01172Z M7 5.38537V3.97116C5.23223 4.04187 3.95944 5.31466 3.95944 7.01172H5.37365C5.51507 6.16319 6.15147 5.52679 7 5.38537Z M17 2.41552C19.5456 2.41552 21.5255 4.39542 21.5962 7.01172L23.0104 7.01172C23.1518 3.61761 20.4648 0.9306 17 1.00131V2.41552Z M17 3.97116V5.38537C17.8485 5.52679 18.4849 6.16319 18.6263 7.01172H20.0406C20.0406 5.31466 18.7678 4.04187 17 3.97116Z M19 20V12H22L12 3L2 12H5V20H19ZM12 5.7L17 10.2V18H7V10.2L12 5.7Z",
        })
    ]))
}
