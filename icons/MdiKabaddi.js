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
            d: "M11.2 10.6C12.2 11.6 13.4 12.1 14.8 12.1L14.9 14.2C13 14.2 11.3 13.5 9.8 12.1L9.1 11.4L6.8 13.8L9 15.9V21.9H7V16.7L5.7 15.5V17.7L1.5 22L.1 20.6L3.7 17L2.5 13.5C2.3 12.9 2.6 12.4 3.1 12L6.4 8.7C6.8 8.2 7.3 8 7.8 8C8.3 8 8.6 8.1 8.9 8.3L11.2 10.6M24 11.9H22V8.5L20.2 7.8L21.1 12.2L22.1 17.4L23 21.8H20.9L19.1 13.8L17 15.8V21.8H15V14.3L17.1 12.3L16.5 9.3C15.9 9.9 15.2 10.5 14.4 10.9C13.5 10.8 12.6 10.4 11.9 9.7C13.5 9.4 14.6 8.6 15.3 7.4L16.3 5.8C16.9 4.8 17.8 4.5 18.9 5L24 7.2V11.9M11.4 4.4C12.5 4.4 13.4 5.3 13.4 6.4C13.4 7.5 12.5 8.4 11.4 8.4C10.3 8.4 9.4 7.5 9.4 6.4C9.4 5.3 10.3 4.4 11.4 4.4M16.5 .3C17.6 .3 18.5 1.2 18.5 2.3C18.5 3.4 17.6 4.3 16.5 4.3C15.4 4.3 14.5 3.4 14.5 2.3C14.5 1.2 15.4 .3 16.5 .3Z",
        })
    ]))
}
