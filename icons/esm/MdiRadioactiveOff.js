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
            d: "M20.8 22.7L15.9 17.8L16.9 19.6C15.4 20.5 13.7 20.9 11.9 20.9S8.4 20.4 6.9 19.6C7.3 18.8 8.7 16.5 9.9 14.4C10.5 14.7 11.2 15 11.9 15C12.2 15 12.6 15 12.9 14.9L8.1 10C8.1 10.3 8 10.7 8 11H2C2 9 2.6 7.1 3.6 5.5L1.1 3L2.4 1.7L22.1 21.4L20.8 22.7M16 11H22C22 7.3 20 4.1 17 2.3L14 7.5C15.2 8.2 16 9.5 16 11M12.2 9L14 10.8C13.9 9.9 13.1 9.1 12.2 9M7 2.3L6.1 2.9L9 5.8C8.1 4.3 7.3 2.9 7 2.3Z",
        })
    ]))
}
