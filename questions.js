let questions = [
  {
    question: 'Accessibility in procurement',
    scores: [
      [4, 2],
      [4, 2],
      [2, 2],
      [2, 2],
      [5, 3],
      [4, 1],
    ],
  },
];

let text = ['zero', 'one', 'two', 'three', 'four', 'five'];

let tableGrid = '<table class="dei-grid">\n';
tableGrid += '  <thead>\n';
tableGrid += '    <tr>\n';
tableGrid += '      <th>X</th>\n';
tableGrid += '      <th scope="col">Very Easy</th>\n';
tableGrid += '      <th scope="col">Moderately Easy</th>\n';
tableGrid += '      <th scope="col">Neither Easy Nor Difficult</th>\n';
tableGrid += '      <th scope="col">Moderately Difficult</th>\n';
tableGrid += '      <th scope="col">Very Difficult</th>\n';
tableGrid += '    </tr>\n';
tableGrid += '  </thead>\n';
tableGrid += '  <tbody>\n';
tableGrid += '    <tr>\n';
tableGrid += '      <th scope="row">Very Important</th>\n';
tableGrid += '      <td class="one-one"></td>\n';
tableGrid += '      <td class="one-two"></td>\n';
tableGrid += '      <td class="one-three"></td>\n';
tableGrid += '      <td class="one-four"></td>\n';
tableGrid += '      <td class="one-five"></td>\n';
tableGrid += '    </tr>\n';
tableGrid += '    <tr>\n';
tableGrid += '      <th scope="row">Moderately Important</th>\n';
tableGrid += '      <td class="two-one"></td>\n';
tableGrid += '      <td class="two-two"></td>\n';
tableGrid += '      <td class="two-three"></td>\n';
tableGrid += '      <td class="two-four"></td>\n';
tableGrid += '      <td class="two-five"></td>\n';
tableGrid += '    </tr>\n';
tableGrid += '    <tr>\n';
tableGrid += '      <th scope="row">Middle Importance</th>\n';
tableGrid += '      <td class="three-one"></td>\n';
tableGrid += '      <td class="three-two"></td>\n';
tableGrid += '      <td class="three-three"></td>\n';
tableGrid += '      <td class="three-four"></td>\n';
tableGrid += '      <td class="three-five"></td>\n';
tableGrid += '    </tr>\n';
tableGrid += '    <tr>\n';
tableGrid += '      <th scope="row">Less Important</th>\n';
tableGrid += '      <td class="four-one"></td>\n';
tableGrid += '      <td class="four-two"></td>\n';
tableGrid += '      <td class="four-three"></td>\n';
tableGrid += '      <td class="four-four"></td>\n';
tableGrid += '      <td class="four-five"></td>\n';
tableGrid += '    </tr>\n';
tableGrid += '    <tr>\n';
tableGrid += '      <th scope="row">Not Important</th>\n';
tableGrid += '      <td class="five-one"></td>\n';
tableGrid += '      <td class="five-two"></td>\n';
tableGrid += '      <td class="five-three"></td>\n';
tableGrid += '      <td class="five-four"></td>\n';
tableGrid += '      <td class="five-five"></td>\n';
tableGrid += '    </tr>\n';
tableGrid += '  </tbody>\n';
tableGrid += '</table>\n';

$(document).ready(function () {
  let tableNumber = 0;
  questions.forEach((i) => {
    tableNumber++;
    $('#container').append(
      '<div class="table-set" id="table-set-' +
        tableNumber +
        '"><h2>' +
        i.question +
        '</h2>' +
        tableGrid +
        '</div>'
    );

    let counts = [];
    i.scores.forEach((s) => {
      let cell = text[s[0]] + '-' + text[s[1]];
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
        .css('opacity', (1 / 6) * counts[cell])
        .text(counts[cell]);
    });
  });
});
