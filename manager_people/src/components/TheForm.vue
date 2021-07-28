<template>
  <validation-observer ref="observer" v-slot="{ invalid }">
    <form @submit.prevent="submit">
      <validation-provider
        v-slot="{ errors }"
        name="Name"
        rules="required|max:10"
      >
        <v-text-field
          v-model="name"
          :counter="10"
          :error-messages="errors"
          label="Name"
          required
        ></v-text-field>
      </validation-provider>
      <validation-provider v-slot="{ errors }" name="age">
        <v-text-field
          v-model="age"
          :error-messages="errors"
          label="Age"
          required
        ></v-text-field>
      </validation-provider>
      <validation-provider v-slot="{ errors }" name="address" rules="required">
        <v-text-field
          v-model="address"
          :error-messages="errors"
          label="Address"
          required
        ></v-text-field>
      </validation-provider>
      <validation-provider v-slot="{ errors }" name="sex" rules="required">
        <v-select
          v-model="sex"
          :items="items"
          :error-messages="errors"
          label="Sex"
          data-vv-name="sex"
          required
        ></v-select>
      </validation-provider>

      <v-btn class="mr-4" type="submit" :disabled="invalid" v-if="!edit">
        submit
      </v-btn>
      <v-btn v-else class="mr-4" type="submit" :disabled="invalid">
        edit
      </v-btn>
      <v-btn @click="clear">
        clear
      </v-btn>
    </form>
  </validation-observer>
</template>

<script>
import { required, digits, email, max, regex } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});

export default {
  props: {
    edit: { type: Boolean, default: false },
    personEdit: {
      type: Object,
      default: () => ({
        id: "",
        name: "",
        age: "",
        address: "",
        sex: null,
      }),
    },
  },
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  emits: ["save-data"],
  data: () => ({
    name: "",
    age: "",
    address: "",
    sex: null,
    items: ["Male", "Female"],
  }),
  mounted(){
    console.log(this.personEdit);
  },
  methods: {
    submit() {
      if (!this.edit) {
        this.$refs.observer.validate();
        const formData = {
          id:this.$store.getters["people/countPeople"].toString(),
          name: this.name,
          age: this.age,
          address: this.address,
          sex: this.sex,
        };
        console.log(formData);
        this.$emit("save-data", formData);
      } else {
        this.$refs.observer.validate();
        console.log(this.personEdit.id);
        this.$store.dispatch("people/deletePerson", this.personEdit.id);
        const formData = {
          id:this.personEdit.id,
          name: this.name,
          age: this.age,
          address: this.address,
          sex: this.sex,
        };
        this.$store.dispatch('people/addPerson',formData);
        console.log(formData);

      }
    },

    clear() {
      this.name = "";
      this.age = "";
      this.address = "";
      this.select = null;
      this.$refs.observer.reset();
    },
  },
};
</script>
