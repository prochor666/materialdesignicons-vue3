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
            d: "M16.67 4H15V2H9V4H7.33A1.34 1.34 0 0 0 6 5.33V20.67A1.34 1.34 0 0 0 7.33 22H16.67A1.34 1.34 0 0 0 18 20.67V5.33A1.34 1.34 0 0 0 16.67 4M12.58 15.64L12 16.17L11.42 15.64C9.36 13.77 8 12.54 8 11A2.18 2.18 0 0 1 10.2 8.8A2.4 2.4 0 0 1 12 9.63A2.4 2.4 0 0 1 13.8 8.8A2.18 2.18 0 0 1 16 11C16 12.54 14.64 13.77 12.58 15.64Z",
        })
    ]))
}
