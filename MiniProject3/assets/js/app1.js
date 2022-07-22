let btnToggle = 'year';
let tab = "homeLoanTab";

function setLoanChart(p, totalIntrestPaid) {
    // setup chart
    let data = {
        labels: ["Principle Loan Amount", "Toatl Interest",],
        datasets: [{
            backgroundColor: ["#88a825", "#ed8c2b"],
            data: [p, totalIntrestPaid]
        }]
    }
    //options chart
    let options = {
        responsive: false,
        maintainAspectRatio: false,
        color: "#fff",
        elements: {
            arc: {
                borderWidth: 7,
                borderColor: " #eeeeee"
            }
        },
        plugins: {
            tooltip: {
                enabled: true
            },
            legend: {
                display: true,
                labels: {
                    color: "black",
                    usePointStyle: true,
                    pointStyle: "circle",
                    padding: 20
                },
                position: "bottom",
                borderWidth: 1,
                borderColor: "black"
            },
            title: {
                display: true,
                text: 'Break-up of the total Payments',
                font: {
                    family: "Arial, Helvetica, sans-serif",
                    size: 15,
                    weight: 'bold',

                },
                color: 'black'
            },
            tooltips: {
                enabled: false
            },

        },


    }
    //configure chart
    let configure = {
        type: "pie",
        data,
        options
    }
    //render the chart
    let chartStatus = Chart.getChart("loanChart"); // <canvas> id
    if (chartStatus != undefined) {
        chartStatus.destroy();
    }
    let loanChart = $('#loanChart');
    let myChart = new Chart(loanChart, configure);
}

function setAmountToSlider(id) {
    if (id == "homeLoanTab") {
        $('#loanAmountSlider').removeAttr('min', "max", "list", "name");
        $('#loanAmountSlider').attr({
            min: '0',
            max: '20000000',
            list: "loanAmtList",
            name: "loan amount"
        }).val('5000000');
        $('#loanAmtList').empty();
        let val = 0;
        for (let i = 0; i <= 200; i += 25) {
            $('#loanAmtList').append($('<option>', {
                value: val,
                text: i == 0 ? 0 : i + 'L'
            }));
            val += 2500000;
        }
        $("#loanAmountInput").val(Number("5000000").toLocaleString('hi-IN'));

    } else if (id == "personalLoanTab") {
        $('#loanAmountSlider').removeAttr('min', "max", "list", "name");
        $('#loanAmountSlider').attr({
            min: '0',
            max: '3000000',
            list: "loanAmtList",
            name: "loan amount"
        }).val('750000');
        $('#loanAmtList').empty();
        let val = 0;
        for (let i = 0; i <= 30; i += 5) {
            $('#loanAmtList').append($('<option>', {
                value: val,
                text: i == 0 ? 0 : i + 'L'
            }));
            val += 500000;
        }
        $("#loanAmountInput").val(Number("750000").toLocaleString('hi-IN'));

    }
    else if (id == "carLoanTab") {
        $('#loanAmountSlider').removeAttr('min', "max", "list", "name");
        $('#loanAmountSlider').attr({
            min: '0',
            max: '2000000',
            list: "loanAmtList",
            name: "loan amount"
        }).val('400000');
        $('#loanAmtList').empty();
        let val = 0;
        for (let i = 0; i <= 20; i += 5) {
            $('#loanAmtList').append($('<option>', {
                value: val,
                text: i == 0 ? 0 : i + 'L'
            }));
            val += 500000;
        }
        $("#loanAmountInput").val(Number("400000").toLocaleString('hi-IN'));
    }
}
function setInrestToSlider(id) {
    if (id == "homeLoanTab") {
        $('#loanIntrestSlider').removeAttr('min', "max", "list", "name");
        $('#loanIntrestSlider').attr({
            min: '5',
            max: '20',
            step: '0.25',
            list: "intrstList",
            name: "intrstList"
        }).val('7.5');
        $('#intrstList').empty();
        for (let i = 5; i <= 20; i += 2.5) {
            $('#intrstList').append($('<option>', {
                value: i,
                text: i
            }));
        }
        $("#loanInterestInput").val(7.5);
    }
    else if (id == "personalLoanTab") {
        $('#loanIntrestSlider').removeAttr('min', "max", "list", "name");
        $('#loanIntrestSlider').attr({
            min: '5',
            max: '25',
            step: '0.25',
            list: "intrstList",
            name: "intrstList"
        }).val('11');
        $('#intrstList').empty();
        for (let i = 5; i <= 25; i += 2.5) {
            $('#intrstList').append($('<option>', {
                value: i,
                text: i
            }));
        }
        $("#loanInterestInput").val(11);

    } else if (id == "carLoanTab") {
        $('#loanIntrestSlider').removeAttr('min', "max", "list", "name");
        $('#loanIntrestSlider').attr({
            min: '5',
            max: '20',
            step: '2.5',
            list: "intrstList",
            name: "intrstList"
        }).val('8.5');
        $('#intrstList').empty();
        for (let i = 5; i <= 20; i += 2.5) {
            $('#intrstList').append($('<option>', {
                value: i,
                text: i
            }));
        }
        $("#loanInterestInput").val(8.5);

    }

}

