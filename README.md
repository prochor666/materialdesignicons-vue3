# Material design icons for Vue

Icons from materialdesignicons.com rendered as PascalCase vue components with Mdi prefix.

> [Icon source: materialdesignicons.com](https://materialdesignicons.com/)

## How to

```html
<template>
    <p>
        <MdiAbacus class="text-rose-400" /> Hello world
    </p>
</tempalte>

<script setup>
import MdiAbacus from '../components/MdiAbacus.vue';
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

