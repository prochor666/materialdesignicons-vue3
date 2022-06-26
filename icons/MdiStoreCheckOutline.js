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
            d: "M19 13C19.7 13 20.37 13.13 21 13.35V12L20 7H4L3 12V14H4V20H13.09C13.04 19.67 13 19.34 13 19C13 17.77 13.37 16.64 14 15.69V14H15.69C16.64 13.37 17.77 13 19 13M12 18H6V14H12V18M5.04 12L5.64 9H18.36L18.96 12H5.04M20 6H4V4H20V6M22.5 17.25L17.75 22L15 19L16.16 17.84L17.75 19.43L21.34 15.84L22.5 17.25",
        })
    ]))
}