function setTenureYrToSlider(id) {
    if (id == "homeLoanTab") {
        $('#loanTenureSlider').removeAttr('min', "max", "list");
        $('#loanTenureSlider').attr({
            min: '0',
            max: '30',
            step: '0.25',
            list: "loanTenrList",
        }).val('20');
        $('#loanTenrList').empty();
        for (let i = 0; i <= 30; i += 5) {
            $('#loanTenrList').append($('<option>', {
                value: i,
                text: i
            }));
        }
        $("#loanYearTenureInput").val(20);
    }
    else if (id == "personalLoanTab") {
        $('#loanTenureSlider').removeAttr('min', "max", "list");
        $('#loanTenureSlider').attr({
            min: '0',
            max: '5',
            step: '0.25',
            list: "loanTenrList",
        }).val('3');
        $('#loanTenrList').empty();
        for (let i = 0; i <= 5; i++) {
            $('#loanTenrList').append($('<option>', {
                value: i,
                text: i
            }));
        }
        $("#loanYearTenureInput").val(3);

    } else if (id == "carLoanTab") {
        $('#loanTenureSlider').removeAttr('min', "max", "list");
        $('#loanTenureSlider').attr({
            min: '0',
            max: '7',
            step: '0.25',
            list: "loanTenrList",
        }).val('5');
        $('#loanTenrList').empty();
        for (let i = 0; i <= 7; i++) {
            $('#loanTenrList').append($('<option>', {
                value: i,
                text: i
            }));
        }
        $("#loanYearTenureInput").val(5);
    }

}
function setTenureMnthToSlider(id) {
    if (id == "homeLoanTab") {
        $('#loanTenureSlider').removeAttr('min', "max", "list");
        $('#loanTenureSlider').attr({
            min: '0',
            max: '360',
            list: "loanTenrList",
        }).val('240');
        $('#loanTenrList').empty();
        for (let i = 0; i <= 360; i += 60) {
            $('#loanTenrList').append($('<option>', {
                value: i,
                text: i
            }));
        }
        $("#loanYearTenureInput").val(240);
    }
    else if (id == "personalLoanTab") {
        $('#loanTenureSlider').removeAttr('min', "max", "list");
        $('#loanTenureSlider').attr({
            min: '0',
            max: '60',
            list: "loanTenrList",
        }).val('36');
        $('#loanTenrList').empty();
        for (let i = 0; i <= 60; i += 12) {
            $('#loanTenrList').append($('<option>', {
                value: i,
                text: i
            }));
        }
        $("#loanYearTenureInput").val(36);

    } else if (id == "carLoanTab") {
        $('#loanTenureSlider').removeAttr('min', "max", "list");
        $('#loanTenureSlider').attr({
            min: '0',
            max: '84',
            list: "loanTenrList",
        }).val('60');
        $('#loanTenrList').empty();
        for (let i = 0; i <= 84; i += 12) {
            $('#loanTenrList').append($('<option>', {
                value: i,
                text: i
            }));
        }
        $("#loanYearTenureInput").val(60);
    }
}
function findIntrstPayable(btnToggle) {
    let amountValue = $('#loanAmountInput').val();
    let interestValue = $('#loanInterestInput').val();
    let yearValue = $('#loanYearTenureInput').val();
    if (Number(yearValue) == 0) {
        $('loanYearTenureInput').val(1);
        $('loanTenureSlider').val(1);
    }
    let str = amountValue.replace(/,/g, '');
    let p = Number(str.trim());
    let r = Number(interestValue) / 12 / 100;
    let n = btnToggle == "year" ? Number(yearValue) * 12 : Number(yearValue);
    let emi = (p * r * (((1 + r) ** n) / (((1 + r) ** n) - 1)));
    let totalAmountValue = (emi * n);
    let totalIntrestPaid = ((emi * n) - p);
    let emiText = emi.toLocaleString("hi-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
    let totalAmtText = totalAmountValue.toLocaleString("hi-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
    let intrestText = totalIntrestPaid.toLocaleString("hi-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
    $('#emiValue').text(emiText);
    $('#totalIntrestValue').text(intrestText);
    $('#totalAmountValue').text(totalAmtText);
    setLoanChart(p, totalIntrestPaid);
}
function setsliders(id) {
    let tabTitle;
    if ($(id).hasClass('home-loan')) {
        tabTitle = "Home Loan Amount";
        tab = "homeLoanTab";
    } else if ($(id).hasClass('personal-loan')) {
        tabTitle = "Personal Loan Amount";
        tab = "personalLoanTab";
    } else if ($(id).hasClass('car-loan')) {
        tabTitle = "Car Loan Amount";
        tab = "carLoanTab";
    }
    $("#LoanAmtLabel").text(tabTitle);
    setAmountToSlider(tab);
    setInrestToSlider(tab);
    if (btnToggle == "year") {
        setTenureYrToSlider(tab);
    } else if (btnToggle == "month") {
        setTenureMnthToSlider(tab);
    }
    findIntrstPayable(btnToggle);
}

$(function () {
    let activeTabId = $('#homeLoanTab');
    setsliders(activeTabId);

    $('input.inpt').on('change', function () {
        let inputValue = $(this).val();
        if (this == $('#loanAmountInput')) {
            this.val(Number(inputValue).toLocaleString('hi-IN'));
        }
        let rangeId = this.dataset.range;
        $(rangeId).val(inputValue);
        findIntrstPayable(btnToggle);
    });

    $('input.range').on('change', function () {
        let rangeValue = $(this).val();
        let inputId = this.dataset.input;
        $(inputId).val(Number(rangeValue).toLocaleString('hi-IN'));
        findIntrstPayable(btnToggle);
    });

    $('.btn-toggle').on('click', function () {
        $('.btn-toggle').each(function () {
            $(this).removeClass('btn-active')
        });
        $(this).addClass('btn-active');
        if ($(this).get(0) === $('#loanYr').get(0)) {
            btnToggle = "year";
            setTenureYrToSlider(tab);
            findIntrstPayable(btnToggle);
        } else if ($(this).get(0) == $('#loanMtn').get(0)) {
            btnToggle = "month"
            setTenureMnthToSlider(tab);
            findIntrstPayable(btnToggle);
        }
    });

    $('.nav-list').on('click', function () {
        $('.nav-list').each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');
        setsliders(this);
    })
});