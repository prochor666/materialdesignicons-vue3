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
            d: "M8.17 2.76C9.39 2.26 10.69 2 12 2C13.31 2 14.61 2.26 15.83 2.76C17.04 3.26 18.14 4 19.07 4.93C20 5.86 20.74 6.96 21.24 8.17C21.74 9.39 22 10.69 22 12C22 14.65 20.95 17.2 19.07 19.07C17.2 20.95 14.65 22 12 22C10.69 22 9.39 21.74 8.17 21.24C6.96 20.74 5.86 20 4.93 19.07C3.05 17.2 2 14.65 2 12C2 9.35 3.05 6.8 4.93 4.93C5.86 4 6.96 3.26 8.17 2.76M10 16H11V14H10C9.67 14 8 13.9 8 12C8 10.17 9.54 10 10 10H11V8H10C8.39 8 6 9.07 6 12C6 14.94 8.39 16 10 16M13 16H14C15.61 16 18 14.94 18 12C18 9.07 15.61 8 14 8H13V10H14C14.33 10 16 10.1 16 12C16 13.83 14.46 14 14 14H13V16M9 13H15V11H9V13Z",
        })
    ]))
}
