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
            d: "M23 17.3V20.8C23 21.4 22.4 22 21.7 22H16.2C15.6 22 15 21.4 15 20.7V17.2C15 16.6 15.6 16 16.2 16V13.5C16.2 12.1 17.6 11 19 11C20.4 11 21.8 12.1 21.8 13.5V14H20.5V13.5C20.5 12.7 19.8 12.2 19 12.2C18.2 12.2 17.5 12.7 17.5 13.5V16H21.8C22.4 16 23 16.6 23 17.3M9 8V16L14 12L9 8M13 19V21H4C2.89 21 2 20.1 2 19V5C2 3.89 2.89 3 4 3H18C19.1 3 20 3.89 20 5V9.1L19 9C16.24 9 14 11.24 14 14V14.76C13.39 15.31 13 16.11 13 17V19Z",
        })
    ]))
}
