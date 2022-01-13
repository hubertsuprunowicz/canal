

## Quick Start

To start the development:

```
mkdir new-project
cd new-project/
git clone git@github.com:hubertsuprunowicz/canal.git .
rm -r .git
npm install
cd e2e
npm install
cd ..
cp .env.dist .env
cp .env.e2e.dist ./e2e/.env
```

where `new-project` is your desired folder.

## Unit tests

For unit testing I'm using [Jest](https://jestjs.io/) library.

### Running

```
npm run test
```

## E2E

For E2E testing I'm using the [Cypress](https://www.cypress.io/) framework. This is additional thing, but I thought that will be good to covarage all cases, and Jest itself does not allow for that.


### Running

```
npm run start
cd e2e
npm run e2e:open
```

## Additional libraries

- [lodash.debounce](https://www.npmjs.com/package/lodash.debounce) - to debounce search input;
- [stitches](https://stitches.dev/) - to create scalable application with multi-variants components and support for creating themes;

## Environment variables

### Movies API

Required for the correct operation of api.

Default value
```
REACT_APP_API_KEY=0
```

### E2E

Required for the e2e tests to run correctly.

Default value
```
CYPRESS_HOST=http://localhost:3000
```
## Architecture

Feature-first

### Project structure
```
src
├── assets/ ---> place for assets used in project
│   ├── fonts/
│   └── img/
|
├── components/ ---> list of global, reusable components in the system
│   └── Component/ ---> started with capital letter
│       ├── Component.tsx
│       └── styles.ts
|
├── Providers/ ---> place to put every kind of global provider (not feature related)
|
├── app/ ---> business features
│   └── feature/ ---> i.e. movies
│       ├── constants/ ---> Optional, feature related
│       ├── hooks/ ---> Optional, feature related
│       ├── styles.ts
│       └── types.ts ---> Optional, feature related
|
├── routes/
│   ├── AppRoutes.tsx ---> available routes as components
│   └── AppRoute.enum.ts ---> available endpoints as enums
|
├── shared/ ---> place for reusable stuff
│   ├── constants/
│   ├── contexts/
│   ├── helpers/ ---> utility functions
│   └── hooks/
|
└── types/ ---> contains TS types which could be used in more places
```

## Room for Improvement

Discussable:
- Responsive virtualized list of the movies with `load more` feature.

Todo:
- [ ] Dark theme.
- [ ] Display more data of the movie in the `MovieCard` component.
- [ ] i18n.
- [ ] Design.
- [ ] E2E tests are now dependent on API that could be changed. Make unmutable data source for e2e tests.
- [ ] Authentication with additional features for logged users.
