import Alpine from 'alpinejs';
import tippy, {roundArrow} from 'tippy.js';
window.Alpine = Alpine;

document.addEventListener('alpine:init', () => {
	
	// Tooltips using Tippy.js
	Alpine.directive('tooltip', (el, {expression}) => {
		tippy(el, { 
			content: expression,
			arrow: roundArrow,
			animation: 'scale-subtle',
			inertia: true,
			allowHTML: true,
		})
	})

	// Dark/Light Mode Toggle
	Alpine.store('darkMode', {
		mode: 'light',

		init() {
			if (localStorage.theme === 'dark') {
				this.dark()
			}
			else if (localStorage.theme === 'light') {
				this.light()
			}
			else {
				this.system()
			}
		},
		dark() {
			document.documentElement.classList.add('dark')
			localStorage.theme = 'dark'
			this.mode = 'dark'
		},
		system() {
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				document.documentElement.classList.add('dark')
			}
			else {
				document.documentElement.classList.remove('dark')
			}
			localStorage.theme = 'system'
			this.mode = 'system'
		},
		light() {
			document.documentElement.classList.remove('dark')
			localStorage.theme = 'light'
			this.mode = 'light'
		}
	})
})

Alpine.start();
