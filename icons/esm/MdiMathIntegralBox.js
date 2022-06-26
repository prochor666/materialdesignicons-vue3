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
            d: "M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M15.9 6.9C15.9 6.9 15.2 6.6 14.9 6.6C14.3 6.5 13.9 6.7 13.7 7.7L12 16.8C11.8 17.6 11.5 18.2 11 18.6C10.6 18.9 10.2 19 9.7 19C8.9 19 7.7 18.5 7.7 18.5L8.2 17.1C8.2 17.1 9 17.4 9.2 17.4C9.5 17.5 9.7 17.4 9.9 17.3C10.1 17.2 10.2 16.9 10.3 16.6L11.9 7.4C12 6.6 12.4 6 12.9 5.5C13.5 5.1 14.2 5 15 5.1C15.7 5.2 16.5 5.6 16.5 5.6L15.9 6.9Z",
        })
    ]))
}