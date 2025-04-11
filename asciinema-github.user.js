// ==UserScript==
// @name        asciinema-github
// @version     0.0.3
// @license     MIT
// @author      ghostflyby
// @match       https://github.com/*
// @grant       GM_xmlhttpRequest
// @connect     asciinema.org
// @description Asciinema player for GitHub
// @updateURL   https://github.com/ghostflyby/asciinema-github-userjs/blob/dist/asciinema-github.meta.js
// @downloadURL https://github.com/ghostflyby/asciinema-github-userjs/blob/dist/asciinema-github.user.js
// @source      https://github.com/ghostflyby/asciinema-github-userjs
// ==/UserScript==

(function(){"use strict";const yn=`div.ap-wrapper {
  outline: none;
  height: 100%;
  display: flex;
  justify-content: center;
}
div.ap-wrapper .title-bar {
  display: none;
  top: -78px;
  transition: top 0.15s linear;
  position: absolute;
  left: 0;
  right: 0;
  box-sizing: content-box;
  font-size: 20px;
  line-height: 1em;
  padding: 15px;
  font-family: sans-serif;
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
}
div.ap-wrapper .title-bar img {
  vertical-align: middle;
  height: 48px;
  margin-right: 16px;
}
div.ap-wrapper .title-bar a {
  color: white;
  text-decoration: underline;
}
div.ap-wrapper .title-bar a:hover {
  text-decoration: none;
}
div.ap-wrapper:fullscreen {
  background-color: #000;
  width: 100%;
  align-items: center;
}
div.ap-wrapper:fullscreen .title-bar {
  display: initial;
}
div.ap-wrapper:fullscreen.hud .title-bar {
  top: 0;
}
div.ap-wrapper div.ap-player {
  text-align: left;
  display: inline-block;
  padding: 0px;
  position: relative;
  box-sizing: content-box;
  overflow: hidden;
  max-width: 100%;
  border-radius: 4px;
  font-size: 15px;
  background-color: var(--term-color-background);
}
.ap-player {
  --term-color-foreground: #ffffff;
  --term-color-background: #000000;
  --term-color-0: var(--term-color-foreground);
  --term-color-1: var(--term-color-foreground);
  --term-color-2: var(--term-color-foreground);
  --term-color-3: var(--term-color-foreground);
  --term-color-4: var(--term-color-foreground);
  --term-color-5: var(--term-color-foreground);
  --term-color-6: var(--term-color-foreground);
  --term-color-7: var(--term-color-foreground);
  --term-color-8: var(--term-color-0);
  --term-color-9: var(--term-color-1);
  --term-color-10: var(--term-color-2);
  --term-color-11: var(--term-color-3);
  --term-color-12: var(--term-color-4);
  --term-color-13: var(--term-color-5);
  --term-color-14: var(--term-color-6);
  --term-color-15: var(--term-color-7);
}
.ap-player .fg-0 {
  --fg: var(--term-color-0);
}
.ap-player .bg-0 {
  --bg: var(--term-color-0);
}
.ap-player .fg-1 {
  --fg: var(--term-color-1);
}
.ap-player .bg-1 {
  --bg: var(--term-color-1);
}
.ap-player .fg-2 {
  --fg: var(--term-color-2);
}
.ap-player .bg-2 {
  --bg: var(--term-color-2);
}
.ap-player .fg-3 {
  --fg: var(--term-color-3);
}
.ap-player .bg-3 {
  --bg: var(--term-color-3);
}
.ap-player .fg-4 {
  --fg: var(--term-color-4);
}
.ap-player .bg-4 {
  --bg: var(--term-color-4);
}
.ap-player .fg-5 {
  --fg: var(--term-color-5);
}
.ap-player .bg-5 {
  --bg: var(--term-color-5);
}
.ap-player .fg-6 {
  --fg: var(--term-color-6);
}
.ap-player .bg-6 {
  --bg: var(--term-color-6);
}
.ap-player .fg-7 {
  --fg: var(--term-color-7);
}
.ap-player .bg-7 {
  --bg: var(--term-color-7);
}
.ap-player .fg-8 {
  --fg: var(--term-color-8);
}
.ap-player .bg-8 {
  --bg: var(--term-color-8);
}
.ap-player .fg-9 {
  --fg: var(--term-color-9);
}
.ap-player .bg-9 {
  --bg: var(--term-color-9);
}
.ap-player .fg-10 {
  --fg: var(--term-color-10);
}
.ap-player .bg-10 {
  --bg: var(--term-color-10);
}
.ap-player .fg-11 {
  --fg: var(--term-color-11);
}
.ap-player .bg-11 {
  --bg: var(--term-color-11);
}
.ap-player .fg-12 {
  --fg: var(--term-color-12);
}
.ap-player .bg-12 {
  --bg: var(--term-color-12);
}
.ap-player .fg-13 {
  --fg: var(--term-color-13);
}
.ap-player .bg-13 {
  --bg: var(--term-color-13);
}
.ap-player .fg-14 {
  --fg: var(--term-color-14);
}
.ap-player .bg-14 {
  --bg: var(--term-color-14);
}
.ap-player .fg-15 {
  --fg: var(--term-color-15);
}
.ap-player .bg-15 {
  --bg: var(--term-color-15);
}
.ap-player .fg-8,
.ap-player .fg-9,
.ap-player .fg-10,
.ap-player .fg-11,
.ap-player .fg-12,
.ap-player .fg-13,
.ap-player .fg-14,
.ap-player .fg-15 {
  font-weight: bold;
}
pre.ap-terminal {
  box-sizing: content-box;
  overflow: hidden;
  padding: 0;
  margin: 0px;
  display: block;
  white-space: pre;
  word-wrap: normal;
  word-break: normal;
  border-radius: 0;
  border-style: solid;
  cursor: text;
  border-width: 0.75em;
  color: var(--term-color-foreground);
  background-color: var(--term-color-background);
  border-color: var(--term-color-background);
  outline: none;
  line-height: var(--term-line-height);
  font-family: Consolas, Menlo, 'Bitstream Vera Sans Mono', monospace, 'Powerline Symbols';
  font-variant-ligatures: none;
}
pre.ap-terminal .ap-line {
  letter-spacing: normal;
  overflow: hidden;
}
pre.ap-terminal .ap-line span {
  padding: 0;
  display: inline-block;
  height: 100%;
}
pre.ap-terminal .ap-line {
  display: block;
  width: 100%;
  height: var(--term-line-height);
  position: relative;
}
pre.ap-terminal .ap-line span {
  position: absolute;
  left: calc(100% * var(--offset) / var(--term-cols));
  color: var(--fg);
  background-color: var(--bg);
}
pre.ap-terminal .ap-line .ap-inverse {
  color: var(--bg);
  background-color: var(--fg);
}
pre.ap-terminal .ap-line .cp-2580 {
  border-top: calc(0.5 * var(--term-line-height)) solid var(--fg);
  box-sizing: border-box;
}
pre.ap-terminal .ap-line .cp-2581 {
  border-bottom: calc(0.125 * var(--term-line-height)) solid var(--fg);
  box-sizing: border-box;
}
pre.ap-terminal .ap-line .cp-2582 {
  border-bottom: calc(0.25 * var(--term-line-height)) solid var(--fg);
  box-sizing: border-box;
}
pre.ap-terminal .ap-line .cp-2583 {
  border-bottom: calc(0.375 * var(--term-line-height)) solid var(--fg);
  box-sizing: border-box;
}
pre.ap-terminal .ap-line .cp-2584 {
  border-bottom: calc(0.5 * var(--term-line-height)) solid var(--fg);
  box-sizing: border-box;
}
pre.ap-terminal .ap-line .cp-2585 {
  border-bottom: calc(0.625 * var(--term-line-height)) solid var(--fg);
  box-sizing: border-box;
}
pre.ap-terminal .ap-line .cp-2586 {
  border-bottom: calc(0.75 * var(--term-line-height)) solid var(--fg);
  box-sizing: border-box;
}
pre.ap-terminal .ap-line .cp-2587 {
  border-bottom: calc(0.875 * var(--term-line-height)) solid var(--fg);
  box-sizing: border-box;
}
pre.ap-terminal .ap-line .cp-2588 {
  background-color: var(--fg);
}
pre.ap-terminal .ap-line .cp-2589 {
  border-left: 0.875ch solid var(--fg);
  box-sizing: border-box;
}
pre.ap-terminal .ap-line .cp-258a {
  border-left: 0.75ch solid var(--fg);
  box-sizing: border-box;
}
pre.ap-terminal .ap-line .cp-258b {
  border-left: 0.625ch solid var(--fg);
  box-sizing: border-box;
}
pre.ap-terminal .ap-line .cp-258c {
  border-left: 0.5ch solid var(--fg);
  box-sizing: border-box;
}
pre.ap-terminal .ap-line .cp-258d {
  border-left: 0.375ch solid var(--fg);
  box-sizing: border-box;
}
pre.ap-terminal .ap-line .cp-258e {
  border-left: 0.25ch solid var(--fg);
  box-sizing: border-box;
}
pre.ap-terminal .ap-line .cp-258f {
  border-left: 0.125ch solid var(--fg);
  box-sizing: border-box;
}
pre.ap-terminal .ap-line .cp-2590 {
  border-right: 0.5ch solid var(--fg);
  box-sizing: border-box;
}
pre.ap-terminal .ap-line .cp-2591 {
  background-color: color-mix(in srgb, var(--fg) 25%, var(--bg));
}
pre.ap-terminal .ap-line .cp-2592 {
  background-color: color-mix(in srgb, var(--fg) 50%, var(--bg));
}
pre.ap-terminal .ap-line .cp-2593 {
  background-color: color-mix(in srgb, var(--fg) 75%, var(--bg));
}
pre.ap-terminal .ap-line .cp-2594 {
  border-top: calc(0.125 * var(--term-line-height)) solid var(--fg);
  box-sizing: border-box;
}
pre.ap-terminal .ap-line .cp-2595 {
  border-right: 0.125ch solid var(--fg);
  box-sizing: border-box;
}
pre.ap-terminal .ap-line .cp-2596 {
  border-right: 0.5ch solid var(--bg);
  border-top: calc(0.5 * var(--term-line-height)) solid var(--bg);
  background-color: var(--fg);
  box-sizing: border-box;
}
pre.ap-terminal .ap-line .cp-2597 {
  border-left: 0.5ch solid var(--bg);
  border-top: calc(0.5 * var(--term-line-height)) solid var(--bg);
  background-color: var(--fg);
  box-sizing: border-box;
}
pre.ap-terminal .ap-line .cp-2598 {
  border-right: 0.5ch solid var(--bg);
  border-bottom: calc(0.5 * var(--term-line-height)) solid var(--bg);
  background-color: var(--fg);
  box-sizing: border-box;
}
pre.ap-terminal .ap-line .cp-2599 {
  border-left: 0.5ch solid var(--fg);
  border-bottom: calc(0.5 * var(--term-line-height)) solid var(--fg);
  box-sizing: border-box;
}
pre.ap-terminal .ap-line .cp-259a {
  box-sizing: border-box;
}
pre.ap-terminal .ap-line .cp-259a::before,
pre.ap-terminal .ap-line .cp-259a::after {
  content: '';
  position: absolute;
  width: 0.5ch;
  height: calc(0.5 * var(--term-line-height));
  background-color: var(--fg);
}
pre.ap-terminal .ap-line .cp-259a::before {
  top: 0;
  left: 0;
}
pre.ap-terminal .ap-line .cp-259a::after {
  bottom: 0;
  right: 0;
}
pre.ap-terminal .ap-line .cp-259b {
  border-left: 0.5ch solid var(--fg);
  border-top: calc(0.5 * var(--term-line-height)) solid var(--fg);
  box-sizing: border-box;
}
pre.ap-terminal .ap-line .cp-259c {
  border-right: 0.5ch solid var(--fg);
  border-top: calc(0.5 * var(--term-line-height)) solid var(--fg);
  box-sizing: border-box;
}
pre.ap-terminal .ap-line .cp-259d {
  border-left: 0.5ch solid var(--bg);
  border-bottom: calc(0.5 * var(--term-line-height)) solid var(--bg);
  background-color: var(--fg);
  box-sizing: border-box;
}
pre.ap-terminal .ap-line .cp-259e {
  box-sizing: border-box;
}
pre.ap-terminal .ap-line .cp-259e::before,
pre.ap-terminal .ap-line .cp-259e::after {
  content: '';
  position: absolute;
  width: 0.5ch;
  height: calc(0.5 * var(--term-line-height));
  background-color: var(--fg);
}
pre.ap-terminal .ap-line .cp-259e::before {
  top: 0;
  right: 0;
}
pre.ap-terminal .ap-line .cp-259e::after {
  bottom: 0;
  left: 0;
}
pre.ap-terminal .ap-line .cp-259f {
  border-right: 0.5ch solid var(--fg);
  border-bottom: calc(0.5 * var(--term-line-height)) solid var(--fg);
  box-sizing: border-box;
}
pre.ap-terminal .ap-line .cp-e0b0 {
  border-left: 1ch solid var(--fg);
  border-top: calc(0.5 * var(--term-line-height)) solid transparent;
  border-bottom: calc(0.5 * var(--term-line-height)) solid transparent;
  box-sizing: border-box;
}
pre.ap-terminal .ap-line .cp-e0b2 {
  border-right: 1ch solid var(--fg);
  border-top: calc(0.5 * var(--term-line-height)) solid transparent;
  border-bottom: calc(0.5 * var(--term-line-height)) solid transparent;
  box-sizing: border-box;
}
pre.ap-terminal.ap-cursor-on .ap-line .ap-cursor {
  color: var(--bg);
  background-color: var(--fg);
  border-radius: 0.05em;
}
pre.ap-terminal.ap-cursor-on .ap-line .ap-cursor.ap-inverse {
  color: var(--fg);
  background-color: var(--bg);
}
pre.ap-terminal:not(.ap-blink) .ap-line .ap-blink {
  color: transparent;
  border-color: transparent;
}
pre.ap-terminal .ap-bright {
  font-weight: bold;
}
pre.ap-terminal .ap-faint {
  opacity: 0.5;
}
pre.ap-terminal .ap-underline {
  text-decoration: underline;
}
pre.ap-terminal .ap-italic {
  font-style: italic;
}
pre.ap-terminal .ap-strikethrough {
  text-decoration: line-through;
}
.ap-line span {
  --fg: var(--term-color-foreground);
  --bg: var(--term-color-background);
}
div.ap-player div.ap-control-bar {
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  color: var(--term-color-foreground);
  box-sizing: content-box;
  line-height: 1;
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.15s linear;
  user-select: none;
  border-top: 2px solid color-mix(in oklab, black 33%, var(--term-color-background));
  z-index: 30;
}
div.ap-player div.ap-control-bar * {
  box-sizing: inherit;
}
div.ap-control-bar svg.ap-icon path {
  fill: var(--term-color-foreground);
}
div.ap-control-bar span.ap-button {
  display: flex;
  flex: 0 0 auto;
  cursor: pointer;
}
div.ap-control-bar span.ap-playback-button {
  width: 12px;
  height: 12px;
  padding: 10px;
}
div.ap-control-bar span.ap-playback-button svg {
  height: 12px;
  width: 12px;
}
div.ap-control-bar span.ap-timer {
  display: flex;
  flex: 0 0 auto;
  min-width: 50px;
  margin: 0 10px;
  height: 100%;
  text-align: center;
  font-size: 13px;
  line-height: 100%;
  cursor: default;
}
div.ap-control-bar span.ap-timer span {
  font-family: Consolas, Menlo, 'Bitstream Vera Sans Mono', monospace;
  font-size: inherit;
  font-weight: 600;
  margin: auto;
}
div.ap-control-bar span.ap-timer .ap-time-remaining {
  display: none;
}
div.ap-control-bar span.ap-timer:hover .ap-time-elapsed {
  display: none;
}
div.ap-control-bar span.ap-timer:hover .ap-time-remaining {
  display: flex;
}
div.ap-control-bar .ap-progressbar {
  display: block;
  flex: 1 1 auto;
  height: 100%;
  padding: 0 10px;
}
div.ap-control-bar .ap-progressbar .ap-bar {
  display: block;
  position: relative;
  cursor: default;
  height: 100%;
  font-size: 0;
}
div.ap-control-bar .ap-progressbar .ap-bar .ap-gutter {
  display: block;
  position: absolute;
  top: 15px;
  left: 0;
  right: 0;
  height: 3px;
}
div.ap-control-bar .ap-progressbar .ap-bar .ap-gutter-empty {
  background-color: color-mix(in oklab, var(--term-color-foreground) 20%, var(--term-color-background));
}
div.ap-control-bar .ap-progressbar .ap-bar .ap-gutter-full {
  width: 100%;
  transform-origin: left center;
  background-color: var(--term-color-foreground);
  border-radius: 3px;
}
div.ap-control-bar.ap-seekable .ap-progressbar .ap-bar {
  cursor: pointer;
}
div.ap-control-bar .ap-fullscreen-button {
  width: 14px;
  height: 14px;
  padding: 9px;
}
div.ap-control-bar .ap-fullscreen-button svg {
  width: 14px;
  height: 14px;
}
div.ap-control-bar .ap-fullscreen-button svg.ap-icon-fullscreen-on {
  display: inline;
}
div.ap-control-bar .ap-fullscreen-button svg.ap-icon-fullscreen-off {
  display: none;
}
div.ap-control-bar .ap-fullscreen-button .ap-tooltip {
  right: 5px;
  left: initial;
  transform: none;
}
div.ap-control-bar .ap-kbd-button {
  height: 14px;
  padding: 9px;
  margin: 0 4px;
}
div.ap-control-bar .ap-kbd-button svg {
  width: 26px;
  height: 14px;
}
div.ap-control-bar .ap-kbd-button .ap-tooltip {
  right: 5px;
  left: initial;
  transform: none;
}
div.ap-wrapper.ap-hud .ap-control-bar {
  opacity: 1;
}
div.ap-wrapper:fullscreen .ap-fullscreen-button svg.ap-icon-fullscreen-on {
  display: none;
}
div.ap-wrapper:fullscreen .ap-fullscreen-button svg.ap-icon-fullscreen-off {
  display: inline;
}
span.ap-progressbar span.ap-marker-container {
  display: block;
  top: 0;
  bottom: 0;
  width: 21px;
  position: absolute;
  margin-left: -10px;
}
span.ap-marker-container span.ap-marker {
  display: block;
  top: 13px;
  bottom: 12px;
  left: 7px;
  right: 7px;
  background-color: color-mix(in oklab, var(--term-color-foreground) 33%, var(--term-color-background));
  position: absolute;
  transition: top 0.1s, bottom 0.1s, left 0.1s, right 0.1s, background-color 0.1s;
  border-radius: 50%;
}
span.ap-marker-container span.ap-marker.ap-marker-past {
  background-color: var(--term-color-foreground);
}
span.ap-marker-container span.ap-marker:hover,
span.ap-marker-container:hover span.ap-marker {
  background-color: var(--term-color-foreground);
  top: 11px;
  bottom: 10px;
  left: 5px;
  right: 5px;
}
.ap-tooltip-container span.ap-tooltip {
  visibility: hidden;
  background-color: var(--term-color-foreground);
  color: var(--term-color-background);
  font-family: Consolas, Menlo, 'Bitstream Vera Sans Mono', monospace;
  font-weight: bold;
  text-align: center;
  padding: 0 0.5em;
  border-radius: 4px;
  position: absolute;
  z-index: 1;
  white-space: nowrap;
  /* Prevents the text from wrapping and makes sure the tooltip width adapts to the text length */
  font-size: 13px;
  line-height: 2em;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
}
.ap-tooltip-container:hover span.ap-tooltip {
  visibility: visible;
}
.ap-player .ap-overlay {
  z-index: 10;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ap-player .ap-overlay-start {
  cursor: pointer;
}
.ap-player .ap-overlay-start .ap-play-button {
  font-size: 0px;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  color: white;
  height: 80px;
  max-height: 66%;
  margin: auto;
}
.ap-player .ap-overlay-start .ap-play-button div {
  height: 100%;
}
.ap-player .ap-overlay-start .ap-play-button div span {
  height: 100%;
  display: block;
}
.ap-player .ap-overlay-start .ap-play-button div span svg {
  height: 100%;
}
.ap-player .ap-overlay-start .ap-play-button svg {
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.4));
}
.ap-player .ap-overlay-loading .ap-loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 10px solid;
  border-color: rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.5) rgba(255, 255, 255, 0.7) #ffffff;
  border-color: color-mix(in srgb, var(--term-color-foreground) 30%, var(--term-color-background)) color-mix(in srgb, var(--term-color-foreground) 50%, var(--term-color-background)) color-mix(in srgb, var(--term-color-foreground) 70%, var(--term-color-background)) color-mix(in srgb, var(--term-color-foreground) 100%, var(--term-color-background));
  box-sizing: border-box;
  animation: ap-loader-rotation 1s linear infinite;
}
.ap-player .ap-overlay-info {
  background-color: var(--term-color-background);
}
.ap-player .ap-overlay-info span {
  font-family: Consolas, Menlo, 'Bitstream Vera Sans Mono', monospace, 'Powerline Symbols';
  font-variant-ligatures: none;
  font-size: 2em;
  color: var(--term-color-foreground);
}
.ap-player .ap-overlay-info span .ap-line {
  letter-spacing: normal;
  overflow: hidden;
}
.ap-player .ap-overlay-info span .ap-line span {
  padding: 0;
  display: inline-block;
  height: 100%;
}
.ap-player .ap-overlay-help {
  background-color: rgba(0, 0, 0, 0.8);
  container-type: inline-size;
}
.ap-player .ap-overlay-help > div {
  font-family: Consolas, Menlo, 'Bitstream Vera Sans Mono', monospace, 'Powerline Symbols';
  font-variant-ligatures: none;
  max-width: 85%;
  max-height: 85%;
  font-size: 18px;
  color: var(--term-color-foreground);
  background-color: var(--term-color-background);
  border-radius: 6px;
  box-sizing: border-box;
  margin-bottom: 32px;
}
.ap-player .ap-overlay-help > div .ap-line {
  letter-spacing: normal;
  overflow: hidden;
}
.ap-player .ap-overlay-help > div .ap-line span {
  padding: 0;
  display: inline-block;
  height: 100%;
}
.ap-player .ap-overlay-help > div div {
  padding: calc(min(4cqw, 40px));
  font-size: calc(min(1.9cqw, 18px));
}
.ap-player .ap-overlay-help > div div p {
  font-weight: bold;
  margin: 0 0 2em 0;
}
.ap-player .ap-overlay-help > div div ul {
  list-style: none;
  padding: 0;
}
.ap-player .ap-overlay-help > div div ul li {
  margin: 0 0 0.75em 0;
}
.ap-player .ap-overlay-help > div div kbd {
  color: var(--term-color-background);
  background-color: var(--term-color-foreground);
  padding: 0.2em 0.5em;
  border-radius: 0.2em;
  font-family: inherit;
  font-size: 0.85em;
  border: none;
  margin: 0;
}
.ap-player .ap-overlay-error span {
  font-size: 8em;
}
@keyframes ap-loader-rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.ap-terminal .fg-16 {
  --fg: #000000;
}
.ap-terminal .bg-16 {
  --bg: #000000;
}
.ap-terminal .fg-17 {
  --fg: #00005f;
}
.ap-terminal .bg-17 {
  --bg: #00005f;
}
.ap-terminal .fg-18 {
  --fg: #000087;
}
.ap-terminal .bg-18 {
  --bg: #000087;
}
.ap-terminal .fg-19 {
  --fg: #0000af;
}
.ap-terminal .bg-19 {
  --bg: #0000af;
}
.ap-terminal .fg-20 {
  --fg: #0000d7;
}
.ap-terminal .bg-20 {
  --bg: #0000d7;
}
.ap-terminal .fg-21 {
  --fg: #0000ff;
}
.ap-terminal .bg-21 {
  --bg: #0000ff;
}
.ap-terminal .fg-22 {
  --fg: #005f00;
}
.ap-terminal .bg-22 {
  --bg: #005f00;
}
.ap-terminal .fg-23 {
  --fg: #005f5f;
}
.ap-terminal .bg-23 {
  --bg: #005f5f;
}
.ap-terminal .fg-24 {
  --fg: #005f87;
}
.ap-terminal .bg-24 {
  --bg: #005f87;
}
.ap-terminal .fg-25 {
  --fg: #005faf;
}
.ap-terminal .bg-25 {
  --bg: #005faf;
}
.ap-terminal .fg-26 {
  --fg: #005fd7;
}
.ap-terminal .bg-26 {
  --bg: #005fd7;
}
.ap-terminal .fg-27 {
  --fg: #005fff;
}
.ap-terminal .bg-27 {
  --bg: #005fff;
}
.ap-terminal .fg-28 {
  --fg: #008700;
}
.ap-terminal .bg-28 {
  --bg: #008700;
}
.ap-terminal .fg-29 {
  --fg: #00875f;
}
.ap-terminal .bg-29 {
  --bg: #00875f;
}
.ap-terminal .fg-30 {
  --fg: #008787;
}
.ap-terminal .bg-30 {
  --bg: #008787;
}
.ap-terminal .fg-31 {
  --fg: #0087af;
}
.ap-terminal .bg-31 {
  --bg: #0087af;
}
.ap-terminal .fg-32 {
  --fg: #0087d7;
}
.ap-terminal .bg-32 {
  --bg: #0087d7;
}
.ap-terminal .fg-33 {
  --fg: #0087ff;
}
.ap-terminal .bg-33 {
  --bg: #0087ff;
}
.ap-terminal .fg-34 {
  --fg: #00af00;
}
.ap-terminal .bg-34 {
  --bg: #00af00;
}
.ap-terminal .fg-35 {
  --fg: #00af5f;
}
.ap-terminal .bg-35 {
  --bg: #00af5f;
}
.ap-terminal .fg-36 {
  --fg: #00af87;
}
.ap-terminal .bg-36 {
  --bg: #00af87;
}
.ap-terminal .fg-37 {
  --fg: #00afaf;
}
.ap-terminal .bg-37 {
  --bg: #00afaf;
}
.ap-terminal .fg-38 {
  --fg: #00afd7;
}
.ap-terminal .bg-38 {
  --bg: #00afd7;
}
.ap-terminal .fg-39 {
  --fg: #00afff;
}
.ap-terminal .bg-39 {
  --bg: #00afff;
}
.ap-terminal .fg-40 {
  --fg: #00d700;
}
.ap-terminal .bg-40 {
  --bg: #00d700;
}
.ap-terminal .fg-41 {
  --fg: #00d75f;
}
.ap-terminal .bg-41 {
  --bg: #00d75f;
}
.ap-terminal .fg-42 {
  --fg: #00d787;
}
.ap-terminal .bg-42 {
  --bg: #00d787;
}
.ap-terminal .fg-43 {
  --fg: #00d7af;
}
.ap-terminal .bg-43 {
  --bg: #00d7af;
}
.ap-terminal .fg-44 {
  --fg: #00d7d7;
}
.ap-terminal .bg-44 {
  --bg: #00d7d7;
}
.ap-terminal .fg-45 {
  --fg: #00d7ff;
}
.ap-terminal .bg-45 {
  --bg: #00d7ff;
}
.ap-terminal .fg-46 {
  --fg: #00ff00;
}
.ap-terminal .bg-46 {
  --bg: #00ff00;
}
.ap-terminal .fg-47 {
  --fg: #00ff5f;
}
.ap-terminal .bg-47 {
  --bg: #00ff5f;
}
.ap-terminal .fg-48 {
  --fg: #00ff87;
}
.ap-terminal .bg-48 {
  --bg: #00ff87;
}
.ap-terminal .fg-49 {
  --fg: #00ffaf;
}
.ap-terminal .bg-49 {
  --bg: #00ffaf;
}
.ap-terminal .fg-50 {
  --fg: #00ffd7;
}
.ap-terminal .bg-50 {
  --bg: #00ffd7;
}
.ap-terminal .fg-51 {
  --fg: #00ffff;
}
.ap-terminal .bg-51 {
  --bg: #00ffff;
}
.ap-terminal .fg-52 {
  --fg: #5f0000;
}
.ap-terminal .bg-52 {
  --bg: #5f0000;
}
.ap-terminal .fg-53 {
  --fg: #5f005f;
}
.ap-terminal .bg-53 {
  --bg: #5f005f;
}
.ap-terminal .fg-54 {
  --fg: #5f0087;
}
.ap-terminal .bg-54 {
  --bg: #5f0087;
}
.ap-terminal .fg-55 {
  --fg: #5f00af;
}
.ap-terminal .bg-55 {
  --bg: #5f00af;
}
.ap-terminal .fg-56 {
  --fg: #5f00d7;
}
.ap-terminal .bg-56 {
  --bg: #5f00d7;
}
.ap-terminal .fg-57 {
  --fg: #5f00ff;
}
.ap-terminal .bg-57 {
  --bg: #5f00ff;
}
.ap-terminal .fg-58 {
  --fg: #5f5f00;
}
.ap-terminal .bg-58 {
  --bg: #5f5f00;
}
.ap-terminal .fg-59 {
  --fg: #5f5f5f;
}
.ap-terminal .bg-59 {
  --bg: #5f5f5f;
}
.ap-terminal .fg-60 {
  --fg: #5f5f87;
}
.ap-terminal .bg-60 {
  --bg: #5f5f87;
}
.ap-terminal .fg-61 {
  --fg: #5f5faf;
}
.ap-terminal .bg-61 {
  --bg: #5f5faf;
}
.ap-terminal .fg-62 {
  --fg: #5f5fd7;
}
.ap-terminal .bg-62 {
  --bg: #5f5fd7;
}
.ap-terminal .fg-63 {
  --fg: #5f5fff;
}
.ap-terminal .bg-63 {
  --bg: #5f5fff;
}
.ap-terminal .fg-64 {
  --fg: #5f8700;
}
.ap-terminal .bg-64 {
  --bg: #5f8700;
}
.ap-terminal .fg-65 {
  --fg: #5f875f;
}
.ap-terminal .bg-65 {
  --bg: #5f875f;
}
.ap-terminal .fg-66 {
  --fg: #5f8787;
}
.ap-terminal .bg-66 {
  --bg: #5f8787;
}
.ap-terminal .fg-67 {
  --fg: #5f87af;
}
.ap-terminal .bg-67 {
  --bg: #5f87af;
}
.ap-terminal .fg-68 {
  --fg: #5f87d7;
}
.ap-terminal .bg-68 {
  --bg: #5f87d7;
}
.ap-terminal .fg-69 {
  --fg: #5f87ff;
}
.ap-terminal .bg-69 {
  --bg: #5f87ff;
}
.ap-terminal .fg-70 {
  --fg: #5faf00;
}
.ap-terminal .bg-70 {
  --bg: #5faf00;
}
.ap-terminal .fg-71 {
  --fg: #5faf5f;
}
.ap-terminal .bg-71 {
  --bg: #5faf5f;
}
.ap-terminal .fg-72 {
  --fg: #5faf87;
}
.ap-terminal .bg-72 {
  --bg: #5faf87;
}
.ap-terminal .fg-73 {
  --fg: #5fafaf;
}
.ap-terminal .bg-73 {
  --bg: #5fafaf;
}
.ap-terminal .fg-74 {
  --fg: #5fafd7;
}
.ap-terminal .bg-74 {
  --bg: #5fafd7;
}
.ap-terminal .fg-75 {
  --fg: #5fafff;
}
.ap-terminal .bg-75 {
  --bg: #5fafff;
}
.ap-terminal .fg-76 {
  --fg: #5fd700;
}
.ap-terminal .bg-76 {
  --bg: #5fd700;
}
.ap-terminal .fg-77 {
  --fg: #5fd75f;
}
.ap-terminal .bg-77 {
  --bg: #5fd75f;
}
.ap-terminal .fg-78 {
  --fg: #5fd787;
}
.ap-terminal .bg-78 {
  --bg: #5fd787;
}
.ap-terminal .fg-79 {
  --fg: #5fd7af;
}
.ap-terminal .bg-79 {
  --bg: #5fd7af;
}
.ap-terminal .fg-80 {
  --fg: #5fd7d7;
}
.ap-terminal .bg-80 {
  --bg: #5fd7d7;
}
.ap-terminal .fg-81 {
  --fg: #5fd7ff;
}
.ap-terminal .bg-81 {
  --bg: #5fd7ff;
}
.ap-terminal .fg-82 {
  --fg: #5fff00;
}
.ap-terminal .bg-82 {
  --bg: #5fff00;
}
.ap-terminal .fg-83 {
  --fg: #5fff5f;
}
.ap-terminal .bg-83 {
  --bg: #5fff5f;
}
.ap-terminal .fg-84 {
  --fg: #5fff87;
}
.ap-terminal .bg-84 {
  --bg: #5fff87;
}
.ap-terminal .fg-85 {
  --fg: #5fffaf;
}
.ap-terminal .bg-85 {
  --bg: #5fffaf;
}
.ap-terminal .fg-86 {
  --fg: #5fffd7;
}
.ap-terminal .bg-86 {
  --bg: #5fffd7;
}
.ap-terminal .fg-87 {
  --fg: #5fffff;
}
.ap-terminal .bg-87 {
  --bg: #5fffff;
}
.ap-terminal .fg-88 {
  --fg: #870000;
}
.ap-terminal .bg-88 {
  --bg: #870000;
}
.ap-terminal .fg-89 {
  --fg: #87005f;
}
.ap-terminal .bg-89 {
  --bg: #87005f;
}
.ap-terminal .fg-90 {
  --fg: #870087;
}
.ap-terminal .bg-90 {
  --bg: #870087;
}
.ap-terminal .fg-91 {
  --fg: #8700af;
}
.ap-terminal .bg-91 {
  --bg: #8700af;
}
.ap-terminal .fg-92 {
  --fg: #8700d7;
}
.ap-terminal .bg-92 {
  --bg: #8700d7;
}
.ap-terminal .fg-93 {
  --fg: #8700ff;
}
.ap-terminal .bg-93 {
  --bg: #8700ff;
}
.ap-terminal .fg-94 {
  --fg: #875f00;
}
.ap-terminal .bg-94 {
  --bg: #875f00;
}
.ap-terminal .fg-95 {
  --fg: #875f5f;
}
.ap-terminal .bg-95 {
  --bg: #875f5f;
}
.ap-terminal .fg-96 {
  --fg: #875f87;
}
.ap-terminal .bg-96 {
  --bg: #875f87;
}
.ap-terminal .fg-97 {
  --fg: #875faf;
}
.ap-terminal .bg-97 {
  --bg: #875faf;
}
.ap-terminal .fg-98 {
  --fg: #875fd7;
}
.ap-terminal .bg-98 {
  --bg: #875fd7;
}
.ap-terminal .fg-99 {
  --fg: #875fff;
}
.ap-terminal .bg-99 {
  --bg: #875fff;
}
.ap-terminal .fg-100 {
  --fg: #878700;
}
.ap-terminal .bg-100 {
  --bg: #878700;
}
.ap-terminal .fg-101 {
  --fg: #87875f;
}
.ap-terminal .bg-101 {
  --bg: #87875f;
}
.ap-terminal .fg-102 {
  --fg: #878787;
}
.ap-terminal .bg-102 {
  --bg: #878787;
}
.ap-terminal .fg-103 {
  --fg: #8787af;
}
.ap-terminal .bg-103 {
  --bg: #8787af;
}
.ap-terminal .fg-104 {
  --fg: #8787d7;
}
.ap-terminal .bg-104 {
  --bg: #8787d7;
}
.ap-terminal .fg-105 {
  --fg: #8787ff;
}
.ap-terminal .bg-105 {
  --bg: #8787ff;
}
.ap-terminal .fg-106 {
  --fg: #87af00;
}
.ap-terminal .bg-106 {
  --bg: #87af00;
}
.ap-terminal .fg-107 {
  --fg: #87af5f;
}
.ap-terminal .bg-107 {
  --bg: #87af5f;
}
.ap-terminal .fg-108 {
  --fg: #87af87;
}
.ap-terminal .bg-108 {
  --bg: #87af87;
}
.ap-terminal .fg-109 {
  --fg: #87afaf;
}
.ap-terminal .bg-109 {
  --bg: #87afaf;
}
.ap-terminal .fg-110 {
  --fg: #87afd7;
}
.ap-terminal .bg-110 {
  --bg: #87afd7;
}
.ap-terminal .fg-111 {
  --fg: #87afff;
}
.ap-terminal .bg-111 {
  --bg: #87afff;
}
.ap-terminal .fg-112 {
  --fg: #87d700;
}
.ap-terminal .bg-112 {
  --bg: #87d700;
}
.ap-terminal .fg-113 {
  --fg: #87d75f;
}
.ap-terminal .bg-113 {
  --bg: #87d75f;
}
.ap-terminal .fg-114 {
  --fg: #87d787;
}
.ap-terminal .bg-114 {
  --bg: #87d787;
}
.ap-terminal .fg-115 {
  --fg: #87d7af;
}
.ap-terminal .bg-115 {
  --bg: #87d7af;
}
.ap-terminal .fg-116 {
  --fg: #87d7d7;
}
.ap-terminal .bg-116 {
  --bg: #87d7d7;
}
.ap-terminal .fg-117 {
  --fg: #87d7ff;
}
.ap-terminal .bg-117 {
  --bg: #87d7ff;
}
.ap-terminal .fg-118 {
  --fg: #87ff00;
}
.ap-terminal .bg-118 {
  --bg: #87ff00;
}
.ap-terminal .fg-119 {
  --fg: #87ff5f;
}
.ap-terminal .bg-119 {
  --bg: #87ff5f;
}
.ap-terminal .fg-120 {
  --fg: #87ff87;
}
.ap-terminal .bg-120 {
  --bg: #87ff87;
}
.ap-terminal .fg-121 {
  --fg: #87ffaf;
}
.ap-terminal .bg-121 {
  --bg: #87ffaf;
}
.ap-terminal .fg-122 {
  --fg: #87ffd7;
}
.ap-terminal .bg-122 {
  --bg: #87ffd7;
}
.ap-terminal .fg-123 {
  --fg: #87ffff;
}
.ap-terminal .bg-123 {
  --bg: #87ffff;
}
.ap-terminal .fg-124 {
  --fg: #af0000;
}
.ap-terminal .bg-124 {
  --bg: #af0000;
}
.ap-terminal .fg-125 {
  --fg: #af005f;
}
.ap-terminal .bg-125 {
  --bg: #af005f;
}
.ap-terminal .fg-126 {
  --fg: #af0087;
}
.ap-terminal .bg-126 {
  --bg: #af0087;
}
.ap-terminal .fg-127 {
  --fg: #af00af;
}
.ap-terminal .bg-127 {
  --bg: #af00af;
}
.ap-terminal .fg-128 {
  --fg: #af00d7;
}
.ap-terminal .bg-128 {
  --bg: #af00d7;
}
.ap-terminal .fg-129 {
  --fg: #af00ff;
}
.ap-terminal .bg-129 {
  --bg: #af00ff;
}
.ap-terminal .fg-130 {
  --fg: #af5f00;
}
.ap-terminal .bg-130 {
  --bg: #af5f00;
}
.ap-terminal .fg-131 {
  --fg: #af5f5f;
}
.ap-terminal .bg-131 {
  --bg: #af5f5f;
}
.ap-terminal .fg-132 {
  --fg: #af5f87;
}
.ap-terminal .bg-132 {
  --bg: #af5f87;
}
.ap-terminal .fg-133 {
  --fg: #af5faf;
}
.ap-terminal .bg-133 {
  --bg: #af5faf;
}
.ap-terminal .fg-134 {
  --fg: #af5fd7;
}
.ap-terminal .bg-134 {
  --bg: #af5fd7;
}
.ap-terminal .fg-135 {
  --fg: #af5fff;
}
.ap-terminal .bg-135 {
  --bg: #af5fff;
}
.ap-terminal .fg-136 {
  --fg: #af8700;
}
.ap-terminal .bg-136 {
  --bg: #af8700;
}
.ap-terminal .fg-137 {
  --fg: #af875f;
}
.ap-terminal .bg-137 {
  --bg: #af875f;
}
.ap-terminal .fg-138 {
  --fg: #af8787;
}
.ap-terminal .bg-138 {
  --bg: #af8787;
}
.ap-terminal .fg-139 {
  --fg: #af87af;
}
.ap-terminal .bg-139 {
  --bg: #af87af;
}
.ap-terminal .fg-140 {
  --fg: #af87d7;
}
.ap-terminal .bg-140 {
  --bg: #af87d7;
}
.ap-terminal .fg-141 {
  --fg: #af87ff;
}
.ap-terminal .bg-141 {
  --bg: #af87ff;
}
.ap-terminal .fg-142 {
  --fg: #afaf00;
}
.ap-terminal .bg-142 {
  --bg: #afaf00;
}
.ap-terminal .fg-143 {
  --fg: #afaf5f;
}
.ap-terminal .bg-143 {
  --bg: #afaf5f;
}
.ap-terminal .fg-144 {
  --fg: #afaf87;
}
.ap-terminal .bg-144 {
  --bg: #afaf87;
}
.ap-terminal .fg-145 {
  --fg: #afafaf;
}
.ap-terminal .bg-145 {
  --bg: #afafaf;
}
.ap-terminal .fg-146 {
  --fg: #afafd7;
}
.ap-terminal .bg-146 {
  --bg: #afafd7;
}
.ap-terminal .fg-147 {
  --fg: #afafff;
}
.ap-terminal .bg-147 {
  --bg: #afafff;
}
.ap-terminal .fg-148 {
  --fg: #afd700;
}
.ap-terminal .bg-148 {
  --bg: #afd700;
}
.ap-terminal .fg-149 {
  --fg: #afd75f;
}
.ap-terminal .bg-149 {
  --bg: #afd75f;
}
.ap-terminal .fg-150 {
  --fg: #afd787;
}
.ap-terminal .bg-150 {
  --bg: #afd787;
}
.ap-terminal .fg-151 {
  --fg: #afd7af;
}
.ap-terminal .bg-151 {
  --bg: #afd7af;
}
.ap-terminal .fg-152 {
  --fg: #afd7d7;
}
.ap-terminal .bg-152 {
  --bg: #afd7d7;
}
.ap-terminal .fg-153 {
  --fg: #afd7ff;
}
.ap-terminal .bg-153 {
  --bg: #afd7ff;
}
.ap-terminal .fg-154 {
  --fg: #afff00;
}
.ap-terminal .bg-154 {
  --bg: #afff00;
}
.ap-terminal .fg-155 {
  --fg: #afff5f;
}
.ap-terminal .bg-155 {
  --bg: #afff5f;
}
.ap-terminal .fg-156 {
  --fg: #afff87;
}
.ap-terminal .bg-156 {
  --bg: #afff87;
}
.ap-terminal .fg-157 {
  --fg: #afffaf;
}
.ap-terminal .bg-157 {
  --bg: #afffaf;
}
.ap-terminal .fg-158 {
  --fg: #afffd7;
}
.ap-terminal .bg-158 {
  --bg: #afffd7;
}
.ap-terminal .fg-159 {
  --fg: #afffff;
}
.ap-terminal .bg-159 {
  --bg: #afffff;
}
.ap-terminal .fg-160 {
  --fg: #d70000;
}
.ap-terminal .bg-160 {
  --bg: #d70000;
}
.ap-terminal .fg-161 {
  --fg: #d7005f;
}
.ap-terminal .bg-161 {
  --bg: #d7005f;
}
.ap-terminal .fg-162 {
  --fg: #d70087;
}
.ap-terminal .bg-162 {
  --bg: #d70087;
}
.ap-terminal .fg-163 {
  --fg: #d700af;
}
.ap-terminal .bg-163 {
  --bg: #d700af;
}
.ap-terminal .fg-164 {
  --fg: #d700d7;
}
.ap-terminal .bg-164 {
  --bg: #d700d7;
}
.ap-terminal .fg-165 {
  --fg: #d700ff;
}
.ap-terminal .bg-165 {
  --bg: #d700ff;
}
.ap-terminal .fg-166 {
  --fg: #d75f00;
}
.ap-terminal .bg-166 {
  --bg: #d75f00;
}
.ap-terminal .fg-167 {
  --fg: #d75f5f;
}
.ap-terminal .bg-167 {
  --bg: #d75f5f;
}
.ap-terminal .fg-168 {
  --fg: #d75f87;
}
.ap-terminal .bg-168 {
  --bg: #d75f87;
}
.ap-terminal .fg-169 {
  --fg: #d75faf;
}
.ap-terminal .bg-169 {
  --bg: #d75faf;
}
.ap-terminal .fg-170 {
  --fg: #d75fd7;
}
.ap-terminal .bg-170 {
  --bg: #d75fd7;
}
.ap-terminal .fg-171 {
  --fg: #d75fff;
}
.ap-terminal .bg-171 {
  --bg: #d75fff;
}
.ap-terminal .fg-172 {
  --fg: #d78700;
}
.ap-terminal .bg-172 {
  --bg: #d78700;
}
.ap-terminal .fg-173 {
  --fg: #d7875f;
}
.ap-terminal .bg-173 {
  --bg: #d7875f;
}
.ap-terminal .fg-174 {
  --fg: #d78787;
}
.ap-terminal .bg-174 {
  --bg: #d78787;
}
.ap-terminal .fg-175 {
  --fg: #d787af;
}
.ap-terminal .bg-175 {
  --bg: #d787af;
}
.ap-terminal .fg-176 {
  --fg: #d787d7;
}
.ap-terminal .bg-176 {
  --bg: #d787d7;
}
.ap-terminal .fg-177 {
  --fg: #d787ff;
}
.ap-terminal .bg-177 {
  --bg: #d787ff;
}
.ap-terminal .fg-178 {
  --fg: #d7af00;
}
.ap-terminal .bg-178 {
  --bg: #d7af00;
}
.ap-terminal .fg-179 {
  --fg: #d7af5f;
}
.ap-terminal .bg-179 {
  --bg: #d7af5f;
}
.ap-terminal .fg-180 {
  --fg: #d7af87;
}
.ap-terminal .bg-180 {
  --bg: #d7af87;
}
.ap-terminal .fg-181 {
  --fg: #d7afaf;
}
.ap-terminal .bg-181 {
  --bg: #d7afaf;
}
.ap-terminal .fg-182 {
  --fg: #d7afd7;
}
.ap-terminal .bg-182 {
  --bg: #d7afd7;
}
.ap-terminal .fg-183 {
  --fg: #d7afff;
}
.ap-terminal .bg-183 {
  --bg: #d7afff;
}
.ap-terminal .fg-184 {
  --fg: #d7d700;
}
.ap-terminal .bg-184 {
  --bg: #d7d700;
}
.ap-terminal .fg-185 {
  --fg: #d7d75f;
}
.ap-terminal .bg-185 {
  --bg: #d7d75f;
}
.ap-terminal .fg-186 {
  --fg: #d7d787;
}
.ap-terminal .bg-186 {
  --bg: #d7d787;
}
.ap-terminal .fg-187 {
  --fg: #d7d7af;
}
.ap-terminal .bg-187 {
  --bg: #d7d7af;
}
.ap-terminal .fg-188 {
  --fg: #d7d7d7;
}
.ap-terminal .bg-188 {
  --bg: #d7d7d7;
}
.ap-terminal .fg-189 {
  --fg: #d7d7ff;
}
.ap-terminal .bg-189 {
  --bg: #d7d7ff;
}
.ap-terminal .fg-190 {
  --fg: #d7ff00;
}
.ap-terminal .bg-190 {
  --bg: #d7ff00;
}
.ap-terminal .fg-191 {
  --fg: #d7ff5f;
}
.ap-terminal .bg-191 {
  --bg: #d7ff5f;
}
.ap-terminal .fg-192 {
  --fg: #d7ff87;
}
.ap-terminal .bg-192 {
  --bg: #d7ff87;
}
.ap-terminal .fg-193 {
  --fg: #d7ffaf;
}
.ap-terminal .bg-193 {
  --bg: #d7ffaf;
}
.ap-terminal .fg-194 {
  --fg: #d7ffd7;
}
.ap-terminal .bg-194 {
  --bg: #d7ffd7;
}
.ap-terminal .fg-195 {
  --fg: #d7ffff;
}
.ap-terminal .bg-195 {
  --bg: #d7ffff;
}
.ap-terminal .fg-196 {
  --fg: #ff0000;
}
.ap-terminal .bg-196 {
  --bg: #ff0000;
}
.ap-terminal .fg-197 {
  --fg: #ff005f;
}
.ap-terminal .bg-197 {
  --bg: #ff005f;
}
.ap-terminal .fg-198 {
  --fg: #ff0087;
}
.ap-terminal .bg-198 {
  --bg: #ff0087;
}
.ap-terminal .fg-199 {
  --fg: #ff00af;
}
.ap-terminal .bg-199 {
  --bg: #ff00af;
}
.ap-terminal .fg-200 {
  --fg: #ff00d7;
}
.ap-terminal .bg-200 {
  --bg: #ff00d7;
}
.ap-terminal .fg-201 {
  --fg: #ff00ff;
}
.ap-terminal .bg-201 {
  --bg: #ff00ff;
}
.ap-terminal .fg-202 {
  --fg: #ff5f00;
}
.ap-terminal .bg-202 {
  --bg: #ff5f00;
}
.ap-terminal .fg-203 {
  --fg: #ff5f5f;
}
.ap-terminal .bg-203 {
  --bg: #ff5f5f;
}
.ap-terminal .fg-204 {
  --fg: #ff5f87;
}
.ap-terminal .bg-204 {
  --bg: #ff5f87;
}
.ap-terminal .fg-205 {
  --fg: #ff5faf;
}
.ap-terminal .bg-205 {
  --bg: #ff5faf;
}
.ap-terminal .fg-206 {
  --fg: #ff5fd7;
}
.ap-terminal .bg-206 {
  --bg: #ff5fd7;
}
.ap-terminal .fg-207 {
  --fg: #ff5fff;
}
.ap-terminal .bg-207 {
  --bg: #ff5fff;
}
.ap-terminal .fg-208 {
  --fg: #ff8700;
}
.ap-terminal .bg-208 {
  --bg: #ff8700;
}
.ap-terminal .fg-209 {
  --fg: #ff875f;
}
.ap-terminal .bg-209 {
  --bg: #ff875f;
}
.ap-terminal .fg-210 {
  --fg: #ff8787;
}
.ap-terminal .bg-210 {
  --bg: #ff8787;
}
.ap-terminal .fg-211 {
  --fg: #ff87af;
}
.ap-terminal .bg-211 {
  --bg: #ff87af;
}
.ap-terminal .fg-212 {
  --fg: #ff87d7;
}
.ap-terminal .bg-212 {
  --bg: #ff87d7;
}
.ap-terminal .fg-213 {
  --fg: #ff87ff;
}
.ap-terminal .bg-213 {
  --bg: #ff87ff;
}
.ap-terminal .fg-214 {
  --fg: #ffaf00;
}
.ap-terminal .bg-214 {
  --bg: #ffaf00;
}
.ap-terminal .fg-215 {
  --fg: #ffaf5f;
}
.ap-terminal .bg-215 {
  --bg: #ffaf5f;
}
.ap-terminal .fg-216 {
  --fg: #ffaf87;
}
.ap-terminal .bg-216 {
  --bg: #ffaf87;
}
.ap-terminal .fg-217 {
  --fg: #ffafaf;
}
.ap-terminal .bg-217 {
  --bg: #ffafaf;
}
.ap-terminal .fg-218 {
  --fg: #ffafd7;
}
.ap-terminal .bg-218 {
  --bg: #ffafd7;
}
.ap-terminal .fg-219 {
  --fg: #ffafff;
}
.ap-terminal .bg-219 {
  --bg: #ffafff;
}
.ap-terminal .fg-220 {
  --fg: #ffd700;
}
.ap-terminal .bg-220 {
  --bg: #ffd700;
}
.ap-terminal .fg-221 {
  --fg: #ffd75f;
}
.ap-terminal .bg-221 {
  --bg: #ffd75f;
}
.ap-terminal .fg-222 {
  --fg: #ffd787;
}
.ap-terminal .bg-222 {
  --bg: #ffd787;
}
.ap-terminal .fg-223 {
  --fg: #ffd7af;
}
.ap-terminal .bg-223 {
  --bg: #ffd7af;
}
.ap-terminal .fg-224 {
  --fg: #ffd7d7;
}
.ap-terminal .bg-224 {
  --bg: #ffd7d7;
}
.ap-terminal .fg-225 {
  --fg: #ffd7ff;
}
.ap-terminal .bg-225 {
  --bg: #ffd7ff;
}
.ap-terminal .fg-226 {
  --fg: #ffff00;
}
.ap-terminal .bg-226 {
  --bg: #ffff00;
}
.ap-terminal .fg-227 {
  --fg: #ffff5f;
}
.ap-terminal .bg-227 {
  --bg: #ffff5f;
}
.ap-terminal .fg-228 {
  --fg: #ffff87;
}
.ap-terminal .bg-228 {
  --bg: #ffff87;
}
.ap-terminal .fg-229 {
  --fg: #ffffaf;
}
.ap-terminal .bg-229 {
  --bg: #ffffaf;
}
.ap-terminal .fg-230 {
  --fg: #ffffd7;
}
.ap-terminal .bg-230 {
  --bg: #ffffd7;
}
.ap-terminal .fg-231 {
  --fg: #ffffff;
}
.ap-terminal .bg-231 {
  --bg: #ffffff;
}
.ap-terminal .fg-232 {
  --fg: #080808;
}
.ap-terminal .bg-232 {
  --bg: #080808;
}
.ap-terminal .fg-233 {
  --fg: #121212;
}
.ap-terminal .bg-233 {
  --bg: #121212;
}
.ap-terminal .fg-234 {
  --fg: #1c1c1c;
}
.ap-terminal .bg-234 {
  --bg: #1c1c1c;
}
.ap-terminal .fg-235 {
  --fg: #262626;
}
.ap-terminal .bg-235 {
  --bg: #262626;
}
.ap-terminal .fg-236 {
  --fg: #303030;
}
.ap-terminal .bg-236 {
  --bg: #303030;
}
.ap-terminal .fg-237 {
  --fg: #3a3a3a;
}
.ap-terminal .bg-237 {
  --bg: #3a3a3a;
}
.ap-terminal .fg-238 {
  --fg: #444444;
}
.ap-terminal .bg-238 {
  --bg: #444444;
}
.ap-terminal .fg-239 {
  --fg: #4e4e4e;
}
.ap-terminal .bg-239 {
  --bg: #4e4e4e;
}
.ap-terminal .fg-240 {
  --fg: #585858;
}
.ap-terminal .bg-240 {
  --bg: #585858;
}
.ap-terminal .fg-241 {
  --fg: #626262;
}
.ap-terminal .bg-241 {
  --bg: #626262;
}
.ap-terminal .fg-242 {
  --fg: #6c6c6c;
}
.ap-terminal .bg-242 {
  --bg: #6c6c6c;
}
.ap-terminal .fg-243 {
  --fg: #767676;
}
.ap-terminal .bg-243 {
  --bg: #767676;
}
.ap-terminal .fg-244 {
  --fg: #808080;
}
.ap-terminal .bg-244 {
  --bg: #808080;
}
.ap-terminal .fg-245 {
  --fg: #8a8a8a;
}
.ap-terminal .bg-245 {
  --bg: #8a8a8a;
}
.ap-terminal .fg-246 {
  --fg: #949494;
}
.ap-terminal .bg-246 {
  --bg: #949494;
}
.ap-terminal .fg-247 {
  --fg: #9e9e9e;
}
.ap-terminal .bg-247 {
  --bg: #9e9e9e;
}
.ap-terminal .fg-248 {
  --fg: #a8a8a8;
}
.ap-terminal .bg-248 {
  --bg: #a8a8a8;
}
.ap-terminal .fg-249 {
  --fg: #b2b2b2;
}
.ap-terminal .bg-249 {
  --bg: #b2b2b2;
}
.ap-terminal .fg-250 {
  --fg: #bcbcbc;
}
.ap-terminal .bg-250 {
  --bg: #bcbcbc;
}
.ap-terminal .fg-251 {
  --fg: #c6c6c6;
}
.ap-terminal .bg-251 {
  --bg: #c6c6c6;
}
.ap-terminal .fg-252 {
  --fg: #d0d0d0;
}
.ap-terminal .bg-252 {
  --bg: #d0d0d0;
}
.ap-terminal .fg-253 {
  --fg: #dadada;
}
.ap-terminal .bg-253 {
  --bg: #dadada;
}
.ap-terminal .fg-254 {
  --fg: #e4e4e4;
}
.ap-terminal .bg-254 {
  --bg: #e4e4e4;
}
.ap-terminal .fg-255 {
  --fg: #eeeeee;
}
.ap-terminal .bg-255 {
  --bg: #eeeeee;
}
.asciinema-player-theme-asciinema {
  --term-color-foreground: #cccccc;
  --term-color-background: #121314;
  --term-color-0: hsl(0, 0%, 0%);
  --term-color-1: hsl(343, 70%, 55%);
  --term-color-2: hsl(103, 70%, 44%);
  --term-color-3: hsl(43, 70%, 55%);
  --term-color-4: hsl(193, 70%, 49.5%);
  --term-color-5: hsl(283, 70%, 60.5%);
  --term-color-6: hsl(163, 70%, 60.5%);
  --term-color-7: hsl(0, 0%, 85%);
  --term-color-8: hsl(0, 0%, 30%);
  --term-color-9: hsl(343, 70%, 55%);
  --term-color-10: hsl(103, 70%, 44%);
  --term-color-11: hsl(43, 70%, 55%);
  --term-color-12: hsl(193, 70%, 49.5%);
  --term-color-13: hsl(283, 70%, 60.5%);
  --term-color-14: hsl(163, 70%, 60.5%);
  --term-color-15: hsl(0, 0%, 100%);
}
/*
  Based on Dracula: https://draculatheme.com
 */
.asciinema-player-theme-dracula {
  --term-color-foreground: #f8f8f2;
  --term-color-background: #282a36;
  --term-color-0: #21222c;
  --term-color-1: #ff5555;
  --term-color-2: #50fa7b;
  --term-color-3: #f1fa8c;
  --term-color-4: #bd93f9;
  --term-color-5: #ff79c6;
  --term-color-6: #8be9fd;
  --term-color-7: #f8f8f2;
  --term-color-8: #6272a4;
  --term-color-9: #ff6e6e;
  --term-color-10: #69ff94;
  --term-color-11: #ffffa5;
  --term-color-12: #d6acff;
  --term-color-13: #ff92df;
  --term-color-14: #a4ffff;
  --term-color-15: #ffffff;
}
/* Based on Monokai from base16 collection - https://github.com/chriskempson/base16 */
.asciinema-player-theme-monokai {
  --term-color-foreground: #f8f8f2;
  --term-color-background: #272822;
  --term-color-0: #272822;
  --term-color-1: #f92672;
  --term-color-2: #a6e22e;
  --term-color-3: #f4bf75;
  --term-color-4: #66d9ef;
  --term-color-5: #ae81ff;
  --term-color-6: #a1efe4;
  --term-color-7: #f8f8f2;
  --term-color-8: #75715e;
  --term-color-15: #f9f8f5;
}
/*
  Based on Nord: https://github.com/arcticicestudio/nord
  Via: https://github.com/neilotoole/asciinema-theme-nord
 */
.asciinema-player-theme-nord {
  --term-color-foreground: #eceff4;
  --term-color-background: #2e3440;
  --term-color-0: #3b4252;
  --term-color-1: #bf616a;
  --term-color-2: #a3be8c;
  --term-color-3: #ebcb8b;
  --term-color-4: #81a1c1;
  --term-color-5: #b48ead;
  --term-color-6: #88c0d0;
  --term-color-7: #eceff4;
}
.asciinema-player-theme-seti {
  --term-color-foreground: #cacecd;
  --term-color-background: #111213;
  --term-color-0: #323232;
  --term-color-1: #c22832;
  --term-color-2: #8ec43d;
  --term-color-3: #e0c64f;
  --term-color-4: #43a5d5;
  --term-color-5: #8b57b5;
  --term-color-6: #8ec43d;
  --term-color-7: #eeeeee;
  --term-color-15: #ffffff;
}
/*
  Based on Solarized Dark: https://ethanschoonover.com/solarized/
 */
.asciinema-player-theme-solarized-dark {
  --term-color-foreground: #839496;
  --term-color-background: #002b36;
  --term-color-0: #073642;
  --term-color-1: #dc322f;
  --term-color-2: #859900;
  --term-color-3: #b58900;
  --term-color-4: #268bd2;
  --term-color-5: #d33682;
  --term-color-6: #2aa198;
  --term-color-7: #eee8d5;
  --term-color-8: #002b36;
  --term-color-9: #cb4b16;
  --term-color-10: #586e75;
  --term-color-11: #657b83;
  --term-color-12: #839496;
  --term-color-13: #6c71c4;
  --term-color-14: #93a1a1;
  --term-color-15: #fdf6e3;
}
/*
  Based on Solarized Light: https://ethanschoonover.com/solarized/
 */
.asciinema-player-theme-solarized-light {
  --term-color-foreground: #657b83;
  --term-color-background: #fdf6e3;
  --term-color-0: #073642;
  --term-color-1: #dc322f;
  --term-color-2: #859900;
  --term-color-3: #b58900;
  --term-color-4: #268bd2;
  --term-color-5: #d33682;
  --term-color-6: #2aa198;
  --term-color-7: #eee8d5;
  --term-color-8: #002b36;
  --term-color-9: #cb4b16;
  --term-color-10: #586e75;
  --term-color-11: #657c83;
  --term-color-12: #839496;
  --term-color-13: #6c71c4;
  --term-color-14: #93a1a1;
  --term-color-15: #fdf6e3;
}
.asciinema-player-theme-solarized-light .ap-overlay-start .ap-play-button svg .ap-play-btn-fill {
  fill: var(--term-color-1);
}
.asciinema-player-theme-solarized-light .ap-overlay-start .ap-play-button svg .ap-play-btn-stroke {
  stroke: var(--term-color-1);
}
/*
  Based on Tango: https://en.wikipedia.org/wiki/Tango_Desktop_Project
 */
.asciinema-player-theme-tango {
  --term-color-foreground: #cccccc;
  --term-color-background: #121314;
  --term-color-0: #000000;
  --term-color-1: #cc0000;
  --term-color-2: #4e9a06;
  --term-color-3: #c4a000;
  --term-color-4: #3465a4;
  --term-color-5: #75507b;
  --term-color-6: #06989a;
  --term-color-7: #d3d7cf;
  --term-color-8: #555753;
  --term-color-9: #ef2929;
  --term-color-10: #8ae234;
  --term-color-11: #fce94f;
  --term-color-12: #729fcf;
  --term-color-13: #ad7fa8;
  --term-color-14: #34e2e2;
  --term-color-15: #eeeeec;
}
`;function Lg(A){return typeof A=="number"?A:typeof A=="string"?A.split(":").reverse().map(parseFloat).reduce((g,n,I)=>g+n*Math.pow(60,I)):void 0}function mn(A,g){let n;return function(){for(var I=arguments.length,B=new Array(I),e=0;e<I;e++)B[e]=arguments[e];clearTimeout(n),n=setTimeout(()=>A.apply(this,B),g)}}function un(A,g){let n=!0;return function(){if(n){n=!1;for(var I=arguments.length,B=new Array(I),e=0;e<I;e++)B[e]=arguments[e];A.apply(this,B),setTimeout(()=>n=!0,g)}}}class kn{log(){}debug(){}info(){}warn(){}error(){}}class Kg{constructor(g,n){this.logger=g,this.prefix=n}log(g){for(var n=arguments.length,I=new Array(n>1?n-1:0),B=1;B<n;B++)I[B-1]=arguments[B];this.logger.log(`${this.prefix}${g}`,...I)}debug(g){for(var n=arguments.length,I=new Array(n>1?n-1:0),B=1;B<n;B++)I[B-1]=arguments[B];this.logger.debug(`${this.prefix}${g}`,...I)}info(g){for(var n=arguments.length,I=new Array(n>1?n-1:0),B=1;B<n;B++)I[B-1]=arguments[B];this.logger.info(`${this.prefix}${g}`,...I)}warn(g){for(var n=arguments.length,I=new Array(n>1?n-1:0),B=1;B<n;B++)I[B-1]=arguments[B];this.logger.warn(`${this.prefix}${g}`,...I)}error(g){for(var n=arguments.length,I=new Array(n>1?n-1:0),B=1;B<n;B++)I[B-1]=arguments[B];this.logger.error(`${this.prefix}${g}`,...I)}}let G;const eA=new Array(128).fill(void 0);eA.push(void 0,null,!0,!1);function QA(A){return eA[A]}let RA=eA.length;function bn(A){A<132||(eA[A]=RA,RA=A)}function rA(A){const g=QA(A);return bn(A),g}const vg=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&vg.decode();let JA=null;function ZA(){return(JA===null||JA.byteLength===0)&&(JA=new Uint8Array(G.memory.buffer)),JA}function WA(A,g){return A=A>>>0,vg.decode(ZA().subarray(A,A+g))}function CA(A){RA===eA.length&&eA.push(eA.length+1);const g=RA;return RA=eA[g],eA[g]=A,g}function dg(A){const g=typeof A;if(g=="number"||g=="boolean"||A==null)return`${A}`;if(g=="string")return`"${A}"`;if(g=="symbol"){const B=A.description;return B==null?"Symbol":`Symbol(${B})`}if(g=="function"){const B=A.name;return typeof B=="string"&&B.length>0?`Function(${B})`:"Function"}if(Array.isArray(A)){const B=A.length;let e="[";B>0&&(e+=dg(A[0]));for(let C=1;C<B;C++)e+=", "+dg(A[C]);return e+="]",e}const n=/\[object ([^\]]+)\]/.exec(toString.call(A));let I;if(n.length>1)I=n[1];else return toString.call(A);if(I=="Object")try{return"Object("+JSON.stringify(A)+")"}catch{return"Object"}return A instanceof Error?`${A.name}: ${A.message}
${A.stack}`:I}let XA=0;const zA=typeof TextEncoder<"u"?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},Gn=typeof zA.encodeInto=="function"?function(A,g){return zA.encodeInto(A,g)}:function(A,g){const n=zA.encode(A);return g.set(n),{read:A.length,written:n.length}};function Hg(A,g,n){if(n===void 0){const Q=zA.encode(A),t=g(Q.length,1)>>>0;return ZA().subarray(t,t+Q.length).set(Q),XA=Q.length,t}let I=A.length,B=g(I,1)>>>0;const e=ZA();let C=0;for(;C<I;C++){const Q=A.charCodeAt(C);if(Q>127)break;e[B+C]=Q}if(C!==I){C!==0&&(A=A.slice(C)),B=n(B,I,I=C+A.length*3,1)>>>0;const Q=ZA().subarray(B+C,B+I),t=Gn(A,Q);C+=t.written,B=n(B,I,C,1)>>>0}return XA=C,B}let SA=null;function pA(){return(SA===null||SA.byteLength===0)&&(SA=new Int32Array(G.memory.buffer)),SA}function Fn(A,g,n){const I=G.create(A,g,n);return PA.__wrap(I)}let YA=null;function qn(){return(YA===null||YA.byteLength===0)&&(YA=new Uint32Array(G.memory.buffer)),YA}function Mn(A,g){return A=A>>>0,qn().subarray(A/4,A/4+g)}const xg=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(A=>G.__wbg_vt_free(A>>>0));class PA{static __wrap(g){g=g>>>0;const n=Object.create(PA.prototype);return n.__wbg_ptr=g,xg.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){const g=this.__wbg_ptr;return this.__wbg_ptr=0,xg.unregister(this),g}free(){const g=this.__destroy_into_raw();G.__wbg_vt_free(g)}feed(g){const n=Hg(g,G.__wbindgen_malloc,G.__wbindgen_realloc),I=XA,B=G.vt_feed(this.__wbg_ptr,n,I);return rA(B)}resize(g,n){const I=G.vt_resize(this.__wbg_ptr,g,n);return rA(I)}inspect(){let g,n;try{const e=G.__wbindgen_add_to_stack_pointer(-16);G.vt_inspect(e,this.__wbg_ptr);var I=pA()[e/4+0],B=pA()[e/4+1];return g=I,n=B,WA(I,B)}finally{G.__wbindgen_add_to_stack_pointer(16),G.__wbindgen_free(g,n,1)}}getSize(){try{const B=G.__wbindgen_add_to_stack_pointer(-16);G.vt_getSize(B,this.__wbg_ptr);var g=pA()[B/4+0],n=pA()[B/4+1],I=Mn(g,n).slice();return G.__wbindgen_free(g,n*4,4),I}finally{G.__wbindgen_add_to_stack_pointer(16)}}getLine(g){const n=G.vt_getLine(this.__wbg_ptr,g);return rA(n)}getCursor(){const g=G.vt_getCursor(this.__wbg_ptr);return rA(g)}}async function Nn(A,g){if(typeof Response=="function"&&A instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(A,g)}catch(I){if(A.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",I);else throw I}const n=await A.arrayBuffer();return await WebAssembly.instantiate(n,g)}else{const n=await WebAssembly.instantiate(A,g);return n instanceof WebAssembly.Instance?{instance:n,module:A}:n}}function Tg(){const A={};return A.wbg={},A.wbg.__wbindgen_object_drop_ref=function(g){rA(g)},A.wbg.__wbindgen_error_new=function(g,n){const I=new Error(WA(g,n));return CA(I)},A.wbg.__wbindgen_object_clone_ref=function(g){const n=QA(g);return CA(n)},A.wbg.__wbindgen_number_new=function(g){return CA(g)},A.wbg.__wbindgen_bigint_from_u64=function(g){const n=BigInt.asUintN(64,g);return CA(n)},A.wbg.__wbindgen_string_new=function(g,n){const I=WA(g,n);return CA(I)},A.wbg.__wbg_set_f975102236d3c502=function(g,n,I){QA(g)[rA(n)]=rA(I)},A.wbg.__wbg_new_b525de17f44a8943=function(){const g=new Array;return CA(g)},A.wbg.__wbg_new_f841cc6f2098f4b5=function(){return CA(new Map)},A.wbg.__wbg_new_f9876326328f45ed=function(){const g=new Object;return CA(g)},A.wbg.__wbindgen_is_string=function(g){return typeof QA(g)=="string"},A.wbg.__wbg_set_17224bc548dd1d7b=function(g,n,I){QA(g)[n>>>0]=rA(I)},A.wbg.__wbg_set_388c4c6422704173=function(g,n,I){const B=QA(g).set(QA(n),QA(I));return CA(B)},A.wbg.__wbindgen_debug_string=function(g,n){const I=dg(QA(n)),B=Hg(I,G.__wbindgen_malloc,G.__wbindgen_realloc),e=XA;pA()[g/4+1]=e,pA()[g/4+0]=B},A.wbg.__wbindgen_throw=function(g,n){throw new Error(WA(g,n))},A}function Og(A,g){return G=A.exports,Dg.__wbindgen_wasm_module=g,SA=null,YA=null,JA=null,G}function Rn(A){if(G!==void 0)return G;const g=Tg();A instanceof WebAssembly.Module||(A=new WebAssembly.Module(A));const n=new WebAssembly.Instance(A,g);return Og(n,A)}async function Dg(A){if(G!==void 0)return G;const g=Tg();(typeof A=="string"||typeof Request=="function"&&A instanceof Request||typeof URL=="function"&&A instanceof URL)&&(A=fetch(A));const{instance:n,module:I}=await Nn(await A,g);return Og(n,I)}var Jn=Object.freeze({__proto__:null,Vt:PA,create:Fn,default:Dg,initSync:Rn});const Sn=[62,0,0,0,63,52,53,54,55,56,57,58,59,60,61,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,0,0,0,0,0,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51];function _A(A){return Sn[A-43]}function Yn(A){let g=A.endsWith("==")?2:A.endsWith("=")?1:0,n=A.length,I=new Uint8Array(3*(n/4)),B;for(let e=0,C=0;e<n;e+=4,C+=3)B=_A(A.charCodeAt(e))<<18|_A(A.charCodeAt(e+1))<<12|_A(A.charCodeAt(e+2))<<6|_A(A.charCodeAt(e+3)),I[C]=B>>16,I[C+1]=B>>8&255,I[C+2]=B&255;return I.subarray(0,I.length-g)}const Un=Yn("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QQhrIgAgA08NAQwDCyAHQQhrIQALA0AgBkEEaigCACIJQYqUqNAAc0GBgoQIayAJQX9zcSAGKAIAIglBipSo0ABzQYGChAhrIAlBf3NxckGAgYKEeHENAiAGQQhqIQYgACADQQhqIgNPDQALDAELIAIgBEYEQCACIQQMBAtBACEAA0AgACAFai0AAEEKRg0CIAcgAEEBaiIARw0ACyACIQQMAwsgAyAHRgRAIAIhBAwDCwNAIAMgBWotAABBCkYEQCADIQAMAgsgByADQQFqIgNHDQALIAIhBAwCCyAAIARqIgZBAWohBAJAIAIgBk0NACAAIAVqLQAAQQpHDQBBACEFIAQiBiEADAMLIAIgBE8NAAsLQQEhBSACIgAgCCIGRw0AQQAPCwJAIAwtAABFDQAgC0H49MAAQQQgCigCDBEBAEUNAEEBDwsgACAIayEHQQAhAyAAIAhHBEAgACANai0AAEEKRiEDCyABIAhqIQAgDCADOgAAIAYhCCALIAAgByAKKAIMEQEAIgAgBXJFDQALIAAL0gYBBX8jAEHAAWsiAiQAIAAoAgAhAyACQbgBakGojMAANgIAIAJBBGoiAEGsAWpBxJDAADYCACAAQaQBakG0kMAANgIAIABBnAFqQbSQwAA2AgAgAkGYAWpBmI7AADYCACACQZABakGYjsAANgIAIAJBiAFqQaSPwAA2AgAgAkGAAWpBpJDAADYCACAAQfQAakGkj8AANgIAIAJB8ABqQaSPwAA2AgAgAkHoAGpBpI/AADYCACAAQdwAakGkj8AANgIAIAJB2ABqQZSQwAA2AgAgAkHQAGpBmI7AADYCACACQcgAakGEkMAANgIAIAJBQGtBiI/AADYCACACQThqQfSPwAA2AgAgAkEwakHkj8AANgIAIABBJGpB1I/AADYCACACQSBqQcSPwAA2AgAgAkEYakHEj8AANgIAIAJBEGpBmI7AADYCACACIANB3ABqNgKsASACIANBiAFqNgKkASACIANB9ABqNgKcASACIANBrAFqNgKUASACIANBqAFqNgKMASACIANBwgFqNgKEASACIANBwQFqNgJ8IAIgA0HAAWo2AnQgAiADQb8BajYCbCACIANBvgFqNgJkIAIgA0G9AWo2AlwgAiADQdAAajYCVCACIANBpAFqNgJMIAIgA0GwAWo2AkQgAiADQbIB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amohAiADQSBqIQMgCCAHQQRqIgdHDQALCyAGBEAgB0EDdCAFakEEaiEDA0AgAygCACACaiECIANBCGohAyAGQQFrIgYNAAsLIAEoAgwEQCACQQBIDQEgBSgCBEUgAkEQSXENASACQQF0IQILIAINAQtBASEDQQAhAgwBCyACQQBIDQFBqYzBAC0AABogAkEBENcBIgNFDQILIARBADYCCCAEIAM2AgQgBCACNgIAIARBhO/AACABEBhFDQJB5O/AAEEzIARBD2pBmPDAAEHA8MAAEF0ACxCpAQALQQEgAkHkjMEAKAIAIgBB5AAgABsRAgAACyAAIAQpAgA3AgAgAEEIaiAEQQhqKAIANgIAIARBEGokAAvVAgEHf0EBIQkCQAJAIAJFDQAgASACQQF0aiEKIABBgP4DcUEIdiELIABB/wFxIQ0DQCABQQJqIQwgByABLQABIgJqIQggCyABLQAAIgFHBEAgASALSw0CIAghByAKIAwiAUYNAgwBCwJAAkAgByAITQRAIAQgCEkNASADIAdqIQEDQCACRQ0DIAJBAWshAiABLQAAIAFBAWohASANRw0AC0EAIQkMBQsgByAIQbj5wAAQ7AEACyAIIARBuPnAABDqAQALIAghByAKIAwiAUcNAAsLIAZFDQAgBSAGaiEDIABB//8DcSEBA0AgBUEBaiEAAkAgBS0AACICwCIEQQBOBEAgACEFDAELIAAgA0cEQCAFLQABIARB/wBxQQh0ciECIAVBAmohBQwBC0Go+cAAEO4BAAsgASACayIBQQBIDQEgCUEBcyEJIAMgBUcNAAsLIAlBAXEL8wIBBH8gACgCDCECAkACQCABQYACTwRAIAAoAhghAwJAAkAgACACRgRAIABBFEEQIAAoAhQiAhtqKAIAIgENAUEAIQIMAgsgACgCCCIBIAI2AgwgAiABNgIIDAELIABBFGogAEEQaiACGyEEA0AgBCEFIAEiAigCFCEBIAJBFGogAkEQaiABGyEEIAJBFEEQIAEbaigCACIBDQALIAVBADYCAAsgA0UNAiAAIAAoAhxBAnRB+IzBAGoiASgCAEcEQCADQRBBFCADKAIQIABGG2ogAjYCACACRQ0DDAILIAEgAjYCACACDQFBlJDBAEGUkMEAKAIAQX4gACgCHHdxNgIADAILIAIgACgCCCIARwRAIAAgAjYC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IhEoAgAhDyARIAwoAgA2AgAgDCAPNgIAIAVBBGoiBUEkRw0ACyALQQxqIAMoApwBIAMoAqABIgVBAUEAIANBsgFqECsgA0EMahCKASADKAIMIgwEQCADKAIQIAxBBHRBBBDkAQsgAyALQQxqQSQQiAJB3ABqQQAgBRB4CyALQTBqJAAgAxBCCyACQQJqIQIgB0ECayIHDQALCyANBEAgBCANQQF0QQIQ5AELDCALAkAgAi8BAiIEQQEgBEEBSxtBAWsiBCACLwEEIgIgAygCoAEiBSACG0EBayICSSACIAVJcUUEQCADKAKoASEEDAELIAMgAjYCrAEgAyAENgKoAQsgA0EAOgDCASADQQA2AmggAyAEQQAgAy0AvgEbNgJsDB8LIANBAToAcCADQQA7AL0BIANBADsBugEgA0ECOgC2ASADQQI6ALIBIANBADsBsAEgA0IANwKkASADQYCAgAg2AoQBIANBAjoAgAEgA0ECOgB8IANCADcCdCADIAMoAqABQQFrNgKsAQweCyADKAKgASADKAKsASIEQQFqIAQgAygCbCIESRshBSADIAQgBSACLwECIgJBASACQQFLGyADQbIBahAiIANB3ABqIAQgBRB4DB0LIAMgAygCaCADKAJsIgRBACACLwECIgJBASACQQFLGyADQbIBahAoIAQgAygCZCICTw0dIAMoAmAgBGpBAToAAAwcCwJAAkACQAJAIAItAAFBAWsOAwECAwALIAMgAygCaCADKAJsQQEgAyADQbIBahAoIANB3ABqIAMoAmwgAygCoAEQeAwCCyADIAMoAmggAygCbEECIAMgA0GyAWoQKCADQdwAakEAIAMoAmxBAWoQeAwBCyADQQAgAygCHCADQbIBahBLIANB3ABqQQAgAygCoAEQeAsMGwsgAyADKAJoIAMoAmwiBCACLQABQQRqIAMgA0GyAWoQKCAEIAMoAmQiAk8NGyADKAJgIARqQQE6AAAMGgsgAyACLQABOgCxAQwZCyADIAItAAE6ALABDBgLIAMoAlhBAnQhAiADKAJUIQUgAygCaCEHAkACQANAIAJFDQEgAkEEayECIAUoAgAhBCAFQQRqIQUgBCAHTQ0ACyADKAKcASICQQFrIQUMAQsgAygCnAEiAkEBayIFIQQLIANBADoAwgEgAyAEIAUgAiAESxs2AmgMFwsg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+gA2AiggACAAQSRqNgIUIAAgAEEvajYCJCAAQQxqQeCXwAAQpAEACyATQRBqJAAgAAvGAQECfyMAQRBrIgAkACABKAIUQbDswABBCyABKAIYKAIMEQEAIQMgAEEIaiICQQA6AAUgAiADOgAEIAIgATYCACACIgEtAAQhAwJAIAItAAVFBEAgA0EARyEBDAELQQEhAiADRQRAIAEoAgAiAi0AHEEEcUUEQCABIAIoAhRBh/XAAEECIAIoAhgoAgwRAQAiAToABAwCCyACKAIUQYb1wABBASACKAIYKAIMEQEAIQILIAEgAjoABCACIQELIABBEGokACABCzIBAX8gAEEQahAwAkAgACgCACIBQYCAgIB4Rg0AIAFFDQAgACgCBCABQQR0QQQQ5AELCy8BAn8gACAAKAKoASICIAAoAqwBQQFqIgMgASAAQbIBahBZIABB3ABqIAIgAxB4Cy8BAn8gACAAKAKoASICIAAoAqwBQQFqIgMgASAAQbIBahAiIABB3ABqIAIgAxB4CysAIAEgAkkEQEHcosAAQSNBzKPAABCcAQALIAIgACACQQR0aiABIAJrEBILJQAgAEEBNgIEIAAgASgCBCABKAIAa0EEdiIBNgIIIAAgATYCAAslACAARQRAQfCXwABBMhD7AQALIAAgAiADIAQgBSABKAIQEQgACzAAIAEoAhQgAC0AAEECdCIAQYyFwABqKAIAIABB1ITAAGooAgAgASgCGCgCDBEBAAswACABKAIUIAAtAABBAnQiAEGEi8AAaigCACAAQfiKwABqKAIAIAEoAhgoAgwRAQALMAAgASgCFCAALQAAQQJ0IgBB2JTAAGooAgAgAEHMlMAAaigCACABKAIYKAIMEQEACyMAIABFBEBB8JfAAEEyEPsBAAsgACACIAMgBCABKAIQEQUACyMAIABFBEBB8JfAAEEyEPsBAAsgACACIAMgBCABKAIQERgACyMAIABFBEBB8JfAAEEyEPsBAAsgACACIAMgBCABKAIQERoACyMAIABFBEBB8JfAAEEyEPsBAAsgACACIAMgBCABKAIQERwACyMAIABFBEBB8JfAAEEyEPsBAAsgACACIAMgBCABKAIQEQwACygBAX8gACgCACIBQYCAgIB4ckGAgICAeEcEQCAAKAIEIAFBARDkAQsLLgAgASgCFEH8icAAQfeJwAAgACgCAC0AACIAG0EHQQUgABsgASgCGCgCDBEBAAshACAARQRAQfCXwABBMhD7AQALIAAgAiADIAEoAhARAwALHQEBfyAAKAIAIgEEQCAAKAIEIAFBBHRBBBDkAQsLHQEBfyAAKAIAIgEEQCAAKAIEIAFBAnRBBBDkAQsLIgAgAC0AAEUEQCABQaj3wABBBRATDwsgAUGt98AAQQQQEwsrACABKAIUQd+TwABB2JPAACAALQAAIgAbQQlBByAAGyABKAIYKAIMEQEACysAIAEoAhRB6JPAAEHXjsAAIAAtAAAiABtBC0EGIAAbIAEoAhgoAgwRAQALHwAgAEUEQEHwl8AAQTIQ+wEACyAAIAIgASgCEBEAAAsbABAHIQIgAEEANgIIIAAgAjYCBCAAIAE2AgALwQMCAn4Gf0GsjMEAKAIARQRAIwBBMGsiAyQAAn8CQCAABEAgACgCACAAQQA2AgANAQsgA0EQakGwlsAAKQMANwMAIANBqJbAACkDADcDCEEADAELIANBEGogAEEQaikCADcDACADIAApAgg3AwggACgCBAshAEGsjMEAKQIAIQFBsIzBACAANgIAQayMwQBBATYCACADQRhqIgBBEGpBvIzBACkCADcDACAAQQhqIgBBtIzBACkCADcDAEG0jMEAIAMpAwg3AgBBvIzBACADQRBqKQMANwIAIAMgATcDGCABpwRAAkAgACgCBCIGRQ0AIAAoAgwiBwRAIAAoAgAiBEEIaiEFIAQpAwBCf4VCgIGChIiQoMCAf4MhAQNAIAFQBEADQCAEQeAAayEEIAUpAwAgBUEIaiEFQn+FQoCBgoSIkKDAgH+DIgFQDQALCyABQgF9IQIgBCABeqdBA3ZBdGxqQQRrKAIAIghBhAFPBEAgCBAACyABIAKDIQEgB0EBayIHDQALCyAGQQFqrUIMfqdBB2pBeHEiBCAGakEJaiIFRQ0AIAAoAgAgBGsgBUEIEOQBCwsgA0EwaiQAC0GwjMEACxoBAX8gACgCACIBBEAgACgCBCABQQEQ5AELCxQAIAAoAgAiAEGEAU8EQCAAEAALC7YBAQR/IAAoAgAiACgCBCECIAAoAgghAyMAQRBrIgAkACABKAIUQazywABBASABKAIYKAIMEQEAIQUgAEEEaiIEQQA6AAUgBCAFOgAEIAQgATYCACADBEADQCAAIAI2AgwgAEEEaiAAQQxqQaiMwAAQLCACQQFqIQIgA0EBayIDDQALCyAAQQRqIgEtAAQEf0EBBSABKAIAIgEoAhRBjvXAAEEBIAEoAhgoAgwRAQALIABBEGokAAu9AQEEfyAAKAIAIgAoAgQhAiAAKAIIIQMjAEEQayIAJAAgASgCFEGs8sAAQQEgASgCGCgCDBEBACEFIABBBGoiBEEAOgAFIAQgBToABCAEIAE2AgAgAwRAIANBAnQhAQNAIAAgAjYCDCAAQQRqIABBDGpB+IzAABAsIAJBBGohAiABQQRrIgENAAsLIABBBGoiAS0ABAR/QQEFIAEoAgAiASgCFEGO9cAAQQEgASgCGCgCDBEBAAsgAEEQaiQAC+UGAQV/AkACQAJAAkACQCAAQQRrIgUoAgAiB0F4cSIEQQRBCCAHQQNxIgYbIAFqTwRAIAZBAEcgAUEnaiIIIARJcQ0BAkACQCACQQlPBEAgAiADEB0iAg0BQQAhAAwIC0EAIQIgA0HM/3tLDQFBECADQQtqQXhxIANBC0kbIQECQCAGRQRAIAFBgAJJDQEgBCABQQRySQ0BIAQgAWtBgYAITw0BDAkLIABBCGsiBiAEaiEIAkACQAJAAkAgASAESwRAIAhBpJDBACgCAEYNBCAIQaCQwQAoAgBGDQIgCCgCBCIHQQJxDQUgB0F4cSIHIARqIgQgAUkNBSAIIAcQICAEIAFrIgJBEEkNASAFIAEgBSgCAEEBcXJBAnI2AgAgASAGaiIBIAJBA3I2AgQgBCAGaiIDIAMoAgRBAXI2AgQgASACEBsMDQsgBCABayICQQ9LDQIMDAsgBSAEIAUoAgBBAXFyQQJyNgIAIAQgBmoiASABKAIEQQFyNgIEDAsLQZiQwQAoAgAgBGoiBCABSQ0CAkAgBCABayICQQ9NBEAgBSAHQQFxIARyQQJyNgIAIAQgBmoiASABKAIEQQFyNgIEQQAhAkEAIQEMAQsgBSABIAdBAXFyQQJyNgIAIAEgBmoiASACQQFyNgIEIAQgBmoiAyACNgIAIAMgAygCBEF+cTYCBAtBoJDBACABNgIAQZiQwQAgAjYCAAwKCyAFIAEgB0EBcXJBAnI2AgAgASAGaiIBIAJBA3I2AgQgCCAIKAIEQQFyNgIEIAEgAhAbDAkLQZyQwQAoAgAgBGoiBCABSw0HCyADEA8iAUUNASABIAAgBSgCACIBQXhxQXxBeCABQQNxG2oiASADIAEgA0kbEIgCIAAQFiEADAcLIAIgACABIAMgASADSRsQiAIaIAUoAgAiBUF4cSEDIAMgAUEEQQggBUEDcSIFG2pJDQMgBUEARyADIAhLcQ0EIAAQFgsgAiEADAULQbHrwABBLkHg68AAEJwBAAtB8OvAAEEuQaDswAAQnAEAC0Gx68AAQS5B4OvAABCcAQALQfDrwABBLkGg7MAAEJwBAAsgBSABIAdBAXFyQQJyNgIAIAEgBmoiAiAEIAFrIgFBAXI2AgRBnJDBACABNgIAQaSQwQAgAjYCAAsgAAsUACAAIAIgAxAFNgIEIABBADYCAAsQACABBEAgACABIAIQ5AELCxkAIAEoAhRBhPLAAEEOIAEoAhgoAgwRAQALEQAgAEEMaiIAEIoBIAAQwQELEwAgACgCACABKAIAIAIoAgAQDAsQACAAIAEgASACahCOAUEACxQAIAAoAgAgASAAKAIEKAIMEQAAC7gBAQR/IAAoAgQhAiAAKAIIIQMjAEEQayIAJAAgASgCFEGs8sAAQQEgASgCGCgCDBEBACEFIABBBGoiBEEAOgAFIAQgBToABCAEIAE2AgAgAwRAIANBBHQhAQNAIAAgAjYCDCAAQQRqIABBDGpB2IzAABAsIAJBEGohAiABQRBrIgENAAsLIABBBGoiAS0ABAR/QQEFIAEoAgAiASgCFEGO9cAAQQEgASgCGCgCDBEBAAsgAEEQaiQAC7gBAQR/IAAoAgQhAiAAKAIIIQMjAEEQayIAJAAgASgCFEGs8sAAQQEgASgCGCgCDBEBACEFIABBBGoiBEEAOgAFIAQgBToABCAEIAE2AgAgAwRAIANBBHQhAQNAIAAgAjYCDCAAQQRqIABBDGpBmIzAABAsIAJBEGohAiABQRBrIgENAAsLIABBBGoiAS0ABAR/QQEFIAEoAgAiASgCFEGO9cAAQQEgASgCGCgCDBEBAAsgAEEQaiQACxkAAn8gAUEJTwRAIAEgABAdDAELIAAQDwsLFAAgAEEANgIIIABCgICAgBA3AgALEQAgACgCBCAAKAIIIAEQhAILqgIBB38jAEEQayIFJAACQAJAAkAgASgCCCIDIAEoAgBPDQAgBUEIaiEGIwBBIGsiAiQAAkAgASgCACIEIANPBEACf0GBgICAeCAERQ0AGiABKAIEIQcCQCADRQRAQQEhCCAHIARBARDkAQwBC0EBIAcgBEEBIAMQzQEiCEUNARoLIAEgAzYCACABIAg2AgRBgYCAgHgLIQQgBiADNgIEIAYgBDYCACACQSBqJAAMAQsgAkEBNgIMIAJB9OnAADYCCCACQgA3AhQgAkHQ6cAANgIQIAJBCGpByOrAABCkAQALIAUoAggiAkGBgICAeEYNACACRQ0BIAIgBSgCDEHkjMEAKAIAIgBB5AAgABsRAgAACyAFQRBqJAAMAQsQqQEACyAAIAEpAgQ3AwALDgAgACABIAEgAmoQjgELIAAgAEKN04Cn1Nuixjw3AwggAELVnsTj3IPBiXs3AwALIgAgAELiq87AwdHBlKl/NwMIIABCivSnla2v+57uADcDAAsgACAAQsH3+ejMk7LRQTcDCCAAQuTex4WQ0IXefTcDAAsTACAAQdTtwAA2AgQgACABNgIACxAAIAEgACgCACAAKAIEEBMLEAAgASgCFCABKAIYIAAQGAupAQEDfyAAKAIAIQIjAEEQayIAJAAgASgCFEGs8sAAQQEgASgCGCgCDBEBACEEIABBBGoiA0EAOgAFIAMgBDoABCADIAE2AgBBDCEBA0AgACACNgIMIABBBGogAEEMakHojMAAECwgAkECaiECIAFBAmsiAQ0ACyAAQQRqIgEtAAQEf0EBBSABKAIAIgEoAhRBjvXAAEEBIAEoAhgoAgwRAQALIABBEGokAAsNACAAIAEgAhDbAUEAC2QBAX8CQCAAQQRrKAIAIgNBeHEhAgJAIAJBBEEIIANBA3EiAxsgAWpPBEAgA0EARyACIAFBJ2pLcQ0BIAAQFgwCC0Gx68AAQS5B4OvAABCcAQALQfDrwABBLkGg7MAAEJwBAAsLDQAgACgCACABIAIQBgsNACAAKAIAIAEgAhALCwwAIAAoAgAQCkEBRgsOACAAKAIAGgNADAALAAtsAQF/IwBBMGsiAyQAIAMgATYCBCADIAA2AgAgA0EsakHjADYCACADQQI2AgwgA0Ho98AANgIIIANCAjcCFCADQeMANgIkIAMgA0EgajYCECADIANBBGo2AiggAyADNgIgIANBCGogAhCkAQALbAEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBLGpB4wA2AgAgA0ECNgIMIANBiPjAADYCCCADQgI3AhQgA0HjADYCJCADIANBIGo2AhAgAyADQQRqNgIoIAMgAzYCICADQQhqIAIQpAEACwsAIAA1AgAgARAkC2wBAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQSxqQeMANgIAIANBAjYCDCADQbz4wAA2AgggA0ICNwIUIANB4wA2AiQgAyADQSBqNgIQIAMgA0EEajYCKCADIAM2AiAgA0EIaiACEKQBAAsLACAAMQAAIAEQJAsPAEGt8sAAQSsgABCcAQALCwAgACkDACABECQLCwAgACMAaiQAIwALDAAgACgCACABEMMBCwsAIAAoAgAgARAnCwcAIAAQyQELBwAgABDBAQsZACABKAIUQcyHwABBBSABKAIYKAIMEQEAC5cBAQF/IAAoAgAhAiMAQUBqIgAkACAAQgA3AzggAEE4aiACKAIAEA0gACAAKAI8IgI2AjQgACAAKAI4NgIwIAAgAjYCLCAAQd8ANgIoIABBAjYCECAAQcznwAA2AgwgAEIBNwIYIAAgAEEsaiICNgIkIAAgAEEkajYCFCABKAIUIAEoAhggAEEMahAYIAIQyQEgAEFAayQAC6IBAQR/QQIhAyMAQRBrIgIkACABKAIUQazywABBASABKAIYKAIMEQEAIQUgAkEEaiIEQQA6AAUgBCAFOgAEIAQgATYCAANAIAIgADYCDCACQQRqIAJBDGpByIzAABAsIABBAWohACADQQFrIgMNAAsgAkEEaiIALQAEBH9BAQUgACgCACIAKAIUQY71wABBASAAKAIYKAIMEQEACyACQRBqJAALowEBA38jAEEQayICJAAgASgCFEGs8sAAQQEgASgCGCgCDBEBACEEIAJBBGoiA0EAOgAFIAMgBDoABCADIAE2AgBBgAQhAQNAIAIgADYCDCACQQRqIAJBDGpBuIzAABAsIABBEGohACABQRBrIgENAAsgAkEEaiIALQAEBH9BAQUgACgCACIAKAIUQY71wABBASAAKAIYKAIMEQEACyACQRBqJAALBwAgABDCAQsMACAAEIoBIAAQwQELCQAgACABEA4ACw0AQeTowABBGxD7AQALDgBB/+jAAEHPABD7AQALDQAgAEHY6sAAIAEQGAsNACAAQfDqwAAgARAYCw0AIABBhO/AACABEBgLGQAgASgCFEH87sAAQQUgASgCGCgCDBEBAAuGBAEFfyMAQRBrIgMkAAJAAn8CQCABQYABTwRAIANBADYCDCABQYAQSQ0BIAFBgIAESQRAIAMgAUE/cUGAAXI6AA4gAyABQQx2QeABcjoADCADIAFBBnZBP3FBgAFyOgANQQMMAwsgAyABQT9xQYABcjoADyADIAFBBnZBP3FBgAFyOgAOIAMgAUEMdkE/cUGAAXI6AA0gAyABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAiAAKAIARgRAIwBBIGsiBCQAAkACQCACQQFqIgJFDQAgACgCACIFQQF0IgYgAiACIAZJGyICQQggAkEISxsiAkF/c0EfdiEGIAQgBQR/IAQgBTYCHCAEIAAoAgQ2AhRBAQVBAAs2AhggBEEIaiAGIAIgBEEUahBEIAQoAggEQCAEKAIMIgBFDQEgACAEKAIQQeSMwQAoAgAiAEHkACAAGxECAAALIAQoAgwhBSAAIAI2AgAgACAFNgIEIARBIGokAAwBCxCpAQALIAAoAgghAgsgACACQQFqNgIIIAAoAgQgAmogAToAAAwCCyADIAFBP3FBgAFyOgANIAMgAUEGdkHAAXI6AAxBAgshASABIAAoAgAgACgCCCICa0sEQCAAIAIgARA+IAAoAgghAgsgACgCBCACaiADQQxqIAEQiAIaIAAgASACajYCCAsgA0EQaiQAQQALDQAgAEHg9MAAIAEQGAsKACACIAAgARATC8ECAQN/IAAoAgAhACMAQYABayIEJAACfwJAAkAgASgCHCICQRBxRQRAIAJBIHENASAANQIAIAEQJAwDCyAAKAIAIQJBACEAA0AgACAEakH/AGogAkEPcSIDQTByIANB1wBqIANBCkkbOgAAIABBAWshACACQRBJIAJBBHYhAkUNAAsMAQsgACgCACECQQAhAANAIAAgBGpB/wBqIAJBD3EiA0EwciADQTdqIANBCkkbOgAAIABBAWshACACQRBJIAJBBHYhAkUNAAsgAEGAAWoiAkGBAU8EQCACQYABQaz1wAAQ6QEACyABQbz1wABBAiAAIARqQYABakEAIABrEBUMAQsgAEGAAWoiAkGBAU8EQCACQYABQaz1wAAQ6QEACyABQbz1wABBAiAAIARqQYABakEAIABrEBULIARBgAFqJAALkQUBB38CQAJ/AkAgAiIEIAAgAWtL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AIYIEAAIAAAAjggQAA4AAACcCBAABAAAAKAIEAALAAAAmAcQAAsAAAC0BxAADgAAAKsIEAANAAAAuAgQABAAAADICBAAEAAAANgIEAAKAAAA4ggQAA0AAADvCBAACQAAAPgIEAATAAAACwkQAAsAAAAWCRAACAAAAFByaW1hcnlBbHRlcm5hdGVBcHBsaWNhdGlvbkN1cnNvcmNvbHJvd3Zpc2libGVOb25lU29tZQAAJwAAAAQAAAAEAAAAJgAAACcAAAAEAAAABAAAAEMAAABEaXJ0eUxpbmVzAAAnAAAABAAAAAQAAABEAAAABgAAAAQAAAAFAAAAVwcQAF0HEABhBxAAY2Fubm90IGFjY2VzcyBhIFRocmVhZCBMb2NhbCBTdG9yYWdlIHZhbHVlIGR1cmluZyBvciBhZnRlciBkZXN0cnVjdGlvbgAARgAAAAAAAAABAAAARwAAAC9ydXN0Yy85YjAwOTU2ZTU2MDA5YmFiMmFhMTVkN2JmZjEwOTE2NTk5ZTNkNmQ2L2xpYnJhcnkvc3RkL3NyYy90aHJlYWQvbG9jYWwucnMAvAoQAE8AAAAEAQAAGgAAAAAAAAD//////////yALEABBuJbAAAvZFiBjYW4ndCBiZSByZXByZXNlbnRlZCBhcyBhIEphdmFTY3JpcHQgbnVtYmVyHAsQAAAAAAA4CxAALAAAAEgAAAAvaG9tZS9ydW5uZXIvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZS13YXNtLWJpbmRnZW4tMC42LjUvc3JjL2xpYi5ycwAAAHgLEABlAAAANQAAAA4AAABjbG9zdXJlIGludm9rZWQgcmVjdXJzaXZlbHkgb3IgYWZ0ZXIgYmVpbmcgZHJvcHBlZC9ydXN0Yy85YjAwOTU2ZTU2MDA5YmFiMmFhMTVkN2JmZjEwOTE2NTk5ZTNkNmQ2L2xpYnJhcnkvYWxsb2Mvc3JjL3ZlYy9tb2QucnMAACIMEABMAAAAYAgAACQAAAAiDBAATAAAABoGAAAVAAAAL2hvbWUvcnVubmVyLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYXZ0LTAuMTUuMC9zcmMvcGFyc2Vy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Ai8wMTIzAgICAgICNAICNTY3Ajg5Ojs8PT4/OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5QDk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTlBAgJCQwICREVGR0hJAko5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTlLAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICOTk5OUwCAgICAk1OT1ACAgJRAlJTAgICAgICAgICAgICAlRVAgJWAlcCAlhZWltcXV5fYGECYmMCZGVmZwJoAmlqa2wCAm1ub3ACcXICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0dQICAgICAgJ2dzk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5eDk5OTk5OTk5OXl6AgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ7OTl8OTl9AgICAgICAgICAgICAgICAgICAn4CAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ/AgICgIGCAgICAgICAgICAgICAgICg4QCAgICAgICAgIChYZ1AgKHAgICiAICAgICAgKJigICAgICAgICAgICAgKLjAKNjgKPkJGSk5SVlgKXAgKYmZqbAgICAgICAgICAjk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OZwdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHQICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAJ0CAgICnp8CBAIFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdAgIeAgICAgICAh8gISIjAiQlJicoKQIqAgICAqChoqOkpaYup6ipqqusrTMCAgICAgKuAgI1NjcCODk6Ozw9Pq85OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTlMAgICAgKwTk+xhYZ1AgKHAgICiAICAgICAgKJigICAgICAgICAgICAgKLjLKzjgKPkJGSk5SVlgKXAgKYmZqbAgICAgICAgICAlVVdVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQBBvLvAAAspVVVVVRUAUFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQEAQe+7wAALxAEQQRBVVVVVVVdVVVVVVVVVVVVRVVUAAEBU9d1VVVVVVVVVVRUAAAAAAFVVVVX8XVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVBQAUABQEUFVVVVVVVVUVUVVVVVVVVVUAAAAAAABAVVVVVVVVVVVV1VdVVVVVVVVVVVVVVQUAAFRVVVVVVVVVVVVVVVVVFQAAVVVRVVVVVVUFEAAAAQFQVVVVVVVVVVVVVQFVVVVVVf////9/VVVVUFUAAFVVVVVVVVVVVVUFAEHAvcAAC5gEQFVVVVVVVVVVVVVVVVVFVAEAVFEBAFVVBVVVVVVVVVVRVVVVVVVVVVVVVVVVVVVEAVRVUVUVVVUFVVVVVVVVRUFVVVVVVVVVVVVVVVVVVVRBFRRQUVVVVVVVVVVQUVVVQVVVVVVVVVVVVVVVVVVVVAEQVFFVVVVVBVVVVVVVBQBRVVVVVVVVVVVVVVVVVVUEAVRVUVUBVVUFVVVVVVVVVUVVVVVVVVVVVVVVVVVVVUVUVVVRVRVVVVVVVVVVVVVVVFRVVVVVVVVVVVVVVVVVBFQFBFBVQVVVBVVVVVVVVVVRVVVVVVVVVVVVVVVVVVUURAUEUFVBVVUFVVVVVVVVVVBVVVVVVVVVVVVVVVVVFUQBVFVBVRVVVQVVVVVVVVVVUVVVVVVVVVVVVVVVVVVVVVVVRRUFRFUVVVVVVVVVVVVVVVVVVVVVVVVVVVVRAEBVVRUAQFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVEAAFRVVQBAVVVVVVVVVVVVVVVVVVVVVVVVUFVVVVVVVRFRVVVVVVVVVVVVVVVVVQEAAEAABFUBAAABAAAAAAAAAABUVUVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVAQQAQUFVVVVVVVVQBVRVVVUBVFVVRUFVUVVVVVFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqoAQYDCwAALkANVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQFVVVVVVVVVVVVVVVUFVFVVVVVVVQVVVVVVVVVVBVVVVVVVVVUFVVVVf//99//911931tXXVRAAUFVFAQAAVVdRVVVVVVVVVVVVVRUAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVBVVVVVVVVVVVRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVAFVRVRVUBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVxUUVVVVVVVVVVVVVVVVVVVFAEBEAQBUFQAAFFVVVVVVVVVVVVVVVQAAAAAAAABAVVVVVVVVVVVVVVVVAFVVVVVVVVVVVVVVVQAAUAVVVVVVVVVVVVUVAABVVVVQVVVVVVVVVQVQEFBVVVVVVVVVVVVVVVVVRVARUFVVVVVVVVVVVVVVVVVVAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVAAAAABABUUVVUUFVVVVVVVVVVVVVVVVVVVVVVAEGgxcAAC5MIVVUVAFVVVVVVVQVAVVVVVVVVVVVVVVVVAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQAAAAAAAAAAVFVVVVVVVVVVVfVVVVVpVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX9V9dVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVfVVVVVVVX1VVVVVVVVVVVVVVVf///1VVVVVVVVVVVVXVVVVVVdVVVVVdVfVVVVVVfVVfVXVVV1VVVVV1VfVddV1VXfVVVVVVVVVVV1VVVVVVVVVVd9XfVVVVVVVVVVVVVVVVVVVV/VVVVVVVVVdVVdVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV1VdVVVVVVVVVVVVVVVVXXVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUVUFVVVVVVVVVVVVVVVVVVVf3///////////////9fVdVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVAAAAAAAAAACqqqqqqqqaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqlVVVaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqWlVVVVVVVaqqqqqqqqqqqqqqqqqqCgCqqqpqqaqqqqqqqqqqqqqqqqqqqqqqqqqqaoGqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqVamqqqqqqqqqqqqqqaqqqqqqqqqqqqqqqqiqqqqqqqqqqqpqqqqqqqqqqqqqqqqqqqqqqqqqqqqqVVWVqqqqqqqqqqqqqqpqqqqqqqqqqqqqqlVVqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqlVVVVVVVVVVVVVVVVVVVVWqqqpWqqqqqqqqqqqqqqqqqmpVVVVVVVVVVVVVVVVVX1VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVRVAAABQVVVVVVVVVQVVVVVVVVVVVVVVVVVVVVVVVVVVVVBVVVVFRRVVVVVVVVVBVVRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUFVVVVVVVQAAAABQVUUVVVVVVVVVVVVVBQBQVVVVVVUVAABQVVVVqqqqqqqqqlZAVVVVVVVVVVVVVVUVBVBQVVVVVVVVVVVVUVVVVVVVVVVVVVVVVVVVVVUBQEFBVVUVVVVUVVVVVVVVVVVVVVVUVVVVVVVVVVVVVVVVBBRUBVFVVVVVVVVVVVVVUFVFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUVRRVVVVVaqqqqqqqqqqqlVVVQAAAAAAQBUAQb/NwAAL4QxVVVVVVVVVVUVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUAAADwqqpaVQAAAACqqqqqqqqqqmqqqqqqaqpVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUVqaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqVlVVVVVVVVVVVVVVVVVVBVRVVVVVVVVVVVVVVVVVVVWqalVVAABUVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQVAVQFBVQBVVVVVVVVVVVVVQBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUFVVVVVVVXVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVRVUVVVVVVVVVVVVVVVVVVVVVVVVVQFVVVVVVVVVVVVVVVVVVVVVVQUAAFRVVVVVVVVVVVVVVQVQVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUVVVVVVVVVVVVVVVVVUAAABAVVVVVVVVVVVVVRRUVRVQVVVVVVVVVVVVVVUVQEFVRVVVVVVVVVVVVVVVVVVVVUBVVVVVVVVVVRUAAQBUVVVVVVVVVVVVVVVVVVUVVVVVUFVVVVVVVVVVVVVVVQUAQAVVARRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVRVQBFVFUVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVFRUAQFVVVVVVUFVVVVVVVVVVVVVVVVUVRFRVVVVVFVVVVQUAVABUVVVVVVVVVVVVVVVVVVVVVQAABURVVVVVVUVVVVVVVVVVVVVVVVVVVVVVVVVVVRQARBEEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUVBVBVEFRVVVVVVVVQVVVVVVVVVVVVVVVVVVVVVVVVVVUVAEARVFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUVUQAQVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQEFEABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVRUAAEFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVRVFQQRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVAAVVVFVVVVVVVVUBAEBVVVVVVVVVVVUVAARAVRVVVQFAAVVVVVVVVVVVVVUAAAAAQFBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVAEAAEFVVVVVVVVVVVVVVVVVVVVVVVVVVBQAAAAAABQAEQVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQFARRAAAFVVVVVVVVVVVVVVVVVVVVVVVVARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVFVRVVUBVVVVVVVVVVVVVVVUFQFVEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQVAAAAUFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVAFRVVVVVVVVVVVVVVVVVVQBAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVRVVVVVVVVVVVVVVVVVVVVUVQFVVVVVVVVVVVVVVVVVVVVVVVVWqVFVVWlVVVaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqlVVqqqqqqqqqqqqqqqqqqqqqqqqqqqqWlVVVVVVVVVVVVWqqlZVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWqqappqqqqqqqqqqpqVVVVZVVVVVVVVVVqWVVVVapVVaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqVVVVVVVVVVVBAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVAEGr2sAAC3VQAAAAAABAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVEVAFAAAAAEABAFVVVVVVVVUFUFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQVUVVVVVVVVVVVVVVVVVVUAQa3bwAALAkAVAEG728AAC8UGVFVRVVVVVFVVVVUVAAEAAABVVVVVVVVVVVVVVVVVVVVVVVVVVQBAAAAAABQAEARAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUVVVVVVVVVVVVVVVVVVVVUAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUAQFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQBAVVVVVVVVVVVVVVVVVVVXVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVdVVVVVVVVVVVVVVVVVVVVV1/f9/VVVVVVVVVVVVVVVVVVVVVVVV9f///////25VVVWqqrqqqqqq6vq/v1WqqlZVX1VVVapaVVVVVVVV//////////9XVVX9/9////////////////////////f//////1VVVf////////////9/1f9VVVX/////V1f//////////////////////3/3/////////////////////////////////////////////////////////////9f///////////////////9fVVXVf////////1VVVVV1VVVVVVVVfVVVVVdVVVVVVVVVVVVVVVVVVVVVVVVVVdX///////////////////////////9VVVVVVVVVVVVVVVX//////////////////////19VV3/9Vf9VVdVXVf//V1VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf///1VXVVVVVVVV//////////////9////f/////////////////////////////////////////////////////////////1VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX///9X//9XVf//////////////3/9fVfX///9V//9XVf//V1WqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqWlVVVVVVVVVVWZZVYaqlWapVVVVVVZVVVVVVVVVVlVVVAEGO4sAACwEDAEGc4sAAC4oqVVVVVVWVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUVAJZqWlpqqgVAplmVZVVVVVVVVVVVAAAAAFVWVVWpVlVVVVVVVVVVVVZVVVVVVVVVVQAAAAAAAAAAVFVVVZVZWVVVZVVVaVVVVVVVVVVVVVVVlVaVaqqqqlWqqlpVVVVZVaqqqlVVVVVlVVVaVVVVVaVlVlVVVZVVVVVVVVWmlpqWWVllqZaqqmZVqlVaWVVaVmVVVVVqqqWlWlVVVaWqWlVVWVlVVVlVVVVVVZVVVVVVVVVVVVVVVVVVVVVVVVVVVWVV9VVVVWlVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqmqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqlWqqqqqqqqqqqpVVVWqqqqqpVpVVZqqWlWlpVVaWqWWpVpVVVWlWlWVVVVVfVVpWaVVX1VmVVVVVVVVVVVmVf///1VVVZqaappVVVXVVVVVVdVVVaVdVfVVVVVVvVWvqrqqq6qqmlW6qvquuq5VXfVVVVVVVVVVV1VVVVVZVVVVd9XfVVVVVVVVVaWqqlVVVVVVVdVXVVVVVVVVVVVVVVVVV61aVVVVVVVVVVVVqqqqqqqqqmqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqoAAADAqqpaVQAAAACqqqqqqqqqqmqqqqqqaqpVVVVVVVVVVVVVVVUFVFVVVVVVVVVVVVVVVVVVVapqVVUAAFRZqqpqVaqqqqqqqqpaqqqqqqqqqqqqqqqqqqpaVaqqqqqqqqq6/v+/qqqqqlZVVVVVVVVVVVVVVVVV9f///////0pzVmFsdWUoKQAAAMAzEAAIAAAAyDMQAAEAAABUcmllZCB0byBzaHJpbmsgdG8gYSBsYXJnZXIgY2FwYWNpdHncMxAAJAAAAC9ydXN0Yy85YjAwOTU2ZTU2MDA5YmFiMmFhMTVkN2JmZjEwOTE2NTk5ZTNkNmQ2L2xpYnJhcnkvYWxsb2Mvc3JjL3Jhd192ZWMucnMINBAATAAAAOcBAAAJAAAAbnVsbCBwb2ludGVyIHBhc3NlZCB0byBydXN0cmVjdXJzaXZlIHVzZSBvZiBhbiBvYmplY3QgZGV0ZWN0ZWQgd2hpY2ggd291bGQgbGVhZCB0byB1bnNhZmUgYWxpYXNpbmcgaW4gcnVzdAAAVHJpZWQgdG8gc2hyaW5rIHRvIGEgbGFyZ2VyIGNhcGFjaXR50DQQACQAAAAvcnVzdGMvOWIwMDk1NmU1NjAwOWJhYjJhYTE1ZDdiZmYxMDkxNjU5OWUzZDZkNi9saWJyYXJ5L2FsbG9jL3NyYy9yYXdfdmVjLnJz/DQQAEwAAADnAQAACQAAAGAAAAAMAAAABAAAAGEAAABiAAAAEQAAAGUAAAAMAAAABAAAAGYAAABnAAAAaAAAAC9ydXN0L2RlcHMvZGxtYWxsb2MtMC4yLjYvc3JjL2RsbWFsbG9jLnJzYXNzZXJ0aW9uIGZhaWxlZDogcHNpemUgPj0gc2l6ZSArIG1pbl9vdmVyaGVhZACINRAAKQAAAKgEAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogcHNpemUgPD0gc2l6ZSArIG1heF9vdmVyaGVhZAAAiDUQACkAAACuBAAADQAAAEFjY2Vzc0Vycm9ybWVtb3J5IGFsbG9jYXRpb24gb2YgIGJ5dGVzIGZhaWxlZAAAADs2EAAVAAAAUDYQAA0AAABsaWJyYXJ5L3N0ZC9zcmMvYWxsb2MucnNwNhAAGAAAAGIBAAAJAAAAbGlicmFyeS9zdGQvc3JjL3Bhbmlja2luZy5yc5g2EAAcAAAAhAIAAB4AAABlAAAADAAAAAQAAABpAAAAagAAAAgAAAAEAAAAawAAAGoAAAAIAAAABAAAAGwAAABtAAAAbgAAABAAAAAEAAAAbwAAAHAAAABxAAAAAAAAAAEAAAByAAAASGFzaCB0YWJsZSBjYXBhY2l0eSBvdmVyZmxvdxw3EAAcAAAAL3J1c3QvZGVwcy9oYXNoYnJvd24tMC4xNC4zL3NyYy9yYXcvbW9kLnJzAABANxAAKgAAAFYAAAAoAAAARXJyb3IAAABzAAAADAAAAAQAAAB0AAAAdQAAAHYAAABjYXBhY2l0eSBvdmVyZmxvdwAAAJw3EAARAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc7g3EAAcAAAAGQAAAAUAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IAdwAAAAAAAAABAAAAeAAAAGxpYnJhcnkvYWxsb2Mvc3JjL2ZtdC5ycyg4EAAY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");var Ln=async()=>(await Dg(Un),Jn);class hg{constructor(){let g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;this.speed=g,this.startTime=performance.now()}getTime(){return this.speed*(performance.now()-this.startTime)/1e3}setTime(g){this.startTime=performance.now()-g/this.speed*1e3}}class UA{constructor(){}getTime(g){}setTime(g){}}class VA{constructor(g,n){this.input=typeof g.next=="function"?g:g[Symbol.iterator](),this.xfs=n??[]}map(g){return this.transform(Kn(g))}flatMap(g){return this.transform(vn(g))}filter(g){return this.transform(Hn(g))}take(g){return this.transform(xn(g))}drop(g){return this.transform(Tn(g))}transform(g){return new VA(this.input,this.xfs.concat([g]))}multiplex(g,n){return new VA(new jn(this[Symbol.iterator](),g[Symbol.iterator](),n))}toArray(){return Array.from(this)}[Symbol.iterator](){let g=0,n=[],I=!1;const B=On(this.xfs,e=>n.push(e));return{next:()=>{for(g===n.length&&(n=[],g=0);n.length===0;){const e=this.input.next();if(e.done)break;B.step(e.value)}return n.length===0&&!I&&(B.flush(),I=!0),n.length>0?{done:!1,value:n[g++]}:{done:!0}}}}}function Kn(A){return g=>n=>{g(A(n))}}function vn(A){return g=>n=>{A(n).forEach(g)}}function Hn(A){return g=>n=>{A(n)&&g(n)}}function xn(A){let g=0;return n=>I=>{g<A&&n(I),g+=1}}function Tn(A){let g=0;return n=>I=>{g+=1,g>A&&n(I)}}function On(A,g){return A.reverse().reduce((n,I)=>{const B=jg(I(n.step));return{step:B.step,flush:()=>{B.flush(),n.flush()}}},jg(g))}function jg(A){return typeof A=="function"?{step:A,flush:()=>{}}:A}class jn{constructor(g,n,I){this.left=g,this.right=n,this.comparator=I}[Symbol.iterator](){let g,n;return{next:()=>{if(g===void 0&&this.left!==void 0){const I=this.left.next();I.done?this.left=void 0:g=I.value}if(n===void 0&&this.right!==void 0){const I=this.right.next();I.done?this.right=void 0:n=I.value}if(g===void 0&&n===void 0)return{done:!0};if(g===void 0){const I=n;return n=void 0,{done:!1,value:I}}else if(n===void 0){const I=g;return g=void 0,{done:!1,value:I}}else if(this.comparator(g,n)){const I=g;return g=void 0,{done:!1,value:I}}else{const I=n;return n=void 0,{done:!1,value:I}}}}}}async function Zg(A){let g,n;if(A instanceof Response){const I=await A.text(),B=Zn(I);B!==void 0?(g=B.header,n=B.events):g=JSON.parse(I)}else if(typeof A=="object"&&typeof A.version=="number")g=A;else if(Array.isArray(A))g=A[0],n=A.slice(1,A.length);else throw"invalid data";if(g.version===1)return Wn(g);if(g.version===2)return Xn(g,n);throw`asciicast v${g.version} format not supported`}function Zn(A){const g=A.split(`
`);let n;try{n=JSON.parse(g[0])}catch{return}const I=new VA(g).drop(1).filter(B=>B[0]==="[").map(JSON.parse).toArray();return{header:n,events:I}}function Wn(A){let g=0;const n=new VA(A.stdout).map(I=>(g+=I[0],[g,"o",I[1]]));return{cols:A.width,rows:A.height,events:n}}function Xn(A,g){return{cols:A.width,rows:A.height,theme:zn(A.theme),events:g,idleTimeLimit:A.idle_time_limit}}function zn(A){const g=/^#[0-9A-Fa-f]{6}$/,n=/^(#[0-9A-Fa-f]{6}:){7,}#[0-9A-Fa-f]{6}$/,I=A?.fg,B=A?.bg,e=A?.palette;if(g.test(I)&&g.test(B)&&n.test(e))return{foreground:I,background:B,palette:e.split(":")}}function Pn(A){const g=JSON.stringify({version:2,width:A.cols,height:A.rows}),n=A.events.map(JSON.stringify).join(`
`);return`${g}
${n}
`}function _n(A,g,n){let{feed:I,resize:B,onInput:e,onMarker:C,now:Q,setTimeout:t,setState:E,logger:i}=g,{idleTimeLimit:o,startAt:a,loop:r,posterTime:l,markers:w,pauseOnMarkers:f,cols:s,rows:d}=n,u,F,m,Y,K,M,b,y=0,X=0,L,v,z=0;async function oA(){const{parser:c,minFrameTime:h,inputOffset:D,dumpFilename:k,encoding:N="utf-8"}=A,P=AI(await c(await H(A),{encoding:N}),i,{idleTimeLimit:o,startAt:a,minFrameTime:h,inputOffset:D,markers_:w});if({cols:u,rows:F,events:m,duration:K,effectiveStartAt:M}=P,s=s??u,d=d??F,m.length===0)throw"recording is missing events";k!==void 0&&II(P,k);const cg=l!==void 0?Yg(l):void 0;return Y=m.filter(NA=>NA[1]==="m").map(NA=>[NA[0],NA[2].label]),{cols:u,rows:F,duration:K,theme:P.theme,poster:cg,markers:Y}}function H(c){let{url:h,data:D,fetchOpts:k={}}=c;if(typeof h=="string")return j(h,k);if(Array.isArray(h))return Promise.all(h.map(N=>j(N,k)));if(D!==void 0)return typeof D=="function"&&(D=D()),D instanceof Promise||(D=Promise.resolve(D)),D.then(N=>typeof N=="string"||N instanceof ArrayBuffer?new Response(N):N);throw"failed fetching recording file: url/data missing in src"}async function j(c,h){const D=await fetch(c,h);if(!D.ok)throw`failed fetching recording from ${c}: ${D.status} ${D.statusText}`;return D}function dA(c){let h=c*1e3-(Q()-L);return h<0&&(h=0),h}function aA(){const c=m[y];c?b=t(xA,dA(c[0])):MA()}function xA(){let c=m[y],h;do{if(X=c[0],y++,fA(c))return;c=m[y],h=Q()-L}while(c&&h>c[0]*1e3);aA()}function rg(){clearTimeout(b),b=null}function fA(c){const[h,D,k]=c;if(D==="o")I(k);else if(D==="i")e(k);else if(D==="r"){const[N,P]=k.split("x");B(N,P)}else if(D==="m"&&(C(k),f))return DA(),v=h*1e3,E("idle",{reason:"paused"}),!0;return!1}function MA(){rg(),z++,r===!0||typeof r=="number"&&z<r?(y=0,L=Q(),I("\x1Bc"),jA(),aA()):(v=K*1e3,E("ended"))}function Vg(){if(b)throw"already playing";if(m[y]===void 0)throw"already ended";return M!==null&&hA(M),TA(),!0}function DA(){return b&&(rg(),v=Q()-L),!0}function TA(){L=Q()-v,v=null,aA()}function hA(c){const h=!!b;DA();const D=(v??0)/1e3;if(typeof c=="string")c==="<<"?c=D-5:c===">>"?c=D+5:c==="<<<"?c=D-.1*K:c===">>>"?c=D+.1*K:c[c.length-1]==="%"&&(c=parseFloat(c.substring(0,c.length-1))/100*K);else if(typeof c=="object"){if(c.marker==="prev")c=OA(D)??0,h&&D-c<1&&(c=OA(c)??0);else if(c.marker==="next")c=sg(D)??K;else if(typeof c.marker=="number"){const P=Y[c.marker];if(P===void 0)throw`invalid marker index: ${c.marker}`;c=P[0]}}const k=Math.min(Math.max(c,0),K);k<X&&(I("\x1Bc"),jA(),y=0,X=0);let N=m[y];for(;N&&N[0]<=k;)N[1]==="o"&&fA(N),X=N[0],N=m[++y];return v=k*1e3,M=null,h&&TA(),!0}function OA(c){if(Y.length==0)return;let h=0,D=Y[h],k;for(;D&&D[0]<c;)k=D[0],D=Y[++h];return k}function sg(c){if(Y.length==0)return;let h=Y.length-1,D=Y[h],k;for(;D&&D[0]>c;)k=D[0],D=Y[--h];return k}function lg(c){c===void 0&&(c=1);let h,D;if(c>0){let k=y;h=m[k];for(let N=0;N<c;N++){for(;h!==void 0&&h[1]!=="o";)h=m[++k];h!==void 0&&h[1]==="o"&&(D=k)}}else{let k=Math.max(y-2,0);h=m[k];for(let N=c;N<0;N++){for(;h!==void 0&&h[1]!=="o";)h=m[--k];h!==void 0&&h[1]==="o"&&(D=k)}D!==void 0&&(I("\x1Bc"),jA(),y=0)}if(D!==void 0){for(;y<=D;)h=m[y++],h[1]==="o"&&fA(h);X=h[0],v=X*1e3,M=null,m[D+1]===void 0&&MA()}}function fg(){if(b)throw"still playing";if(m[y]!==void 0)throw"not ended";return hA(0),TA(),!0}function Yg(c){return m.filter(h=>h[0]<c&&h[1]==="o").map(h=>h[2])}function Ug(){return b?(Q()-L)/1e3:(v??0)/1e3}function jA(){B(s,d)}return{init:oA,play:Vg,pause:DA,seek:hA,step:lg,restart:fg,stop:DA,getCurrentTime:Ug}}function $n(A){let g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:.016666666666666666,n;return I=>{let B=0,e=0;return{step:C=>{if(B++,n===void 0){n=C;return}C[1]==="o"&&n[1]==="o"&&C[0]-n[0]<g?n[2]+=C[2]:(I(n),n=C,e++)},flush:()=>{n!==void 0&&(I(n),e++),A.debug(`batched ${B} frames to ${e} frames`)}}}}function AI(A,g,n){let{startAt:I=0,idleTimeLimit:B,minFrameTime:e,inputOffset:C,markers_:Q}=n,{events:t}=A;t instanceof VA||(t=new VA(t)),B=B??A.idleTimeLimit??1/0;const E={offset:0};t=t.transform($n(g,e)).map(nI(B,I,E)).map(Wg()),Q!==void 0&&(Q=new VA(Q).map(gI),t=t.filter(a=>a[1]!=="m").multiplex(Q,(a,r)=>a[0]<r[0]).map(Wg())),t=t.toArray(),C!==void 0&&(t=t.map(a=>a[1]==="i"?[a[0]+C,a[1],a[2]]:a),t.sort((a,r)=>a[0]-r[0]));const i=t[t.length-1][0],o=I-E.offset;return{...A,events:t,duration:i,effectiveStartAt:o}}function gI(A){return typeof A=="number"?[A,"m",""]:[A[0],"m",A[1]]}function nI(A,g,n){let I=0,B=0;return function(e){const Q=e[0]-I-A;return I=e[0],Q>0&&(B+=Q,e[0]<g&&(n.offset+=Q)),[e[0]-B,e[1],e[2]]}}function Wg(){let A=0;return function(g){return g[1]==="m"?[g[0],g[1],{index:A++,time:g[0],label:g[2]}]:g}}function II(A,g){const n=document.createElement("a"),I=A.events.map(e=>e[1]==="m"?[e[0],e[1],e[2].label]:e),B=Pn({...A,events:I});n.href=URL.createObjectURL(new Blob([B],{type:"text/plain"})),n.download=g,n.click()}function BI(A,g,n){let{hourColor:I=3,minuteColor:B=4,separatorColor:e=9}=A,{feed:C}=g,{cols:Q=5,rows:t=1}=n;const E=Math.floor(t/2),i=Math.floor(Q/2)-2,o=`\x1B[?25l\x1B[1m\x1B[${E}B`;let a;const r=()=>{const w=new Date,f=w.getHours(),s=w.getMinutes(),d=[];d.push("\r");for(let u=0;u<i;u++)d.push(" ");return d.push(`\x1B[3${I}m`),f<10&&d.push("0"),d.push(`${f}`),d.push(`\x1B[3${e};5m:\x1B[25m`),d.push(`\x1B[3${B}m`),s<10&&d.push("0"),d.push(`${s}`),d},l=()=>{r().forEach(C)};return{init:()=>{const f=[o].concat(r());return{cols:Q,rows:t,duration:1440,poster:f}},play:()=>(C(o),l(),a=setInterval(l,1e3),!0),stop:()=>{clearInterval(a)},getCurrentTime:()=>{const w=new Date;return w.getHours()*60+w.getMinutes()}}}function eI(A,g){let{feed:n,setTimeout:I}=g;const B=32,e=126-B;let C;const Q=()=>{const E=Math.pow(5,Math.random()*4);C=I(t,E)},t=()=>{Q();const E=String.fromCharCode(B+Math.floor(Math.random()*e));n(E)};return()=>(Q(),()=>clearInterval(C))}function QI(A,g){let{url:n,iterations:I=10}=A,{feed:B,setState:e,now:C}=g,Q,t=0;return{async init(){const E=await Zg(await fetch(n)),{cols:i,rows:o,events:a}=E;Q=Array.from(a).filter(l=>{let[w,f,s]=l;return f==="o"}).map(l=>{let[w,f,s]=l;return[w,s]});const r=Q[Q.length-1][0];for(const[l,w]of Q)t+=new Blob([w]).size;return{cols:i,rows:o,duration:r}},play(){const E=C();for(let l=0;l<I;l++){for(const[w,f]of Q)B(f);B("\x1Bc")}const o=(C()-E)/1e3,a=t*I/o,r=t/(1024*1024)*I/o;return console.info("benchmark: result",{byteCount:t,iterations:I,duration:o,throughput:a,throughputMbs:r}),setTimeout(()=>{e("stopped",{reason:"ended"})},0),!0}}}class CI{constructor(){this.items=[],this.onPush=void 0}push(g){this.items.push(g),this.onPush!==void 0&&(this.onPush(this.popAll()),this.onPush=void 0)}popAll(){if(this.items.length>0){const g=this.items;return this.items=[],g}else{const g=this;return new Promise(n=>{g.onPush=n})}}}function Xg(A,g,n,I,B,e,C){const Q=EI(g,n);if(A===0)return C.debug("using no buffer"),tI(Q);{A=A??{};let t;return typeof A=="number"?(C.debug(`using fixed time buffer (${A} ms)`),t=E=>A):typeof A=="function"?(C.debug("using custom dynamic buffer"),t=A({logger:C})):(C.debug("using adaptive buffer",A),t=aI({logger:C},A)),iI(t,Q,I,C,B??0,e)}}function tI(A){return{pushEvent(g){A(g[1],g[2])},pushText(g){A("o",g)},stop(){}}}function EI(A,g){return function(n,I){n==="o"?A(I):n==="r"&&g(I.cols,I.rows)}}function iI(A,g,n,I,B){let e=arguments.length>5&&arguments[5]!==void 0?arguments[5]:.016666666666666666,C=performance.now()-B*1e3,Q=A(0);const t=new CI;e*=1e3;let E=-e,i=!1;function o(){return performance.now()-C}return setTimeout(async()=>{for(;!i;){const a=await t.popAll();if(i)return;for(const r of a){const l=r[0]*1e3+Q;if(l-E<e){g(r[1],r[2]);continue}const w=l-o();if(w>0&&(await oI(w),i))return;n(r[0]),g(r[1],r[2]),E=l}}},0),{pushEvent(a){let r=o()-a[0]*1e3;r<0&&(I.debug(`correcting epoch by ${r} ms`),C+=r,r=0),Q=A(r),t.push(a)},pushText(a){t.push([o()/1e3,"o",a])},stop(){i=!0,t.push(void 0)}}}function oI(A){return new Promise(g=>{setTimeout(g,A)})}function aI(A,g){let{logger:n}=A,{minTime:I=25,maxLevel:B=100,interval:e=50,windowSize:C=20,smoothingFactor:Q=.2,minImprovementDuration:t=1e3}=g,E=0,i=w(E),o=[],a=0,r=0,l=null;function w(f){return f===0?I:e*f}return f=>{if(o.push(f),o.length<C)return i;o=o.slice(-C);const s=rI(o),d=VI(o),u=d-s;a=d*Q+a*(1-Q),r=u*Q+r*(1-Q);const F=a+r;if(f>i&&n.debug("buffer underrun",{latency:f,maxJitter:a,jitterRange:r,bufferTime:i}),E<B&&F>i)i=w(E+=1),n.debug("jitter increased, raising bufferTime",{latency:f,maxJitter:a,jitterRange:r,bufferTime:i});else if(E>1&&F<w(E-2)||E==1&&F<w(E-1))return l===null?l=performance.now():performance.now()-l>t&&(l=performance.now(),i=w(E-=1),n.debug("jitter decreased, lowering bufferTime",{latency:f,maxJitter:a,jitterRange:r,bufferTime:i})),i;return l=null,i}}function rI(A){return A.reduce((g,n)=>n<g?n:g)}function VI(A){return A.reduce((g,n)=>n>g?n:g)}const LA=1e6;function sI(A){const g=new TextDecoder,n=new TextDecoder;let I=e,B;function e(t){if(new TextDecoder().decode(t)==="ALiS")I=C;else throw"not an ALiS v1 live stream"}function C(t){const E=new Pg(new DataView(t)),i=E.getUint8();if(i!==1)throw`expected init (0x01) frame, got ${i}`;let o=E.decodeVarUint();B=o,o=o/LA;const a=E.decodeVarUint(),r=E.decodeVarUint(),l=E.getUint8();let w;if(l===8)w=zg(new Uint8Array(t,E.offset,30)),E.forward(30);else if(l===16)w=zg(new Uint8Array(t,E.offset,54)),E.forward(54);else if(l!==0){A.warn(`alis: unsupported theme format (${l})`),socket.close();return}const f=E.decodeVarUint();let s;return f>0&&(s=g.decode(new Uint8Array(t,E.offset,f))),I=Q,{time:o,term:{size:{cols:a,rows:r},theme:w,init:s}}}function Q(t){const E=new Pg(new DataView(t)),i=E.getUint8();if(i===111){const o=E.decodeVarUint();B+=o;const a=E.decodeVarUint(),r=g.decode(new Uint8Array(t,E.offset,a));return[B/LA,"o",r]}else if(i===105){const o=E.decodeVarUint();B+=o;const a=E.decodeVarUint(),r=n.decode(new Uint8Array(t,E.offset,a));return[B/LA,"i",r]}else if(i===114){const o=E.decodeVarUint();B+=o;const a=E.decodeVarUint(),r=E.decodeVarUint();return[B/LA,"r",{cols:a,rows:r}]}else if(i===109){const o=E.decodeVarUint();B+=o;const a=E.decodeVarUint(),l=new TextDecoder().decode(new Uint8Array(t,E.offset,a));return[B/LA,"m",l]}else{if(i===4)return I=C,!1;A.debug(`alis: unknown frame type: ${i}`)}}return function(t){return I(t)}}function zg(A){const g=A.length/3,n=pg(A[0],A[1],A[2]),I=pg(A[3],A[4],A[5]),B=[];for(let e=2;e<g;e++)B.push(pg(A[e*3],A[e*3+1],A[e*3+2]));return{foreground:n,background:I,palette:B}}function pg(A,g,n){return`#${yg(A)}${yg(g)}${yg(n)}`}function yg(A){return A.toString(16).padStart(2,"0")}class Pg{constructor(g){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;this.inner=g,this.offset=n}forward(g){this.offset+=g}getUint8(){const g=this.inner.getUint8(this.offset);return this.offset+=1,g}decodeVarUint(){let g=0,n=0,I=this.getUint8();for(;I>127;)I&=127,g+=I<<n,n+=7,I=this.getUint8();return g+(I<<n)}}function lI(){let A=g;function g(I){const B=JSON.parse(I);if(B.version!==2)throw"not an asciicast v2 stream";return A=n,{time:0,term:{size:{cols:B.width,rows:B.height}}}}function n(I){const B=JSON.parse(I);if(B[1]==="r"){const[e,C]=B[2].split("x");return[B[0],"r",{cols:e,rows:C}]}else return B}return function(I){return A(I)}}function fI(){const A=new TextDecoder;let g=n;function n(B){const e=A.decode(B,{stream:!0}),[C,Q]=cI(e)??wI(e)??[80,24];return g=I,{time:0,term:{size:{cols:C,rows:Q},init:e}}}function I(B){return A.decode(B,{stream:!0})}return function(B){return g(B)}}function cI(A){const g=A.match(/\x1b\[8;(\d+);(\d+)t/);if(g!==null)return[parseInt(g[2],10),parseInt(g[1],10)]}function wI(A){const g=A.match(/\[.*COLUMNS="(\d{1,3})" LINES="(\d{1,3})".*\]/);if(g!==null)return[parseInt(g[1],10),parseInt(g[2],10)]}function dI(A){return Math.min(500*Math.pow(2,A),5e3)}function DI(A,g){let{url:n,bufferTime:I,reconnectDelay:B=dI,minFrameTime:e}=A,{feed:C,reset:Q,resize:t,setState:E,logger:i}=g;i=new Kg(i,"websocket: ");let o,a,r=new UA,l=0,w,f=!1,s=!1,d;function u(){o=new WebSocket(n,["v1.alis","v2.asciicast","raw"]),o.binaryType="arraybuffer",o.onopen=()=>{const M=o.protocol||"raw";i.info("opened"),i.info(`activating ${M} protocol handler`),M==="v1.alis"?o.onmessage=F(sI(i)):M==="v2.asciicast"?o.onmessage=F(lI()):M==="raw"&&(o.onmessage=F(fI())),w=setTimeout(()=>{l=0},1e3)},o.onclose=M=>{if(clearTimeout(d),K(),f||M.code===1e3||M.code===1005)i.info("closed"),E("ended",{message:"Stream ended"});else if(M.code===1002)i.debug(`close reason: ${M.reason}`),E("ended",{message:"Err: Player not compatible with the server"});else{clearTimeout(w);const b=B(l++);i.info(`unclean close, reconnecting in ${b}...`),E("loading"),setTimeout(u,b)}},s=!1}function F(M){return d=setTimeout(Y,5e3),function(b){const y=M(b.data);if(a){if(Array.isArray(y))a.pushEvent(y);else if(typeof y=="string")a.pushText(y);else if(y===!1)Y();else if(y!==void 0)throw`unexpected value from protocol handler: ${y}`}else if(typeof y=="object"&&!Array.isArray(y)){const{time:X,term:L}=y,{size:v,init:z,theme:oA}=L,{cols:H,rows:j}=v;m(H,j,X,z,oA),clearTimeout(d)}else if(y===void 0)clearTimeout(d),d=setTimeout(Y,1e3);else throw clearTimeout(d),`unexpected value from protocol handler: ${y}`}}function m(M,b,y,X,L){i.info(`stream init (${M}x${b} @${y})`),E("playing"),K(),a=Xg(I,C,t,v=>r.setTime(v),y,e,i),Q(M,b,X,L),r=new hg,s=!0,typeof y=="number"&&r.setTime(y)}function Y(){K(),s?(i.info("stream ended"),E("offline",{message:"Stream ended"})):(i.info("stream offline"),E("offline",{message:"Stream offline"})),r=new UA}function K(){a&&a.stop(),a=null}return{play:()=>{u()},stop:()=>{f=!0,K(),o!==void 0&&o.close()},getCurrentTime:()=>r.getTime()}}function hI(A,g){let{url:n,bufferTime:I,minFrameTime:B}=A,{feed:e,reset:C,setState:Q,logger:t}=g;t=new Kg(t,"eventsource: ");let E,i,o=new UA;function a(r){i!==void 0&&i.stop(),i=Xg(I,e,l=>o.setTime(l),r,B,t)}return{play:()=>{E=new EventSource(n),E.addEventListener("open",()=>{t.info("opened"),a()}),E.addEventListener("error",r=>{t.info("errored"),t.debug({e:r}),Q("loading")}),E.addEventListener("message",r=>{const l=JSON.parse(r.data);if(Array.isArray(l))i.pushEvent(l);else if(l.cols!==void 0||l.width!==void 0){const w=l.cols??l.width,f=l.rows??l.height;t.debug(`vt reset (${w}x${f})`),Q("playing"),a(l.time),C(w,f,l.init??void 0),o=new hg,typeof l.time=="number"&&o.setTime(l.time)}else l.state==="offline"&&(t.info("stream offline"),Q("offline",{message:"Stream offline"}),o=new UA)}),E.addEventListener("done",()=>{t.info("closed"),E.close(),Q("ended",{message:"Stream ended"})})},stop:()=>{i!==void 0&&i.stop(),E!==void 0&&E.close()},getCurrentTime:()=>o.getTime()}}async function pI(A,g){let{encoding:n}=g;const I=new TextDecoder(n);let B,e,C=(await A[0].text()).split(`
`).filter(f=>f.length>0).map(f=>f.split(" "));C[0].length<3&&(C=C.map(f=>["O",f[0],f[1]]));const Q=await A[1].arrayBuffer(),t=new Uint8Array(Q),E=t.findIndex(f=>f==10)+1,o=I.decode(t.subarray(0,E)).match(/COLUMNS="(\d+)" LINES="(\d+)"/);o!==null&&(B=parseInt(o[1],10),e=parseInt(o[2],10));const a={array:t,cursor:E};let r=a;if(A[2]!==void 0){const f=await A[2].arrayBuffer();r={array:new Uint8Array(f),cursor:E}}const l=[];let w=0;for(const f of C)if(w+=parseFloat(f[1]),f[0]==="O"){const s=parseInt(f[2],10),d=a.array.subarray(a.cursor,a.cursor+s),u=I.decode(d);l.push([w,"o",u]),a.cursor+=s}else if(f[0]==="I"){const s=parseInt(f[2],10),d=r.array.subarray(r.cursor,r.cursor+s),u=I.decode(d);l.push([w,"i",u]),r.cursor+=s}else if(f[0]==="S"&&f[2]==="SIGWINCH"){const s=parseInt(f[4].slice(5),10),d=parseInt(f[3].slice(5),10);l.push([w,"r",`${s}x${d}`])}else f[0]==="H"&&f[2]==="COLUMNS"?B=parseInt(f[3],10):f[0]==="H"&&f[2]==="LINES"&&(e=parseInt(f[3],10));return B=B??80,e=e??24,{cols:B,rows:e,events:l}}async function yI(A,g){let{encoding:n}=g;const I=new TextDecoder(n),B=await A.arrayBuffer(),e=new Uint8Array(B),C=mg(e),Q=C.time,E=I.decode(C.data).match(/\x1b\[8;(\d+);(\d+)t/),i=[];let o=80,a=24;E!==null&&(o=parseInt(E[2],10),a=parseInt(E[1],10));let r=0,l=mg(e);for(;l!==void 0;){const w=l.time-Q,f=I.decode(l.data);i.push([w,"o",f]),r+=l.len,l=mg(e.subarray(r))}return{cols:o,rows:a,events:i}}function mg(A){if(A.length<13)return;const g=mI(A.subarray(0,8)),n=ug(A.subarray(8,12)),I=A.subarray(12,12+n);return{time:g,data:I,len:n+12}}function ug(A){return A[0]+A[1]*256+A[2]*256*256+A[3]*256*256*256}function mI(A){const g=ug(A.subarray(0,4)),n=ug(A.subarray(4,8));return g+n/1e6}const uI=Ln();class cA{constructor(g){this.core=g,this.driver=g.driver}onEnter(g){}init(){}play(){}pause(){}togglePlay(){}seek(g){return!1}step(g){}stop(){this.driver.stop()}}class kI extends cA{async init(){try{return await this.core._initializeDriver(),this.core._setState("idle")}catch(g){throw this.core._setState("errored"),g}}async play(){this.core._dispatchEvent("play"),await(await this.init()).doPlay()}async togglePlay(){await this.play()}async seek(g){return await(await this.init()).seek(g)}async step(g){await(await this.init()).step(g)}stop(){}}class bI extends cA{onEnter(g){let{reason:n,message:I}=g;this.core._dispatchEvent("idle",{message:I}),n==="paused"&&this.core._dispatchEvent("pause")}async play(){this.core._dispatchEvent("play"),await this.doPlay()}async doPlay(){const g=await this.driver.play();g===!0?this.core._setState("playing"):typeof g=="function"&&(this.core._setState("playing"),this.driver.stop=g)}async togglePlay(){await this.play()}seek(g){return this.driver.seek(g)}step(g){this.driver.step(g)}}class GI extends cA{onEnter(){this.core._dispatchEvent("playing")}pause(){this.driver.pause()===!0&&this.core._setState("idle",{reason:"paused"})}togglePlay(){this.pause()}seek(g){return this.driver.seek(g)}}class FI extends cA{onEnter(){this.core._dispatchEvent("loading")}}class qI extends cA{onEnter(g){let{message:n}=g;this.core._dispatchEvent("offline",{message:n})}}class MI extends cA{onEnter(g){let{message:n}=g;this.core._dispatchEvent("ended",{message:n})}async play(){this.core._dispatchEvent("play"),await this.driver.restart()&&this.core._setState("playing")}async togglePlay(){await this.play()}seek(g){return this.driver.seek(g)===!0?(this.core._setState("idle"),!0):!1}}class NI extends cA{onEnter(){this.core._dispatchEvent("errored")}}class RI{constructor(g,n){this.src=g,this.logger=n.logger,this.state=new kI(this),this.stateName="uninitialized",this.driver=null,this.changedLines=new Set,this.cursor=void 0,this.duration=void 0,this.cols=n.cols,this.rows=n.rows,this.speed=n.speed??1,this.loop=n.loop,this.idleTimeLimit=n.idleTimeLimit,this.preload=n.preload,this.startAt=Lg(n.startAt),this.poster=this._parsePoster(n.poster),this.markers=this._normalizeMarkers(n.markers),this.pauseOnMarkers=n.pauseOnMarkers,this.commandQueue=Promise.resolve(),this.eventHandlers=new Map([["ended",[]],["errored",[]],["idle",[]],["init",[]],["input",[]],["loading",[]],["marker",[]],["offline",[]],["pause",[]],["play",[]],["playing",[]],["reset",[]],["resize",[]],["seeked",[]],["terminalUpdate",[]]])}async init(){this.wasm=await uI;const g=this._feed.bind(this),n=o=>{this._dispatchEvent("input",{data:o})},I=o=>{let{index:a,time:r,label:l}=o;this._dispatchEvent("marker",{index:a,time:r,label:l})},B=this._now.bind(this),e=this._resetVt.bind(this),C=this._resizeVt.bind(this),Q=this._setState.bind(this),t=this.poster.type==="npt"?this.poster.value:void 0;this.driver=JI(this.src)({feed:g,onInput:n,onMarker:I,reset:e,resize:C,now:B,setTimeout:(o,a)=>setTimeout(o,a/this.speed),setInterval:(o,a)=>setInterval(o,a/this.speed),setState:Q,logger:this.logger},{cols:this.cols,rows:this.rows,idleTimeLimit:this.idleTimeLimit,startAt:this.startAt,loop:this.loop,posterTime:t,markers:this.markers,pauseOnMarkers:this.pauseOnMarkers}),typeof this.driver=="function"&&(this.driver={play:this.driver}),(this.preload||t!==void 0)&&this._withState(o=>o.init());const E=this.poster.type==="text"?this._renderPoster(this.poster.value):void 0,i={isPausable:!!this.driver.pause,isSeekable:!!this.driver.seek,poster:E};if(this.driver.init===void 0&&(this.driver.init=()=>({})),this.driver.pause===void 0&&(this.driver.pause=()=>{}),this.driver.seek===void 0&&(this.driver.seek=o=>!1),this.driver.step===void 0&&(this.driver.step=o=>{}),this.driver.stop===void 0&&(this.driver.stop=()=>{}),this.driver.restart===void 0&&(this.driver.restart=()=>{}),this.driver.getCurrentTime===void 0){const o=this.driver.play;let a=new UA;this.driver.play=()=>(a=new hg(this.speed),o()),this.driver.getCurrentTime=()=>a.getTime()}return i}play(){return this._withState(g=>g.play())}pause(){return this._withState(g=>g.pause())}togglePlay(){return this._withState(g=>g.togglePlay())}seek(g){return this._withState(async n=>{await n.seek(g)&&this._dispatchEvent("seeked")})}step(g){return this._withState(n=>n.step(g))}stop(){return this._withState(g=>g.stop())}getChanges(){const g={};if(this.changedLines.size>0){const n=new Map,I=this.vt.rows;for(const B of this.changedLines)B<I&&n.set(B,{id:B,segments:this.vt.getLine(B)});this.changedLines.clear(),g.lines=n}return this.cursor===void 0&&this.vt&&(this.cursor=this.vt.getCursor()??!1,g.cursor=this.cursor),g}getCurrentTime(){return this.driver.getCurrentTime()}getRemainingTime(){if(typeof this.duration=="number")return this.duration-Math.min(this.getCurrentTime(),this.duration)}getProgress(){if(typeof this.duration=="number")return Math.min(this.getCurrentTime(),this.duration)/this.duration}getDuration(){return this.duration}addEventListener(g,n){this.eventHandlers.get(g).push(n)}_dispatchEvent(g){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};for(const I of this.eventHandlers.get(g))I(n)}_withState(g){return this._enqueueCommand(()=>g(this.state))}_enqueueCommand(g){return this.commandQueue=this.commandQueue.then(g),this.commandQueue}_setState(g){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.stateName===g)return this.state;if(this.stateName=g,g==="playing")this.state=new GI(this);else if(g==="idle")this.state=new bI(this);else if(g==="loading")this.state=new FI(this);else if(g==="ended")this.state=new MI(this);else if(g==="offline")this.state=new qI(this);else if(g==="errored")this.state=new NI(this);else throw`invalid state: ${g}`;return this.state.onEnter(n),this.state}_feed(g){this._doFeed(g),this._dispatchEvent("terminalUpdate")}_doFeed(g){this.vt.feed(g).forEach(I=>this.changedLines.add(I)),this.cursor=void 0}_now(){return performance.now()*this.speed}async _initializeDriver(){const g=await this.driver.init();this.cols=this.cols??g.cols??80,this.rows=this.rows??g.rows??24,this.duration=this.duration??g.duration,this.markers=this._normalizeMarkers(g.markers)??this.markers??[],this.cols===0&&(this.cols=80),this.rows===0&&(this.rows=24),this._initializeVt(this.cols,this.rows);const n=g.poster!==void 0?this._renderPoster(g.poster):void 0;this._dispatchEvent("init",{cols:this.cols,rows:this.rows,duration:this.duration,markers:this.markers,theme:g.theme,poster:n})}_resetVt(g,n){let I=arguments.length>2&&arguments[2]!==void 0?arguments[2]:void 0,B=arguments.length>3&&arguments[3]!==void 0?arguments[3]:void 0;this.cols=g,this.rows=n,this.cursor=void 0,this._initializeVt(g,n),I!==void 0&&I!==""&&this._doFeed(I),this._dispatchEvent("reset",{cols:g,rows:n,theme:B})}_resizeVt(g,n){if(g===this.vt.cols&&n===this.vt.rows)return;this.vt.resize(g,n).forEach(B=>this.changedLines.add(B)),this.cursor=void 0,this.vt.cols=g,this.vt.rows=n,this.logger.debug(`core: vt resize (${g}x${n})`),this._dispatchEvent("resize",{cols:g,rows:n})}_initializeVt(g,n){this.logger.debug(`core: vt init (${g}x${n})`),this.vt=this.wasm.create(g,n,!0,100),this.vt.cols=g,this.vt.rows=n,this.changedLines.clear();for(let I=0;I<n;I++)this.changedLines.add(I)}_parsePoster(g){return typeof g!="string"?{}:g.substring(0,16)=="data:text/plain,"?{type:"text",value:[g.substring(16)]}:g.substring(0,4)=="npt:"?{type:"npt",value:Lg(g.substring(4))}:{}}_renderPoster(g){const n=this.cols??80,I=this.rows??24;this.logger.debug(`core: poster init (${n}x${I})`);const B=this.wasm.create(n,I,!1,0);g.forEach(Q=>B.feed(Q));const e=B.getCursor()??!1,C=[];for(let Q=0;Q<I;Q++)C.push({id:Q,segments:B.getLine(Q)});return{cursor:e,lines:C}}_normalizeMarkers(g){if(Array.isArray(g))return g.map(n=>typeof n=="number"?[n,""]:n)}}const _g=new Map([["benchmark",QI],["clock",BI],["eventsource",hI],["random",eI],["recording",_n],["websocket",DI]]),$g=new Map([["asciicast",Zg],["typescript",pI],["ttyrec",yI]]);function JI(A){if(typeof A=="function")return A;if(typeof A=="string"&&(A.substring(0,5)=="ws://"||A.substring(0,6)=="wss://"?A={driver:"websocket",url:A}:A.substring(0,6)=="clock:"?A={driver:"clock"}:A.substring(0,7)=="random:"?A={driver:"random"}:A.substring(0,10)=="benchmark:"?A={driver:"benchmark",url:A.substring(10)}:A={driver:"recording",url:A}),A.driver===void 0&&(A.driver="recording"),A.driver=="recording"&&(A.parser===void 0&&(A.parser="asciicast"),typeof A.parser=="string"))if($g.has(A.parser))A.parser=$g.get(A.parser);else throw`unknown parser: ${A.parser}`;if(_g.has(A.driver)){const g=_g.get(A.driver);return(n,I)=>g(A,n,I)}else throw`unsupported driver: ${JSON.stringify(A)}`}const nA={};function SI(A){nA.context=A}const YI=(A,g)=>A===g,IA=Symbol("solid-proxy"),$A=Symbol("solid-track"),Ag={equals:YI};let An=en;const sA=1,gg=2,gn={owned:null,cleanups:null,context:null,owner:null};var x=null;let wA=null,S=null,T=null,tA=null,kg=0;function yA(A,g){const n=S,I=x,B=A.length===0,e=B?gn:{owned:null,cleanups:null,context:null,owner:g===void 0?I:g},C=B?A:()=>A(()=>EA(()=>eg(e)));x=e,S=null;try{return mA(C,!0)}finally{S=n,x=I}}function _(A,g){g=g?Object.assign({},Ag,g):Ag;const n={value:A,observers:null,observerSlots:null,comparator:g.equals||void 0},I=B=>(typeof B=="function"&&(B=B(n.value)),Bn(n,B));return[In.bind(n),I]}function AA(A,g,n){const I=bg(A,g,!1,sA);KA(I)}function UI(A,g,n){An=xI;const I=bg(A,g,!1,sA);I.user=!0,tA?tA.push(I):KA(I)}function J(A,g,n){n=n?Object.assign({},Ag,n):Ag;const I=bg(A,g,!0,0);return I.observers=null,I.observerSlots=null,I.comparator=n.equals||void 0,KA(I),In.bind(I)}function gA(A){return mA(A,!1)}function EA(A){if(S===null)return A();const g=S;S=null;try{return A()}finally{S=g}}function LI(A){UI(()=>EA(A))}function ng(A){return x===null||(x.cleanups===null?x.cleanups=[A]:x.cleanups.push(A)),A}function nn(){return S}function KI(A){const g=J(A),n=J(()=>Gg(g()));return n.toArray=()=>{const I=n();return Array.isArray(I)?I:I!=null?[I]:[]},n}function In(){const A=wA;if(this.sources&&(this.state||A))if(this.state===sA||A)KA(this);else{const g=T;T=null,mA(()=>Bg(this),!1),T=g}if(S){const g=this.observers?this.observers.length:0;S.sources?(S.sources.push(this),S.sourceSlots.push(g)):(S.sources=[this],S.sourceSlots=[g]),this.observers?(this.observers.push(S),this.observerSlots.push(S.sources.length-1)):(this.observers=[S],this.observerSlots=[S.sources.length-1])}return this.value}function Bn(A,g,n){let I=A.value;return(!A.comparator||!A.comparator(I,g))&&(A.value=g,A.observers&&A.observers.length&&mA(()=>{for(let B=0;B<A.observers.length;B+=1){const e=A.observers[B],C=wA&&wA.running;C&&wA.disposed.has(e),(C&&!e.tState||!C&&!e.state)&&(e.pure?T.push(e):tA.push(e),e.observers&&Qn(e)),C||(e.state=sA)}if(T.length>1e6)throw T=[],new Error},!1)),g}function KA(A){if(!A.fn)return;eg(A);const g=x,n=S,I=kg;S=x=A,vI(A,A.value,I),S=n,x=g}function vI(A,g,n){let I;try{I=A.fn(g)}catch(B){A.pure&&(A.state=sA,A.owned&&A.owned.forEach(eg),A.owned=null),Cn(B)}(!A.updatedAt||A.updatedAt<=n)&&(A.updatedAt!=null&&"observers"in A?Bn(A,I):A.value=I,A.updatedAt=n)}function bg(A,g,n,I=sA,B){const e={fn:A,state:I,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:g,owner:x,context:null,pure:n};return x===null||x!==gn&&(x.owned?x.owned.push(e):x.owned=[e]),e}function Ig(A){const g=wA;if(A.state===0||g)return;if(A.state===gg||g)return Bg(A);if(A.suspense&&EA(A.suspense.inFallback))return A.suspense.effects.push(A);const n=[A];for(;(A=A.owner)&&(!A.updatedAt||A.updatedAt<kg);)(A.state||g)&&n.push(A);for(let I=n.length-1;I>=0;I--)if(A=n[I],A.state===sA||g)KA(A);else if(A.state===gg||g){const B=T;T=null,mA(()=>Bg(A,n[0]),!1),T=B}}function mA(A,g){if(T)return A();let n=!1;g||(T=[]),tA?n=!0:tA=[],kg++;try{const I=A();return HI(n),I}catch(I){n||(tA=null),T=null,Cn(I)}}function HI(A){if(T&&(en(T),T=null),A)return;const g=tA;tA=null,g.length&&mA(()=>An(g),!1)}function en(A){for(let g=0;g<A.length;g++)Ig(A[g])}function xI(A){let g,n=0;for(g=0;g<A.length;g++){const I=A[g];I.user?A[n++]=I:Ig(I)}for(nA.context&&SI(),g=0;g<n;g++)Ig(A[g])}function Bg(A,g){const n=wA;A.state=0;for(let I=0;I<A.sources.length;I+=1){const B=A.sources[I];B.sources&&(B.state===sA||n?B!==g&&Ig(B):(B.state===gg||n)&&Bg(B,g))}}function Qn(A){const g=wA;for(let n=0;n<A.observers.length;n+=1){const I=A.observers[n];(!I.state||g)&&(I.state=gg,I.pure?T.push(I):tA.push(I),I.observers&&Qn(I))}}function eg(A){let g;if(A.sources)for(;A.sources.length;){const n=A.sources.pop(),I=A.sourceSlots.pop(),B=n.observers;if(B&&B.length){const e=B.pop(),C=n.observerSlots.pop();I<B.length&&(e.sourceSlots[C]=I,B[I]=e,n.observerSlots[I]=C)}}if(A.owned){for(g=0;g<A.owned.length;g++)eg(A.owned[g]);A.owned=null}if(A.cleanups){for(g=0;g<A.cleanups.length;g++)A.cleanups[g]();A.cleanups=null}A.state=0,A.context=null}function TI(A){return A instanceof Error||typeof A=="string"?A:new Error("Unknown error")}function Cn(A){throw A=TI(A),A}function Gg(A){if(typeof A=="function"&&!A.length)return Gg(A());if(Array.isArray(A)){const g=[];for(let n=0;n<A.length;n++){const I=Gg(A[n]);Array.isArray(I)?g.push.apply(g,I):g.push(I)}return g}return A}const Fg=Symbol("fallback");function Qg(A){for(let g=0;g<A.length;g++)A[g]()}function OI(A,g,n={}){let I=[],B=[],e=[],C=0,Q=g.length>1?[]:null;return ng(()=>Qg(e)),()=>{let t=A()||[],E,i;return t[$A],EA(()=>{let a=t.length,r,l,w,f,s,d,u,F,m;if(a===0)C!==0&&(Qg(e),e=[],I=[],B=[],C=0,Q&&(Q=[])),n.fallback&&(I=[Fg],B[0]=yA(Y=>(e[0]=Y,n.fallback())),C=1);else if(C===0){for(B=new Array(a),i=0;i<a;i++)I[i]=t[i],B[i]=yA(o);C=a}else{for(w=new Array(a),f=new Array(a),Q&&(s=new Array(a)),d=0,u=Math.min(C,a);d<u&&I[d]===t[d];d++);for(u=C-1,F=a-1;u>=d&&F>=d&&I[u]===t[F];u--,F--)w[F]=B[u],f[F]=e[u],Q&&(s[F]=Q[u]);for(r=new Map,l=new Array(F+1),i=F;i>=d;i--)m=t[i],E=r.get(m),l[i]=E===void 0?-1:E,r.set(m,i);for(E=d;E<=u;E++)m=I[E],i=r.get(m),i!==void 0&&i!==-1?(w[i]=B[E],f[i]=e[E],Q&&(s[i]=Q[E]),i=l[i],r.set(m,i)):e[E]();for(i=d;i<a;i++)i in w?(B[i]=w[i],e[i]=f[i],Q&&(Q[i]=s[i],Q[i](i))):B[i]=yA(o);B=B.slice(0,C=a),I=t.slice(0)}return B});function o(a){if(e[i]=a,Q){const[r,l]=_(i);return Q[i]=l,g(t[i],r)}return g(t[i])}}}function jI(A,g,n={}){let I=[],B=[],e=[],C=[],Q=0,t;return ng(()=>Qg(e)),()=>{const E=A()||[];return E[$A],EA(()=>{if(E.length===0)return Q!==0&&(Qg(e),e=[],I=[],B=[],Q=0,C=[]),n.fallback&&(I=[Fg],B[0]=yA(o=>(e[0]=o,n.fallback())),Q=1),B;for(I[0]===Fg&&(e[0](),e=[],I=[],B=[],Q=0),t=0;t<E.length;t++)t<I.length&&I[t]!==E[t]?C[t](()=>E[t]):t>=I.length&&(B[t]=yA(i));for(;t<I.length;t++)e[t]();return Q=C.length=e.length=E.length,I=E.slice(0),B=B.slice(0,Q)});function i(o){e[t]=o;const[a,r]=_(E[t]);return C[t]=r,g(a,t)}}}function q(A,g){return EA(()=>A(g||{}))}function Cg(){return!0}const ZI={get(A,g,n){return g===IA?n:A.get(g)},has(A,g){return g===IA?!0:A.has(g)},set:Cg,deleteProperty:Cg,getOwnPropertyDescriptor(A,g){return{configurable:!0,enumerable:!0,get(){return A.get(g)},set:Cg,deleteProperty:Cg}},ownKeys(A){return A.keys()}};function qg(A){return(A=typeof A=="function"?A():A)?A:{}}function WI(...A){let g=!1;for(let I=0;I<A.length;I++){const B=A[I];g=g||!!B&&IA in B,A[I]=typeof B=="function"?(g=!0,J(B)):B}if(g)return new Proxy({get(I){for(let B=A.length-1;B>=0;B--){const e=qg(A[B])[I];if(e!==void 0)return e}},has(I){for(let B=A.length-1;B>=0;B--)if(I in qg(A[B]))return!0;return!1},keys(){const I=[];for(let B=0;B<A.length;B++)I.push(...Object.keys(qg(A[B])));return[...new Set(I)]}},ZI);const n={};for(let I=A.length-1;I>=0;I--)if(A[I]){const B=Object.getOwnPropertyDescriptors(A[I]);for(const e in B)e in n||Object.defineProperty(n,e,{enumerable:!0,get(){for(let C=A.length-1;C>=0;C--){const Q=(A[C]||{})[e];if(Q!==void 0)return Q}}})}return n}function tn(A){const g="fallback"in A&&{fallback:()=>A.fallback};return J(OI(()=>A.each,A.children,g||void 0))}function XI(A){const g="fallback"in A&&{fallback:()=>A.fallback};return J(jI(()=>A.each,A.children,g||void 0))}function tg(A){let g=!1;const n=A.keyed,I=J(()=>A.when,void 0,{equals:(B,e)=>g?B===e:!B==!e});return J(()=>{const B=I();if(B){const e=A.children,C=typeof e=="function"&&e.length>0;return g=n||C,C?EA(()=>e(B)):e}return A.fallback},void 0,void 0)}function En(A){let g=!1,n=!1;const I=(C,Q)=>C[0]===Q[0]&&(g?C[1]===Q[1]:!C[1]==!Q[1])&&C[2]===Q[2],B=KI(()=>A.children),e=J(()=>{let C=B();Array.isArray(C)||(C=[C]);for(let Q=0;Q<C.length;Q++){const t=C[Q].when;if(t)return n=!!C[Q].keyed,[Q,t,C[Q]]}return[-1]},void 0,{equals:I});return J(()=>{const[C,Q,t]=e();if(C<0)return A.fallback;const E=t.children,i=typeof E=="function"&&E.length>0;return g=n||i,i?EA(()=>E(Q)):E},void 0,void 0)}function uA(A){return A}function zI(A,g,n){let I=n.length,B=g.length,e=I,C=0,Q=0,t=g[B-1].nextSibling,E=null;for(;C<B||Q<e;){if(g[C]===n[Q]){C++,Q++;continue}for(;g[B-1]===n[e-1];)B--,e--;if(B===C){const i=e<I?Q?n[Q-1].nextSibling:n[e-Q]:t;for(;Q<e;)A.insertBefore(n[Q++],i)}else if(e===Q)for(;C<B;)(!E||!E.has(g[C]))&&g[C].remove(),C++;else if(g[C]===n[e-1]&&n[Q]===g[B-1]){const i=g[--B].nextSibling;A.insertBefore(n[Q++],g[C++].nextSibling),A.insertBefore(n[--e],i),g[B]=n[e]}else{if(!E){E=new Map;let o=Q;for(;o<e;)E.set(n[o],o++)}const i=E.get(g[C]);if(i!=null)if(Q<i&&i<e){let o=C,a=1,r;for(;++o<B&&o<e&&!((r=E.get(g[o]))==null||r!==i+a);)a++;if(a>i-Q){const l=g[C];for(;Q<i;)A.insertBefore(n[Q++],l)}else A.replaceChild(n[Q++],g[C++])}else C++;else g[C++].remove()}}}const on="_$DX_DELEGATE";function an(A,g,n,I={}){let B;return yA(e=>{B=e,g===document?A():O(g,A(),g.firstChild?null:void 0,n)},I.owner),()=>{B(),g.textContent=""}}function W(A,g,n){const I=document.createElement("template");return I.innerHTML=A,I.content.firstChild}function Eg(A,g=window.document){const n=g[on]||(g[on]=new Set);for(let I=0,B=A.length;I<B;I++){const e=A[I];n.has(e)||(n.add(e),g.addEventListener(e,_I))}}function PI(A,g,n){A.removeAttribute(g)}function rn(A,g){g==null?A.removeAttribute("class"):A.className=g}function kA(A,g,n,I){Array.isArray(n)?(A[`$$${g}`]=n[0],A[`$$${g}Data`]=n[1]):A[`$$${g}`]=n}function bA(A,g,n){if(!g)return n?PI(A,"style"):g;const I=A.style;if(typeof g=="string")return I.cssText=g;typeof n=="string"&&(I.cssText=n=void 0),n||(n={}),g||(g={});let B,e;for(e in n)g[e]==null&&I.removeProperty(e),delete n[e];for(e in g)B=g[e],B!==n[e]&&(I.setProperty(e,B),n[e]=B);return n}function ig(A,g,n){return EA(()=>A(g,n))}function O(A,g,n,I){if(n!==void 0&&!I&&(I=[]),typeof g!="function")return og(A,g,I,n);AA(B=>og(A,g(),B,n),I)}function _I(A){const g=`$$${A.type}`;let n=A.composedPath&&A.composedPath()[0]||A.target;for(A.target!==n&&Object.defineProperty(A,"target",{configurable:!0,value:n}),Object.defineProperty(A,"currentTarget",{configurable:!0,get(){return n||document}}),nA.registry&&!nA.done&&(nA.done=!0,document.querySelectorAll("[id^=pl-]").forEach(I=>{for(;I&&I.nodeType!==8&&I.nodeValue!=="pl-"+A;){let B=I.nextSibling;I.remove(),I=B}I&&I.remove()}));n;){const I=n[g];if(I&&!n.disabled){const B=n[`${g}Data`];if(B!==void 0?I.call(n,B,A):I.call(n,A),A.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function og(A,g,n,I,B){for(nA.context&&!n&&(n=[...A.childNodes]);typeof n=="function";)n=n();if(g===n)return n;const e=typeof g,C=I!==void 0;if(A=C&&n[0]&&n[0].parentNode||A,e==="string"||e==="number"){if(nA.context)return n;if(e==="number"&&(g=g.toString()),C){let Q=n[0];Q&&Q.nodeType===3?Q.data=g:Q=document.createTextNode(g),n=GA(A,n,I,Q)}else n!==""&&typeof n=="string"?n=A.firstChild.data=g:n=A.textContent=g}else if(g==null||e==="boolean"){if(nA.context)return n;n=GA(A,n,I)}else{if(e==="function")return AA(()=>{let Q=g();for(;typeof Q=="function";)Q=Q();n=og(A,Q,n,I)}),()=>n;if(Array.isArray(g)){const Q=[],t=n&&Array.isArray(n);if(Mg(Q,g,n,B))return AA(()=>n=og(A,Q,n,I,!0)),()=>n;if(nA.context){if(!Q.length)return n;for(let E=0;E<Q.length;E++)if(Q[E].parentNode)return n=Q}if(Q.length===0){if(n=GA(A,n,I),C)return n}else t?n.length===0?Vn(A,Q,I):zI(A,n,Q):(n&&GA(A),Vn(A,Q));n=Q}else if(g instanceof Node){if(nA.context&&g.parentNode)return n=C?[g]:g;if(Array.isArray(n)){if(C)return n=GA(A,n,I,g);GA(A,n,null,g)}else n==null||n===""||!A.firstChild?A.appendChild(g):A.replaceChild(g,A.firstChild);n=g}}return n}function Mg(A,g,n,I){let B=!1;for(let e=0,C=g.length;e<C;e++){let Q=g[e],t=n&&n[e];if(Q instanceof Node)A.push(Q);else if(!(Q==null||Q===!0||Q===!1))if(Array.isArray(Q))B=Mg(A,Q,t)||B;else if(typeof Q=="function")if(I){for(;typeof Q=="function";)Q=Q();B=Mg(A,Array.isArray(Q)?Q:[Q],Array.isArray(t)?t:[t])||B}else A.push(Q),B=!0;else{const E=String(Q);t&&t.nodeType===3&&t.data===E?A.push(t):A.push(document.createTextNode(E))}}return B}function Vn(A,g,n=null){for(let I=0,B=g.length;I<B;I++)A.insertBefore(g[I],n)}function GA(A,g,n,I){if(n===void 0)return A.textContent="";const B=I||document.createTextNode("");if(g.length){let e=!1;for(let C=g.length-1;C>=0;C--){const Q=g[C];if(B!==Q){const t=Q.parentNode===A;!e&&!C?t?A.replaceChild(B,Q):A.insertBefore(B,n):t&&Q.remove()}else e=!0}}else A.insertBefore(B,n);return[B]}const Ng=Symbol("store-raw"),vA=Symbol("store-node"),$I=Symbol("store-name");function sn(A,g){let n=A[IA];if(!n&&(Object.defineProperty(A,IA,{value:n=new Proxy(A,nB)}),!Array.isArray(A))){const I=Object.keys(A),B=Object.getOwnPropertyDescriptors(A);for(let e=0,C=I.length;e<C;e++){const Q=I[e];B[Q].get&&Object.defineProperty(A,Q,{enumerable:B[Q].enumerable,get:B[Q].get.bind(n)})}}return n}function lA(A){let g;return A!=null&&typeof A=="object"&&(A[IA]||!(g=Object.getPrototypeOf(A))||g===Object.prototype||Array.isArray(A))}function FA(A,g=new Set){let n,I,B,e;if(n=A!=null&&A[Ng])return n;if(!lA(A)||g.has(A))return A;if(Array.isArray(A)){Object.isFrozen(A)?A=A.slice(0):g.add(A);for(let C=0,Q=A.length;C<Q;C++)B=A[C],(I=FA(B,g))!==B&&(A[C]=I)}else{Object.isFrozen(A)?A=Object.assign({},A):g.add(A);const C=Object.keys(A),Q=Object.getOwnPropertyDescriptors(A);for(let t=0,E=C.length;t<E;t++)e=C[t],!Q[e].get&&(B=A[e],(I=FA(B,g))!==B&&(A[e]=I))}return A}function Rg(A){let g=A[vA];return g||Object.defineProperty(A,vA,{value:g={}}),g}function Jg(A,g,n){return A[g]||(A[g]=fn(n))}function AB(A,g){const n=Reflect.getOwnPropertyDescriptor(A,g);return!n||n.get||!n.configurable||g===IA||g===vA||g===$I||(delete n.value,delete n.writable,n.get=()=>A[IA][g]),n}function ln(A){if(nn()){const g=Rg(A);(g._||(g._=fn()))()}}function gB(A){return ln(A),Reflect.ownKeys(A)}function fn(A){const[g,n]=_(A,{equals:!1,internal:!0});return g.$=n,g}const nB={get(A,g,n){if(g===Ng)return A;if(g===IA)return n;if(g===$A)return ln(A),n;const I=Rg(A),B=I.hasOwnProperty(g);let e=B?I[g]():A[g];if(g===vA||g==="__proto__")return e;if(!B){const C=Object.getOwnPropertyDescriptor(A,g);nn()&&(typeof e!="function"||A.hasOwnProperty(g))&&!(C&&C.get)&&(e=Jg(I,g,e)())}return lA(e)?sn(e):e},has(A,g){return g===Ng||g===IA||g===$A||g===vA||g==="__proto__"?!0:(this.get(A,g,A),g in A)},set(){return!0},deleteProperty(){return!0},ownKeys:gB,getOwnPropertyDescriptor:AB};function $(A,g,n,I=!1){if(!I&&A[g]===n)return;const B=A[g],e=A.length;n===void 0?delete A[g]:A[g]=n;let C=Rg(A),Q;(Q=Jg(C,g,B))&&Q.$(()=>n),Array.isArray(A)&&A.length!==e&&(Q=Jg(C,"length",e))&&Q.$(A.length),(Q=C._)&&Q.$()}function cn(A,g){const n=Object.keys(g);for(let I=0;I<n.length;I+=1){const B=n[I];$(A,B,g[B])}}function IB(A,g){if(typeof g=="function"&&(g=g(A)),g=FA(g),Array.isArray(g)){if(A===g)return;let n=0,I=g.length;for(;n<I;n++){const B=g[n];A[n]!==B&&$(A,n,B)}$(A,"length",I)}else cn(A,g)}function HA(A,g,n=[]){let I,B=A;if(g.length>1){I=g.shift();const C=typeof I,Q=Array.isArray(A);if(Array.isArray(I)){for(let t=0;t<I.length;t++)HA(A,[I[t]].concat(g),n);return}else if(Q&&C==="function"){for(let t=0;t<A.length;t++)I(A[t],t)&&HA(A,[t].concat(g),n);return}else if(Q&&C==="object"){const{from:t=0,to:E=A.length-1,by:i=1}=I;for(let o=t;o<=E;o+=i)HA(A,[o].concat(g),n);return}else if(g.length>1){HA(A[I],g,[I].concat(n));return}B=A[I],n=[I].concat(n)}let e=g[0];typeof e=="function"&&(e=e(B,n),e===B)||I===void 0&&e==null||(e=FA(e),I===void 0||lA(B)&&lA(e)&&!Array.isArray(e)?cn(B,e):$(A,I,e))}function wn(...[A,g]){const n=FA(A||{}),I=Array.isArray(n),B=sn(n);function e(...C){gA(()=>{I&&C.length===1?IB(n,C[0]):HA(n,C)})}return[B,e]}const Sg=Symbol("store-root");function qA(A,g,n,I,B){const e=g[n];if(A===e)return;if(!lA(A)||!lA(e)||B&&A[B]!==e[B]){if(A!==e){if(n===Sg)return A;$(g,n,A)}return}if(Array.isArray(A)){if(A.length&&e.length&&(!I||B&&A[0]&&A[0][B]!=null)){let t,E,i,o,a,r,l,w;for(i=0,o=Math.min(e.length,A.length);i<o&&(e[i]===A[i]||B&&e[i]&&A[i]&&e[i][B]===A[i][B]);i++)qA(A[i],e,i,I,B);const f=new Array(A.length),s=new Map;for(o=e.length-1,a=A.length-1;o>=i&&a>=i&&(e[o]===A[a]||B&&e[i]&&A[i]&&e[o][B]===A[a][B]);o--,a--)f[a]=e[o];if(i>a||i>o){for(E=i;E<=a;E++)$(e,E,A[E]);for(;E<A.length;E++)$(e,E,f[E]),qA(A[E],e,E,I,B);e.length>A.length&&$(e,"length",A.length);return}for(l=new Array(a+1),E=a;E>=i;E--)r=A[E],w=B&&r?r[B]:r,t=s.get(w),l[E]=t===void 0?-1:t,s.set(w,E);for(t=i;t<=o;t++)r=e[t],w=B&&r?r[B]:r,E=s.get(w),E!==void 0&&E!==-1&&(f[E]=e[t],E=l[E],s.set(w,E));for(E=i;E<A.length;E++)E in f?($(e,E,f[E]),qA(A[E],e,E,I,B)):$(e,E,A[E])}else for(let t=0,E=A.length;t<E;t++)qA(A[t],e,t,I,B);e.length>A.length&&$(e,"length",A.length);return}const C=Object.keys(A);for(let t=0,E=C.length;t<E;t++)qA(A[C[t]],e,C[t],I,B);const Q=Object.keys(e);for(let t=0,E=Q.length;t<E;t++)A[Q[t]]===void 0&&$(e,Q[t],void 0)}function dn(A,g={}){const{merge:n,key:I="id"}=g,B=FA(A);return e=>{if(!lA(e)||!lA(B))return B;const C=qA(B,{[Sg]:e},Sg,n,I);return C===void 0?e:C}}const BB=W("<span></span>");var eB=A=>{const g=J(()=>{if(A.text.length==1){const e=A.text.codePointAt(0);if(e>=9600&&e<=9631||e==57520||e==57522)return e}}),n=J(()=>g()?" ":A.text),I=J(()=>CB(A.pen,A.offset,A.width)),B=J(()=>QB(A.pen,g(),A.extraClass));return(()=>{const e=BB.cloneNode(!0);return O(e,n),AA(C=>{const Q=B(),t=I();return Q!==C._v$&&rn(e,C._v$=Q),C._v$2=bA(e,t,C._v$2),C},{_v$:void 0,_v$2:void 0}),e})()};function QB(A,g,n){const I=Dn(A.get("fg"),A.get("bold"),"fg-"),B=Dn(A.get("bg"),!1,"bg-");let e=n??"";return g!==void 0&&(e+=` cp-${g.toString(16)}`),I&&(e+=" "+I),B&&(e+=" "+B),A.has("bold")&&(e+=" ap-bright"),A.has("faint")&&(e+=" ap-faint"),A.has("italic")&&(e+=" ap-italic"),A.has("underline")&&(e+=" ap-underline"),A.has("blink")&&(e+=" ap-blink"),A.get("inverse")&&(e+=" ap-inverse"),e}function Dn(A,g,n){if(typeof A=="number")return g&&A<8&&(A+=8),`${n}${A}`}function CB(A,g,n){const I=A.get("fg"),B=A.get("bg");let e={"--offset":g,width:`${n+.01}ch`};return typeof I=="string"&&(e["--fg"]=I),typeof B=="string"&&(e["--bg"]=B),e}const tB=W('<span class="ap-line" role="paragraph"></span>');var EB=A=>{const g=()=>{if(typeof A.cursor=="number"){const n=[];let I=0,B=0;for(;B<A.segments.length&&I+A.segments[B].text.length-1<A.cursor;){const e=A.segments[B];n.push(e),I+=e.text.length,B++}if(B<A.segments.length){const e=A.segments[B],C=A.cursor-I;for(C>0&&n.push({...e,text:e.text.substring(0,C)}),n.push({...e,text:e.text[C],offset:e.offset+C,extraClass:"ap-cursor"}),C<e.text.length-1&&n.push({...e,text:e.text.substring(C+1),offset:e.offset+C+1}),B++;B<A.segments.length;){const Q=A.segments[B];n.push(Q),B++}}return n}else return A.segments};return(()=>{const n=tB.cloneNode(!0);return O(n,q(XI,{get each(){return g()},children:I=>q(eB,WI(I))})),n})()};const iB=W('<pre class="ap-terminal" aria-live="polite" tabindex="0"></pre>');var hn=A=>{const g=()=>A.lineHeight??1.3333333333,n=J(()=>({width:`${A.cols}ch`,height:`${g()*A.rows}em`,"font-size":`${(A.scale||1)*100}%`,"font-family":A.fontFamily,"--term-line-height":`${g()}em`,"--term-cols":A.cols})),I=J(()=>A.cursor?.[0]),B=J(()=>A.cursor?.[1]);return(()=>{const e=iB.cloneNode(!0),C=A.ref;return typeof C=="function"?ig(C,e):A.ref=e,O(e,q(tn,{get each(){return A.lines},children:(Q,t)=>q(EB,{get segments(){return Q.segments},get cursor(){return J(()=>t()===B())()?I():null}})})),AA(Q=>{const t=!!(A.blink||A.cursorHold),E=!!A.blink,i=n();return t!==Q._v$&&e.classList.toggle("ap-cursor-on",Q._v$=t),E!==Q._v$2&&e.classList.toggle("ap-blink",Q._v$2=E),Q._v$3=bA(e,i,Q._v$3),Q},{_v$:void 0,_v$2:void 0,_v$3:void 0}),e})()};const oB=W('<svg version="1.1" viewBox="0 0 12 12" class="ap-icon" aria-label="Pause" role="button"><path d="M1,0 L4,0 L4,12 L1,12 Z"></path><path d="M8,0 L11,0 L11,12 L8,12 Z"></path></svg>'),aB=W('<svg version="1.1" viewBox="0 0 12 12" class="ap-icon" aria-label="Play" role="button"><path d="M1,0 L11,6 L1,12 Z"></path></svg>'),rB=W('<span class="ap-button ap-playback-button" tabindex="0"></span>'),VB=W('<span class="ap-bar"><span class="ap-gutter ap-gutter-empty"></span><span class="ap-gutter ap-gutter-full"></span></span>'),sB=W('<div class="ap-control-bar"><span class="ap-timer" aria-readonly="true" role="textbox" tabindex="0"><span class="ap-time-elapsed"></span><span class="ap-time-remaining"></span></span><span class="ap-progressbar"></span><span class="ap-button ap-kbd-button ap-tooltip-container" aria-label="Show keyboard shortcuts" role="button" tabindex="0"><svg version="1.1" viewBox="6 8 14 16" class="ap-icon"><path d="M0.938 8.313h22.125c0.5 0 0.938 0.438 0.938 0.938v13.5c0 0.5-0.438 0.938-0.938 0.938h-22.125c-0.5 0-0.938-0.438-0.938-0.938v-13.5c0-0.5 0.438-0.938 0.938-0.938zM1.594 22.063h20.813v-12.156h-20.813v12.156zM3.844 11.188h1.906v1.938h-1.906v-1.938zM7.469 11.188h1.906v1.938h-1.906v-1.938zM11.031 11.188h1.938v1.938h-1.938v-1.938zM14.656 11.188h1.875v1.938h-1.875v-1.938zM18.25 11.188h1.906v1.938h-1.906v-1.938zM5.656 15.031h1.938v1.938h-1.938v-1.938zM9.281 16.969v-1.938h1.906v1.938h-1.906zM12.875 16.969v-1.938h1.906v1.938h-1.906zM18.406 16.969h-1.938v-1.938h1.938v1.938zM16.531 20.781h-9.063v-1.906h9.063v1.906z"></path></svg><span class="ap-tooltip">Keyboard shortcuts (?)</span></span><span class="ap-button ap-fullscreen-button ap-tooltip-container" aria-label="Toggle fullscreen mode" role="button" tabindex="0"><svg version="1.1" viewBox="0 0 12 12" class="ap-icon ap-icon-fullscreen-on"><path d="M12,0 L7,0 L9,2 L7,4 L8,5 L10,3 L12,5 Z"></path><path d="M0,12 L0,7 L2,9 L4,7 L5,8 L3,10 L5,12 Z"></path></svg><svg version="1.1" viewBox="0 0 12 12" class="ap-icon ap-icon-fullscreen-off"><path d="M7,5 L7,0 L9,2 L11,0 L12,1 L10,3 L12,5 Z"></path><path d="M5,7 L0,7 L2,9 L0,11 L1,12 L3,10 L5,12 Z"></path></svg><span class="ap-tooltip">Fullscreen (f)</span></span></div>'),lB=W('<span class="ap-marker-container ap-tooltip-container"><span class="ap-marker"></span><span class="ap-tooltip"></span></span>');function ag(A){let g=Math.floor(A);const n=Math.floor(g/86400);g%=86400;const I=Math.floor(g/3600);g%=3600;const B=Math.floor(g/60);return g%=60,n>0?`${iA(n)}:${iA(I)}:${iA(B)}:${iA(g)}`:I>0?`${iA(I)}:${iA(B)}:${iA(g)}`:`${iA(B)}:${iA(g)}`}function iA(A){return A<10?`0${A}`:A.toString()}var fB=A=>{const g=s=>d=>{d.preventDefault(),s(d)},n=()=>typeof A.currentTime=="number"?ag(A.currentTime):"--:--",I=()=>typeof A.remainingTime=="number"?"-"+ag(A.remainingTime):n(),B=J(()=>typeof A.duration=="number"?A.markers.filter(s=>s[0]<A.duration):[]),e=s=>`${s[0]/A.duration*100}%`,C=s=>s[1]===""?ag(s[0]):`${ag(s[0])} - ${s[1]}`,Q=s=>typeof A.currentTime=="number"?s[0]<=A.currentTime:!1,t=()=>({transform:`scaleX(${A.progress||0}`}),E=s=>{const d=s.currentTarget.offsetWidth,u=s.currentTarget.getBoundingClientRect(),F=s.clientX-u.left;return`${Math.max(0,F/d)*100}%`},[i,o]=_(!1),a=un(A.onSeekClick,50),r=s=>{s._marker||s.altKey||s.shiftKey||s.metaKey||s.ctrlKey||s.button!==0||(o(!0),A.onSeekClick(E(s)))},l=s=>g(()=>{A.onSeekClick({marker:s})}),w=s=>{s.altKey||s.shiftKey||s.metaKey||s.ctrlKey||i()&&a(E(s))},f=()=>{o(!1)};return document.addEventListener("mouseup",f),ng(()=>{document.removeEventListener("mouseup",f)}),(()=>{const s=sB.cloneNode(!0),d=s.firstChild,u=d.firstChild,F=u.nextSibling,m=d.nextSibling,Y=m.nextSibling,K=Y.nextSibling,M=A.ref;return typeof M=="function"?ig(M,s):A.ref=s,O(s,q(tg,{get when(){return A.isPausable},get children(){const b=rB.cloneNode(!0);return kA(b,"click",g(A.onPlayClick)),O(b,q(En,{get children(){return[q(uA,{get when(){return A.isPlaying},get children(){return oB.cloneNode(!0)}}),q(uA,{get when(){return!A.isPlaying},get children(){return aB.cloneNode(!0)}})]}})),b}}),d),O(u,n),O(F,I),O(m,q(tg,{get when(){return typeof A.progress=="number"||A.isSeekable},get children(){const b=VB.cloneNode(!0),y=b.firstChild,X=y.nextSibling;return b.$$mousemove=w,b.$$mousedown=r,O(b,q(tn,{get each(){return B()},children:(L,v)=>(()=>{const z=lB.cloneNode(!0),oA=z.firstChild,H=oA.nextSibling;return z.$$mousedown=j=>{j._marker=!0},kA(z,"click",l(v())),O(H,()=>C(L)),AA(j=>{const dA=e(L),aA=!!Q(L);return dA!==j._v$&&z.style.setProperty("left",j._v$=dA),aA!==j._v$2&&oA.classList.toggle("ap-marker-past",j._v$2=aA),j},{_v$:void 0,_v$2:void 0}),z})()}),null),AA(L=>bA(X,t(),L)),b}})),kA(Y,"click",g(A.onHelpClick)),kA(K,"click",g(A.onFullscreenClick)),AA(()=>s.classList.toggle("ap-seekable",!!A.isSeekable)),s})()};Eg(["click","mousedown","mousemove"]);const cB=W('<div class="ap-overlay ap-overlay-error"><span>\u{1F4A5}</span></div>');var wB=A=>cB.cloneNode(!0);const dB=W('<div class="ap-overlay ap-overlay-loading"><span class="ap-loader"></span></div>');var DB=A=>dB.cloneNode(!0);const hB=W('<div class="ap-overlay ap-overlay-info"><span></span></div>');var pB=A=>{const g=()=>({"font-family":A.fontFamily});return(()=>{const n=hB.cloneNode(!0),I=n.firstChild;return O(I,()=>A.message),AA(B=>bA(I,g(),B)),n})()};const yB=W('<div class="ap-overlay ap-overlay-start"><div class="ap-play-button"><div><span><svg version="1.1" viewBox="0 0 1000.0 1000.0" class="ap-icon"><defs><mask id="small-triangle-mask"><rect width="100%" height="100%" fill="white"></rect><polygon points="700.0 500.0, 400.00000000000006 326.7949192431122, 399.9999999999999 673.2050807568877" fill="black"></polygon></mask></defs><polygon points="1000.0 500.0, 250.0000000000001 66.98729810778059, 249.99999999999977 933.0127018922192" mask="url(#small-triangle-mask)" fill="white" class="ap-play-btn-fill"></polygon><polyline points="673.2050807568878 400.0, 326.7949192431123 600.0" stroke="white" stroke-width="90" class="ap-play-btn-stroke"></polyline></svg></span></div></div></div>');var mB=A=>{const g=n=>I=>{I.preventDefault(),n(I)};return(()=>{const n=yB.cloneNode(!0);return kA(n,"click",g(A.onClick)),n})()};Eg(["click"]);const uB=W('<div class="ap-overlay ap-overlay-help"><div><div><p>Keyboard shortcuts</p><ul><li><kbd>space</kbd> - pause / resume</li><li><kbd>f</kbd> - toggle fullscreen mode</li><li><kbd>\u2190</kbd> / <kbd>\u2192</kbd> - rewind / fast-forward by 5 seconds</li><li><kbd>Shift</kbd> + <kbd>\u2190</kbd> / <kbd>\u2192</kbd> - rewind / fast-forward by 10%</li><li><kbd>[</kbd> / <kbd>]</kbd> - jump to the previous / next marker</li><li><kbd>0</kbd>, <kbd>1</kbd>, <kbd>2</kbd> ... <kbd>9</kbd> - jump to 0%, 10%, 20% ... 90%</li><li><kbd>,</kbd> / <kbd>.</kbd> - step back / forward, a frame at a time (when paused)</li><li><kbd>?</kbd> - toggle this help popup</li></ul></div></div></div>');var kB=A=>{const g=()=>({"font-family":A.fontFamily}),n=I=>B=>{B.preventDefault(),I(B)};return(()=>{const I=uB.cloneNode(!0),B=I.firstChild;return kA(I,"click",n(A.onClose)),B.$$click=e=>{e.stopPropagation()},AA(e=>bA(I,g(),e)),I})()};Eg(["click"]);const bB=W('<div class="ap-wrapper" tabindex="-1"><div></div></div>'),GB=32;var FB=A=>{const g=A.logger,n=A.core,I=A.autoPlay,[B,e]=wn({lines:[],cursor:void 0,charW:A.charW,charH:A.charH,bordersW:A.bordersW,bordersH:A.bordersH,containerW:0,containerH:0,isPausable:!0,isSeekable:!0,isFullscreen:!1,currentTime:null,remainingTime:null,progress:null,blink:!0,cursorHold:!1}),[C,Q]=_(!1),[t,E]=_(I?null:"start"),[i,o]=_(null),[a,r]=_({cols:A.cols,rows:A.rows},{equals:(V,p)=>V.cols===p.cols&&V.rows===p.rows}),[l,w]=_(void 0),[f,s]=wn([]),[d,u]=_(!1),[F,m]=_(!1),[Y,K]=_(void 0),M=J(()=>a().cols||80),b=J(()=>a().rows||24),y=()=>A.controls===!1?0:GB,X=()=>A.controls===!0||A.controls==="auto"&&d();let L,v,z,oA,H,j,dA,aA,xA;function rg(){hA(),k(),c()}function fA(){N(),h(),D()}function MA(V){gA(()=>{V.rows<a().rows&&e("lines",B.lines.slice(0,V.rows)),r(V)})}function Vg(V){V!==void 0&&!I&&e({lines:V.lines,cursor:V.cursor})}n.addEventListener("init",V=>{let{cols:p,rows:R,duration:Z,theme:U,poster:BA,markers:wg}=V;gA(()=>{MA({cols:p,rows:R}),w(Z),K(U),s(wg),Vg(BA)})}),n.addEventListener("play",()=>{E(null)}),n.addEventListener("playing",()=>{gA(()=>{Q(!0),E(null),rg()})}),n.addEventListener("idle",()=>{gA(()=>{Q(!1),fA()})}),n.addEventListener("loading",()=>{gA(()=>{Q(!1),fA(),E("loader")})}),n.addEventListener("offline",V=>{let{message:p}=V;gA(()=>{Q(!1),fA(),p!==void 0&&(o(p),E("info"))})});let DA=0;n.addEventListener("ended",V=>{let{message:p}=V;gA(()=>{Q(!1),fA(),p!==void 0&&(o(p),E("info"))}),g.debug(`view: render count: ${DA}`)}),n.addEventListener("errored",()=>{E("error")}),n.addEventListener("resize",MA),n.addEventListener("reset",V=>{let{cols:p,rows:R,theme:Z}=V;gA(()=>{MA({cols:p,rows:R}),K(Z),hA()})}),n.addEventListener("seeked",()=>{D()}),n.addEventListener("terminalUpdate",()=>{L===void 0&&(L=requestAnimationFrame(hA))});const TA=()=>{xA=new ResizeObserver(mn(V=>{e({containerW:H.offsetWidth,containerH:H.offsetHeight}),H.dispatchEvent(new CustomEvent("resize",{detail:{el:j}}))},10)),xA.observe(H)};LI(async()=>{g.info("view: mounted"),g.debug("view: font measurements",{charW:B.charW,charH:B.charH}),TA();const{isPausable:V,isSeekable:p,poster:R}=await n.init();gA(()=>{e({isPausable:V,isSeekable:p,containerW:H.offsetWidth,containerH:H.offsetHeight}),Vg(R)}),I&&n.play()}),ng(()=>{n.stop(),N(),h(),xA.disconnect()});const hA=async()=>{const V=await n.getChanges();gA(()=>{V.lines!==void 0&&V.lines.forEach((p,R)=>{e("lines",R,dn(p))}),V.cursor!==void 0&&e("cursor",dn(V.cursor)),e("cursorHold",!0)}),L=void 0,DA+=1},OA=J(()=>{const V=B.charW*M()+B.bordersW,p=B.charH*b()+B.bordersH;let R=A.fit??"width";if(R==="both"||B.isFullscreen){const Z=B.containerW/(B.containerH-y()),U=V/p;Z>U?R="height":R="width"}if(R===!1||R==="none")return{};if(R==="width"){const Z=B.containerW/V;return{scale:Z,width:B.containerW,height:p*Z+y()}}else if(R==="height"){const Z=(B.containerH-y())/p;return{scale:Z,width:V*Z,height:B.containerH}}else throw`unsupported fit mode: ${R}`}),sg=()=>{e("isFullscreen",document.fullscreenElement??document.webkitFullscreenElement)},lg=()=>{B.isFullscreen?(document.exitFullscreen??document.webkitExitFullscreen??(()=>{})).apply(document):(H.requestFullscreen??H.webkitRequestFullscreen??(()=>{})).apply(H)},fg=()=>{F()?m(!1):(n.pause(),m(!0))},Yg=V=>{if(!(V.altKey||V.metaKey||V.ctrlKey)){if(V.key==" ")n.togglePlay();else if(V.key==",")n.step(-1),D();else if(V.key==".")n.step(),D();else if(V.key=="f")lg();else if(V.key=="[")n.seek({marker:"prev"});else if(V.key=="]")n.seek({marker:"next"});else if(V.key.charCodeAt(0)>=48&&V.key.charCodeAt(0)<=57){const p=(V.key.charCodeAt(0)-48)/10;n.seek(`${p*100}%`)}else if(V.key=="?")fg();else if(V.key=="ArrowLeft")V.shiftKey?n.seek("<<<"):n.seek("<<");else if(V.key=="ArrowRight")V.shiftKey?n.seek(">>>"):n.seek(">>");else if(V.key=="Escape")m(!1);else return;V.stopPropagation(),V.preventDefault()}},Ug=()=>{B.isFullscreen&&P(!0)},jA=()=>{B.isFullscreen||P(!1)},c=()=>{z=setInterval(D,100)},h=()=>{clearInterval(z)},D=async()=>{const V=await n.getCurrentTime(),p=await n.getRemainingTime(),R=await n.getProgress();e({currentTime:V,remainingTime:p,progress:R})},k=()=>{oA=setInterval(()=>{e(V=>{const p={blink:!V.blink};return p.blink&&(p.cursorHold=!1),p})},500)},N=()=>{clearInterval(oA),e("blink",!0)},P=V=>{clearTimeout(v),V&&(v=setTimeout(()=>P(!1),2e3)),u(V)},cg=J(()=>{const V=A.theme||"auto/asciinema";return V.slice(0,5)==="auto/"?{name:V.slice(5),colors:Y()}:{name:V}}),NA=()=>{const V={};(A.fit===!1||A.fit==="none")&&A.terminalFontSize!==void 0&&(A.terminalFontSize==="small"?V["font-size"]="12px":A.terminalFontSize==="medium"?V["font-size"]="18px":A.terminalFontSize==="big"?V["font-size"]="24px":V["font-size"]=A.terminalFontSize);const p=OA();p.width!==void 0&&(V.width=`${p.width}px`,V.height=`${p.height}px`);const R=cg().colors;return R!==void 0&&(V["--term-color-foreground"]=R.foreground,V["--term-color-background"]=R.background,R.palette.forEach((Z,U)=>{V[`--term-color-${U}`]=Z})),V},KB=()=>`ap-player asciinema-player-theme-${cg().name}`,vB=()=>OA()?.scale;return(()=>{const V=bB.cloneNode(!0),p=V.firstChild,R=H;typeof R=="function"?ig(R,V):H=V,V.addEventListener("webkitfullscreenchange",sg),V.addEventListener("fullscreenchange",sg),V.$$mousemove=Ug,V.$$keydown=Yg;const Z=j;return typeof Z=="function"?ig(Z,p):j=p,p.$$mousemove=()=>P(!0),p.addEventListener("mouseleave",jA),O(p,q(hn,{get cols(){return M()},get rows(){return b()},get scale(){return vB()},get blink(){return B.blink},get lines(){return B.lines},get cursor(){return B.cursor},get cursorHold(){return B.cursorHold},get fontFamily(){return A.terminalFontFamily},get lineHeight(){return A.terminalLineHeight},ref(U){const BA=dA;typeof BA=="function"?BA(U):dA=U}}),null),O(p,q(tg,{get when(){return A.controls!==!1},get children(){return q(fB,{get duration(){return l()},get currentTime(){return B.currentTime},get remainingTime(){return B.remainingTime},get progress(){return B.progress},markers:f,get isPlaying(){return C()},get isPausable(){return B.isPausable},get isSeekable(){return B.isSeekable},onPlayClick:()=>n.togglePlay(),onFullscreenClick:lg,onHelpClick:fg,onSeekClick:U=>n.seek(U),ref(U){const BA=aA;typeof BA=="function"?BA(U):aA=U}})}}),null),O(p,q(En,{get children(){return[q(uA,{get when(){return t()=="start"},get children(){return q(mB,{onClick:()=>n.play()})}}),q(uA,{get when(){return t()=="loader"},get children(){return q(DB,{})}}),q(uA,{get when(){return t()=="info"},get children(){return q(pB,{get message(){return i()},get fontFamily(){return A.terminalFontFamily}})}}),q(uA,{get when(){return t()=="error"},get children(){return q(wB,{})}})]}}),null),O(p,q(tg,{get when(){return F()},get children(){return q(kB,{get fontFamily(){return A.terminalFontFamily},onClose:()=>m(!1)})}}),null),AA(U=>{const BA=!!X(),wg=KB(),HB=NA();return BA!==U._v$&&V.classList.toggle("ap-hud",U._v$=BA),wg!==U._v$2&&rn(p,U._v$2=wg),U._v$3=bA(p,HB,U._v$3),U},{_v$:void 0,_v$2:void 0,_v$3:void 0}),V})()};Eg(["keydown","mousemove"]);function qB(A,g){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const I=MB(n.terminalFontFamily,n.terminalLineHeight),B={core:A,logger:n.logger,cols:n.cols,rows:n.rows,fit:n.fit,controls:n.controls??"auto",autoPlay:n.autoPlay??n.autoplay,terminalFontSize:n.terminalFontSize,terminalFontFamily:n.terminalFontFamily,terminalLineHeight:n.terminalLineHeight,theme:n.theme,...I};let e;const C=an(()=>(e=q(FB,B),e),g),Q={el:e,dispose:C,getCurrentTime:()=>A.getCurrentTime(),getDuration:()=>A.getDuration(),play:()=>A.play(),pause:()=>A.pause(),seek:t=>A.seek(t)};return Q.addEventListener=(t,E)=>A.addEventListener(t,E.bind(Q)),Q}function MB(A,g){const B=document.createElement("div");B.style.height="0px",B.style.overflow="hidden",B.style.fontSize="15px",document.body.appendChild(B);let e;const C=an(()=>(e=q(hn,{cols:80,rows:24,lineHeight:g,fontFamily:A,lines:[]}),e),B),Q={charW:e.clientWidth/80,charH:e.clientHeight/24,bordersW:e.offsetWidth-e.clientWidth,bordersH:e.offsetHeight-e.clientHeight};return C(),document.body.removeChild(B),Q}const NB=["cols","idleTimeLimit","loop","markers","pauseOnMarkers","poster","preload","rows","speed","startAt"],RB=["autoPlay","autoplay","cols","controls","fit","rows","terminalFontFamily","terminalFontSize","terminalLineHeight","theme"];function JB(A){let g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return{...Object.fromEntries(Object.entries(A).filter(I=>{let[B]=I;return NB.includes(B)})),...g}}function SB(A){let g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return{...Object.fromEntries(Object.entries(A).filter(I=>{let[B]=I;return RB.includes(B)})),...g}}function YB(A,g){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const I=n.logger??new kn,B=new RI(A,JB(n,{logger:I}));return qB(B,g,SB(n,{logger:I}))}let pn=0;const UB=500;function LB(){let A=document.querySelectorAll('article.markdown-body a[href^="https://asciinema.org/a/"]:has(img)');console.log("Found elements:",A.length),A.forEach(async g=>{console.log("Found element:",g.href);try{const n=new URL(g.href);n.search="";const I=n+".cast",B=n+"/iframe",e=g.parentElement;if(e===null)return;console.log("Fetching cast opts:",B),GM_xmlhttpRequest({url:B,method:"GET",onload:C=>{console.log("Fetched cast opts:",B);const Q=JSON.parse(C.responseText.match(/const opts = (\{.*?\});/s)?.[1]??"{}");console.log(Q),e.removeChild(g);const t=e.attachShadow({mode:"open"}),E=document.createElement("div"),i=document.createElement("style"),o=document.createElement("style");o.textContent=`
					:host {
					position: relative;
					z-index: 0;
					`,i.textContent=yn,t.append(o,i,E),YB(I,E,{...Q})}})}catch(n){console.error("Error fetching cast file:",n)}})}new MutationObserver(()=>{const A=Date.now();A-pn>UB&&(pn=A,LB())}).observe(document.body,{childList:!0,subtree:!0,attributes:!1,characterData:!1})})();
