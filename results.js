$(document).ready(function () {
  let tableNumber = 0;
  questions.forEach((i) => {
    tableNumber++;

    /* list questions and ideas per item */
    let questionsAndIdeas = '';
    if (i.questions_ideas) {
      i.questions_ideas.forEach((q) => {
        questionsAndIdeas += '<li>' + String(q) + '</li>';
      });
    }

    /* create one table per item */
    $('#container').append(
      '<div class="table-set row justify-content-center" id="table-set-' +
        tableNumber +
        '"><h2>' +
        i.question +
        '</h2>' +
        tableGrid +
        '<ul class="questions-ideas mt-2 mb-5">' +
        questionsAndIdeas +
        '</ul>' +
        '</div>'
    );
    /* add question as title attr for tooltip */
    $('#table-set-' + tableNumber + ' table').attr('title', i.question);

    /* add values for each relevant cell */
    let counts = [];
    i.scores.forEach((s) => {
      //let cell = text[s[0]] + '-' + text[s[1]];
      let cell = text[s[1]] + '-' + text[s[0]];
      if (counts[cell]) {
        counts[cell]++;
      } else {
        counts[cell] = 1;
      }
      console.log('Cell:', cell, 'Value:', counts[cell]);
      $('#table-set-' + tableNumber + ' table')
        .find('.' + cell)
        .addClass('occupied')
        .css('opacity', (1 / 5) * counts[cell])
        .text(counts[cell]);
    });
  });

  /* turn tiny-view on and off */
  $('#tiny-toggle').click((event) => {
    console.log('clicked to toggle');
    $('body').toggleClass('tiny');
    if ($('body').hasClass('tiny')) {
      $('[data-toggle="tooltip"]').tooltip('enable');
    } else {
      $('[data-toggle="tooltip"]').tooltip('disable');
    }
  });

  /* add tooltips on table mouseover */
  $(function () {
    $('[data-toggle="tooltip"]').tooltip('disable');
  });
});
