import {LoginCredentials, ProfileData, RegisterCredentials, Statement} from "@/utils/class.js";

export const state = {
    isLoading: false,
    loaders: {
        delete: false,
        isContentLoading: false,
        isContentDetailLoading: false,
        isChatLoading: false,
        isUserDataLoading: false,
    },
    LoginCredentials: {...new LoginCredentials()},
    RegisterCredentials: {...new RegisterCredentials()},
    tradeProductHeader: '',
    profileData: {},
    Statement: {...new Statement()},
    contents: [],
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
            name: 'Авто',
            type: 'auto',
        },
        {
            id: 2,
            name: 'Прочее',
            type: 'more',
        },
        {
            id: 3,
            name: 'Жилье',
            type: 'quarter',
        },
        {
            id: 4,
            name: 'Услуги',
            type: 'services',
        }
    ],
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
    }
}