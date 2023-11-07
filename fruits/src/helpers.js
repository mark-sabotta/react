function choice(items) {
    return items[Math.floor(Math.random(0, items.length))];
}

function remove(items, item) {
    for(let i = 0; i < items.length; i++){
        if(item === items[i]){
            return items.splice(i, 1);
        }
    }
}

export {choice, remove};