export default{
    addPerson(context,data){
        const dataPerson={
            id:data.id,
            name:data.name,
            age:data.age,
            address:data.address,
            sex:data.sex,
        }
        context.commit('addPerson',dataPerson)
    },

    deletePerson(context,data){
        console.log(data);
        context.commit('deletePerson',data)
    },


}