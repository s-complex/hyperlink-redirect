import { defineConfig, presetUno, presetIcons, transformerDirectives } from 'unocss';

export default defineConfig({
	presets: [
		presetUno(),
		presetIcons({
			prefix: 'i-',
			extraProperties: {
				display: 'inline-block'
			}
		})
	],
	transformers: [
		transformerDirectives({
			applyVariable: ['--apply']
		})
	]
});
