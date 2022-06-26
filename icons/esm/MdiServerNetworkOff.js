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
            d: "M13,19H14A1,1 0 0,1 15,20H15.73L13,17.27V19M22,20V21.18L20.82,20H22M21,22.72L19.73,24L17.73,22H15A1,1 0 0,1 14,23H10A1,1 0 0,1 9,22H2V20H9A1,1 0 0,1 10,19H11V17H4A1,1 0 0,1 3,16V12A1,1 0 0,1 4,11H6.73L4.73,9H4A1,1 0 0,1 3,8V7.27L1,5.27L2.28,4L21,22.72M4,3H20A1,1 0 0,1 21,4V8A1,1 0 0,1 20,9H9.82L7,6.18V5H5.82L3.84,3C3.89,3 3.94,3 4,3M20,11A1,1 0 0,1 21,12V16A1,1 0 0,1 20,17H17.82L11.82,11H20M9,7H10V5H9V7M9,15H10V14.27L9,13.27V15M5,13V15H7V13H5Z",
        })
    ]))
}
