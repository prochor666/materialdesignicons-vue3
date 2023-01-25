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
            d: "M15.4 16C15.1 16 14.8 15.7 14.8 15.4C14.8 15.1 15.1 14.8 15.4 14.8C15.7 14.8 16 15.1 16 15.4C16 15.7 15.7 16 15.4 16M21.8 17.8L18.2 14.2C18 14.1 17.8 14 17.6 14H14.8C14.4 14 14 14.4 14 14.8V17.6C14 17.8 14.1 18 14.2 18.2L17.8 21.8C17.9 21.9 18.1 22 18.4 22S18.8 21.9 19 21.8L21.8 19C21.9 18.9 22 18.7 22 18.4C22 18.2 21.9 18 21.8 17.8M10 4C7.8 4 6 5.8 6 8S7.8 12 10 12 14 10.2 14 8 12.2 4 10 4M10 6C11.1 6 12 6.9 12 8S11.1 10 10 10 8 9.1 8 8 8.9 6 10 6M10 13C7.3 13 2 14.3 2 17V20H13.2L12.8 19.6C12.4 19.2 12.1 18.7 12 18.1H3.9V17C3.9 16.4 7 14.9 10 14.9C10.7 14.9 11.4 15 12 15.1V14.8C12 14.2 12.2 13.7 12.5 13.3C11.6 13.1 10.7 13 10 13Z",
        })
    ]))
}
