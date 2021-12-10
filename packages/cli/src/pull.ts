import fs from 'fs'
import path from 'path'
import os from 'os'
import { download } from 'gdl'
import ignore, { Ignore } from 'ignore'
import { prompt } from 'enquirer'

export const CACHE_DIR = path.join(__dirname, '../.cache')

export const REPO_URL = 'https://github.com/ncuhome/lintject/tree/main/packages'

export const pull = async (mode: string | undefined) => {
  if (!fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR, { recursive: true })
    await download(REPO_URL, CACHE_DIR)
  }
  const ig = ignore().add('cli')
  const rules = fs.readdirSync(CACHE_DIR).filter(file => !ig.ignores(file))
  try {
    const { rule } = await prompt<{ rule: string }>({
      type: 'autocomplete',
      name: 'rule',
      message: 'Which rule do you want to use?',
      choices: rules
    })
    console.log(rule)
  } catch (e) {
    console.log('No rule selected')
  }
}