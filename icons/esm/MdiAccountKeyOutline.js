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
            d: "M5.8 10C5.4 8.8 4.3 8 3 8C1.3 8 0 9.3 0 11S1.3 14 3 14C4.3 14 5.4 13.2 5.8 12H7V14H9V12H11V10H5.8M3 12C2.4 12 2 11.6 2 11S2.4 10 3 10 4 10.4 4 11 3.6 12 3 12M16 4C13.8 4 12 5.8 12 8S13.8 12 16 12 20 10.2 20 8 18.2 4 16 4M16 10.1C14.8 10.1 13.9 9.2 13.9 8C13.9 6.8 14.8 5.9 16 5.9C17.2 5.9 18.1 6.8 18.1 8S17.2 10.1 16 10.1M16 13C13.3 13 8 14.3 8 17V20H24V17C24 14.3 18.7 13 16 13M22.1 18.1H9.9V17C9.9 16.4 13 14.9 16 14.9C19 14.9 22.1 16.4 22.1 17V18.1Z",
        })
    ]))
}
