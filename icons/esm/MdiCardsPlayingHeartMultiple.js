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
            d: "M3 4V22C3 23.1 3.9 24 5 24H17V22H5V4H3M19 0H9C7.9 0 7 .9 7 2V18C7 19.1 7.9 20 9 20H19C20.1 20 21 19.1 21 18V2C21 .9 20.1 0 19 0M14.6 13.8L14 14.3L13.4 13.8C11.4 11.9 10 10.7 10 9.2C10 8 11 7 12.2 7C12.9 7 13.6 7.3 14 7.8C14.4 7.3 15.1 7 15.8 7C17 7 18 7.9 18 9.2C18 10.7 16.6 11.9 14.6 13.8Z",
        })
    ]))
}
