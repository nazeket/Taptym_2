import { api } from '@/api/endpoints.js';
import { useToast } from 'vue-toastification';

const toaster = useToast()
export const actions = {
    async register(context, registerData) {
        try {
            context.state.isLoading = true
            await api.register(registerData)
            if (registerData.admin === '0') {
                toaster.success('Вы успешно зарегистрировались')
            }
            return true
        } finally {
            context.state.isLoading = false
        }
    },
    async login(context) {
        try {
            context.state.isLoading = true
            const data = context.state.LoginCredentials
            const response = await api.login(data)
            toaster.success('Успешно вошли в систему')
            localStorage.setItem('accessToken', response['accessToken'])
            return true
        } catch (error) {
            if ('response' in error) {
                if ('message' in error.response.data) {
                    toaster.error(error.response.data.message)
                } else {
                    toaster.error(error.response.data)
                }
            }
            console.log(error)
            return false
        } finally {
            context.state.isLoading = false
        }
    },
    async createAnnouncement({ state }, data) {
        try {
            state.isLoading = true
            await api.createAnnouncementApi(data)
            toaster.success('Объявление успешно создано')
            state.createPanel = false
            state.Statement.title = ''
            state.Statement.description = ''
            state.Statement.price = ''
            state.Statement.imageUrl = ''
            state.Statement.tradeType = ''
            state.Statement.city = ''
            state.Statement.category = ''
        } catch (error) {
            console.log(error)
        } finally {
            state.isLoading = false
        }
    },
    async getAnnouncementList({ state }) {
        try {
            const response = await api.getAnnouncementList(state.profileData.uid)
            if (response.length) {
                response.forEach((announcement) => {
                    state[announcement['tradeType']][announcement['category']].push(announcement)
                })
            }
        } catch (error) {
            console.log(error)
        }
    },
    async getUserData({ state }) {
        try {
            if (state.profileData.uid) return
            const response = await api.getUserData()
            state.profileData = response.user
        } catch (error) {
            console.log(error)
        }
    }
}