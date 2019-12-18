export function upvote_comparator(a,b){
  if ( a.upvotes < b.upvotes ){
    return 1;
  }
  if ( a.upvotes > b.upvotes ){
    return -1;
  }
  return 0;
}

export function name_comparator (a,b){
  return a.name.localeCompare(b.name);
}
