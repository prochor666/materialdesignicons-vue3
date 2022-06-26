import os
import xml.etree.ElementTree as ET
from core import utils, library

def load(file):

    try:
        meta = os.stat(file)
        with open(file) as template:

            template = template.read()
            template = str(template).replace('<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">', '')

            template = utils.replace_all(str(template), r = {
                '<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">': '',
                 ' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"': ''
            })

            index_patterns = convert(template, os.path.basename(file))

            return {
                'file': os.path.basename(file),
                'path': file,
                'index_patterns': index_patterns,
                'size_raw': meta.st_size,
                'size': utils.byte_size(meta.st_size),
                'error': ""
            }

    except Exception as e:

        print(e)

        return {
            'file': os.path.basename(file),
            'path': file,
            'size_raw': 0,
            'size': utils.byte_size(0),
            'error': f": {str(e)}"
        }


def convert(content, svg_file):

    root = ET.fromstring(content)
    root.set('xmlns', 'http://www.w3.org/2000/svg')
    path = root.find('path')

    #print('PATH', path.get('d'))

    temp = os.path.splitext(svg_file)[0].split('-')

    vue_exposed_name = f"Mdi{''.join(map(str.title, temp))}"

    js_index_pattern = f'module.exports.{vue_exposed_name} = require("./{vue_exposed_name}.js")'
    js_esm_index_pattern = 'export { default as '+vue_exposed_name+' } from \'./'+vue_exposed_name+'.js\''
    ts_index_pattern = 'export { default as '+vue_exposed_name+' } from \'./'+vue_exposed_name+'\''

    # template = vue_component(template.read(), vue_expose)
    js_template = vue_js_component_create(path.get('d'))
    js_esm_template = vue_js_component_create(path.get('d'))
    ts_template = vue_ts_component_create(vue_exposed_name)

    utils.file_save(
        f"{library.target()}{vue_exposed_name}.js", js_template)

    utils.file_save(
        f"{library.target('/esm/')}{vue_exposed_name}.js", js_esm_template)

    utils.file_save(
        f"{library.target()}{vue_exposed_name}.d.ts", ts_template)

    utils.file_save(
        f"{library.target('/esm/')}{vue_exposed_name}.d.ts", ts_template)

    return [
        js_index_pattern,
        js_esm_index_pattern,
        ts_index_pattern
    ]


def vue_component(svg, vue_exposed_name):

    template = '''<template>
    '''+svg+'''
</template>

<script setup>
defineExpose({
    name: "'''+vue_exposed_name+'''",
});

const props = defineProps({
    class: {
        type: String,
        default: ''
    },
    size: {
        type: [Number, String],
        default: 24
    },
    viewBox: {
        type: String,
        default: '0 0 24 24',
    },
});
</script>
'''

    return template


def vue_js_component_create(d):

    template = '''const { createVNode: _createVNode, openBlock: _openBlock, createBlock: _createBlock } = require("vue")

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
            d: "'''+d+'''",
        })
    ]))
}
'''

    return template


def vue_js_esm_component_create(d):

    template = '''import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export default function render(_ctx, _cache) {
    return (_openBlock(), _createBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true"
    }, [
        _createVNode("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "'''+d+'''",
        })
    ]))
}
'''

    return template


def vue_ts_component_create(vue_exposed_name):

    template = '''import type { FunctionalComponent, HTMLAttributes, VNodeProps } from 'vue';
declare const '''+vue_exposed_name+''': FunctionalComponent<HTMLAttributes & VNodeProps>;
export default '''+vue_exposed_name+''';
'''

    return template
