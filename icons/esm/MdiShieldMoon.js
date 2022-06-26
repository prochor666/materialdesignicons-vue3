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
            d: "M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1M15.97 14.41C14.13 16.58 10.76 16.5 9 14.34C6.82 11.62 8.36 7.62 11.7 7C12.04 6.95 12.33 7.28 12.21 7.61C11.75 8.84 11.82 10.25 12.53 11.47C13.24 12.69 14.42 13.46 15.71 13.67C16.05 13.72 16.2 14.14 15.97 14.41Z",
        })
    ]))
}
