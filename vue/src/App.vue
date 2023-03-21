<template>
    <div class="toDoListContainer">
        <div class="heading">
            <h2 id="title">Todo List</h2>
            <add-item-form @reloadList="getList()" />
        </div>
        <list-view :items="items" @reloadList="getList()" />
    </div>
</template>

<script>
import addItemForm from "./components/addItemForm.vue";
import listView from "./components/listView.vue";
import axios from "axios";

export default {
    components: {
        addItemForm,
        listView,
    },
    data() {
        return {
            items: [],
        };
    },
    methods: {
        getList() {
            const baseUrl = import.meta.env.VITE_API_URL;

            axios
                .get(`${baseUrl}/api/items`)
                .then((response) => {
                    this.items = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    mounted() {
        this.getList();
    },
};
</script>
<style scoped>
.toDoListContainer {
    width: 350px;
    margin: auto;
}

.heading {
    background: lightgrey;
    padding: 10px;
}

#title {
    text-align: center;
}
</style>
