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

            convert(template, os.path.basename(file))

            return {
                'file': os.path.basename(file),
                'path': file,
                'size_raw': meta.st_size,
                'size': utils.byte_size(meta.st_size),
                'error': ""
            }

    except Exception as e:
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
    root.attrib.pop('id')
    root.attrib.pop('viewBox')
    root.attrib.pop('width')
    root.attrib.pop('height')
    root.set('fill', 'currentColor')
    root.set(':class', 'class')
    root.set(':viewBox', 'viewBox')
    root.set(':width', 'size')
    root.set(':height', 'size')

    for path in root.iter('path'):

        path.set('fill-rule', 'evenodd')
        path.set('clip-rule', 'evenodd')

    tree = ET.ElementTree(root)

    temp = os.path.splitext(svg_file)[0].split('-')

    # joining result
    #vue_file = temp[0] + ''.join(ele.title() for ele in temp[1:])
    vue_file = f"Mdi{''.join(map(str.title, temp))}.vue"
    vue_expose = f"Mdi{''.join(map(str.title, temp))}"

    tree.write(
        f"{library.target()}{vue_file}", encoding="utf-8")

    with open(f"{library.target()}{vue_file}") as template:

        template = vue_component(template.read(), vue_expose)
        utils.file_save(
            f"{library.target()}{vue_file}", template)



def vue_component(svg, expose):

    template = '''<template>
    '''+svg+'''
</template>

<script setup>
defineExpose({
    name: "'''+expose+'''",
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
