const getdate = function (date) {
    const yyyy = date.getFullYear();
    const mm = date.getMonth() <9 ? `0${date.getMonth()+1}`:date.getMonth()+1;
    const dd = date.getDate() <10 ? `0${date.getDate()}` : date.getDate();
    return `${yyyy}-${mm}-${dd}`;
}
const date1 = getdate(new Date());
console.log(date1);