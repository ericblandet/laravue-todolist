<template>
    <div class="item">
        <input
            type="checkbox"
            @change="updateCheck()"
            v-model="item.completed"
        />
        <span :class="[item.completed ? 'completed' : '', 'itemText']">
            {{ item.name }}</span
        >
        <button @click="removeItem()" class="trashcan">
            <font-awesome-icon icon="trash"></font-awesome-icon>
        </button>
    </div>
</template>

<script>
import axios from "axios";
export default {
    props: {
        item: { type: Object },
    },
    methods: {
        updateCheck() {
            const baseUrl = import.meta.env.VITE_API_URL;
            axios
                .put(`${baseUrl}/api/item/${this.item.id}`, {
                    item: this.item,
                })
                .then((response) => {
                    if (response.status == 200) {
                        this.$emit("itemChanged");
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        removeItem() {
            const baseUrl = import.meta.env.VITE_API_URL;
            axios
                .delete(`${baseUrl}/api/item/${this.item.id}`)
                .then((response) => {
                    if (response.status == 200) {
                        this.$emit("itemChanged");
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
</script>

<style scoped>
.completed {
    text-decoration: line-through;
    color: #999999;
}

.itemText {
    width: 100%;
    margin-left: 20px;
}

.item {
    display: flex;
    justify-content: center;
    align-items: center;
}

.trashcan {
    background: #e6e6e6;
    border: none;
    color: red;
    outline: none;
}
</style>
