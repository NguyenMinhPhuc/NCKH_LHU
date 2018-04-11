// -------------------------------
// Demos: Form Components
// -------------------------------

$(function() {

    //FSEditor
    $(".fullscreen").fseditor({maxHeight: 500});

     // iPhone like button Toggle (uncommented because already activated in demo.js)
     // $('.toggle').toggles({on:true});

    // Autogrow Textarea
    $('textarea.autosize').autosize({append: "\n"});

    //Typeahead for Autocomplete
    $('.example-countries.typeahead').typeahead({
      name: 'countries',
      prefetch: 'assets/demo/countries.json',
      limit: 10
    });

    //Color Picker
    $('.cpicker').colorpicker();


    //Bootstrap Date Picker
    $('#datepicker,#datepicker2,#datepicker3').datepicker();
    $('#datepicker-pastdisabled').datepicker({startDate: "today"});
    $('#datepicker-startview1').datepicker({startView: 1});
    //http://eternicode.github.io/bootstrap-datepicker/


    //jQueryUI Time Picker
    $('#timepicker1,#timepicker3').timepicker();
    $("#timepicker2").timepicker({
        showPeriod: true,
        showLeadingZero: true
    });
    $('#timepickerbtn2').click(function () {
        $('#timepicker2').timepicker("show");
    });
    $("#timepicker4").timepicker({
       hours: { starts: 6, ends: 19 },
       minutes: { interval: 15 },
       rows: 3,
       showPeriodLabels: true,
       minuteText: 'Min'
    });


    // Date Range Picker
    $(document).ready(function() {
        $('#daterangepicker1').daterangepicker();
    });

    $('#daterangepicker2').daterangepicker(
        {
          ranges: {
             'Today': [moment(), moment()],
             'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
             'Last 7 Days': [moment().subtract('days', 6), moment()],
             'Last 30 Days': [moment().subtract('days', 29), moment()],
             'This Month': [moment().startOf('month'), moment().endOf('month')],
             'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
          },
          opens: 'left',
          startDate: moment().subtract('days', 29),
          endDate: moment()
        },
        function(start, end) {
            $('#daterangepicker2 span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
        }
    );

    $('#daterangepicker3').daterangepicker({ timePicker: true, timePickerIncrement: 30, format: 'MM/DD/YYYY h:mm A' });



    //Tokenfield

    $('#tokenfield-jQUI').tokenfield({
      autocomplete: {
        source: ['red','blue','green','yellow','violet','brown','purple','black','white'],
        delay: 100
      },
      showAutocompleteOnFocus: true
    });

    $('#tokenfield-typeahead').tokenfield({
      typeahead: {
        name: 'tags',
        local: ['red','blue','green','yellow','violet','brown','purple','black','white'],
      }
    });

    $('#tokenfield-email')
      .on('beforeCreateToken', function (e) {
        var token = e.token.value.split('|')
        e.token.value = token[1] || token[0]
        e.token.label = token[1] ? token[0] + ' (' + token[1] + ')' : token[0]
      })
      .on('afterCreateToken', function (e) {
        // Über-simplistic e-mail validation
        var re = /\S+@\S+\.\S+/
        var valid = re.test(e.token.value)
        if (!valid) {
          $(e.relatedTarget).addClass('invalid')
        }
      })
      .on('beforeEditToken', function (e) {
        if (e.token.label !== e.token.value) {
          var label = e.token.label.split(' (')
          e.token.value = label[0] + '|' + e.token.value
        }
      })
      .on('removeToken', function (e) {
        alert('Token removed! Token value was: ' + e.token.value)
      })
      .on('preventDuplicateToken', function (e) {
        alert('Duplicate detected! Token value is: ' + e.token.value)
      })
      .tokenfield();

    //SELECT2

    //For detailed documentation, see: http://ivaynberg.github.io/select2/index.html

    //Populate all select boxes with from select#source
    var opts=$("#source").html(), opts2="<option></option>"+opts;
    $("select.populate").each(function() { var e=$(this); e.html(e.hasClass("placeholder")?opts2:opts); });

    //select2
    $("#e1,#e2").select2({width: 'resolve'});

    $("#e3").select2({
            minimumInputLength: 2,
            width: 'resolve'
        });

    $("#e5").select2({
        minimumInputLength: 1,
        width: 'resolve',
        query: function (query) {
            var data = {results: []}, i, j, s;
            for (i = 1; i < 5; i++) {
                s = "";
                for (j = 0; j < i; j++) {s = s + query.term;}
                data.results.push({id: query.term + i, text: s});
            }
            query.callback(data);
        }
    });

    $("#e12").select2({width: "resolve", tags:["red", "white", "purple", "orange", "yellow"]});


    $("#e9").select2({width: 'resolve'});


    //Rotten Tomatoes Infinite Scroll + Remote Data example
    $("#e7").select2({
        placeholder: "Search for a movie",
        minimumInputLength: 3,
        width: 'resolve',
        ajax: {
            url: "http://api.rottentomatoes.com/api/public/v1.0/movies.json",
            dataType: 'jsonp',
            quietMillis: 100,
            data: function (term, page) { // page is the one-based page number tracked by Select2
                return {
                    q: term, //search term
                    page_limit: 10, // page size
                    page: page, // page number
                    apikey: "q7jnbsc56ysdyvvbeanghegk" // please do not use so this example keeps working
                };
            },
            results: function (data, page) {
                var more = (page * 10) < data.total; // whether or not there are more results available

                // notice we return the value of more so Select2 knows if more results can be loaded
                return {results: data.movies, more: more};
            }
        },
        formatResult: movieFormatResult,
        formatSelection: movieFormatSelection,
        dropdownCssClass: "bigdrop", // apply css that makes the dropdown taller
        escapeMarkup: function (m) { return m; } // we do not want to escape markup since we are displaying html in results
    });


  //MULTISELECT2

  // For detailed documentatin, see: loudev.com

$('#multi-select2').multiSelect();

$('#multi-select').multiSelect({
  selectableHeader: "<input type='text' class='form-control' style='margin-bottom: 10px;'  autocomplete='off' placeholder='Filter entries...'>",
  selectionHeader: "<input type='text' class='form-control' style='margin-bottom: 10px;' autocomplete='off' placeholder='Filter entries...'>",
  afterInit: function(ms){
    var that = this,
        $selectableSearch = that.$selectableUl.prev(),
        $selectionSearch = that.$selectionUl.prev(),
        selectableSearchString = '#'+that.$container.attr('id')+' .ms-elem-selectable:not(.ms-selected)',
        selectionSearchString = '#'+that.$container.attr('id')+' .ms-elem-selection.ms-selected';

    that.qs1 = $selectableSearch.quicksearch(selectableSearchString)
    .on('keydown', function(e){
      if (e.which === 40){
        that.$selectableUl.focus();
        return false;
      }
    });

    that.qs2 = $selectionSearch.quicksearch(selectionSearchString)
    .on('keydown', function(e){
      if (e.which == 40){
        that.$selectionUl.focus();
        return false;
      }
    });
  },
  afterSelect: function(){
    this.qs1.cache();
    this.qs2.cache();
  },
  afterDeselect: function(){
    this.qs1.cache();
    this.qs2.cache();
  }
  });


});








function movieFormatResult(movie) {
        var markup = "<table class='movie-result'><tr>";
        if (movie.posters !== undefined && movie.posters.thumbnail !== undefined) {
            markup += "<td class='movie-image'><img src='" + movie.posters.thumbnail + "'/></td>";
        }
        markup += "<td class='movie-info'><div class='movie-title'>" + movie.title + "</div>";
        if (movie.critics_consensus !== undefined) {
            markup += "<div class='movie-synopsis'>" + movie.critics_consensus + "</div>";
        }
        else if (movie.synopsis !== undefined) {
            markup += "<div class='movie-synopsis'>" + movie.synopsis + "</div>";
        }
        markup += "</td></tr></table>"
        return markup;
    }

    function movieFormatSelection(movie) {
        return movie.title;
    }