<template>
    <div class="addItem">
        <input type="text" v-model="item.name" />
        <font-awesome-icon
            icon="plus-square"
            :class="[item.name ? 'active' : 'inactive', 'plus']"
            @click="addItem()"
        ></font-awesome-icon>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            item: {
                name: "",
            },
        };
    },
    methods: {
        addItem() {
            if (this.item.name == "") {
                return;
            }
            const baseUrl = import.meta.env.VITE_API_URL;
            axios
                .post(`${baseUrl}/api/item/store`, {
                    item: this.item,
                })
                .then((response) => {
                    if (response.status == 201) {
                        this.item.name = "";
                        this.$emit("reloadList");
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
.addItem {
    display: flex;
    justify-content: center;
    align-items: center;
}

input {
    border: 0px;
    background-color: #f7f7f7;
    outline: none;
    padding: 5px;
    margin-right: 10px;
    width: 100%;
}

.active {
    color: #00ce25;
}

.inactive {
    color: #999999;
}

.plus {
    font-size: 20px;
}
.plus.active:hover {
    cursor: pointer;
}
</style>
