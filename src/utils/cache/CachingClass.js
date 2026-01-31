class Caching{
constructor(tableArray){
this.tableArray = tableArray;
}
getFirstById(id) {
    let left = 0;
    let right = this.tableArray.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const item = this.tableArray[mid];

      if (item.id === id) return item;

      if (id < item.id) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return null;
}

feed(data){
    this.tableArray.length = 0;
    this.tableArray.push(data);
}

getAll(){
    return this.tableArray;
}
}
export default Caching;