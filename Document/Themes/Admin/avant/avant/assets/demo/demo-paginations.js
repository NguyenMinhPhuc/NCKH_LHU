$('#datepageinate-ex1').datepaginator();

$('#datepageinate-ex2').datepaginator({
    onSelectedDateChanged: function(event, date) {
      alert("Selected date: " + moment(date).format("Do, MMM YYYY"));
    }
});

$('#datepageinate-ex3').datepaginator({size: "large"});

$('#datepageinate-ex4').datepaginator({size: "small"});