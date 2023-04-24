import {LoginCredentials, ProfileData, RegisterCredentials, Statement} from "@/utils/class.js";

export const state = {
    isLoading: false,
    loaders: {
        delete: false,
        isContentLoading: false,
        isContentDetailLoading: false,
        addComment: false,
        isUserDataLoading: false,
        approve: false,
        reject: false,
    },
    LoginCredentials: {...new LoginCredentials()},
    RegisterCredentials: {...new RegisterCredentials()},
    tradeProductHeader: '',
    profileData: {},
    filter: ['rating'],
    Statement: {...new Statement()},
    contents: [],
    comment: {
        title: '',
        text: ''
    },
    comments: [],
    userHashtags: [],
    announcementList: [],
    similarAnnouncements: [],
    createPanel: false,
    editPanel: false,
    htmlPage: '',
    city: [
        {
            id: 1,
            name: 'Алматы',
        },
        {
            id: 2,
            name: 'Астана',
        },
        {
            id: 3,
            name: 'Шымкент',
        },
        {
            id: 4,
            name: 'Тараз',
        }
    ],
    tradeType: [
        {
            id: 1,
            name: 'Продаю',
            type: 'sell',
        },
        {
            id: 2,
            name: 'Покупаю',
            type: 'buy'
        }
    ],
    category: [
        {
            id: 1,
            name: 'Транспорт',
            type: 'auto',
        },
        {
            id: 2,
            name: 'Работа',
            type: 'more',
        },
        {
            id: 3,
            name: 'Недвижимость',
            type: 'quarter',
        },
        {
            id: 4,
            name: 'Объявления',
            type: 'announcements',
        },
        {
            id: 5,
            name: 'Животные',
            type: 'animals',
        },
        {
            id: 6,
            name: 'Электроника',
            type: 'electronics'
        }
    ],
    announcements: [],
    buy: {
        more: [],
        auto: [],
        services: [],
        quarter: [],
    },
    sell: {
        more: [],
        auto: [],
        services: [],
        quarter: [],
    },
    favorites: {
        more: [],
        auto: [],
        services: [],
        quarter: [],
    },
    search: {
        term: ''
    }
}