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
            d: "M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,22C10.05,22 8.22,21.44 6.69,20.47L10,15.47C10.6,15.81 11.28,16 12,16C12.72,16 13.4,15.81 14,15.47L17.31,20.47C15.78,21.44 13.95,22 12,22M2,12C2,7.86 4.5,4.3 8.11,2.78L10.34,8.36C8.96,9 8,10.38 8,12H2M16,12C16,10.38 15.04,9 13.66,8.36L15.89,2.78C19.5,4.3 22,7.86 22,12H16Z",
        })
    ]))
}
