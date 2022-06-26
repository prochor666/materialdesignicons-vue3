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
            d: "M13.33 12.67L7.66 7L6.13 5.47L2.39 1.73L1.11 3L3 4.89V5L11 13V19H6V21H18V19.89L20.84 22.73L22.11 21.46L13.33 12.67M13 19V14.89L17.11 19H13M8.2 5L6.2 3H21V5L14.6 11.4L10.2 7H16.5L18.5 5H8.2Z",
        })
    ]))
}
