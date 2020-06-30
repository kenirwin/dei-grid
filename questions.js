let questions = [
  {
    question:
      'Address accessibility issues across all facets of org when procuring, grow partnership with accessibility office, more training for staff on accessibility.',
    scores: [
      //difficulty (easy 1 - hard 5)
      //importance (imp 1 - not imp 5)
      [4, 2],
      [4, 2],
      [2, 2],
      [2, 2],
      [5, 3],
      [4, 1],
    ],
  },

  {
    question:
      'Make sure that everything complies with ADA (captioning for videos, for example)',
    scores: [
      //difficulty (easy 1 - hard 5)
      //importance (imp 1 - not imp 5)
      [4, 1],
      [4, 2],
      [3, 1],
      [3, 1],
      [4, 2],
      [3, 1],
    ],
  },

  {
    question:
      'Ensure that display cases and other displays reflect diversity and inclusion.',
    scores: [
      //difficulty (easy 1 - hard 5)
      //importance (imp 1 - not imp 5)
      [2, 3],
      [1, 2],
      [2, 2],
      [1, 3],
      [3, 3],
      [1, 3],
    ],
  },

  {
    question: 'Ensure diverse representation at the circulation desk',
    scores: [
      //difficulty (easy 1 - hard 5)
      //importance (imp 1 - not imp 5)
      [2, 3],
      [4, 1],
      [3, 1],
      [2, 2],
      [4, 2],
      [2, 2],
    ],
  },

  {
    question:
      'Ensure the Libraries’ website represents diversity and inclusion. (Accessibility is an existing top priority for the website.)',
    scores: [
      //difficulty (easy 1 - hard 5)
      //importance (imp 1 - not imp 5)
      [2, 1],
      [3, 2],
      [4, 1],
      [1, 3],
      [3, 1],
      [3, 2],
    ],
  },

  {
    question: 'HR: Diverse Library Leadership',
    scores: [
      //difficulty (easy 1 - hard 5)
      //importance (imp 1 - not imp 5)
      [5, 2],
      [4, 2],
      [5, 1],
      [4, 1],
      [5, 1],
      [4, 1],
    ],
  },

  {
    question: 'HR Diversity Officer on Search Committees',
    scores: [
      //difficulty (easy 1 - hard 5)
      //importance (imp 1 - not imp 5)
      [2, 2],
      [2, 3],
      [1, 1],
      [2, 1],
      [4, 1],
      [3, 3],
    ],
  },

  {
    question: 'High School/College future-librarians program',
    scores: [
      //difficulty (easy 1 - hard 5)
      //importance (imp 1 - not imp 5)
      [3, 3],
      [5, 2],
      [5, 1], // second value is "slight: 1 or 2"
      [3, 3],
      [4, 3],
      [3, 1], // second value is "slight: 1 or 2"
    ],
  },

  {
    question: 'Oxford Culture',
    scores: [
      //difficulty (easy 1 - hard 5)
      //importance (imp 1 - not imp 5)
      [5, 1],
      [3, 2],
      [5, 3],
      [5, 3],
      [5, 1],
      [5, 3],
    ],
  },

  {
    question: 'HR Diversity Officer on Search Committees',
    scores: [
      //difficulty (easy 1 - hard 5)
      //importance (imp 1 - not imp 5)
      [2, 2],
      [2, 3],
      [1, 1],
      [2, 1],
      [4, 1],
      [3, 3],
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
});
