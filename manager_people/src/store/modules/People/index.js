import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export default{
    namespaced: true,
    state(){
        return {
            people:[{
                id:"1",
                name:'Tùng',
                age:22,
                address:'Yên Hòa',
                sex:'Male'
            },
            {
                id:"2",
                name:'Hưng',
                age:22,
                address:'Tây Hồ',
                sex:'Male'
            }
        ]
        }
    },
    actions,
    getters,
    mutations
}