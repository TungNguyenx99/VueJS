<template>
    <the-form edit :personEdit="personEdit"></the-form>
</template>

<script>
import TheForm from '../components/TheForm.vue'
export default {
    data(){
        return{ 
            personEdit:{}
        }
        
    },
    components: {TheForm},

    mounted(){
        
        console.log(this.$store.getters["people/person"](this.$router.app._route.params.id));
        this.personEdit= this.$store.getters["people/person"](this.$router.app._route.params.id) ;
        
        // this.$store.getters('people/person',this.$router.app._route.params.id);
    }
}
</script>