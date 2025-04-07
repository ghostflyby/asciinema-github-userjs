declare module 'asciinema-player' {
	type Theme = 'asciinema' | 'tango' | 'solarized-dark' | 'solarized-light';
	type Poster = 'npt:first' | 'npt:last' | number | string | null;
	type Fit = 'width' | 'height' | 'both' | false;

	export interface AsciinemaPlayerOptions {
		cols?: number;
		rows?: number;
		autoPlay?: boolean;
		loop?: boolean;
		startAt?: number | string;
		speed?: number;
		idleTimeLimit?: number;
		theme?: Theme;
		poster?: Poster;
		fit?: Fit;
		fontSize?: string;
		preload?: boolean;
		fetchOpts?: RequestInit;
		title?: string | null;
		loopPauseTime?: number;
		loopStart?: number | string;
		loopEnd?: number | string;
		terminalFontFamily?: string;
		terminalLineHeight?: number;
	}

	export type AsciicastData = string | object | any[];

	export type CastSource =
		| string
		| URL
		| { url: string | URL; fetchOpts?: RequestInit }
		| { data: AsciicastData | (() => AsciicastData | Promise<AsciicastData>) };

	export function create(
		source: CastSource,
		container: HTMLElement,
		options?: AsciinemaPlayerOptions
	): void;
}