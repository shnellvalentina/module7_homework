function EmptyObj () {
    return Object.create(null)
}

const NewEmptyObj = EmptyObj();
console.log (NewEmptyObj);