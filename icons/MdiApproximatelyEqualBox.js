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
            d: "M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M9.3 8.2C10.6 8.2 11.4 8.7 12.1 9C12.7 9.3 13.4 9.7 14.5 9.7C15.5 9.7 16.5 9 17 8.5L17.8 9.8C17.1 10.6 15.8 11.4 14.4 11.4C13.1 11.4 12.3 10.9 11.7 10.6C11.1 10.3 10.3 9.9 9.2 9.9C8.2 9.9 7.2 10.6 6.7 11.1L6 9.8C6.7 9 8 8.2 9.3 8.2M14.6 15.8C13.3 15.8 12.5 15.3 11.8 15C11.2 14.7 10.4 14.3 9.3 14.3C8.3 14.3 7.3 15 6.8 15.5L6 14.1C6.7 13.3 8 12.5 9.3 12.5C10.6 12.5 11.4 13 12.1 13.3C12.7 13.6 13.4 14 14.6 14C15.6 14 16.6 13.3 17.1 12.8L17.9 14.1C17.3 15 16 15.8 14.6 15.8Z",
        })
    ]))
}