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
            d: "M12 10H9.09C9.43 6.55 10.6 4 12 4S14.57 6.55 14.91 10H16.9C16.44 5.44 14.42 2 12 2S7.56 5.44 7.1 10H4L8 14L12 10M12 20C10.73 20 9.64 17.89 9.21 14.92L8 16.12L7.3 15.42C8 19.26 9.84 22 12 22C14.42 22 16.44 18.56 16.9 14H14.91C14.57 17.45 13.4 20 12 20M22 11H13L11 13H22V11M2 13H5L3 11H2V13",
        })
    ]))
}
