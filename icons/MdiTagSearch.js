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
            d: "M21.41 11.58L12.41 2.58C12.05 2.22 11.55 2 11 2H4C2.89 2 2 2.89 2 4V11C2 11.55 2.22 12.05 2.59 12.41L11.58 21.41C11.95 21.77 12.45 22 13 22S14.05 21.77 14.41 21.41L14.83 21C11.6 20.9 9 18.26 9 15C9 11.69 11.69 9 15 9C18.26 9 20.9 11.6 21 14.83L21.41 14.41C21.78 14.05 22 13.55 22 13C22 12.44 21.77 11.94 21.41 11.58M5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7M15.11 10.61C17.61 10.61 19.61 12.61 19.61 15.11C19.61 16 19.36 16.82 18.92 17.5L22 20.61L20.61 22L17.5 18.93C16.8 19.36 16 19.61 15.11 19.61C12.61 19.61 10.61 17.61 10.61 15.11S12.61 10.61 15.11 10.61M15.11 12.61C13.73 12.61 12.61 13.73 12.61 15.11S13.73 17.61 15.11 17.61 17.61 16.5 17.61 15.11 16.5 12.61 15.11 12.61",
        })
    ]))
}
