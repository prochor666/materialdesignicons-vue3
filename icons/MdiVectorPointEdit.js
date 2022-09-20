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
            d: "M9 9V15H15V9H9M11 11H13V13H11V11M21.2 13C21.1 13 20.9 13.1 20.8 13.2L19.8 14.2L21.9 16.3L22.9 15.3C23.1 15.1 23.1 14.7 22.9 14.5L21.6 13.2C21.4 13.1 21.3 13 21.2 13M19.1 14.8L13 20.9V23H15.1L21.2 16.8L19.1 14.8Z",
        })
    ]))
}
