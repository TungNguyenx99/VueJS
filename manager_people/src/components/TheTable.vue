<template>
  <v-data-table :headers="headers" :items="peopleList">
    <template v-slot:item.actions="{ item }">
      <v-btn  icon id="no-background-hover" :to="editLink(item)">
        <v-icon small class="mr-2" >
          mdi-pencil
        </v-icon>
      </v-btn>

      <v-icon small @click="deleteItem(item)">
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: "Name", value: "name" },
        { text: "Age", value: "age" },
        { text: "Address", value: "address" },
        { text: "Sex", value: "sex" },
        { text: "Actions", value: "actions" },
      ],
      editedIndex: -1,
      editedItem: {
        name: "",
        age: "",
        address: "",
        sex: "",
      },
    };
  },
  computed: {
    peopleList() {
      return this.$store.getters["people/people"];
    },

  },

  methods: {
    deleteItem(id) {
      console.log(id);
      this.$store.dispatch("people/deletePerson", id);
    },
    editLink(id) {
      return "/edit/" + id.id;
    },
  },
};
</script>

