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
            d: "M4 11H11.07C10.39 12.18 10 13.54 10 15C10 16.46 10.39 17.82 11.07 19H6V20C6 20.27 5.9 20.5 5.71 20.71C5.5 20.9 5.27 21 5 21H4C3.74 21 3.5 20.9 3.29 20.71C3.11 20.5 3 20.27 3 20V18.22C2.39 17.67 2 16.88 2 16V6C2 2.5 5.58 2 10 2C14.42 2 18 2.5 18 6V7C17.31 7 16.64 7.09 16 7.25V6H4V11M5.5 17C5.9 17 6.28 16.84 6.56 16.56C6.84 16.28 7 15.9 7 15.5C7 15.1 6.84 14.72 6.56 14.44C6.28 14.16 5.9 14 5.5 14C5.1 14 4.72 14.16 4.44 14.44C4.16 14.72 4 15.1 4 15.5C4 15.9 4.16 16.28 4.44 16.56C4.72 16.84 5.1 17 5.5 17M15 20V21H21V20C21 19.45 20.55 19 20 19H19V14H21L23 12L21 10H13L15 12L13 14H17V19H16C15.45 19 15 19.45 15 20Z",
        })
    ]))
}
