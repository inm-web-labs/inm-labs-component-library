<template>
    <h1 @click="handler"> teste </h1>
</template>

<script setup>
const handler = () => {
    console.log('teste handler clicked')
}
</script>
