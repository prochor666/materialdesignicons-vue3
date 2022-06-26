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
            d: "M12 2C13.1 2 14 2.9 14 4S13.1 6 12 6 10 5.1 10 4 10.9 2 12 2M19.8 17.7L19.2 11.3C19.1 10.5 18.5 10 17.7 10H16C14.5 10 13.1 9.5 12.2 8.6L10.2 6.6C10.1 6.4 9.6 6 8.8 6C8.3 6 7.8 6.2 7.4 6.6L4.1 9.9C3.6 10.6 3.6 11.5 3.9 12L5.3 14.8L2.2 18.8L3.8 20L7.5 15.3L7.2 14L8 14.8V20H10V13.9L7.9 11.8L10.3 9.4C11.2 10.3 12 11.2 13.9 11.7L13 20H14.5L14.9 16.5H18.1L18.2 17.7C17.8 18 17.5 18.4 17.5 19C17.5 19.8 18.2 20.5 19 20.5S20.5 19.8 20.5 19C20.5 18.5 20.2 18 19.8 17.7M15.1 15L15.5 11.5H17.5L17.9 15H15.1Z",
        })
    ]))
}
