
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:1337/graphql",
  documents: "lib/queries/**/*.ts",
  generates: {
    "./lib/codegen/": {
      preset: "client",
      plugins: []
    },
    "./graphql.schema.json": {
      plugins: [
        'typescript',       // Generates base types (e.g., Blog type).
        'typescript-operations', // Generates types for operations (queries, mutations).
      ],
      config: {
        skipTypename: false,  // Include __typename for dynamic zones.
        enumsAsTypes: true,
        declarationKind: 'interface',  // Cleaner interfaces.
      },
    }
  }
};

export default config;
