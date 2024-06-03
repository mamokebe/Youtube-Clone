export const API_KEY='AIzaSyA6ZuNm8eZcyAe_qu3t-K7viyiVA3zZ1GI';


export const value_converter =(value) => {
  if(value >= 1000000){
    return Math.floor(value/1000000)+"M";
  }
  else if(value>=1000){
    return Math.floor(value/1000)+"K";
  }
  else {
    return value;
  }
}