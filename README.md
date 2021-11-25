# issue with blocklist and jit mode

## install

> npm ci

## build

> npm run build


By toggling `jit` mode in `./tailwind.config.js` I expect the same behavior during build.
The `.border` class should be ignored because it's listed in blocklist.

The `jit` mode ignore `blocklist`, because of this it's not possible to avoid duplicate classes with a third tailwindcss party.


