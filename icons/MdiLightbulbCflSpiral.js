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
            d: "M11 2C10.84 2 10.69 2.03 10.55 2.1L8.55 3.1C7.56 3.66 8 5 9 5C9.16 5 9.32 4.95 9.45 4.9L11.45 3.9C12.43 3.36 12 2 11 2M15 4C14.83 4 14.69 4.03 14.55 4.1L8.55 7.1C7.56 7.68 8 9 9 9C9.18 9 9.32 8.95 9.45 8.9L15.45 5.9C16.41 5.43 16 4 15 4M15 8C14.84 8 14.69 8.03 14.55 8.1L8.7 11.03C8.2 11.25 8 11.6 8 12V14H7V17C7 17.55 7.44 18 8 18H16C16.55 18 17 17.55 17 17V14H16V13C16 12.44 15.55 12 15 12C14.45 12 14 12.45 14 13V14H10V12.62L15.45 9.9C16.42 9.34 16 8 15 8M9 20V21C9 21.57 9.46 22 10 22H14C14.56 22 15 21.55 15 21V20",
        })
    ]))
}
