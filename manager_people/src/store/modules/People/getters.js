export default{
    people(state){
        return state.people
    },
    countPeople(state){
        return state.people.length+1
    },
    person:(state) => (id) => {
        console.log(typeof id);
        return state.people.find(person => person.id === id)
    }
}