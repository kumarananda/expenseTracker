
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

export const TodayToYearMonthDay = () => {
  const date = new Date()
  let day = date.getDate()
  let month = date.getMonth() +1
  let year = date.getFullYear()
  let monthW_0 =  month < 10 ? "0"+ month : month
  let dayW_0 =  day < 10 ? "0"+ day : day

  return  year + "-" + monthW_0 + "-" + dayW_0
}

export const yearMonthDate = (data) => {
  const date = new Date(data)
  let day = date.getDate()
  let month = date.getMonth() +1
  let year = date.getFullYear()
  let monthW_0 =  month < 10 ? "0"+ month : month
  let dayW_0 =  day < 10 ? "0"+ day : day

  return  year + "-" + monthW_0 + "-" + dayW_0

}