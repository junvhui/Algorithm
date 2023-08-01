function solution(new_id) {
    var answer = '';
    
    new_id = new_id.toLowerCase();
    new_id = new_id.match(/[a-z0-9-_.]/g).join('')
    new_id = new_id.replace(/\.{2,}/g, ".");
    new_id = new_id.replace(/^\.|\.$/, "");
    
    if (new_id.length === 0) {
        new_id = "a";
    }
    if (new_id.length >= 16) {
        new_id = new_id.slice(0, 15);
    }
    new_id = new_id.replace(/\.$/, "");
    
    const length = new_id.length
    if (length <= 2){
        new_id = new_id + (new_id[length-1].repeat(3 - length));
    }

    return new_id;
}