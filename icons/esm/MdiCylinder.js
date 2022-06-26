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
            d: "M12 2C9.89 2 3 2.29 3 6V18C3 21.71 9.89 22 12 22C14.11 22 21 21.71 21 18V6C21 2.29 14.11 2 12 2M12 10C13.38 10 16.8 9.87 19 8.75V15.25C16.8 14.13 13.38 14 12 14S7.2 14.13 5 15.25V8.75C7.2 9.87 10.62 10 12 10M12 4C15.87 4 19 4.89 19 6C19 7.11 15.87 8 12 8C8.13 8 5 7.11 5 6C5 4.89 8.13 4 12 4M12 20C8.13 20 5 19.11 5 18C5 16.9 8.13 16 12 16C15.87 16 19 16.9 19 18C19 19.11 15.87 20 12 20Z",
        })
    ]))
}
