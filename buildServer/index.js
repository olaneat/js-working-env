
import numerical from 'numeral'

const parseValue = numerical(2000).format('$0.0.00');
console.log(`I have ${parseValue}for the projects `) //eslint-disable-line no-console
