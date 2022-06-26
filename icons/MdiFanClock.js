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
            d: "M16 14H17.5V16.8L19.9 18.2L19.1 19.5L16 17.7V14M21 11.3C20.8 7.9 17 7.2 13.3 9.2C13 8.8 12.6 8.5 12.1 8.3C12.3 7.4 12.7 6.3 13.7 5.8C16.1 4.6 16 1 11.5 1C7.9 1 7.2 5 9.1 8.7C8.7 9 8.4 9.4 8.2 9.9C7.3 9.7 6.2 9.3 5.7 8.3C4.6 5.9 1 6 1 10.5C1 14.1 5 14.8 8.7 12.9C9 13.3 9.5 13.6 9.9 13.8C9.7 14.7 9.3 15.8 8.3 16.3C5.9 17.4 6 21 10.5 21C10.8 21 11 21 11.2 20.9C12.5 22.8 14.6 24 17 24C20.9 24 24 20.9 24 17C24 14.6 22.8 12.5 21 11.3M11 10C11.6 10 12 10.4 12 11S11.6 12 11 12 10 11.6 10 11 10.4 10 11 10M17 22C14.2 22 12 19.8 12 17S14.2 12 17 12 22 14.2 22 17 19.8 22 17 22Z",
        })
    ]))
}
