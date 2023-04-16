export const reformatDate = date => {
    if (date) {
        const data = new Date(date);
        let day = data.getDate();
        let month = data.getMonth() + 1;
        if (month < 10) {
            month = '0' + month;
        }
        if (day < 10) {
            day = '0' + day;
        }
        const year = data.getFullYear();
        return `${day}.${month}.${year}`;
    }
};

export const floatNumberWithSpaces = (x) => {
    let parts = x.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return parts.join('.');
}