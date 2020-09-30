export const state = () => ({
    cinemas: []
})
export const mutations = {
    setCinemas(state, cinemas) {
        state.cinemas = cinemas
    }
}
export const actions = {
    async fetch({ commit }) {
        try {
            if (!localStorage.cinemas) {
                const cinemas = await this.$axios.$get('v1/cinemas', { headers: { 'Access-Control-Allow-Origin': '*' } })
                commit('setCinemas', cinemas)
                localStorage.cinemas = cinemas
            } else {
                cinemas = localStorage.cinemas
            }
        } catch (e) {
            console.error(e)
        }
    }
}
export const getters = {
    cinemas: s => s.cinemas
}
