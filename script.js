let calculate = document.getElementById('calculate');
//handling event when calculate button is clicked
calculate.addEventListener('click', e => {
    //getting all the elements from which values are requored
    let s_hour = document.getElementsByClassName('inp-time-start-h');
    let s_min = document.getElementsByClassName('inp-time-start-m');
    let e_hour = document.getElementsByClassName('inp-time-end-h');
    let e_min = document.getElementsByClassName('inp-time-end-m');
    let br_hour = document.getElementsByClassName('inp-time-br-h');
    let br_min = document.getElementsByClassName('inp-time-br-m');
    let start_zone = document.getElementsByClassName('AMPM-start');
    let end_zone = document.getElementsByClassName('AMPM-end');
    let day_total = document.getElementsByClassName('total');
    let total_hour = document.getElementById('total-h');
    let week_total_hour = 0;
    //loops runs till the number of days and time of each days are accessed one by one using loop
    for (let i = 0; i < 7; i++) {
        //calculating total starting time
        let total_start_time = Number(s_hour[i].value) + Number(s_min[i].value * 1 / 60) + Number(start_zone[i].value);
        //calculating total end time
        let total_end_time = Number(e_hour[i].value) + Number(e_min[i].value * 1 / 60) + Number(end_zone[i].value);
        //calculating total break time
        let total_break_time = Number(br_hour[i].value) + Number(br_min[i].value);
        //calculating total day shift
        let total_day_shift = total_end_time - total_start_time;
        //calculating total shift time after excluding break time
        let total = total_day_shift - total_break_time;
        //putting total remaining time of a day in table
        day_total[i].innerHTML = total;
        //calculating the remaining time of full week
        week_total_hour = week_total_hour + total;
    }
    //inserting total hours in the html
    total_hour.innerHTML = week_total_hour;

});
//code for clearing
let clear = document.getElementById('clear');
clear.addEventListener('click', e => {
    window.location.reload();
});