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
            d: "M20.12 14.46L21.54 15.88L19.41 18L21.54 20.12L20.12 21.54L18 19.41L15.88 21.54L14.47 20.12L16.59 18L14.47 15.88L15.88 14.47L18 16.59L20.12 14.46M20.33 4.67L18.67 3L17 4.67L15.33 3L13.67 4.67L12 3L10.33 4.67L8.67 3L7 4.67L5.33 3L3.67 4.67L2 3V19C2 20.11 2.9 21 4 21H12.8C12.29 20.12 12 19.09 12 18C12 16.77 12.37 15.63 13 14.68V13H14.68C15.63 12.37 16.77 12 18 12C19.53 12 20.93 12.58 22 13.5V3L20.33 4.67M11 19H4V13H11V19M20 11H4V8H20V11Z",
        })
    ]))
}
