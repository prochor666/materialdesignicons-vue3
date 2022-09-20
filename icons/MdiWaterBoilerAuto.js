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
            d: "M4 2C2.89 2 2 2.89 2 4V16C2 17.11 2.89 18 4 18H5V20H2V22H5C6.11 22 7 21.11 7 20V18H9V20C9 21.11 9.89 22 11 22H13L13.75 20H11V18H12C13.11 18 14 17.11 14 16V4C14 2.89 13.11 2 12 2H4M8 4.97C9.11 4.97 10 5.87 10 6.97S9.11 8.97 8 8.97C6.9 8.97 6 8.07 6 6.97C6 5.87 6.9 4.97 8 4.97M6 14.5H10V16H6V14.5M19.8 13H17.8L14.6 22H16.5L17.2 20H20.4L21.1 22H23L19.8 13M17.6 18.7L18.8 15L20 18.7H17.6Z",
        })
    ]))
}
