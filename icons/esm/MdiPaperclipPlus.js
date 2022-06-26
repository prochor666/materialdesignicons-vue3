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
            d: "M18 13.09C17.47 13.18 16.97 13.34 16.5 13.55V6H18V13.09M12.5 21.5C10.29 21.5 8.5 19.71 8.5 17.5V5C8.5 3.62 9.62 2.5 11 2.5S13.5 3.62 13.5 5V15.5C13.5 16.05 13.05 16.5 12.5 16.5S11.5 16.05 11.5 15.5V6H10V15.5C10 16.88 11.12 18 12.5 18C12.71 18 12.91 17.97 13.1 17.92C13.35 16.58 14.03 15.41 15 14.54V5C15 2.79 13.21 1 11 1S7 2.79 7 5V17.5C7 20.54 9.46 23 12.5 23C13.13 23 13.73 22.89 14.29 22.7C13.97 22.29 13.7 21.84 13.5 21.36C13.17 21.44 12.84 21.5 12.5 21.5M20 18V15H18V18H15V20H18V23H20V20H23V18H20Z",
        })
    ]))
}