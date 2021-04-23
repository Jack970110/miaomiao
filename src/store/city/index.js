const state = {
    name : window.localStorage.getItem('nowNm') || '上海',
    cityId : window.localStorage.getItem('nowId') || 310100
};

const actions = {

};

const mutations = {
    CITY_INFO(state , payload){
        state.name = payload.name;
        state.cityId = payload.cityId;
    }
};

export default {
    namespaced : true,
    state,
    actions,
    mutations
}