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
            d: "M6 12.45V9.64C7.47 10.47 9.61 11 12 11S16.53 10.47 18 9.64V12.03C18.17 12 18.33 12 18.5 12C19 12 19.5 12.07 20 12.18V7C20 4.79 16.42 3 12 3S4 4.79 4 7V17C4 19.21 7.59 21 12 21C12.17 21 12.33 21 12.5 21C12.24 20.37 12.09 19.7 12.03 19L12 19C8.13 19 6 17.5 6 17V14.77C7.61 15.55 9.72 16 12 16C12.17 16 12.34 16 12.5 16C12.85 15.18 13.34 14.46 13.95 13.86C13.32 13.95 12.67 14 12 14C9.58 14 7.3 13.4 6 12.45M12 5C15.87 5 18 6.5 18 7S15.87 9 12 9 6 7.5 6 7 8.13 5 12 5M18 18.5L19.77 16.73C19.32 16.28 18.69 16 18 16C16.62 16 15.5 17.12 15.5 18.5S16.62 21 18 21C18.82 21 19.54 20.61 20 20H21.71C21.12 21.47 19.68 22.5 18 22.5C15.79 22.5 14 20.71 14 18.5S15.79 14.5 18 14.5C19.11 14.5 20.11 14.95 20.83 15.67L22 14.5V18.5H18Z",
        })
    ]))
}
