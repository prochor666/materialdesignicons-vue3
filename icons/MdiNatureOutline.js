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
            d: "M12.08 14.22L12.77 14.13C15.24 13.84 17.17 11.73 17.17 9.17C17.17 6.41 14.94 4.17 12.17 4.17C10.84 4.17 9.57 4.7 8.63 5.63C7.7 6.57 7.17 7.84 7.17 9.17C7.17 11.64 8.96 13.69 11.33 14.09L12.08 14.22M13 16.12V20H19V22H5V20H11V16.06C7.69 15.5 5.17 12.64 5.17 9.17C5.17 7.31 5.91 5.53 7.22 4.22C8.53 2.91 10.31 2.17 12.17 2.17C16.04 2.17 19.17 5.3 19.17 9.17C19.17 12.76 16.47 15.71 13 16.12Z",
        })
    ]))
}
