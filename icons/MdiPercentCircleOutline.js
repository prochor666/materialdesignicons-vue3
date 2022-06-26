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
            d: "M17 15.22C17 16.2 16.2 17 15.22 17C14.24 17 13.45 16.2 13.45 15.22C13.45 14.24 14.24 13.45 15.22 13.45C16.2 13.45 17 14.24 17 15.22M8.83 10.6C9.81 10.6 10.6 9.81 10.6 8.83C10.6 7.84 9.81 7.05 8.83 7.05C7.84 7.05 7.05 7.84 7.05 8.83C7.05 9.81 7.84 10.6 8.83 10.6M7 15.53L8.5 17.03L17.03 8.5L15.53 7L7 15.53M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12M20 12C20 7.59 16.41 4 12 4C7.59 4 4 7.59 4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12Z",
        })
    ]))
}
