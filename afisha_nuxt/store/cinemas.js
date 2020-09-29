export const state = () => ({
    cinemas: [
        {
            slug: 'pop',
            name: 'Эпицентр',
            address: 'г. Калининград, ул. Проф. Баранова 30, 4 этаж',
            phones: [
                '+7-(4012)-300-028',
                '+7-(4012)-300-003'
            ],
            cinema_icon: '/media/images/epicentr_label.jpg'
        },
        {
            slug: 'pop1',
            name: 'Синема Парк Европа',
            address: 'г. Калининград, ул. Профессора Баранова, 40, ТРЦ «Европа», 3-й этаж',
            phones: [
                '8-800-700-01-11'
            ],
            cinema_icon: '/media/images/cinema_park_label.jpg'
        },
        {
            slug: 'pop2',
            name: 'Киносфера',
            address: 'г.Калининград, ул.Челнокова, 11',
            phones: [
                '+7-(4012)-320-222',
                '+7-(4012)-313-006',
                '+7-(4012)-313-007'
            ],
            cinema_icon: '/media/images/Kinosphera_label.jpg'
        },
        {
            slug: 'pop3',
            name: 'КАРО 7 Плаза',
            address: "г. Калининград, Ленинский пр-т, д. 30. ТРЦ 'Калининград Плаза'",
            phones: [
                '+7-(903)-626-00-85'
            ],
            cinema_icon: '/media/images/Karo_lable.png'
        }
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
