import { hideBin } from 'yargs/helpers'
import yargs from 'yargs/yargs'
import { pull } from './pull'

export const startCli = async () => {
  yargs(hideBin(process.argv))
    .scriptName('lintject')
    .usage('$0 <command> [options]')
    .help()
    .version()
    .demandCommand(1, 'You need at least one command before moving on')
    .command(['pull', 'fetch', 'i'], 'Pull lint rules from remote', (Argv) => {
      return Argv
        .version(false)
        .option('mode', {
          alias: 'm',
          describe: 'Way to setup rules, `auto` or `manual`',
          type: 'string',
        })
    }, (argv) => {
      pull(argv.mode)
    })

    .parse()
}
