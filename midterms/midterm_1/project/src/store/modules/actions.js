import {api} from '@/api/endpoints.js';
import {useToast} from 'vue-toastification';

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
    async createAnnouncement({state}, data) {
        try {
            state.isLoading = true
            await api.createAnnouncementApi(data)
            toaster.success('Объявление успешно создано')
            state.createPanel = false
            state.Statement.title = ''
            state.Statement.description = ''
            state.Statement.price = ''
            state.Statement.images = ''
            state.Statement.tradeType = ''
            state.Statement.city = ''
            state.Statement.category = ''
        } catch (error) {
            if ('response' in error) {
                if ('message' in error.response.data) {
                    toaster.error(error.response.data.message)
                } else {
                    toaster.error(error.response.data)
                }
            }
        } finally {
            state.isLoading = false
        }
    },
    async getAnnouncementList({state}) {
        try {
            state.loaders['isContentLoading'] = true
            state.announcements = []
            const response = await api.getAnnouncementList(state.profileData.uid)
            if (state.profileData.uid === 1) {
                state.announcements = response.filter((a) => a.confirmed !== 1)
            } else {
                state.announcements = response.filter((a) => a.confirmed === 1)
            }
        } catch (error) {
            if ('response' in error) {
                if ('message' in error.response.data) {
                    toaster.error(error.response.data.message)
                } else {
                    toaster.error(error.response.data)
                }
            }
        } finally {
            state.loaders['isContentLoading'] = false
        }
    },
    async getUserData({state}) {
        try {
            if (state.profileData.uid) return
            const response = await api.getUserData()
            state.profileData = response.user
        } catch (error) {
            if ('response' in error) {
                if ('message' in error.response.data) {
                    toaster.error(error.response.data.message)
                } else {
                    toaster.error(error.response.data)
                }
            }
        }
    },
    async getAnnouncementById({state}, id) {
        try {
            const response = await api.getAnnouncementById(id)
            return response[0]
        } catch (error) {
            if ('response' in error) {
                if ('message' in error.response.data) {
                    toaster.error(error.response.data.message)
                } else {
                    toaster.error(error.response.data)
                }
            }
        }
    },
    async updateAnnouncement({state}, {id, decision}) {
        try {
            const data = {
                confirmed: decision
            }
            if (decision === 1) {
                state.loaders.approve = true
            } else {
                state.loaders.reject = true
            }
            await api.updateAnnouncement(data, id)
            return true
        } catch (error) {
            if ('response' in error) {
                if ('message' in error.response.data) {
                    toaster.error(error.response.data.message)
                } else {
                    toaster.error(error.response.data)
                }
            }
            return false
        } finally {
            state.loaders.approve = state.loaders.reject = false
        }
    },
    async search({state}) {
        try {
            state.loaders.isContentLoading = true
            const response = await api.searchAnnouncement(state.search.term)
            if (state.profileData.uid === 1) {
                state.announcements = response.filter((a) => a.confirmed !== 1)
            } else {
                state.announcements = response.filter((a) => a.confirmed === 1)
            }
        } catch (error) {
            if ('response' in error) {
                if ('message' in error.response.data) {
                    toaster.error(error.response.data.message)
                } else {
                    toaster.error(error.response.data)
                }
            }
        } finally {
            state.loaders.isContentLoading = false
        }
    },
    async addComment({state}, {rating, productId}) {
        try {
            state.loaders.addComment = true
            const data = {
                text: state.comment.text,
                title: state.comment.title,
                rating: String(rating),
                userName: state.profileData.fullName,
                productId: String(productId)
            }
            await api.addComment(data)
            state.comment = ''
            toaster.success('Ваш комментарий был успешно добавлен')
        } catch (error) {
            if ('response' in error) {
                if ('message' in error.response.data) {
                    toaster.error(error.response.data.message)
                } else {
                    toaster.error(error.response.data)
                }
            }
        } finally {
            state.loaders.addComment = false
        }
    },
    async getComments({state}, product_id) {
        try {
            state.comments = await api.getComments(product_id)
        } catch (error) {
            if ('response' in error) {
                if ('message' in error.response.data) {
                    toaster.error(error.response.data.message)
                } else {
                    toaster.error(error.response.data)
                }
            }
        }
    }
}