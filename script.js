
let calculate = document.getElementById('calculate');
calculate.addEventListener('click', e => {
    //getting all the parameters for Monday
    let s_mon_hour = Number(document.getElementById('start-mon-h').value);
    let s_mon_min = Number(document.getElementById('start-mon-m').value);
    let e_mon_hour = Number(document.getElementById('end-mon-h').value);
    let e_mon_min = Number(document.getElementById('end-mon-m').value);
    let s_mon_zone = Number(document.getElementById('start-zone-select-mon').value);
    let e_mon_zone = Number(document.getElementById('end-zone-select-mon').value);
    let mon_break_hour = Number(document.getElementById('br-mon-h').value);
    let mon_break_min = (Number(document.getElementById('br-mon-m').value)) / 60;
    let total_mon_break = mon_break_hour + mon_break_min;
    //Calculation of Total Time
    let mon_total_start_time = s_mon_hour + (s_mon_min * 1 / 60) + s_mon_zone;
    let mon_total_end_time = ((e_mon_hour) + (e_mon_min * 1 / 60)) + e_mon_zone;
    let mon_total_shift = mon_total_end_time - mon_total_start_time;
    let mon_total = mon_total_shift - total_mon_break;
    document.getElementById('mon-total').innerHTML = mon_total;

    let s_tue_hour = Number(document.getElementById('start-tue-h').value);
    let s_tue_min = Number(document.getElementById('start-tue-m').value);
    let e_tue_hour = Number(document.getElementById('end-tue-h').value);
    let e_tue_min = Number(document.getElementById('end-tue-m').value);
    let s_tue_zone = Number(document.getElementById('start-zone-select-tue').value);
    let e_tue_zone = Number(document.getElementById('end-zone-select-tue').value);
    let tue_break_hour = Number(document.getElementById('br-tue-h').value);
    let tue_break_min = (Number(document.getElementById('br-tue-m').value)) / 60;
    let total_tue_break = tue_break_hour + tue_break_min;
    
    let tue_total_start_time = s_tue_hour + (s_tue_min * 1 / 60) + s_tue_zone;
    let tue_total_end_time = ((e_tue_hour) + (e_tue_min * 1 / 60)) + e_tue_zone;
    let tue_total_shift = tue_total_end_time - tue_total_start_time;
    let tue_total = tue_total_shift - total_tue_break;
    document.getElementById('tue-total').innerHTML = tue_total;
    
    
    let s_wed_hour = Number(document.getElementById('start-wed-h').value);
    let s_wed_min = Number(document.getElementById('start-wed-m').value);
    let e_wed_hour = Number(document.getElementById('end-wed-h').value);
    let e_wed_min = Number(document.getElementById('end-wed-m').value);
    let s_wed_zone = Number(document.getElementById('start-zone-select-wed').value);
    let e_wed_zone = Number(document.getElementById('end-zone-select-wed').value);
    let wed_break_hour = Number(document.getElementById('br-wed-h').value);
    let wed_break_min = (Number(document.getElementById('br-wed-m').value))/60;
    let total_wed_break = wed_break_hour + wed_break_min;
    
    let wed_total_start_time = s_wed_hour + (s_wed_min * 1 / 60) + s_wed_zone;
    let wed_total_end_time = ((e_wed_hour) + (e_wed_min * 1 / 60)) + e_wed_zone;
    let wed_total_shift = wed_total_end_time - wed_total_start_time;
    let wed_total = wed_total_shift - total_wed_break;
    document.getElementById('wed-total').innerHTML = wed_total;

    let s_thu_hour = Number(document.getElementById('start-thu-h').value);
    let s_thu_min = Number(document.getElementById('start-thu-m').value);
    let e_thu_hour = Number(document.getElementById('end-thu-h').value);
    let e_thu_min = Number(document.getElementById('end-thu-m').value);
    let s_thu_zone = Number(document.getElementById('start-zone-select-thu').value);
    let e_thu_zone = Number(document.getElementById('end-zone-select-thu').value);
    let thu_break_hour = Number(document.getElementById('br-thu-h').value);
    let thu_break_min = (Number(document.getElementById('br-thu-m').value))/60;
    let total_thu_break = thu_break_hour + thu_break_min;
    
    let thu_total_start_time = s_thu_hour + (s_thu_min * 1 / 60) + s_thu_zone;
    let thu_total_end_time = ((e_thu_hour) + (e_thu_min * 1 / 60)) + e_thu_zone;
    let thu_total_shift = thu_total_end_time - thu_total_start_time;
    let thu_total = thu_total_shift - total_thu_break;
    document.getElementById('thu-total').innerHTML = thu_total;
    
    let s_fri_hour = Number(document.getElementById('start-fri-h').value);
    let s_fri_min = Number(document.getElementById('start-fri-m').value);
    let e_fri_hour = Number(document.getElementById('end-fri-h').value);
    let e_fri_min = Number(document.getElementById('end-fri-m').value);
    let s_fri_zone = Number(document.getElementById('start-zone-select-fri').value);
    let e_fri_zone = Number(document.getElementById('end-zone-select-fri').value);
    let fri_break_hour = Number(document.getElementById('br-fri-h').value);
    let fri_break_min = (Number(document.getElementById('br-fri-m').value))/60;
    let total_fri_break = fri_break_hour + fri_break_min;
    
    let fri_total_start_time = s_fri_hour + (s_fri_min * 1 / 60) + s_fri_zone;
    let fri_total_end_time = ((e_fri_hour) + (e_fri_min * 1 / 60)) + e_fri_zone;
    let fri_total_shift = fri_total_end_time - fri_total_start_time;
    let fri_total = fri_total_shift - total_fri_break;
    document.getElementById('fri-total').innerHTML = fri_total;
    
    let s_sat_hour = Number(document.getElementById('start-sat-h').value);
    let s_sat_min = Number(document.getElementById('start-sat-m').value);
    let e_sat_hour = Number(document.getElementById('end-sat-h').value);
    let e_sat_min = Number(document.getElementById('end-sat-m').value);
    let s_sat_zone = Number(document.getElementById('start-zone-select-sat').value);
    let e_sat_zone = Number(document.getElementById('end-zone-select-sat').value);
    let sat_break_hour = Number(document.getElementById('br-sat-h').value);
    let sat_break_min = (Number(document.getElementById('br-sat-m').value))/60;
    let total_sat_break = sat_break_hour + sat_break_min;
    
    let sat_total_start_time = s_sat_hour + (s_sat_min * 1 / 60) + s_sat_zone;
    let sat_total_end_time = ((e_sat_hour) + (e_sat_min * 1 / 60)) + e_sat_zone;
    let sat_total_shift = sat_total_end_time - sat_total_start_time;
    let sat_total = sat_total_shift - total_sat_break;
    document.getElementById('sat-total').innerHTML = sat_total;
    
    let s_sun_hour = Number(document.getElementById('start-sun-h').value);
    let s_sun_min = Number(document.getElementById('start-sun-m').value);
    let e_sun_hour = Number(document.getElementById('end-sun-h').value);
    let e_sun_min = Number(document.getElementById('end-sun-m').value);
    let s_sun_zone = Number(document.getElementById('start-zone-select-sun').value);
    let e_sun_zone = Number(document.getElementById('end-zone-select-sun').value);
    let sun_break_hour = Number(document.getElementById('br-sun-h').value);
    let sun_break_min = (Number(document.getElementById('br-sun-m').value))/60;
    let total_sun_break = sun_break_hour + sun_break_min;

    let sun_total_start_time = s_sun_hour + (s_sun_min * 1 / 60) + s_sun_zone;
    let sun_total_end_time = ((e_sun_hour) + (e_sun_min * 1 / 60)) + e_sun_zone;
    let sun_total_shift = sun_total_end_time - sun_total_start_time;
    let sun_total = sun_total_shift - total_sun_break;
    document.getElementById('sun-total').innerHTML = sun_total;
    
    //Total
    document.getElementById('total-h').innerHTML = mon_total+tue_total+wed_total+thu_total+fri_total+sat_total+sun_total;
    
})
//code for clearing
let clear = document.getElementById('clear');
clear.addEventListener('click', e => {
    window.location.reload();
});