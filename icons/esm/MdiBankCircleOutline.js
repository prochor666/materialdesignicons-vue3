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
            d: "M12 4C16.4 4 20 7.6 20 12S16.4 20 12 20 4 16.4 4 12 7.6 4 12 4M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M17 17H7V15H17V17M8 14V11H10V14H8M11 14V11H13V14H11M14 14V11H16V14H14M17 10H7V8.5L12 6L17 8.5V10Z",
        })
    ]))
}
