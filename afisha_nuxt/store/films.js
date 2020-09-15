export const state = () => ({
    films: [
    ],
    pickedCinema: 'all'

})
export const mutations = {
    setFilms(state, films) {
        state.films = films
    },
    setpickedCinema(state, cinema) {
        state.pickedCinema = cinema
    }
}
export const actions = {
    async fetch({ commit }, day) {
        try {
            const films = await this.$axios.$get('v1/sessions/' + day + '/', { headers: { 'Access-Control-Allow-Origin': '*' } })
            commit('setFilms', films)
        } catch (e) {
            console.error(e)
        }
    },
    pickCinema({ commit }, cinema) {
        commit('pickedCinema', cinema)
    }

}
export const getters = {
    films: s => s.films,
    pickedCinema: s => s.pickedCinema
}
