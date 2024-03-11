import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'src/**/*.graphql',
  generates: {
    'src/types/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-resolvers',
        'typescript-mongodb',
        'typescript-react-apollo',
      ],
    },
  },
}

export default config
