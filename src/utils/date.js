
export let timeStamp = date => new Date(date).getTime();
export const minMaxDate = array => {
  if (array.length > 0) {
    let min = array[0].transDate;
    let max = array[array.length - 1].transDate;
    array.map(item => {
      if (timeStamp(min) > timeStamp(item.transDate)) {
        min = item.transDate;
      }
      if (timeStamp(max) < timeStamp(item.transDate)) {
        max = item.transDate;
      }
    });
    return { min, max };
  } else {
    return null;
  }
};