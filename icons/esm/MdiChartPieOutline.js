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
            d: "M13 11H19.95Q19.58 8.25 17.66 6.34 15.75 4.43 13 4.05M11 19.95V4.05Q8 4.43 6 6.69 4 8.95 4 12T6 17.31Q8 19.58 11 19.95M13 19.95Q15.75 19.6 17.68 17.68 19.6 15.75 19.95 13H13M12 12M12 22Q9.93 22 8.1 21.21 6.28 20.43 4.93 19.08 3.58 17.73 2.79 15.9 2 14.08 2 12T2.79 8.1Q3.58 6.28 4.93 4.93 6.28 3.58 8.1 2.79 9.93 2 12 2T15.89 2.79Q17.7 3.58 19.06 4.94 20.43 6.3 21.21 8.11 22 9.93 22 12 22 14.05 21.21 15.88 20.43 17.7 19.08 19.06 17.73 20.43 15.9 21.21 14.08 22 12 22Z",
        })
    ]))
}
