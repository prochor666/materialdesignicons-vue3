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
            d: "M10.5 16.5C10.5 15.68 11.17 15 12 15C12.83 15 13.5 15.68 13.5 16.5C13.5 17.34 12.83 18 12 18C11.17 18 10.5 17.34 10.5 16.5M10.5 7.5C10.5 6.67 11.17 6 12 6C12.83 6 13.5 6.67 13.5 7.5C13.5 8.33 12.83 9 12 9C11.17 9 10.5 8.33 10.5 7.5M4.22 2H19.78C21 2 22 3 22 4.22V19.78C22 21 21 22 19.78 22H4.22C3 22 2 21 2 19.78V4.22C2 3 3 2 4.22 2M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4M10.5 12C10.5 11.17 11.17 10.5 12 10.5C12.83 10.5 13.5 11.17 13.5 12C13.5 12.83 12.83 13.5 12 13.5C11.17 13.5 10.5 12.83 10.5 12Z",
        })
    ]))
}
