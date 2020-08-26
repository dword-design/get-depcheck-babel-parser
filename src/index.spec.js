import { endent } from '@dword-design/functions'
import execa from 'execa'
import getPackageName from 'get-package-name'
import outputFiles from 'output-files'
import withLocalTmpDir from 'with-local-tmp-dir'

export default {
  valid: () =>
    withLocalTmpDir(async () => {
      await outputFiles({
        '.babelrc.json': JSON.stringify({
          plugins: [
            [
              getPackageName(
                require.resolve('@babel/plugin-proposal-pipeline-operator')
              ),
              { proposal: 'fsharp' },
            ],
          ],
          presets: [
            [
              getPackageName(require.resolve('@babel/preset-env')),
              { targets: { node: 10 } },
            ],
          ],
        }),
        'depcheck.config.js': endent`
        const parser = require('../src/')

        module.exports = {
          parsers: {
            '*.js': parser,
          }
        }
      `,
        'index.js': endent`
        import foo from 'foo'

        export default foo |> x => x * 2
      `,
        'package.json': JSON.stringify({
          dependencies: {
            foo: '^1.0.0',
          },
        }),
      })
      await execa.command('depcheck --config depcheck.config.js')
    }),
}