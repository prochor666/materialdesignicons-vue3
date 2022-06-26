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
            d: "M12,4H5A3,3 0 0,0 2,7V15A3,3 0 0,0 5,18L4,19V20H5L7,17.97L9,18V13H4V6H13V8H15V7A3,3 0 0,0 12,4M5,14A1,1 0 0,1 6,15A1,1 0 0,1 5,16A1,1 0 0,1 4,15A1,1 0 0,1 5,14M20.57,9.66C20.43,9.26 20.05,9 19.6,9H12.41C11.95,9 11.58,9.26 11.43,9.66L10,13.77V19.28C10,19.66 10.32,20 10.7,20H11.32C11.7,20 12,19.62 12,19.24V18H20V19.24C20,19.62 20.31,20 20.69,20H21.3C21.68,20 22,19.66 22,19.28V17.91L22,13.77L20.57,9.66M12.41,10H19.6L20.63,13H11.38L12.41,10M12,16A1,1 0 0,1 11,15A1,1 0 0,1 12,14A1,1 0 0,1 13,15A1,1 0 0,1 12,16M20,16A1,1 0 0,1 19,15A1,1 0 0,1 20,14A1,1 0 0,1 21,15A1,1 0 0,1 20,16Z",
        })
    ]))
}
