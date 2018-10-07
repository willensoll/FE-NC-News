
const sort = (array, type) => {
    switch (type) {
        case 'new':
            array.sort((a, b) => b.created_at.localeCompare(a.created_at))
            break;
        case 'old':
            array.sort((a, b) => a.created_at.localeCompare(b.created_at))
            break;
        case 'hot':
            array.sort((a, b) => b.votes - a.votes)
            break;
        case 'not':
            array.sort((a, b) => a.votes - b.votes)
            break;
        default:
            array.sort((a, b) => b.created_at.localeCompare(a.created_at))
    }
    return array
}

export default sort;