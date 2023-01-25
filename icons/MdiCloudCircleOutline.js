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
            d: "M8.5 16H16Q17.25 16 18.13 15.13T19 13Q19 11.75 18.13 10.88T16 10Q15.8 8.55 14.68 7.53 13.55 6.5 12.15 6.5 10.88 6.5 9.84 7.15 8.8 7.8 8.3 9 6.88 9.13 5.94 10.09 5 11.05 5 12.5 5 13.95 6.03 15 7.05 16 8.5 16M12 22Q9.93 22 8.1 21.21 6.28 20.43 4.93 19.08 3.58 17.73 2.79 15.9 2 14.08 2 12T2.79 8.1Q3.58 6.28 4.93 4.93 6.28 3.58 8.1 2.79 9.93 2 12 2T15.9 2.79Q17.73 3.58 19.08 4.93 20.43 6.28 21.21 8.1 22 9.93 22 12T21.21 15.9Q20.43 17.73 19.08 19.08 17.73 20.43 15.9 21.21 14.08 22 12 22M12 20Q15.33 20 17.66 17.66 20 15.33 20 12T17.66 6.34Q15.33 4 12 4T6.34 6.34Q4 8.68 4 12T6.34 17.66Q8.68 20 12 20M8.5 14Q7.88 14 7.44 13.56 7 13.13 7 12.5T7.44 11.44Q7.88 11 8.5 11H10V10.5Q10 9.68 10.59 9.09 11.18 8.5 12 8.5T13.41 9.09Q14 9.68 14 10.5V12H16Q16.43 12 16.71 12.29 17 12.58 17 13T16.71 13.71Q16.43 14 16 14M12 12Z",
        })
    ]))
}
