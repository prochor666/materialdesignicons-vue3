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
            d: "M4 2H16C17.11 2 18 2.9 18 4V20C18 21.11 17.11 22 16 22H4C2.9 22 2 21.11 2 20V4C2 2.9 2.9 2 4 2M5 4C4.45 4 4 4.45 4 5S4.45 6 5 6 6 5.55 6 5 5.55 4 5 4M8 4C7.45 4 7 4.45 7 5S7.45 6 8 6 9 5.55 9 5 8.55 4 8 4M10 8C6.69 8 4 10.69 4 14S6.69 20 10 20 16 17.31 16 14 13.31 8 10 8M6.11 10.5H8C7.76 11.88 8 12.67 8.58 13.29C9.68 14.36 10.16 15.71 9.89 17.5H8C8.24 16.12 8 15.33 7.42 14.71C6.32 13.64 5.85 12.29 6.11 10.5M10.11 10.5H12C11.76 11.88 12 12.67 12.58 13.29C13.68 14.36 14.16 15.71 13.89 17.5H12C12.24 16.12 12 15.33 11.42 14.71C10.32 13.64 9.85 12.29 10.11 10.5M20 15H22V17H20V15M20 7H22V13H20V7Z",
        })
    ]))
}
