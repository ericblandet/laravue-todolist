<template>
    <div v-for="(item, index) in items" :key="index">
        <list-item
            :item="item"
            class="item"
            @itemChanged="$emit('reloadList')"
        ></list-item>
    </div>
</template>

<script>
import listItem from "./listItem.vue";
export default {
    props: {
        items: { type: Array },
    },
    components: {
        listItem,
    },
};
</script>
w
<style scoped>
.item {
    background: #e6e6e6;
    padding: 5px;
    margin-top: 5px;
}
</style>
