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
            d: "M6 3C5.5 3 5.1 3.2 4.8 3.6L3.5 5.2C3.2 5.6 3 6 3 6.5V19C3 20.1 3.9 21 5 21H13.3C13.1 20.4 13 19.7 13 19C13 15.7 15.7 13 19 13C19.7 13 20.4 13.1 21 13.3V6.5C21 6 20.8 5.6 20.5 5.2L19.1 3.5C18.9 3.2 18.5 3 18 3H6M5.9 4H17.9L18.8 5H5.1L5.9 4M6 15H12V18H6V15M21.3 15.8L17.7 19.4L16.1 17.8L15 19L17.8 22L22.6 17.2L21.3 15.8Z",
        })
    ]))
}
