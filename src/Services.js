const getFormattedDate = (date) => {
    if (date) {
        date = new Date(date);
        return date.toLocaleString('default', { day: 'numeric', month: 'short', year: 'numeric' });
    } else return null;
}

const getDuration = (startDate, endDate) => {
    if (startDate && endDate) {
        startDate = new Date(startDate);
        endDate = new Date(endDate);
        let months;
        months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
        months -= startDate.getMonth();
        months += endDate.getMonth();
        months = Math.abs(months)
        const year = ~~(months / 12)
        return `${(year ? year + " years" : '')} ${months % 12} months`;
    } return ''
}

export { getFormattedDate, getDuration };