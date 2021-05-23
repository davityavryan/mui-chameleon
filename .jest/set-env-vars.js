const dotenvFlow = require('dotenv-flow');

// Note from `dotenv-flow`: the `.env.local` file is not included when the value of `node_env` is `"test"`,
// since normally you expect tests to produce the same results for everyone. So use `.env.test.local` or pass directly.
dotenvFlow.config({ silent: true });
