import chalk from 'chalk';

const emojiMap = {
  info: '🟢',
  warn: '🟠',
  error: '🔴',
  debug: '🔵'
};

function format(level, message) {
  const emoji = emojiMap[level] || '';
  const label = level.toUpperCase();
  const color = chalkForLevel(level);
  console.log(color(`${emoji} ${label}: ${message}`));
}

function chalkForLevel(level) {
  switch (level) {
    case 'info': return chalk.green;
    case 'warn': return chalk.keyword('orange');
    case 'error': return chalk.red;
    case 'debug': return chalk.blue;
    default: return chalk.white;
  }
}

export const info = (msg) => format('info', msg);
export const warn = (msg) => format('warn', msg);
export const error = (msg) => format('error', msg);
export const debug = (msg) => format('debug', msg);
