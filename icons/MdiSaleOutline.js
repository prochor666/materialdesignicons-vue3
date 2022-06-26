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
            d: "M9.5 7C10.33 7 11 7.67 11 8.5C11 9.33 10.33 10 9.5 10C8.67 10 8 9.33 8 8.5C8 7.67 8.67 7 9.5 7M14.5 14C15.33 14 16 14.67 16 15.5C16 16.33 15.33 17 14.5 17C13.67 17 13 16.33 13 15.5C13 14.67 13.67 14 14.5 14M8.41 17L7 15.59L15.59 7L17 8.41L8.41 17M18.65 2.85L19.26 6.71L22.77 8.5L21 12L22.78 15.5L19.24 17.29L18.63 21.15L14.74 20.54L11.97 23.31L9.19 20.5L5.33 21.14L4.71 17.25L1.22 15.47L3 11.97L1.23 8.5L4.74 6.69L5.35 2.87L9.22 3.5L12 .695L14.76 3.46L18.65 2.85M20.1 9.37L17.5 8L17 5.11L14.1 5.53L12 3.5L9.9 5.53L7 5.11L6.5 8L3.9 9.37L5.2 12L3.9 14.63L6.5 16L7 18.89L9.9 18.47L12 20.5L14.1 18.47L17 18.89L17.5 16L20.1 14.63L18.8 12L20.1 9.37Z",
        })
    ]))
}
