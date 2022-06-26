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
            d: "M7 4H9V6H8V7H6V5C6 4.45 6.45 4 7 4M19 4C19.55 4 20 4.45 20 5V7H18V6H17V4H19M11 6V4H15V6H11M7 18C6.45 18 6 17.55 6 17V15H8V16H9V18H7M6 9H8V13H6V9M3 8H4V20H14.58L16.03 22L3 22C2.45 22 2 21.55 2 21V9C2 8.45 2.45 8 3 8M18.5 12C20.4 12 22 13.6 22 15.5C22 18.1 18.5 22 18.5 22C18.5 22 15 18.1 15 15.5C15 13.6 16.6 12 18.5 12M18.5 16.8C19.2 16.8 19.8 16.2 19.7 15.6C19.7 15 19.1 14.4 18.5 14.4C17.9 14.4 17.3 14.9 17.3 15.6C17.3 16.2 17.8 16.8 18.5 16.8M11 18V16H13C13.09 16.66 13.27 17.33 13.5 18H11M20 9V10.23C19.5 10.08 19 10 18.5 10L18 10.03V9H20Z",
        })
    ]))
}
