import * as path from 'path'
import { Module } from '@nuxt/types'

type ModuleConfig = {
    hello: string,
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
export const meta = require('../package.json')

const templateModule: Module<ModuleConfig> = async function (moduleOptions) {
    console.log(moduleOptions)

    this.addPlugin({
        src: path.resolve(__dirname, 'templates/plugin.js'),
        fileName: path.join('admin/blocks', 'plugin.js'),
        mode: 'client',
      })
}

export default templateModule
