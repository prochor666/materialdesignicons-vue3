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
            d: "M10 2C12.6 2 15.2 3.1 17.1 4.9L15.7 6.3C14.1 4.8 12.1 4 10 4S5.8 4.8 4.3 6.3L2.9 4.9C4.8 3.1 7.4 2 10 2M1.7 6.5L3.2 7.9C2.4 9.2 2 10.6 2 12C2 16.4 5.6 20 10 20S18 16.4 18 12C18 10.6 17.6 9.2 16.9 7.9L18.4 6.5C19.4 8.1 20 10 20 12C20 17.5 15.5 22 10 22S0 17.5 0 12C0 10 .6 8.1 1.7 6.5M10 6C13.3 6 16 8.7 16 12C16 13.6 15.4 15.1 14.2 16.2L12.8 14.8C12.1 15.6 11.1 16 10 16S7.9 15.6 7.2 14.8L5.8 16.2C4.6 15.1 4 13.6 4 12C4 8.7 6.7 6 10 6M10 8C9.4 8 9 8.4 9 9S9.4 10 10 10 11 9.6 11 9 10.6 8 10 8M22 12V7H24V13H22M22 17V15H24V17H22Z",
        })
    ]))
}
