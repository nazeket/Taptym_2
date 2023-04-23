import {http} from './index.js';

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

    async createAnnouncementApi(data) {
        return await this.request({
            method: 'post',
            url: '/announcement/create',
            data
        })
    }

    async getUserData() {
        return await this.request({
            method: 'get',
            url: '/auth/user'
        })
    }

    async getAnnouncementList(userId) {
        return await this.request({
            method: 'get',
            url: `/announcement/list?userId=${userId}`
        })
    }

    async getAnnouncementById(id) {
        return await this.request({
            method: 'get',
            url: `/announcement/${id}`
        })
    }
    async searchAnnouncement(term){
        return await this.request({
            method: 'get',
            url: `/announcement/search?term=${term}`
        })
    }
    async updateAnnouncement(data, id){
        return await this.request({
            method: 'post',
            url: '/announcement/update/' + id,
            data
        })
    }
    async addComment(data){
        return await this.request({
            method: 'post',
            url: '/announcement/add-comment',
            data
        })
    }
    async getComments(product_id){
        return await this.request({
            method: 'get',
            url: '/announcement/comments?productId=' + product_id,
        })
    }
}

export const api = new Api()