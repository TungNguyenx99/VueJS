export default {
    addPerson(state, payload) {
        state.people.push(payload);
    },
    deletePerson(state, payload) {
        console.log(payload);
        state.people.splice(payload, 1);
    },

}