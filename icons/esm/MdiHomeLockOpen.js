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
            d: "M12,3L2,12H5V20H19V12H22L12,3M12,8A3,3 0 0,1 15,11H13A1,1 0 0,0 12,10A1,1 0 0,0 11,11V13H16V17H8V13H9V11A3,3 0 0,1 12,8Z",
        })
    ]))
}
