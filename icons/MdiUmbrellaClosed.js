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
            d: "M12 2C11.6 2 11.3 2.2 11.1 2.6L6.5 15H11V19C11 19.6 10.6 20 10 20C9.4 20 9 19.6 9 19V18H7V19C7 20.7 8.3 22 10 22S13 20.7 13 19V15H17.5L12.9 2.6C12.7 2.2 12.4 2 12 2Z",
        })
    ]))
}
