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
            d: "M3 4C1.9 4 1 4.9 1 6V17H3C3 18.7 4.3 20 6 20S9 18.7 9 17H15C15 18.7 16.3 20 18 20S21 18.7 21 17H23V12L20 8H17V4H3M8 6H10V10H8V6M17 9.5H19.5L21.5 12H17V9.5M8 12H10V14H8V12M6 15.5C6.8 15.5 7.5 16.2 7.5 17S6.8 18.5 6 18.5 4.5 17.8 4.5 17 5.2 15.5 6 15.5M18 15.5C18.8 15.5 19.5 16.2 19.5 17S18.8 18.5 18 18.5 16.5 17.8 16.5 17 17.2 15.5 18 15.5Z",
        })
    ]))
}
