$(document).ready(function () {
  let tableNumber = 0;
  questions.forEach((i) => {
    tableNumber++;
    let questionsAndIdeas = '';
    if (i.questions_ideas) {
      i.questions_ideas.forEach((q) => {
        questionsAndIdeas += String(q) + '<br><br>';
      });
    }

    $('#container').append(
      '<div class="table-set" id="table-set-' +
        tableNumber +
        '"><h2>' +
        i.question +
        '</h2>' +
        tableGrid +
        '<div class="qi">' +
        questionsAndIdeas +
        '</div>' +
        '</div>'
    );
    $('#table-set-' + tableNumber + ' table').attr('title', i.question);
    //    $('#table-set-' + tableNumber + ' table').
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
        // .data('score', counts[cell])
        .css('opacity', (1 / 5) * counts[cell])
        .text(counts[cell]);
    });
  });
  $('#tiny-toggle').click((event) => {
    console.log('clicked to toggle');
    $('body').toggleClass('tiny');
  });
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
});
