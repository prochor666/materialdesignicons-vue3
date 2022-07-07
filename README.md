# Material design icons for Vue 3

Icons from materialdesignicons.com rendered as PascalCase vue components with Mdi prefix.

> [Icon source: materialdesignicons.com](https://materialdesignicons.com/)

## How to (with Tailwind CSS)

```html
<template>
    <p>
        <MdiAbacus class="w-4 h-4 inline text-rose-400" /> Hello world
        <MdiFormatBold class="w-4 h-4 inline text-rose-400" /> Hello world
    </p>
</tempalte>

<script setup>
import {
    MdiAbacus,
    MdiFormatBold,
} from 'materialdesignicons-vue3/icons/';
</script>
```


## How to build your own

You need Pytohn 3 installed

### Commands

This command will clone source Git repository.

`sync`

This command creates vue components.

`build`

This command will clear the source directory. Use it before production.

`cleanup`


### Linux & Mac

```shell
cd build
chmod +x *.sh
./sync.sh
./build.sh
./cleanup.sh
```


### Windows

```shell
cd build
sync.cmd
build.cmd
cleanup.cmd
```
