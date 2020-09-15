export const state = () => ({
    cinemas: [
    ]
})
export const mutations = {
    setCinemas(state, cinemas) {
        state.cinemas = cinemas
    }
}
export const actions = {
    async fetch({ commit }) {
        try {
            const cinemas = await this.$axios.$get('v1/cinemas', { headers: { 'Access-Control-Allow-Origin': '*' } })
            commit('setCinemas', cinemas)
        } catch (e) {
            console.error(e)
        }
    }
}
export const getters = {
    cinemas: s => s.cinemas
}
