import { resolve } from 'path';
import generatePackageJson from 'rollup-plugin-generate-package-json';
import { getPackageJSON, resolvePkgPath, getBaseRollupPlugins } from './utils';

const { name, module } = getPackageJSON('react');
const pkgPath = resolvePkgPath(name);
const pkgDistPath = resolvePkgPath(name, true);

export default [
	{
		input: `${pkgPath}/${module}`,
		output: {
			file: `${pkgDistPath}/index.js`,
			name: 'index.js',
			format: 'umd'
		},
		plugins: [
			// eslint-disable-next-line no-undef
			...getBaseRollupPlugins(resolve(__dirname, '../../tsconfig.json')),
			generatePackageJson({
				inputFolder: pkgPath,
				outputFolder: pkgDistPath,
				baseContents: ({ name, dependencies, version }) => ({
					name,
					dependencies,
					version,
					main: 'index.js'
				})
			})
		]
	},
	{
		input: `${pkgPath}/src/jsx.ts`,
		output: [
			{
				file: `${pkgDistPath}/jsx-runtime.js`,
				name: 'jsx-runtime.js',
				format: 'umd'
			},
			{
				file: `${pkgDistPath}/jsx-dev-runtime.js`,
				name: 'jsx-dev-runtime.js',
				format: 'umd'
			}
		],
		// eslint-disable-next-line no-undef
		plugins: getBaseRollupPlugins(resolve(__dirname, '../../tsconfig.json'))
	}
];
