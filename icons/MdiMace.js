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
            d: "M19.92 9.27C19.97 9 20 8.76 20 8.5S19.97 8 19.92 7.73L23 8.5L19.92 9.27M14.69 12.92L15.5 16.16L16.31 12.92C16.05 12.97 15.78 13 15.5 13S14.95 12.97 14.69 12.92M11.7 10.89L6.79 15.79L6.09 15.09L1 20.17L3.83 23L8.91 17.91L8.21 17.21L13.11 12.3C12.54 11.94 12.06 11.46 11.7 10.89M16.27 4.08L15.5 1L14.73 4.08C15 4.03 15.24 4 15.5 4S16 4.03 16.27 4.08M8 8.5L11.08 9.27C11.03 9 11 8.76 11 8.5S11.03 8 11.08 7.73L8 8.5M18.63 10.04C18.86 9.58 19 9.06 19 8.5S18.86 7.42 18.63 6.96L21 3L17.04 5.37C16.58 5.14 16.06 5 15.5 5S14.42 5.14 13.96 5.37L10 3L12.37 6.96C12.14 7.42 12 7.94 12 8.5C12 10.43 13.57 12 15.5 12C16.06 12 16.58 11.86 17.04 11.63L21 14L18.63 10.04Z",
        })
    ]))
}
