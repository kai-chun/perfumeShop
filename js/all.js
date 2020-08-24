$(document).ready(function () {
    $('.ham').click(function () {
        $('.header_menu-m').toggleClass('active');
    });
});

/* 改變地址之縣市及鄉鎮市區 */
/* 參考 donma 的 github 資料https://github.com/donma/TaiwanAddressCityAreaRoadChineseEnglishJSON */
/* 
無法import axios QQ 先放置

const url = "CityCountyData.json";

const selectC_Address = document.querySelector('#contactAddress');
const selectC_County = document.querySelector('#contactCounty');
const selectC_District = document.querySelector('#contactDistrict');

const selectD_Address = document.querySelector('#deliveryAddress');
const selectD_County = document.querySelector('#deliveryCounty');
const selectD_District = document.querySelector('#deliveryDistrict');

let mainCountyList = [];
let otherCountyList = [];
let distList = [];

function updateCountyList(e) {
    let content = "<option value=''>縣市</option>";
    if (e.target.value == "mainland") {
        mainCountyList.forEach((item) => {
            let str = `<option value="${item}">${item}</option>`;
            content += str;
        });
    } else {
        otherCountyList.forEach((item) => {
            let str = `<option value="${item}">${item}</option>`;
            content += str;
        });
    }
    if (e.target == "selectC_Address") {
        selectC_County.innerHTML = content;
    } else {
        selectD_County.innerHTML = content;
    }
}

function updateDistList(e) {
    let content = "<option value=''>鄉鎮市區</option>";
    distList.forEach((item) => {
        if (e.target.value == item.county) {
            item.district.forEach((dist) => {
                let str = `<option>${dist}</option>`;
                content += str;
            });
        }
    });
    if (e.target == "selectC_County") {
        selectC_District.innerHTML = content;
    } else {
        selectD_District.innerHTML = content;
    }
}

axios.get(url).then((response) => {
    response.data.forEach((item) => {
        if (item.CityName == "連江縣" || item.CityName == "釣魚臺" || item.CityName == "南海島" || item.CityName == "澎湖縣" || item.CityName == "金門縣") {
            otherCountyList.push(item.CityName);
        } else {
            mainCountyList.push(item.CityName);
        }
        let tmp = [];
        item["AreaList"].forEach((dist) => {
            tmp.push(dist.AreaName);
        });
        let obj = {
            "county": item.CityName, "district": tmp
        };
        distList.push(obj);
    });
});

selectC_Address.addEventListener('change', updateCountyList);
selectC_County.addEventListener('change', updateDistList);
selectD_Address.addEventListener('change', updateCountyList);
selectD_County.addEventListener('change', updateDistList);
*/