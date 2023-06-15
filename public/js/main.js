const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');   

const getInfo = async(event) => {
    event.preventDefault();
    let cityValue = cityName.value;
    if(cityValue === ""){

            city_name.innerText ='plz write the city name before search';
            datahide.classList.add('data_hide');
    }else{
        try{
            let weathercon;
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=48f2ce87ecbe55ff10e554dda1f546ab`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText =`${arrData[0].name} , ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            const temp_mod = arrData[0].weather[0].main;

            if(temp_mod == "Sunny")
            {
                temp_status.innerHTML =' <i class="fas fa-sun" aria-hidden="true" style="color: #eccc68;"></i>';
            } else if(temp_mod == "Clouds")
            {
                temp_status.innerHTML =' <i class="fas fa-cloud" aria-hidden="true" style="color: #f1f2f6;"></i>';
            } else if(temp_mod == "Rainy")
            {
                temp_status.innerHTML =' <i class="fas fa-cloud-rain" aria-hidden="true" style="color: #a4b0be;"></i>';
            }
            else if(temp_mod == "Clear"){
                temp_status.innerHTML =' <i class="fas fa-sun" aria-hidden="true" style="color: #eccc68;"></i>';
            }else{
                temp_status.innerHTML =' <i class="fas fa-sun" aria-hidden="true" style="color: #eccc68;"></i>';
            }

            datahide.classList.remove('data_hide');

        }catch(e){
            city_name.innerText ='plz write the city name properly!.....';
            datahide.classList.add('data_hide');
        }
       
    }
}
submitBtn.addEventListener('click',getInfo);