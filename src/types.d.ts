declare module 'asciinema-player' {
	export function create(source: string, element: HTMLElement): void;
	export function create(source: string, element: HTMLElement, opts: any): void;
}