export class LoginCredentials {
    email = ''
    password = ''
}

export class RegisterCredentials {
    email = ''
    phone = ''
    password = ''
    password_confirmation = ''
}

export class ProfileData {
    name = ''
    email = ''
    phoneNumber = ''
    avatar = ''
    password2 = ''
}

export class Statement {
    images = ''
    tradeType = ''
    category = ''
    title = ''
    hashtags = [
        {
            name: '# buy'
        },
        {
            name: '# test'
        }
    ]
    city = ''
    price = ''
    description = ''
}