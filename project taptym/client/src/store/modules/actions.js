import {api} from "@/api/endpoints.js";
import {useToast} from "vue-toastification";

const toaster = useToast()
export const actions = {
    async register(context) {
        try {
            context.state.isLoading = true
            const data = context.state.RegisterCredentials
            await api.register(data)
            toaster.success('Successfully registered')
            localStorage.setItem('hasPermission', '1')
            return true
        } catch (response) {
            toaster.error(response.message)
            return false
        } finally {
            context.state.isLoading = false
        }
    },
    async login(context) {
        try {
            context.state.isLoading = true
            const data = context.state.LoginCredentials
            await api.login(data)
            toaster.success('Successfully logged in')
            localStorage.setItem('accessToken', '1')
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
    async fetchProductList() {
        try {
            return await api.fetchProductList()
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
        }
    },
    async searchProduct(context) {
        try {
            context.state.isLoading = true
            return await api.searchProduct(context.state.search.term)
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
    async getCategories(context) {
        try {
            context.state.loaders.isContentLoading = true
            if (context.state.category.length) return
            context.state.category = await api.getCategories()
        } catch (error) {
            toaster.error(error)
            console.log(error)
        }
    },
    async getHashtags() {
        try {
            const response = await api.getHashtags()
        } catch (error) {
            toaster.error(error)
            console.log(error)
        }
    },
    async getUserData(context) {
        try {
            context.state.loaders.isUserDataLoading = true
            const response = await api.getUserData()
            context.state.ProfileData.email = response.email
            context.state.ProfileData.phoneNumber = response.phone
            context.state.ProfileData.avatar = response.avatar
            context.state.ProfileData.name = response.name
        } catch (error) {
            console.log(error)
        } finally {
            context.state.loaders.isUserDataLoading = false
        }
    },
    async getCityList(context) {
        try {
            if (context.state.city.length) return
            context.state.city = await api.getCities()
        } catch (error) {
            console.log(error)
        }
    },
    async loginBy(context, providerName) {
        try {
            const response = await api.loginBy(providerName)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    },
    async createAnnouncement(context) {
        try {
            context.state.isLoading = true
            await api.createAnnouncement(context.state.Statement)
            toaster('Объявление успешно создано')
            context.state.createPanel = false
        } catch (error) {
            if ('response' in error) {
                if ('error' in error.response.data) {
                    toaster.error(error.response.data.error)
                } else {
                    toaster.error(error.response.data)
                }
            }
            console.log(error)
        } finally {
            context.state.isLoading = false
        }
    },
    async updateAnnouncement(context, {id, comment}) {
        try {
            const data = {
                comment: comment
            }
            await api.updateAnnouncement(id, data)
            toaster('Ваш комментарий был успешно добавлен')
            return true
        } catch (error) {
            if ('response' in error) {
                if ('error' in error.response.data) {
                    toaster.error(error.response.data.error)
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
    async getAnnouncements(context) {
        try {
            context.state.loaders.isContentLoading = true
            const response = await api.getAnnouncements()
            const categoryIds = {
                3: 'auto',
                4: 'quarter',
                5: 'services',
                2: 'more'
            }
            if ('data' in response && response.data.length) {
                response.data.forEach((item) => {
                    const categoryProducts = context.state[item.type][categoryIds[item.category_id]]
                    if (categoryProducts.length) {
                        if (!categoryProducts.find((product) => product.id == item.id)) {
                            context.state[item.type][categoryIds[item.category_id]].forEach((product) => {
                                if (product.id !== item.id) {
                                    context.state[item.type][categoryIds[item.category_id]].push(item)
                                }
                            })
                        }
                    } else {
                        context.state[item.type][categoryIds[item.category_id]].push(item)
                    }
                })
            }
        } catch (error) {
            console.log(error)
        } finally {
            context.state.loaders.isContentLoading = false
        }
    },
    async addToFavorites({state}, id) {
        try {
            await api.addToFavorites(id)
            toaster('Успешно добавлено в избранное')
        } catch (error) {
            if ('response' in error) {
                if ('error' in error.response.data) {
                    toaster.error(error.response.data.error)
                } else {
                    toaster.error(error.response.data)
                }
            }
            console.log(error)
        }
    },
    async getAnnouncementById({state}, id) {
        try {
            state.loaders.isContentDetailLoading = true
            return await api.getAnnouncementById(id)
        } catch (error) {
            if ('response' in error) {
                if ('error' in error.response.data) {
                    toaster.error(error.response.data.error)
                } else {
                    toaster.error(error.response.data)
                }
            }
            console.log(error)
        } finally {
            state.loaders.isContentDetailLoading = false
        }
    },
    async startChat({state}, id) {
        try {
            const response = await api.startChat(id)
        } catch (error) {
            console.log(error)
        }
    },
    async getFavorites(context) {
        try {
            const response = await api.getFavorites()
            const categoryIds = {
                3: 'auto',
                4: 'quarter',
                5: 'services',
                2: 'more'
            }
            if ('data' in response && response.data.length) {
                response.data.forEach((item) => {
                    if (context.state['favorites'][categoryIds[item.category_id]].length) {
                        const found = context.state['favorites'][categoryIds[item.category_id]].find((product) => product.id === item.id)
                        if (!found) {
                            context.state['favorites'][categoryIds[item.category_id]].push(item)
                        }
                    } else {
                        context.state['favorites'][categoryIds[item.category_id]].push(item)
                    }
                })

            }
        } catch (error) {
            console.log(error)
        }
    },
    async getChatList(context) {
        try {
            context.state.loaders.isChatLoading = true
            return await api.getChatList()
        } catch (error) {
            console.log(error)
        } finally {
            context.state.loaders.isChatLoading = false
        }
    }
}