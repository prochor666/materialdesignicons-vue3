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
            d: "M15.4 14.21C14.47 14.91 13.75 15.88 13.35 17H6.5L9.25 13.47L11.21 15.83L13.96 12.29L15.4 14.21M5 19V5H19V13C19.7 13 20.37 13.13 21 13.35V5C21 3.9 20.11 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H13.35C13.13 20.37 13 19.7 13 19H5M15 18V20H23V18H15Z",
        })
    ]))
}
