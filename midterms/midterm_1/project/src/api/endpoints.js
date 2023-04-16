import { http } from './index.js';

class Api {
    async request(config) {
        const { data } = await http.request(config);
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
}

export const api = new Api()