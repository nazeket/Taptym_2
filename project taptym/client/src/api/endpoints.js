import {http} from "./index.js";

class Api {
    async request(config) {
        const {data} = await http.request(config);
        return data;
    }

    async register(data) {
        return await this.request({
            method: 'post',
            url: '/auth/signup',
            data
        })
    }

    async login(data) {
        return await this.request({
            method: 'post',
            url: '/auth/login',
            data
        })
    }
    async fetchProductList(){
        return await this.request({
            method: 'get',
            url: '/product/get-product-list'
        })
    }
    async searchProduct(term){
        return await this.request({
            method: 'get',
            url: `/product/search?term=${term}`
        })
    }
    async getCategories() {
        return await this.request({
            method: 'get',
            url: '/categories'
        })
    }

    async getHashtags() {
        return await this.request({
            method: 'get',
            url: '/hashtags'
        })
    }

    async getUserData() {
        return await this.request({
            method: 'get',
            url: '/user'
        })
    }

    async logout() {
        return await this.request({
            method: 'post',
            url: '/logout'
        })
    }

    async getCities() {
        return await this.request({
            method: 'get',
            url: '/cities'
        })
    }

    async loginBy(providerName) {
        return await this.request({
            method: 'get',
            url: `/login/${providerName}`
        })
    }

    async createAnnouncement(data) {
        return await this.request({
            method: 'post',
            url: '/product/create-product',
            data
        })
    }

    async getAnnouncements() {
        return await this.request({
            method: 'get',
            url: '/announcements',
        })
    }
    async getAnnouncementById(id) {
        return await this.request({
            method: 'get',
            url: `/product/get-product/${id}`
        })
    }
    async updateAnnouncement(id, data) {
        return await this.request({
            method: 'post',
            url: `/product/update-product/${id}`,
            data
        })
    }

    async deleteAnnouncement(id) {
        return await this.request({
            method: 'delete',
            url: `/announcements/${id}`,
        })
    }

    async addToFavorites(id) {
        return await this.request({
            method: 'post',
            url: `/announcements/${id}/favorite`
        })
    }
    async startChat(id){
        return await this.request({
            method: 'get',
            url: `/chat/${id}`
        })
    }
    async getChatList(id){
        return await this.request({
            method: 'get',
            url: `/chats`
        })
    }
    async getFavorites(){
        return await this.request({
            method: 'get',
            url: '/favorite'
        })
    }
}

export const api = new Api()