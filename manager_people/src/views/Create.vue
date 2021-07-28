<template>
    <the-form @save-data="saveData"></the-form>
</template>

<script>
import TheForm from '../components/TheForm.vue'
export default {
    components: {TheForm},
    methods:{
        saveData(data){
            this.$store.dispatch('people/addPerson',data);
            this.$router.push('/')
        }
    }
}
</script>