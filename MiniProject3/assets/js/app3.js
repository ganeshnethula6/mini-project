let monthsArray;
let dayNames;
const date = new Date();
let yearsArray = [];
let presYear;
let presMon;
let preDate;
let preDay;
let thisYear = Number(date.getFullYear());
let thisMonth = Number(date.getMonth());
let thisDate = Number(date.getDate());
let thisDay = Number(date.getDay());
console.log(thisDay);
dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

for (let i = 2050; i >= 1900; i--) {
    yearsArray.push(i);
}

function getLastDate(year, mon) {
    return new Date(Number(year), Number(mon), 0).getDate();
}

function getFirstDay(year, mon) {
    return new Date(Number(year), Number(mon), 1).getDay();
}
function setSlctDrpDwnValues(year, mon) {
    // this is in javaScript
   // document.getElementById("monthDrpDwn").value=mon;
   //document.getElementById("yearDrpDwn").value=mon;
    // this is in jQueary
    $('#monthDrpDwn').val(mon);
    $('#yearDrpDwn').val(year);
}
function setHeaderDate(year, mon) {
    $('#year-title').text(monthsArray[mon] + " " + year);
}
function setYearValues() {
    $.each(yearsArray, function (index, value) {
        $('#yearDrpDwn').append($('<option>', {
            value: value,
            text: value
        }));
    });
}
function setMonthValues() {
    $.each(monthsArray, function (index, value) {
        $('#monthDrpDwn').append($('<option>', {
            value: index,
            text: value
        }));
    });
}

function printCalender(year, month) {
    presYear = year;
    presMon = month;
    setHeaderDate(presYear, presMon);
    setSlctDrpDwnValues(presYear, presMon);
    let row = "";
    let flag = true;
    let firstDay = getFirstDay(year, month);
    let lastDate = getLastDate(year, month + 1);
    let i = 1
    while (i <= lastDate) {
        var col = "";
        if (flag) {
            let c = "";
            for (let j = 0; j < firstDay; j++) {
                c += "<td></td>";
            }
            for (let j = firstDay; j < 7; j++, i++) {
                if (month == thisMonth && thisYear == year && thisDate == i) {
                    c += "<td class='current-date'>" + i + "<span class='danger'>*</span> </td>";
                }
                else {
                    c += "<td>" + i + "</td>";
                }
            }
            flag = false;
            row += row += "<tr>" + c + "</tr>";;
        }
        for (let j = 0; j <= 6 && i <= lastDate; j++, i++) {
            if (month == thisMonth && thisYear == year && thisDate == i) {
                col += "<td class='current-date'>" + i + "<span class='danger'>*</span> </td>";
            }
            else {
                col += "<td>" + i + "</td>";
            }

        }
        row += "<tr>" + col + "</tr>";
    }
    $("#calender").append(row);
}

$(function () {
    setMonthValues();
    setYearValues();
    printCalender(thisYear, thisMonth);
    $('select').on('click change', function () {
        let m = $('#monthDrpDwn :selected').val();
        let y = $('#yearDrpDwn :selected').val();
        let date = new Date(y, m);
        let year = date.getFullYear();
        let mon = date.getMonth();
        $("table tr:gt(0)").remove();
        printCalender(year, mon);
    });

    $("[id=prev]").on('click', function () {
        let date = new Date(presYear, presMon - 1);
        let year = date.getFullYear();
        let mon = date.getMonth();
        $("table tr:gt(0)").remove();
        printCalender(year, mon);
    });
    $("[id=nxt]").on('click', function () {
        let date = new Date(presYear, presMon + 1);
        let year = date.getFullYear();
        let mon = date.getMonth();
        $("table tr:gt(0)").remove();
        printCalender(year, mon);
    });

});