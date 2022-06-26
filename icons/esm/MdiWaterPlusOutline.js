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
            d: "M12 18C12 18.7 12.12 19.36 12.34 20C12.23 20 12.12 20 12 20C8.69 20 6 17.31 6 14C6 10 12 3.25 12 3.25S16.31 8.1 17.62 12C16.93 12.06 16.28 12.22 15.67 12.47C15 10.68 13.5 8.33 12 6.39C10 8.96 8 12.23 8 14C8 16.21 9.79 18 12 18M19 17V14H17V17H14V19H17V22H19V19H22V17H19Z",
        })
    ]))
}
