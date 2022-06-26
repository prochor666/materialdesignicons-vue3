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
            d: "M13 4H11V2H5V4H3C2.4 4 2 4.4 2 5V21C2 21.6 2.4 22 3 22H13C13.6 22 14 21.6 14 21V5C14 4.4 13.6 4 13 4M9 18H7V16H9V18M9 14H7V8H9V14M20.1 4.9L18.7 6.3C21.8 9.4 21.8 14.5 18.7 17.6L20.1 19C24 15.2 24 8.8 20.1 4.9M17.2 7.8L15.8 9.2C17.4 10.8 17.4 13.3 15.8 14.9L17.2 16.3C19.6 13.9 19.6 10.1 17.2 7.8Z",
        })
    ]))
}
