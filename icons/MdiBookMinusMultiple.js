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
            d: "M13.09 20H5V6H3V20C3 21.11 3.9 22 5 22H13.81C13.44 21.39 13.2 20.71 13.09 20M19 2H14V7L12 5.5L10 7V2H9C7.9 2 7 2.9 7 4V16C7 17.11 7.9 18 9 18H13.09C13.64 14.73 16.74 12.53 20 13.08C20.34 13.14 20.68 13.23 21 13.34V4C21 2.9 20.11 2 19 2M23 18V20H15V18H23Z",
        })
    ]))
}
