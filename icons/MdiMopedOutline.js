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
            d: "M19 7C19 5.9 18.11 5 17 5H14V7H17V9.65L13.5 14H10V9H6C3.79 9 2 10.79 2 13V16H4C4 17.66 5.34 19 7 19S10 17.66 10 16H14.5L19 10.35V7M7 17C6.45 17 6 16.55 6 16H8C8 16.55 7.55 17 7 17M8 14H4V13C4 11.9 4.9 11 6 11H8V14M19 13C17.34 13 16 14.34 16 16S17.34 19 19 19 22 17.66 22 16 20.66 13 19 13M19 17C18.45 17 18 16.55 18 16S18.45 15 19 15 20 15.45 20 16 19.55 17 19 17M10 8H5V6H10V8Z",
        })
    ]))
}
